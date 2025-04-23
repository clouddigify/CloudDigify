import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRocket, FaCloud, FaCogs, FaShieldAlt, FaDatabase, FaChartLine, 
         FaMobileAlt, FaBrain, FaArrowRight, FaCheck } from 'react-icons/fa';
import WhyChooseUs from '../sections/WhyChooseUs';
import Testimonials from '../sections/Testimonials';
import Partners from '../sections/Partners';
import QuickContact from '../sections/QuickContact';

const Home = () => {
  const services = [
    { 
      icon: <FaCloud className="text-4xl" />, 
      title: "Cloud Services", 
      description: "Modernize your infrastructure with scalable cloud solutions",
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      icon: <FaCogs className="text-4xl" />, 
      title: "DevOps", 
      description: "Streamline development with automated workflows",
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      icon: <FaShieldAlt className="text-4xl" />, 
      title: "Security", 
      description: "Protect your assets with enterprise-grade security",
      gradient: "from-green-500 to-emerald-500"
    },
    { 
      icon: <FaDatabase className="text-4xl" />, 
      title: "Data Analytics", 
      description: "Transform data into actionable insights",
      gradient: "from-orange-500 to-red-500"
    },
    { 
      icon: <FaMobileAlt className="text-4xl" />, 
      title: "Digital Experience", 
      description: "Create seamless digital experiences",
      gradient: "from-indigo-500 to-purple-500"
    },
    { 
      icon: <FaBrain className="text-4xl" />, 
      title: "AI & Automation", 
      description: "Leverage AI for intelligent automation",
      gradient: "from-rose-500 to-pink-500"
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
    <div className="relative">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Transform Your Digital Future
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Accelerate your business with cloud-native solutions, AI-driven insights, and cutting-edge technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
                >
                  Get Started
                  <FaArrowRight className="ml-2" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center"
                >
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for your digital transformation journey</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`p-6 bg-gradient-to-br ${service.gradient}`}>
                  <div className="text-white">{service.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose CloudDigify</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <FaCheck className="text-blue-600 text-sm" />
                  </div>
                  <span className="text-lg text-gray-700">{highlight}</span>
                </motion.div>
              ))}
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