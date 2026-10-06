import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS, ProjectItem } from '../data/portfolio';
import { ArrowUpRight, X, Quote, MapPin, CheckCircle } from 'lucide-react';

interface PortfolioProps {
  onInquireProject: (projectTitle: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onInquireProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filterOptions = [
    { id: 'all', label: 'All Projects' },
    { id: 'packaging', label: 'Custom Packaging' },
    { id: 'signage', label: '3D Signage & Facade' },
    { id: 'stationery', label: 'Corporate Stationery' },
    { id: 'invitations', label: 'Heritage Invitations' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 md:py-28 border-b border-neutral-800 bg-[#0A0D12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono text-amber-400 mb-2">Curated Portfolio & Archives</div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white [text-wrap:balance]">
              Executed with tactile obsession and structural precision.
            </h2>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-lg overflow-x-auto no-scrollbar">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActiveFilter(opt.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  activeFilter === opt.id
                    ? 'bg-amber-400 text-neutral-950 font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="group cursor-pointer bg-neutral-900/40 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-700 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Image Frame */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-950 relative">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  <div className="absolute top-3 right-3 p-2 rounded-full bg-neutral-950/70 backdrop-blur-sm border border-white/10 text-neutral-300 group-hover:text-amber-400 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Clean unboxed metadata with typographic separators */}
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-2.5">
                    <span className="text-amber-400">{project.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.location}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-neutral-300 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>
              </div>

              {/* Quantified impact ticker at card bottom */}
              <div className="px-6 py-3 border-t border-neutral-800/80 bg-neutral-950/60 flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-400 truncate pr-2">{project.quantifiedResult}</span>
                <span className="text-amber-400 shrink-0 font-medium group-hover:underline">Inspect Specs →</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
          <div className="bg-[#0D1117] border border-neutral-700 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            
            {/* Close button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 z-10 p-2 text-neutral-400 hover:text-white bg-neutral-900/80 rounded-full border border-neutral-700"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Hero Image */}
            <div className="aspect-[16/9] w-full bg-neutral-950 relative overflow-hidden">
              <img
                src={activeModalProject.heroImage}
                alt={activeModalProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent" />
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 -mt-10 relative">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-400 mb-2">
                <span className="text-amber-400">{activeModalProject.categoryLabel}</span>
                <span aria-hidden="true">·</span>
                <span>Client: {activeModalProject.client}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-neutral-500" />
                  {activeModalProject.location}
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                {activeModalProject.title}
              </h2>

              {/* Quantified impact banner */}
              <div className="p-3.5 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center gap-3 mb-6">
                <CheckCircle className="w-5 h-5 text-amber-400 shrink-0" />
                <div className="text-xs sm:text-sm font-mono text-amber-200">
                  <span className="font-bold text-white">Demonstrated Impact: </span>
                  {activeModalProject.quantifiedResult}
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                    Client Challenge
                  </h4>
                  <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                    {activeModalProject.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                    Abu Design Solution
                  </h4>
                  <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                    {activeModalProject.solution}
                  </p>
                </div>
              </div>

              {/* Substrate & Tech specs */}
              <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800 mb-6">
                <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1.5">
                  Production Substrate & Post-Press Technology
                </h4>
                <p className="text-xs font-mono text-neutral-200">
                  {activeModalProject.substrateAndTech}
                </p>
              </div>

              {/* Testimonial if available */}
              {activeModalProject.testimonial && (
                <div className="p-4 rounded-lg bg-neutral-900 border border-neutral-800 mb-6 flex gap-3">
                  <Quote className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs sm:text-sm italic text-neutral-200 mb-2">
                      "{activeModalProject.testimonial.quote}"
                    </p>
                    <div className="text-xs font-mono text-neutral-400">
                      — {activeModalProject.testimonial.author}, {activeModalProject.testimonial.role}
                    </div>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-800">
                <div className="text-xs text-neutral-400 font-mono">
                  Have a similar project in mind?
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      const title = activeModalProject.title;
                      setActiveModalProject(null);
                      onInquireProject(title);
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-all shadow-sm"
                  >
                    <span>Request Similar Execution</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
