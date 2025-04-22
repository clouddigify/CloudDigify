import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaUsers, FaCertificate, FaClock } from 'react-icons/fa';

// Company strengths - easy to edit
const reasons = [
  {
    icon: <FaShieldAlt />,
    title: "Trusted Partner",
    description: "Your trusted partner in IT transformation & security with over 5 years of experience"
  },
  {
    icon: <FaUsers />,
    title: "Expert Team",
    description: "Team of 50+ certified cloud professionals across AWS, Azure and OCI"
  },
  {
    icon: <FaCertificate />,
    title: "Industry Certifications",
    description: "ISO 9001:2015 and ISO/IEC 27001:2022 certified processes and services"
  },
  {
    icon: <FaClock />,
    title: "24/7 Support",
    description: "Round-the-clock technical support with rapid issue resolution"
  }
];

// Edit this section title
const sectionTitle = "Why Choose CloudDigify";

const WhyChooseUs = () => (
  <section className="py-16 px-6 bg-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">{sectionTitle}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((reason) => (
          <motion.div 
            key={reason.title}
            whileHover={{ y: -10 }}
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <div className="text-4xl text-blue-600 mb-4">{reason.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
            <p className="text-gray-600">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs; 