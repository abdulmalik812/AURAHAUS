import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[760px] lg:min-h-[820px] flex items-center overflow-hidden" id="hero-section">
      {/* ── Ambient glow blobs (z-index 1 & 2 via CSS classes) ── */}
      <div className="hero-glow-cyan" aria-hidden="true" />
      <div className="hero-glow-amber" aria-hidden="true" />
      {/* ── Fine grid overlay (z-index 2, fades at bottom) ── */}
      <div className="hero-grid" aria-hidden="true" />

      {/* Background Image (z-index 0, below glows) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-banner.png"
          alt="AuraHaus aesthetic mirror in a moody, luxurious room"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlays so image reads under glows */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf7f1]/45 via-transparent to-[#faf7f1]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf7f1]/95 via-[#faf7f1]/55 to-transparent" />
      </div>

      {/* Content — z-10 sits above all background layers */}
      <div className="hero-content relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-24">
        <div className="max-w-2xl text-left">
        <p className="label-eyebrow mb-6 animate-fade-up opacity-0 stagger-1">
          Handmade mirrors, thoughtfully made in India
        </p>
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-text-primary normal-case animate-fade-up opacity-0 stagger-2">
          A beautiful room
          <br />
          begins with a <em className="text-gold-gradient">reflection.</em>
        </h1>
        <p className="text-text-secondary text-base sm:text-lg mt-7 max-w-lg leading-relaxed animate-fade-up opacity-0 stagger-3">
          Sculptural mirrors for homes that feel considered, personal, and entirely your own.
        </p>
        <div className="flex flex-col sm:flex-row items-start gap-4 mt-10 animate-fade-up opacity-0 stagger-4">
          <Link
            to="/shop"
            className="btn-primary px-10 py-4 text-sm uppercase tracking-[0.2em] inline-flex items-center gap-2"
            id="hero-cta"
          >
            Explore the collection
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            to="/custom"
            className="btn-secondary px-10 py-4 text-sm uppercase tracking-[0.2em] inline-flex items-center gap-2"
          >
            Create your own
          </Link>
        </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-text-muted rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-cyan rounded-full" />
        </div>
      </div>
    </section>
  );
}
