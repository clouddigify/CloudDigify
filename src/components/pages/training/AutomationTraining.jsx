import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaTools, FaRobot, FaCode, FaServer, FaCloud, FaCogs } from 'react-icons/fa';

const AutomationTraining = () => {
  const courses = [
    {
      title: 'RPA Development',
      levels: ['Intermediate'],
      icon: <FaRobot className="text-3xl" />,
      description: 'Build automated workflows with leading RPA platforms',
      duration: '10 weeks',
      popular: true,
    },
    {
      title: 'CI/CD Pipeline Engineering',
      levels: ['Advanced'],
      icon: <FaCode className="text-3xl" />,
      description: 'Design and implement continuous integration/delivery pipelines',
      duration: '12 weeks',
      popular: true,
    },
    {
      title: 'Infrastructure Automation',
      levels: ['Advanced'],
      icon: <FaServer className="text-3xl" />,
      description: 'Automate infrastructure deployment and management',
      duration: '10 weeks',
    },
    {
      title: 'Cloud Automation',
      levels: ['Intermediate'],
      icon: <FaCloud className="text-3xl" />,
      description: 'Automate cloud resource provisioning and management',
      duration: '8 weeks',
    },
    {
      title: 'Test Automation',
      levels: ['Intermediate'],
      icon: <FaCogs className="text-3xl" />,
      description: 'Implement automated testing frameworks and practices',
      duration: '8 weeks',
    },
  ];

  const features = [
    {
      title: 'Practical Labs',
      description: 'Hands-on experience with industry-standard automation tools',
    },
    {
      title: 'Real Projects',
      description: 'Work on actual automation scenarios from various industries',
    },
    {
      title: 'Tool Expertise',
      description: 'Master popular automation platforms and frameworks',
    },
    {
      title: 'Best Practices',
      description: 'Learn automation patterns and enterprise standards',
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
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <FaTools className="text-6xl mb-6" />
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Automation Tools Training
                </h1>
                <p className="text-xl mb-8">
                  Master modern automation tools and boost your productivity
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition duration-300"
                  >
                    Get Started
                  </Link>
                  <button
                    onClick={() => document.getElementById('courses').scrollIntoView({ behavior: 'smooth' })}
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition duration-300"
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
        <h2 className="text-3xl font-bold mb-12 text-center">Automation Course Tracks</h2>
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
                  <div className="text-cyan-600">{course.icon}</div>
                  {course.popular && (
                    <span className="bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded">
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
                    className="text-cyan-600 hover:text-cyan-700 font-medium"
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
          <h2 className="text-3xl font-bold mb-6">Ready to Automate Your Future?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our comprehensive automation training program and become an automation expert
          </p>
          <Link
            to="/contact"
            className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition duration-300"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default AutomationTraining; 