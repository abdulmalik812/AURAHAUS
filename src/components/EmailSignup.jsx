import { useState } from 'react';
import useReveal from '../hooks/useReveal';

export default function EmailSignup() {
  const ref = useReveal();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 reveal" ref={ref} id="signup-section">
      <div className="max-w-3xl mx-auto text-center">
        <div className="relative rounded-2xl border border-gold/20 bg-bg-card p-10 sm:p-14 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-3">Newsletter</p>
            <h2 className="font-heading text-4xl sm:text-5xl text-text-primary mb-3">GET ON THE LIST</h2>
            <p className="text-text-secondary text-sm sm:text-base mb-8 max-w-md mx-auto">
              Subscribe and get <span className="text-gold font-semibold">10% off</span> your first order. 
              Be the first to know about new drops, exclusives, and behind-the-scenes content.
            </p>

            {submitted ? (
              <div className="flex items-center justify-center gap-2 text-success font-medium animate-fade-in">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Welcome to the AuraHaus family!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 bg-bg-elevated border border-border rounded-full px-6 py-3.5 text-sm text-text-primary placeholder-text-muted outline-none focus:border-gold transition-colors duration-300"
                  id="email-signup-input"
                />
                <button
                  type="submit"
                  className="btn-gold px-8 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wider flex-shrink-0"
                  id="email-signup-btn"
                >
                  Subscribe
                </button>
              </form>
            )}

            <p className="text-text-muted text-xs mt-4">No spam, ever. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
