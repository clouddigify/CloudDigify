import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaArrowRight } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
    hover: {
      y: -5,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: { duration: 0.3 }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });
    
    try {
      // Send data to our API endpoint
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          formType: 'contact-page' // Specify this is main contact form
        })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }
      
      // Clear form data after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
      
      setFormStatus({
        submitting: false,
        submitted: true,
        error: null
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        submitting: false,
        submitted: false,
        error: error.message || 'An error occurred. Please try again.'
      });
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Background Elements */}
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl -translate-x-1/2 -translate-y-1/3"
          animate={{
            scale: [1, 1.2, 1],
            x: [-100, -50, -100],
            y: [-100, -50, -100],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-100 rounded-full opacity-40 blur-3xl translate-x-1/3 translate-y-1/4"
          animate={{
            scale: [1, 1.3, 1],
            x: [100, 50, 100],
            y: [100, 50, 100],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block py-1 px-3 mb-4 bg-blue-100 text-blue-700 font-medium rounded-full text-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Get In Touch
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 text-transparent bg-clip-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Contact Us
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Have questions about our cloud services? Ready to start your digital transformation journey? 
              Our team of experts is here to help you every step of the way.
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Form and Info Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Contact Information */}
            <motion.div 
              className="lg:col-span-1"
              variants={itemVariants}
            >
              <motion.div 
                className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100"
                variants={cardVariants}
                whileHover="hover"
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h2>
                
                <div className="space-y-6 md:space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg text-blue-600 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                      <FaMapMarkerAlt size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                      <address className="not-italic text-gray-600">
                        123 Cloud Avenue<br />
                        Suite 400<br />
                        San Francisco, CA 94105
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg text-blue-600 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                      <FaPhone size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                      <p className="text-gray-600">
                        <a href="tel:+18005551234" className="hover:text-blue-600 transition-colors">+1 (800) 555-1234</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg text-blue-600 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                      <FaEnvelope size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:contact@clouddigify.com" className="hover:text-blue-600 transition-colors">contact@clouddigify.com</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg text-blue-600 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                      <FaClock size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-2"
              variants={itemVariants}
            >
              <motion.div 
                className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100"
                variants={cardVariants}
                whileHover="hover"
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
                
                {formStatus.submitted ? (
                  <motion.div 
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p>Thank you for your message! We'll get back to you shortly.</p>
                  </motion.div>
                ) : null}
                
                {formStatus.error ? (
                  <motion.div 
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p>{formStatus.error}</p>
                  </motion.div>
                ) : null}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Full Name*</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email Address*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your Phone Number"
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-gray-700 mb-2 font-medium">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message*</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                      rows="5"
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={formStatus.submitting}
                    className={`px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors ${formStatus.submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {formStatus.submitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Location</h2>
            <p className="text-lg text-gray-600">
              Visit our headquarters in the heart of San Francisco's tech district
            </p>
          </motion.div>
          
          <motion.div 
            className="rounded-xl overflow-hidden shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="w-full h-96 bg-gray-200">
              {/* Replace with actual map implementation */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1039033942423!2d-122.39776548441904!3d37.78750921931642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807ded297e89%3A0xcfd1b8f860eb90f6!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1653598279798!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CloudDigify Office Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Need Immediate Assistance?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Our support team is available to help with urgent needs. Call our priority support line or schedule a quick consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="tel:+18005551234"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPhone className="mr-2" /> Call Support
            </motion.a>
            <motion.a
              href="#"
              className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Consultation <FaArrowRight className="ml-2" />
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 