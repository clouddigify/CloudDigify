import React from 'react';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen text-gray-800 antialiased">
      {/* Navbar */}
      <motion.nav
        className="w-full py-6 px-8 flex justify-between items-center bg-white shadow"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-2xl font-bold text-blue-600">CloudDigify</div>
        <ul className="flex space-x-6">
          <li><a href="#services" className="hover:text-blue-600">Services</a></li>
          <li><a href="#why" className="hover:text-blue-600">Why Us</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </motion.nav>

      {/* Hero */}
      <motion.section
        className="flex-grow bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex flex-col justify-center items-center text-center px-6 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Empower Your Business in the Cloud
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl">
          CloudDigify provides expert cloud solutions on AWS, Azure, and OCI to help you scale, optimize, and innovate.
        </p>
        <a
          href="#contact"
          className="bg-white text-blue-600 font-semibold px-8 py-3 rounded shadow-lg hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </motion.section>

      {/* Services */}
      <motion.section
        id="services"
        className="py-16 px-8 bg-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* DevOps & CI/CD */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">DevOps & CI/CD</h3>
            <p className="text-gray-600">Streamline development workflows with robust DevOps practices and automation.</p>
          </div>
          {/* Cloud Migration */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Cloud Migration</h3>
            <p className="text-gray-600">Seamlessly migrate your workloads to AWS, Azure, or OCI with minimal downtime.</p>
          </div>
          {/* Infrastructure Automation */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Infrastructure Automation</h3>
            <p className="text-gray-600">Automate infrastructure provisioning and management at scale.</p>
          </div>
          {/* Managed Services */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Managed Cloud Services</h3>
            <p className="text-gray-600">Let us manage your cloud environments, ensuring security and performance.</p>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        id="why"
        className="py-16 px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose CloudDigify</h2>
        <div className="space-y-8 max-w-3xl mx-auto">
          <div className="flex items-start">
            <p className="text-gray-700">Certified Cloud Experts with AWS, Azure, and OCI specialization.</p>
          </div>
          <div className="flex items-start">
            <p className="text-gray-700">Customized solutions tailored to your business needs.</p>
          </div>
          <div className="flex items-start">
            <p className="text-gray-700">24/7 Support and managed services for peace of mind.</p>
          </div>
        </div>
      </motion.section>

      {/* About CloudDigify */}
      <motion.section
        id="about"
        className="py-16 px-8 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">About CloudDigify</h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-center">
          At CloudDigify, we are passionate about helping businesses leverage the cloud to drive innovation and growth. Our team of experts brings years of experience in cloud architecture, DevOps, and automation.
        </p>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="py-16 px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="italic mb-4">"CloudDigify transformed our infrastructure with zero downtime and perfect execution."</p>
            <p className="font-semibold">— Jane Doe, CTO at TechCorp</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="italic mb-4">"Their DevOps team automated our CI/CD pipeline, saving us countless hours."</p>
            <p className="font-semibold">— John Smith, DevOps Lead at FinServ</p>
          </div>
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        id="contact"
        className="py-16 px-8 bg-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form className="max-w-2xl mx-auto space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea placeholder="Your Message" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
        </form>
      </motion.section>
    </div>
  );
};

export default HomePage;