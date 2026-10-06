/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { Capabilities } from './components/Capabilities';
import { QuoteEstimator } from './components/QuoteEstimator';
import { Portfolio } from './components/Portfolio';
import { PrintLab } from './components/PrintLab';
import { PreFlightChecker } from './components/PreFlightChecker';
import { StudioHeritage } from './components/StudioHeritage';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductItem } from './data/products';

export default function App() {
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('business-card');
  const [contactSubject, setContactSubject] = useState<string>('');

  const handleOpenEstimator = () => {
    const el = document.getElementById('estimator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConfigureProductFromCatalog = (product: ProductItem) => {
    let target = 'business-card';
    if (['led-sign-board', 'acrylic-letter', 'trim-cap-letter', 'titanium-letter', 'led-lighting-box'].includes(product.id)) {
      target = 'led-sign-board';
    } else if (['flex', 'star-flex', 'flex-boards'].includes(product.id)) {
      target = 'flex-star-flex';
    } else if (['vinyl-sticker', 'inzet-print', 'uv-print'].includes(product.id)) {
      target = 'uv-vinyl-print';
    } else if (['bill-book', 'letter-head', 'office-cover'].includes(product.id)) {
      target = 'bill-book-covers';
    } else if (['brochure', 'wall-poster', 'sunpack-sheet', 'label-sticker'].includes(product.id)) {
      target = 'brochure-posters';
    } else if (['wedding-card', 'invitations', 'certificate'].includes(product.id)) {
      target = 'wedding-invitations';
    } else if (['stamp', 'calendar', 'photo-frame', 'id-cards'].includes(product.id)) {
      target = 'stamp-calendar-frame';
    }
    
    setSelectedServiceForQuote(target);
    handleOpenEstimator();
  };

  const handleSelectServiceForEstimate = (serviceId: string) => {
    let target = 'business-card';
    if (serviceId === 'signage-large-format') target = 'led-sign-board';
    if (serviceId === 'packaging-labels') target = 'brochure-posters';
    if (serviceId === 'commercial-offset') target = 'brochure-posters';
    if (serviceId === 'event-invitations') target = 'wedding-invitations';
    if (serviceId === 'corporate-stationery') target = 'business-card';
    
    setSelectedServiceForQuote(target);
    handleOpenEstimator();
  };

  const handleDirectOrder = (productName: string) => {
    setContactSubject(`Order Inquiry: ${productName}`);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquireProject = (projectTitle: string) => {
    setContactSubject(`Portfolio Project: ${projectTitle}`);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestSampleKit = (materialName: string) => {
    setContactSubject(`Material Sample Kit Request: ${materialName}`);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0D1117] text-neutral-100 flex flex-col font-sans selection:bg-amber-400 selection:text-neutral-950">
      <Navbar onOpenEstimator={handleOpenEstimator} />
      
      <main className="flex-1">
        <Hero onOpenEstimator={handleOpenEstimator} />
        
        {/* All 24 Services Directory requested by user */}
        <ProductCatalog 
          onConfigureProduct={handleConfigureProductFromCatalog}
          onDirectOrder={handleDirectOrder}
        />

        <Capabilities onSelectServiceForEstimate={handleSelectServiceForEstimate} />
        
        <QuoteEstimator initialServiceId={selectedServiceForQuote} />
        
        <Portfolio onInquireProject={handleInquireProject} />
        
        <PrintLab onRequestSampleKit={handleRequestSampleKit} />
        
        <PreFlightChecker />
        
        <StudioHeritage />
        
        <Testimonials />
        
        <ContactSection initialSubject={contactSubject} />
      </main>

      <Footer />
    </div>
  );
}
