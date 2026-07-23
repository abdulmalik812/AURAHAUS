import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-3">Get in Touch</p>
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl text-text-primary mb-6">CONTACT US</h1>
        <div className="w-16 h-[2px] bg-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 max-w-5xl mx-auto">
        {/* Info Sidebar */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h3 className="font-heading text-xl tracking-wider text-text-primary mb-3">REACH OUT</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Have a question about our products, a custom order idea, or just want to say hello? 
              We&apos;d love to hear from you.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <p className="text-text-primary text-sm font-medium">Email</p>
                <p className="text-text-muted text-sm">hello@aurahaus.in</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </div>
              <div>
                <p className="text-text-primary text-sm font-medium">Instagram</p>
                <p className="text-text-muted text-sm">@aurahaus.in</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <p className="text-text-primary text-sm font-medium">Based in</p>
                <p className="text-text-muted text-sm">India 🇮🇳</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-gold/20 bg-bg-card">
            <p className="text-gold text-sm font-medium mb-2">✦ Custom Orders</p>
            <p className="text-text-secondary text-sm leading-relaxed">
              For custom mirror requests, send us your reference design (sketch, photo, or description) 
              along with your preferred size. We&apos;ll get back to you with a quote within 24 hours.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <div className="bg-bg-card border border-border rounded-2xl p-8 sm:p-10">
            {submitted ? (
              <div className="text-center py-12 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-success">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 className="font-heading text-2xl text-text-primary mb-2">MESSAGE SENT!</h3>
                <p className="text-text-secondary text-sm">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="text-sm text-text-secondary uppercase tracking-wider font-medium mb-2 block">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-bg-elevated border border-border rounded-lg px-5 py-3.5 text-sm text-text-primary placeholder-text-muted outline-none focus:border-gold transition-colors duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="text-sm text-text-secondary uppercase tracking-wider font-medium mb-2 block">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-bg-elevated border border-border rounded-lg px-5 py-3.5 text-sm text-text-primary placeholder-text-muted outline-none focus:border-gold transition-colors duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="text-sm text-text-secondary uppercase tracking-wider font-medium mb-2 block">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, question, or idea..."
                    className="w-full bg-bg-elevated border border-border rounded-lg px-5 py-3.5 text-sm text-text-primary placeholder-text-muted outline-none focus:border-gold transition-colors duration-300 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-gold w-full py-4 rounded-xl font-semibold text-sm uppercase tracking-[0.2em]"
                  id="contact-submit-btn"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
