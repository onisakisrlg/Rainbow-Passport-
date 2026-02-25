/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Services } from './components/Services';
import { CompanyProfile } from './components/CompanyProfile';
import { Footer } from './components/Footer';

function AppContent() {
  return (
    <div className="min-h-screen flex flex-col font-serif text-[#000000] bg-[#efe7da] overflow-x-hidden selection:bg-black selection:text-[#efe7da]">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Philosophy />
        <Services />
        <CompanyProfile />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
