import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Consulting from './components/Consulting';
import Coaching from './components/Coaching';
import Music from './components/Music';
import Merch from './components/Merch';
import Ideas from './components/Ideas';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reveals = gsap.utils.toArray<HTMLElement>('.gsap-reveal');

      reveals.forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          },
        );
      });
    },
    { scope: container },
  );

  return (
    <div ref={container} className="site-shell selection:bg-brand-accent selection:text-brand-ink">
      <div className="ambient-orb ambient-orb-left" aria-hidden="true" />
      <div className="ambient-orb ambient-orb-right" aria-hidden="true" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Consulting />
        <Coaching />
        <Music />
        <Merch />
        <Ideas />
        <Newsletter />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
