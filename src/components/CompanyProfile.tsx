import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { GoogleMap } from './GoogleMap';

export const CompanyProfile = () => {
  const { t } = useLanguage();

  return (
    <section id="company" className="py-24 md:py-32 bg-white/50 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-medium mb-4"
          >
            {t.company.title}
          </motion.h2>
          <p className="text-sm uppercase tracking-[0.2em] opacity-60">
            {t.company.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white/60 p-8 md:p-12 border border-black/5 shadow-sm rounded-sm">
          <dl className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-4">
            
            <dt className="font-bold uppercase text-xs tracking-widest opacity-50 md:text-right md:pr-8 pt-1">
              {t.company.name}
            </dt>
            <dd className="md:col-span-2 text-lg font-serif">
              {t.company.name}
            </dd>

            <div className="col-span-full h-px bg-black/5 my-2"></div>

            <dt className="font-bold uppercase text-xs tracking-widest opacity-50 md:text-right md:pr-8 pt-1">
              Number
            </dt>
            <dd className="md:col-span-2 text-base font-light opacity-80">
              {t.company.number}
            </dd>

            <div className="col-span-full h-px bg-black/5 my-2"></div>

            <dt className="font-bold uppercase text-xs tracking-widest opacity-50 md:text-right md:pr-8 pt-1">
              Address
            </dt>
            <dd className="md:col-span-2 text-base font-light opacity-80 leading-relaxed">
              {t.company.address}
            </dd>

            <div className="col-span-full h-px bg-black/5 my-2"></div>

            <dt className="font-bold uppercase text-xs tracking-widest opacity-50 md:text-right md:pr-8 pt-1">
              Contact
            </dt>
            <dd className="md:col-span-2 space-y-2">
              <p className="text-base font-light opacity-80">
                <span className="font-medium mr-2">TEL:</span>
                <a href={`tel:${t.company.phone}`} className="hover:underline">{t.company.phone}</a>
              </p>
              <p className="text-base font-light opacity-80">
                <span className="font-medium mr-2">EMAIL:</span>
                <a href={`mailto:${t.company.email}`} className="hover:underline">{t.company.email}</a>
              </p>
            </dd>

          </dl>
          
          <GoogleMap />
        </div>
      </div>
    </section>
  );
};
