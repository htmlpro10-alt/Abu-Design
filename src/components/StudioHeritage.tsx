import React from 'react';
import { MapPin, Phone, Clock, Navigation, Shield, Award, Sparkles, Building2 } from 'lucide-react';
import { ASSETS } from '../data/assets';

export const StudioHeritage: React.FC = () => {
  return (
    <section id="studio" className="py-20 md:py-28 border-b border-neutral-800 bg-[#0D1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-mono text-amber-400 mb-2">Madurai Facility & Craftsmanship</div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white [text-wrap:balance]">
              Rooted at South Gate, printing for South India.
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md">
            Established in 2016, Abu Design operates an integrated creative studio and fabrication press on South Veli Street, just minutes from Periyar Bus Stand.
          </p>
        </div>

        {/* 2-Column Presentation: Facility Photo & Machinery + Studio Coordinates */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Workshop Imagery & Production Standards (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 relative group">
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src={ASSETS.press}
                  alt="Abu Design precision offset print press workshop"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-neutral-950/80 backdrop-blur-sm border border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-300">Precision In-House Offset & Signage Press</span>
                <span className="text-amber-400">South Gate Workshop</span>
              </div>
            </div>

            {/* 3 Heritage Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800">
                <Shield className="w-5 h-5 text-amber-400 mb-2" />
                <div className="font-display font-bold text-sm text-white mb-1">Guaranteed Tolerances</div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Micron-accurate paper guillotining and digital plate registration with zero color drift.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800">
                <Award className="w-5 h-5 text-amber-400 mb-2" />
                <div className="font-display font-bold text-sm text-white mb-1">Authentic Materials</div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Virgin German Kurz hot foils, 100% cast acrylic, and certified food-safe packaging boards.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800">
                <Sparkles className="w-5 h-5 text-amber-400 mb-2" />
                <div className="font-display font-bold text-sm text-white mb-1">Bilingual Mastery</div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Traditional Tamil typography and modern English branding expertly harmonized.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Address Card, Hours & Directions (5 cols) */}
          <div className="lg:col-span-5 bg-neutral-900 border border-neutral-800 rounded-xl p-6 sm:p-8 space-y-6">
            
            <div className="flex items-center gap-3 pb-6 border-b border-neutral-800">
              <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  Abu Design Studio
                </h3>
                <span className="text-xs font-mono text-neutral-400">
                  Madurai Main Head Office & Lab
                </span>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3.5">
              <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1">
                  Physical Address
                </div>
                <div className="text-sm text-neutral-200 font-medium leading-relaxed">
                  25, S Veli Street,<br />
                  Opp. KONP School, South Gate,<br />
                  Periyar, Madurai Main,<br />
                  Madurai – 625001, Tamil Nadu, India
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3.5">
              <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1">
                  Direct Line & WhatsApp
                </div>
                <a
                  href="tel:+919894331564"
                  className="text-sm font-mono font-bold text-white hover:text-amber-400 transition-colors block"
                >
                  +91 98943 31564
                </a>
                <span className="text-xs text-neutral-400">
                  Direct contact with Master Printer & Production Lead
                </span>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="flex items-start gap-3.5">
              <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1">
                  Studio & Workshop Hours
                </div>
                <div className="text-xs font-mono text-neutral-200 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Monday – Saturday:</span>
                    <span className="text-white font-medium">10:00 AM – 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Sunday:</span>
                    <span className="text-amber-400">Emergency Press Runs by Appointment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 border-t border-neutral-800 space-y-3">
              <a
                href="https://maps.google.com/?q=25,+S+Veli+Street,+South+Gate,+Madurai+625001"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all shadow-sm"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps / Directions</span>
              </a>

              <a
                href="https://wa.me/919894331564?text=Hi%20Abu%20Design,%20I%20would%20like%20to%20visit%20your%20South%20Gate%20Madurai%20studio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-950 hover:bg-neutral-800 border border-neutral-700 rounded-lg transition-colors"
              >
                <span>Notify Studio of In-Person Visit</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
