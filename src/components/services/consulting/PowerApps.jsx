import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCogs, FaMobileAlt, FaCloud, FaRocket, FaCheckCircle, FaPlug, FaDatabase, FaMagic } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import ServiceInquiryForm from '../../common/ServiceInquiryForm';
import SEO from '../../common/SEO';

const PowerApps = () => {
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [inquiryType, setInquiryType] = useState('PowerApps');

  const openInquiryForm = (serviceType) => {
    setInquiryType(`PowerApps - ${serviceType}`);
    setShowInquiryForm(true);
  };

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const services = [
    {
      icon: FaMobileAlt,
      title: "Custom App Development",
      description: "Build tailored business apps rapidly with PowerApps and CloudDigify's expertise."
    },
    {
      icon: FaCloud,
      title: "Cloud Integration",
      description: "Seamlessly connect PowerApps to your cloud and on-premise data sources."
    },
    {
      icon: FaPlug,
      title: "Workflow Automation",
      description: "Automate business processes by integrating PowerApps with Power Automate."
    },
    {
      icon: FaDatabase,
      title: "Data Management",
      description: "Leverage Dataverse and other connectors for secure, scalable data handling."
    },
    {
      icon: FaMagic,
      title: "User Experience Design",
      description: "Deliver intuitive, modern interfaces for maximum user adoption."
    },
    {
      icon: FaRocket,
      title: "Rapid Deployment",
      description: "Accelerate your digital transformation with quick app rollouts."
    }
  ];

  const benefits = [
    {
      icon: FaCheckCircle,
      title: "Increased Productivity",
      description: "Empower teams to solve business challenges with custom apps."
    },
    {
      icon: FaCogs,
      title: "Low-Code Advantage",
      description: "Reduce development time and costs with PowerApps' low-code platform."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="PowerApps Consulting | CloudDigify"
        description="Accelerate business innovation with CloudDigify's PowerApps consulting: custom app development, integration, and automation."
        canonicalUrl="https://clouddigify.com/services/consulting/powerapps"
        keywords={['PowerApps', 'Microsoft Power Platform', 'app development', 'CloudDigify']}
      />
      {/* Hero Section with Animated Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity, scale }}
          className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-600"
        />
        <div className="absolute inset-0">
          {/* Animated Circles */}
          <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {[...Array(6)].map((_, index) => (
              <motion.circle
                key={index}
                cx={20 + index * 13}
                cy={50 + Math.sin(index) * 20}
                r={6}
                fill="white"
                fillOpacity="0.15"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3, ease: 'easeInOut' }}
              />
            ))}
          </svg>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mb-4"
          >
            PowerApps Consulting
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Rapidly build, deploy, and scale custom business apps with Microsoft PowerApps and CloudDigify's expert guidance.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openInquiryForm('General Inquiry')}
            className="px-8 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Request a Demo
          </motion.button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-6 text-center"
          >
            PowerApps Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
                onClick={() => openInquiryForm(service.title)}
              >
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform">
                    <service.icon className="text-3xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-6 text-center"
          >
            Why Choose PowerApps?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-blue-50 rounded-xl p-8 shadow-md flex items-start gap-4"
              >
                <benefit.icon className="text-3xl text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-6 text-center"
          >
            PowerApps Use Cases
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-2">Employee Onboarding</h3>
              <p className="text-gray-700">Digitize and automate onboarding workflows, forms, and approvals for new hires.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-2">Field Service Management</h3>
              <p className="text-gray-700">Enable field teams to capture data, update job status, and access resources on mobile devices.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-2">Expense Tracking</h3>
              <p className="text-gray-700">Streamline expense submissions, approvals, and reporting with custom apps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PowerApps vs Power Automate Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-6 text-center"
          >
            PowerApps vs Power Automate
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-blue-50 rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold mb-2 text-blue-700">PowerApps</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Build custom business apps with low-code tools</li>
                <li>Connect to 400+ data sources and services</li>
                <li>Design responsive web and mobile interfaces</li>
                <li>Empower business users to solve unique challenges</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold mb-2 text-green-700">Power Automate</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Automate repetitive tasks and workflows</li>
                <li>Integrate with Microsoft 365, Dynamics, and 500+ connectors</li>
                <li>Enable RPA (Robotic Process Automation) for legacy systems</li>
                <li>Trigger flows from apps, emails, forms, and more</li>
              </ul>
              <a
                href="/services/consulting/powerautomate"
                className="inline-block mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow transition-all duration-300 text-base tracking-wide"
              >
                Learn More About Power Automate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Modal */}
      <ServiceInquiryForm
        isOpen={showInquiryForm}
        onClose={() => setShowInquiryForm(false)}
        serviceName={inquiryType}
      />
    </div>
  );
};

export default PowerApps; 