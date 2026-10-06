import React from 'react';
import { ArrowUpRight, Calculator, CheckCircle2, MapPin } from 'lucide-react';
import { ASSETS } from '../data/assets';

interface HeroProps {
  onOpenEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimator }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 border-b border-neutral-800">
      {/* Background subtle radial illumination */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top proof kicker - Clean unboxed text, zero pills */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-400 mb-6">
          <span className="flex items-center gap-1.5 text-amber-400">
            <MapPin className="w-3.5 h-3.5" />
            <span>South Gate, Madurai</span>
          </span>
          <span aria-hidden="true">·</span>
          <span>Crafting Since 2016</span>
          <span aria-hidden="true">·</span>
          <span>Precision Offset & 3D Signage Fabrication</span>
          <span aria-hidden="true">·</span>
          <span className="text-neutral-300">Over 2,400+ Delivered Production Runs</span>
        </div>

        {/* Main Headline - Balanced typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-12">
          <div className="lg:col-span-8">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] [text-wrap:balance]">
              Design that commands attention. <br />
              <span className="text-amber-400">Print that demands respect.</span>
            </h1>
          </div>
          
          <div className="lg:col-span-4">
            <p className="text-neutral-300 text-base leading-relaxed mb-6">
              Madurai’s dedicated manufacturing studio for <strong>LED Signboards & 3D Letters</strong>, <strong>Flex & Direct UV Printing</strong>, and <strong>Commercial Offset Stationery</strong>. Over 24 specialized production lines under one roof.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#services-catalog"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-all shadow-md active:scale-[0.98]"
              >
                <span>View All 24 Services</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenEstimator}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-md transition-colors"
              >
                <Calculator className="w-4 h-4 text-amber-400" />
                <span>Calculate Price</span>
              </button>
            </div>
          </div>
        </div>

        {/* Hero Visual Anchor */}
        <div className="relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 group">
          <div className="aspect-[16/9] w-full max-h-[580px] overflow-hidden relative">
            <img
              src={ASSETS.hero}
              alt="Abu Design Studio and print workshop showcase"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
            {/* Measured contrast scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent" />
          </div>

          {/* Hero Bottom Bar Info Overlay */}
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10 backdrop-blur-sm bg-neutral-950/60">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-300">
              <span className="flex items-center gap-1.5 text-white">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Heidelberg Speedmaster Offset</span>
              </span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Roland 1440 DPI Eco-Solvent</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Computerized CNC & Laser Cutting</span>
            </div>

            <div className="flex items-center gap-4 text-xs text-neutral-400">
              <span>Open Mon–Sat: 10:00 AM – 9:00 PM</span>
              <a
                href="#studio"
                className="text-amber-400 hover:underline inline-flex items-center gap-1"
              >
                <span>Visit South Gate Studio</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* 4 Quantitative Proof Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-8 border-t border-neutral-800">
          <div>
            <div className="font-mono text-3xl sm:text-4xl font-bold text-white tabular-nums">
              10+ <span className="text-amber-400 text-xl font-normal">Yrs</span>
            </div>
            <div className="text-xs text-neutral-400 mt-1">Madurai Studio Craftsmanship</div>
          </div>
          <div>
            <div className="font-mono text-3xl sm:text-4xl font-bold text-white tabular-nums">
              2,400+
            </div>
            <div className="text-xs text-neutral-400 mt-1">Completed Print & Signage Projects</div>
          </div>
          <div>
            <div className="font-mono text-3xl sm:text-4xl font-bold text-white tabular-nums">
              24 <span className="text-amber-400 text-xl font-normal">Hrs</span>
            </div>
            <div className="text-xs text-neutral-400 mt-1">Rush Turnaround Available</div>
          </div>
          <div>
            <div className="font-mono text-3xl sm:text-4xl font-bold text-white tabular-nums">
              100%
            </div>
            <div className="text-xs text-neutral-400 mt-1">In-House Quality & Color Proofing</div>
          </div>
        </div>

      </div>
    </section>
  );
};
