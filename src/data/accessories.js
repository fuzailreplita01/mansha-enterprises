/**
 * Accessory categories. icon is an SVG HTML string rendered via set:html.
 */
const svgWrap = (paths) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5" aria-hidden="true">${paths}</svg>`;

export const accessories = [
  {
    id: 'covers',
    icon: svgWrap('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>'),
    title: 'Phone Covers & Cases',
    description: 'Slim, rugged, and premium cases for all popular smartphone models. Protect your phone in style.',
    items: ['Clear silicone cases', 'Rugged shockproof armor cases', 'Leather flip wallet cases', 'Premium matte cases'],
    whatsappMsg: 'Hi, I am looking for a phone cover/case. My device model is: ',
  },
  {
    id: 'chargers',
    icon: svgWrap('<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'),
    title: 'Chargers & Adapters',
    description: 'Ultra-fast chargers, adapters, and MagSafe wireless pads for all major smartphone brands.',
    items: ['USB-C 20W/33W/65W fast chargers', 'Apple MagSafe chargers', 'Multi-port charging blocks', 'Car chargers'],
    whatsappMsg: 'Hi, I am looking for a fast charger. My device model is: ',
  },
  {
    id: 'cables',
    icon: svgWrap('<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>'),
    title: 'Cables & Connectivity',
    description: 'High-speed braided data cables, audio adapters, and OTG connectors built for daily wear.',
    items: ['Braided Type-C to Type-C', 'Heavy-duty Lightning cables', 'USB to Type-C cables', 'Type-C to 3.5mm adapters'],
    whatsappMsg: 'Hi, I need a durable data/charging cable. My requirements: ',
  },
  {
    id: 'earphones',
    icon: svgWrap('<path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>'),
    title: 'Earbuds & Audio',
    description: 'Wired and wireless Bluetooth earbuds, neckbands, and speakers from top audio brands.',
    items: ['TWS wireless earbuds', 'HD bass Bluetooth neckbands', 'Type-C and 3.5mm wired earphones', 'Mini Bluetooth speakers'],
    whatsappMsg: 'Hi, I am looking for earbuds/neckbands. My budget and preference: ',
  },
  {
    id: 'ac-stabilizers',
    icon: svgWrap('<rect x="2" y="2" width="20" height="20" rx="4"/><line x1="6" y1="12" x2="18" y2="12"/><line x1="12" y1="6" x2="12" y2="18"/>'),
    title: 'AC Stabilizers & remotes',
    description: 'Digital voltage stabilizers to protect your AC from power fluctuations, plus universal remotes.',
    items: ['4kVA/5kVA Digital AC Stabilizers', 'Heavy-duty wall mounting brackets', 'Universal AC remote controllers', 'Outdoor unit protective covers'],
    whatsappMsg: 'Hi, I need a stabilizer or mounting accessories for my AC. Details: ',
  },
  {
    id: 'purifier-spares',
    icon: svgWrap('<circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>'),
    title: 'Water Purifier Spares & Filters',
    description: 'Premium RO membranes, pre-filters, carbon filters, sediment filters, and booster pumps.',
    items: ['High-TDS RO Membranes (75/100 GPD)', 'Pre-filter housings and spun candles', 'Active Copper & Carbon filter cartridges', 'Heavy-duty booster pumps & SMPS adapters'],
    whatsappMsg: 'Hi, I need filters or spare parts for my water purifier. Details: ',
  },
];
