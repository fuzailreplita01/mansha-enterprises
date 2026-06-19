'use client';
import { motion } from 'framer-motion';
import { Spotlight } from './ui/spotlight';
import { PhoneMockup, type BadgeConfig } from './ui/phone-mockup';

/* ── Inline SVG icons (Heroicons/Lucide stroke style, 24×24, sw=2) ── */
const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-4 h-4 shrink-0">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
);
const IconBolt = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-4 h-4 shrink-0">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const IconWrench = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-4 h-4 shrink-0">
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
  </svg>
);
const IconDroplet = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-4 h-4 shrink-0">
    <path d="M12 2C12 2 5 10 5 15a7 7 0 0014 0c0-5-7-13-7-13z"/>
  </svg>
);

const FEATURES = [
  { Icon: IconShield, label: 'Genuine Products' },
  { Icon: IconBolt,   label: 'Dependable Service' },
  { Icon: IconWrench, label: 'Quality Support' },
];

const homeBadges: BadgeConfig[] = [
  { icon: <IconBolt />, title: 'AC Service', subtitle: 'Same-day install', position: 'top-right', delay: 0 },
  { icon: <IconWrench />, title: 'Mobile Sales', subtitle: 'New & Used phones', position: 'bottom-left', delay: 0.6 },
  { icon: <IconDroplet />, title: 'Water Purifier', subtitle: 'Filter service', position: 'top-left', delay: 0.3 },
  { icon: <IconShield />, title: 'Trust Warranty', subtitle: 'Dependable support', position: 'bottom-right', delay: 0.9 },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.7, ease: 'easeOut', delay: 0.3 } },
};

export function SplineHero() {

  return (
    <section
      className="relative w-full overflow-hidden bg-[#07060E] text-white"
      style={{ minHeight: '100vh' }}
      aria-label="Hero"
    >
      <Spotlight size={640} />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.4) 1px,transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      {/* Top radial glow — gold */}
      <div
        className="absolute inset-x-0 top-0 h-72 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(250,255,105,0.10), transparent)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 container-page flex flex-col md:flex-row items-center gap-10 lg:gap-16 pt-20 pb-20 md:pt-28 md:pb-28" style={{ minHeight: 'inherit' }}>

        {/* ── Left: copy ── */}
        <motion.div
          className="flex-1 flex flex-col items-start text-left"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-widest uppercase text-brand/75 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" aria-hidden="true" />
              Mansha Enterprises · Alamgirnagar, Ahmednagar
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-white uppercase"
          >
            Mobiles. AC.<br />
            Water Purifiers.<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand via-brand-accent to-brand">
              Sales & Service.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p variants={fadeUp} className="mt-5 text-base sm:text-lg text-slate-400 max-w-md leading-relaxed">
            Your trusted local shop for premium <strong className="text-slate-200 font-medium">mobile phones, air conditioners, and water purifiers</strong> in Alamgirnagar, Ahmednagar.
          </motion.p>

          {/* Feature pills — SVG icons */}
          <motion.ul variants={fadeUp} className="mt-6 flex flex-wrap gap-2" role="list">
            {FEATURES.map(({ Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/[0.08] border border-brand/[0.18] text-xs text-[#E8C060]"
              >
                <Icon />
                {label}
              </li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            {/* Primary — Brand Yellow button with black text */}
            <a
              href="tel:+917262080880"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand hover:bg-[#F0C040] text-[#0A0A0A] text-sm font-semibold transition-all duration-150 shadow-[0_0_20px_rgba(250,255,105,0.30)] hover:shadow-[0_0_28px_rgba(250,255,105,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-[#07060E]"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              Call Now
            </a>
            {/* WhatsApp */}
            <a
              href={`https://wa.me/917262080880?text=${encodeURIComponent('Hi, I\'d like to enquire about your products and services.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.10] border border-white/[0.10] text-white text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07060E]"
            >
              <svg className="w-4 h-4 text-[#25d366]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            {/* Book Online — ghost brand color */}
            <a
              href="/book-repair"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-brand/25 text-brand hover:text-[#fff] hover:border-brand/50 hover:bg-brand/[0.06] text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07060E]"
            >
              Enquire Online
            </a>
          </motion.div>
        </motion.div>

        {/* ── Right: phone illustration ── */}
        <motion.div
          className="flex-1 w-full"
          variants={fadeIn}
          initial="hidden"
          animate="show"
          aria-hidden="true"
        >
          <PhoneMockup badges={homeBadges} />
        </motion.div>

      </div>
    </section>
  );
}
