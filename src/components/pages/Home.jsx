import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCloud, FaCode, FaShieldAlt, FaDatabase, FaRocket, FaIndustry, FaChartLine, FaUsers } from 'react-icons/fa';
import PageTemplate from '../templates/PageTemplate';

const Home = () => {
  const pageInfo = {
    type: 'home',
    title: 'Cloud Solutions for Digital Transformation',
    description: 'Accelerate your business with cloud-native solutions and digital innovation',
    heroImage: '/images/hero-bg.jpg',
    overview: {
      title: 'Transform Your Business',
      description: 'CloudDigify helps enterprises accelerate their digital transformation journey with innovative cloud solutions and expert services.',
      points: [
        'Cloud-Native Solutions',
        'Digital Innovation',
        'Enterprise Transformation',
        'Expert Consultation'
      ]
    }
  };

  const coreServices = [
    {
      icon: <FaCloud className="text-5xl text-blue-600" />,
      title: 'Cloud Services',
      description: 'Comprehensive cloud solutions for modern enterprises',
      features: [
        'Cloud Migration',
        'Infrastructure Optimization',
        'Cloud Security',
        'Managed Services'
      ],
      path: '/services/cloud-services',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaCode className="text-5xl text-indigo-600" />,
      title: 'DevOps & Engineering',
      description: 'Streamline development and operations',
      features: [
        'CI/CD Pipeline',
        'Infrastructure as Code',
        'Containerization',
        'Microservices'
      ],
      path: '/services/devops',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <FaShieldAlt className="text-5xl text-green-600" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security solutions',
      features: [
        'Security Assessment',
        'Compliance Management',
        'Threat Protection',
        'Identity Management'
      ],
      path: '/services/security',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FaDatabase className="text-5xl text-rose-600" />,
      title: 'Data & Analytics',
      description: 'Turn data into actionable insights',
      features: [
        'Data Engineering',
        'Analytics Platform',
        'Business Intelligence',
        'Machine Learning'
      ],
      path: '/services/data-analytics',
      gradient: 'from-rose-500 to-pink-500'
    }
  ];

  const highlights = [
    {
      icon: <FaRocket className="text-4xl text-blue-600" />,
      title: 'Digital Innovation',
      description: 'Drive innovation with cutting-edge technology solutions'
    },
    {
      icon: <FaIndustry className="text-4xl text-indigo-600" />,
      title: 'Industry Expertise',
      description: 'Deep domain knowledge across multiple industries'
    },
    {
      icon: <FaChartLine className="text-4xl text-green-600" />,
      title: 'Proven Results',
      description: 'Track record of successful digital transformations'
    },
    {
      icon: <FaUsers className="text-4xl text-rose-600" />,
      title: 'Expert Team',
      description: 'Certified professionals with extensive experience'
    }
  ];

  const stats = [
    { number: '500+', label: 'Enterprise Clients' },
    { number: '1000+', label: 'Projects Delivered' },
    { number: '99.9%', label: 'System Uptime' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <PageTemplate pageInfo={pageInfo}>
      {/* Core Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for your digital transformation journey</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreServices.map((service, index) => (
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
    
      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose CloudDigify</h2>
            <p className="text-xl text-gray-600">Partner with us for your digital transformation journey</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
    
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
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
                  Ready to Start Your Digital Transformation?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Contact us to discuss how we can help accelerate your journey
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

export default Home; 