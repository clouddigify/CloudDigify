import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import WhyChooseUs from '../sections/WhyChooseUs';
import Testimonials from '../sections/Testimonials';
import Partners from '../sections/Partners';
import QuickContact from '../sections/QuickContact';

const Home = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  ><motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <!-- Hero Section -->
    <section className="h-screen bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex flex-col justify-center items-center text-center px-6">
      <motion.h1 
        className="text-5xl md:text-7xl font-extrabold mb-6"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Empower Your Business in the Cloud
      </div>
      <motion.p 
        className="text-lg md:text-2xl mb-8 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        We deliver expert cloud solutions on AWS, Azure & OCI to help you scale, optimize, and innovate.
      </div>
      <Link to="/services" 
        
        className="bg-white text-blue-600 font-semibold px-8 py-3 rounded shadow-lg hover:bg-gray-100 transition"
      >
        See Our Services
      </a>
    </section>
    
    <!-- Our Vision and Mission -->
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-gray-700 mb-4">
              At CloudDigify, we envision a future where technology seamlessly empowers businesses, 
              driving innovation, efficiency, and security. Our goal is to redefine digital transformation, 
              offering next-generation IT infrastructure, cloud solutions, automation, and AI-driven services.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              We are committed to delivering cutting-edge IT solutions through expertise in cloud computing, 
              infrastructure modernization, automation, and cybersecurity. By integrating innovation and continuous 
              improvement, we empower businesses to achieve operational excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Why Choose Us component -->
    <div className="component-placeholder"><WhyChooseUs /></div>
    
    <!-- Testimonials component -->
    <div className="component-placeholder"><Testimonials /></div>
    
    <!-- Partners component -->
    <div className="component-placeholder"><Partners /></div>
    
    <!-- Quick Contact Form -->
    <div className="component-placeholder"><QuickContact /></div>
  </div></motion.div>
);

export default Home; 