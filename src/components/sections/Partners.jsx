import React from 'react';
import { motion } from 'framer-motion';

const Partners = () => (
  <section className="py-12 px-6 bg-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Our Partners & Certifications</h2>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        We partner with industry leaders and maintain rigorous certifications to ensure the highest standards of service.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
        {/* Replace these with actual partner logos */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <motion.div 
            key={item}
            whileHover={{ scale: 1.1 }}
            className="h-16 w-36 bg-gray-200 rounded flex items-center justify-center text-gray-500"
          >
            Partner {item}
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