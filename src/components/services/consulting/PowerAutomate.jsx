import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCogs, FaRobot, FaCloud, FaPlug, FaCheckCircle, FaSyncAlt, FaMagic, FaBolt } from 'react-icons/fa';
import ServiceInquiryForm from '../../common/ServiceInquiryForm';
import SEO from '../../common/SEO';
import { Link, useLocation } from 'react-router-dom';

const PowerAutomate = () => {
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [inquiryType, setInquiryType] = useState('Power Automate');

  const openInquiryForm = (serviceType) => {
    setInquiryType(`Power Automate - ${serviceType}`);
    setShowInquiryForm(true);
  };

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const location = useLocation();

  const services = [
    {
      icon: FaRobot,
      title: "Robotic Process Automation (RPA)",
      description: "Automate repetitive, rule-based tasks with bots that work across legacy and modern systems."
    },
    {
      icon: FaPlug,
      title: "Workflow Automation",
      description: "Streamline business processes by connecting apps, data, and services."
    },
    {
      icon: FaCloud,
      title: "Cloud Integration",
      description: "Integrate Power Automate with Microsoft 365, Dynamics, and 500+ connectors."
    },
    {
      icon: FaSyncAlt,
      title: "Scheduled Flows",
      description: "Automate tasks on a schedule, such as daily reports or data syncs."
    },
    {
      icon: FaMagic,
      title: "AI Builder Integration",
      description: "Add intelligence to your flows with AI-driven document processing and predictions."
    },
    {
      icon: FaBolt,
      title: "Instant Flows",
      description: "Trigger automations instantly from apps, emails, or button clicks."
    }
  ];

  const benefits = [
    {
      icon: FaCheckCircle,
      title: "Increased Efficiency",
      description: "Reduce manual work and errors by automating routine tasks."
    },
    {
      icon: FaCogs,
      title: "Seamless Integration",
      description: "Connect disparate systems and data sources for unified workflows."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Power Automate Consulting | CloudDigify"
        description="Automate business processes and boost productivity with CloudDigify's Power Automate consulting: RPA, workflow automation, and integration."
        canonicalUrl="https://clouddigify.com/services/consulting/powerautomate"
        keywords={['Power Automate', 'Microsoft Power Platform', 'RPA', 'workflow automation', 'CloudDigify']}
      />
      {/* Hero Section with Animated Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity, scale }}
          className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600"
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
            Power Automate Consulting
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Automate, integrate, and optimize your business processes with Microsoft Power Automate and CloudDigify's expert consulting.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openInquiryForm('General Inquiry')}
            className="px-8 py-3 bg-white text-green-700 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Request a Power Automate Demo
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
            Power Automate Services
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
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform">
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
            Why Choose Power Automate?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-green-50 rounded-xl p-8 shadow-md flex items-start gap-4"
              >
                <benefit.icon className="text-3xl text-green-600 mt-1" />
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
            Power Automate Use Cases
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-2">Invoice Processing</h3>
              <p className="text-gray-700">Automate invoice approvals, data extraction, and notifications for faster processing.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-2">IT Helpdesk Automation</h3>
              <p className="text-gray-700">Route tickets, send alerts, and automate common IT support tasks.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-2">Document Management</h3>
              <p className="text-gray-700">Automate document approvals, archiving, and compliance workflows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Link to PowerApps */}
      <section className="py-8 bg-white text-center">
        <Link
          to="/services/consulting/powerapps"
          className={`inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow transition-all duration-300 text-base tracking-wide${location.pathname === '/services/consulting/powerapps' ? ' pointer-events-none opacity-50' : ''}`}
          tabIndex={location.pathname === '/services/consulting/powerapps' ? -1 : 0}
        >
          Learn More About PowerApps
        </Link>
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

export default PowerAutomate; 