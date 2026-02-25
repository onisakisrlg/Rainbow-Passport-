import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { Language } from '../content';

export const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLangMenu = () => setLangMenuOpen(!langMenuOpen);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setLangMenuOpen(false);
    setIsOpen(false);
  };

  const navItems = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.philosophy, href: '#philosophy' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.company, href: '#company' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#efe7da]/90 backdrop-blur-sm border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-serif text-2xl font-bold tracking-wider">
              RAINBOW PASSPORT
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm uppercase tracking-widest hover:opacity-60 transition-opacity"
              >
                {item.label}
              </a>
            ))}
            
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={toggleLangMenu}
                className="flex items-center space-x-1 hover:opacity-60 transition-opacity"
              >
                <Globe size={18} />
                <span className="uppercase text-xs font-bold">{language}</span>
              </button>
              
              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-24 bg-white shadow-lg rounded-md overflow-hidden py-1 border border-black/5"
                  >
                    <button onClick={() => handleLanguageChange('zh')} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">中文</button>
                    <button onClick={() => handleLanguageChange('ja')} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">日本語</button>
                    <button onClick={() => handleLanguageChange('en')} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">English</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#efe7da] border-t border-black/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-serif py-2 border-b border-black/5"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex space-x-4 pt-4">
                <button onClick={() => handleLanguageChange('zh')} className={`px-3 py-1 border ${language === 'zh' ? 'bg-black text-[#efe7da]' : 'border-black'}`}>中文</button>
                <button onClick={() => handleLanguageChange('ja')} className={`px-3 py-1 border ${language === 'ja' ? 'bg-black text-[#efe7da]' : 'border-black'}`}>日本語</button>
                <button onClick={() => handleLanguageChange('en')} className={`px-3 py-1 border ${language === 'en' ? 'bg-black text-[#efe7da]' : 'border-black'}`}>EN</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
