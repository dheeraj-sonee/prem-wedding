import React, { useState } from 'react';
import { Heart, MapPin, Calendar, Sparkles, Maximize2, X, PhoneCall } from 'lucide-react';
import { triggerFlowerShower } from './FlowerShower';

export const HeroSection: React.FC = () => {
  const [isPhotoZoomed, setIsPhotoZoomed] = useState(false);
  const photoSrc = '/assets/aistudio/image_6c6d8798.png';

  return (
    <section className="relative pt-2 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#991b1b]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-[#d4af37]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Main Invitation Card Structure */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#2b0811]/90 via-[#1e050b]/95 to-[#120306] border-2 border-[#d4af37]/40 shadow-2xl p-6 sm:p-10 lg:p-12 overflow-hidden">
          {/* Ornate Frame Border Overlay */}
          <div className="absolute inset-2 sm:inset-3 rounded-[22px] border border-dashed border-[#d4af37]/25 pointer-events-none" />

          {/* Top Rajput Regal Crest & Inviting Family Line */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            {/* Auspicious Shubh Vivah Crest */}
            <div className="inline-flex items-center justify-center gap-3 mb-3">
              <span className="w-10 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]" />
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3d0e19] border border-[#d4af37]/40 text-[#f5d485] text-xs font-semibold tracking-widest uppercase">
                <Sparkles className="w-3 h-3 text-[#f59e0b]" />
                <span>शुभ विवाह · SHUBH VIVAH</span>
                <Sparkles className="w-3 h-3 text-[#f59e0b]" />
              </div>
              <span className="w-10 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]" />
            </div>

            {/* From the Groom's Side Announcement */}
            <p className="text-xs sm:text-sm text-[#e8b958] tracking-widest uppercase font-serif mb-2">
              With the divine blessings of our ancestors & almighty
            </p>
            <h1
              className="text-lg sm:text-2xl text-[#faedd8] font-medium leading-relaxed mb-3"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Mrs. Mannu Devi <span className="text-[#d4af37]">&</span> Mr. MunnaLal Rajput
            </h1>
            <p className="text-xs sm:text-sm text-[#faedd8]/80 max-w-xl mx-auto leading-relaxed font-sans">
              cordially solicit your gracious presence, love and blessings on the joyous occasion of the wedding ceremony of their beloved son
            </p>
          </div>

          {/* Central Grid: Couple Names & High-Res Portrait */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10">
            {/* Left Column: The Groom (Premchandra) - Groom's Side Focus */}
            <div className="lg:col-span-3 text-center lg:text-right order-2 lg:order-1 flex flex-col items-center lg:items-end">
              <div className="inline-block px-3 py-0.5 rounded-full bg-[#4a101d] border border-[#d4af37]/30 text-[11px] text-[#e8b958] font-medium tracking-wider mb-2">
                THE GROOM (वर)
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#faedd8] tracking-wide mb-1"
                style={{ fontFamily: "'Cinzel Decorative', 'Cinzel', serif" }}
              >
                Premchandra
              </h2>
              <span
                className="text-lg sm:text-xl text-[#e8b958] font-serif italic mb-3 block"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                (Prem)
              </span>

              <div className="text-xs text-[#faedd8]/75 space-y-1">
                <p className="font-medium text-[#faedd8]">Son of</p>
                <p className="text-[#e8b958]">Mrs. Mannu Devi</p>
                <p className="text-[#e8b958]">&amp; Mr. MunnaLal Rajput</p>
                <p className="text-[11px] text-[#faedd8]/60 pt-1">Rajput Parivar</p>
              </div>
            </div>

            {/* Center Column: Grand Portrait in Arch Frame */}
            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-center">
              <div className="relative group cursor-pointer" onClick={() => setIsPhotoZoomed(true)}>
                {/* Royal Mughal Arch Silhouette Frame */}
                <div className="relative p-2.5 sm:p-3 rounded-[36px] bg-gradient-to-b from-[#d4af37] via-[#a37920] to-[#5a3a08] shadow-2xl shadow-[#000]/80">
                  <div className="relative overflow-hidden rounded-[30px] border-2 border-[#faedd8]/20 bg-[#1f050b] w-72 sm:w-80 md:w-96 aspect-[4/5]">
                    {/* The Bride & Groom Photo provided by user */}
                    <img
                      src={photoSrc}
                      alt="Groom Premchandra and Bride Anupriya in royal wedding attire"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading="eager"
                    />

                    {/* Subtle bottom gradient for elegance */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#140407]/80 via-transparent to-black/20 pointer-events-none" />

                    {/* Floating Zoom Indicator */}
                    <div className="absolute top-3 right-3 p-2 rounded-full bg-[#120507]/75 backdrop-blur-md text-[#faedd8] opacity-0 group-hover:opacity-100 transition-opacity border border-[#d4af37]/40">
                      <Maximize2 className="w-4 h-4 text-[#e8b958]" />
                    </div>

                    {/* Bottom Photo Caption */}
                    <div className="absolute bottom-3 inset-x-3 text-center pointer-events-none">
                      <p
                        className="text-sm font-semibold tracking-wider text-[#faedd8] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                        style={{ fontFamily: "'Cinzel', serif" }}
                      >
                        Premchandra <span className="text-[#e8b958]">&hearts;</span> Anupriya
                      </p>
                      <p className="text-[10px] text-[#e8b958] font-sans tracking-widest uppercase">
                        Together Forever · 02 Dec 2026
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pulsing Corner Florals */}
                <div className="absolute -bottom-3 -left-3 text-[#d4af37] text-lg select-none">
                  ❦
                </div>
                <div className="absolute -bottom-3 -right-3 text-[#d4af37] text-lg select-none">
                  ❦
                </div>
              </div>

              {/* Tap to View photo hint */}
              <button
                onClick={() => setIsPhotoZoomed(true)}
                className="mt-3 text-[11px] text-[#e8b958]/80 hover:text-[#e8b958] flex items-center gap-1 transition-colors"
              >
                <Maximize2 className="w-3 h-3" />
                <span>Click to view full portrait</span>
              </button>
            </div>

            {/* Right Column: The Bride (Anupriya) */}
            <div className="lg:col-span-3 text-center lg:text-left order-3 flex flex-col items-center lg:items-start">
              <div className="inline-block px-3 py-0.5 rounded-full bg-[#4a101d] border border-[#d4af37]/30 text-[11px] text-[#e8b958] font-medium tracking-wider mb-2">
                THE BRIDE (वधू)
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#faedd8] tracking-wide mb-1"
                style={{ fontFamily: "'Cinzel Decorative', 'Cinzel', serif" }}
              >
                Anupriya
              </h2>
              <span
                className="text-lg sm:text-xl text-[#e8b958] font-serif italic mb-3 block"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                (Anu)
              </span>

              <div className="text-xs text-[#faedd8]/75 space-y-1">
                <p className="font-medium text-[#faedd8]">Daughter of</p>
                <p className="text-[#e8b958]">Mrs. Jayanti Devi</p>
                <p className="text-[#e8b958]">&amp; Mr. Vipin Rajput</p>
                <p className="text-[11px] text-[#faedd8]/60 pt-1">Rajput Parivar, Hamirpur</p>
              </div>
            </div>
          </div>

          {/* Wedding Key Details Ribbon: Date, Day & Place */}
          <div className="border-t border-b border-[#d4af37]/30 py-5 sm:py-6 my-6 bg-[#1a0408]/60 rounded-2xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 items-center text-center">
              {/* Date & Day */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#3d0e19] border border-[#d4af37]/50 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-[#e8b958]" />
                </div>
                <div className="text-left">
                  <p className="text-xs uppercase tracking-widest text-[#e8b958] font-semibold">
                    WEDDING DATE & DAY
                  </p>
                  <p
                    className="text-base sm:text-lg font-bold text-[#faedd8]"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    02 December 2026, Wednesday
                  </p>
                  <p className="text-[11px] text-[#faedd8]/70">
                    Auspicious Vivah Muhurat
                  </p>
                </div>
              </div>

              {/* Place & Venue */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#3d0e19] border border-[#d4af37]/50 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#e8b958]" />
                </div>
                <div className="text-left">
                  <p className="text-xs uppercase tracking-widest text-[#e8b958] font-semibold">
                    WEDDING VENUE
                  </p>
                  <p
                    className="text-base sm:text-lg font-bold text-[#faedd8]"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    JP Resort and RR Garden
                  </p>
                  <p className="text-[11px] text-[#faedd8]/70">
                    Hamirpur Road, Muskara, Dist. - Hamirpur
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details Quick Dial Strip */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-2 text-xs text-[#faedd8]/80">
              <span className="text-[#e8b958] font-semibold">Invitation Contact:</span>
              <span>Mr. MunnaLal Rajput &amp; Family</span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:+916387478245"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#3d0e19] border border-[#d4af37]/40 text-xs font-semibold text-[#f5d485] hover:bg-[#521322] hover:border-[#d4af37] transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#e8b958]" />
                <span>+91 63874 78245</span>
              </a>

              <a
                href="tel:+918953813558"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#3d0e19] border border-[#d4af37]/40 text-xs font-semibold text-[#f5d485] hover:bg-[#521322] hover:border-[#d4af37] transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#e8b958]" />
                <span>+91 89538 13558</span>
              </a>

              <button
                onClick={triggerFlowerShower}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#e8b958] to-[#d4af37] text-xs font-bold text-[#140407] hover:brightness-110 transition-all active:scale-95"
              >
                <Heart className="w-3.5 h-3.5 fill-current text-[#b91c1c]" />
                <span>Shower Blessings</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Full Screen Image Preview */}
      {isPhotoZoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsPhotoZoomed(false)}
        >
          <div
            className="relative max-w-2xl max-h-[90vh] bg-[#140407] rounded-3xl p-3 border-2 border-[#d4af37]/60 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsPhotoZoomed(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-[#faedd8] hover:bg-black transition-colors border border-[#d4af37]/40"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={photoSrc}
              alt="Premchandra and Anupriya Wedding Portrait"
              className="w-full max-h-[80vh] object-contain rounded-2xl"
            />
            <div className="p-4 text-center">
              <p
                className="text-lg font-bold text-[#faedd8]"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Premchandra (Prem) &amp; Anupriya (Anu)
              </p>
              <p className="text-xs text-[#e8b958] tracking-widest uppercase mt-0.5">
                02 December 2026 · JP Resort and RR Garden, Muskara
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
