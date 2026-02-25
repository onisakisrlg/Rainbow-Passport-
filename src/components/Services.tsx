import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';

export const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 md:py-32 bg-[#efe7da]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-medium mb-4"
          >
            {t.services.title}
          </motion.h2>
          <p className="text-sm uppercase tracking-[0.2em] opacity-60 mb-8">
            {t.services.subtitle}
          </p>
          <p className="max-w-3xl mx-auto text-lg md:text-xl font-light opacity-80 leading-relaxed">
            {t.services.intro}
          </p>
          <p className="max-w-3xl mx-auto text-base md:text-lg font-light opacity-70 mt-4 leading-relaxed">
            {t.services.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {t.services.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/40 p-8 md:p-12 hover:bg-white/60 transition-colors duration-300 border border-black/5 rounded-sm"
            >
              <h3 className="text-2xl font-serif font-medium mb-6 pb-4 border-b border-black/10">
                {item.title}
              </h3>
              <ul className="space-y-3">
                {item.details.map((detail, i) => (
                  <li key={i} className="flex items-start opacity-80 font-light">
                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-black/40 rounded-full flex-shrink-0"></span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg md:text-xl font-serif italic opacity-80">
            {t.services.conclusion}
          </p>
        </div>
      </div>
    </section>
  );
};
