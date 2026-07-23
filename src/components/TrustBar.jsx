import useReveal from '../hooks/useReveal';

const props = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h2a2 2 0 012 2v6a2 2 0 01-2 2H6" />
      </svg>
    ),
    title: 'Free Shipping',
    desc: 'On all orders above ₹999'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Handmade in India',
    desc: 'Crafted with love & precision'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
      </svg>
    ),
    title: 'Easy Returns',
    desc: '7-day hassle-free returns'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: 'Custom Orders',
    desc: 'Your vision, our craft'
  }
];

export default function TrustBar() {
  const ref = useReveal();

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-y border-border reveal" ref={ref} id="trust-section">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
        {props.map((prop, i) => (
          <div
            key={i}
            className="text-center group"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-border group-hover:border-gold text-text-secondary group-hover:text-gold transition-all duration-500 mb-4">
              {prop.icon}
            </div>
            <h3 className="font-heading text-lg tracking-wider text-text-primary mb-1">{prop.title}</h3>
            <p className="text-text-muted text-sm">{prop.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
