import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        {/* Abstract background pattern or subtle image could go here */}
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <h2 className="text-sm md:text-base font-bold tracking-[0.2em] uppercase opacity-70">
            {t.hero.subtitle}
          </h2>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight md:leading-snug max-w-4xl mx-auto">
            {t.hero.title}
          </h1>

          <div className="w-24 h-1 bg-black mx-auto my-8 opacity-20"></div>

          <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light opacity-90">
            {t.hero.description}
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="pt-12"
          >
            <a
              href="#company"
              className="inline-block border border-black px-8 py-3 text-sm tracking-widest uppercase hover:bg-black hover:text-[#efe7da] transition-colors duration-300"
            >
              {t.nav.contact}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
