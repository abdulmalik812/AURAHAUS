import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';

export default function BrandStory() {
  const ref = useReveal();

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto reveal" ref={ref} id="brand-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <div className="relative group">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl">
            <img
              src="/images/hero-banner.png"
              alt="AuraHaus brand story - craftsman working on a mirror"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Decorative frame */}
          <div className="absolute -top-4 -right-4 w-full h-full border border-gold/30 rounded-2xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
        </div>

        {/* Content */}
        <div>
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4">Our Story</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-text-primary leading-[1.1] mb-6">
            CRAFTED WITH PASSION,<br />
            <span className="text-gold-gradient">DESIGNED FOR YOU.</span>
          </h2>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              AuraHaus was born from a simple belief — that a mirror is more than a reflection. 
              It&apos;s a statement piece, a mood setter, a conversation starter.
            </p>
            <p>
              Every mirror in our collection is handcrafted in India by skilled artisans who blend 
              traditional techniques with contemporary design. From organic wavy shapes to LED-lit 
              vanity mirrors, we create pieces that elevate your space and express your personality.
            </p>
            <p>
              Whether you&apos;re styling a bedroom, a café, or a gaming setup — we&apos;ve got a mirror 
              that speaks your aesthetic.
            </p>
          </div>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold text-sm uppercase tracking-[0.2em] mt-8 group/link transition-colors duration-300"
          >
            Learn More About Us
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover/link:translate-x-1 transition-transform duration-300">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
