import React from 'react';

const audiences = [
  'Founders who need a real AI strategy, not a trend deck',
  'Executives deciding where AI can create leverage and where it will waste time',
  'Technical leaders trying to turn messy ambition into a system that can actually ship',
];

const offerings = [
  'AI strategy and product direction',
  'System design for AI-enabled products and internal tools',
  'Opportunity filtering: what is worth building, what is noise',
  'Translation between business goals, product decisions, and technical reality',
];

export default function Consulting() {
  return (
    <section id="consulting" className="content-section consulting-section">
      <div className="section-heading gsap-reveal">
        <p className="eyebrow">Consulting</p>
        <h2>The main thing I do.</h2>
      </div>

      <div className="consulting-layout">
        <div className="consulting-panel gsap-reveal">
          <p className="panel-lead">
            You bring the ambition, confusion, or half-built AI initiative. I help turn it into a
            sharper decision, a stronger system, and a plan that survives contact with reality.
          </p>

          <div className="panel-block">
            <h3>Who it&apos;s for</h3>
            <ul className="clean-list">
              {audiences.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="panel-block">
            <h3>What I solve</h3>
            <ul className="clean-list">
              {offerings.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="consulting-side gsap-reveal">
          <div className="side-card">
            <p className="eyebrow">Working together</p>
            <h3>Clear, direct, and useful.</h3>
            <p>
              Usually that means a small number of high-value conversations, architecture reviews,
              product feedback, written recommendations, and ongoing advisory support where needed.
            </p>
            <p>
              I am most helpful when the stakes are real and the room needs someone who can think
              technically without losing the human point of the work.
            </p>
            <a className="button button-primary" href="#contact">
              Inquire about consulting
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
