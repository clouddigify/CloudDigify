import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaChartBar,
  FaBrain,
  FaSearchPlus,
  FaChartPie,
  FaLightbulb,
  FaProjectDiagram,
  FaDatabase,
  FaRegChartBar
} from 'react-icons/fa';

const ResearchAdvisory = () => {
  const solutions = [
    {
      title: 'AI-Powered Research',
      icon: <FaBrain className="text-3xl" />,
      description: 'Advanced AI solutions for research automation and insights',
      expertise: 'Processed and analyzed 100TB+ of research data for insights'
    },
    {
      title: 'Market Intelligence',
      icon: <FaChartPie className="text-3xl" />,
      description: 'Real-time market analysis and trend prediction',
      expertise: 'Provided market insights for 500+ strategic decisions'
    },
    {
      title: 'Predictive Analytics',
      icon: <FaRegChartBar className="text-3xl" />,
      description: 'Advanced forecasting and trend analysis',
      expertise: 'Achieved 90%+ accuracy in market trend predictions'
    },
    {
      title: 'Data Visualization',
      icon: <FaChartBar className="text-3xl" />,
      description: 'Interactive dashboards and visual analytics',
      expertise: 'Created 1000+ custom analytics dashboards'
    },
  ];

  const features = [
    {
      title: 'Deep Analysis',
      description: 'Comprehensive research tools',
      icon: <FaSearchPlus className="text-2xl text-blue-600" />
    },
    {
      title: 'Data Integration',
      description: 'Multi-source data analysis',
      icon: <FaDatabase className="text-2xl text-blue-600" />
    },
    {
      title: 'Smart Insights',
      description: 'AI-driven recommendations',
      icon: <FaLightbulb className="text-2xl text-blue-600" />
    },
    {
      title: 'Network Analysis',
      description: 'Advanced relationship mapping',
      icon: <FaProjectDiagram className="text-2xl text-blue-600" />
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
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <FaChartBar className="text-6xl mb-6" />
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Research & Advisory Excellence
                </h1>
                <p className="text-xl mb-8">
                  Data-driven insights and strategic advisory powered by advanced analytics and AI
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
                  >
                    Get Started
                  </Link>
                  <button
                    onClick={() => document.getElementById('solutions').scrollIntoView({ behavior: 'smooth' })}
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
                  >
                    View Solutions
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
                <h2 className="text-2xl font-semibold mb-4">Our Research Expertise</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-white/10 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        {feature.icon}
                        <h3 className="font-semibold">{feature.title}</h3>
                      </div>
                      <p className="text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div id="solutions" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Research & Analytics Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-blue-600">{solution.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-700">{solution.expertise}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us for Research & Advisory</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <FaSearchPlus className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Deep Research</h3>
              <p className="text-gray-600">Comprehensive research methodology with advanced tools</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <FaBrain className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
              <p className="text-gray-600">Advanced analytics and machine learning capabilities</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <FaLightbulb className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Strategic Advisory</h3>
              <p className="text-gray-600">Data-backed recommendations for informed decisions</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Transform Your Research & Advisory</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Partner with us to leverage AI-powered research and analytics for better decision making
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ResearchAdvisory; 