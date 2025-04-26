import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCloud, FaDatabase, FaCode, FaNetworkWired, FaShieldAlt } from 'react-icons/fa';
import { SiOracle } from 'react-icons/si';

const OracleCloudTraining = () => {
  const certifications = [
    {
      title: 'OCI Architect',
      levels: ['Associate', 'Professional'],
      icon: <FaCloud className="text-3xl" />,
      description: 'Design and implement Oracle Cloud Infrastructure solutions',
      duration: '12 weeks',
      popular: true,
    },
    {
      title: 'OCI Developer',
      levels: ['Associate'],
      icon: <FaCode className="text-3xl" />,
      description: 'Build and deploy applications on Oracle Cloud',
      duration: '10 weeks',
      popular: true,
    },
    {
      title: 'OCI Operations',
      levels: ['Associate'],
      icon: <FaNetworkWired className="text-3xl" />,
      description: 'Manage and monitor Oracle Cloud Infrastructure',
      duration: '8 weeks',
    },
    {
      title: 'OCI Database',
      levels: ['Professional'],
      icon: <FaDatabase className="text-3xl" />,
      description: 'Manage Oracle Cloud databases and data platforms',
      duration: '10 weeks',
    },
    {
      title: 'OCI Security',
      levels: ['Associate'],
      icon: <FaShieldAlt className="text-3xl" />,
      description: 'Implement security in Oracle Cloud Infrastructure',
      duration: '8 weeks',
    },
  ];

  const features = [
    {
      title: 'Oracle Cloud Access',
      description: 'Hands-on experience with OCI environment',
    },
    {
      title: 'Oracle Certified Content',
      description: 'Training aligned with Oracle certification standards',
    },
    {
      title: 'Exam Preparation',
      description: 'Certification vouchers and practice tests included',
    },
    {
      title: 'Enterprise Projects',
      description: 'Real-world enterprise implementation experience',
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
      <div className="bg-gradient-to-r from-red-800 to-red-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <SiOracle className="text-6xl mb-6" />
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Oracle Cloud Training
                </h1>
                <p className="text-xl mb-8">
                  Master Oracle Cloud Infrastructure and advance your enterprise cloud career
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="bg-white text-red-800 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition duration-300"
                  >
                    Get Started
                  </Link>
                  <button
                    onClick={() => document.getElementById('courses').scrollIntoView({ behavior: 'smooth' })}
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-800 transition duration-300"
                  >
                    View Courses
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
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
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

      {/* Certification Tracks */}
      <div id="courses" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Oracle Cloud Certification Tracks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-red-800">{cert.icon}</div>
                  {cert.popular && (
                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.levels.map((level, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded"
                    >
                      {level}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{cert.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Duration: {cert.duration}</span>
                  <Link
                    to="/contact"
                    className="text-red-800 hover:text-red-900 font-medium"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Excel with Oracle Cloud?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our comprehensive Oracle Cloud training program and become a certified enterprise cloud expert
          </p>
          <Link
            to="/contact"
            className="bg-red-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-900 transition duration-300"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default OracleCloudTraining; 