import React from 'react';
import { Quote, Star, CheckCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      id: 'rev-1',
      client: 'Dr. K. Arunkumar',
      role: 'Founder & Head Orthopedic Surgeon',
      org: 'Madurai Bone & Joint Clinic, South Veli St',
      quote: 'We commissioned Abu Design for our main clinic facade LED signage and patient files. The 5mm acrylic glow letters have operated 24 hours daily through two intense monsoons with zero diode burnout. Patient footfall from street visibility increased noticeably.',
      metric: '+40% Night Clinic Walk-in Visibility',
      category: '3D Signage & Identity'
    },
    {
      id: 'rev-2',
      client: 'M. Alagappan',
      role: 'Proprietor',
      org: 'Temple Brand Pure Ghee & Sweets, Periyar',
      quote: 'Our traditional sweet packaging boxes needed a modern upgrade without losing regional trust. Abu Design engineered food-grade barrier boxes with registered gold foil stamping that kept our Mysore Pak fresh for 21 days during export shipments.',
      metric: '0% Oil Seepage across 15,000 Boxes',
      category: 'Food Packaging'
    },
    {
      id: 'rev-3',
      client: 'Priya Rajendran',
      role: 'Lead Event Planner',
      org: 'Kalyanam Wedding Artisans, Madurai',
      quote: 'The bilingual Tamil and English typography in their wedding cards is unmatched in Madurai. The balance between classical Senthamil lettering and contemporary gold foil debossing set our clients’ wedding celebrations apart.',
      metric: '100% On-Time Delivery across 18 Weddings',
      category: 'Wedding Stationery'
    }
  ];

  return (
    <section className="py-20 md:py-24 border-b border-neutral-800 bg-[#0A0D12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-mono text-amber-400 mb-2">Regional Client Evidence</div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
              Trusted by Madurai’s leading showrooms, doctors, and food brands.
            </h2>
          </div>
          <div className="text-xs font-mono text-neutral-400">
            Real commissions verified across Madurai, Dindigul, Sivakasi & South TN.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="p-6 sm:p-7 rounded-xl bg-neutral-900/40 border border-neutral-800 flex flex-col justify-between hover:border-neutral-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-4">
                  <span className="text-amber-400">{r.category}</span>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                </div>

                <Quote className="w-6 h-6 text-neutral-700 mb-3" />

                <p className="text-neutral-200 text-xs sm:text-sm leading-relaxed mb-6">
                  "{r.quote}"
                </p>
              </div>

              <div>
                <div className="p-2.5 rounded bg-neutral-950 border border-neutral-800 mb-4 flex items-center gap-2 text-xs font-mono text-emerald-300">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="font-semibold">{r.metric}</span>
                </div>

                <div className="text-xs font-display font-bold text-white">
                  {r.client}
                </div>
                <div className="text-[11px] text-neutral-400">
                  {r.role}, {r.org}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
