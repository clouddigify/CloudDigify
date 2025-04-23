import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaMobileAlt, FaChartLine, FaLightbulb } from 'react-icons/fa';
import PageTemplate from '../../templates/PageTemplate';

const DigitalInnovationCases = () => {
  const pageInfo = {
    title: "Digital Innovation Success Stories",
    description: "Discover how we've helped organizations innovate and transform digitally",
    type: "content",
    breadcrumbs: [
      { text: "Home", link: "/" },
      { text: "Use Cases", link: "/use-cases" },
      { text: "Digital Innovation", link: "/use-cases/innovation" }
    ],
    sections: [
      {
        title: "Innovation Success Stories",
        content: (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "AI-Powered Customer Service",
                icon: <FaRobot className="text-3xl text-blue-500" />,
                description: "Implementation of AI chatbots and automation",
                results: [
                  "70% reduction in response time",
                  "24/7 customer support coverage",
                  "90% customer satisfaction rate",
                  "Cost savings in support operations"
                ]
              },
              {
                title: "Mobile App Innovation",
                icon: <FaMobileAlt className="text-3xl text-purple-500" />,
                description: "Development of next-gen mobile application",
                results: [
                  "1M+ app downloads",
                  "4.8/5 user rating",
                  "50% increase in user engagement",
                  "Seamless omnichannel experience"
                ]
              },
              {
                title: "Data Analytics Platform",
                icon: <FaChartLine className="text-3xl text-green-500" />,
                description: "Implementation of advanced analytics solution",
                results: [
                  "Real-time business insights",
                  "Predictive analytics capability",
                  "30% improvement in decision making",
                  "Data-driven operations"
                ]
              },
              {
                title: "Digital Workplace",
                icon: <FaLightbulb className="text-3xl text-yellow-500" />,
                description: "Modern workplace transformation",
                results: [
                  "40% increase in productivity",
                  "Enhanced collaboration",
                  "Secure remote work enablement",
                  "Improved employee satisfaction"
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

export default DigitalInnovationCases; 