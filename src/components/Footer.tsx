import React from 'react';
import { ArrowUp, Phone, MapPin, Mail, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090C10] border-t border-neutral-800 text-neutral-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-850">
          
          {/* Brand Col (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <a 
              href="#" 
              className="font-display text-2xl font-bold tracking-tight text-white hover:text-amber-400 transition-colors block"
            >
              Abu Design
            </a>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Premier graphic design, commercial offset printing, and 3D architectural signage studio operating since 2016 from South Gate, Madurai, Tamil Nadu.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/919894331564"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-emerald-400 transition-colors"
                title="WhatsApp Studio"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="tel:+919894331564"
                className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-amber-400 transition-colors"
                title="Direct Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-white">
              Navigation
            </div>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#services-catalog" className="text-amber-400 hover:text-white transition-colors">Services (24)</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#material-lab" className="hover:text-white transition-colors">Material Lab</a></li>
              <li><a href="#estimator" className="hover:text-white transition-colors">Price Estimator</a></li>
              <li><a href="#studio" className="hover:text-white transition-colors">Madurai Studio</a></li>
            </ul>
          </div>

          {/* Services (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-white">
              LED & Large Format
            </div>
            <ul className="space-y-1.5 text-neutral-400 text-[11px] font-mono">
              <li><span>LED Sign Board & Glow Box</span></li>
              <li><span>Acrylic & Trim Cap Letters</span></li>
              <li><span>Titanium Mirror Gold Letters</span></li>
              <li><span>Star Flex & MS Flex Boards</span></li>
              <li><span>Direct UV Flatbed Printing</span></li>
              <li><span>Vinyl Stickers & Photo Frames</span></li>
            </ul>
          </div>

          {/* Coordinates (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-white">
              Print & Stationery
            </div>
            <ul className="space-y-1.5 text-neutral-400 text-[11px] font-mono mb-3">
              <li><span>Visiting Cards & Envelopes</span></li>
              <li><span>Brochures & Wall Posters</span></li>
              <li><span>Tamil Wedding Cards & Invites</span></li>
              <li><span>NCR Bill Books & Letterheads</span></li>
              <li><span>Sunpack Sheets & Fluted PP</span></li>
              <li><span>Computer Stamps & Calendars</span></li>
            </ul>
            <div className="text-[11px] font-mono text-neutral-400 pt-2 border-t border-neutral-800">
              <div className="flex items-center gap-1.5 text-white">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>25, S Veli St, South Gate, Madurai – 625001</span>
              </div>
              <div className="text-amber-400 mt-1 font-semibold">
                Phone: +91 98943 31564
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} Abu Design Studio (abudesign.in). All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="/abu-design-studio.zip"
              download="abu-design-studio.zip"
              className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1"
            >
              <span>Download Project (.ZIP)</span>
            </a>
            <span>Crafted for Madurai & South India</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-neutral-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
