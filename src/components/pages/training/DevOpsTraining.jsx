import React from 'react';
import { motion } from 'framer-motion';
import { FaDocker, FaGit, FaJenkins, FaTools, FaCloudDownloadAlt, FaCode } from 'react-icons/fa';
import PageTemplate from '../../templates/PageTemplate';

const DevOpsTraining = () => {
  const pageInfo = {
    title: "DevOps Training Programs",
    description: "Master DevOps practices and tools with our comprehensive training programs",
    type: "training",
    breadcrumbs: [
      { text: "Home", link: "/" },
      { text: "Training Services", link: "/training-services" },
      { text: "DevOps Training", link: "/training-services/devops" }
    ],
    sections: [
      {
        title: "Core DevOps Courses",
        content: (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "DevOps Fundamentals",
                icon: <FaTools className="text-3xl text-blue-500" />,
                description: "Learn core DevOps principles and practices",
                topics: [
                  "DevOps culture and methodology",
                  "Continuous Integration/Deployment",
                  "Infrastructure as Code",
                  "Monitoring and Logging"
                ]
              },
              {
                title: "Container Orchestration",
                icon: <FaDocker className="text-3xl text-purple-500" />,
                description: "Master Docker and Kubernetes",
                topics: [
                  "Docker containerization",
                  "Kubernetes orchestration",
                  "Container security",
                  "Microservices architecture"
                ]
              },
              {
                title: "CI/CD Implementation",
                icon: <FaJenkins className="text-3xl text-green-500" />,
                description: "Build robust CI/CD pipelines",
                topics: [
                  "Jenkins pipeline creation",
                  "Automated testing",
                  "Deployment strategies",
                  "Pipeline security"
                ]
              },
              {
                title: "Version Control & Git",
                icon: <FaGit className="text-3xl text-orange-500" />,
                description: "Advanced Git and collaboration",
                topics: [
                  "Git workflow mastery",
                  "Branch management",
                  "Code review practices",
                  "Git hooks and automation"
                ]
              },
              {
                title: "Cloud DevOps",
                icon: <FaCloudDownloadAlt className="text-3xl text-cyan-500" />,
                description: "Cloud-native DevOps practices",
                topics: [
                  "Cloud infrastructure automation",
                  "Serverless architecture",
                  "Cloud security practices",
                  "Multi-cloud strategies"
                ]
              },
              {
                title: "DevSecOps",
                icon: <FaCode className="text-3xl text-red-500" />,
                description: "Security integration in DevOps",
                topics: [
                  "Security automation",
                  "Compliance as Code",
                  "Vulnerability scanning",
                  "Security monitoring"
                ]
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
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="space-y-2">
                  {course.topics.map((topic, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      {topic}
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

export default DevOpsTraining; 