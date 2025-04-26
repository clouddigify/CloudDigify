import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCloud, FaRocket, FaShieldAlt, FaServer, FaChartLine, FaCogs, FaDatabase, FaMobileAlt, FaBrain, FaCheck } from 'react-icons/fa';
import WhyChooseUs from '../sections/WhyChooseUs';
import Testimonials from '../sections/Testimonials';
import Partners from '../sections/Partners';
import QuickContact from '../sections/QuickContact';

const Home = () => {
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
      title: "Cloud Services", 
      description: "Modernize your infrastructure with scalable cloud solutions",
      gradient: "from-blue-500 to-cyan-500",
      path: "/services/cloud"
    },
    { 
      icon: <FaCogs className="text-4xl" />, 
      title: "DevOps", 
      description: "Streamline development with automated workflows",
      gradient: "from-purple-500 to-pink-500",
      path: "/services/devops"
    },
    { 
      icon: <FaShieldAlt className="text-4xl" />, 
      title: "Security", 
      description: "Protect your assets with enterprise-grade security",
      gradient: "from-green-500 to-emerald-500",
      path: "/services/security"
    },
    { 
      icon: <FaDatabase className="text-4xl" />, 
      title: "Data Analytics", 
      description: "Transform data into actionable insights",
      gradient: "from-orange-500 to-red-500",
      path: "/services/analytics"
    },
    { 
      icon: <FaMobileAlt className="text-4xl" />, 
      title: "Digital Experience", 
      description: "Create seamless digital experiences",
      gradient: "from-indigo-500 to-purple-500",
      path: "/services/digital"
    },
    { 
      icon: <FaBrain className="text-4xl" />, 
      title: "AI & Automation", 
      description: "Leverage AI for intelligent automation",
      gradient: "from-rose-500 to-pink-500",
      path: "/services/ai"
    }
  ];

  const highlights = [
    "24/7 Expert Support",
    "99.9% Uptime Guarantee",
    "Enterprise-Grade Security",
    "Scalable Solutions"
  ];

  const stats = [
    { number: "500+", label: "Clients Worldwide" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "15+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-blue-100 z-0" />
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-blue-100 to-transparent z-0" />
        
        {/* Animated Shapes */}
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-200 opacity-20 z-0"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 20, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-indigo-200 opacity-20 z-0"
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        {/* Content Container */}
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <motion.div
            className="flex flex-col md:flex-row items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Content */}
            <div className="w-full md:w-1/2 mb-12 md:mb-0">
              <motion.div variants={itemVariants}>
                <span className="inline-block py-1 px-3 mb-4 bg-blue-100 text-blue-700 font-medium rounded-full text-sm">
                  Cloud Solutions That Scale
                </span>
              </motion.div>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 text-transparent bg-clip-text"
                variants={itemVariants}
              >
                Transform Your Business With Cloud Technology
              </motion.h1>
              <motion.p
                className="text-lg text-gray-600 mb-8 max-w-xl"
                variants={itemVariants}
              >
                Accelerate innovation and achieve remarkable business outcomes with our comprehensive cloud services and solutions.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={itemVariants}
              >
                <Link to="/services">
                  <motion.button 
                    className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Services
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button 
                    className="px-6 py-3 bg-white text-blue-600 border border-blue-200 font-medium rounded-lg shadow-sm hover:shadow-md hover:bg-blue-50 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </motion.div>
            </div>
            
            {/* Right Content - Stats Grid */}
            <div className="w-full md:w-1/2">
              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/80 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-blue-100"
                    whileHover={{ y: -5, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.1)" }}
                  >
                    <motion.div 
                      className="text-3xl font-bold text-blue-600 mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + (index * 0.1) }}
                    >
                      {stat.number}
                    </motion.div>
                    <motion.div 
                      className="text-gray-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 + (index * 0.1) }}
                    >
                      {stat.label}
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Wave SVG Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            className="w-full h-24 md:h-32"
          >
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0V0z" 
              className="fill-white"
            ></path>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for your digital transformation journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                custom={index}
              >
                <div className={`p-6 bg-gradient-to-br ${service.gradient}`}>
                  <div className="text-white">{service.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link 
                    to={service.path}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
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

      {/* Get Started Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Start your digital transformation journey today with our expert team and comprehensive solutions
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/services/consulting/overview">
                <motion.div
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all cursor-pointer"
                  whileHover={{ y: -5 }}
                >
                  <FaRocket className="text-4xl mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">Schedule Consultation</h3>
                  <p className="text-blue-100">Get expert advice on your digital transformation</p>
                </motion.div>
              </Link>
              <Link to="/solutions/data-transformation">
                <motion.div
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all cursor-pointer"
                  whileHover={{ y: -5 }}
                >
                  <FaDatabase className="text-4xl mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">Explore Solutions</h3>
                  <p className="text-blue-100">Discover our data and cloud solutions</p>
                </motion.div>
              </Link>
              <Link to="/contact">
                <motion.div
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all cursor-pointer"
                  whileHover={{ y: -5 }}
                >
                  <FaChartLine className="text-4xl mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">Talk to Sales</h3>
                  <p className="text-blue-100">Get pricing and implementation details</p>
                </motion.div>
              </Link>
            </div>
            <div className="mt-12">
              <Link to="/contact">
                <motion.button
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg shadow-lg hover:bg-blue-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Now
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Include other sections */}
      <WhyChooseUs />
      <Testimonials />
      <Partners />
      <QuickContact />
    </div>
  );
};

export default Home; 