import { ASSETS } from './assets';

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 'identity' | 'signage' | 'packaging' | 'stationery' | 'invitations';
  categoryLabel: string;
  location: string;
  year: string;
  heroImage: string;
  summary: string;
  challenge: string;
  solution: string;
  substrateAndTech: string;
  quantifiedResult: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: 'annamalai-spices',
    title: 'Annamalai Heritage Spices & Exports',
    client: 'Annamalai Agro-Exports Ltd.',
    category: 'packaging',
    categoryLabel: 'Custom Packaging',
    location: 'Madurai & Tuticorin Port',
    year: '2025',
    heroImage: ASSETS.packaging,
    summary: 'Luxury rigid export packaging and metallic die-cut labels engineered for international spice export standards.',
    challenge: 'Needed premium shelf packaging for European and Middle East export markets capable of preserving aroma while projecting century-old South Indian spice heritage.',
    solution: 'Engineered a rigid book-style gift box using 1200 GSM kappa board wrapped in FSC-certified textured paper, accented with hot-stamped gold foil and food-grade moisture barrier foil inserts.',
    substrateAndTech: '1200 GSM Kappa Board · 150 GSM Textured Art Paper · Kurz Luxor Gold Foil · Food-Grade PET Barrier',
    quantifiedResult: '+185% International Distributor Orders in First 90 Days',
    testimonial: {
      quote: 'Abu Design understood both export durability compliance and luxury aesthetic appeal. The foil stamping precision on the boxes was flawless.',
      author: 'K. Senthil Kumar',
      role: 'Managing Director, Annamalai Exports'
    }
  },
  {
    id: 'temple-city-ortho',
    title: 'Temple City Multi-Speciality Clinic',
    client: 'Temple City Healthcare Group',
    category: 'signage',
    categoryLabel: '3D Signage & Facade',
    location: 'South Veli St, Madurai',
    year: '2025',
    heroImage: ASSETS.signage,
    summary: 'High-visibility 3D cast acrylic LED channel letter storefront signage and bilingual architectural hospital wayfinding.',
    challenge: 'High-density street corner with visual competition requiring unmistakable 24/7 visibility with low thermal maintenance.',
    solution: 'Designed and fabricated 22-foot front facade signage using 4mm matte dark grey ACP backing with 3-inch deep 5mm cast acrylic letters illuminated by Korean Samsung IP67 waterproof 6500K LEDs.',
    substrateAndTech: '4mm Mitsubishi ACP Cladding · 5mm Cast Acrylic Face · Samsung IP67 Lens LEDs · Laser Cut Stainless Steel Trim',
    quantifiedResult: '98% Nighttime Legibility Index at 150m Viewing Distance',
    testimonial: {
      quote: 'The daytime contrast and nighttime glow transformed our clinic facade completely. Abu Design handled installation in just 48 hours.',
      author: 'Dr. R. Ramanathan, MS Ortho',
      role: 'Chief Medical Director'
    }
  },
  {
    id: 'meenakshi-silks',
    title: 'Meenakshi Royal Silks & Sarees',
    client: 'Meenakshi Silk House',
    category: 'stationery',
    categoryLabel: 'Corporate Stationery',
    location: 'West Tower Street, Madurai',
    year: '2024',
    heroImage: ASSETS.stationery,
    summary: 'Comprehensive luxury brand stationery suite featuring 400 GSM velvet cards, spot UV varnish, and gold-foiled envelopes.',
    challenge: 'Traditional Madurai silk bridal brand seeking an identity elevation that resonated with modern brides while retaining temple silk heritage.',
    solution: 'Engineered custom stationery suite with double-paste 400 GSM velvet matte cardstock, blind debossed temple gopuram motif, and registered Spot UV accents on typography.',
    substrateAndTech: '400 GSM Fedrigoni Velvet Board · Blind Debossing · Registered Spot UV · Thermal Matte Soft-Touch Coating',
    quantifiedResult: '100% Brand Recognition across 3 Regional Showrooms',
    testimonial: {
      quote: 'Customers frequently pause to feel the velvet texture of our visiting cards. The tactile quality matches the weight of pure Kanchipuram silk.',
      author: 'S. Meenakshi Sundaram',
      role: 'Director, Meenakshi Silk House'
    }
  },
  {
    id: 'grand-madurai-bakes',
    title: 'Grand Madurai Confectionery',
    client: 'Grand Madurai Hospitality',
    category: 'packaging',
    categoryLabel: 'Retail Packaging',
    location: 'KK Nagar, Madurai',
    year: '2025',
    heroImage: ASSETS.hero,
    summary: 'Grease-proof food-safe folding cake boxes, custom die-cut pastry cartons, and branded parchment paper.',
    challenge: 'Needed high-speed folding cartons that prevent grease bleed-through while keeping cakes fresh during tropical transit.',
    solution: 'Engineered automatic crash-lock base boxes using 350 GSM virgin food board with interior aqueous dispersion barrier and exterior matte finish.',
    substrateAndTech: '350 GSM Virgin Food Board · Food Contact Aqueous Coating · Automatic Crash Lock Die-Line',
    quantifiedResult: '0% Grease Leaks across 45,000+ Distributed Cake Boxes'
  },
  {
    id: 'vasantham-royal-wedding',
    title: 'Vasantham Royal Wedding Invitation Suite',
    client: 'Private Commission',
    category: 'invitations',
    categoryLabel: 'Heritage Invitations',
    location: 'Madurai & Chennai',
    year: '2025',
    heroImage: ASSETS.packaging,
    summary: 'Two-tier box invitation with bilingual Tamil-English script calligraphy, gold foil debossing, and dry-fruit drawer.',
    challenge: 'VIP wedding reception requiring culturally reverent traditional Tamil wedding card formulation paired with modern luxury presentation.',
    solution: 'Designed an emerald green and gold foil rigid chest invitation with laser-etched brass medallion, gold-threaded tassels, and handmade seed paper inserts.',
    substrateAndTech: 'Imported Emerald Buckram Cloth · Precision Gold Hot Foil · Laser Cut Brass Medallion · Plantable Seed Paper',
    quantifiedResult: '500 Bespoke Sets Handcrafted & Delivered in 12 Days'
  },
  {
    id: 'periyar-business-facade',
    title: 'Periyar Commercial Hub & Print Press',
    client: 'Periyar Real Estate Developers',
    category: 'signage',
    categoryLabel: 'Commercial Signage',
    location: 'Periyar Bus Terminal Sector',
    year: '2024',
    heroImage: ASSETS.press,
    summary: 'Massive 40-foot backlit directional pylon and architectural aluminum composite facade signage.',
    challenge: 'High-traffic commercial hub needing durable weather-resistant wayfinding visible to both pedestrian and vehicular traffic.',
    solution: 'Fabricated heavy-duty structural steel frame with aluminum composite paneling, computerized CNC routings, and high-intensity diffused LED modules.',
    substrateAndTech: 'Structural MS Frame · 4mm Fire-Rated ACP · CNC Router Precision · 3M Dual-Color Cast Vinyl',
    quantifiedResult: 'Built to withstand 120 km/h Monsoon Wind Gusts'
  }
];
