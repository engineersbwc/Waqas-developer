
import React from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSendMessage = () => {
    onClose();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-[3000] flex items-center justify-center px-6">
      {/* Premium Backdrop with high-end blur */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-[12px] animate-in fade-in duration-700 ease-out"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-[#0a0a0a] border border-white/10 rounded-[3.5rem] p-1 md:p-12 shadow-[0_0_120px_rgba(0,0,0,1)] animate-in zoom-in-95 fade-in slide-in-from-bottom-12 duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden">

        {/* Subtle Inner Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#f5ba41]/40 to-transparent blur-sm"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-8 right-8 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/5 text-zinc-500 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-300"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="relative p-8 md:p-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5ba41] animate-pulse"></span>
              <p className="text-[#f5ba41] font-black text-[9px] uppercase tracking-[0.4em]">Let's build your vision</p>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white font-lexend tracking-tighter leading-none">Choose your path</h2>
            <p className="mt-4 text-zinc-500 font-medium text-sm md:text-base">Ready to start? Select how you'd like to connect with us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Option 1: Form - Styled for Stagger Entry */}
            <button
              onClick={handleSendMessage}
              className="group relative flex flex-col items-start bg-zinc-900/30 border border-white/5 p-10 rounded-[2.5rem] text-left transition-all duration-500 hover:bg-zinc-900/60 hover:border-[#4ade80]/40 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(74,222,128,0.15)] animate-in slide-in-from-bottom-8 fade-in delay-200"
            >
              {/* Animated Icon Box */}
              <div className="w-20 h-20 rounded-3xl bg-[#4ade80]/10 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-[#4ade80]/20">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#4ade80]">
                  <path d="M7 8L3 12L7 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17 8L21 12L17 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14 4L10 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3 className="text-2xl font-black text-white font-lexend mb-4 group-hover:text-[#4ade80] transition-colors">Project Request</h3>
              <p className="text-zinc-500 font-medium leading-relaxed text-sm">
                Fill out our request form. Perfect for detailed project specs and brief inquiries.
              </p>

              <div className="mt-10 flex items-center text-[#4ade80] font-black text-[10px] uppercase tracking-[0.3em]">
                <span className="border-b-2 border-[#4ade80]/0 group-hover:border-[#4ade80] transition-all pb-1">Start Request</span>
                <svg className="ml-3 w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>

            {/* Option 2: Booking - Styled for Stagger Entry */}
            <a
              //is jaga apny apna calendly ki Api lgani hein..
              href="https://calendly.com/engineersbwc/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="group relative flex flex-col items-start bg-zinc-900/30 border border-white/5 p-10 rounded-[2.5rem] text-left transition-all duration-500 hover:bg-zinc-900/60 hover:border-[#f5ba41]/40 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(245,186,65,0.15)] animate-in slide-in-from-bottom-8 fade-in delay-300"
            >
              {/* Animated Icon Box */}
              <div className="w-20 h-20 rounded-3xl bg-[#f5ba41]/10 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 border border-[#f5ba41]/20">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#f5ba41]">
                  <path d="M8 7V3M16 7V3M3 11H21M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 7H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3 className="text-2xl font-black text-white font-lexend mb-4 group-hover:text-[#f5ba41] transition-colors">Book a Strategy Call</h3>
              <p className="text-zinc-500 font-medium leading-relaxed text-sm">
                Discuss your goals live. Pick a time that fits your schedule for a quick 15-min discovery.
              </p>

              <div className="mt-10 flex items-center text-[#f5ba41] font-black text-[10px] uppercase tracking-[0.3em]">
                <span className="border-b-2 border-[#f5ba41]/0 group-hover:border-[#f5ba41] transition-all pb-1">Check Slots</span>
                <svg className="ml-3 w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
