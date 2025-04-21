import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <section className="h-screen bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-6"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Empower Your Business in the Cloud
      </motion.h1>
      <motion.p
        className="text-lg md:text-2xl mb-8 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        We deliver expert cloud solutions on AWS, Azure & OCI to help you scale, optimize, and innovate.
      </motion.p>
      <Link
        to="/services"
        className="bg-white text-blue-600 font-semibold px-8 py-3 rounded shadow-lg hover:bg-gray-100 transition"
      >
        See Our Services
      </Link>
    </section>
  </motion.div>
);

export default Home; 