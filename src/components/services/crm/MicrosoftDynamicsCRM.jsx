import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCogs, 
  FaShieldAlt, 
  FaMobileAlt, 
  FaChartLine, 
  FaCheckCircle,
  FaRocket,
  FaHandshake,
  FaHeadset,
  FaUsers,
  FaDatabase,
  FaCloud,
  FaSyncAlt
} from 'react-icons/fa';
import { SiMicrosoft } from 'react-icons/si';
import ServiceInquiryForm from '../../common/ServiceInquiryForm';
import SEO from '../../common/SEO';

const MicrosoftDynamicsCRM = () => {
  const [showForm, setShowForm] = useState(false);
  const [inquiryType, setInquiryType] = useState('Microsoft Dynamics CRM Services');

  const openInquiryForm = (serviceType) => {
    setInquiryType(`Microsoft Dynamics CRM - ${serviceType}`);
    setShowForm(true);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const features = [
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Customer Management",
      description: "Comprehensive customer relationship management with 360-degree customer view and interaction tracking.",
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: "Sales Analytics", 
      description: "Advanced sales analytics and reporting with AI-powered insights and predictive analytics.",
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <FaMobileAlt className="text-4xl" />,
      title: "Mobile CRM",
      description: "Access your CRM anywhere with Dynamics 365 mobile app designed for sales teams on the go.",
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Enterprise Security",
      description: "Enterprise-grade security with role-based access control, data encryption, and compliance features.",
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <FaDatabase className="text-4xl" />,
      title: "Data Integration",
      description: "Seamless integration with Microsoft 365, Azure, and third-party applications for unified data management.",
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <FaCloud className="text-4xl" />,
      title: "Cloud-Native",
      description: "Built on Microsoft Azure cloud platform with automatic updates, scalability, and global availability.",
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <>
      <SEO
        title="Microsoft Dynamics CRM Services | CloudDigify - Microsoft Partner"
        description="Get Microsoft Dynamics CRM implementation, customization, and support services from CloudDigify. Microsoft partner with special pricing."
        canonicalUrl="https://clouddigify.com/services/crm/microsoft-dynamics-crm"
        keywords={['Microsoft Dynamics CRM', 'Dynamics 365', 'CRM implementation', 'CloudDigify']}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div className="text-center max-w-4xl mx-auto" {...fadeInUp}>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <FaHandshake className="mr-2" />
                Microsoft Partner
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Microsoft Dynamics CRM</h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Enterprise-grade CRM solution with AI-powered insights. Get partner pricing and expert implementation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <button
                  onClick={() => openInquiryForm('Dynamics CRM Setup')}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300 flex items-center"
                >
                  <FaRocket className="mr-2" />
                  Get Started
                </button>
                <button
                  onClick={() => openInquiryForm('Dynamics CRM Demo')}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center"
                >
                  <FaHeadset className="mr-2" />
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-12" {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful CRM Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Microsoft Dynamics CRM offers comprehensive tools to manage your entire customer lifecycle with AI-powered insights.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  variants={fadeInUp}
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-12" {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Partner Benefits</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                As a Microsoft partner, we offer exclusive benefits and expert support for Dynamics CRM implementation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Microsoft Partner Discount",
                "Free Implementation Support", 
                "24/7 Technical Support",
                "Custom Training Programs",
                "Data Migration Services",
                "Integration & Customization"
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center">
                    <FaCheckCircle className="text-green-500 text-xl mr-3" />
                    <span className="text-lg font-medium text-gray-800">{benefit}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your CRM?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get started with Microsoft Dynamics CRM today and experience enterprise-grade customer relationship management.
              </p>
              <button
                onClick={() => openInquiryForm('Dynamics CRM Implementation')}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300 flex items-center mx-auto"
              >
                <FaRocket className="mr-2" />
                Start Free Trial
              </button>
            </motion.div>
          </div>
        </section>
      </div>

      <ServiceInquiryForm 
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        serviceName={inquiryType}
      />
    </>
  );
};

export default MicrosoftDynamicsCRM;
