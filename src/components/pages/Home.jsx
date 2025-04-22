import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCloud, FaRocket, FaShieldAlt, FaServer, FaChartLine, FaArrowRight, FaCheck } from 'react-icons/fa';
import WhyChooseUs from '../sections/WhyChooseUs';
import Testimonials from '../sections/Testimonials';
import Partners from '../sections/Partners';
import QuickContact from '../sections/QuickContact';

const Home = () => {
  // Animation variants
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

  // Service cards data
  const services = [
    {
      icon: <FaCloud className="text-4xl" />,
      title: 'Cloud Migration',
      description: 'Seamlessly move your applications, data, and infrastructure to the cloud with minimal disruption.',
      link: '/services/cloud-migration',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaRocket className="text-4xl" />,
      title: 'DevOps & CI/CD',
      description: 'Automate your development lifecycle with our DevOps practices and continuous integration/deployment pipelines.',
      link: '/services/devops',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: 'Security & Compliance',
      description: 'Protect your cloud environment with comprehensive security solutions and ensure compliance with regulations.',
      link: '/services/security-compliance',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const features = [
    "Enterprise Cloud Solutions",
    "24/7 Expert Support",
    "Seamless Integration",
    "Cost Optimization",
    "Advanced Security",
    "Scalable Infrastructure"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
          <motion.div
            initial={{ opacity: 0.5, scale: 0.8 }}
            animate={{ 
              opacity: [0.4, 0.6, 0.4],
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-500/30 blur-3xl"
          />
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Transform Your Business<br />
              <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                With Cloud Technology
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Accelerate innovation and achieve remarkable business outcomes with our comprehensive cloud solutions.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link 
                to="/services" 
                className="inline-flex items-center px-8 py-4 rounded-full bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                Explore Services
                <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 rounded-full bg-blue-700/20 text-white font-semibold hover:bg-blue-700/30 transition-all duration-300 backdrop-blur-sm"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>

          {/* Floating features */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
              >
                <FaCheck className="text-green-400" />
                <span className="text-white text-sm">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 relative overflow-hidden bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Our Cloud Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to help your business innovate faster and operate more efficiently.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur-xl transition-all duration-300 group-hover:scale-105" />
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`h-16 w-16 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 text-white`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
                  >
                    Learn more
                    <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other sections with updated styling */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <WhyChooseUs />
        <Testimonials />
        <Partners />
        <QuickContact />
      </motion.div>
    </div>
  );
};

export default Home;