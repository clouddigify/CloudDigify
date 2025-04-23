import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaServer, FaDatabase, FaShieldAlt } from 'react-icons/fa';
import PageTemplate from '../../templates/PageTemplate';

const CloudMigrationCases = () => {
  const pageInfo = {
    title: "Cloud Migration Success Stories",
    description: "Discover how we've helped organizations successfully migrate to the cloud",
    type: "content",
    breadcrumbs: [
      { text: "Home", link: "/" },
      { text: "Use Cases", link: "/use-cases" },
      { text: "Cloud Migration", link: "/use-cases/migration" }
    ],
    sections: [
      {
        title: "Success Stories",
        content: (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "E-commerce Platform Migration",
                icon: <FaCloud className="text-3xl text-blue-500" />,
                description: "Large-scale migration to cloud infrastructure",
                results: [
                  "60% reduction in infrastructure costs",
                  "99.99% uptime achievement",
                  "3x improvement in scalability",
                  "Enhanced security posture"
                ]
              },
              {
                title: "Legacy System Modernization",
                icon: <FaServer className="text-3xl text-purple-500" />,
                description: "Modernization of legacy applications to cloud-native",
                results: [
                  "50% reduction in maintenance costs",
                  "75% faster deployment cycles",
                  "Improved system reliability",
                  "Better user experience"
                ]
              },
              {
                title: "Database Migration",
                icon: <FaDatabase className="text-3xl text-green-500" />,
                description: "Large-scale database migration to cloud",
                results: [
                  "Zero data loss during migration",
                  "40% improvement in performance",
                  "Automated backup and recovery",
                  "Cost-effective scaling"
                ]
              },
              {
                title: "Secure Cloud Adoption",
                icon: <FaShieldAlt className="text-3xl text-red-500" />,
                description: "Secure migration of sensitive workloads",
                results: [
                  "Compliance with regulations",
                  "Enhanced data protection",
                  "Secure access controls",
                  "Real-time threat monitoring"
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

export default CloudMigrationCases; 