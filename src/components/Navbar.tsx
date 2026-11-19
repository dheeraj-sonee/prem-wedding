import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Heart } from 'lucide-react';
import { weddingAudio } from '../utils/weddingAudio';
import { triggerFlowerShower } from './FlowerShower';

interface NavbarProps {
  continuousPetals: boolean;
  setContinuousPetals: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<NavbarProps> = ({ continuousPetals, setContinuousPetals }) => {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMusic = () => {
    const playing = weddingAudio.togglePlay(setIsPlayingMusic);
    setIsPlayingMusic(playing);
  };

  const handleFlowerShowerClick = () => {
    triggerFlowerShower();
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#140407]/95 backdrop-blur-md border-b border-[#d4af37]/25 shadow-lg'
          : 'bg-[#140407]/80 backdrop-blur-sm border-b border-[#d4af37]/15'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark (single text element, single-line) */}
        <a
          href="#top"
          className="text-lg sm:text-xl font-bold tracking-wider text-[#faedd8] whitespace-nowrap shrink-0 hover:text-[#e8b958] transition-colors"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Premchandra <span className="text-[#d4af37]">&</span> Anupriya
        </a>

        {/* Zone 2: 5 nav links with clean hover styling */}
        <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-[#faedd8]/85">
          <a
            href="#couple"
            className="hover:text-[#e8b958] transition-colors whitespace-nowrap shrink-0 tracking-wide"
          >
            The Couple
          </a>
          <a
            href="#ceremonies"
            className="hover:text-[#e8b958] transition-colors whitespace-nowrap shrink-0 tracking-wide"
          >
            Ceremonies
          </a>
          <a
            href="#invitation"
            className="hover:text-[#e8b958] transition-colors whitespace-nowrap shrink-0 tracking-wide"
          >
            Invitation Card
          </a>
          <a
            href="#venue"
            className="hover:text-[#e8b958] transition-colors whitespace-nowrap shrink-0 tracking-wide"
          >
            Venue & Map
          </a>
          <a
            href="#blessings"
            className="hover:text-[#e8b958] transition-colors whitespace-nowrap shrink-0 tracking-wide"
          >
            Blessings
          </a>
        </nav>

        {/* Zone 3: Functional action controls (Music + Flower Shower CTA) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Traditional Shehnai / Music toggle */}
          <button
            onClick={toggleMusic}
            title={isPlayingMusic ? 'Mute auspicious wedding melody' : 'Play auspicious Shehnai & Sitar melody'}
            className={`p-2 rounded-full border transition-all text-xs flex items-center gap-1.5 ${
              isPlayingMusic
                ? 'bg-[#d4af37] text-[#120507] border-[#d4af37] shadow-md shadow-[#d4af37]/30 animate-pulse'
                : 'bg-[#2a060d]/80 text-[#e8b958] border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#3d0d17]'
            }`}
          >
            {isPlayingMusic ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 opacity-70" />}
            <span className="hidden xl:inline text-[11px] font-medium whitespace-nowrap">
              {isPlayingMusic ? 'Music Playing' : 'Shehnai Melody'}
            </span>
          </button>

          {/* Ambient Petals floating switch */}
          <button
            onClick={() => setContinuousPetals(!continuousPetals)}
            title={continuousPetals ? 'Disable floating rose petals' : 'Enable floating rose petals'}
            className={`hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-full border text-xs transition-colors ${
              continuousPetals
                ? 'border-[#f43f5e] bg-[#f43f5e]/20 text-[#fca5a5]'
                : 'border-[#d4af37]/30 bg-[#2a060d]/60 text-[#faedd8]/70 hover:text-[#faedd8]'
            }`}
          >
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span className="text-[11px] whitespace-nowrap">Petals</span>
          </button>

          {/* Primary Action Button: Flower Shower */}
          <button
            onClick={handleFlowerShowerClick}
            className="px-3.5 sm:px-4 py-2 text-xs font-semibold text-[#120507] bg-gradient-to-r from-[#e8b958] via-[#f5d485] to-[#d4af37] rounded-lg hover:from-[#f5d485] hover:to-[#e8b958] shadow-md shadow-[#d4af37]/20 transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>पुष्प वर्षा (Shower Flowers)</span>
          </button>
        </div>
      </div>
    </header>
  );
};
