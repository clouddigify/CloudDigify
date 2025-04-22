import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaCheckCircle } from 'react-icons/fa';

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

// Certifications data
const certifications = [
  "ISO 9001:2015 - Quality Management",
  "ISO/IEC 27001:2022 - Information Security",
  "PCI DSS Compliant",
  "SOC 2 Type II Certified"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const Partners = () => (
  <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="max-w-6xl mx-auto"
    >
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Partners & Certifications</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We partner with industry leaders and maintain rigorous certifications to ensure the highest standards of cloud services, security, and compliance.
        </p>
      </motion.div>
      
      {/* Partners */}
      <motion.div variants={itemVariants} className="mb-16">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center justify-center mb-8">
            <div className="p-3 bg-blue-50 rounded-full mr-4">
              <FaAward className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold">Strategic Partnerships</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {partners.map((partner) => (
              <motion.div 
                key={partner.id}
                whileHover={{ scale: 1.1 }}
                className="h-24 flex items-center justify-center relative group"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.alt} 
                  className="max-h-full max-w-full object-contain transition-opacity duration-300 z-10"
                />
                <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      
      {/* Certifications */}
      <motion.div variants={itemVariants}>
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center justify-center mb-8">
            <div className="p-3 bg-blue-50 rounded-full mr-4">
              <FaCheckCircle className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold">Industry Certifications</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-blue-50 p-4 rounded-lg text-center flex items-center justify-center"
              >
                <span className="text-gray-800 font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      
      {/* CTA */}
      <motion.div variants={itemVariants} className="mt-12 text-center">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
        >
          <a href="/contact" className="font-medium">Request Partnership Information</a>
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Partners; 