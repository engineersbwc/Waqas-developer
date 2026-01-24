
import React, { useState } from 'react';
import { FAQS } from '../constants';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-black text-center mb-16 font-lexend">FAQs</h2>

        <div className="space-y-4">
          {FAQS.map((faq) => (
            <div key={faq.id} className="border-b border-zinc-200">
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex justify-between items-center py-6 text-left"
              >
                <span className="text-xl font-bold text-zinc-900">{faq.question}</span>
                <span className={`text-2xl transition-transform duration-300 ${openId === faq.id ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openId === faq.id ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                <p className="text-zinc-600 text-lg leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
