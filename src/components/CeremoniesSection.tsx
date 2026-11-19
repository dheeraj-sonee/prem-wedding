import React from 'react';
import { Sparkles, Calendar, Heart } from 'lucide-react';
import { triggerFlowerShower } from './FlowerShower';

export interface CeremonyEvent {
  titleHindi: string;
  titleEnglish: string;
  dateStr: string;
  dayHindi: string;
  dayEnglish: string;
  shortDesc: string;
  iconSymbol: string;
  accentColor: string;
}

export const CEREMONIES_DATA: CeremonyEvent[] = [
  {
    titleHindi: 'मंडप (मंडपाच्छादन)',
    titleEnglish: 'Mandap Ceremony',
    dateStr: '30 Nov 2026',
    dayHindi: 'सोमवार',
    dayEnglish: 'Monday',
    shortDesc: 'Auspicious erection of the sacred wedding canopy, Ganesh pooja, and sanctification rituals at the groom’s residence.',
    iconSymbol: '🏛️',
    accentColor: 'from-[#f59e0b] to-[#d97706]',
  },
  {
    titleHindi: 'मायना (भात पूजन)',
    titleEnglish: 'Mayna Ceremony',
    dateStr: '01 Dec 2026',
    dayHindi: 'मंगलवार',
    dayEnglish: 'Tuesday',
    shortDesc: 'Traditional maternal welcoming & blessing of gifts (Maira/Bhaat) with music, haldi, and joyful family folk songs.',
    iconSymbol: '✨',
    accentColor: 'from-[#ec4899] to-[#be185d]',
  },
  {
    titleHindi: 'टीका एवं पाणिग्रहण (शुभ विवाह)',
    titleEnglish: 'Tika & Wedding',
    dateStr: '02 Dec 2026',
    dayHindi: 'बुधवार',
    dayEnglish: 'Wednesday',
    shortDesc: 'Auspicious Tika, joyful Baraat procession, Jaimala, and sacred Saat Phere around the Agni at JP Resort & RR Garden.',
    iconSymbol: '🔥',
    accentColor: 'from-[#ef4444] to-[#b91c1c]',
  },
  {
    titleHindi: 'विदाई एवं वधू आगमन',
    titleEnglish: 'Vidai Ceremony',
    dateStr: '03 Dec 2026',
    dayHindi: 'गुरुवार',
    dayEnglish: 'Thursday',
    shortDesc: 'Heartfelt Vidai departure and warm Bahu Aagman welcoming of bride Anupriya with groom Premchandra into our family.',
    iconSymbol: '🌸',
    accentColor: 'from-[#eab308] to-[#ca8a04]',
  },
];

export const CeremoniesSection: React.FC = () => {
  return (
    <section id="ceremonies" className="py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#300a12] border border-[#d4af37]/30 text-xs text-[#e8b958] mb-2 font-serif">
            <span>मांगलिक उत्सव रूपरेखा</span>
            <span>·</span>
            <span>SACRED WEDDING RITUALS</span>
          </div>
          <h2
            className="text-2xl sm:text-4xl font-bold text-[#faedd8]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Auspicious Ceremonies
          </h2>
          <p className="text-xs sm:text-sm text-[#faedd8]/75 mt-2 max-w-xl mx-auto">
            From the sanctifying Mandap to the joyful Vidai &amp; homecoming, join us in celebrating every cherished tradition from the groom's side.
          </p>
        </div>

        {/* 4 Cards Grid: Mandap (30 Nov), Mayna (1 Dec), Tika (2 Dec), Vidai (3 Dec) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CEREMONIES_DATA.map((ceremony, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl bg-gradient-to-b from-[#2a0811]/90 via-[#1e050b]/95 to-[#130306] border-2 border-[#d4af37]/35 p-6 flex flex-col justify-between shadow-xl hover:border-[#d4af37]/70 hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Corner Floral Ornament */}
              <div className="absolute top-3 right-3 text-[#d4af37]/30 group-hover:text-[#d4af37]/80 text-xs transition-colors">
                ✦
              </div>

              <div>
                {/* Ceremony Step Indicator */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-[#e8b958] px-2.5 py-0.5 rounded-full bg-[#3f0f1b] border border-[#d4af37]/30">
                    0{idx + 1}
                  </span>
                  <span className="text-2xl" role="img" aria-label={ceremony.titleEnglish}>
                    {ceremony.iconSymbol}
                  </span>
                </div>

                {/* Date Ribbon */}
                <div className="mb-4 pb-3 border-b border-[#d4af37]/20">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#f5d485]">
                    <Calendar className="w-3.5 h-3.5 text-[#e8b958]" />
                    <span className="font-mono">{ceremony.dateStr}</span>
                  </div>
                  <p className="text-[11px] text-[#faedd8]/70 mt-0.5 font-serif">
                    {ceremony.dayHindi} · {ceremony.dayEnglish}
                  </p>
                </div>

                {/* Ceremony Title (Hindi & English) */}
                <h3
                  className="text-lg sm:text-xl font-bold text-[#faedd8] mb-1 leading-snug group-hover:text-[#f5d485] transition-colors"
                  style={{ fontFamily: "'Noto Serif Devanagari', 'Rozha One', serif" }}
                >
                  {ceremony.titleHindi}
                </h3>
                <p
                  className="text-xs uppercase tracking-wider text-[#e8b958] font-serif mb-3"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {ceremony.titleEnglish}
                </p>

                {/* Description */}
                <p className="text-xs text-[#faedd8]/80 leading-relaxed font-sans">
                  {ceremony.shortDesc}
                </p>
              </div>

              {/* Bottom Quick Action */}
              <div className="mt-6 pt-3 border-t border-[#d4af37]/15 flex items-center justify-between text-[11px]">
                <span className="text-[#e8b958]/80 font-serif">वर पक्ष</span>
                <button
                  onClick={triggerFlowerShower}
                  className="text-[#faedd8]/70 hover:text-[#f5d485] flex items-center gap-1 transition-colors"
                >
                  <Heart className="w-3 h-3 text-[#e11d48] fill-current" />
                  <span>Bless</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Venue for Wedding Day (2 Dec) */}
        <div className="mt-8 rounded-2xl bg-[#26070e] border border-[#d4af37]/30 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#3d0e19] text-[#e8b958] flex items-center justify-center shrink-0 border border-[#d4af37]/40">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[#e8b958] font-semibold">
                Main Vivah Venue (02 Dec 2026)
              </p>
              <p className="text-sm font-bold text-[#faedd8]">
                JP Resort and RR Garden, Hamirpur Road, Muskara
              </p>
            </div>
          </div>

          <a
            href="#venue"
            className="px-4 py-2 rounded-xl bg-[#d4af37] text-[#120507] text-xs font-bold hover:bg-[#e8b958] transition-all whitespace-nowrap"
          >
            View Map &amp; Directions
          </a>
        </div>
      </div>
    </section>
  );
};
