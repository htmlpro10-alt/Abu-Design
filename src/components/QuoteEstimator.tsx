import React, { useState } from 'react';
import { 
  Calculator, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  FileText,
  PhoneCall
} from 'lucide-react';

interface QuoteEstimatorProps {
  initialServiceId?: string;
}

interface ProductPreset {
  id: string;
  name: string;
  category: string;
  unitLabel: string;
  quantities: number[];
  defaultQty: number;
  baseRatePerUnit: number; // in INR
  substrates: { id: string; name: string; extraCost: number }[];
  finishes: { id: string; name: string; costPerUnit: number }[];
  standardDesignFee: number;
}

const PRODUCT_PRESETS: ProductPreset[] = [
  {
    id: 'business-card',
    name: 'BUSINESS CARD (விசிட்டிங் கார்டு)',
    category: 'Print & Stationery',
    unitLabel: 'cards',
    quantities: [250, 500, 1000, 2000, 5000],
    defaultQty: 1000,
    baseRatePerUnit: 0.55, // ₹550 per 1000 base
    substrates: [
      { id: 'art-350', name: '350 GSM High-Bulk Matte Art Card', extraCost: 0 },
      { id: 'velvet-400', name: '400 GSM Velvet Soft-Touch Cashmere Board', extraCost: 0.35 },
      { id: 'kraft-300', name: '300 GSM Organic Brown Kraft Board', extraCost: 0.20 },
      { id: 'metallic-350', name: '350 GSM Pearl Metallic Gold Shimmer', extraCost: 0.50 }
    ],
    finishes: [
      { id: 'spot-uv', name: 'Precision Raised Spot UV Varnish', costPerUnit: 0.40 },
      { id: 'gold-foil', name: 'Kurz German Gold Hot Foil Stamping', costPerUnit: 0.50 },
      { id: 'round-corner', name: 'Die-Cut Rounded Corners (4 edges)', costPerUnit: 0.15 },
      { id: 'emboss', name: 'Blind Relief Monogram Embossing', costPerUnit: 0.35 }
    ],
    standardDesignFee: 399
  },
  {
    id: 'led-sign-board',
    name: 'LED SIGN BOARD & 3D LETTERS',
    category: 'LED Signage',
    unitLabel: 'sq.ft',
    quantities: [20, 40, 60, 100, 200],
    defaultQty: 40,
    baseRatePerUnit: 160,
    substrates: [
      { id: 'acrylic-letter', name: 'ACRYLIC LETTER (5mm Cast Acrylic + Samsung LEDs)', extraCost: 0 },
      { id: 'trim-cap-letter', name: 'TRIM CAP LETTER (Heavy-Duty Channel Letter)', extraCost: 45 },
      { id: 'titanium-letter', name: 'TITANIUM LETTER (304 SS Mirror Gold / Rose Gold)', extraCost: 85 },
      { id: 'led-lighting-box', name: 'LED LIGHTING BOX (Slim Snap-Frame Glow Box)', extraCost: 60 }
    ],
    finishes: [
      { id: 'halo-glow', name: 'Warm/Cool Halo Backlight Effect', costPerUnit: 35 },
      { id: 'monsoon-seal', name: 'IP68 Waterproof Heavy Monsoon Sealing', costPerUnit: 15 },
      { id: 'timer-switch', name: 'Automated Dusk-to-Dawn Timer Circuit', costPerUnit: 20 }
    ],
    standardDesignFee: 1499
  },
  {
    id: 'flex-star-flex',
    name: 'FLEX & STAR FLEX BOARDS',
    category: 'Flex & UV',
    unitLabel: 'sq.ft',
    quantities: [50, 100, 250, 500, 1000],
    defaultQty: 100,
    baseRatePerUnit: 10,
    substrates: [
      { id: 'regular-flex', name: 'FLEX (280 GSM Frontlit Event Banner)', extraCost: 0 },
      { id: 'star-flex', name: 'STAR FLEX (380 GSM Heavy Tear-Proof Media)', extraCost: 5 },
      { id: 'flex-boards', name: 'FLEX BOARDS (MS Square Pipe Frame + GI Beading)', extraCost: 35 },
      { id: 'rollup-standee', name: 'Rollup Standee (6x3 ft Aluminium System)', extraCost: 30 }
    ],
    finishes: [
      { id: 'brass-eyelets', name: 'Reinforced Metal Eyelets every 2 feet', costPerUnit: 2 },
      { id: 'thermal-hemming', name: 'Double-Fold Thermal Border Hemming', costPerUnit: 1.5 },
      { id: 'matte-lam', name: 'UV Protective Cold Lamination', costPerUnit: 8 }
    ],
    standardDesignFee: 299
  },
  {
    id: 'uv-vinyl-print',
    name: 'UV PRINT & VINYL STICKER',
    category: 'Flex & UV',
    unitLabel: 'sq.ft',
    quantities: [15, 30, 60, 100, 250],
    defaultQty: 30,
    baseRatePerUnit: 30,
    substrates: [
      { id: 'vinyl-sticker', name: 'VINYL STICKER (1440 DPI Eco-Solvent Adhesive)', extraCost: 0 },
      { id: 'uv-flatbed', name: 'UV PRINT (Direct Flatbed on Acrylic / Sunboard / Wood)', extraCost: 45 },
      { id: 'inzet-print', name: 'INZET PRINT (2400 DPI High-Res Fine Art & Canvas)', extraCost: 20 },
      { id: 'clear-vinyl', name: 'Transparent Clear Vinyl with White Ink Backing', extraCost: 18 }
    ],
    finishes: [
      { id: 'matte-lam', name: 'Scratch-Proof Matte Surface Lamination', costPerUnit: 8 },
      { id: 'gloss-lam', name: 'Wet-Look Gloss Protection', costPerUnit: 8 },
      { id: 'die-cut-contour', name: 'Computerized Contour Plotter Die-Cut', costPerUnit: 10 }
    ],
    standardDesignFee: 499
  },
  {
    id: 'bill-book-covers',
    name: 'BILL BOOK, LETTERHEAD & COVERS',
    category: 'Print & Stationery',
    unitLabel: 'units',
    quantities: [10, 25, 50, 100, 200],
    defaultQty: 25,
    baseRatePerUnit: 55, // per book / bundle
    substrates: [
      { id: 'bill-book', name: 'BILL BOOK (Carbonless Duplicate NCR Sets)', extraCost: 0 },
      { id: 'bill-book-triplicate', name: 'BILL BOOK (NCR Triplicate White/Pink/Yellow)', extraCost: 25 },
      { id: 'letter-head', name: 'LETTER HEAD (100 GSM Executive Bond, 500 sheets)', extraCost: 20 },
      { id: 'office-cover', name: 'OFFICE COVER (Branded Envelopes / Green Cloth, 500 pcs)', extraCost: 15 }
    ],
    finishes: [
      { id: 'sequential-numbering', name: 'Machine Numbering & Perforation', costPerUnit: 5 },
      { id: 'hardboard-binding', name: 'Hardbound Cover with Writing Guard', costPerUnit: 8 },
      { id: 'self-adhesive-flap', name: 'Peel-and-Seal Adhesive on Envelopes', costPerUnit: 3 }
    ],
    standardDesignFee: 350
  },
  {
    id: 'brochure-posters',
    name: 'BROCHURE, WALL POSTER & SUNPACK',
    category: 'Print & Stationery',
    unitLabel: 'prints',
    quantities: [250, 500, 1000, 2000, 5000],
    defaultQty: 1000,
    baseRatePerUnit: 1.2,
    substrates: [
      { id: 'brochure', name: 'BROCHURE (A4 Tri-Fold 170 GSM Art Paper)', extraCost: 0.50 },
      { id: 'wall-poster', name: 'WALL POSTER (18x23 inch Demy Size 130 GSM)', extraCost: 1.10 },
      { id: 'sunpack-sheet', name: 'SUNPACK SHEET (3mm Fluted PP Corrugated Board)', extraCost: 18.00 },
      { id: 'label-sticker', name: 'LABEL & STICKER (Die-Cut Self-Adhesive Gloss Sheet)', extraCost: 0.80 }
    ],
    finishes: [
      { id: 'machine-crease', name: 'Machine Creasing & Bi-Fold/Tri-Fold', costPerUnit: 0.20 },
      { id: 'gloss-lam', name: 'Double-Sided Thermal Lamination', costPerUnit: 0.60 },
      { id: 'corner-eyelets', name: 'Corner Punch Holes for Sunpack Wire Ties', costPerUnit: 1.50 }
    ],
    standardDesignFee: 499
  },
  {
    id: 'wedding-invitations',
    name: 'WEDDING CARD & INVITATIONS',
    category: 'Print & Stationery',
    unitLabel: 'invites',
    quantities: [100, 250, 500, 750, 1000],
    defaultQty: 350,
    baseRatePerUnit: 22,
    substrates: [
      { id: 'wedding-card', name: 'WEDDING CARD (Traditional Tamil Heritage பத்திரிகை)', extraCost: 0 },
      { id: 'invitations', name: 'INVITATIONS (Housewarming, Puberty, Event Invites)', extraCost: -5 },
      { id: 'luxury-wedding-suite', name: 'Luxury Box Wedding Card Suite with Inserts', extraCost: 55 },
      { id: 'certificate', name: 'CERTIFICATE (Ivory Card with Security Border, 100 pcs)', extraCost: -8 }
    ],
    finishes: [
      { id: 'tamil-typesetting', name: 'Senthamil Calligraphy Typesetting', costPerUnit: 4 },
      { id: 'gold-deboss', name: 'Gopuram / Peacock Gold Foil Debossing', costPerUnit: 6 },
      { id: 'laser-cut-trim', name: 'Laser-Cut Ornamental Jali Border', costPerUnit: 12 }
    ],
    standardDesignFee: 699
  },
  {
    id: 'stamp-calendar-frame',
    name: 'STAMP, CALENDER & PHOTO FRAME',
    category: 'Print & Stationery',
    unitLabel: 'pieces',
    quantities: [1, 5, 10, 25, 50, 100],
    defaultQty: 10,
    baseRatePerUnit: 140, // Base stamp / frame
    substrates: [
      { id: 'stamp', name: 'STAMP (Computerized Self-Inking Flash Stamp)', extraCost: 0 },
      { id: 'calendar', name: 'CALENDER (Monthly Desk Tent / Daily Sheet Almanac)', extraCost: -30 },
      { id: 'photo-frame', name: 'PHOTO FRAME (Moulded Frame with Acrylic Glass & Backing)', extraCost: 95 },
      { id: 'id-cards', name: 'ID CARDS (Solid PVC Badge + Custom Satin Lanyard)', extraCost: -65 }
    ],
    finishes: [
      { id: 'flash-ink', name: 'Multi-Color Refill Ink (Violet/Blue/Red/Black)', costPerUnit: 15 },
      { id: 'gold-beading', name: 'Carved Ornamental Gold Beading on Frames', costPerUnit: 35 },
      { id: 'tin-rim', name: 'Tin Rim with Metal Top Hook on Calendars', costPerUnit: 10 }
    ],
    standardDesignFee: 199
  }
];

export const QuoteEstimator: React.FC<QuoteEstimatorProps> = ({ initialServiceId }) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductPreset>(PRODUCT_PRESETS[0]);
  const [quantity, setQuantity] = useState<number>(PRODUCT_PRESETS[0].defaultQty);
  const [selectedSubstrate, setSelectedSubstrate] = useState<string>(PRODUCT_PRESETS[0].substrates[0].id);
  const [selectedFinishes, setSelectedFinishes] = useState<string[]>([]);
  const [needDesign, setNeedDesign] = useState<boolean>(true);
  const [turnaroundSpeed, setTurnaroundSpeed] = useState<'standard' | 'express' | 'rush'>('standard');
  const [copied, setCopied] = useState<boolean>(false);

  // Sync when initialServiceId prop changes
  React.useEffect(() => {
    if (initialServiceId) {
      const match = PRODUCT_PRESETS.find(p => p.id === initialServiceId || p.substrates.some(s => s.id === initialServiceId));
      if (match) {
        setSelectedProduct(match);
        setQuantity(match.defaultQty);
        const subMatch = match.substrates.find(s => s.id === initialServiceId);
        setSelectedSubstrate(subMatch ? subMatch.id : match.substrates[0].id);
        setSelectedFinishes([]);
      }
    }
  }, [initialServiceId]);

  // Switch product handler
  const handleProductChange = (prod: ProductPreset) => {
    setSelectedProduct(prod);
    setQuantity(prod.defaultQty);
    setSelectedSubstrate(prod.substrates[0].id);
    setSelectedFinishes([]);
  };

  // Toggle finish checkbox
  const toggleFinish = (finishId: string) => {
    if (selectedFinishes.includes(finishId)) {
      setSelectedFinishes(selectedFinishes.filter(f => f !== finishId));
    } else {
      setSelectedFinishes([...selectedFinishes, finishId]);
    }
  };

  // Calculations
  const currentSubstrate = selectedProduct.substrates.find(s => s.id === selectedSubstrate) || selectedProduct.substrates[0];
  const unitBase = selectedProduct.baseRatePerUnit + currentSubstrate.extraCost;
  
  const finishUnitTotal = selectedProduct.finishes
    .filter(f => selectedFinishes.includes(f.id))
    .reduce((acc, f) => acc + f.costPerUnit, 0);

  const rawProductionCost = Math.round((unitBase + finishUnitTotal) * quantity);
  const designCost = needDesign ? selectedProduct.standardDesignFee : 0;
  
  let turnaroundMultiplier = 1.0;
  if (turnaroundSpeed === 'express') turnaroundMultiplier = 1.15;
  if (turnaroundSpeed === 'rush') turnaroundMultiplier = 1.30;

  const subtotal = Math.round((rawProductionCost * turnaroundMultiplier) + designCost);
  const estimatedGst = Math.round(subtotal * 0.18); // 18% GST standard in India
  const grandTotal = subtotal + estimatedGst;

  // Turnaround label
  const getTurnaroundLabel = () => {
    if (turnaroundSpeed === 'rush') return 'Same-Day / 24-Hour Madurai Express';
    if (turnaroundSpeed === 'express') return '48-Hour Priority Dispatch';
    return 'Standard 3-4 Working Days';
  };

  // WhatsApp formatted message generator
  const getWhatsAppMessage = () => {
    const finishNames = selectedProduct.finishes
      .filter(f => selectedFinishes.includes(f.id))
      .map(f => f.name)
      .join(', ') || 'Standard Clean Cut';

    const text = `*New Quote Request from Abu Design Website*
----------------------------------------
*Product:* ${selectedProduct.name}
*Quantity:* ${quantity} ${selectedProduct.unitLabel}
*Substrate:* ${currentSubstrate.name}
*Special Finishes:* ${finishNames}
*Design Service:* ${needDesign ? 'Yes (Need Abu Design Custom Artwork)' : 'No (I have ready print file)'}
*Turnaround:* ${getTurnaroundLabel()}
----------------------------------------
*Estimated Total:* ₹${grandTotal.toLocaleString('en-IN')} (incl. GST)
----------------------------------------
Kindly confirm availability and proofing timeline. Thank you!`;
    return encodeURIComponent(text);
  };

  const handleCopySpec = () => {
    const finishNames = selectedProduct.finishes
      .filter(f => selectedFinishes.includes(f.id))
      .map(f => f.name)
      .join(', ') || 'Standard Clean Cut';

    const plain = `ABU DESIGN QUOTE ESTIMATE
Product: ${selectedProduct.name}
Quantity: ${quantity} ${selectedProduct.unitLabel}
Material: ${currentSubstrate.name}
Finishes: ${finishNames}
Design Fee: ${needDesign ? '₹' + designCost : 'Included/Client provided'}
Turnaround: ${getTurnaroundLabel()}
Estimated Total: ₹${grandTotal.toLocaleString('en-IN')} (incl. GST)
Studio: 25, S Veli St, South Gate, Madurai | +91 98943 31564`;

    navigator.clipboard.writeText(plain);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="estimator" className="py-20 md:py-28 border-b border-neutral-800 bg-[#0D1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono text-amber-400 mb-2">Live Cost Estimator</div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white [text-wrap:balance]">
              Transparent instant pricing for Madurai & South India.
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md">
            No waiting for email quotes. Customize specifications, examine material options, and dispatch your order specification directly to our master printer via WhatsApp.
          </p>
        </div>

        {/* Product Type Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {PRODUCT_PRESETS.map((p) => {
            const active = selectedProduct.id === p.id;
            return (
              <button
                key={p.id}
                onClick={() => handleProductChange(p)}
                className={`px-4 py-2.5 text-xs font-mono font-medium rounded-lg whitespace-nowrap transition-all border shrink-0 ${
                  active
                    ? 'bg-amber-400 text-neutral-950 border-amber-400 shadow-sm font-semibold'
                    : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700 hover:text-white'
                }`}
              >
                {p.name}
              </button>
            );
          })}
        </div>

        {/* 2-Column Calculator Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Configurator Options (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-900/60 border border-neutral-800 rounded-xl p-6 sm:p-8 space-y-8">
            
            {/* 1. Quantity Selector */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Select Quantity ({selectedProduct.unitLabel})
                </label>
                <span className="font-mono text-base font-bold text-amber-400 tabular-nums">
                  {quantity.toLocaleString('en-IN')} {selectedProduct.unitLabel}
                </span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {selectedProduct.quantities.map((qty) => (
                  <button
                    key={qty}
                    onClick={() => setQuantity(qty)}
                    className={`py-2 text-xs font-mono rounded border transition-all ${
                      quantity === qty
                        ? 'bg-amber-400/20 text-amber-300 border-amber-400 font-bold'
                        : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700'
                    }`}
                  >
                    {qty.toLocaleString('en-IN')}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Substrate & Stock Selection */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
                Choose Substrate / Material Stock
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedProduct.substrates.map((s) => {
                  const active = selectedSubstrate === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setSelectedSubstrate(s.id)}
                      className={`text-left p-3.5 rounded-lg border transition-all flex flex-col justify-between ${
                        active
                          ? 'bg-amber-400/10 border-amber-400 text-white'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                      }`}
                    >
                      <div className="text-xs font-medium leading-snug mb-1">{s.name}</div>
                      <div className="text-[11px] font-mono text-amber-400">
                        {s.extraCost > 0 ? `+₹${s.extraCost} / ${selectedProduct.unitLabel}` : 'Base included'}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Special Finishes & Post-Press Addons */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
                Post-Press Finishes & Specialty Treatments
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedProduct.finishes.map((f) => {
                  const isChecked = selectedFinishes.includes(f.id);
                  return (
                    <button
                      key={f.id}
                      onClick={() => toggleFinish(f.id)}
                      className={`text-left p-3 rounded-lg border transition-all flex items-center justify-between ${
                        isChecked
                          ? 'bg-amber-400/10 border-amber-400 text-white'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                          isChecked ? 'bg-amber-400 border-amber-400 text-neutral-950' : 'border-neutral-700'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-xs font-medium">{f.name}</span>
                      </div>
                      <span className="text-[11px] font-mono text-amber-400 shrink-0">
                        +₹{f.costPerUnit}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Artwork Design & Turnaround Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-neutral-800">
              
              {/* Artwork Design Requirement */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                  Artwork & Design
                </label>
                <div className="space-y-2">
                  <button
                    onClick={() => setNeedDesign(true)}
                    className={`w-full text-left p-2.5 rounded border text-xs flex items-center justify-between ${
                      needDesign
                        ? 'bg-neutral-800 border-amber-400 text-white'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-400'
                    }`}
                  >
                    <span>Abu Studio Custom Design</span>
                    <span className="font-mono text-amber-400">+₹{selectedProduct.standardDesignFee}</span>
                  </button>
                  <button
                    onClick={() => setNeedDesign(false)}
                    className={`w-full text-left p-2.5 rounded border text-xs flex items-center justify-between ${
                      !needDesign
                        ? 'bg-neutral-800 border-amber-400 text-white'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-400'
                    }`}
                  >
                    <span>I have ready PDF/CDR file</span>
                    <span className="font-mono text-emerald-400">₹0</span>
                  </button>
                </div>
              </div>

              {/* Turnaround speed */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                  Production Turnaround
                </label>
                <div className="space-y-2">
                  <button
                    onClick={() => setTurnaroundSpeed('standard')}
                    className={`w-full text-left p-2.5 rounded border text-xs flex items-center justify-between ${
                      turnaroundSpeed === 'standard'
                        ? 'bg-neutral-800 border-amber-400 text-white'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-400'
                    }`}
                  >
                    <span>Standard (3-4 Days)</span>
                    <span className="font-mono text-neutral-400">Regular</span>
                  </button>
                  <button
                    onClick={() => setTurnaroundSpeed('express')}
                    className={`w-full text-left p-2.5 rounded border text-xs flex items-center justify-between ${
                      turnaroundSpeed === 'express'
                        ? 'bg-neutral-800 border-amber-400 text-white'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-400'
                    }`}
                  >
                    <span>Priority (48 Hours)</span>
                    <span className="font-mono text-amber-400">+15%</span>
                  </button>
                  <button
                    onClick={() => setTurnaroundSpeed('rush')}
                    className={`w-full text-left p-2.5 rounded border text-xs flex items-center justify-between ${
                      turnaroundSpeed === 'rush'
                        ? 'bg-neutral-800 border-amber-400 text-white'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-400'
                    }`}
                  >
                    <span>Same-Day Madurai Rush</span>
                    <span className="font-mono text-amber-400">+30%</span>
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Live Price Breakdown & WhatsApp Dispatch Card (5 cols) */}
          <div className="lg:col-span-5 bg-neutral-900 border border-neutral-700/80 rounded-xl p-6 sm:p-8 sticky top-28 shadow-xl">
            
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                  Live Cost Summary
                </span>
              </div>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Price Match Guaranteed</span>
              </span>
            </div>

            {/* Selected Spec Quick List */}
            <div className="py-4 space-y-2 text-xs font-mono border-b border-neutral-800">
              <div className="flex justify-between text-neutral-300">
                <span className="text-neutral-400">Product:</span>
                <span className="text-white text-right max-w-[200px] truncate">{selectedProduct.name}</span>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span className="text-neutral-400">Volume:</span>
                <span className="text-white tabular-nums">{quantity} {selectedProduct.unitLabel}</span>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span className="text-neutral-400">Material:</span>
                <span className="text-white text-right max-w-[200px] truncate">{currentSubstrate.name}</span>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span className="text-neutral-400">Speed:</span>
                <span className="text-amber-400">{getTurnaroundLabel()}</span>
              </div>
            </div>

            {/* Line items pricing */}
            <div className="py-4 space-y-2 text-xs font-mono border-b border-neutral-800">
              <div className="flex justify-between text-neutral-300">
                <span>Production & Material Base</span>
                <span className="tabular-nums">₹{rawProductionCost.toLocaleString('en-IN')}</span>
              </div>

              {needDesign && (
                <div className="flex justify-between text-neutral-300">
                  <span>Custom Studio Design</span>
                  <span className="tabular-nums">₹{designCost.toLocaleString('en-IN')}</span>
                </div>
              )}

              {turnaroundSpeed !== 'standard' && (
                <div className="flex justify-between text-amber-400">
                  <span>Priority Turnaround Surcharge</span>
                  <span className="tabular-nums">+₹{Math.round(rawProductionCost * (turnaroundMultiplier - 1)).toLocaleString('en-IN')}</span>
                </div>
              )}

              <div className="flex justify-between text-neutral-400 pt-1">
                <span>Estimated GST (18%)</span>
                <span className="tabular-nums">₹{estimatedGst.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Total Callout */}
            <div className="pt-4 pb-6">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-xs text-neutral-400 font-mono">Estimated Order Total</div>
                  <div className="text-[11px] text-neutral-500">Includes all paper, plate & finish costs</div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-3xl font-extrabold text-white tabular-nums">
                    ₹{grandTotal.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[11px] font-mono text-neutral-400">
                    ≈ ₹{(grandTotal / quantity).toFixed(2)} per {selectedProduct.unitLabel.replace(/s$/, '')}
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout Button */}
            <div className="space-y-3">
              <a
                href={`https://wa.me/919894331564?text=${getWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-all shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>Send Specification to WhatsApp</span>
              </a>

              <div className="flex gap-2">
                <button
                  onClick={handleCopySpec}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-mono font-medium text-neutral-300 bg-neutral-950 hover:bg-neutral-800 border border-neutral-700 rounded-md transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Full Spec</span>
                    </>
                  )}
                </button>

                <a
                  href="tel:+919894331564"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-mono font-medium text-neutral-300 bg-neutral-950 hover:bg-neutral-800 border border-neutral-700 rounded-md transition-colors"
                  title="Direct telephone line"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call Printer</span>
                </a>
              </div>
            </div>

            {/* Trust Footer Note */}
            <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-start gap-2 text-[11px] text-neutral-400">
              <Clock className="w-3.5 h-3.5 text-neutral-500 shrink-0 mt-0.5" />
              <span>
                Final proof approved on WhatsApp or in-person at South Gate studio before commercial run commences.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
