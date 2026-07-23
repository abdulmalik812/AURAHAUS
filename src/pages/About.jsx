import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';

export default function About() {
  const ref1 = useReveal();
  const ref2 = useReveal();
  const ref3 = useReveal();

  return (
    <div className="pt-32 pb-20 min-h-screen">
      {/* Hero */}
      <div className="text-center px-4 sm:px-6 lg:px-8 mb-20">
        <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-3">Our Story</p>
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl text-text-primary mb-6">ABOUT AURAHAUS</h1>
        <div className="w-16 h-[2px] bg-gold mx-auto" />
      </div>

      {/* Mission */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24 reveal" ref={ref1}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative group">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img
                src="/images/hero-banner.png"
                alt="AuraHaus workshop"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-full h-full border border-gold/20 rounded-2xl -z-10" />
          </div>
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl text-text-primary mb-6">
              MORE THAN A MIRROR —<br />
              <span className="text-gold-gradient">A STATEMENT.</span>
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                AuraHaus was founded with a mission to redefine how people see mirrors. 
                We believe that every mirror should do more than just reflect — it should 
                inspire, elevate, and transform the space it lives in.
              </p>
              <p>
                Our journey started in a small workshop in India, where a passion for 
                design met the art of craftsmanship. Today, we serve thousands of 
                customers who trust us to bring their vision to life.
              </p>
              <p>
                From organic wavy shapes to neon-lit custom pieces, every AuraHaus mirror 
                is handcrafted by skilled artisans who pour their expertise into every curve 
                and edge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-24 reveal" ref={ref2}>
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl text-text-primary">WHAT WE STAND FOR</h2>
          <div className="w-12 h-[2px] bg-gold mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Quality First',
              desc: 'We use only premium-grade glass and materials, ensuring every mirror meets the highest standards of quality and durability.',
              icon: '✦'
            },
            {
              title: 'Artisan Crafted',
              desc: 'Each piece is handmade by skilled craftspeople who bring decades of experience and genuine passion to their work.',
              icon: '◆'
            },
            {
              title: 'Your Vision, Our Craft',
              desc: 'We specialize in custom designs. Send us your idea — a sketch, a photo, a vibe — and we\'ll bring it to life.',
              icon: '◇'
            }
          ].map((value, i) => (
            <div
              key={i}
              className="text-center p-8 rounded-2xl border border-border hover:border-gold/30 bg-bg-card hover:bg-bg-elevated transition-all duration-500 group"
            >
              <span className="text-gold text-3xl block mb-4">{value.icon}</span>
              <h3 className="font-heading text-xl tracking-wider text-text-primary mb-3">{value.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center reveal" ref={ref3}>
        <div className="rounded-2xl border border-gold/20 bg-bg-card p-12 sm:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <h2 className="font-heading text-3xl sm:text-4xl text-text-primary mb-4">
              READY TO TRANSFORM YOUR SPACE?
            </h2>
            <p className="text-text-secondary mb-8 max-w-md mx-auto">
              Browse our collection or reach out for a custom design tailored to your aesthetic.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/shop" className="btn-gold px-10 py-4 rounded-full text-sm uppercase tracking-[0.2em] font-semibold">
                Shop Now
              </Link>
              <Link to="/contact" className="border border-text-secondary/30 text-text-primary hover:border-gold hover:text-gold px-10 py-4 rounded-full text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
