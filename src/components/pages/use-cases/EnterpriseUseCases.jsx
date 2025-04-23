import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaChartLine, FaUsers, FaCogs } from 'react-icons/fa';
import PageTemplate from '../../templates/PageTemplate';

const EnterpriseUseCases = () => {
  const pageInfo = {
    title: "Enterprise Transformation Success Stories",
    description: "Discover how we've helped enterprises achieve digital transformation success",
    type: "content",
    breadcrumbs: [
      { text: "Home", link: "/" },
      { text: "Use Cases", link: "/use-cases" },
      { text: "Enterprise Transformation", link: "/use-cases/enterprise" }
    ],
    sections: [
      {
        title: "Success Stories",
        content: (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Global Financial Institution",
                icon: <FaBuilding className="text-3xl text-blue-500" />,
                description: "Digital transformation journey resulting in 40% cost reduction",
                results: [
                  "40% reduction in operational costs",
                  "99.99% system availability",
                  "Enhanced security compliance",
                  "Improved customer experience"
                ]
              },
              {
                title: "Manufacturing Leader",
                icon: <FaCogs className="text-3xl text-purple-500" />,
                description: "Industry 4.0 transformation with IoT integration",
                results: [
                  "30% increase in productivity",
                  "Real-time production monitoring",
                  "Predictive maintenance implementation",
                  "Supply chain optimization"
                ]
              },
              {
                title: "Retail Chain",
                icon: <FaChartLine className="text-3xl text-green-500" />,
                description: "Omnichannel digital transformation success",
                results: [
                  "50% increase in online sales",
                  "Unified customer experience",
                  "Real-time inventory management",
                  "Personalized marketing automation"
                ]
              },
              {
                title: "Healthcare Provider",
                icon: <FaUsers className="text-3xl text-red-500" />,
                description: "Digital healthcare transformation initiative",
                results: [
                  "Improved patient care delivery",
                  "Secure health records management",
                  "Telehealth implementation",
                  "Operational efficiency boost"
                ]
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-4">{story.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{story.title}</h3>
                <p className="text-gray-600 mb-4">{story.description}</p>
                <div className="space-y-2">
                  {story.results.map((result, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      {result}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )
      }
    ]
  };

  return <PageTemplate pageInfo={pageInfo} />;
};

export default EnterpriseUseCases; 