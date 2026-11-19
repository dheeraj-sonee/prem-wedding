import React, { useState, useEffect } from 'react';
import { Heart, Send, Sparkles, MessageCircle, User, MapPin } from 'lucide-react';
import { triggerFlowerShower } from './FlowerShower';

interface Blessing {
  id: string;
  name: string;
  relationOrCity: string;
  message: string;
  timestamp: string;
  likes: number;
}

export const BlessingsWall: React.FC = () => {
  // Start completely empty so guests and family can post the first real blessings
  const [blessings, setBlessings] = useState<Blessing[]>(() => {
    try {
      const saved = localStorage.getItem('wedding_blessings_prem_anu_groom_live');
      if (saved) return JSON.parse(saved);
    } catch {
      // Ignore
    }
    return [];
  });

  const [name, setName] = useState('');
  const [relationOrCity, setRelationOrCity] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('wedding_blessings_prem_anu_groom_live', JSON.stringify(blessings));
    } catch {
      // Ignore
    }
  }, [blessings]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newBlessing: Blessing = {
      id: Date.now().toString(),
      name: name.trim(),
      relationOrCity: relationOrCity.trim() || 'Well-wisher',
      message: message.trim(),
      timestamp: 'Just now',
      likes: 1,
    };

    setBlessings([newBlessing, ...blessings]);
    setName('');
    setRelationOrCity('');
    setMessage('');
    setIsSubmitted(true);
    triggerFlowerShower();
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  const handleLike = (id: string) => {
    setBlessings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, likes: b.likes + 1 } : b))
    );
    triggerFlowerShower();
  };

  return (
    <section id="blessings" className="py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#300a12] border border-[#d4af37]/30 text-xs text-[#e8b958] mb-2 font-serif">
            <span>शुभाशीर्वाद एवं बधाई संदेश</span>
            <span>·</span>
            <span>SHAGUN &amp; BLESSINGS</span>
          </div>
          <h2
            className="text-2xl sm:text-4xl font-bold text-[#faedd8]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Blessings for Premchandra &amp; Anupriya
          </h2>
          <p className="text-xs sm:text-sm text-[#faedd8]/75 mt-2 max-w-xl mx-auto">
            Shower the lovely couple with your pious blessings, warm congratulations and heartfelt prayers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Blessing Form (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-b from-[#2a0811] to-[#180408] border border-[#d4af37]/40 p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-[#e8b958]" />
              <h3
                className="text-lg font-bold text-[#faedd8]"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Send Your Aashirvaad
              </h3>
            </div>
            <p className="text-xs text-[#faedd8]/75 mb-6">
              Be among the very first to write an auspicious blessing for Premchandra &amp; Anupriya!
            </p>

            {isSubmitted && (
              <div className="p-3 mb-4 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-2">
                <Heart className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                <span>धन्यवाद! Your auspicious blessings have been placed on the couple's wall.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#e8b958] mb-1.5 uppercase tracking-wider">
                  Your Name (आपका शुभ नाम) *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-[#faedd8]/40" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="e.g. Ramesh Rajput / Family"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#1a0408] border border-[#d4af37]/30 text-xs sm:text-sm text-[#faedd8] placeholder-[#faedd8]/30 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#e8b958] mb-1.5 uppercase tracking-wider">
                  Relation or City (रिश्ता / शहर)
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-4 h-4 text-[#faedd8]/40" />
                  <input
                    type="text"
                    value={relationOrCity}
                    onChange={(e) => setRelationOrCity(e.target.value)}
                    placeholder="e.g. Muskara / Kanpur / Family Friend"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#1a0408] border border-[#d4af37]/30 text-xs sm:text-sm text-[#faedd8] placeholder-[#faedd8]/30 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#e8b958] mb-1.5 uppercase tracking-wider">
                  Your Blessing &amp; Wishes (बधाई संदेश) *
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  placeholder="May Lord Ganesha bless Premchandra and Anupriya with lifelong happiness, prosperity and eternal love..."
                  className="w-full p-3 rounded-xl bg-[#1a0408] border border-[#d4af37]/30 text-xs sm:text-sm text-[#faedd8] placeholder-[#faedd8]/30 focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e8b958] to-[#d4af37] text-[#120507] font-bold text-xs sm:text-sm shadow-md hover:brightness-110 transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Blessings &amp; Shower Flowers</span>
                </button>

                <a
                  href={`https://wa.me/916387478245?text=${encodeURIComponent(
                    `Namaste MunnaLal ji & Mannu ji! Heartiest congratulations to Premchandra and Anupriya on their wedding.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-[#25d366]/20 border border-[#25d366]/40 text-[#a7f3d0] hover:bg-[#25d366]/30 transition-all text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#25d366]" />
                  <span>Send Direct WhatsApp Wish (+91 63874 78245)</span>
                </a>
              </div>
            </form>
          </div>

          {/* Right Column: Feed of Auspicious Blessings (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs uppercase tracking-wider text-[#e8b958] font-serif">
                Aashirvaad Wall ({blessings.length === 0 ? 'Be the First to Bless' : `${blessings.length} Blessings`})
              </span>
              <button
                onClick={triggerFlowerShower}
                className="text-xs text-[#faedd8]/80 hover:text-[#e8b958] flex items-center gap-1 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#e8b958]" />
                <span>Shower Marigolds</span>
              </button>
            </div>

            {blessings.length === 0 ? (
              /* Clean, Royal Empty State */
              <div className="rounded-3xl bg-[#24060d]/80 border-2 border-dashed border-[#d4af37]/30 p-8 sm:p-12 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#3d0e19] border border-[#d4af37]/40 flex items-center justify-center mb-4 text-[#e8b958]">
                  <Heart className="w-8 h-8 fill-[#e11d48]/20 text-[#e8b958]" />
                </div>

                <h4
                  className="text-lg sm:text-xl font-bold text-[#faedd8] mb-2"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Be the First to Bless the Couple!
                </h4>

                <p className="text-xs sm:text-sm text-[#faedd8]/70 max-w-md mx-auto leading-relaxed mb-6 font-sans">
                  The blessings wall is now open. Write your warm congratulations, shagun, and prayers for Premchandra &amp; Anupriya using the form.
                </p>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#330a13] border border-[#d4af37]/30 text-xs text-[#e8b958] font-serif">
                  <span>शुभकामनाएं एवं शुभाशीर्वाद सादर आमंत्रित हैं</span>
                </div>
              </div>
            ) : (
              <div className="space-y-3.5 max-h-[580px] overflow-y-auto pr-1">
                {blessings.map((b) => (
                  <div
                    key={b.id}
                    className="rounded-2xl bg-[#24060d]/90 border border-[#d4af37]/25 p-4 sm:p-5 hover:border-[#d4af37]/50 transition-all shadow-md"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <h4 className="text-sm font-bold text-[#faedd8] font-serif">
                          {b.name}
                        </h4>
                        <div className="flex items-center gap-2 text-[11px] text-[#e8b958]">
                          <span>{b.relationOrCity}</span>
                          <span>·</span>
                          <span className="text-[#faedd8]/50">{b.timestamp}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleLike(b.id)}
                        className="px-2.5 py-1 rounded-full bg-[#3d0e19] border border-[#d4af37]/30 text-xs text-[#f43f5e] hover:bg-[#521322] transition-colors flex items-center gap-1.5 active:scale-90"
                        title="Send love"
                      >
                        <Heart className="w-3.5 h-3.5 fill-current" />
                        <span className="text-[11px] font-mono tabular-nums text-[#faedd8]">
                          {b.likes}
                        </span>
                      </button>
                    </div>

                    <p className="text-xs sm:text-sm text-[#faedd8]/90 leading-relaxed font-sans">
                      "{b.message}"
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
