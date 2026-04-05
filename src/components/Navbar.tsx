import React, { useEffect, useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#consulting', label: 'Consulting' },
  { href: '#coaching', label: 'Coaching' },
  { href: '#music', label: 'Music' },
  { href: '#merch', label: 'Merch' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="site-nav-wrap">
      <div className={`site-nav ${scrolled ? 'site-nav-scrolled' : ''}`}>
        <a href="#top" className="brand-mark" aria-label="Back to top">
          A Kravitz
        </a>

        <div className="site-nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
