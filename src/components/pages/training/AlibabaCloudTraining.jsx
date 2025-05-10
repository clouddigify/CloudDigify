import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCloud, FaDatabase, FaCode, FaNetworkWired, FaShieldAlt } from 'react-icons/fa';
import { SiAlibabacloud } from 'react-icons/si';
import SEO from '../../common/SEO';

const AlibabaCloudTraining = () => {
  const certifications = [
    {
      title: 'ACA Cloud Computing',
      levels: ['Associate'],
      icon: <FaCloud className="text-3xl" />,
      description: 'Master fundamental Alibaba Cloud services and solutions',
      duration: '8 weeks',
      popular: true,
    },
    {
      title: 'ACP Cloud Computing',
      levels: ['Professional'],
      icon: <FaCode className="text-3xl" />,
      description: 'Advanced cloud architecture and implementation',
      duration: '12 weeks',
      popular: true,
    },
    {
      title: 'ACA Security',
      levels: ['Associate'],
      icon: <FaShieldAlt className="text-3xl" />,
      description: 'Cloud security best practices and implementation',
      duration: '8 weeks',
    },
    {
      title: 'ACA Big Data',
      levels: ['Associate'],
      icon: <FaDatabase className="text-3xl" />,
      description: 'Big data solutions on Alibaba Cloud',
      duration: '10 weeks',
    },
    {
      title: 'ACA Networking',
      levels: ['Associate'],
      icon: <FaNetworkWired className="text-3xl" />,
      description: 'Network architecture and solutions',
      duration: '8 weeks',
    },
  ];

  const features = [
    {
      title: 'Hands-on Lab Access',
      description: 'Practice with real Alibaba Cloud environment',
    },
    {
      title: 'Official Curriculum',
      description: 'Training aligned with Alibaba Cloud standards',
    },
    {
      title: 'Certification Support',
      description: 'Exam vouchers and practice tests included',
    },
    {
      title: 'Industry Projects',
      description: 'Real-world project experience',
    },
  ];

  return (
    <>
      <SEO
        title="Alibaba Cloud Training | CloudDigify"
        description="Become an Alibaba Cloud expert with CloudDigify's official curriculum, hands-on labs, and certification support."
        canonicalUrl="https://clouddigify.com/training/alibaba-cloud"
        keywords={['Alibaba Cloud training', 'cloud certification', 'CloudDigify']}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
      >
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white">
          <div className="container mx-auto px-4 py-20">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <SiAlibabacloud className="text-6xl mb-6" />
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Alibaba Cloud Training
                  </h1>
                  <p className="text-xl mb-8">
                    Become an Alibaba Cloud expert and advance your career in cloud computing
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/contact"
                      className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition duration-300"
                    >
                      Get Started
                    </Link>
                    <button
                      onClick={() => document.getElementById('courses').scrollIntoView({ behavior: 'smooth' })}
                      className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition duration-300"
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
          <h2 className="text-3xl font-bold mb-12 text-center">Alibaba Cloud Certification Tracks</h2>
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
                    <div className="text-red-600">{cert.icon}</div>
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
                      className="text-red-600 hover:text-red-700 font-medium"
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
            <h2 className="text-3xl font-bold mb-6">Ready to Master Alibaba Cloud?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our comprehensive Alibaba Cloud training program and become a certified cloud expert
            </p>
            <Link
              to="/contact"
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AlibabaCloudTraining; 