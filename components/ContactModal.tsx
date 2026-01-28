
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
    <div className="fixed inset-0 z-[3000] flex items-center justify-center px-4 sm:px-6">
      {/* Premium Backdrop with high-end blur */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-[12px] animate-in fade-in duration-500"
        onClick={onClose}
      />

      {/* Modal Container */}
      {/* Modal Container */}
      <div className="relative w-full max-w-xl bg-[#3a3a3a] border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-8 shadow-[0_0_100px_rgba(0,0,0,1)] animate-in zoom-in-95 fade-in slide-in-from-bottom-10 duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden">

        {/* Subtle Inner Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-[#f5ba41]/30 to-transparent"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/5 text-zinc-500 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-300"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="relative">
          <div className="text-center mb-6 md:mb-8">
            <div className="flex items-center space-x-2 mb-3 justify-center md:justify-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse shadow-[0_0_5px_#4ade80]"></span>
              <p className="text-[#4ade80] font-bold text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-inter">Let's build your vision</p>
            </div>
            <h2 className="text-xl md:text-3xl font-black text-white font-lexend tracking-tighter leading-none">Choose your path</h2>
            <p className="mt-2 text-zinc-500 font-medium text-[10px] md:text-xs max-w-xs mx-auto leading-relaxed">Ready to start? Select how you'd like to connect with us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Option 1: Form */}
            <button
              onClick={handleSendMessage}
              className="group relative flex flex-col items-center md:items-start bg-zinc-900/40 border border-white/5 p-5 md:p-6 rounded-[1.2rem] md:rounded-[1.5rem] text-center md:text-left transition-all duration-300 hover:bg-zinc-900/60 hover:border-[#4ade80]/30 hover:-translate-y-1"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#4ade80]/10 flex items-center justify-center mb-4 transition-all duration-500 border border-[#4ade80]/20 group-hover:scale-110">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#4ade80]">
                  <path d="M7 8L3 12L7 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17 8L21 12L17 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14 4L10 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3 className="text-base md:text-lg font-bold text-white font-lexend mb-1.5 group-hover:text-[#4ade80] transition-colors">Project Request</h3>
              <p className="text-zinc-500 font-medium leading-tight text-[10px] md:text-[11px]">
                Fill out our request form. Perfect for detailed project specs and brief inquiries.
              </p>

              <div className="mt-4 w-full flex items-center justify-center md:justify-start text-[#4ade80] font-bold text-[8px] md:text-[9px] uppercase tracking-[0.2em] opacity-80 group-hover:opacity-100 transition-opacity">
                <span className="border-b border-[#4ade80]/0 group-hover:border-[#4ade80] transition-all pb-0.5">Start Request</span>
                <svg className="ml-1.5 w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>

            {/* Option 2: Booking */}
            <a
              href="https://calendly.com/engineersbwc/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="group relative flex flex-col items-center md:items-start bg-zinc-900/40 border border-white/5 p-5 md:p-6 rounded-[1.2rem] md:rounded-[1.5rem] text-center md:text-left transition-all duration-300 hover:bg-zinc-900/60 hover:border-[#f5ba41]/30 hover:-translate-y-1"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#f5ba41]/10 flex items-center justify-center mb-4 transition-all duration-500 border border-[#f5ba41]/20 group-hover:scale-110">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#f5ba41]">
                  <path d="M8 7V3M16 7V3M3 11H21M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 7H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3 className="text-base md:text-lg font-bold text-white font-lexend mb-1.5 group-hover:text-[#f5ba41] transition-colors">Book Strategy Call</h3>
              <p className="text-zinc-500 font-medium leading-tight text-[10px] md:text-[11px]">
                Discuss your goals live. Pick a time that fits your schedule for a 15-min discovery.
              </p>

              <div className="mt-4 w-full flex items-center justify-center md:justify-start text-[#f5ba41] font-bold text-[8px] md:text-[9px] uppercase tracking-[0.2em] opacity-80 group-hover:opacity-100 transition-opacity">
                <span className="border-b border-[#f5ba41]/0 group-hover:border-[#f5ba41] transition-all pb-0.5">Check Slots</span>
                <svg className="ml-1.5 w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
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
