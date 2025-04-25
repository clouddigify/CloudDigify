import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChartLine, FaCubes, FaRocket, FaIndustry, FaCloud, FaLightbulb } from 'react-icons/fa';
import PageTemplate from '../templates/PageTemplate';

const UseCases = () => {
  const pageInfo = {
    title: "Success Stories & Use Cases",
    description: "Discover how we've helped organizations achieve digital transformation success",
    type: "content",
    breadcrumbs: [
      { text: "Home", link: "/" },
      { text: "Use Cases", link: "/use-cases" }
    ],
    sections: [
      {
        title: "Success Stories",
        content: (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Enterprise Transformation",
                icon: <FaChartLine className="text-3xl text-blue-500" />,
                description: "Digital transformation success stories from enterprise clients",
                path: "/use-cases/enterprise"
              },
              {
                title: "Cloud Migration",
                icon: <FaCloud className="text-3xl text-purple-500" />,
                description: "Successful cloud migration case studies and outcomes",
                path: "/use-cases/migration"
              },
              {
                title: "Digital Innovation",
                icon: <FaLightbulb className="text-3xl text-yellow-500" />,
                description: "Innovation and modernization success stories",
                path: "/use-cases/innovation"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-4">{story.icon}</div>
                <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                <p className="text-gray-600 mb-4">{story.description}</p>
                <Link 
                  to={story.path}
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        )
      },
      {
        title: "Solutions Portfolio",
        content: (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Solutions",
                icon: <FaCubes className="text-3xl text-indigo-500" />,
                description: "Tailored solutions for unique business challenges"
              },
              {
                title: "Industry Solutions",
                icon: <FaIndustry className="text-3xl text-green-500" />,
                description: "Industry-specific digital transformation solutions"
              },
              {
                title: "Innovation Lab",
                icon: <FaRocket className="text-3xl text-red-500" />,
                description: "Cutting-edge solutions and proof of concepts"
              }
            ].map((solution, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        )
      }
    ]
  };

  return <PageTemplate pageInfo={pageInfo} />;
};

export default UseCases; 