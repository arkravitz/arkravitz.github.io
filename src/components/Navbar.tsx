import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out rounded-full px-6 py-3 flex items-center gap-8 ${
        scrolled ? 'glass-panel bg-digital-surface/80' : 'bg-transparent'
      }`}
    >
      <div className="font-heading font-bold text-lg tracking-wider whitespace-nowrap">
        A KRAVITZ
      </div>
      <div className="hidden md:flex items-center gap-6 text-sm font-medium tracking-wide opacity-80">
        <a href="#socials" className="hover:text-digital-accent transition-colors">Socials</a>
        <a href="#music" className="hover:text-digital-accent transition-colors">Music</a>
        <a href="#about" className="hover:text-digital-accent transition-colors">About</a>
        <a href="#join" className="hover:text-digital-accent transition-colors">Join</a>
      </div>
    </nav>
  );
}
