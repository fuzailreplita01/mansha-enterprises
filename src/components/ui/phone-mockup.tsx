'use client';
import React from 'react';
import { motion } from 'framer-motion';

export type BadgeConfig = {
  icon?: React.ReactNode;
  iconStr?: string;
  title: string;
  subtitle: string;
  position: 'top-right' | 'bottom-left' | 'top-left' | 'bottom-right';
  delay?: number;
};

type PhoneMockupProps = {
  imageSrc?: string;
  badges?: BadgeConfig[];
  className?: string;
};

export function PhoneMockup({ imageSrc, badges = [], className = '' }: PhoneMockupProps) {
  const positionClasses = {
    'top-right': 'top-8 sm:top-12 -right-4 sm:-right-8 lg:-right-12 xl:right-0',
    'bottom-left': 'bottom-8 sm:bottom-12 -left-4 sm:-left-8 lg:-left-12 xl:left-0',
    'top-left': 'top-24 sm:top-32 -left-4 sm:-left-8 lg:-left-12 xl:left-0',
    'bottom-right': 'bottom-24 sm:bottom-32 -right-4 sm:-right-8 lg:-right-12 xl:right-0',
  };

  const getAnimation = (pos: string) => {
    if (pos.includes('top')) return { y: [0, -8, 0] };
    return { y: [0, 8, 0] };
  };

  return (
    <div className={`relative flex items-center justify-center w-full h-full min-h-[400px] ${className}`}>
      {/* Ambient glow — electric yellow */}
      <div className="absolute w-72 h-72 rounded-full bg-[#FAFF69]/5 blur-[100px] pointer-events-none" />
      <div className="absolute w-80 h-80 rounded-full border border-[#FAFF69]/[0.04] pointer-events-none" />
      <div className="absolute w-56 h-56 rounded-full border border-[#FAFF69]/[0.02] pointer-events-none" />

      {/* Phone frame */}
      <div className="relative z-10 w-48 sm:w-56 aspect-[9/19] rounded-[2.5rem] border-2 border-[#FAFF69]/[0.15] bg-[#0d1117] shadow-2xl shadow-[#FAFF69]/10 flex flex-col overflow-hidden text-white transition-transform duration-500 hover:-translate-y-2">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 rounded-b-[1.25rem] bg-[#050510] z-20 flex items-center justify-center border-b border-x border-[#FAFF69]/10">
            <div className="w-8 h-1 rounded-full bg-white/10"></div>
        </div>
        
        {imageSrc ? (
           <div className="relative w-full h-full bg-[#050510]">
              <img src={imageSrc} alt="" className="w-full h-full object-cover brightness-[0.85] contrast-125" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80"></div>
              {/* Scanline overlay for that tech feel */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'transparent', backgroundSize: '100% 4px' }}></div>
           </div>
        ) : (
            /* Abstract Default Content (For Home Page) */
            <div className="flex-1 mt-10 px-4 pt-2 flex flex-col gap-2 relative z-10 bg-gradient-to-b from-[#0A0A0A] to-[#121212]">
              <div className="flex justify-between items-center">
                <div className="w-10 h-1.5 rounded-full bg-white/15" />
                <div className="w-6 h-1.5 rounded-full bg-[#FAFF69]/60" />
              </div>
              <div className="mt-2 space-y-2">
                <div className="h-2 w-full rounded-full bg-white/[0.08]" />
                <div className="h-2 w-4/5 rounded-full bg-white/[0.08]" />
                <div className="h-2 w-3/5 rounded-full bg-white/[0.08]" />
              </div>
              <div className="flex flex-col items-center gap-3 mt-10">
                <div className="w-16 h-16 rounded-full bg-[#FAFF69]/15 border border-[#FAFF69]/25 flex items-center justify-center shadow-[0_0_20px_rgba(250,255,105,0.15)] relative">
                  <div className="absolute inset-0 rounded-full animate-ping bg-[#FAFF69]/20" style={{ animationDuration: '3s' }}></div>
                  <svg className="w-8 h-8 text-[#FAFF69] relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="h-2 w-24 rounded-full bg-[#FAFF69]/30 mx-auto mt-2" />
                <div className="h-1.5 w-16 rounded-full bg-white/15 mx-auto" />
              </div>
              <div className="mt-auto mx-1 mb-3">
                <div className="h-2 w-full rounded-full bg-white/[0.08] overflow-hidden">
                  <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-[#FAFF69] to-[#E6EB52]" />
                </div>
              </div>
            </div>
        )}

        {/* Bottom Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20">
          <div className="w-20 h-1 rounded-full bg-white/30" />
        </div>
      </div>

      {/* Floating badges */}
      {badges.map((badge, idx) => (
        <motion.div
          key={idx}
          className={`absolute z-20 bg-[#0A0A0A]/95 backdrop-blur-md border border-[#FAFF69]/20 rounded-2xl px-3.5 py-2.5 shadow-2xl ${positionClasses[badge.position] || positionClasses['top-right']}`}
          animate={getAnimation(badge.position)}
          transition={{ repeat: Infinity, duration: 3.5 + (idx * 0.5), ease: 'easeInOut', delay: badge.delay || 0 }}
        >
          <div className="flex items-center gap-3 text-white">
            <span className="w-8 h-8 rounded-full bg-[#FAFF69]/15 flex items-center justify-center shrink-0 border border-[#FAFF69]/20">
              {badge.iconStr ? (
                <div dangerouslySetInnerHTML={{ __html: badge.iconStr }} className="[&>svg]:w-4 [&>svg]:h-4 [&>svg]:text-[#FAFF69] flex items-center justify-center" />
              ) : (
                badge.icon
              )}
            </span>
            <div className="text-left">
              <div className="text-xs font-bold leading-none text-white tracking-tight">{badge.title}</div>
              <div className="text-[10px] text-[#FAFF69]/80 mt-1 font-medium tracking-wide uppercase">{badge.subtitle}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
