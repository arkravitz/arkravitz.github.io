---
layout: post
title: "Category Theory for Haskell Part 2"
date: "2015-06-09 19:53"
---

Okay, so last time we talked about functors without you even knowing it. This time I'm going to introduce another idea and then tell you what it is when I'm already done explaining it (some people may already know what I'm talking about).

Okay, so we may get a little bit abstract this time, but bear with me. Everyone reading this probably knows about the group of positive integers. Now consider the addition operation. Addition is associative and has an "identity element", 0. Identity element just means if we take any number and add 0, we get the number back.

Because people in category theory are annoying and have their own lingo for everything, they call groups like Integers and Addition Monoids. A monoid is just a category with a single object (in our case a set of integers), a way of combining elements in the set such that (a \* b) \* c = a \* (b \* c) (note that \* is just some operation, not multiplication), and the set contains an element such that a \* ident = a, where ident is the identity element in the group.

Back to addition, we have the numbers 0 through infinity.We know the only thing in the integer set is an integer, check. We know addition is associative, so check there. We also know that anything added to 0 is just the original thing, check, check, check! We have a monoid!

In Haskell defining a set under some operation to be a monoid requires you to instantiate these functions:

```haskell
class Monoid a where
  mempty :: a
  mappend :: a -> a -> a
  mconcat :: [a] -> a
```

The implementation for addition is the following:

```haskell
instance Monoid Integer where
  mempty = 0
  mappend x y = x + y
  mconcat ints = fmap (+) ints
```

We just implemented our first monoid. Exciting, isn't it?

For lists, the implementation is the following:

```haskell
instance Monoid [a] where  
    mempty = []  
    mappend = (++)  
```

Note that mconcat is implemented in terms of mempty and mappend so we don't even have to write it! Wahoo!

If we convert our thinking over to category theory land, a monoid is defined as a 3-tuple $(M, \cdot, e)$, where M is the single set, $\cdot$ is our associative operation, and e is the identity element. We can write out the types of M, $\cdot$ and e like so:


\\[
M \\text{ is a set} \\\\
\\cdot : M \\cdot M \\rightarrow M  \\\\
e : 1 \\rightarrow M
\\]

The 1 -> M just means that e is the unit value in the category.

Again, these types have to satisfy the following:

\\[
\\forall x, y, z \\in M. \\space  x \\cdot (y \\cdot z) = (x \\cdot y) \cdot z \\\\
\\forall x \\in M. \\space e \\cdot x = x = x \\cdot e
\\]

Cool, so monoids aren't so bad. But then a question arises. Let's say we have a type inside another type, like the maybe we looked at before:

```haskell
f :: a -> (Maybe a)
f 0 = Nothing
f x = Full x
```

Okay that's fine. It's a stupid function that looks like it does nothing. And it does, but what's interesting about it is if we try to apply f to something twice:

```haskell
f (f 5) = f (Full 5) -- ERROR!!!!!
```

We can't compose this function because we're trying to apply the function again to a type that's not an Int in this case. Well, what if we pretend for a second we have the same operations that monoids have, just for a second. So that means we have:

```haskell
join Full (Full x) = Full x
-- and
(Full x) * (Full y) = Full (x*y)
-- and
pure x = Full x
```

That's not necessarily legal haskell, but the point is, Maybe is a monoid! Cool, so what does that get us? Let's try to invent some way of letting us do composition with maybe:

```haskell
g <=< f = \x -> join ((fmap g) (f x))
```

Note that anything that we can do this with already is a Functor (something talked about in the previous post), we we can call fmap on these functions. Let's break down what happens when we call (g <=< f) using the function f defined earlier:

```haskell
(f <=< f) 5 = join ((fmap g) (Full 5)) = join (Full Full 5) = Full 5
```

Success!!!!! We've successfully redefined a monad! Yes, that's the scary word I've been avoiding. We've defined how to compose functions that output "wrapped" values. That's pretty neat, but how is that useful? Well, for example, some functions return the type IO String. Let's see a simple example:

```haskell
module Main where
import System.Environment

main :: IO ()
main = (\x -> putStrLn ("Hello " (x !! 0))) <=< getArgs
```

In haskell, the syntax \\x -> ... defines an unnamed function. The notation comes from lambda calculus, which you shouldn't worry about, but just know if you squint enough and say "lambda" really loudly when you look at \\, you'll see what I mean. What we've done here is defined a way of composing two functions that output some wrapped value. Pretty neat! We kept our pure functional programming style, while being able to have some effect happen in the program.

I'm actively rewriting these posts because I'm working on my writing. I know a lot of it is confusing now, but think of it as a placeholder for more to come. Hope you enjoy the draft!
