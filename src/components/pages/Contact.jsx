import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaGlobe,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaWhatsapp
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

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
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus({
        submitting: false,
        submitted: true,
        error: null
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto px-4">
              Whether you're looking to transform your business or just want to learn more,
              we're here to help you every step of the way.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Quick Contact Bar */}
      <div className="bg-white shadow-lg transform -translate-y-8 sm:-translate-y-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 py-4 sm:py-6">
            <a href="tel:+18005551234" className="flex items-center space-x-4 px-4 sm:px-6 py-3 sm:py-4 rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="p-2 sm:p-3 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
                <FaPhone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500">Call Us</p>
                <p className="text-sm sm:text-base font-semibold text-gray-900">+1 (800) 555-1234</p>
              </div>
            </a>
            <a href="mailto:contact@clouddigify.com" className="flex items-center space-x-4 px-4 sm:px-6 py-3 sm:py-4 rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="p-2 sm:p-3 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
                <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500">Email Us</p>
                <p className="text-sm sm:text-base font-semibold text-gray-900 break-all">contact@clouddigify.com</p>
              </div>
            </a>
            <a href="https://wa.me/18005551234" className="flex items-center space-x-4 px-4 sm:px-6 py-3 sm:py-4 rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="p-2 sm:p-3 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
                <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500">WhatsApp</p>
                <p className="text-sm sm:text-base font-semibold text-gray-900">Chat with Us</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border border-gray-100"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">Fill out the form below and we'll get back to you shortly.</p>
              
            {formStatus.submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 text-green-800 px-4 sm:px-6 py-3 sm:py-4 rounded-xl mb-6"
              >
                <p className="font-medium text-sm sm:text-base">Thank you for reaching out!</p>
                <p className="text-xs sm:text-sm">We'll get back to you as soon as possible.</p>
              </motion.div>
            )}
              
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                    placeholder="+1 (123) 456-7890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                    placeholder="How can we help?"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={formStatus.submitting}
                className="w-full bg-blue-600 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg text-sm sm:text-base font-medium
                         hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 
                         focus:ring-offset-2 transition-all duration-200 disabled:opacity-50
                         shadow-lg shadow-blue-500/30"
              >
                {formStatus.submitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Office Information */}
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Our Office</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="p-2 sm:p-3 bg-blue-50 rounded-lg">
                    <FaMapMarkerAlt className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">San Francisco HQ</h4>
                    <p className="text-sm sm:text-base text-gray-600">123 Cloud Avenue, Suite 400</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="p-2 sm:p-3 bg-blue-50 rounded-lg">
                    <FaClock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">Business Hours</h4>
                    <p className="text-sm sm:text-base text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                    <p className="text-sm sm:text-base text-gray-600">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-[300px] border border-gray-100">
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

            {/* Social Links */}
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Connect With Us</h3>
              <div className="flex space-x-6">
                <a href="#" className="p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group">
                  <FaLinkedin className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
                </a>
                <a href="#" className="p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group">
                  <FaTwitter className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
                </a>
                <a href="#" className="p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group">
                  <FaFacebook className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 