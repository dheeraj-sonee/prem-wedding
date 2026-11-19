import React from 'react';
import { ArrowUp, Phone, Heart } from 'lucide-react';
import { triggerFlowerShower } from './FlowerShower';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#100305] border-t border-[#d4af37]/25 pt-12 pb-10 px-4 sm:px-6 lg:px-8 text-center text-[#faedd8]">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Sacred Traditional Emblem */}
        <div className="text-xl text-[#d4af37] mb-2">卐</div>

        <p className="text-xs uppercase tracking-[0.25em] text-[#e8b958] font-serif mb-2">
          राजपूत परिवार हार्दिक आमंत्रण · वर पक्ष
        </p>

        <h3
          className="text-xl sm:text-2xl font-bold text-[#faedd8] mb-2"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Premchandra <span className="text-[#d4af37]">&</span> Anupriya
        </h3>

        <p className="text-xs text-[#faedd8]/75 max-w-lg mx-auto mb-4 leading-relaxed font-sans">
          "We solicit your gracious presence and blessings to make this sacred occasion memorable for our son Premchandra and daughter-in-law Anupriya."
        </p>

        <p className="text-xs font-serif text-[#e8b958] mb-6">
          स्वागताकांक्षी: श्रीमती मन्नू देवी एवं श्री मुन्नालाल राजपूत
        </p>

        {/* Contacts */}
        <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-[#faedd8]/80 mb-8">
          <a
            href="tel:+916387478245"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#22070e] border border-[#d4af37]/30 hover:border-[#d4af37] hover:text-[#e8b958] transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-[#e8b958]" />
            <span>+91 63874 78245</span>
          </a>

          <a
            href="tel:+918953813558"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#22070e] border border-[#d4af37]/30 hover:border-[#d4af37] hover:text-[#e8b958] transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-[#e8b958]" />
            <span>+91 89538 13558</span>
          </a>

          <button
            onClick={triggerFlowerShower}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#3d0e19] border border-[#d4af37]/30 text-[#f5d485] hover:bg-[#521322] transition-all"
          >
            <Heart className="w-3.5 h-3.5 fill-current text-[#e11d48]" />
            <span>पुष्प वर्षा (Flower Shower)</span>
          </button>
        </div>

        {/* Hairline Divider */}
        <div className="w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent mb-6" />

        {/* Copyright & Scroll to Top */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#faedd8]/60 gap-3">
          <p>
            02 December 2026 · JP Resort and RR Garden, Hamirpur Road, Muskara
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-[#e8b958] hover:underline"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
