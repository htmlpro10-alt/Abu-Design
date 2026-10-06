import React, { useState } from 'react';
import { SERVICES, ServiceItem } from '../data/services';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';

interface CapabilitiesProps {
  onSelectServiceForEstimate: (serviceId: string) => void;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({ onSelectServiceForEstimate }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem>(SERVICES[0]);

  return (
    <section id="capabilities" className="py-20 md:py-28 border-b border-neutral-800 bg-[#0A0D12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-mono text-amber-400 mb-2">Capabilities & Equipment</div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white [text-wrap:balance]">
              Comprehensive creative design and heavy-duty print engineering.
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md">
            From initial sketch and bilingual Tamil typography to Heidelberg offset plate-making, CNC acrylic routing, and on-site Tamil Nadu installation.
          </p>
        </div>

        {/* Master Asymmetric Layout: Service Navigation + Deep Spec Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Service Selector List (5 cols) */}
          <div className="lg:col-span-5 space-y-2">
            {SERVICES.map((service) => {
              const isSelected = selectedService.id === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`w-full text-left p-4 sm:p-5 rounded-lg transition-all border flex items-center justify-between group ${
                    isSelected
                      ? 'bg-neutral-800/90 border-amber-400/80 shadow-sm'
                      : 'bg-neutral-900/40 border-neutral-800/80 hover:bg-neutral-800/50 hover:border-neutral-700'
                  }`}
                >
                  <div className="space-y-1 pr-3">
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className={isSelected ? 'text-amber-400 font-semibold' : 'text-neutral-500'}>
                        {service.number}
                      </span>
                      <span className="text-neutral-600">/</span>
                      <span className="text-neutral-400 truncate max-w-[200px]">{service.idealFor}</span>
                    </div>
                    <div className={`font-display text-base sm:text-lg font-bold transition-colors ${
                      isSelected ? 'text-white' : 'text-neutral-300 group-hover:text-white'
                    }`}>
                      {service.title}
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-xs font-mono text-neutral-400 block">from</span>
                    <span className="text-xs font-mono font-semibold text-amber-400">
                      {service.startingPrice}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Service Detail Deck (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 sm:p-8 relative">
            <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
              <div className="flex items-center gap-3">
                <span className="font-mono text-2xl font-bold text-amber-400">
                  {selectedService.number}
                </span>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    {selectedService.title}
                  </h3>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    {selectedService.subtitle}
                  </div>
                </div>
              </div>

              <div className="hidden sm:block text-right">
                <div className="text-xs font-mono text-neutral-400">Starting At</div>
                <div className="text-lg font-mono font-bold text-amber-400">
                  {selectedService.startingPrice}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed my-6">
              {selectedService.description}
            </p>

            {/* Deliverables Checklist */}
            <div className="space-y-3 mb-8">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                Key Production Deliverables
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment & Specs Specification Box */}
            <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800 mb-8">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Production Standard & Equipment</span>
              </div>
              <div className="text-xs font-mono text-neutral-300">
                {selectedService.equipmentOrSpecs}
              </div>
            </div>

            {/* CTA action bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-neutral-800">
              <div className="text-xs text-neutral-400">
                <span>Best suited for: </span>
                <span className="text-neutral-200 font-medium">{selectedService.idealFor}</span>
              </div>

              <button
                onClick={() => onSelectServiceForEstimate(selectedService.id)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-all shadow-sm"
              >
                <span>Calculate Price for this Service</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
