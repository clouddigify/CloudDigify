import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCloud, FaRocket, FaShieldAlt, FaServer, FaChartLine, FaCogs, FaDatabase, FaMobileAlt, FaBrain, FaCheck, FaAws, FaMicrosoft, FaGoogle } from 'react-icons/fa';
import { IoCalendarOutline } from 'react-icons/io5';
import { Helmet } from 'react-helmet-async';
import LazyImage from '../common/LazyImage';

// Lazy load non-critical components
const CloudPartners = lazy(() => import('../CloudPartners'));
const ImageSlider = lazy(() => import('../common/ImageSlider'));
const ServiceInquiryForm = lazy(() => import('../common/ServiceInquiryForm'));

// Loading fallback
const LoadingFallback = () => (
  <div className="w-full h-64 flex items-center justify-center">
    <div className="animate-pulse bg-gray-200 rounded-xl w-full h-full max-w-md mx-auto" />
  </div>
);

const Home = () => {
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openInquiryForm = (serviceName = '') => {
    setSelectedService(serviceName);
    setShowInquiryForm(true);
  };

  // Pre-defined dimensions for UI elements to prevent layout shifts
  useEffect(() => {
    // Reserve space for elements that might cause layout shifts
    document.documentElement.style.setProperty('--header-height', '80px');
    document.documentElement.style.setProperty('--footer-form-height', '180px');
    
    return () => {
      document.documentElement.style.removeProperty('--header-height');
      document.documentElement.style.removeProperty('--footer-form-height');
    };
  }, []);

  const heroSlides = [
    {
      gradient: 'bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900',
      alt: 'Digital Transformation',
      title: 'Transform Your Enterprise with Cloud Excellence',
      description: 'Accelerate innovation and growth with our comprehensive cloud solutions and digital transformation expertise.',
      serviceLink: '/services/digital-engineering'
    },
    {
      gradient: 'bg-gradient-to-br from-indigo-900 via-blue-800 to-blue-900',
      alt: 'AI & Innovation',
      title: 'Innovate with AI & Automation',
      description: 'Leverage cutting-edge AI and automation solutions to streamline operations and drive business value.',
      serviceLink: '/services/ai/artificial-intelligence'
    },
    {
      gradient: 'bg-gradient-to-br from-blue-800 via-indigo-900 to-blue-900',
      alt: 'Cloud Security',
      title: 'Enterprise-Grade Cloud Security',
      description: 'Protect your digital assets with our comprehensive cloud security and compliance solutions.',
      serviceLink: '/services/security/cyber-defence'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -10,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: { duration: 0.3 }
    }
  };

  const services = [
    { 
      icon: <FaCloud className="text-4xl" />, 
      title: "Cloud Migration & Modernization", 
      description: "Transform your legacy systems into modern, cloud-native applications with zero downtime",
      gradient: "from-blue-500 to-cyan-500",
      path: "/services/cloud/aws"
    },
    { 
      icon: <FaCogs className="text-4xl" />, 
      title: "DevOps Excellence", 
      description: "Accelerate delivery with automated CI/CD pipelines and infrastructure as code",
      gradient: "from-purple-500 to-pink-500",
      path: "/services/devops/cicd"
    },
    { 
      icon: <FaShieldAlt className="text-4xl" />, 
      title: "Cloud Security & Compliance", 
      description: "Enterprise-grade security with real-time threat detection and compliance automation",
      gradient: "from-green-500 to-emerald-500",
      path: "/services/security/cyber-defence"
    },
    { 
      icon: <FaDatabase className="text-4xl" />, 
      title: "Data Analytics & AI", 
      description: "Turn your data into actionable insights with advanced analytics and AI/ML solutions",
      gradient: "from-orange-500 to-red-500",
      path: "/services/consulting/data-analytics"
    },
    { 
      icon: <FaMobileAlt className="text-4xl" />, 
      title: "Cloud-Native Development", 
      description: "Build scalable, resilient applications using microservices and containers",
      gradient: "from-indigo-500 to-purple-500",
      path: "/services/digital-engineering"
    },
    { 
      icon: <FaBrain className="text-4xl" />, 
      title: "Intelligent Automation", 
      description: "Streamline operations with AI-powered automation and workflow optimization",
      gradient: "from-rose-500 to-pink-500",
      path: "/services/ai/artificial-intelligence"
    }
  ];

  const highlights = [
    "Multi-Cloud Architecture Expertise",
    "Digital Transformation Solutions",
    "Industry-Specific Cloud Strategy",
    "Continuous Innovation & Optimization"
  ];

  const stats = [
    { number: "300+", label: "Enterprise Transformations" },
    { number: "99.99%", label: "Solution Reliability" },
    { number: "40%", label: "Avg. Performance Gain" },
    { number: "15+", label: "Industry Verticals Served" }
  ];

  const partners = [
    {
      name: "AWS",
      logo: "/assets/partners/aws-logo.svg",
      services: ["EC2", "Lambda", "S3", "RDS", "EKS"]
    },
    {
      name: "Microsoft Azure",
      logo: "/assets/partners/azure-logo.svg",
      services: ["Azure VMs", "Azure Functions", "CosmosDB", "AKS"]
    },
    {
      name: "Google Cloud",
      logo: "/assets/partners/gcp-logo.svg",
      services: ["Compute Engine", "Cloud Functions", "BigQuery", "GKE"]
    },
    {
      name: "Oracle Cloud",
      logo: "/assets/partners/oracle-logo.svg",
      services: ["OCI", "Oracle DB", "Container Engine"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>CloudDigify | Cloud Transformation & Digital Solutions</title>
        <meta name="description" content="CloudDigify delivers enterprise-grade cloud transformation, AI, and digital solutions to accelerate innovation and growth for businesses worldwide." />
        <meta name="keywords" content="cloud transformation, digital solutions, cloud migration, AI solutions, enterprise cloud, cloud security" />
        <meta httpEquiv="Cache-Control" content="max-age=86400, public" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </Helmet>
      <div className="min-h-screen">
        {/* Hero Section - Carousel */}
        <section className="relative w-full">
          <Suspense fallback={<LoadingFallback />}>
            <ImageSlider
              images={heroSlides}
              interval={6000}
              autoPlay={true}
              onConsultationClick={openInquiryForm}
            />
          </Suspense>
        </section>

        {/* Services Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Cloud Transformation Expertise</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Future-proof your business with strategic cloud adoption that drives innovation, efficiency, and sustainable growth across your organization
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  custom={index}
                >
                  <div className={`p-4 sm:p-6 bg-gradient-to-br ${service.gradient}`}>
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4">{service.description}</p>
                    <div className="flex justify-between items-center">
                      <button 
                        onClick={() => openInquiryForm(service.title)}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm sm:text-base font-medium"
                      >
                        Learn More
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 bg-white p-6 rounded-xl shadow-md"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <FaCheck className="text-blue-600 text-xl" />
                  </div>
                  <span className="text-lg font-medium text-gray-800">{highlight}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Cloud Partners Section */}
        <Suspense fallback={<LoadingFallback />}>
          <CloudPartners />
        </Suspense>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Accelerate Your Digital Transformation
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join the 300+ enterprises already achieving measurable business outcomes with our tailored cloud solutions
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <button
                  onClick={() => openInquiryForm('Digital Transformation')}
                  className="px-8 py-4 bg-white text-blue-600 font-medium rounded-lg shadow-lg hover:bg-blue-50 transition duration-300 flex items-center"
                >
                  <IoCalendarOutline className="mr-2 text-xl" />
                  Schedule a Consultation
                </button>
                <Link to="/services">
                  <motion.button
                    className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore All Solutions
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      
      {/* Service Inquiry Form Modal */}
      <Suspense fallback={null}>
        <ServiceInquiryForm 
          isOpen={showInquiryForm}
          onClose={() => setShowInquiryForm(false)}
          serviceName={selectedService}
        />
      </Suspense>
    </>
  );
};

export default Home; 