import React from 'react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop"
          alt="A KRAVITZ mood"
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-digital-bg/20 via-digital-bg/60 to-digital-bg"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mt-20">
        <h1 className="gsap-reveal font-heading font-bold text-5xl md:text-8xl tracking-tight mb-4 text-digital-text">
          A KRAVITZ
        </h1>
        <p className="gsap-reveal font-mono text-sm md:text-base tracking-widest uppercase opacity-70 mb-2">
          makes
        </p>
        <h2 className="gsap-reveal font-drama italic text-3xl md:text-5xl lg:text-6xl leading-tight text-digital-accent mb-12">
          Music to be seen to.
        </h2>

        <div className="gsap-reveal flex flex-col sm:flex-row items-center gap-6">
          <a
            href="#music"
            className="magnetic-btn px-8 py-4 rounded-full bg-digital-text text-digital-bg font-bold tracking-wide hover:bg-digital-accent hover:text-white"
          >
            Listen
          </a>
          <a
            href="#join"
            className="magnetic-btn px-8 py-4 rounded-full glass-panel font-bold tracking-wide hover:bg-white/10"
          >
            Join the list
          </a>
        </div>
      </div>
    </section>
  );
}
