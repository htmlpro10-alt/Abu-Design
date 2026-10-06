import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle2, Clock, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  initialSubject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialSubject = '' }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceType, setServiceType] = useState('Brand Identity & Logo');
  const [details, setDetails] = useState(initialSubject ? `Inquiry regarding ${initialSubject}` : '');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  const validate = () => {
    const errs: { name?: string; phone?: string } = {};
    if (!name.trim()) errs.name = 'Please provide your name or business name';
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Please provide a valid 10-digit mobile number for WhatsApp proofing';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setSubmitted(true);
  };

  const getWhatsAppDirectLink = () => {
    const text = `Hi Abu Design, my name is ${name || 'a client'}. I am inquiring about ${serviceType}. Phone: ${phone}. Note: ${details || 'Please share portfolio and pricing.'}`;
    return `https://wa.me/919894331564?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-neutral-800 bg-[#0D1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Studio Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs font-mono text-amber-400 mb-2">Initiate Production</div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 [text-wrap:balance]">
                Let’s engineer something tangible together.
              </h2>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Whether you need 250 luxury gold-foil business cards, 100,000 product catalogues, or a 40-foot illuminated 3D facade signboard in Madurai, our team is at your service.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                    Direct Phone & WhatsApp
                  </div>
                  <a
                    href="tel:+919894331564"
                    className="text-base font-mono font-bold text-white hover:text-amber-400 transition-colors"
                  >
                    +91 98943 31564
                  </a>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    Fastest response for urgent press runs
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                    Physical Studio & Workshop
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-200 mt-0.5">
                    25, S Veli Street, Opp. KONP School, South Gate, Periyar, Madurai – 625001
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                    Working Hours
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-200 mt-0.5">
                    Monday to Saturday · 10:00 AM to 9:00 PM
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <a
              href="https://wa.me/919894331564?text=Hi%20Abu%20Design,%20I%20have%20an%20urgent%20design%20and%20printing%20inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-3 rounded-lg bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 text-xs font-mono hover:bg-emerald-500/20 transition-all w-full justify-center"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Instant Chat on WhatsApp (+91 98943 31564)</span>
            </a>

          </div>

          {/* Right Column: Lead Capture Form (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-400/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-400/50">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Inquiry Received by Abu Studio
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{name}</strong>. Our production team has logged your specification for <strong className="text-amber-400">{serviceType}</strong> and will follow up with you shortly at <strong className="text-white">{phone}</strong>.
                </p>

                <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={getWhatsAppDirectLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-all shadow-sm"
                  >
                    <span>Also Send via WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setDetails('');
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono text-neutral-300 hover:text-white bg-neutral-950 rounded-md border border-neutral-700"
                  >
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-1">
                    Request Project Consultation or Order
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Fill in your project details. We provide digital proofs before any plate or print output.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase tracking-wider">
                      Your Name / Business *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Senthil Kumar (Meenakshi Textiles)"
                      className={`w-full bg-neutral-950 border rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors ${
                        errors.name ? 'border-red-500' : 'border-neutral-800'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[11px] font-mono text-red-400 mt-1 block">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase tracking-wider">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 98943 31564"
                      className={`w-full bg-neutral-950 border rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-neutral-800'
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-[11px] font-mono text-red-400 mt-1 block">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase tracking-wider">
                      Service Category
                    </label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors"
                    >
                      <option>Brand Identity & Logo</option>
                      <option>3D Signage & Acrylic LED Boards</option>
                      <option>Visiting Cards & Stationery</option>
                      <option>Star Flex & Outdoor Banners</option>
                      <option>Rigid Packaging & Retail Boxes</option>
                      <option>Commercial Catalogues & Brochures</option>
                      <option>Heritage Wedding Invitations</option>
                      <option>Screen Printing & Custom Bags</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase tracking-wider">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. info@brand.com"
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors"
                    >
                    </input>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase tracking-wider">
                    Project Requirements / Dimensions / Estimated Quantity
                  </label>
                  <textarea
                    rows={4}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Tell us about your requirements (e.g., 20x4 ft 3D LED board for a shop in South Veli St, or 1000 velvet business cards with gold foil)..."
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-3.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="text-[11px] font-mono text-neutral-400">
                    🔒 No spam. Digital proofs shared before any press commitment.
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all shadow-md active:scale-[0.98]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Specification</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
