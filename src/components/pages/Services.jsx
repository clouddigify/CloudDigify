import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaCloud,
  FaCode,
  FaShieldAlt,
  FaDatabase,
  FaMobileAlt,
  FaBrain,
  FaServer,
  FaIndustry,
  FaProjectDiagram,
  FaCheckCircle,
  FaCubes,
  FaArrowRight,
  FaCog
} from 'react-icons/fa';
import PageTemplate from '../templates/PageTemplate';

const Services = () => {
  const pageInfo = {
    type: 'service',
    title: 'Our Services',
    description: 'Comprehensive digital transformation services for modern enterprises',
    heroImage: '/images/services-hero.jpg',
    breadcrumbs: [
      { title: 'Home', path: '/' },
      { title: 'Services', path: '/services' }
    ]
  };

  const serviceCategories = [
    {
      icon: <FaCloud className="text-5xl text-blue-600" />,
      title: 'Cloud Services',
      description: 'Transform your infrastructure with cloud-native solutions',
      features: [
        'Cloud Migration & Optimization',
        'Hybrid Cloud Solutions',
        'Cloud Security & Compliance',
        'Managed Cloud Services'
      ],
      path: '/services/cloud-services',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaCode className="text-5xl text-indigo-600" />,
      title: 'DevOps & Engineering',
      description: 'Accelerate delivery with modern DevOps practices',
      features: [
        'CI/CD Implementation',
        'Infrastructure as Code',
        'Containerization',
        'Microservices Architecture'
      ],
      path: '/services/devops',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <FaShieldAlt className="text-5xl text-green-600" />,
      title: 'Security & Compliance',
      description: 'Protect your assets with advanced security solutions',
      features: [
        'Cybersecurity Services',
        'Compliance Management',
        'Identity & Access Management',
        'Security Operations'
      ],
      path: '/services/security',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FaDatabase className="text-5xl text-orange-600" />,
      title: 'Data & Analytics',
      description: 'Transform data into actionable insights',
      features: [
        'Data Engineering',
        'Business Intelligence',
        'Big Data Solutions',
        'AI/ML Integration'
      ],
      path: '/services/data-analytics',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <FaMobileAlt className="text-5xl text-purple-600" />,
      title: 'Digital Experiences',
      description: 'Create engaging digital experiences',
      features: [
        'Experience Design',
        'Digital Interactive',
        'Enterprise Mobility',
        'Digital Integration'
      ],
      path: '/services/digital-experiences',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FaBrain className="text-5xl text-rose-600" />,
      title: 'AI & Automation',
      description: 'Leverage AI for business growth',
      features: [
        'Artificial Intelligence',
        'Intelligent Automation',
        'Cognitive Services',
        'RPA Implementation'
      ],
      path: '/services/ai-automation',
      gradient: 'from-rose-500 to-red-500'
    }
  ];

  const additionalServices = [
    {
      icon: <FaServer className="text-4xl text-blue-600" />,
      title: 'Enterprise Services',
      description: 'End-to-end enterprise solutions for digital transformation',
      path: '/services/enterprise'
    },
    {
      icon: <FaIndustry className="text-4xl text-indigo-600" />,
      title: 'Industry Solutions',
      description: 'Specialized solutions for specific industry needs',
      path: '/services/industry'
    },
    {
      icon: <FaProjectDiagram className="text-4xl text-green-600" />,
      title: 'Consulting Services',
      description: 'Strategic guidance for your digital journey',
      path: '/services/consulting'
    },
    {
      icon: <FaCheckCircle className="text-4xl text-orange-600" />,
      title: 'Quality Assurance',
      description: 'Comprehensive testing and quality services',
      path: '/services/quality'
    }
  ];

  return (
    <PageTemplate pageInfo={pageInfo}>
      {/* Main Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for your digital transformation journey</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service, index) => (
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
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                
                <div className="relative p-8">
                  <div className="flex flex-col items-center text-center mb-6">
                    {service.icon}
                    <h3 className="text-2xl font-semibold text-gray-900 mt-4 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={service.path}
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

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">Specialized solutions for specific business needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to={service.path}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
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
                  Let's discuss how our services can drive your digital transformation journey
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

export default Services; 