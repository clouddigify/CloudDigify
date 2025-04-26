import React from 'react';
import { motion } from 'framer-motion';
import { FaChartBar, FaDatabase, FaCloudUploadAlt, FaChartLine, FaCogs, FaShieldAlt } from 'react-icons/fa';

const DataTransformation = () => {
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
            Transforming Data, Empowering Growth
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Unlock the power of your data with our comprehensive transformation solutions
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Data Transformation Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <FaDatabase className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Data Integration</h3>
              <p className="text-gray-600">
                Seamlessly integrate data from multiple sources into a unified, actionable format
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <FaChartBar className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Advanced Analytics</h3>
              <p className="text-gray-600">
                Transform raw data into meaningful insights with advanced analytics capabilities
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <FaCloudUploadAlt className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Cloud Migration</h3>
              <p className="text-gray-600">
                Modernize your data infrastructure with secure cloud migration solutions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <FaChartLine className="text-2xl text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Enhanced Decision Making</h3>
                <p className="text-gray-600">
                  Make data-driven decisions with real-time insights and predictive analytics
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaCogs className="text-2xl text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Operational Efficiency</h3>
                <p className="text-gray-600">
                  Streamline operations and reduce costs through automated data processing
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaShieldAlt className="text-2xl text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Data Security</h3>
                <p className="text-gray-600">
                  Ensure data integrity and compliance with industry standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Data?</h2>
          <p className="text-xl mb-8">
            Let us help you unlock the full potential of your data assets
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300">
            Contact Us Today
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default DataTransformation; 