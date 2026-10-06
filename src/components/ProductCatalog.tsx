import React, { useState, useMemo } from 'react';
import { ALL_PRODUCTS, ProductItem } from '../data/products';
import { 
  Search, 
  Sparkles, 
  Clock, 
  ArrowUpRight, 
  Send, 
  Layers, 
  SlidersHorizontal,
  CheckCircle,
  Tag
} from 'lucide-react';

interface ProductCatalogProps {
  onConfigureProduct: (product: ProductItem) => void;
  onDirectOrder: (productName: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ 
  onConfigureProduct, 
  onDirectOrder 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'stationery' | 'signage' | 'flex_uv'>('all');

  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((prod) => {
      const matchesCat = activeCategory === 'all' || prod.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery = !q || 
        prod.name.toLowerCase().includes(q) ||
        (prod.tamilName && prod.tamilName.toLowerCase().includes(q)) ||
        prod.description.toLowerCase().includes(q) ||
        prod.specifications.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [searchQuery, activeCategory]);

  const counts = useMemo(() => {
    return {
      all: ALL_PRODUCTS.length,
      stationery: ALL_PRODUCTS.filter(p => p.category === 'stationery').length,
      signage: ALL_PRODUCTS.filter(p => p.category === 'signage').length,
      flex_uv: ALL_PRODUCTS.filter(p => p.category === 'flex_uv').length,
    };
  }, []);

  const getWhatsAppLink = (prod: ProductItem) => {
    const text = `Hi Abu Design, I want to order/inquire about: *${prod.name}* (${prod.tamilName || ''})
Category: ${prod.categoryLabel}
Starting Price: ${prod.startingPrice}
Popular Size: ${prod.popularSizes}
Kindly share samples, rates and turnaround time.`;
    return `https://wa.me/919894331564?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="services-catalog" className="py-20 md:py-28 border-b border-neutral-800 bg-[#0B0E14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
              <Tag className="w-3.5 h-3.5" />
              <span>Full Production Directory · 24 Core Services</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white [text-wrap:balance]">
              Complete Print, LED Signage & UV Manufacturing.
            </h2>
            <p className="text-neutral-400 text-sm mt-2 max-w-2xl">
              From instant computer stamps & business cards to titanium 3D letters, star flex banners, and flatbed UV printing in Madurai.
            </p>
          </div>

          {/* Search Input */}
          <div className="w-full lg:w-80 relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 24 services (e.g. stamp, acrylic, flex)..."
              className="w-full bg-neutral-900 border border-neutral-800 focus:border-amber-400 rounded-lg pl-10 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 text-xs font-mono rounded-lg transition-all border whitespace-nowrap shrink-0 ${
              activeCategory === 'all'
                ? 'bg-amber-400 text-neutral-950 border-amber-400 font-bold shadow-sm'
                : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700 hover:text-white'
            }`}
          >
            All Products ({counts.all})
          </button>
          
          <button
            onClick={() => setActiveCategory('signage')}
            className={`px-4 py-2 text-xs font-mono rounded-lg transition-all border whitespace-nowrap shrink-0 ${
              activeCategory === 'signage'
                ? 'bg-amber-400 text-neutral-950 border-amber-400 font-bold shadow-sm'
                : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700 hover:text-white'
            }`}
          >
            LED Signage & 3D Letters ({counts.signage})
          </button>

          <button
            onClick={() => setActiveCategory('flex_uv')}
            className={`px-4 py-2 text-xs font-mono rounded-lg transition-all border whitespace-nowrap shrink-0 ${
              activeCategory === 'flex_uv'
                ? 'bg-amber-400 text-neutral-950 border-amber-400 font-bold shadow-sm'
                : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700 hover:text-white'
            }`}
          >
            Flex & UV Printing ({counts.flex_uv})
          </button>

          <button
            onClick={() => setActiveCategory('stationery')}
            className={`px-4 py-2 text-xs font-mono rounded-lg transition-all border whitespace-nowrap shrink-0 ${
              activeCategory === 'stationery'
                ? 'bg-amber-400 text-neutral-950 border-amber-400 font-bold shadow-sm'
                : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700 hover:text-white'
            }`}
          >
            Print & Stationery ({counts.stationery})
          </button>
        </div>

        {/* 24 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-neutral-900/50 border border-neutral-800/90 rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-amber-400/60 hover:bg-neutral-900 transition-all group"
            >
              <div>
                {/* Header row: category + turnaround */}
                <div className="flex items-center justify-between gap-2 text-xs font-mono text-neutral-400 mb-2">
                  <span className="text-amber-400 uppercase tracking-wider">{prod.categoryLabel}</span>
                  <span className="flex items-center gap-1 text-[11px] text-neutral-400">
                    <Clock className="w-3 h-3 text-neutral-500" />
                    <span>{prod.turnaroundTime}</span>
                  </span>
                </div>

                {/* Exact Product Title from user request */}
                <h3 className="font-display text-lg sm:text-xl font-extrabold text-white group-hover:text-amber-400 transition-colors tracking-tight">
                  {prod.name}
                </h3>
                {prod.tamilName && (
                  <div className="text-xs text-neutral-400 font-medium mb-3">
                    {prod.tamilName}
                  </div>
                )}

                {/* Description */}
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {prod.description}
                </p>

                {/* Popular sizes and specs */}
                <div className="space-y-1.5 p-3 rounded-lg bg-neutral-950 border border-neutral-850 text-xs font-mono mb-4">
                  <div className="text-neutral-400">
                    <span className="text-neutral-500">Sizes:</span> {prod.popularSizes}
                  </div>
                  <div className="text-neutral-300 truncate">
                    <span className="text-neutral-500">Specs:</span> {prod.specifications}
                  </div>
                </div>

                {/* Finishing options list */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {prod.finishingOptions.slice(0, 3).map((f, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono text-neutral-400 bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800"
                    >
                      {f}
                    </span>
                  ))}
                  {prod.finishingOptions.length > 3 && (
                    <span className="text-[10px] font-mono text-neutral-500 py-0.5">
                      +{prod.finishingOptions.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Price & Action Footer */}
              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-mono text-neutral-500 block">Starting From</span>
                  <span className="text-sm font-mono font-bold text-amber-400 tabular-nums">
                    {prod.startingPrice}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={getWhatsAppLink(prod)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-colors"
                    title={`Order ${prod.name} on WhatsApp`}
                  >
                    <Send className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => onConfigureProduct(prod)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
                  >
                    <span>Quote</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-16 text-center text-neutral-400 font-mono text-sm bg-neutral-900/40 rounded-xl border border-neutral-800">
            No service matching "{searchQuery}". Call studio directly at +91 98943 31564 for custom jobs.
          </div>
        )}

      </div>
    </section>
  );
};
