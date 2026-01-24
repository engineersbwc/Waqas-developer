
import React from 'react';

export const ContactCTA: React.FC = () => {
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);
    //is jaga apny apna fromspree ki Api lgani hein..
    try {
      const response = await fetch('https://formspree.io/f/xpqqgjvw', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-black overflow-hidden relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="inline-block px-3 py-1 rounded-full border border-[#f5ba41]/20 bg-[#f5ba41]/5 mb-5">
              <p className="text-[#f5ba41] font-bold text-[9px] uppercase tracking-[0.3em]">Project Request</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-lexend tracking-tighter leading-none">
              Let's Scale <span className="text-[#f5ba41]">Together.</span>
            </h2>
            <p className="text-zinc-500 text-lg font-medium leading-relaxed max-w-sm mb-10">
              Fast turnaround, elite quality, and zero friction. We respond in &lt;12h.
            </p>
            <div className="space-y-4">
              {[
                { label: 'MVPs', text: '4-6 weeks delivery' },
                { label: 'Quality', text: 'Pixel-perfect UI' },
                { label: 'Support', text: 'Lifetime maintenance' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#f5ba41]">
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-black text-[9px] uppercase tracking-widest">{item.label}</p>
                    <p className="text-zinc-500 text-xs font-medium">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative bg-[#050505] border border-white/5 p-8 md:p-12 rounded-[2rem] shadow-2xl">
              {status === 'success' ? (
                <div className="bg-zinc-900/50 rounded-3xl p-12 text-center border border-[#4ade80]/20">
                  <div className="w-20 h-20 bg-[#4ade80]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-[#4ade80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4">Message Sent!</h3>
                  <p className="text-zinc-400">Thanks for reaching out. We'll get back to you within 12 hours.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-[#f5ba41] text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" name="name" required placeholder="Name" className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white text-sm outline-none focus:border-[#f5ba41] transition-all" />
                    <input type="email" name="email" required placeholder="Email" className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white text-sm outline-none focus:border-[#f5ba41] transition-all" />
                  </div>
                  <input type="text" name="company" placeholder="Company (Optional)" className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white text-sm outline-none focus:border-[#f5ba41] transition-all" />
                  <textarea name="description" required rows={3} placeholder="How can we help?" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white text-sm outline-none focus:border-[#f5ba41] transition-all resize-none"></textarea>

                  {status === 'error' && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                      Something went wrong. Please try again later.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-[#f5ba41] text-black py-5 rounded-xl font-black text-base tracking-[0.15em] uppercase hover:bg-white transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Submit Request'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
