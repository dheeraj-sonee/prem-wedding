import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { GaneshaHeader } from './components/GaneshaHeader';
import { HeroSection } from './components/HeroSection';
import { CountdownTimer } from './components/CountdownTimer';
import { CoupleSection } from './components/CoupleSection';
import { CeremoniesSection } from './components/CeremoniesSection';
import { FormalCard } from './components/FormalCard';
import { VenueSection } from './components/VenueSection';
import { BlessingsWall } from './components/BlessingsWall';
import { Footer } from './components/Footer';
import { FlowerShower } from './components/FlowerShower';

export default function App() {
  const [continuousPetals, setContinuousPetals] = useState(true);

  return (
    <div id="top" className="min-h-screen bg-[#120507] text-[#faedd8] flex flex-col relative selection:bg-[#d4af37] selection:text-[#120507]">
      {/* Ambient Floating Rose & Marigold Petals */}
      <FlowerShower continuous={continuousPetals} />

      {/* Top Navigation Bar */}
      <Navbar
        continuousPetals={continuousPetals}
        setContinuousPetals={setContinuousPetals}
      />

      {/* Top Auspicious Invocation: Lord Ganesha & Vakratunda Mahakaya Mantra */}
      <GaneshaHeader />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Bride & Groom Portrait, Names, and Key Details */}
        <HeroSection />

        {/* Live Countdown to 02 December 2026 */}
        <CountdownTimer />

        {/* Dedicated Couple & Family Profile (From Groom's Side) */}
        <CoupleSection />

        {/* Auspicious Wedding Ceremonies: Mandap (30 Nov), Mayna (1 Dec), Tika (2 Dec), Vidai (3 Dec) */}
        <CeremoniesSection />

        {/* Traditional Royal Patrika / Formal Digital Wedding Card */}
        <FormalCard />

        {/* Venue & Location Directions (JP Resort and RR Garden, Muskara) & Phone Contacts */}
        <VenueSection />

        {/* Interactive Blessings Wall & Shagun Guestbook */}
        <BlessingsWall />
      </main>

      {/* Rajput Family Royal Footer */}
      <Footer />
    </div>
  );
}
