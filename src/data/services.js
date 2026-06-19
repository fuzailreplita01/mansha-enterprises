/**
 * Products & Services offered by Mansha Enterprises.
 * Used on the Services page and Home page overview grid.
 *
 * icon — full <svg> HTML string; rendered via set:html so it inherits currentColor.
 */

const svgWrap = (paths) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6" aria-hidden="true">${paths}</svg>`;

export const services = [
  {
    id: 'mobiles',
    slug: '#mobiles',
    icon: svgWrap(
      '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18" stroke-width="2.5"/>'
    ),
    title: 'Apple & Android Mobiles',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800',
    shortDesc: 'We sell premium smartphones specializing in Apple iPhones, along with certified pre-owned devices.',
    fullDesc: `Mansha Enterprises is your premier destination for premium smartphones and Apple products in Ahmednagar. We stock the latest models of Apple iPhones, Samsung Galaxy, OnePlus, Oppo, Vivo, and Realme. We also buy and sell certified pre-owned devices that undergo a rigorous 40-point quality check.`,
    whatsappMsg: 'Hi, I\'m interested in buying a phone (iPhone/Android). What models do you have in stock?',
  },
  {
    id: 'ac-sales',
    slug: '#ac-sales',
    icon: svgWrap(
      '<path d="M2 12h20M2 17h20M6 8V4a2 2 0 012-2h8a2 2 0 012 2v4M10 12v5M14 12v5"/>'
    ),
    title: 'Air Conditioners (AC)',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800',
    shortDesc: 'Energy-efficient ACs from top brands, with professional home installation & maintenance.',
    fullDesc: `Beat the heat with our premium range of Split and Window Air Conditioners. We sell leading AC brands like Voltas, Daikin, Lloyd, Blue Star, and LG. Our certified technicians provide complete home delivery, professional mounting, piping, wiring, and commissioning.`,
    whatsappMsg: 'Hi, I am looking to buy a new AC. Can you share prices and installation details?',
  },
  {
    id: 'purifiers',
    slug: '#purifiers',
    icon: svgWrap(
      '<path d="M12 2C12 2 5 10 5 15a7 7 0 0014 0c0-5-7-13-7-13z"/>'
    ),
    title: 'Water Purifiers',
    image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&q=80&w=800',
    shortDesc: 'RO, UV, and Copper water purifiers for clean, safe drinking water at home or office.',
    fullDesc: `Ensure your family's health with our advanced water purification systems. We offer sales and installation of RO (Reverse Osmosis), UV, and UF purifiers from brands like Kent, Aquaguard, and Pureit. We also provide complete service including filter and membrane replacement.`,
    whatsappMsg: 'Hi, I would like to enquire about purchasing or servicing a water purifier.',
  },
  {
    id: 'ac-service',
    slug: '#ac-service',
    icon: svgWrap(
      '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'
    ),
    title: 'AC Servicing & Repair',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    shortDesc: 'Gas charging, filter cleaning, leakage checks, and emergency repairs for split & window ACs.',
    fullDesc: `Keep your AC running at peak efficiency. We offer wet servicing, jet washing, gas refilling (R32, R410, R22), compressor diagnosis, leak repairs, and general troubleshooting. Regular servicing saves up to 25% on electricity bills.`,
    whatsappMsg: 'Hi, I need to book a service/repair for my AC. What are the charges?',
  },
  {
    id: 'mobile-repair',
    slug: '#mobile-repair',
    icon: svgWrap(
      '<path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>'
    ),
    title: 'Apple & All-Brand Mobile Repair',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    shortDesc: 'Specialized Apple iPhone & smartphone repair: screen replacement, battery swap, and board diagnostics.',
    fullDesc: `Expert diagnostic and repair services for Apple products, iPhones, and Android smartphones. We stock OEM-grade parts, including premium OLED screens, high-capacity batteries, charging ports, and camera modules. Enjoy rapid turnarounds (typically under 2 hours).`,
    whatsappMsg: 'Hi, I need to get my iPhone/smartphone repaired. Can you give me an estimate?',
  },
  {
    id: 'purifier-service',
    slug: '#purifier-service',
    icon: svgWrap(
      '<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>'
    ),
    title: 'Purifier Service & Filters',
    image: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&q=80&w=800',
    shortDesc: 'Periodic filter replacement, membrane health tests, TDS checks, and motor repairs.',
    fullDesc: `Clean drinking water requires timely filter replacements. We stock high-quality sediment filters, carbon filters, RO membranes, booster pumps, and SMPS power supplies. We provide on-site service, TDS calibration, and sanitization.`,
    whatsappMsg: 'Hi, my water purifier needs filter replacement or service. When can a technician visit?',
  },
  {
    id: 'led-tv-smart-home',
    slug: '#led-tv-smart-home',
    icon: svgWrap(
      '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>'
    ),
    title: 'Sony LED TV & Smart Automation',
    image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=800',
    shortDesc: 'Sony, Samsung & LG LED TV display panel repairs, and smart residence & office automation.',
    fullDesc: `Expert diagnostics and panel service for Sony LED TVs, LG, and Samsung smart televisions. We also design and deploy smart residence and office automation setups—integrating smart switches (for ACs), automated purifiers, lighting, and security.`,
    whatsappMsg: 'Hi, I would like to enquire about Sony LED TV repair or office/residence automation setup.',
  },
];
