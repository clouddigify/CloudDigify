import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSearch, FaChartLine, FaBrain, FaLightbulb, FaUsers, FaGlobe, FaDatabase, FaChartBar } from 'react-icons/fa';

const Research = () => {
  const services = [
    {
      title: 'Market Research',
      icon: <FaSearch className="text-3xl" />,
      description: 'In-depth market analysis and competitive intelligence',
    },
    {
      title: 'Technology Advisory',
      icon: <FaBrain className="text-3xl" />,
      description: 'Strategic technology consulting and innovation roadmaps',
    },
    {
      title: 'Business Analytics',
      icon: <FaChartLine className="text-3xl" />,
      description: 'Data-driven business insights and performance analytics',
    },
    {
      title: 'Industry Insights',
      icon: <FaLightbulb className="text-3xl" />,
      description: 'Sector-specific research and trend analysis',
    },
  ];

  const features = [
    {
      title: 'Custom Research',
      description: 'Tailored research solutions',
    },
    {
      title: 'Data Analytics',
      description: 'Advanced analytics capabilities',
    },
    {
      title: 'Expert Network',
      description: 'Access to industry experts',
    },
    {
      title: 'Global Coverage',
      description: 'Worldwide market insights',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <FaSearch className="text-6xl mb-6" />
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Research & Advisory Services
                </h1>
                <p className="text-xl mb-8">
                  Data-driven insights for informed business decisions
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
                  >
                    Get Started
                  </Link>
                  <button
                    onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
                  >
                    View Services
                  </button>
                </div>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
              >
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-white/10 rounded-lg p-4">
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Research Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-blue-600">{service.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to="/contact"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Capabilities Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Capabilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <FaUsers className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Analysis</h3>
              <p className="text-gray-600">Industry-leading research expertise</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <FaGlobe className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Coverage</h3>
              <p className="text-gray-600">Comprehensive market coverage</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <FaDatabase className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data Intelligence</h3>
              <p className="text-gray-600">Advanced data analytics tools</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <FaChartBar className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Custom Reports</h3>
              <p className="text-gray-600">Tailored research solutions</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get Actionable Insights</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Partner with us for comprehensive research and advisory services that drive business growth
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Research; 