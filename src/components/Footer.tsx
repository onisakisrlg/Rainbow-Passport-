import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#efe7da] py-12 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="font-serif text-xl font-bold tracking-wider">
            RAINBOW PASSPORT
          </span>
        </div>
        
        <div className="text-xs uppercase tracking-widest opacity-50 text-center md:text-right">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
};
