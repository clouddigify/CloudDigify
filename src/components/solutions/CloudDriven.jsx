import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaLock, FaRocket, FaSync, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const CloudDriven = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Secure, Efficient, and Cloud-Driven Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Transform your business with our enterprise-grade cloud solutions
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Cloud Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <FaCloud className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Cloud Infrastructure</h3>
              <p className="text-gray-600">
                Build scalable and reliable infrastructure with leading cloud providers
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <FaLock className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Security First</h3>
              <p className="text-gray-600">
                Enterprise-grade security measures to protect your cloud assets
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <FaRocket className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Performance Optimization</h3>
              <p className="text-gray-600">
                Optimize cloud resources for maximum performance and cost efficiency
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <FaSync className="text-2xl text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Business Agility</h3>
                <p className="text-gray-600">
                  Rapidly adapt to changing business needs with flexible cloud solutions
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaShieldAlt className="text-2xl text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Enhanced Security</h3>
                <p className="text-gray-600">
                  Advanced security features and compliance with industry standards
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaChartLine className="text-2xl text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Scalable Growth</h3>
                <p className="text-gray-600">
                  Scale your infrastructure seamlessly as your business grows
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Move to the Cloud?</h2>
          <p className="text-xl mb-8">
            Let us help you build a secure and efficient cloud infrastructure
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CloudDriven; 