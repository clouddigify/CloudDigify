import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaServer, FaDatabase, FaNetworkWired } from 'react-icons/fa';
import PageTemplate from '../../templates/PageTemplate';

const AzureTraining = () => {
  const pageInfo = {
    title: "Azure Cloud Training",
    description: "Master Microsoft Azure cloud platform with our comprehensive training programs",
    type: "training",
    breadcrumbs: [
      { text: "Home", link: "/" },
      { text: "Training Services", link: "/training-services" },
      { text: "Azure Training", link: "/training-services/azure" }
    ],
    sections: [
      {
        title: "Azure Training Programs",
        content: (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Azure Solutions Architect",
                icon: <FaCloud className="text-3xl text-blue-500" />,
                description: "Design and implement solutions on Microsoft Azure"
              },
              {
                title: "Azure Administrator",
                icon: <FaServer className="text-3xl text-blue-500" />,
                description: "Manage cloud services and infrastructure on Azure"
              },
              {
                title: "Azure Data Engineer",
                icon: <FaDatabase className="text-3xl text-blue-500" />,
                description: "Build and optimize data solutions using Azure services"
              },
              {
                title: "Azure Network Engineer",
                icon: <FaNetworkWired className="text-3xl text-blue-500" />,
                description: "Design and implement Azure networking solutions"
              }
            ].map((course, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-4">{course.icon}</div>
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-600">{course.description}</p>
              </motion.div>
            ))}
          </div>
        )
      }
    ]
  };

  return <PageTemplate pageInfo={pageInfo} />;
};

export default AzureTraining; 