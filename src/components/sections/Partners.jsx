import React from 'react';
import { motion } from 'framer-motion';

// Partner logo data - you can update these URLs with your actual partner logos
const partners = [
  {
    id: 1,
    name: 'AWS',
    logo: 'https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo-700x394.png',
    alt: 'AWS Logo'
  },
  {
    id: 2,
    name: 'Microsoft Azure',
    logo: 'https://logos-world.net/wp-content/uploads/2021/02/Microsoft-Azure-Logo-700x394.png',
    alt: 'Microsoft Azure Logo'
  },
  {
    id: 3,
    name: 'Google Cloud',
    logo: 'https://logos-world.net/wp-content/uploads/2021/02/Google-Cloud-Logo-700x394.png',
    alt: 'Google Cloud Logo'
  },
  {
    id: 4,
    name: 'Oracle Cloud',
    logo: 'https://logos-world.net/wp-content/uploads/2020/11/Oracle-Logo-700x394.png',
    alt: 'Oracle Cloud Logo'
  },
  {
    id: 5,
    name: 'Docker',
    logo: 'https://logos-world.net/wp-content/uploads/2021/02/Docker-Logo-700x394.png',
    alt: 'Docker Logo'
  },
  {
    id: 6,
    name: 'Kubernetes',
    logo: 'https://logos-world.net/wp-content/uploads/2022/01/Kubernetes-Logo-700x394.png',
    alt: 'Kubernetes Logo'
  }
];

const Partners = () => (
  <section className="py-12 px-6 bg-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Our Partners & Certifications</h2>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        We partner with industry leaders and maintain rigorous certifications to ensure the highest standards of service.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
        {partners.map((partner) => (
          <motion.div 
            key={partner.id}
            whileHover={{ scale: 1.1 }}
            className="h-24 flex items-center justify-center"
          >
            <img 
              src={partner.logo} 
              alt={partner.alt} 
              className="max-h-full max-w-full object-contain"
            />
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <div className="inline-block border border-blue-600 text-blue-600 px-4 py-2 rounded">
          ISO 9001:2015 and ISO/IEC 27001:2022 Certified
        </div>
      </div>
    </div>
  </section>
);

export default Partners; 