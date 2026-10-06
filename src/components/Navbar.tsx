import React, { useState } from 'react';
import { Phone, Menu, X, ArrowUpRight, Download } from 'lucide-react';

interface NavbarProps {
  onOpenEstimator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimator }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0D1117]/90 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="font-display text-2xl font-bold tracking-tight text-white hover:text-amber-400 transition-colors"
        >
          Abu Design
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
          <a 
            href="#services-catalog" 
            className="hover:text-amber-400 text-amber-300/90 transition-colors py-1 relative hover:underline underline-offset-8 decoration-amber-400 font-semibold"
          >
            Services (24)
          </a>
          <a 
            href="#capabilities" 
            className="hover:text-white transition-colors py-1 relative hover:underline underline-offset-8 decoration-amber-400/80"
          >
            Capabilities
          </a>
          <a 
            href="#portfolio" 
            className="hover:text-white transition-colors py-1 relative hover:underline underline-offset-8 decoration-amber-400/80"
          >
            Portfolio
          </a>
          <a 
            href="#material-lab" 
            className="hover:text-white transition-colors py-1 relative hover:underline underline-offset-8 decoration-amber-400/80"
          >
            Material Lab
          </a>
          <a 
            href="#estimator" 
            className="hover:text-white transition-colors py-1 relative hover:underline underline-offset-8 decoration-amber-400/80"
          >
            Estimator
          </a>
          <a 
            href="#studio" 
            className="hover:text-white transition-colors py-1 relative hover:underline underline-offset-8 decoration-amber-400/80"
          >
            Studio
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="/abu-design-studio.zip"
            download="abu-design-studio.zip"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-medium text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-md transition-colors whitespace-nowrap"
            title="Download full project folder (.ZIP) ready for Vercel deploy"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Export for Vercel (.ZIP)</span>
            <span className="sm:hidden">.ZIP</span>
          </a>

          <a
            href="tel:+919894331564"
            className="hidden lg:inline-flex items-center gap-2 px-3 py-2 text-xs font-mono font-medium text-neutral-300 hover:text-white border border-neutral-700 hover:border-neutral-500 rounded-md transition-colors whitespace-nowrap"
            title="Call Studio at 9894331564"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>+91 98943 31564</span>
          </a>

          <button
            onClick={onOpenEstimator}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-all shadow-sm whitespace-nowrap"
          >
            <span>Quote</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-400 hover:text-white rounded-md border border-neutral-800"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D1117] border-b border-neutral-800 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 text-base font-medium text-neutral-200">
            <a
              href="#capabilities"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400 transition-colors"
            >
              Capabilities
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400 transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#material-lab"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400 transition-colors"
            >
              Material Lab
            </a>
            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400 transition-colors"
            >
              Price Estimator
            </a>
            <a
              href="#preflight"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400 transition-colors"
            >
              Artwork Guide
            </a>
            <a
              href="#studio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400 transition-colors"
            >
              Madurai Studio & Location
            </a>
          </div>

          <div className="pt-4 border-t border-neutral-800 flex flex-col gap-3">
            <a
              href="tel:+919894331564"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono font-medium text-neutral-200 border border-neutral-700 rounded-md"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call +91 98943 31564</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimator();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md"
            >
              <span>Launch Live Quote Estimator</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
