import React from 'react';

export default function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow gsap-reveal">AI systems, strategy, and work that means something</p>
          <h1 className="hero-title gsap-reveal">
            I help people build things that actually matter.
          </h1>
          <p className="hero-text gsap-reveal">
            I work with founders, executives, and technical leaders who need clear thinking on AI:
            what to build, what not to build, and how to turn complexity into something useful,
            human, and real.
          </p>

          <div className="hero-actions gsap-reveal">
            <a className="button button-primary" href="#contact">
              Start a conversation
            </a>
            <a className="button button-secondary" href="#consulting">
              See consulting
            </a>
          </div>
        </div>

        <div className="hero-aside gsap-reveal">
          <p className="hero-note">
            Ex-Google. CTO-level operator. Also a musician.
          </p>
          <p className="hero-note">
            I care about systems that work and lives that feel like they belong to the person
            living them.
          </p>
          <div className="hero-pullquote">
            <span>Not interested in AI theater.</span>
            <span>Interested in what holds up in real life.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
