import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBuilding, FaUsers, FaLaptopCode, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import SEO from '../../common/SEO';

const CorporateTraining = () => {
  const programs = [
    {
      title: 'Enterprise Cloud Solutions',
      icon: <FaBuilding className="text-3xl" />,
      description: 'Comprehensive cloud training tailored for enterprise teams',
      duration: '4-6 months',
      features: ['Multi-cloud expertise', 'Enterprise architecture', 'Security best practices'],
      popular: true,
    },
    {
      title: 'Digital Transformation',
      icon: <FaChartLine className="text-3xl" />,
      description: 'Guide your organization through digital transformation',
      duration: '3-4 months',
      features: ['Change management', 'Process optimization', 'Technology adoption'],
      popular: true,
    },
    {
      title: 'DevOps & Agile',
      icon: <FaLaptopCode className="text-3xl" />,
      description: 'Implement modern development practices across teams',
      duration: '3-4 months',
      features: ['CI/CD pipelines', 'Agile methodologies', 'Collaboration tools'],
    },
    {
      title: 'Cybersecurity',
      icon: <FaShieldAlt className="text-3xl" />,
      description: 'Enterprise-wide security awareness and implementation',
      duration: '4-5 months',
      features: ['Security protocols', 'Compliance training', 'Threat detection'],
    },
  ];

  const benefits = [
    {
      title: "Customized Learning",
      description: "Training programs tailored to your organization's needs and goals"
    },
    {
      title: "Expert Instructors",
      description: "Learn from industry veterans with enterprise experience"
    },
    {
      title: "Flexible Delivery",
      description: "Choose from on-site, virtual, or hybrid training models"
    },
    {
      title: "Measurable Results",
      description: "Track progress and ROI through detailed analytics and assessments"
    }
  ];

  return (
    <>
      <SEO
        title="Corporate Training Solutions | CloudDigify"
        description="Empower your workforce with CloudDigify's corporate training: cloud, DevOps, cybersecurity, and digital transformation."
        canonicalUrl="https://clouddigify.com/training/corporate"
        keywords={['corporate training', 'enterprise training', 'CloudDigify', 'technology training']}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
      >
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 py-20">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <FaUsers className="text-6xl mb-6" />
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Corporate Training Solutions
                  </h1>
                  <p className="text-xl mb-8">
                    Empower your workforce with enterprise-grade technology training
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/contact"
                      className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition duration-300"
                    >
                      Request Consultation
                    </Link>
                    <button
                      onClick={() => document.getElementById('programs').scrollIntoView({ behavior: 'smooth' })}
                      className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition duration-300"
                    >
                      View Programs
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
                  <h2 className="text-2xl font-semibold mb-4">Training Benefits</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="bg-white/10 rounded-lg p-4">
                        <h3 className="font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-sm">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Training Programs */}
        <div id="programs" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Enterprise Training Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
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
                    <div className="text-purple-600">{program.icon}</div>
                    {program.popular && (
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                        High Demand
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Key Features:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-gray-500">Duration: {program.duration}</span>
                    <Link
                      to="/contact"
                      className="text-purple-600 hover:text-purple-700 font-medium"
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
            <h2 className="text-3xl font-bold mb-6">Transform Your Workforce</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Partner with us to develop customized training programs that align with your business objectives
            </p>
            <Link
              to="/contact"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
            >
              Schedule Enterprise Consultation
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CorporateTraining; 