import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaIndustry, FaHospital, FaBriefcase, FaShoppingCart, FaUniversity, FaPlane, FaWrench, FaLightbulb } from 'react-icons/fa';
import PageTemplate from '../templates/PageTemplate';

const Industries = () => {
  const pageInfo = {
    type: 'industry',
    title: 'Industries We Serve',
    description: 'Digital transformation solutions for diverse industry sectors',
    heroImage: '/images/industries-hero.jpg',
    breadcrumbs: [
      { title: 'Home', path: '/' },
      { title: 'Industries', path: '/industries' }
    ]
  };

  const industryCategories = [
    {
      icon: <FaIndustry className="text-5xl text-blue-600" />,
      title: 'Manufacturing',
      description: 'Smart manufacturing solutions for Industry 4.0',
      features: [
        'Industrial IoT Integration',
        'Predictive Maintenance',
        'Supply Chain Optimization',
        'Digital Twin Technology'
      ],
      path: '/industries/manufacturing',
      gradient: 'from-blue-500 to-cyan-500',
      image: '/images/industries/manufacturing.jpg'
    },
    {
      icon: <FaHospital className="text-5xl text-green-600" />,
      title: 'Healthcare',
      description: 'Digital healthcare solutions for modern medical needs',
      features: [
        'Telemedicine Platforms',
        'Healthcare Analytics',
        'Patient Experience',
        'Medical IoT Solutions'
      ],
      path: '/industries/healthcare',
      gradient: 'from-green-500 to-emerald-500',
      image: '/images/industries/healthcare.jpg'
    },
    {
      icon: <FaBriefcase className="text-5xl text-indigo-600" />,
      title: 'Financial Services',
      description: 'Fintech solutions for the digital economy',
      features: [
        'Digital Banking',
        'Payment Solutions',
        'Risk Management',
        'Blockchain Integration'
      ],
      path: '/industries/financial-services',
      gradient: 'from-indigo-500 to-purple-500',
      image: '/images/industries/finance.jpg'
    },
    {
      icon: <FaShoppingCart className="text-5xl text-rose-600" />,
      title: 'Retail & E-commerce',
      description: 'Digital retail solutions for the modern consumer',
      features: [
        'E-commerce Platforms',
        'Omnichannel Retail',
        'Customer Analytics',
        'Inventory Management'
      ],
      path: '/industries/retail',
      gradient: 'from-rose-500 to-pink-500',
      image: '/images/industries/retail.jpg'
    },
    {
      icon: <FaUniversity className="text-5xl text-amber-600" />,
      title: 'Education',
      description: 'Digital learning solutions for modern education',
      features: [
        'Learning Management',
        'Virtual Classrooms',
        'Student Analytics',
        'Educational Content'
      ],
      path: '/industries/education',
      gradient: 'from-amber-500 to-orange-500',
      image: '/images/industries/education.jpg'
    },
    {
      icon: <FaPlane className="text-5xl text-sky-600" />,
      title: 'Travel & Hospitality',
      description: 'Digital solutions for travel and hospitality',
      features: [
        'Booking Platforms',
        'Guest Experience',
        'Revenue Management',
        'Travel Analytics'
      ],
      path: '/industries/travel',
      gradient: 'from-sky-500 to-blue-500',
      image: '/images/industries/travel.jpg'
    }
  ];

  const emergingIndustries = [
    {
      icon: <FaWrench className="text-4xl text-blue-600" />,
      title: 'Energy & Utilities',
      description: 'Smart grid and renewable energy solutions',
      path: '/industries/energy'
    },
    {
      icon: <FaLightbulb className="text-4xl text-amber-600" />,
      title: 'Smart Cities',
      description: 'Urban innovation and smart infrastructure',
      path: '/industries/smart-cities'
    }
  ];

  return (
    <PageTemplate pageInfo={pageInfo}>
      {/* Main Industries Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Solutions</h2>
            <p className="text-xl text-gray-600">Tailored digital transformation solutions for your industry</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryCategories.map((industry, index) => (
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
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                
                <div className="relative p-8">
                  <div className="flex flex-col items-center text-center mb-6">
                    {industry.icon}
                    <h3 className="text-2xl font-semibold text-gray-900 mt-4 mb-2">{industry.title}</h3>
                    <p className="text-gray-600">{industry.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {industry.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={industry.path}
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

      {/* Emerging Industries */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Emerging Industries</h2>
            <p className="text-xl text-gray-600">Innovative solutions for emerging sectors</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {emergingIndustries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{industry.title}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <Link
                  to={industry.path}
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
                  Ready to Transform Your Industry?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our industry-specific solutions can drive your digital transformation
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

export default Industries; 