import React from 'react';

const platforms = [
  { name: 'Instagram', url: 'https://www.instagram.com/akravitzmusic', meta: 'Visual journal' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@akravitzmusic', meta: 'Short-form clips' },
  { name: 'Spotify', url: 'https://open.spotify.com/artist/42l1bkQwYGfGjIEj2LMGEn', meta: 'Artist profile' },
  { name: 'YouTube', url: 'https://www.youtube.com/@akravitzmusic', meta: 'Videos and releases' },
  { name: 'YouTube Music', url: 'https://music.youtube.com/channel/UCJ8tS4lATNUpJiFM7MWbycg', meta: 'Streaming' },
  { name: 'Apple Music', url: 'https://music.apple.com/us/artist/a-kravitz/404363729', meta: 'Catalog' },
  { name: 'SoundCloud', url: 'https://soundcloud.com/akravitzmusic', meta: 'Archive and releases' },
];

export default function Music() {
  return (
    <section id="music" className="content-section music-section">
      <div className="section-heading gsap-reveal">
        <p className="eyebrow">Music and Socials</p>
        <h2>The music stays. Now it actually shows up here.</h2>
      </div>

      <div className="music-layout">
        <div className="music-copy gsap-reveal">
          <p>
            I do not think the serious work and the creative work need to live on separate planets.
            The music matters because it shows the same thing I care about in consulting: honesty,
            signal, and a willingness to make something real instead of polished nonsense.
          </p>
          <p>
            It also gives people a fast read on whether they are dealing with a generic AI operator
            or an actual person with taste, range, and some public proof that people pay attention.
          </p>

          <div className="music-embed">
            <p className="eyebrow">Listen</p>
            <iframe
              title="A Kravitz on Spotify"
              src="https://open.spotify.com/embed/artist/42l1bkQwYGfGjIEj2LMGEn?utm_source=generator"
              width="100%"
              height="352"
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
          </div>
        </div>

        <div className="music-card gsap-reveal">
          <div className="music-card-header">
            <span className="eyebrow">Elsewhere</span>
            <p>Listen, watch, or follow along</p>
          </div>

          <div className="platform-list">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="platform-link"
              >
                <span>{platform.name}</span>
                <span>{platform.meta}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
