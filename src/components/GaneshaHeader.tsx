import React from 'react';

export const GaneshaHeader: React.FC = () => {
  return (
    <div className="relative pt-8 pb-10 px-4 text-center overflow-hidden">
      {/* Decorative Traditional Indian Arch / Toran Motifs */}
      <div className="absolute top-0 left-0 right-0 flex justify-center items-center pointer-events-none opacity-40">
        <svg width="480" height="24" viewBox="0 0 480 24" fill="none" className="max-w-full text-[#d4af37]">
          <path d="M0 0 C60 20, 100 20, 160 0 C220 20, 260 20, 320 0 C380 20, 420 20, 480 0" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="80" cy="10" r="2" fill="currentColor" />
          <circle cx="240" cy="10" r="2.5" fill="currentColor" />
          <circle cx="400" cy="10" r="2" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {/* Sacred Auspicious Heading */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold">
            ॥ श्री गणेशाय नमः ॥
          </span>
          <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]" />
        </div>

        {/* Lord Ganesha Divine Icon / Emblem */}
        <div className="relative mb-5 group">
          {/* Subtle Golden Glow / Aura */}
          <div className="absolute -inset-3 bg-[#e8b958]/20 rounded-full blur-xl animate-pulse" />

          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-[#d4af37]/40 bg-gradient-to-b from-[#2e0910] to-[#160407] p-2 flex items-center justify-center shadow-lg shadow-[#000]/60">
            {/* Concentric Decorative Rings */}
            <div className="absolute inset-1 rounded-full border border-dashed border-[#e8b958]/30" />

            {/* Lord Ganesha Graceful Vector Art */}
            <svg
              viewBox="0 0 100 100"
              className="w-16 h-16 sm:w-20 sm:h-20 text-[#f5d485] drop-shadow-[0_2px_8px_rgba(232,185,88,0.4)]"
              fill="currentColor"
            >
              {/* Crown / Mukut */}
              <path d="M50 12 L56 24 L52 25 L58 32 L42 32 L48 25 L44 24 Z" fill="currentColor" />
              <circle cx="50" cy="18" r="1.5" fill="#e11d48" />

              {/* Trishul Tilak on Forehead */}
              <path d="M49 26 L51 26 L51 33 L49 33 Z" fill="#e11d48" />
              <path d="M47 28 Q50 31 53 28" stroke="#e11d48" strokeWidth="1" fill="none" />

              {/* Head & Ear Curves */}
              {/* Left Ear */}
              <path d="M42 32 C30 30, 24 40, 32 50 C36 55, 41 54, 43 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              {/* Right Ear */}
              <path d="M58 32 C70 30, 76 40, 68 50 C64 55, 59 54, 57 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />

              {/* Brow & Eye */}
              <path d="M44 38 Q48 39 52 38" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <circle cx="48" cy="41" r="1.2" fill="currentColor" />
              <circle cx="54" cy="41" r="1.2" fill="currentColor" />

              {/* Trunk (Sond) sweeping gracefully with Modak */}
              <path
                d="M51 40 C51 52, 45 60, 48 68 C50 74, 57 76, 62 72 C65 69, 64 64, 58 63"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
              />

              {/* Sweet Modak on Left Palm */}
              <circle cx="64" cy="62" r="3.2" fill="#f59e0b" />
              <path d="M64 57 L62 60 L66 60 Z" fill="#f59e0b" />

              {/* Divine Blessings Aura Sparks */}
              <circle cx="36" cy="22" r="1" fill="currentColor" opacity="0.7" />
              <circle cx="64" cy="22" r="1" fill="currentColor" opacity="0.7" />
              <circle cx="50" cy="8" r="1.5" fill="#f5d485" />
            </svg>
          </div>
        </div>

        {/* Sacred Vakratunda Mahakaya Mantra */}
        <div className="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-[#2d0910]/80 via-[#20060b]/90 to-[#140407]/90 border border-[#d4af37]/35 shadow-xl max-w-2xl w-full">
          {/* Ornate Corner Accents */}
          <div className="absolute top-1.5 left-2 text-[#d4af37] text-xs font-serif opacity-70">❖</div>
          <div className="absolute top-1.5 right-2 text-[#d4af37] text-xs font-serif opacity-70">❖</div>
          <div className="absolute bottom-1.5 left-2 text-[#d4af37] text-xs font-serif opacity-70">❖</div>
          <div className="absolute bottom-1.5 right-2 text-[#d4af37] text-xs font-serif opacity-70">❖</div>

          {/* Hindi Devanagari Sanskrit Mantra */}
          <h2
            className="text-lg sm:text-2xl font-bold tracking-wide text-[#faedd8] mb-2 leading-relaxed"
            style={{ fontFamily: "'Noto Serif Devanagari', 'Rozha One', serif" }}
          >
            वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।<br />
            निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
          </h2>

          {/* Golden Divider with Swastik/Floral symbol */}
          <div className="flex items-center justify-center gap-3 my-3">
            <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]/60" />
            <span className="text-[#e8b958] text-sm">卐</span>
            <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]/60" />
          </div>

          {/* Roman Transliteration */}
          <p
            className="text-xs sm:text-sm text-[#e8b958] tracking-widest font-serif italic mb-1.5"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Vakratuṇḍa Mahākāya Sūryakoṭi Samaprabha |<br className="hidden sm:inline" /> Nirvighnaṁ Kuru Me Deva Sarvakāryeṣu Sarvadā ||
          </p>

          {/* English Essence */}
          <p className="text-[11px] sm:text-xs text-[#faedd8]/70 max-w-lg mx-auto font-sans leading-normal">
            "O Lord with the curved trunk and immense aura radiant as a billion suns, please bless our new beginning and remove all obstacles from our endeavors, always."
          </p>
        </div>

        {/* Auspicious Groom Side Announcement Ribbon */}
        <div className="mt-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3d0d17]/80 border border-[#d4af37]/30 text-xs text-[#faedd8]">
          <span className="text-[#e8b958]">ॐ</span>
          <span className="font-serif tracking-wider">
            राजपूत परिवार हार्दिक आमंत्रण · वर पक्ष (Groom's Side)
          </span>
          <span className="text-[#e8b958]">ॐ</span>
        </div>
      </div>
    </div>
  );
};
