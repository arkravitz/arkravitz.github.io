import React from 'react';

export default function About() {
  return (
    <section id="about" className="content-section">
      <div className="section-heading gsap-reveal">
        <p className="eyebrow">About</p>
        <h2>Technical depth without the usual performance.</h2>
      </div>

      <div className="two-column-copy">
        <p className="gsap-reveal">
          I have spent years building and leading complex AI and software systems at a high level.
          That part is true, and it matters. But I am less interested in impressive abstractions
          than in whether something helps an actual human being do something better.
        </p>
        <p className="gsap-reveal">
          A lot of smart people are building fast and still feel off. The company is growing, the
          roadmap is full, the demos look good, and something underneath it feels thin. I work well
          in that territory. I can help clarify the system, the product, and sometimes the reason
          you are building it in the first place.
        </p>
      </div>
    </section>
  );
}
