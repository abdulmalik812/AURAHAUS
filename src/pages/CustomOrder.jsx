import { useState } from 'react';

const steps = [
  ['01', 'Share your idea', 'Tell us the shape, size, finish, and room you have in mind.'],
  ['02', 'Receive your quote', 'We review the details and share a tailored estimate within 24 hours.'],
  ['03', 'Made for your space', 'Your mirror is handcrafted, quality-checked, and delivered with care.'],
];

export default function CustomOrder() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', idea: '' });

  const submit = (event) => {
    event.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', phone: '', idea: '' });
  };

  return (
    <div className="custom-order-page pt-28 pb-20">
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-end border-b border-border pb-16">
          <div>
            <p className="label-eyebrow mb-5">The AuraHaus atelier</p>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl leading-[0.94]">Made to reflect<br /><em className="text-gold-gradient">your point of view.</em></h1>
          </div>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-lg">From an exact size to a finish that completes the room, our custom mirror service turns your references into a made-for-you piece.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-14">
          {steps.map(([number, title, copy]) => <article key={number} className="border-t border-gold pt-5">
            <span className="text-gold text-xs tracking-[.18em]">{number}</span>
            <h2 className="font-heading text-3xl mt-5 mb-3">{title}</h2>
            <p className="text-text-secondary text-sm leading-relaxed">{copy}</p>
          </article>)}
        </div>
      </section>

      <section className="bg-bg-card py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <p className="label-eyebrow mb-4">Start a conversation</p>
            <h2 className="font-heading text-4xl sm:text-5xl leading-none">Tell us what you’re imagining.</h2>
            <p className="text-text-secondary text-sm leading-relaxed mt-6">A photo, Pinterest link, simple sketch, or a few words is a perfect place to start. We’ll follow up personally.</p>
          </div>
          <div className="lg:col-span-3 bg-bg-elevated p-7 sm:p-10 border border-border">
            {sent ? <div className="py-12 text-center"><p className="label-eyebrow mb-4">Request received</p><h3 className="font-heading text-4xl">Thank you.</h3><p className="text-text-secondary text-sm mt-4">We’ll be in touch within 24 hours.</p></div> :
            <form onSubmit={submit} className="grid sm:grid-cols-2 gap-5">
              {[['name', 'Your name', 'text'], ['email', 'Email address', 'email'], ['phone', 'Phone number', 'tel']].map(([name, label, type]) => <label key={name} className={name === 'phone' ? 'sm:col-span-2' : ''}><span className="label-eyebrow text-[10px]">{label}</span><input required={name !== 'phone'} type={type} value={form[name]} onChange={e => setForm({ ...form, [name]: e.target.value })} className="mt-2 w-full bg-transparent border-b border-border py-3 text-sm outline-none focus:border-gold" /></label>)}
              <label className="sm:col-span-2"><span className="label-eyebrow text-[10px]">Your mirror idea</span><textarea required rows="4" value={form.idea} onChange={e => setForm({ ...form, idea: e.target.value })} placeholder="Size, shape, finish, reference links…" className="mt-2 w-full bg-transparent border-b border-border py-3 text-sm outline-none focus:border-gold resize-none" /></label>
              <button className="btn-primary justify-self-start px-7 py-4 text-xs uppercase tracking-[.18em] sm:col-span-2">Request a custom quote</button>
            </form>}
          </div>
        </div>
      </section>
    </div>
  );
}
