import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LatestRelease from './components/LatestRelease';
import About from './components/About';
import Community from './components/Community';
import Socials from './components/Socials';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray('section, footer');
    
    sections.forEach((section: any) => {
      const reveals = section.querySelectorAll('.gsap-reveal');
      if (reveals.length === 0) return;

      gsap.fromTo(
        reveals,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, { scope: container });

  return (
    <div ref={container} className="relative w-full min-h-screen selection:bg-digital-accent selection:text-white">
      <div className="noise-overlay"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <Socials />
        <LatestRelease />
        <About />
        <Community />
      </main>

      <Footer />
    </div>
  );
}
