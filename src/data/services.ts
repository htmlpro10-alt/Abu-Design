export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  equipmentOrSpecs: string;
  idealFor: string;
  startingPrice: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'brand-identity',
    number: '01',
    title: 'Brand Identity & Graphic Design',
    subtitle: 'High-recall visual systems engineered for regional & national markets',
    description: 'We craft comprehensive visual identity systems that translate effortlessly across digital media, high-speed offset printing, and physical architecture. From custom bilingual Tamil-English typography to color-matched Pantone guidelines.',
    deliverables: [
      'Logo suite with primary, secondary & icon marks',
      'Bilingual Tamil & English typography pairing',
      'Comprehensive brand guidelines & color standards',
      'Vector master assets ready for print & digital'
    ],
    equipmentOrSpecs: 'Adobe Illustrator Vector Masters · Pantone PMS Swatches · ISO 12647 Standard',
    idealFor: 'Showrooms, healthcare brands, food chains, startups',
    startingPrice: '₹4,999'
  },
  {
    id: 'signage-large-format',
    number: '02',
    title: '3D Architectural & Outdoor Signage',
    subtitle: 'Day-to-night high visibility storefront presence and ACP facade fabrication',
    description: 'Specialized fabrication of precision laser-cut cast acrylic letters, energy-efficient Samsung LED channel letters, brushed Aluminium Composite Panel (ACP) cladding, and durable star flex banners built to withstand Tamil Nadu weather conditions.',
    deliverables: [
      '3D Acrylic LED glow channel letter signage',
      'Brushed ACP architectural facade cladding',
      'Heavy-duty Star Flex & front-lit/back-lit banners',
      'Rollup promotional standees & exhibition backdrop booths'
    ],
    equipmentOrSpecs: 'Cast Acrylic 3mm-8mm · IP67 Waterproof LED Modules · 1440 DPI Eco-Solvent Roland Printing',
    idealFor: 'Retail storefronts, hospitals, commercial complexes, educational campuses',
    startingPrice: '₹140 / sq.ft'
  },
  {
    id: 'commercial-offset',
    number: '03',
    title: 'Commercial Offset & Digital Printing',
    subtitle: 'High-speed precision color reproduction with volume cost efficiency',
    description: 'Powered by multi-color Heidelberg offset presses and digital production printers, we deliver sharp color fidelity on diverse paper stocks from 80 GSM maplitho to 400 GSM art card for catalogues, annual reports, and marketing collateral.',
    deliverables: [
      'Multi-page product catalogues & annual reports',
      'High-impact flyers, bi-fold & tri-fold brochures',
      'Custom carbonless bill books & corporate account ledgers',
      'Restaurant hard-bound laminated menus'
    ],
    equipmentOrSpecs: 'Multi-Color Heidelberg Speedmaster · 5000K Color Viewing Booth · 2400 DPI Digital Press',
    idealFor: 'Industrial manufacturers, corporate offices, restaurants, publishing houses',
    startingPrice: '₹850 / 1000 flyers'
  },
  {
    id: 'corporate-stationery',
    number: '04',
    title: 'Bespoke Corporate Stationery',
    subtitle: 'Tactile first impressions crafted with luxury paper stocks & precision finishes',
    description: 'Elevate your professional stature with bespoke business cards, executive letterheads, watermark envelopes, custom satin lanyards, and RFID identification badges produced with micron-level alignment.',
    deliverables: [
      '350–450 GSM Velvet matte visiting cards with Spot UV',
      'Metallic hot foil stamping (Gold, Rose Gold, Silver, Holographic)',
      'Bond paper executive letterheads & matching envelopes',
      'Sublimation satin lanyards & PVC ID cards'
    ],
    equipmentOrSpecs: '400 GSM Imported Board · German Heidelberg Die-Cutter · Precision Spot UV Coater',
    idealFor: 'Founders, doctors, lawyers, luxury consultants, executive directors',
    startingPrice: '₹450 / 100 cards'
  },
  {
    id: 'packaging-labels',
    number: '05',
    title: 'Custom Product Packaging & Labels',
    subtitle: 'Shelf-dominant packaging structures, food-grade boxes & roll labels',
    description: 'We engineer protective, eye-catching retail packaging solutions from rigid gift boxes and folding cartons to waterproof die-cut vinyl stickers and eco-friendly printed kraft paper bags.',
    deliverables: [
      'Rigid luxury gift boxes with magnetic closures',
      'Food-grade folding cartons with barrier coatings',
      'Waterproof BOPP & chrome paper die-cut labels',
      'Twisted-handle printed kraft retail shopping bags'
    ],
    equipmentOrSpecs: 'Automated Box Maker · Custom Die-Line Engineering · Food-Grade Certified Inks',
    idealFor: 'Spice exporters, confectionery brands, FMCG goods, apparel boutiques',
    startingPrice: '₹18 / unit'
  },
  {
    id: 'event-invitations',
    number: '06',
    title: 'Heritage Wedding & Event Stationery',
    subtitle: 'Opulent traditional & contemporary event invites blending heritage with modern craft',
    description: 'Celebrated across South Tamil Nadu for our heritage wedding invitations, traditional Tamil wedding cards (பத்திரிகை), and modern laser-cut suites featuring gold foil debossing, tassel inserts, and textured handmade paper.',
    deliverables: [
      'Laser-cut hardwood & acrylic luxury invitations',
      'Traditional Tamil font calligraphy & auspicious motifs',
      'Box invitations with sweet/dry fruit compartments',
      'Digital RSVP invitations with interactive map QR codes'
    ],
    equipmentOrSpecs: 'Laser Engraver · Hand-Fed Hot Foil Stamping · Textured Handmade Mill Paper',
    idealFor: 'Weddings, housewarming (Gruhapravesam), anniversary galas, VIP inaugurations',
    startingPrice: '₹35 / invite'
  }
];
