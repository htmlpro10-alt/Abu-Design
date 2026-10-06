export interface MaterialSpec {
  id: string;
  name: string;
  type: 'paper' | 'finish' | 'signage';
  typeLabel: string;
  gaugeOrWeight: string;
  tactileFeel: string;
  durability: string;
  bestUsedFor: string;
  description: string;
  sampleHex: string;
  highlights: string[];
}

export const MATERIALS: MaterialSpec[] = [
  {
    id: 'velvet-matte-400',
    name: '400 GSM Velvet Soft-Touch Board',
    type: 'paper',
    typeLabel: 'Luxury Paper Stock',
    gaugeOrWeight: '400 GSM (0.48mm caliper)',
    tactileFeel: 'Ultra-smooth cashmere suede feel with zero glare',
    durability: 'High rigidity, crease-resistant, scuff-resistant',
    bestUsedFor: 'Executive visiting cards, luxury hangtags, presentation folders',
    description: 'Our signature heavy cardstock laminated with imported micro-porous soft-touch thermal film that eliminates fingerprint smudges while providing a rich tactile sensation.',
    sampleHex: '#1E232A',
    highlights: ['Zero reflection glare', 'Fingerprint resistant', 'Ideal base for Spot UV and Gold Foil']
  },
  {
    id: 'art-card-350',
    name: '350 GSM High-Bulk Gloss Art Card',
    type: 'paper',
    typeLabel: 'Commercial Paper Stock',
    gaugeOrWeight: '350 GSM (0.42mm caliper)',
    tactileFeel: 'Smooth high-gloss porcelain sheen with vibrant color contrast',
    durability: 'Medium-high rigidity, moisture-resistant with lamination',
    bestUsedFor: 'Product catalogues, brochure covers, restaurant menu cards, direct mailers',
    description: 'Double-coated woodfree art card engineered specifically for high-speed Heidelberg offset printing, maximizing CMYK gamut and ink sharpness.',
    sampleHex: '#2A303C',
    highlights: ['Vibrant color fidelity', 'Fast drying ink absorption', 'High tensile tear resistance']
  },
  {
    id: 'kraft-eco-300',
    name: '300 GSM Virgin Brown Kraft Card',
    type: 'paper',
    typeLabel: 'Eco-Friendly Paper Stock',
    gaugeOrWeight: '300 GSM (0.45mm caliper)',
    tactileFeel: 'Earthy organic fiber texture with subtle natural grain',
    durability: 'Tough unbleached fiber matrix, high burst factor',
    bestUsedFor: 'Artisan product boxes, sustainable shopping bags, coffee & organic brand labels',
    description: '100% recyclable, biodegradable unbleached kraft board crafted from sustainably farmed wood pulp, delivering an authentic handcrafted visual appeal.',
    sampleHex: '#4A3B32',
    highlights: ['100% Biodegradable', 'High tear and burst resistance', 'Pair with opaque white or dark black ink']
  },
  {
    id: 'spot-uv-varnish',
    name: 'Precision Registered Spot UV Gloss',
    type: 'finish',
    typeLabel: 'Specialty Finish',
    gaugeOrWeight: '40-60 Micron Coating Layer',
    tactileFeel: 'Glass-like raised gloss finish contrasting against matte background',
    durability: 'Scratch-proof, UV-cured polymer surface',
    bestUsedFor: 'Logos, monograms, subtle background patterns on business cards and book jackets',
    description: 'A liquid polymer coating applied selectively to specific artwork areas and instantly cured under ultraviolet lamps, creating dramatic high-contrast tactile depth.',
    sampleHex: '#384252',
    highlights: ['High gloss reflection (>90 GU)', 'Tactile raised ridge feel', 'Enhances brand mark recall']
  },
  {
    id: 'gold-hot-foil',
    name: 'Kurz German Metallic Gold Hot Foil',
    type: 'finish',
    typeLabel: 'Specialty Finish',
    gaugeOrWeight: 'Sub-micron vacuum metallized film',
    tactileFeel: 'Slightly debossed metallic luster that catches and reflects ambient light',
    durability: 'Permanent thermal bond, will not flake or oxidize',
    bestUsedFor: 'Luxury wedding cards, certificate seals, premium packaging boxes',
    description: 'Heated brass dies stamp genuine metallic carrier film into paper fibers under tons of hydraulic pressure, creating an authentic mirror-like bullion sheen.',
    sampleHex: '#8C6D23',
    highlights: ['Reflective mirror luster', 'Permanent thermal fusion', 'Available in Gold, Rose Gold, Silver, Hologram']
  },
  {
    id: 'cast-acrylic-5mm',
    name: '5mm Cast Optical-Grade Acrylic',
    type: 'signage',
    typeLabel: 'Signage Substrate',
    gaugeOrWeight: '5mm thickness (1.19 g/cm³ density)',
    tactileFeel: 'Ultra-rigid, mirror-polished laser cut edges',
    durability: '10+ year UV weatherability without yellowing',
    bestUsedFor: '3D storefront LED letters, reception counter logos, interior directional boards',
    description: 'Monomer-cast acrylic with 92% light transmission rate, thermo-formed and laser-profiled for edge-lit and face-lit 3D channel letters.',
    sampleHex: '#1F2937',
    highlights: ['92% light transmission', 'Flame-polished edges', 'Weatherproof in extreme heat & rain']
  },
  {
    id: 'star-flex-380',
    name: '380 GSM Heavy-Duty Star Flex Media',
    type: 'signage',
    typeLabel: 'Signage Substrate',
    gaugeOrWeight: '380 GSM (500D x 500D scrim)',
    tactileFeel: 'Heavy flexible woven PVC fabric with micro-embossed matte surface',
    durability: 'Tear-proof scrim matrix, UV anti-fading 2+ years outdoors',
    bestUsedFor: 'Hoardings, highway banners, event backdrops, shop shutter headers',
    description: 'Commercial outdoor flex material with high white point and anti-fungal treatment, engineered for high-solvent and eco-solvent large-format printing.',
    sampleHex: '#252D38',
    highlights: ['Tear-proof reinforced polyester yarn', 'Fade-resistant UV coating', 'Smooth uniform illumination']
  },
  {
    id: 'acp-cladding-4mm',
    name: '4mm Aluminium Composite Panel (ACP)',
    type: 'signage',
    typeLabel: 'Signage Substrate',
    gaugeOrWeight: '4mm panel with 0.25mm AL skin',
    tactileFeel: 'Rigid architectural metallic facade sheet',
    durability: 'Corrosion-proof, termite-proof, fire retardant core',
    bestUsedFor: 'Shop facade cladding, pylon signage bases, building exterior makeovers',
    description: 'Sandwich panel of two corrosion-resistant aluminum sheets permanently bonded to a polyethylene core, available in brushed metallic, matte, and woodgrain finishes.',
    sampleHex: '#334155',
    highlights: ['Architectural grade flat rigidity', 'Thermal insulation', 'Paint warranty up to 10 years']
  }
];
