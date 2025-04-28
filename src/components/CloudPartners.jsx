import React from 'react';
import { motion } from 'framer-motion';
import { FaAws, FaMicrosoft, FaGoogle } from 'react-icons/fa';
import { SiOracle } from 'react-icons/si';
import LazyImage from './common/LazyImage';

const partners = [
  {
    name: 'Amazon Web Services',
    icon: FaAws,
    logo: '/images/aws-logo.png',
    services: ['EC2', 'S3', 'Lambda', 'RDS', 'CloudFront'],
    color: '#FF9900'
  },
  {
    name: 'Microsoft Azure',
    icon: FaMicrosoft,
    logo: '/images/azure-logo.png',
    services: ['Virtual Machines', 'Blob Storage', 'Functions', 'SQL Database', 'CDN'],
    color: '#0078D4'
  },
  {
    name: 'Google Cloud',
    icon: FaGoogle,
    logo: '/images/gcp-logo.png',
    services: ['Compute Engine', 'Cloud Storage', 'Cloud Functions', 'Cloud SQL', 'Cloud CDN'],
    color: '#4285F4'
  },
  {
    name: 'Oracle Cloud',
    icon: SiOracle,
    logo: '/images/oracle-logo.png',
    services: ['Compute', 'Object Storage', 'Functions', 'Database', 'CDN'],
    color: '#F80000'
  }
];

const CloudPartners = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Cloud Partners
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
            >
              <LazyImage 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-12 w-auto mb-4 sm:max-h-14 md:max-h-16 lg:max-h-20 max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[180px]"
                width={160}
                height={64}
              />
              <h3 className="text-base md:text-lg font-semibold text-center mt-2 md:mt-4">{partner.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudPartners; 