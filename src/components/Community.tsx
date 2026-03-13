import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Community() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbya1P1ji0X_lsZj7pXsK-i56UUJOfgCGtk98uI1C0DmGdqzHpJUcBLqrN_qgUInjDk/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({ name, email }),
      });
      
      if (response.ok || response.type === 'opaque') {
        setStatus('success');
        setName('');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="join" className="w-full max-w-4xl mx-auto px-6 py-24 md:py-32">
      <div className="gsap-reveal glass-panel rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-digital-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-digital-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Join the weird part of the internet.
          </h2>
          <p className="font-drama italic text-xl md:text-2xl opacity-80 mb-12">
            I won't spam you.<br />But I will overshare 🤝
          </p>

          {status === 'success' ? (
            <div className="p-6 bg-digital-surface/50 rounded-2xl border border-digital-accent/30">
              <p className="font-mono text-digital-accent tracking-widest uppercase">
                Transmission Received. Welcome.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 bg-digital-surface/50 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-digital-accent/50 transition-colors font-mono text-sm"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-digital-surface/50 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-digital-accent/50 transition-colors font-mono text-sm"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="magnetic-btn bg-digital-accent text-white rounded-full px-8 py-4 flex items-center justify-center gap-2 font-bold tracking-wide hover:bg-white hover:text-digital-bg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending...' : (
                  <>
                    Join <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
          {status === 'error' && (
            <p className="text-red-400 mt-4 font-mono text-xs">
              Something went wrong. The void is not responding. Try again.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
