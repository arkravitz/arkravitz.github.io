import React from 'react';

export default function About() {
  return (
    <section id="about" className="w-full min-h-[80vh] flex items-center justify-center px-6 py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-digital-surface/30 to-transparent pointer-events-none"></div>
      
      <div className="gsap-reveal max-w-4xl mx-auto text-center flex flex-col items-center gap-16 relative z-10">
        <p className="font-heading font-medium text-2xl md:text-4xl opacity-60 leading-relaxed">
          Most artists try to sound perfect.
        </p>
        
        <p className="font-drama italic text-4xl md:text-6xl lg:text-7xl text-digital-accent leading-tight">
          I try to tell the truth.<br/>It’s worse for everyone involved.
        </p>
      </div>
    </section>
  );
}
