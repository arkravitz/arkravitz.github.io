import React from 'react';

export default function Ideas() {
  return (
    <section id="ideas" className="content-section split-section ideas-section">
      <div className="section-heading gsap-reveal">
        <p className="eyebrow">Writing and Ideas</p>
        <h2>A place for essays, notes, and unfinished thoughts that are still worth saying.</h2>
      </div>

      <div className="split-grid">
        <div className="gsap-reveal">
          <p>
            This section can grow into writing on AI, systems, creativity, meaning, and the weird
            emotional texture of building ambitious things.
          </p>
        </div>
        <div className="gsap-reveal">
          <p>
            For now, it signals the shape of the site: not just services, but a mind and point of
            view behind them.
          </p>
        </div>
      </div>
    </section>
  );
}
