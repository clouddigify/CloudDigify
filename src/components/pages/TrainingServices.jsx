import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCloud, FaCode, FaShieldAlt, FaGraduationCap, FaRocket, FaCogs, FaUsers, FaChartLine } from 'react-icons/fa';
import PageTemplate from '../templates/PageTemplate';

const TrainingServices = () => {
  const pageInfo = {
    type: 'content',
    title: 'Training Services',
    description: 'Empower your team with cutting-edge technology training',
    heroImage: '/images/training-hero.jpg',
    breadcrumbs: [
      { title: 'Home', path: '/' },
      { title: 'Training Services', path: '/training-services' }
    ],
    overview: {
      title: 'Transform Your Team',
      description: 'Our comprehensive training programs are designed to equip your team with the latest skills and knowledge in cloud computing, DevOps, security, and digital transformation.',
      points: [
        'Expert-led training sessions',
        'Hands-on practical exercises',
        'Industry-recognized certifications',
        'Customized learning paths'
      ]
    }
  };

  const trainingCategories = [
    {
      icon: <FaCloud className="text-5xl text-blue-600" />,
      title: 'Cloud & DevOps',
      description: 'Master cloud platforms and DevOps practices',
      courses: [
        'AWS Certification Training',
        'Azure Cloud Training',
        'DevOps Tools & Practices',
        'Kubernetes & Container Training'
      ],
      path: '/training-services/cloud-devops',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaRocket className="text-5xl text-indigo-600" />,
      title: 'Digital Transformation',
      description: 'Lead digital initiatives with confidence',
      courses: [
        'Agile & Scrum',
        'Digital Leadership',
        'Innovation Workshops',
        'Change Management'
      ],
      path: '/training-services/digital-transformation',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <FaCogs className="text-5xl text-green-600" />,
      title: 'Enterprise Solutions',
      description: 'Build and maintain enterprise systems',
      courses: [
        'Enterprise Architecture',
        'Microservices',
        'API Design & Development',
        'System Integration'
      ],
      path: '/training-services/enterprise-solutions',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FaShieldAlt className="text-5xl text-rose-600" />,
      title: 'Security & Compliance',
      description: 'Protect assets and ensure compliance',
      courses: [
        'Cybersecurity Training',
        'Compliance Workshops',
        'Security Best Practices',
        'Risk Management'
      ],
      path: '/training-services/security-compliance',
      gradient: 'from-rose-500 to-pink-500'
    }
  ];

  const features = [
    {
      icon: <FaGraduationCap className="text-4xl text-blue-600" />,
      title: 'Expert Instructors',
      description: 'Learn from industry veterans with real-world experience'
    },
    {
      icon: <FaUsers className="text-4xl text-indigo-600" />,
      title: 'Interactive Learning',
      description: 'Engage in hands-on exercises and group discussions'
    },
    {
      icon: <FaChartLine className="text-4xl text-green-600" />,
      title: 'Career Growth',
      description: 'Acquire skills that accelerate your career progression'
    }
  ];

  return (
    <PageTemplate pageInfo={pageInfo}>
      {/* Training Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Training Programs</h2>
            <p className="text-xl text-gray-600">Comprehensive courses for modern technology skills</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                
                <div className="relative p-8">
                  <div className="flex flex-col items-center text-center mb-6">
                    {category.icon}
                    <h3 className="text-2xl font-semibold text-gray-900 mt-4 mb-2">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {category.courses.map((course, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                        {course}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={category.path}
                    className="inline-flex items-center justify-center w-full px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 group"
                  >
                    Learn More
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Training</h2>
            <p className="text-xl text-gray-600">Experience the difference with our expert-led training programs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl overflow-hidden"
          >
            <div className="relative px-8 py-16 md:px-16 text-center">
              <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Upskill Your Team?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Contact us to discuss your training needs and create a customized learning path
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-full bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-all duration-200 group"
                >
                  Get Started
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default TrainingServices; 