import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMicrosoft, FaCloud, FaDatabase, FaCode, FaShieldAlt, FaCogs } from 'react-icons/fa';
import LazyImage from '../../common/LazyImage';
import SEO from '../../common/SEO';

const AzureTraining = () => {
  const certifications = [
    {
      title: 'Azure Solutions Architect',
      levels: ['Associate', 'Expert'],
      icon: <FaCloud className="text-3xl" />,
      description: 'Design solutions that run on Microsoft Azure',
      duration: '12 weeks',
      popular: true,
    },
    {
      title: 'Azure Developer',
      levels: ['Associate'],
      icon: <FaCode className="text-3xl" />,
      description: 'Build, test, and maintain Azure solutions',
      duration: '10 weeks',
      popular: true,
    },
    {
      title: 'Azure Administrator',
      levels: ['Associate'],
      icon: <FaCogs className="text-3xl" />,
      description: 'Implement, monitor, and maintain Azure solutions',
      duration: '10 weeks',
    },
    {
      title: 'Azure Database Administrator',
      levels: ['Associate'],
      icon: <FaDatabase className="text-3xl" />,
      description: 'Manage operational aspects of data platform solutions',
      duration: '8 weeks',
    },
    {
      title: 'Azure Security Engineer',
      levels: ['Associate'],
      icon: <FaShieldAlt className="text-3xl" />,
      description: 'Implement security controls and threat protection',
      duration: '8 weeks',
    },
  ];

  const features = [
    {
      title: 'Real Azure Environment',
      description: 'Practice in a live Azure subscription with hands-on labs',
    },
    {
      title: 'Microsoft Official Curriculum',
      description: 'Training aligned with Microsoft latest standards',
    },
    {
      title: 'Certification Support',
      description: 'Exam vouchers and practice tests included',
    },
    {
      title: 'Enterprise Projects',
      description: 'Work on real-world enterprise scenarios',
    },
  ];

  return (
    <>
      <SEO
        title="Microsoft Azure Training | CloudDigify"
        description="Become an Azure certified expert with CloudDigify's hands-on training, live labs, and official Microsoft curriculum."
        canonicalUrl="https://clouddigify.com/training/azure"
        keywords={['Azure training', 'Microsoft Azure certification', 'cloud training', 'CloudDigify']}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
      >
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="container mx-auto px-4 py-20">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <LazyImage 
                    src="/images/azure-logo.svg" 
                    alt="Microsoft Azure" 
                    className="w-16 h-16 mb-6"
                    width={64}
                    height={64}
                  />
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Microsoft Azure Training
                  </h1>
                  <p className="text-xl mb-8">
                    Become an Azure certified expert and transform your cloud career
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/contact"
                      className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
                    >
                      Get Started
                    </Link>
                    <button
                      onClick={() => document.getElementById('courses').scrollIntoView({ behavior: 'smooth' })}
                      className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
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
          <h2 className="text-3xl font-bold mb-12 text-center">Azure Certification Tracks</h2>
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
                    <div className="text-blue-600">{cert.icon}</div>
                    {cert.popular && (
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
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
                      className="text-blue-600 hover:text-blue-700 font-medium"
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
            <h2 className="text-3xl font-bold mb-6">Ready to Master Azure Cloud?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our comprehensive Azure training program and become a certified cloud professional
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

export default AzureTraining; 