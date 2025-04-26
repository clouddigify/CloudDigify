import React from 'react';
import { motion } from 'framer-motion';
import { FaAws, FaMicrosoft, FaGoogle } from 'react-icons/fa';
import { SiOracle } from 'react-icons/si';

const partners = [
  {
    name: 'Amazon Web Services',
    icon: FaAws,
    logo: '/assets/partners/aws-logo.png',
    services: ['EC2', 'S3', 'Lambda', 'RDS', 'CloudFront'],
    color: '#FF9900'
  },
  {
    name: 'Microsoft Azure',
    icon: FaMicrosoft,
    logo: '/assets/partners/azure-logo.png',
    services: ['Virtual Machines', 'Blob Storage', 'Functions', 'SQL Database', 'CDN'],
    color: '#0089D6'
  },
  {
    name: 'Google Cloud',
    icon: FaGoogle,
    logo: '/assets/partners/gcp-logo.png',
    services: ['Compute Engine', 'Cloud Storage', 'Cloud Functions', 'Cloud SQL', 'Cloud CDN'],
    color: '#4285F4'
  },
  {
    name: 'Oracle Cloud',
    icon: SiOracle,
    logo: '/assets/partners/oracle-logo.png',
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
            >
              <partner.icon className="text-5xl mb-4" style={{ color: partner.color }} />
              <h3 className="text-xl font-semibold text-center">{partner.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudPartners; 