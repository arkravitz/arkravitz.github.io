import React from 'react';

const merchItems = [
  'Shirts for people who are tired of pretending every optimization is progress',
  'Small-run objects with a bit of edge, humor, and emotional honesty',
  'Placeholder for now, but the tone is intentional',
];

export default function Merch() {
  return (
    <section id="merch" className="content-section merch-section">
      <div className="section-heading gsap-reveal">
        <p className="eyebrow">Merch</p>
        <h2>Thoughtful, slightly ironic, not dead inside.</h2>
      </div>

      <div className="merch-layout gsap-reveal">
        <div className="merch-copy">
          <p>
            The merch belongs here because it comes from the same place as the consulting and the
            music: a refusal to live entirely inside polished performance. It is a smaller,
            lighter extension of the same identity.
          </p>
          <a className="text-link" href="#contact">
            Ask for early access
          </a>
        </div>

        <ul className="clean-list merch-list">
          {merchItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
