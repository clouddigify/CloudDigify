import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChartLine, FaRocket, FaCubes, FaIndustry, FaCode, FaCloud, FaShieldAlt, FaDatabase } from 'react-icons/fa';
import PageTemplate from '../templates/PageTemplate';

const UseCases = () => {
  const pageInfo = {
    type: 'content',
    title: 'Use Cases',
    description: 'Real-world success stories and solution portfolios',
    heroImage: '/images/use-cases-hero.jpg',
    breadcrumbs: [
      { title: 'Home', path: '/' },
      { title: 'Use Cases', path: '/use-cases' }
    ],
    overview: {
      title: 'Success Stories & Solutions',
      description: 'Discover how we help organizations achieve their digital transformation goals through innovative solutions and proven methodologies.',
      points: [
        'Enterprise Transformation Success Stories',
        'Industry-Specific Solutions',
        'Technology Implementation Cases',
        'Digital Innovation Examples'
      ]
    }
  };

  const successStories = [
    {
      icon: <FaCloud className="text-5xl text-blue-600" />,
      title: 'Cloud Migration Success',
      client: 'Global Financial Institution',
      results: [
        '40% reduction in operational costs',
        '99.99% system availability',
        'Enhanced security compliance',
        'Improved scalability'
      ],
      path: '/use-cases/cloud-migration',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaCode className="text-5xl text-indigo-600" />,
      title: 'DevOps Transformation',
      client: 'E-commerce Leader',
      results: [
        '70% faster deployment time',
        'Zero-downtime updates',
        'Automated testing & deployment',
        'Improved team collaboration'
      ],
      path: '/use-cases/devops-transformation',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <FaShieldAlt className="text-5xl text-green-600" />,
      title: 'Security Enhancement',
      client: 'Healthcare Provider',
      results: [
        'HIPAA compliance achieved',
        'Zero security breaches',
        'Real-time threat detection',
        'Enhanced data protection'
      ],
      path: '/use-cases/security-enhancement',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FaDatabase className="text-5xl text-rose-600" />,
      title: 'Data Analytics Platform',
      client: 'Retail Chain',
      results: [
        'Real-time analytics',
        'Predictive insights',
        'Customer behavior tracking',
        'Inventory optimization'
      ],
      path: '/use-cases/data-analytics',
      gradient: 'from-rose-500 to-pink-500'
    }
  ];

  const solutionPortfolio = [
    {
      icon: <FaIndustry className="text-4xl text-blue-600" />,
      title: 'Industry Solutions',
      description: 'Tailored solutions for specific industry needs',
      solutions: [
        'Manufacturing IoT',
        'Healthcare Analytics',
        'Financial Services Platform',
        'Retail Omnichannel'
      ]
    },
    {
      icon: <FaCubes className="text-4xl text-indigo-600" />,
      title: 'Platform Solutions',
      description: 'Enterprise-grade platforms for digital transformation',
      solutions: [
        'Cloud Native Platform',
        'Data Analytics Suite',
        'Security Framework',
        'Integration Hub'
      ]
    },
    {
      icon: <FaRocket className="text-4xl text-green-600" />,
      title: 'Innovation Lab',
      description: 'Cutting-edge solutions for emerging needs',
      solutions: [
        'AI/ML Solutions',
        'Blockchain Applications',
        'IoT Platforms',
        'Edge Computing'
      ]
    }
  ];

  return (
    <PageTemplate pageInfo={pageInfo}>
      {/* Success Stories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real results from our enterprise solutions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
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
                <div className={`absolute inset-0 bg-gradient-to-br ${story.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                
                <div className="relative p-8">
                  <div className="flex flex-col items-center text-center mb-6">
                    {story.icon}
                    <h3 className="text-2xl font-semibold text-gray-900 mt-4 mb-2">{story.title}</h3>
                    <p className="text-gray-600 font-medium">{story.client}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {story.results.map((result, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                        {result}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={story.path}
                    className="inline-flex items-center justify-center w-full px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 group"
                  >
                    View Case Study
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

      {/* Solution Portfolio */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Solution Portfolio</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for enterprise needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutionPortfolio.map((solution, index) => (
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
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.solutions.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
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
                  Let's discuss how our solutions can help you achieve your digital transformation goals
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

export default UseCases; 