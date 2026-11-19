import React from 'react';
import { Heart } from 'lucide-react';
import { triggerFlowerShower } from './FlowerShower';

export const CoupleSection: React.FC = () => {
  return (
    <section id="couple" className="py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#300a12] border border-[#d4af37]/30 text-xs text-[#e8b958] mb-2 font-serif">
            <span>परिणय सूत्र</span>
            <span>·</span>
            <span>TWO HEARTS, ONE SOUL</span>
          </div>
          <h2
            className="text-2xl sm:text-4xl font-bold text-[#faedd8]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            The Auspicious Union
          </h2>
          <p className="text-xs sm:text-sm text-[#faedd8]/75 mt-2 max-w-xl mx-auto">
            Celebrating the sacred bond of Premchandra and Anupriya, uniting two noble Rajput families in harmony and joy.
          </p>
        </div>

        {/* 2-Column Split: Groom & Bride Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-10">
          {/* Card 1: The Groom (Premchandra) - Groom's Side */}
          <div className="relative rounded-3xl bg-gradient-to-b from-[#2b0811]/90 to-[#190408]/95 border-2 border-[#d4af37]/40 p-6 sm:p-8 flex flex-col justify-between shadow-2xl overflow-hidden group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#460f1b] border border-[#d4af37]/30 text-xs font-semibold text-[#f5d485] tracking-widest uppercase">
                  वर (The Groom)
                </span>
                <span className="text-[#d4af37] text-lg">❦</span>
              </div>

              <h3
                className="text-2xl sm:text-3xl font-extrabold text-[#faedd8] mb-1"
                style={{ fontFamily: "'Cinzel Decorative', 'Cinzel', serif" }}
              >
                Premchandra
              </h3>
              <p
                className="text-lg text-[#e8b958] italic font-serif mb-4"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                (Prem)
              </p>

              <div className="p-4 rounded-2xl bg-[#1b0409] border border-[#d4af37]/25 space-y-2 mb-4">
                <div className="flex items-start gap-2">
                  <span className="text-xs text-[#e8b958] font-semibold uppercase tracking-wider shrink-0 w-24">
                    Parents:
                  </span>
                  <div className="text-xs text-[#faedd8]">
                    <p className="font-semibold text-sm">Mrs. Mannu Devi</p>
                    <p className="font-semibold text-sm text-[#e8b958]">&amp; Mr. MunnaLal Rajput</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-2 border-t border-[#d4af37]/15">
                  <span className="text-xs text-[#e8b958] font-semibold uppercase tracking-wider shrink-0 w-24">
                    Family:
                  </span>
                  <p className="text-xs text-[#faedd8]/80">
                    Rajput Parivar (Host Family)
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#faedd8]/85 leading-relaxed font-sans">
                An accomplished, respectful, and devoted son who honors family values and traditions. His parents Mrs. Mannu Devi &amp; Mr. MunnaLal Rajput take immense pride in his auspicious union.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#d4af37]/20 flex items-center justify-between">
              <span className="text-[11px] text-[#e8b958] font-serif">
                वर पक्ष (Groom's Family)
              </span>
              <button
                onClick={triggerFlowerShower}
                className="text-xs text-[#faedd8]/80 hover:text-[#e8b958] flex items-center gap-1 transition-colors"
              >
                <Heart className="w-3.5 h-3.5 fill-current text-[#e11d48]" />
                <span>Bless Prem</span>
              </button>
            </div>
          </div>

          {/* Card 2: The Bride (Anupriya) */}
          <div className="relative rounded-3xl bg-gradient-to-b from-[#2b0811]/90 to-[#190408]/95 border-2 border-[#d4af37]/40 p-6 sm:p-8 flex flex-col justify-between shadow-2xl overflow-hidden group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#460f1b] border border-[#d4af37]/30 text-xs font-semibold text-[#f5d485] tracking-widest uppercase">
                  वधू (The Bride)
                </span>
                <span className="text-[#d4af37] text-lg">❦</span>
              </div>

              <h3
                className="text-2xl sm:text-3xl font-extrabold text-[#faedd8] mb-1"
                style={{ fontFamily: "'Cinzel Decorative', 'Cinzel', serif" }}
              >
                Anupriya
              </h3>
              <p
                className="text-lg text-[#e8b958] italic font-serif mb-4"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                (Anu)
              </p>

              <div className="p-4 rounded-2xl bg-[#1b0409] border border-[#d4af37]/25 space-y-2 mb-4">
                <div className="flex items-start gap-2">
                  <span className="text-xs text-[#e8b958] font-semibold uppercase tracking-wider shrink-0 w-24">
                    Parents:
                  </span>
                  <div className="text-xs text-[#faedd8]">
                    <p className="font-semibold text-sm">Mrs. Jayanti Devi</p>
                    <p className="font-semibold text-sm text-[#e8b958]">&amp; Mr. Vipin Rajput</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-2 border-t border-[#d4af37]/15">
                  <span className="text-xs text-[#e8b958] font-semibold uppercase tracking-wider shrink-0 w-24">
                    Family:
                  </span>
                  <p className="text-xs text-[#faedd8]/80">
                    Rajput Parivar · Muskara / Hamirpur
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#faedd8]/85 leading-relaxed font-sans">
                A graceful, radiant, and affectionate daughter who embodies warmth, cultural roots, and elegance. Warmly welcomed with love and blessings into the Rajput family.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#d4af37]/20 flex items-center justify-between">
              <span className="text-[11px] text-[#e8b958] font-serif">
                कन्या पक्ष (Bride's Family)
              </span>
              <button
                onClick={triggerFlowerShower}
                className="text-xs text-[#faedd8]/80 hover:text-[#e8b958] flex items-center gap-1 transition-colors"
              >
                <Heart className="w-3.5 h-3.5 fill-current text-[#e11d48]" />
                <span>Bless Anu</span>
              </button>
            </div>
          </div>
        </div>

        {/* Auspicious Mangalashtak / Vivah Sanskrit Blessings Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-[#2a070f] via-[#3d0e19] to-[#2a070f] border border-[#d4af37]/40 p-6 sm:p-8 text-center shadow-xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#e8b958] font-serif mb-2">
            मंगलम भगवान विष्णुः मंगलम गरुडध्वजः
          </p>
          <p
            className="text-sm sm:text-base font-medium text-[#faedd8] max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Noto Serif Devanagari', 'Rozha One', serif" }}
          >
            "मंगलम् पुण्डरीकाक्षः मङ्गलाय तनो हरिः॥<br />
            सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके। शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते॥"
          </p>
          <p className="text-xs text-[#e8b958]/80 font-sans mt-3">
            02 December 2026, Wednesday · JP Resort and RR Garden, Hamirpur Road, Muskara
          </p>
        </div>
      </div>
    </section>
  );
};
