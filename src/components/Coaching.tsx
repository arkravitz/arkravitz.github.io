import React from 'react';

export default function Coaching() {
  return (
    <section id="coaching" className="content-section split-section">
      <div className="section-heading gsap-reveal">
        <p className="eyebrow">1:1 AI Coaching</p>
        <h2>For people who want to understand AI deeply or build something themselves.</h2>
      </div>

      <div className="split-grid">
        <div className="gsap-reveal">
          <p>
            This is for curious builders, independent operators, and thoughtful people who do not
            just want AI answers handed to them. They want to really get it.
          </p>
        </div>
        <div className="gsap-reveal">
          <p>
            We can work through fundamentals, product ideas, prototypes, prompt and workflow
            design, or how to make sense of the current landscape without drowning in hype.
          </p>
          <a className="text-link" href="#contact">
            Ask about coaching
          </a>
        </div>
      </div>
    </section>
  );
}
