import React, { useState } from 'react';
import { Copy, Check, Share2, Sparkles, Calendar } from 'lucide-react';
import { triggerFlowerShower } from './FlowerShower';

export const FormalCard: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const invitationText = `॥ श्री गणेशाय नमः ॥
वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।
निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥

सादर निमंत्रण (वर पक्ष / Groom's Side)
श्रीमती मन्नू देवी एवं श्री मुन्नालाल राजपूत

परमपिता परमात्मा की असीम कृपा से हमारे प्रिय सुपुत्र
आयुष्मान प्रेमचन्द्र (प्रेम)
(सुपुत्र: श्रीमती मन्नू देवी एवं श्री मुन्नालाल राजपूत)

संग

आयुष्मती अनूपप्रिया (अनु)
(सुपुत्री: श्रीमती जयंती देवी एवं श्री विपिन राजपूत)

के शुभ पावन परिणय संस्कार में आपकी गरिमामयी उपस्थिति सादर प्रार्थनीय है।

॥ मांगलिक कार्यक्रम (Wedding Ceremonies) ॥
• 30 नवम्बर 2026 (सोमवार): मंडप (Mandap Ceremony)
• 01 दिसम्बर 2026 (मंगलवार): मायना (Mayna Ceremony)
• 02 दिसम्बर 2026 (बुधवार): टीका एवं शुभ विवाह (Tika & Shubh Vivah)
• 03 दिसम्बर 2026 (गुरुवार): विदाई (Vidai Ceremony)

विवाह स्थल:
जे० पी० रिसॉर्ट एवं आर० आर० गार्डन, हमीरपुर रोड, मुस्करा, जिला - हमीरपुर

सम्पर्क सूत्र (Contact Details):
+91 63874 78245 | +91 89538 13558

दर्शनाभिलाषी:
समस्त राजपूत परिवार`;

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(invitationText);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
    }
  };

  const handleWhatsAppShare = () => {
    const encoded = encodeURIComponent(invitationText);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  const ceremoniesList = [
    {
      date: '30 Nov 2026',
      day: 'Monday / सोमवार',
      nameHindi: 'मंडप (मंडपाच्छादन)',
      nameEnglish: 'Mandap Ceremony',
      badge: '30 NOV',
    },
    {
      date: '01 Dec 2026',
      day: 'Tuesday / मंगलवार',
      nameHindi: 'मायना (भात पूजन)',
      nameEnglish: 'Mayna Ceremony',
      badge: '01 DEC',
    },
    {
      date: '02 Dec 2026',
      day: 'Wednesday / बुधवार',
      nameHindi: 'टीका एवं शुभ विवाह',
      nameEnglish: 'Tika & Shubh Vivah',
      badge: '02 DEC',
    },
    {
      date: '03 Dec 2026',
      day: 'Thursday / गुरुवार',
      nameHindi: 'विदाई (वधू आगमन)',
      nameEnglish: 'Vidai Ceremony',
      badge: '03 DEC',
    },
  ];

  return (
    <section id="invitation" className="py-12 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#300a12] border border-[#d4af37]/30 text-xs text-[#e8b958] mb-2 font-serif">
            <span>पारंपरिक लग्न पत्रिका</span>
            <span>·</span>
            <span>ROYAL INVITATION PATRIKA</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#faedd8]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Digital Wedding Invitation Card
          </h2>
          <p className="text-xs sm:text-sm text-[#faedd8]/70 mt-1 max-w-lg mx-auto">
            Formal invitation on behalf of Mrs. Mannu Devi &amp; Mr. MunnaLal Rajput (Groom's Family)
          </p>
        </div>

        {/* The Formal Card Design */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#2e0912] via-[#20050c] to-[#140307] border-2 border-[#d4af37]/50 shadow-2xl p-6 sm:p-12 text-center overflow-hidden">
          {/* Inner Golden Filigree Border */}
          <div className="absolute inset-3 sm:inset-4 rounded-2xl border border-dashed border-[#e8b958]/30 pointer-events-none" />

          {/* Golden Corner Accents */}
          <div className="absolute top-6 left-6 text-[#d4af37] text-lg select-none opacity-60">⚜</div>
          <div className="absolute top-6 right-6 text-[#d4af37] text-lg select-none opacity-60">⚜</div>
          <div className="absolute bottom-6 left-6 text-[#d4af37] text-lg select-none opacity-60">⚜</div>
          <div className="absolute bottom-6 right-6 text-[#d4af37] text-lg select-none opacity-60">⚜</div>

          {/* Ganesha Invocation Symbol */}
          <div className="mb-4">
            <span className="text-[#e8b958] text-xs font-serif uppercase tracking-[0.3em]">
              ॥ श्री गणेशाय नमः ॥
            </span>
            <div className="text-2xl text-[#d4af37] my-1">卐</div>
          </div>

          {/* Vakratunda Mahakaya Mantra */}
          <p
            className="text-base sm:text-xl font-bold text-[#f5d485] mb-6 leading-relaxed max-w-xl mx-auto"
            style={{ fontFamily: "'Noto Serif Devanagari', 'Rozha One', serif" }}
          >
            वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।<br />
            निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
          </p>

          {/* Inviting Family (Groom's Side) */}
          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest text-[#e8b958] font-serif mb-1">
              सादर आमंत्रण (वर पक्ष / From Groom's Side)
            </p>
            <h3
              className="text-xl sm:text-2xl font-bold text-[#faedd8]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              श्रीमती मन्नू देवी एवं श्री मुन्नालाल राजपूत
            </h3>
            <p className="text-xs sm:text-sm text-[#faedd8]/75 mt-2 max-w-xl mx-auto leading-relaxed">
              परमपिता परमात्मा की असीम अनुकम्पा से हमारे सुपुत्र के पावन परिणय संस्कार के इस मांगलिक अवसर पर आप सादर आमंत्रित हैं।
            </p>
          </div>

          {/* Couple Box */}
          <div className="my-6 py-6 px-4 rounded-2xl bg-[#3c0e18]/60 border border-[#d4af37]/35 max-w-2xl mx-auto">
            {/* Groom */}
            <div className="mb-4">
              <span className="text-[11px] uppercase tracking-wider text-[#e8b958] font-serif">
                आयुष्मान (The Groom)
              </span>
              <h4
                className="text-2xl sm:text-3xl font-extrabold text-[#faedd8]"
                style={{ fontFamily: "'Cinzel Decorative', 'Cinzel', serif" }}
              >
                प्रेमचन्द्र (प्रेम)
              </h4>
              <p className="text-xs text-[#faedd8]/80 mt-0.5">
                सुपुत्र: श्रीमती मन्नू देवी एवं श्री मुन्नालाल राजपूत
              </p>
            </div>

            {/* Sacred Sang / With symbol */}
            <div className="flex items-center justify-center gap-3 my-2 text-[#d4af37]">
              <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#e8b958]">
                संग · WITH
              </span>
              <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]" />
            </div>

            {/* Bride */}
            <div className="mt-3">
              <span className="text-[11px] uppercase tracking-wider text-[#e8b958] font-serif">
                आयुष्मती (The Bride)
              </span>
              <h4
                className="text-2xl sm:text-3xl font-extrabold text-[#faedd8]"
                style={{ fontFamily: "'Cinzel Decorative', 'Cinzel', serif" }}
              >
                अनूपप्रिया (अनु)
              </h4>
              <p className="text-xs text-[#faedd8]/80 mt-0.5">
                सुपुत्री: श्रीमती जयंती देवी एवं श्री विपिन राजपूत
              </p>
            </div>
          </div>

          {/* Ceremonies Schedule Box (Mandap, Mayna, Tika, Vidai) */}
          <div className="my-7 p-5 sm:p-6 rounded-2xl bg-[#20050c]/90 border-2 border-[#d4af37]/40 max-w-2xl mx-auto text-left shadow-lg">
            <div className="flex items-center justify-between mb-4 border-b border-[#d4af37]/25 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="text-[#d4af37] text-sm">✦</span>
                <h4
                  className="text-base sm:text-lg font-bold text-[#faedd8] tracking-wide"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  मांगलिक कार्यक्रम (Ceremonies)
                </h4>
              </div>
              <span className="text-[11px] text-[#e8b958] font-serif tracking-wider">
                शुभ मुहूर्त
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {ceremoniesList.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-3.5 rounded-xl bg-[#2e0912]/80 border border-[#d4af37]/30 hover:border-[#d4af37]/60 transition-all flex items-start gap-3"
                >
                  <div className="px-2 py-1 rounded-md bg-[#42101d] border border-[#d4af37]/40 text-[#f5d485] font-mono text-[10px] font-bold shrink-0 mt-0.5">
                    {item.badge}
                  </div>
                  <div>
                    <h5
                      className="text-sm font-bold text-[#faedd8]"
                      style={{ fontFamily: "'Noto Serif Devanagari', 'Rozha One', serif" }}
                    >
                      {item.nameHindi}
                    </h5>
                    <p className="text-[11px] text-[#e8b958] font-serif">
                      {item.nameEnglish}
                    </p>
                    <p className="text-[10px] text-[#faedd8]/60 mt-0.5 font-sans">
                      {item.day}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Date & Location in Hindi & English */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto my-6 text-left">
            <div className="p-4 rounded-xl bg-[#22070e] border border-[#d4af37]/25">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wider text-[#e8b958] uppercase">
                <Calendar className="w-3.5 h-3.5 text-[#e8b958]" />
                <span>टीका एवं शुभ विवाह तिथि</span>
              </div>
              <p className="text-base font-bold text-[#faedd8] mt-1">
                02 दिसम्बर 2026 (बुधवार)
              </p>
              <p className="text-xs text-[#faedd8]/70">
                Wednesday, 02 December 2026
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#22070e] border border-[#d4af37]/25">
              <p className="text-[11px] font-semibold tracking-wider text-[#e8b958] uppercase">
                मांगलिक स्थल (Vivah Venue)
              </p>
              <p className="text-base font-bold text-[#faedd8] mt-1">
                JP Resort and RR Garden
              </p>
              <p className="text-xs text-[#faedd8]/70">
                हमीरपुर रोड, मुस्करा, जिला - हमीरपुर
              </p>
            </div>
          </div>

          {/* Contacts & Family RSVP */}
          <div className="border-t border-[#d4af37]/30 pt-5 mt-4 text-xs text-[#faedd8]/80 space-y-2">
            <p className="font-serif tracking-wider text-[#e8b958] font-semibold text-sm">
              दर्शनाभिलाषी: समस्त राजपूत परिवार
            </p>
            <p className="text-[11px]">
              सम्पर्क सूत्र (Contact Details):{' '}
              <a href="tel:+916387478245" className="text-[#faedd8] font-semibold hover:underline">
                +91 63874 78245
              </a>
              {' '}/{' '}
              <a href="tel:+918953813558" className="text-[#faedd8] font-semibold hover:underline">
                +91 89538 13558
              </a>
            </p>
            <p className="text-[11px] text-[#faedd8]/60 italic">
              "आपकी गरिमामयी उपस्थिति एवं शुभाशीर्वाद हमारे लिए अमूल्य है।"
            </p>
          </div>

          {/* Action Buttons for the Card */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8 pt-4 border-t border-[#d4af37]/20">
            <button
              onClick={handleCopyText}
              className="px-4 py-2.5 rounded-xl bg-[#3b0d18] border border-[#d4af37]/50 text-[#faedd8] hover:text-[#e8b958] hover:border-[#d4af37] text-xs font-semibold flex items-center gap-2 transition-all active:scale-95"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#e8b958]" />}
              <span>{copied ? 'Card Text Copied!' : 'Copy Invitation Text'}</span>
            </button>

            <button
              onClick={handleWhatsAppShare}
              className="px-4 py-2.5 rounded-xl bg-[#25d366]/20 border border-[#25d366]/40 text-[#a7f3d0] hover:bg-[#25d366]/30 text-xs font-semibold flex items-center gap-2 transition-all active:scale-95"
            >
              <Share2 className="w-4 h-4 text-[#25d366]" />
              <span>Share Card on WhatsApp</span>
            </button>

            <button
              onClick={triggerFlowerShower}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#e8b958] text-[#140407] font-bold text-xs flex items-center gap-1.5 shadow-md hover:brightness-110 transition-all active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>पुष्प वर्षा (Flower Shower)</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
