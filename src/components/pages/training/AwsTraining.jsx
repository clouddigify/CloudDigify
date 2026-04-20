import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaAws, FaServer, FaDatabase, FaCloud, FaShieldAlt, FaCode } from 'react-icons/fa';
import SEO from '../../common/SEO';

const AWSTraining = () => {
  const certifications = [
    {
      title: 'AWS Solutions Architect',
      levels: ['Associate', 'Professional'],
      icon: <FaCloud className="text-3xl" />,
      description: 'Design and deploy scalable, highly available systems on AWS',
      duration: '12 weeks',
      popular: true,
    },
    {
      title: 'AWS Developer',
      levels: ['Associate'],
      icon: <FaCode className="text-3xl" />,
      description: 'Develop and maintain AWS-based applications',
      duration: '10 weeks',
    },
    {
      title: 'AWS SysOps Administrator',
      levels: ['Associate'],
      icon: <FaServer className="text-3xl" />,
      description: 'Deploy, manage, and operate scalable systems on AWS',
      duration: '10 weeks',
    },
    {
      title: 'AWS Database Specialty',
      levels: ['Specialty'],
      icon: <FaDatabase className="text-3xl" />,
      description: 'Design and maintain AWS database solutions',
      duration: '8 weeks',
    },
    {
      title: 'AWS Security Specialty',
      levels: ['Specialty'],
      icon: <FaShieldAlt className="text-3xl" />,
      description: 'Implement security controls and compliance requirements',
      duration: '8 weeks',
    },
  ];

  const features = [
    {
      title: 'Hands-on Labs',
      description: 'Practice with real AWS services in our cloud lab environment',
    },
    {
      title: 'Expert Instruction',
      description: 'Learn from AWS-certified professionals with industry experience',
    },
    {
      title: 'Exam Preparation',
      description: 'Comprehensive prep materials and practice tests included',
    },
    {
      title: 'Project-Based Learning',
      description: 'Build real-world projects for your portfolio',
    },
  ];

  return (
    <>
      <SEO
        title="AWS Certification Training | CloudDigify"
        description="Advance your cloud career with CloudDigify's AWS certification training. Hands-on labs, expert instruction, and real-world projects."
        canonicalUrl="https://clouddigify.com/training/aws"
        keywords={['AWS training', 'AWS certification', 'cloud training', 'CloudDigify']}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
      >
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <div className="container mx-auto px-4 py-20">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <FaAws className="text-6xl mb-6" />
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    AWS Certification Training
                  </h1>
                  <p className="text-xl mb-8">
                    Become an AWS certified professional and advance your cloud career
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/contact"
                      className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition duration-300"
                    >
                      Get Started
                    </Link>
                    <button
                      onClick={() => document.getElementById('courses').scrollIntoView({ behavior: 'smooth' })}
                      className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition duration-300"
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
          <h2 className="text-3xl font-bold mb-12 text-center">AWS Certification Tracks</h2>
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
                    <div className="text-orange-500">{cert.icon}</div>
                    {cert.popular && (
                      <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
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
                      className="text-orange-600 hover:text-orange-700 font-medium"
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
            <h2 className="text-3xl font-bold mb-6">Ready to Begin Your AWS Journey?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have accelerated their careers with our AWS certification training programs
            </p>
            <Link
              to="/contact"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition duration-300"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AWSTraining; 