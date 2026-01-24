
import React from 'react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-4 font-lexend">Client Testimonials</h2>
          <p className="text-zinc-500 italic">"Feedback from Our Valued Clients"</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-zinc-100 flex flex-col justify-between">
              <div>
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#f5ba41] text-xl">★</span>
                  ))}
                </div>
                <p className="text-zinc-800 text-lg mb-8 leading-relaxed font-medium">
                  "{testimonial.content}"
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full" />
                <div>
                  <h4 className="font-bold text-black">{testimonial.name}</h4>
                  <p className="text-zinc-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
