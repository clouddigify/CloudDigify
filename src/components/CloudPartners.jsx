import React from 'react';
import { motion } from 'framer-motion';
import LazyImage from './common/LazyImage';

const partners = [
  {
    name: 'Amazon Web Services',
    logo: '/images/aws-logo.svg',
    width: 60,
    height: 40
  },
  {
    name: 'Microsoft Azure',
    logo: '/images/azure-logo.svg',
    width: 42,
    height: 40
  },
  {
    name: 'Google Cloud',
    logo: '/images/gcp-logo.svg',
    width: 180,
    height: 60
  },
  {
    name: 'Oracle Cloud',
    logo: '/images/oracle-logo.svg',
    width: 130,
    height: 30
  }
];

const CloudPartners = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12"
        >
          Our Cloud Partners
        </motion.h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow p-4 sm:p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300 min-h-[140px] sm:min-h-[160px]"
            >
              <div className="flex items-center justify-center h-16 sm:h-20 w-full mb-2 sm:mb-4 overflow-hidden">
                <LazyImage 
                  src={partner.logo}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xs sm:text-sm font-medium text-center">{partner.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudPartners;
