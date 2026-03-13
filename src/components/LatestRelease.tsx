import React from 'react';
import { Play } from 'lucide-react';

export default function LatestRelease() {
  return (
    <section id="music" className="w-full max-w-6xl mx-auto px-6 py-24 md:py-32">
      <div className="gsap-reveal glass-panel rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 group hover:shadow-[0_0_40px_rgba(255,51,102,0.15)] transition-all duration-700">
        <div className="w-full md:w-1/2 aspect-square rounded-2xl overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-700 ease-out">
          <img
            src="https://images.unsplash.com/photo-1494249465471-5655b7878482?q=80&w=2000&auto=format&fit=crop"
            alt="Better Views Artwork"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-digital-bg/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <a 
              href="https://soundcloud.com/akravitzmusic/better-views?si=d1966ba389b34949b7e8f9d3264e7220&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn w-20 h-20 rounded-full bg-digital-accent flex items-center justify-center pl-1"
            >
              <Play className="w-8 h-8 text-white" fill="currentColor" />
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <span className="font-mono text-xs tracking-widest text-digital-accent uppercase mb-4">
            Latest Release
          </span>
          <h3 className="font-heading font-bold text-4xl md:text-6xl mb-6">
            Better Views
          </h3>
          <p className="font-drama italic text-xl md:text-2xl opacity-80 mb-8 leading-relaxed">
            "In the city of angels, why do my demons get the better views?" <br/><br/>
            A track about trading a paycheck for a passion, drowning in sealed rooms, and the exhausting honesty of chasing a dream.
          </p>
          <a
            href="https://soundcloud.com/akravitzmusic/better-views?si=d1966ba389b34949b7e8f9d3264e7220&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn px-8 py-4 rounded-full bg-digital-text text-digital-bg font-bold tracking-wide hover:bg-digital-accent hover:text-white"
          >
            Listen on SoundCloud
          </a>
        </div>
      </div>
    </section>
  );
}
