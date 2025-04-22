import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaUsers, FaCertificate, FaClock, FaServer, FaChartLine } from 'react-icons/fa';

// Company strengths - easy to edit
const reasons = [
  {
    icon: <FaShieldAlt className="h-10 w-10" />,
    title: "Trusted Partner",
    description: "Your trusted partner in IT transformation & security with over 5 years of experience delivering reliable cloud solutions to enterprises worldwide."
  },
  {
    icon: <FaUsers className="h-10 w-10" />,
    title: "Expert Team",
    description: "Team of 50+ certified cloud professionals across AWS, Azure and OCI with specialized expertise in security, DevOps, and migration strategies."
  },
  {
    icon: <FaCertificate className="h-10 w-10" />,
    title: "Industry Certifications",
    description: "ISO 9001:2015 and ISO/IEC 27001:2022 certified processes and services that ensure the highest standards of quality and security."
  },
  {
    icon: <FaClock className="h-10 w-10" />,
    title: "24/7 Support",
    description: "Round-the-clock technical support with rapid issue resolution, ensuring your operations run smoothly with minimal downtime."
  },
  {
    icon: <FaServer className="h-10 w-10" />,
    title: "Scalable Solutions",
    description: "Custom cloud solutions designed to scale with your business needs, providing flexibility without compromising performance."
  },
  {
    icon: <FaChartLine className="h-10 w-10" />,
    title: "Cost Optimization",
    description: "Strategic cloud resource management that reduces operational costs while maximizing performance and efficiency."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const WhyChooseUs = () => (
  <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="max-w-6xl mx-auto"
    >
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Why Choose CloudDigify</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We deliver excellence in cloud services through our expertise, dedication, and customer-focused approach
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <motion.div 
            key={reason.title}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-blue-600"
          >
            <div className="bg-blue-50 p-4 rounded-full inline-block mb-4">
              <div className="text-blue-600">{reason.icon}</div>
            </div>
            <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
            <p className="text-gray-600">{reason.description}</p>
          </motion.div>
        ))}
      </div>
      
      <motion.div variants={itemVariants} className="mt-16 text-center">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
        >
          <a href="/about" className="font-medium">Learn More About Us</a>
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default WhyChooseUs; 