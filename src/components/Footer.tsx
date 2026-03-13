import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-black/50 border-t border-white/5 py-12 px-6 mt-32">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-heading font-bold text-2xl tracking-widest uppercase">
            A KRAVITZ
          </span>
          <span className="font-drama italic text-digital-accent">
            Music to be seen to.
          </span>
        </div>

        <div className="flex items-center gap-3 glass-panel px-6 py-3 rounded-full">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
          <span className="font-mono text-xs tracking-widest uppercase opacity-80">
            System status: emotionally unstable
          </span>
        </div>

        <div className="font-mono text-xs opacity-50 tracking-widest uppercase">
          &copy; {new Date().getFullYear()} A KRAVITZ
        </div>
      </div>
    </footer>
  );
}
