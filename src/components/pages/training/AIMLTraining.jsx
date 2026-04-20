import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaRobot, FaBrain, FaChartLine, FaCode, FaDatabase, FaMicrochip } from 'react-icons/fa';
import SEO from '../../common/SEO';

const AIMLTraining = () => {
  const courses = [
    {
      title: 'Machine Learning Engineering',
      levels: ['Advanced'],
      icon: <FaBrain className="text-3xl" />,
      description: 'Build and deploy machine learning models at scale',
      duration: '16 weeks',
      popular: true,
    },
    {
      title: 'Deep Learning Specialization',
      levels: ['Advanced'],
      icon: <FaMicrochip className="text-3xl" />,
      description: 'Master neural networks and deep learning architectures',
      duration: '12 weeks',
      popular: true,
    },
    {
      title: 'Natural Language Processing',
      levels: ['Intermediate'],
      icon: <FaRobot className="text-3xl" />,
      description: 'Build applications that understand and generate human language',
      duration: '10 weeks',
    },
    {
      title: 'Data Science for AI',
      levels: ['Intermediate'],
      icon: <FaChartLine className="text-3xl" />,
      description: 'Data preparation and analysis for AI applications',
      duration: '8 weeks',
    },
    {
      title: 'MLOps & AI Infrastructure',
      levels: ['Advanced'],
      icon: <FaCode className="text-3xl" />,
      description: 'Build and manage AI infrastructure and pipelines',
      duration: '10 weeks',
    },
  ];

  const features = [
    {
      title: 'Hands-on Projects',
      description: 'Build real AI applications with industry datasets',
    },
    {
      title: 'GPU-powered Labs',
      description: 'Access to high-performance computing resources',
    },
    {
      title: 'Industry Expertise',
      description: 'Learn from experienced AI practitioners',
    },
    {
      title: 'Career Support',
      description: 'Job placement assistance and interview preparation',
    },
  ];

  return (
    <>
      <SEO
        title="AI & Machine Learning Training | CloudDigify"
        description="Master AI and machine learning with CloudDigify's hands-on training, real projects, and expert instructors."
        canonicalUrl="https://clouddigify.com/training/ai-ml"
        keywords={['AI training', 'machine learning', 'AI certification', 'CloudDigify']}
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
                  <FaRobot className="text-6xl mb-6" />
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    AI & Machine Learning Training
                  </h1>
                  <p className="text-xl mb-8">
                    Master the technologies shaping the future of computing
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/contact"
                      className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition duration-300"
                    >
                      Get Started
                    </Link>
                    <button
                      onClick={() => document.getElementById('courses').scrollIntoView({ behavior: 'smooth' })}
                      className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition duration-300"
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

        {/* Course Tracks */}
        <div id="courses" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">AI & ML Course Tracks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
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
                    <div className="text-purple-600">{course.icon}</div>
                    {course.popular && (
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                        Popular
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.levels.map((level, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded"
                      >
                        {level}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Duration: {course.duration}</span>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your AI Journey?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our comprehensive AI & ML training program and become a skilled artificial intelligence professional
            </p>
            <Link
              to="/contact"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AIMLTraining; 