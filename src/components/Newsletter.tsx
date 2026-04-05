import React, { useState } from 'react';

export default function Newsletter() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbya1P1ji0X_lsZj7pXsK-i56UUJOfgCGtk98uI1C0DmGdqzHpJUcBLqrN_qgUInjDk/exec',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify({ name, email }),
        },
      );

      if (response.ok || response.type === 'opaque') {
        setStatus('success');
        setName('');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="newsletter" className="content-section newsletter-section">
      <div className="newsletter-card gsap-reveal">
        <div className="section-heading newsletter-heading">
          <p className="eyebrow">Mailing List</p>
          <h2>Join the part of the internet that still has a pulse.</h2>
        </div>

        <p className="newsletter-copy">
          Occasional notes on AI, music, ideas, and whatever feels true enough to send. No fake
          urgency. No funnel-speak. Just updates when there is actually something worth sending.
        </p>

        {status === 'success' ? (
          <div className="newsletter-success">
            <p>You&apos;re in. I&apos;ll write when I actually have something worth sending.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <button type="submit" className="button button-primary" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending...' : 'Join the list'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="newsletter-error">Something broke. Try again in a minute.</p>
        )}
      </div>
    </section>
  );
}
