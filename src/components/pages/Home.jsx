import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCloud, FaRocket, FaShieldAlt, FaServer, FaChartLine } from 'react-icons/fa';
import WhyChooseUs from '../sections/WhyChooseUs';
import Testimonials from '../sections/Testimonials';
import Partners from '../sections/Partners';
import QuickContact from '../sections/QuickContact';

// This component structure follows a pattern that the PageEditor can recognize and extract content from
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

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

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
        <motion.div 
          className="absolute top-1/3 right-1/3 w-40 h-40 rounded-full bg-cyan-200 opacity-20 z-0"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ 
            duration: 18, 
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
            
            {/* Right Content - Animated Cloud Illustration */}
            <div className="w-full md:w-1/2">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative h-80 w-full">
                  <motion.div 
                    className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl shadow-xl"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 2, 0]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity
                    }}
                  />
                  <motion.div 
                    className="absolute bottom-0 left-10 w-48 h-48 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-2xl shadow-xl"
                    animate={{ 
                      y: [0, 10, 0],
                      rotate: [0, -2, 0]
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity,
                      delay: 0.5
                    }}
                  />
                  <motion.div 
                    className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-xl flex items-center justify-center"
                    animate={{ 
                      y: [0, 15, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 7, 
                      repeat: Infinity,
                      delay: 1
                    }}
                  >
                    <FaCloud className="text-white text-6xl" />
                  </motion.div>
                </div>
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
      
      {/* Services Highlight Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Cloud Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive cloud solutions designed to help your business innovate faster and operate more efficiently.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="h-14 w-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <FaCloud className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Cloud Migration</h3>
              <p className="text-gray-600 mb-4">
                Seamlessly move your applications, data, and infrastructure to the cloud with minimal disruption.
              </p>
              <Link to="/services/cloud-migration" className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </motion.div>
            
            {/* Service Card 2 */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="h-14 w-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <FaRocket className="text-indigo-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">DevOps & CI/CD</h3>
              <p className="text-gray-600 mb-4">
                Automate your development lifecycle with our DevOps practices and continuous integration/deployment pipelines.
              </p>
              <Link to="/services/devops" className="text-indigo-600 font-medium hover:text-indigo-800 inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </motion.div>
            
            {/* Service Card 3 */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="h-14 w-14 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                <FaShieldAlt className="text-cyan-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Security & Compliance</h3>
              <p className="text-gray-600 mb-4">
                Protect your cloud environment with comprehensive security solutions and ensure compliance with regulations.
              </p>
              <Link to="/services/security-compliance" className="text-cyan-600 font-medium hover:text-cyan-800 inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link to="/services">
              <motion.button 
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Services
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See what our clients have to say about our cloud solutions and services.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto border border-gray-100"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 text-2xl font-bold">AB</span>
              </div>
              <div>
                <svg className="h-8 w-8 text-yellow-400 mb-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <blockquote className="text-lg md:text-xl text-gray-700 italic mb-4">
                  "CloudDigify transformed our infrastructure by migrating our legacy systems to the cloud. The process was seamless, and we've seen a 40% reduction in our IT costs while improving performance and reliability."
                </blockquote>
                <div>
                  <h4 className="font-bold text-gray-900">Alex Barton</h4>
                  <p className="text-gray-600">CTO, FinTech Innovations</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Take the first step towards your digital transformation journey with CloudDigify.
            </p>
            <Link to="/contact">
              <motion.button 
                className="px-8 py-4 bg-white text-blue-600 font-medium rounded-lg shadow-lg hover:bg-blue-50 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Components Section */}
      <section>
        <WhyChooseUs />
        <Testimonials />
        <Partners />
        <QuickContact />
      </section>
    </div>
  );
};

export default Home; 