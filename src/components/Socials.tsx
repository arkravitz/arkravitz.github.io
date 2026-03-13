import React from 'react';
import { Instagram, Youtube, Music, Cloud, Smartphone, Radio } from 'lucide-react';

const links = [
  { name: 'TikTok', url: 'https://www.tiktok.com/@akravitzmusic', icon: Smartphone },
  { name: 'Instagram', url: 'https://www.instagram.com/akravitzmusic', icon: Instagram },
  { name: 'YouTube', url: 'https://www.youtube.com/@akravitzmusic', icon: Youtube },
  { name: 'Spotify', url: 'https://open.spotify.com/artist/42l1bkQwYGfGjIEj2LMGEn', icon: Radio },
  { name: 'Apple Music', url: 'https://music.apple.com/us/artist/a-kravitz/404363729', icon: Music },
  { name: 'YouTube Music', url: 'https://music.youtube.com/channel/UCJ8tS4lATNUpJiFM7MWbycg', icon: Youtube },
  { name: 'SoundCloud', url: 'https://soundcloud.com/akravitzmusic', icon: Cloud },
];

export default function Socials() {
  return (
    <section id="socials" className="w-full max-w-6xl mx-auto px-6 py-24 md:py-32">
      <div className="gsap-reveal flex flex-col items-center text-center mb-16">
        <h2 className="font-heading font-bold text-4xl md:text-6xl mb-4">
          Social Gravity Well
        </h2>
        <div className="w-12 h-1 bg-digital-accent rounded-full mb-6"></div>
        <p className="font-mono text-sm tracking-widest uppercase opacity-70">
          Find me in the noise
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {links.map((link, index) => {
          const Icon = link.icon;
          return (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="gsap-reveal group relative flex flex-col items-center justify-center gap-4 p-8 rounded-2xl glass-panel hover:bg-digital-surface-hover hover:border-digital-accent/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,51,102,0.1)]"
            >
              <div className="w-16 h-16 rounded-full bg-digital-surface flex items-center justify-center group-hover:bg-digital-accent group-hover:text-white transition-colors duration-300">
                <Icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <span className="font-heading font-semibold tracking-wide">
                {link.name}
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
