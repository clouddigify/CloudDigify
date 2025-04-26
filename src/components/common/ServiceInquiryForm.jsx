import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCheck, FaPaperPlane, FaUser, FaEnvelope, FaBuilding, FaPhone, FaCommentAlt } from 'react-icons/fa';

const ServiceInquiryForm = ({ isOpen, onClose, serviceName }) => {
  const modalRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    service: serviceName || 'General Inquiry'
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  // Handle clicks outside the form
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Add event listener when the form is open
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Update service name when prop changes
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      service: serviceName || 'General Inquiry'
    }));
  }, [serviceName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill out all required fields'
      });
      return;
    }
    
    // Here you would normally send the data to your backend
    // For demo purposes, we'll just simulate a successful submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your inquiry! A CloudDigify representative will contact you shortly.'
    });
    
    // Reset form after 3 seconds
    setTimeout(() => {
      if (onClose) onClose();
      
      // Reset form data and status after closing
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
          service: serviceName || 'General Inquiry'
        });
        
        setFormStatus({
          submitted: false,
          error: false,
          message: ''
        });
      }, 300);
    }, 3000);
  };

  // Input field animation variant
  const inputVariants = {
    focus: { scale: 1.02, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" },
    blur: { scale: 1, boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)" }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          
          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <div 
              ref={modalRef}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative overflow-hidden border border-gray-100"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors z-10 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                aria-label="Close form"
              >
                <FaTimes className="text-lg" />
              </button>
              
              {/* Form Header */}
              <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-6 rounded-t-2xl">
                <motion.h3 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl font-bold mb-1"
                >
                  Request CloudDigify Consultation
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-blue-100 text-base"
                >
                  {serviceName 
                    ? `Tell us about your ${serviceName} needs`
                    : 'Tell us about your project needs'}
                </motion.p>
              </div>
              
              {/* Form Content */}
              <div className="p-6">
                {formStatus.submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotateZ: [0, 10, -10, 0] }}
                      transition={{ 
                        delay: 0.2, 
                        type: "spring",
                        times: [0, 0.2, 0.3, 0.4],
                        duration: 1
                      }}
                      className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                    >
                      <FaCheck className="text-blue-600 text-3xl" />
                    </motion.div>
                    <motion.h4 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-xl font-semibold text-gray-900 mb-2"
                    >
                      Thank You!
                    </motion.h4>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-gray-600 text-base"
                    >
                      {formStatus.message}
                    </motion.p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {formStatus.error && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm"
                      >
                        <div className="flex items-center">
                          <FaTimes className="text-red-500 mr-2" />
                          {formStatus.message}
                        </div>
                      </motion.div>
                    )}
                    
                    <div className="space-y-4">
                      <motion.div 
                        className="relative"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaUser className="text-blue-400" />
                          </div>
                          <motion.input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            whileFocus="focus"
                            variants={inputVariants}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all duration-200"
                            placeholder="Your full name"
                            required
                          />
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="relative"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                      >
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaEnvelope className="text-blue-400" />
                          </div>
                          <motion.input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            whileFocus="focus"
                            variants={inputVariants}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all duration-200"
                            placeholder="your.email@example.com"
                            required
                          />
                        </div>
                      </motion.div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <motion.div 
                          className="relative"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                            Company
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <FaBuilding className="text-blue-400" />
                            </div>
                            <motion.input
                              type="text"
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              whileFocus="focus"
                              variants={inputVariants}
                              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all duration-200"
                              placeholder="Your company"
                            />
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          className="relative"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.25 }}
                        >
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <FaPhone className="text-blue-400" />
                            </div>
                            <motion.input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              whileFocus="focus"
                              variants={inputVariants}
                              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all duration-200"
                              placeholder="(123) 456-7890"
                            />
                          </div>
                        </motion.div>
                      </div>
                      
                      <motion.div 
                        className="relative"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          How can CloudDigify help you? <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                            <FaCommentAlt className="text-blue-400" />
                          </div>
                          <motion.textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="3"
                            whileFocus="focus"
                            variants={inputVariants}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all duration-200"
                            placeholder="Describe your project or requirements"
                            required
                          ></motion.textarea>
                        </div>
                      </motion.div>
                      
                      <input
                        type="hidden"
                        name="service"
                        value={formData.service}
                      />
                      
                      <motion.div 
                        className="pt-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                      >
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2 px-6 rounded-lg font-medium flex items-center justify-center hover:from-blue-700 hover:to-blue-600 transition-colors shadow-lg text-base"
                        >
                          <FaPaperPlane className="mr-2" />
                          <span>Submit Request</span>
                        </motion.button>
                      </motion.div>
                      
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xs text-gray-500 text-center mt-2"
                      >
                        By submitting this form, you agree to CloudDigify's privacy policy and terms of service.
                      </motion.p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ServiceInquiryForm; 