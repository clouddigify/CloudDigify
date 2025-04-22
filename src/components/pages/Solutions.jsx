import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCloud, FaCode, FaShieldAlt, FaDatabase, FaMobileAlt, FaBrain, FaServer, FaIndustry } from 'react-icons/fa';
import PageTemplate from '../templates/PageTemplate';

const Solutions = () => {
  const pageInfo = {
    type: 'content',
    title: 'Our Solutions',
    description: 'Comprehensive digital solutions powering your business transformation',
    heroImage: '/images/solutions-hero.jpg',
    breadcrumbs: [
      { title: 'Home', path: '/' },
      { title: 'Solutions', path: '/solutions' }
    ]
  };

  const solutionCategories = [
    {
      icon: <FaCloud className="text-4xl text-blue-600" />,
      title: 'Cloud Services',
      description: 'Modernize your infrastructure with cloud-native solutions',
      features: [
        'Cloud Migration & Optimization',
        'Hybrid Cloud Solutions',
        'Cloud Security & Compliance',
        'Managed Cloud Services'
      ],
      path: '/services/cloud-services'
    },
    {
      icon: <FaCode className="text-4xl text-blue-600" />,
      title: 'DevOps & Engineering',
      description: 'Accelerate delivery with modern DevOps practices',
      features: [
        'CI/CD Implementation',
        'Infrastructure as Code',
        'Containerization',
        'Microservices Architecture'
      ],
      path: '/services/devops'
    },
    {
      icon: <FaShieldAlt className="text-4xl text-blue-600" />,
      title: 'Security & Compliance',
      description: 'Protect your assets with advanced security solutions',
      features: [
        'Cybersecurity Services',
        'Compliance Management',
        'Identity & Access Management',
        'Security Operations'
      ],
      path: '/services/security'
    },
    {
      icon: <FaDatabase className="text-4xl text-blue-600" />,
      title: 'Data & Analytics',
      description: 'Transform data into actionable insights',
      features: [
        'Data Engineering',
        'Business Intelligence',
        'Big Data Solutions',
        'AI/ML Integration'
      ],
      path: '/services/data-analytics'
    }
  ];

  const additionalSolutions = [
    {
      icon: <FaMobileAlt className="text-4xl text-blue-600" />,
      title: 'Digital Experiences',
      description: 'Create engaging digital experiences'
    },
    {
      icon: <FaBrain className="text-4xl text-blue-600" />,
      title: 'AI & Automation',
      description: 'Leverage AI for business growth'
    },
    {
      icon: <FaServer className="text-4xl text-blue-600" />,
      title: 'Enterprise Services',
      description: 'End-to-end enterprise solutions'
    },
    {
      icon: <FaIndustry className="text-4xl text-blue-600" />,
      title: 'Industry Solutions',
      description: 'Specialized industry solutions'
    }
  ];

  return (
    <PageTemplate pageInfo={pageInfo}>
      {/* Main Solutions Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Solutions</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for your digital transformation journey</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutionCategories.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    {solution.icon}
                    <h3 className="text-2xl font-semibold text-gray-900 ml-4">{solution.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={solution.path}
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
                  >
                    Learn More
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Solutions</h2>
            <p className="text-xl text-gray-600">Specialized solutions for specific business needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
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
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our solutions can drive your digital transformation journey
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

export default Solutions; 