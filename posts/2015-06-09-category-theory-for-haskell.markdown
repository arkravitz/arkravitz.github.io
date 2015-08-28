---
layout: post
title: "Category Theory For Haskell Part 1"
date: "2015-06-09 15:34"
---

I'm learning Haskell right now and when I started had quite a hard time understanding all of the hullabaloo about Haskell and category theory. I mean, what the hell is a functor, and what does it have to do with me learning to program better. It turns out that category theory is actually quite simple, albeit abstract.

The whole idea behind category theory boils down to having a group of objects, and morphisms (or ways to get between those objects). In Haskell, the category we're interested in is Haskell types, and the morphisms are just the functions between those types. For example:

```haskell
greaterThan4 :: Int -> Bool
greaterThan4 x = x > 4
```

This is a morphism between the Int object (or type) and the Bool object (or type). Note that this isn't the haskelliest way to write that function, nor is it a function that does anything remotely useful, but it's useful for understanding functions in haskell. That's all well and good, but what if you have a type that contains another type, or something like this:

```haskell
data Maybe a = Full a | Nothing
```

In Haskell, lower-case character in a datatype (here we use "a"), means that it can be any type. The above construction defines the "Maybe" datatype with 2 constructors or actual values that type can have: a Nothing (which is sometimes used for error handling) or a "Full a" which is used to say that something is actually there. For now, let's assume we set "a" to be the type Int:

```haskell
data Maybe Int = Full Int | Nothing
```

Okay, so this "object" is not quite an integer, but it's also a type that depends on some other type. In Haskell we would say it has kind (\* -> \*), meaning that it takes a type and returns a new type. Cool, let's see Maybe in action:

```haskell
intToMaybe :: Int -> Maybe Int
intToMaybe x = case x of
  0 -> Nothing
  otherwise -> Full x
```

This function just returns a Nothing if the x passed in is 0 and a "Full x" if the x passed in is anything else. Sweet, we just defined a new object in the haskell category of types, and you didn't even know it! (In actuality, this type is already defined in the Prelude, which is the thing that is imported by default in the language, but it was fun nonetheless).

Okay, now say we've written some pretty sweet functions that work on integers, one of them being:

```haskell
addOne :: Int -> Int
addOne x = 1 + x
```

Sweet function right? Well, say we have a whole library of these functions. We want to apply this function to anything of type "Maybe Int" because we worked so hard to define it. Well addOne (Full 1) seems impossible because (Full 1) has the type (Maybe Int), and not Int. We can't apply the function! But can't we take the value inside and apply it there? What about applying addOne to a Nothing? Well, let's define a new function that can do that.

```haskell
addOneMaybe :: (Maybe Int) -> (Maybe Int)
addOneMaybe x = case x of
  Full x -> Full (addOne x)
  Nothing -> Nothing
```

WUT? We just rewrote a whole bunch of code to apply our function to our new type. Shouldn't there be an easier way? Well, in fact there is:

```haskell
fmap addOne (Full 1) -- returns Full 2
```

What's that fmap thing and how did it work its magic. Well, let's first look at the type of fmap in ghci (haskell's interactive repl).

```haskell
λ: :t fmap
fmap :: Functor f => (a -> b) -> f a -> f b
```

Huh? What's that Functor thing? Let's ignore that for now and just look at what fmap does. It takes a function from any type "a" to any type "b". It then takes in an "f a", which in out case is a "Maybe a", and returns a "Maybe b" (a maybe containing the type b). Cool, so it's a function that looks like it takes the value "inside" of the "f" datatype applies the function you gave it as the first argument. Neato! This is exactly what we wanted. fmap in our case resolves to this type:

```haskell
fmap :: (Int -> Int) -> Maybe Int -> Maybe Int
```

We're just applying the function to the value inside of Maybe! That's it. Now guess what, that's all a functor does. It takes a morphism (or function) in one category, in our case (Int -> Int) and applies it to something in another category, in our case (Maybe Int). All you have to do to get this wonderful functionality is implement fmap, which in haskell is easy for Maybe:

```haskell
instance Functor Maybe where
  fmap f (Just x) = Just (f x)
  fmap _ Nothing  = Nothing
```

Wahoo! We know what a functor is, and I avoided using the term functor the entire time. Wonderful isn't it. Apply a function to something inside a typeclass, while still maintaining that the value and the "wrapper" are different classes i.e. "Maybe Int" is not the same type as "Int". Next time we'll talk about applicative functors and their power. A few more examples of functors are shown below for completeness.

The tree functor:

```haskell
instance Functor Tree where
  fmap f (Leaf x)       = Leaf   (f x)
  fmap f (Branch t1 t2) = Branch (fmap f t1) (fmap f t2)
```

The list functor:

```haskell
instance  Functor []  where
    fmap = map
    where
      map _ [] = []  
      map f (x:xs) = f x : map f xs  
```

See you next time!
