import React from 'react';
import { motion } from 'framer-motion';

const StatsSection = ({ title, description, stats }) => {
  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                <div className="text-center">
                  {stat.icon && (
                    <div className="inline-block p-3 bg-blue-50 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl text-blue-600">{stat.icon}</span>
                    </div>
                  )}
                  <div className="mt-2 font-semibold text-5xl text-gray-900 mb-2">
                    {stat.value}
                    <span className="text-2xl text-gray-500">{stat.unit}</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{stat.label}</h3>
                  <p className="text-gray-500 text-sm">{stat.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection; 