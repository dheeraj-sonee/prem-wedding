import React, { useState } from 'react';
import { MapPin, Navigation, Phone, Copy, Check, ExternalLink, MessageCircle, Car, Clock } from 'lucide-react';

export const VenueSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const venueAddress = 'JP Resort and RR Garden, Hamirpur Road, Muskara, Dist. - Hamirpur, Uttar Pradesh';
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=JP+Resort+and+RR+Garden+Hamirpur+Road+Muskara+Hamirpur';

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(venueAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="venue" className="py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#300a12] border border-[#d4af37]/30 text-xs text-[#e8b958] mb-2 font-serif">
            <span>स्थान एवं मार्ग निर्देश</span>
            <span>·</span>
            <span>VENUE &amp; LOCATION</span>
          </div>
          <h2
            className="text-2xl sm:text-4xl font-bold text-[#faedd8]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            JP Resort and RR Garden
          </h2>
          <p className="text-xs sm:text-sm text-[#faedd8]/75 mt-2 max-w-xl mx-auto">
            Hamirpur Road, Muskara, District Hamirpur, Uttar Pradesh
          </p>
        </div>

        {/* Main Venue Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Card: Venue Details & Quick Navigation (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-gradient-to-b from-[#2a0810]/90 to-[#180408]/95 border border-[#d4af37]/40 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              {/* Title & Badge */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#e8b958] font-serif block mb-1">
                    Wedding Destination
                  </span>
                  <h3
                    className="text-xl sm:text-2xl font-bold text-[#faedd8]"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    JP Resort &amp; RR Garden
                  </h3>
                </div>
                <div className="p-3 rounded-2xl bg-[#3d0e19] border border-[#d4af37]/40 text-[#f5d485] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>

              {/* Exact Address Box */}
              <div className="p-4 rounded-2xl bg-[#1d050a] border border-[#d4af37]/25 mb-6">
                <p className="text-xs text-[#e8b958] font-semibold mb-1 uppercase tracking-wider">
                  Full Postal Address
                </p>
                <p className="text-sm sm:text-base font-medium text-[#faedd8] leading-relaxed">
                  JP Resort and RR Garden,<br />
                  Hamirpur Road, Muskara,<br />
                  District - Hamirpur, Uttar Pradesh - 210506
                </p>

                <div className="flex flex-wrap items-center gap-2 mt-4 pt-3 border-t border-[#d4af37]/20">
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2e0910] border border-[#d4af37]/40 text-xs text-[#faedd8] hover:text-[#e8b958] hover:border-[#d4af37] transition-all"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#e8b958]" />}
                    <span>{copied ? 'Address Copied!' : 'Copy Full Address'}</span>
                  </button>

                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#d4af37] text-[#140407] font-semibold text-xs hover:bg-[#e8b958] transition-all"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                  </a>
                </div>
              </div>

              {/* Travel & Route Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-[#22070e] border border-[#d4af37]/20 flex items-start gap-3">
                  <Car className="w-5 h-5 text-[#e8b958] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-[#faedd8]">Hamirpur Road Connectivity</p>
                    <p className="text-[11px] text-[#faedd8]/70 mt-0.5">
                      Directly situated on the main Hamirpur-Muskara highway with ample valet &amp; guest parking.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#22070e] border border-[#d4af37]/20 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#e8b958] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-[#faedd8]">Auspicious Date</p>
                    <p className="text-[11px] text-[#faedd8]/70 mt-0.5">
                      Wednesday, 02 December 2026. Evening Baraat procession &amp; Jaimala ceremony.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Note from Groom's Family */}
            <div className="p-3.5 rounded-xl bg-[#360c16]/50 border border-[#d4af37]/20 text-xs text-[#faedd8]/80 text-center sm:text-left">
              <span className="text-[#e8b958] font-serif font-bold">स्वागतातुर: </span>
              Mrs. Mannu Devi, Mr. MunnaLal Rajput एवं समस्त राजपूत परिवार आपके सत्कार हेतु प्रतीक्षारत हैं।
            </div>
          </div>

          {/* Right Card: Direct Contact & Assistance (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-b from-[#2a0810]/90 to-[#180408]/95 border border-[#d4af37]/40 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="mb-4">
                <span className="text-xs uppercase tracking-wider text-[#e8b958] font-serif block mb-1">
                  Assistance &amp; Warm Welcomes
                </span>
                <h3
                  className="text-xl sm:text-2xl font-bold text-[#faedd8]"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Contact &amp; Directions Help
                </h3>
                <p className="text-xs text-[#faedd8]/75 mt-1">
                  For directions, Baraat coordination, stay arrangements or wedding inquiries, feel free to contact the family:
                </p>
              </div>

              {/* Contact Card 1 */}
              <div className="p-4 rounded-2xl bg-[#1e050b] border border-[#d4af37]/30 mb-3 hover:border-[#d4af37]/60 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-xs text-[#e8b958] font-serif font-semibold">
                      Mr. MunnaLal Rajput &amp; Family
                    </p>
                    <p className="text-[11px] text-[#faedd8]/70">Groom's Father / वर पक्ष</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#3d0e19] text-[#e8b958] flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#d4af37]/15">
                  <a
                    href="tel:+916387478245"
                    className="text-base font-bold text-[#faedd8] hover:text-[#e8b958] font-mono tracking-wider transition-colors"
                  >
                    +91 63874 78245
                  </a>
                  <a
                    href="tel:+916387478245"
                    className="px-3 py-1 rounded-lg bg-[#d4af37] text-[#120507] text-xs font-bold hover:bg-[#e8b958] transition-all"
                  >
                    Call Now
                  </a>
                </div>
              </div>

              {/* Contact Card 2 */}
              <div className="p-4 rounded-2xl bg-[#1e050b] border border-[#d4af37]/30 mb-4 hover:border-[#d4af37]/60 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-xs text-[#e8b958] font-serif font-semibold">
                      Rajput Family Coordinator
                    </p>
                    <p className="text-[11px] text-[#faedd8]/70">Groom's Side Helpdesk</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#3d0e19] text-[#e8b958] flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#d4af37]/15">
                  <a
                    href="tel:+918953813558"
                    className="text-base font-bold text-[#faedd8] hover:text-[#e8b958] font-mono tracking-wider transition-colors"
                  >
                    +91 89538 13558
                  </a>
                  <a
                    href="tel:+918953813558"
                    className="px-3 py-1 rounded-lg bg-[#d4af37] text-[#120507] text-xs font-bold hover:bg-[#e8b958] transition-all"
                  >
                    Call Now
                  </a>
                </div>
              </div>

              {/* WhatsApp Quick Message */}
              <a
                href="https://wa.me/916387478245?text=Namaste!%20Heartiest%20congratulations%20on%20the%20wedding%20of%20Premchandra%20and%20Anupriya."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#25d366]/20 via-[#25d366]/30 to-[#25d366]/20 border border-[#25d366]/50 text-[#a7f3d0] hover:bg-[#25d366]/40 transition-all flex items-center justify-center gap-2 text-xs font-semibold"
              >
                <MessageCircle className="w-4 h-4 text-[#25d366]" />
                <span>Message Family on WhatsApp (+91 63874 78245)</span>
              </a>
            </div>

            {/* Respectful Family Closing */}
            <div className="text-center pt-4 border-t border-[#d4af37]/20 mt-4">
              <p className="text-[11px] text-[#e8b958] font-serif">
                विनम्र अनुरोध: आप सभी सपरिवार पधारकर नवदम्पति को आशीर्वाद प्रदान करें।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
