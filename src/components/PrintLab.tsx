import React, { useState } from 'react';
import { MATERIALS, MaterialSpec } from '../data/materials';
import { Layers, Sparkles, Check, ArrowUpRight, PackageCheck } from 'lucide-react';

interface PrintLabProps {
  onRequestSampleKit: (materialName: string) => void;
}

export const PrintLab: React.FC<PrintLabProps> = ({ onRequestSampleKit }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'paper' | 'finish' | 'signage'>('all');
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialSpec>(MATERIALS[0]);

  const filteredMaterials = activeCategory === 'all'
    ? MATERIALS
    : MATERIALS.filter(m => m.type === activeCategory);

  return (
    <section id="material-lab" className="py-20 md:py-28 border-b border-neutral-800 bg-[#0D1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono text-amber-400 mb-2">The Abu Material Lab</div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white [text-wrap:balance]">
              Explore tactile paper stocks, foils, and outdoor substrates.
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-lg">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeCategory === 'all' ? 'bg-amber-400 text-neutral-950 font-semibold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Substrates
            </button>
            <button
              onClick={() => setActiveCategory('paper')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeCategory === 'paper' ? 'bg-amber-400 text-neutral-950 font-semibold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Paper Stocks
            </button>
            <button
              onClick={() => setActiveCategory('finish')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeCategory === 'finish' ? 'bg-amber-400 text-neutral-950 font-semibold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Finishes & Foils
            </button>
            <button
              onClick={() => setActiveCategory('signage')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeCategory === 'signage' ? 'bg-amber-400 text-neutral-950 font-semibold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Signage Media
            </button>
          </div>
        </div>

        {/* 2-Column Explorer: Swatch Grid + Deep Material Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Swatches Grid (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredMaterials.map((mat) => {
              const isSelected = selectedMaterial.id === mat.id;
              return (
                <button
                  key={mat.id}
                  onClick={() => setSelectedMaterial(mat)}
                  className={`text-left p-4 rounded-xl border transition-all flex flex-col justify-between group ${
                    isSelected
                      ? 'bg-neutral-800 border-amber-400 shadow-md ring-1 ring-amber-400/50'
                      : 'bg-neutral-900/50 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/40'
                  }`}
                >
                  <div>
                    {/* Visual Color/Texture Indicator */}
                    <div 
                      className="w-full h-12 rounded-lg mb-3 border border-neutral-700/60 relative overflow-hidden flex items-end p-2"
                      style={{ backgroundColor: mat.sampleHex }}
                    >
                      <div className="text-[10px] font-mono text-neutral-300 bg-neutral-950/80 px-1.5 py-0.5 rounded">
                        {mat.gaugeOrWeight.split('(')[0]}
                      </div>
                    </div>

                    <div className="text-xs font-mono text-amber-400 mb-1">
                      {mat.typeLabel}
                    </div>
                    <div className={`font-display text-sm font-bold transition-colors ${
                      isSelected ? 'text-white' : 'text-neutral-200 group-hover:text-white'
                    }`}>
                      {mat.name}
                    </div>
                  </div>

                  <div className="mt-4 pt-2 border-t border-neutral-800 text-[11px] text-neutral-400 truncate">
                    {mat.tactileFeel}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Deep Material Inspection Panel (6 cols) */}
          <div className="lg:col-span-6 bg-neutral-900/90 border border-neutral-800 rounded-xl p-6 sm:p-8 sticky top-28">
            <div className="flex items-start justify-between pb-6 border-b border-neutral-800">
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-1">
                  {selectedMaterial.typeLabel}
                </span>
                <h3 className="font-display text-2xl font-bold text-white">
                  {selectedMaterial.name}
                </h3>
                <div className="text-xs font-mono text-neutral-400 mt-1">
                  {selectedMaterial.gaugeOrWeight}
                </div>
              </div>

              <div 
                className="w-14 h-14 rounded-lg border border-neutral-700 shrink-0 shadow-inner"
                style={{ backgroundColor: selectedMaterial.sampleHex }}
                title="Material sample simulation"
              />
            </div>

            {/* Narrative description */}
            <p className="text-neutral-300 text-sm leading-relaxed my-6">
              {selectedMaterial.description}
            </p>

            {/* Physical Properties Table */}
            <div className="space-y-3 p-4 rounded-lg bg-neutral-950 border border-neutral-800 text-xs font-mono mb-6">
              <div className="flex justify-between border-b border-neutral-850 pb-2">
                <span className="text-neutral-400">Tactile Feel:</span>
                <span className="text-white text-right max-w-[260px]">{selectedMaterial.tactileFeel}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-850 py-2">
                <span className="text-neutral-400">Durability & Rigidity:</span>
                <span className="text-white text-right max-w-[260px]">{selectedMaterial.durability}</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-neutral-400">Recommended For:</span>
                <span className="text-amber-300 text-right max-w-[260px] font-medium">{selectedMaterial.bestUsedFor}</span>
              </div>
            </div>

            {/* Key Advantages */}
            <div className="mb-8">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2.5">
                Technical Highlights
              </div>
              <div className="space-y-2">
                {selectedMaterial.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-neutral-200">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Request Sample Action */}
            <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-neutral-400">
                Want to feel this substrate in person?
              </div>
              <button
                onClick={() => onRequestSampleKit(selectedMaterial.name)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-all shadow-sm"
              >
                <PackageCheck className="w-4 h-4" />
                <span>Request Free Sample Kit</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
