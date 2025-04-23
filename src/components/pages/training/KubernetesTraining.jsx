import React from 'react';
import { motion } from 'framer-motion';
import { FaDocker, FaServer, FaNetworkWired, FaShieldAlt } from 'react-icons/fa';
import PageTemplate from '../../templates/PageTemplate';

const KubernetesTraining = () => {
  const pageInfo = {
    title: "Kubernetes Training",
    description: "Master container orchestration with our comprehensive Kubernetes training programs",
    type: "training",
    breadcrumbs: [
      { text: "Home", link: "/" },
      { text: "Training Services", link: "/training-services" },
      { text: "Kubernetes Training", link: "/training-services/kubernetes" }
    ],
    sections: [
      {
        title: "Kubernetes Training Programs",
        content: (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Kubernetes Fundamentals",
                icon: <FaDocker className="text-3xl text-blue-500" />,
                description: "Learn core concepts and basic operations in Kubernetes"
              },
              {
                title: "Cluster Administration",
                icon: <FaServer className="text-3xl text-purple-500" />,
                description: "Master cluster setup, maintenance, and troubleshooting"
              },
              {
                title: "Networking & Services",
                icon: <FaNetworkWired className="text-3xl text-green-500" />,
                description: "Understand Kubernetes networking and service discovery"
              },
              {
                title: "Security & Best Practices",
                icon: <FaShieldAlt className="text-3xl text-red-500" />,
                description: "Learn security configurations and production best practices"
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

export default KubernetesTraining; 