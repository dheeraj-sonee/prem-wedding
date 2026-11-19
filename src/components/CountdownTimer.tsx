import React, { useState, useEffect } from 'react';
import { Calendar, Bell, Download } from 'lucide-react';

export const CountdownTimer: React.FC = () => {
  // Target: 02 December 2026 19:00 IST (UTC+5:30)
  const targetDate = new Date('2026-12-02T19:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isPast: boolean;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const addToGoogleCalendar = () => {
    const title = encodeURIComponent('Wedding of Premchandra & Anupriya (Rajput Family)');
    const details = encodeURIComponent(
      'Cordially invited by Mrs. Mannu Devi & Mr. MunnaLal Rajput to celebrate the wedding of Premchandra (Prem) and Anupriya (Anu).\nContact: +91 63874 78245 / +91 89538 13558'
    );
    const location = encodeURIComponent('JP Resort and RR Garden, Hamirpur Road, Muskara, Dist. - Hamirpur, Uttar Pradesh');
    // Start 20261202T133000Z (19:00 IST) to 20261203T023000Z (08:00 IST next day)
    const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20261202T133000Z/20261203T023000Z&details=${details}&location=${location}`;
    window.open(gCalUrl, '_blank', 'noopener,noreferrer');
  };

  const downloadICS = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Rajput Wedding//Premchandra and Anupriya//EN',
      'BEGIN:VEVENT',
      'UID:wedding-premchandra-anupriya-20261202@rajputwedding.in',
      'DTSTAMP:20261114T000000Z',
      'DTSTART:20261202T133000Z',
      'DTEND:20261203T023000Z',
      'SUMMARY:Wedding of Premchandra & Anupriya',
      'DESCRIPTION:Mrs. Mannu Devi & Mr. MunnaLal Rajput cordially invite you to the wedding of Premchandra (Prem) & Anupriya (Anu). Contact: +91 63874 78245 / +91 89538 13558',
      'LOCATION:JP Resort and RR Garden, Hamirpur Road, Muskara, Dist. - Hamirpur',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'wedding-premchandra-anupriya-02dec2026.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const timeBlocks = [
    { label: 'DAYS', hindi: 'दिन', value: timeLeft.days },
    { label: 'HOURS', hindi: 'घंटे', value: timeLeft.hours },
    { label: 'MINUTES', hindi: 'मिनट', value: timeLeft.minutes },
    { label: 'SECONDS', hindi: 'सेकंड', value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="py-12 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-b from-[#25060d]/90 via-[#1c0409]/95 to-[#120306] border border-[#d4af37]/35 p-6 sm:p-10 shadow-2xl overflow-hidden text-center">
          {/* Background Decorative Gold Watermark Mandala */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <svg width="400" height="400" viewBox="0 0 100 100" fill="#d4af37">
              <circle cx="50" cy="50" r="45" stroke="#d4af37" strokeWidth="0.5" fill="none" />
              <circle cx="50" cy="50" r="35" stroke="#d4af37" strokeWidth="0.5" fill="none" />
              <path d="M50 5 L55 35 L50 40 L45 35 Z M50 95 L55 65 L50 60 L45 65 Z M5 50 L35 55 L40 50 L35 45 Z M95 50 L65 55 L60 50 L65 45 Z" />
            </svg>
          </div>

          {/* Section Kicker */}
          <div className="inline-flex items-center gap-2 mb-3 text-xs uppercase tracking-[0.25em] text-[#e8b958]">
            <span>शुभ विवाह लग्न</span>
            <span>·</span>
            <span>COUNTING DOWN TO THE SACRED UNION</span>
          </div>

          <h3
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#faedd8] mb-2 tracking-wide"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Wednesday, 02 December 2026
          </h3>

          <p className="text-sm text-[#e8b958]/90 mb-8 font-serif">
            शुभ मुहूर्त · JP Resort & RR Garden, Hamirpur Road, Muskara
          </p>

          {/* 4 Counter Blocks */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto mb-8">
            {timeBlocks.map((block, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl bg-gradient-to-b from-[#380e18]/80 to-[#1e050b]/90 border border-[#d4af37]/30 p-4 sm:p-5 flex flex-col items-center justify-center shadow-lg group hover:border-[#d4af37]/60 transition-all"
              >
                {/* Number */}
                <span className="text-3xl sm:text-5xl font-extrabold text-[#faedd8] font-mono tabular-nums tracking-tight drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]">
                  {String(block.value).padStart(2, '0')}
                </span>

                {/* English label */}
                <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-[#e8b958] mt-1.5 uppercase">
                  {block.label}
                </span>

                {/* Hindi label */}
                <span className="text-[10px] text-[#faedd8]/50 font-serif">
                  {block.hindi}
                </span>

                {/* Corner ornament */}
                <div className="absolute top-1 right-1.5 text-[8px] text-[#d4af37]/30 group-hover:text-[#d4af37]/70">
                  ✦
                </div>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={addToGoogleCalendar}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#e8b958] text-[#140407] font-semibold text-xs sm:text-sm shadow-md hover:from-[#e8b958] hover:to-[#f5d485] transition-all flex items-center gap-2 active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Add to Google Calendar</span>
            </button>

            <button
              onClick={downloadICS}
              className="px-4 py-2.5 rounded-xl bg-[#2e0910] border border-[#d4af37]/40 text-[#faedd8] hover:text-[#e8b958] hover:border-[#d4af37] font-medium text-xs sm:text-sm transition-all flex items-center gap-2 active:scale-95"
            >
              <Download className="w-4 h-4 text-[#e8b958]" />
              <span>Download Apple / Outlook (.ics)</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
