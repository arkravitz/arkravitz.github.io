import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <span className="footer-brand">A Kravitz</span>
        <p>AI systems, music, and things that actually matter.</p>
      </div>

      <div className="footer-meta">
        <span>Consulting-first</span>
        <span>&copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
