import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[1000px] flex items-center justify-center overflow-hidden" id="hero-section">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-banner.png"
          alt="AuraHaus aesthetic mirror in a moody, luxurious room"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-bg/30 to-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/50 via-transparent to-bg/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-gold uppercase tracking-[0.3em] text-sm sm:text-base font-medium mb-6 animate-fade-up opacity-0 stagger-1">
          ✦ Premium Aesthetic Mirrors ✦
        </p>
        <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] text-text-primary animate-fade-up opacity-0 stagger-2">
          DESIGN YOUR SPACE.
          <br />
          <span className="text-gold-gradient">DEFINE YOUR STYLE.</span>
        </h1>
        <p className="text-text-secondary text-base sm:text-lg md:text-xl mt-6 max-w-xl mx-auto leading-relaxed font-light animate-fade-up opacity-0 stagger-3">
          Handcrafted mirrors that transform ordinary walls into extraordinary statements.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-fade-up opacity-0 stagger-4">
          <Link
            to="/shop"
            className="btn-gold px-10 py-4 rounded-full font-semibold text-sm uppercase tracking-[0.2em] inline-flex items-center gap-2"
            id="hero-cta"
          >
            Shop Now
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            to="/shop?category=Custom+Mirrors"
            className="border border-text-secondary/30 text-text-primary hover:border-gold hover:text-gold px-10 py-4 rounded-full font-semibold text-sm uppercase tracking-[0.2em] transition-all duration-300 inline-flex items-center gap-2"
          >
            Custom Orders
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-text-muted rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
}
