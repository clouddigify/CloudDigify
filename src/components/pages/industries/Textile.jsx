import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaTshirt, FaIndustry, FaChartLine, FaCogs, FaRobot, FaCloud, FaRecycle, FaLeaf } from 'react-icons/fa';

const Textile = () => {
  const solutions = [
    {
      title: 'Smart Manufacturing',
      icon: <FaIndustry className="text-3xl" />,
      description: 'Intelligent manufacturing solutions for textile production optimization',
    },
    {
      title: 'Supply Chain Analytics',
      icon: <FaChartLine className="text-3xl" />,
      description: 'End-to-end supply chain visibility and analytics',
    },
    {
      title: 'Automation Solutions',
      icon: <FaRobot className="text-3xl" />,
      description: 'Automated processes for improved efficiency and quality',
    },
    {
      title: 'Sustainable Production',
      icon: <FaLeaf className="text-3xl" />,
      description: 'Eco-friendly solutions for sustainable textile manufacturing',
    },
  ];

  const features = [
    {
      title: 'Digital Integration',
      description: 'Seamless integration of digital technologies',
    },
    {
      title: 'Process Optimization',
      description: 'Enhanced manufacturing processes',
    },
    {
      title: 'Quality Control',
      description: 'Advanced quality management systems',
    },
    {
      title: 'Resource Management',
      description: 'Efficient resource utilization',
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
                <FaTshirt className="text-6xl mb-6" />
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Textile & Apparel Solutions
                </h1>
                <p className="text-xl mb-8">
                  Digital transformation solutions for the modern textile industry
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
                  >
                    Get Started
                  </Link>
                  <button
                    onClick={() => document.getElementById('solutions').scrollIntoView({ behavior: 'smooth' })}
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
                  >
                    View Solutions
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

      {/* Solutions Section */}
      <div id="solutions" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Industry Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
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
                  <div className="text-blue-600">{solution.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
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

      {/* Benefits Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Industry Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <FaCogs className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Process Automation</h3>
              <p className="text-gray-600">Streamlined manufacturing processes with advanced automation</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <FaCloud className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cloud Integration</h3>
              <p className="text-gray-600">Cloud-based solutions for improved scalability</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <FaRecycle className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">Eco-friendly practices and sustainable operations</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Transform Your Textile Operations</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Partner with us to modernize your textile manufacturing and embrace digital innovation
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

export default Textile; 