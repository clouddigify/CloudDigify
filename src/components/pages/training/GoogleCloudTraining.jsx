import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGoogle, FaCloud, FaDatabase, FaCode, FaNetworkWired, FaLock } from 'react-icons/fa';
import SEO from '../../common/SEO';

const GoogleCloudTraining = () => {
  const certifications = [
    {
      title: 'Cloud Architect',
      levels: ['Professional'],
      icon: <FaCloud className="text-3xl" />,
      description: 'Design and plan cloud solution architecture on Google Cloud',
      duration: '12 weeks',
      popular: true,
    },
    {
      title: 'Cloud Developer',
      levels: ['Professional'],
      icon: <FaCode className="text-3xl" />,
      description: 'Build scalable and highly available applications',
      duration: '10 weeks',
      popular: true,
    },
    {
      title: 'Data Engineer',
      levels: ['Professional'],
      icon: <FaDatabase className="text-3xl" />,
      description: 'Design and build data processing systems',
      duration: '10 weeks',
    },
    {
      title: 'Network Engineer',
      levels: ['Professional'],
      icon: <FaNetworkWired className="text-3xl" />,
      description: 'Implement Google Cloud networking solutions',
      duration: '8 weeks',
    },
    {
      title: 'Security Engineer',
      levels: ['Professional'],
      icon: <FaLock className="text-3xl" />,
      description: 'Design and implement GCP security solutions',
      duration: '8 weeks',
    },
  ];

  const features = [
    {
      title: 'Google Cloud Console Access',
      description: 'Hands-on experience with real GCP environment',
    },
    {
      title: 'Official Google Curriculum',
      description: 'Training material aligned with Google Cloud standards',
    },
    {
      title: 'Certification Preparation',
      description: 'Practice exams and certification vouchers included',
    },
    {
      title: 'Real-world Projects',
      description: 'Build portfolio with actual cloud solutions',
    },
  ];

  return (
    <>
      <SEO
        title="Google Cloud Training | CloudDigify"
        description="Master Google Cloud Platform with CloudDigify's official curriculum, hands-on labs, and certification support."
        canonicalUrl="https://clouddigify.com/training/google-cloud"
        keywords={['Google Cloud training', 'GCP certification', 'CloudDigify']}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
      >
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white">
          <div className="container mx-auto px-4 py-20">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <FaGoogle className="text-6xl mb-6" />
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Google Cloud Training
                  </h1>
                  <p className="text-xl mb-8">
                    Master Google Cloud Platform and advance your cloud career
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/contact"
                      className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition duration-300"
                    >
                      Get Started
                    </Link>
                    <button
                      onClick={() => document.getElementById('courses').scrollIntoView({ behavior: 'smooth' })}
                      className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition duration-300"
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
          <h2 className="text-3xl font-bold mb-12 text-center">Google Cloud Certification Tracks</h2>
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
                    <div className="text-green-600">{cert.icon}</div>
                    {cert.popular && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
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
                      className="text-green-600 hover:text-green-700 font-medium"
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
            <h2 className="text-3xl font-bold mb-6">Ready to Excel with Google Cloud?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our comprehensive Google Cloud training program and become a certified cloud expert
            </p>
            <Link
              to="/contact"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default GoogleCloudTraining; 