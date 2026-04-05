import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-card gsap-reveal">
        <p className="eyebrow">Contact</p>
        <h2>If you are building something meaningful, I&apos;m interested.</h2>
        <p>
          Consulting is the primary focus. Coaching is available selectively. Merch and writing are
          growing around the same core idea: build what matters.
        </p>
        <div className="contact-actions">
          <a
            className="button button-primary"
            href="mailto:hello@akravitzmusic.com?subject=Consulting%20Inquiry"
          >
            Email about consulting
          </a>
          <a
            className="button button-secondary"
            href="mailto:hello@akravitzmusic.com?subject=AI%20Coaching%20Inquiry"
          >
            Email about coaching
          </a>
        </div>
        <p className="contact-note">
          Replace <strong>hello@akravitzmusic.com</strong> with your preferred inbox if needed.
        </p>
      </div>
    </section>
  );
}
