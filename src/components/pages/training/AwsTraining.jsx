import React from 'react';
import { motion } from 'framer-motion';
import { FaAws, FaCloud, FaServer, FaDatabase } from 'react-icons/fa';
import PageTemplate from '../../templates/PageTemplate';

const AwsTraining = () => {
  const pageInfo = {
    title: "AWS Certification Training",
    description: "Master AWS cloud services with our comprehensive certification training programs",
    type: "training",
    breadcrumbs: [
      { text: "Home", link: "/" },
      { text: "Training Services", link: "/training-services" },
      { text: "AWS Training", link: "/training-services/aws" }
    ],
    sections: [
      {
        title: "AWS Training Programs",
        content: (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AWS Solutions Architect",
                icon: <FaCloud className="text-3xl text-blue-500" />,
                description: "Learn to design distributed systems and applications on AWS"
              },
              {
                title: "AWS Developer",
                icon: <FaServer className="text-3xl text-blue-500" />,
                description: "Master AWS services for application development"
              },
              {
                title: "AWS DevOps Engineer",
                icon: <FaDatabase className="text-3xl text-blue-500" />,
                description: "Implement CI/CD pipelines and automation on AWS"
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

export default AwsTraining; 