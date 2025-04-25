import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaRocket, FaChartLine, FaCogs, FaCode, FaCloud } from 'react-icons/fa';

const DigitalRuntime = () => {
  const pageInfo = {
    hero: {
      title: "Digital Runtime Services",
      description: "Optimize your digital operations with our comprehensive runtime services and solutions",
      icon: <FaClock className="text-5xl mb-4" />,
      bgClass: "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
    },
    overview: {
      title: "Runtime Excellence",
      descriptions: [
        "Transform your digital operations with our runtime services that ensure optimal performance, reliability, and scalability.",
        "We provide end-to-end runtime management solutions that help organizations maintain peak operational efficiency."
      ]
    },
    benefits: {
      title: "Key Benefits",
      items: [
        {
          icon: <FaRocket />,
          title: "Performance Optimization",
          description: "Enhance application performance and response times through advanced runtime optimization techniques."
        },
        {
          icon: <FaChartLine />,
          title: "Scalability Management",
          description: "Ensure your applications can handle growing workloads with dynamic scaling capabilities."
        },
        {
          icon: <FaCogs />,
          title: "Runtime Monitoring",
          description: "Comprehensive monitoring and alerting systems for proactive issue resolution."
        },
        {
          icon: <FaCode />,
          title: "Runtime Security",
          description: "Implement robust security measures to protect your applications during execution."
        },
        {
          icon: <FaCloud />,
          title: "Cloud Runtime Integration",
          description: "Seamless integration with cloud platforms for enhanced runtime capabilities."
        }
      ]
    },
    approach: {
      title: "Our Approach",
      points: [
        "Assessment of current runtime environment and performance metrics",
        "Implementation of optimization strategies and monitoring tools",
        "Continuous improvement through performance analysis and tuning",
        "Integration of security best practices in runtime operations",
        "Regular maintenance and updates to ensure optimal performance"
      ]
    },
    callToAction: {
      title: "Ready to Optimize Your Runtime Environment?",
      description: "Contact us to learn how our Digital Runtime services can enhance your operational efficiency.",
      buttonText: "Get Started"
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <div className={`${pageInfo.hero.bgClass} text-white py-20 px-4 text-center`}>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {pageInfo.hero.icon}
          <h1 className="text-4xl font-bold mb-4">{pageInfo.hero.title}</h1>
          <p className="text-xl max-w-2xl mx-auto">{pageInfo.hero.description}</p>
        </motion.div>
      </div>

      {/* Overview Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{pageInfo.overview.title}</h2>
          <div className="space-y-4">
            {pageInfo.overview.descriptions.map((desc, index) => (
              <p key={index} className="text-lg text-gray-600 text-center">{desc}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">{pageInfo.benefits.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pageInfo.benefits.items.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-lg"
              >
                <div className="text-3xl text-blue-500 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{pageInfo.approach.title}</h2>
          <div className="space-y-4">
            {pageInfo.approach.points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-4"
              >
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
                  {index + 1}
                </div>
                <p className="text-lg text-gray-700">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{pageInfo.callToAction.title}</h2>
          <p className="text-xl mb-8">{pageInfo.callToAction.description}</p>
          <button className="bg-white text-blue-500 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
            {pageInfo.callToAction.buttonText}
          </button>
        </div>
      </section>
    </motion.div>
  );
};

export default DigitalRuntime; 