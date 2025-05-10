import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaChartLine, 
  FaShieldAlt, 
  FaBrain, 
  FaDatabase,
  FaLock,
  FaHandshake,
  FaRegChartBar,
  FaCubes
} from 'react-icons/fa';
import SEO from '../../common/SEO';

const FinancialServices = () => {
  const solutions = [
    {
      title: 'AI-Powered Risk Management',
      icon: <FaBrain className="text-3xl" />,
      description: 'Advanced risk assessment and fraud detection using artificial intelligence',
      expertise: 'Implemented ML models for fraud detection with 99.9% accuracy'
    },
    {
      title: 'Blockchain Solutions',
      icon: <FaCubes className="text-3xl" />,
      description: 'Secure, transparent financial transactions using blockchain technology',
      expertise: 'Developed smart contracts for automated trading and settlements'
    },
    {
      title: 'Data Analytics Platform',
      icon: <FaRegChartBar className="text-3xl" />,
      description: 'Real-time financial analytics and reporting solutions',
      expertise: 'Built predictive analytics platforms for major financial institutions'
    },
    {
      title: 'Regulatory Compliance',
      icon: <FaLock className="text-3xl" />,
      description: 'Automated compliance monitoring and reporting systems',
      expertise: 'Implemented solutions compliant with SEC, FINRA, and international regulations'
    },
  ];

  const features = [
    {
      title: 'Data Security',
      description: 'Bank-grade encryption and security',
      icon: <FaShieldAlt className="text-2xl text-blue-600" />
    },
    {
      title: 'Real-time Processing',
      description: 'High-speed transaction processing',
      icon: <FaChartLine className="text-2xl text-blue-600" />
    },
    {
      title: 'Data Integration',
      description: 'Seamless financial data integration',
      icon: <FaDatabase className="text-2xl text-blue-600" />
    },
    {
      title: 'Partnership Network',
      description: 'Global financial network access',
      icon: <FaHandshake className="text-2xl text-blue-600" />
    },
  ];

  return (
    <>
      <SEO
        title="Financial Services Industry Solutions | CloudDigify"
        description="Modernize your financial institution with CloudDigify's AI, blockchain, and analytics solutions for the financial services industry."
        canonicalUrl="https://clouddigify.com/industries/financial-services"
        keywords={['financial services', 'AI', 'blockchain', 'analytics', 'CloudDigify']}
      />
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
                  <FaChartLine className="text-6xl mb-6" />
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Financial Services Innovation
                  </h1>
                  <p className="text-xl mb-8">
                    Advanced solutions for modern financial institutions combining AI, blockchain, and analytics
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
                  <h2 className="text-2xl font-semibold mb-4">Our Financial Expertise</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div key={index} className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          {feature.icon}
                          <h3 className="font-semibold">{feature.title}</h3>
                        </div>
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
          <h2 className="text-3xl font-bold mb-12 text-center">Financial Technology Solutions</h2>
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
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-blue-700">{solution.expertise}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us for Financial Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6">
                <FaShieldAlt className="text-4xl text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Security First</h3>
                <p className="text-gray-600">Enterprise-grade security with advanced encryption and compliance measures</p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <FaBrain className="text-4xl text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">AI Innovation</h3>
                <p className="text-gray-600">Cutting-edge AI solutions for risk management and fraud detection</p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <FaCubes className="text-4xl text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Blockchain Expertise</h3>
                <p className="text-gray-600">Advanced blockchain solutions for secure, transparent transactions</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Transform Your Financial Services</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Partner with us to modernize your financial operations with cutting-edge AI, blockchain, and analytics solutions
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
    </>
  );
};

export default FinancialServices; 