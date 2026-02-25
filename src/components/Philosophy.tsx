import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';

export const Philosophy = () => {
  const { t } = useLanguage();

  return (
    <section id="philosophy" className="py-24 md:py-32 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Image or Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[600px] bg-black/5 overflow-hidden"
          >
            {/* Placeholder for an image */}
            <div className="absolute inset-0 flex items-center justify-center text-black/10 font-serif text-9xl">
              RP
            </div>
            <div className="absolute bottom-0 left-0 p-8">
              <span className="block text-xs uppercase tracking-[0.2em] mb-2 opacity-60">
                {t.philosophy.subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium">
                {t.philosophy.title}
              </h2>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 md:pl-12"
          >
            <h3 className="text-2xl md:text-3xl font-serif leading-tight">
              {t.philosophy.heading}
            </h3>
            
            <div className="w-16 h-[1px] bg-black opacity-30"></div>
            
            <p className="text-base md:text-lg leading-relaxed opacity-80 font-light">
              {t.philosophy.text1}
            </p>
            
            <p className="text-base md:text-lg leading-relaxed opacity-80 font-light">
              {t.philosophy.text2}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
