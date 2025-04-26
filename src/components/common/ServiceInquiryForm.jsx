import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCheck, FaPaperPlane } from 'react-icons/fa';

const ServiceInquiryForm = ({ isOpen, onClose, serviceName }) => {
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
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          
          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={e => e.stopPropagation()}
          >
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <FaTimes />
              </button>
              
              {/* Form Header */}
              <div className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white p-6 rounded-t-xl">
                <h3 className="text-2xl font-bold mb-2">Request CloudDigify Consultation</h3>
                <p className="text-indigo-100">
                  {serviceName 
                    ? `Tell us about your ${serviceName} needs`
                    : 'Tell us about your project needs'}
                </p>
              </div>
              
              {/* Form Content */}
              <div className="p-6">
                {formStatus.submitted ? (
                  <div className="text-center py-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaCheck className="text-green-600 text-2xl" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h4>
                    <p className="text-gray-600">{formStatus.message}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {formStatus.error && (
                      <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                        {formStatus.message}
                      </div>
                    )}
                    
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                            Company
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          How can CloudDigify help you? <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="4"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          required
                        ></textarea>
                      </div>
                      
                      <input
                        type="hidden"
                        name="service"
                        value={formData.service}
                      />
                      
                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center hover:from-indigo-700 hover:to-blue-800 transition-all shadow-md"
                        >
                          <FaPaperPlane className="mr-2" />
                          <span>Submit Request</span>
                        </button>
                      </div>
                      
                      <p className="text-xs text-gray-500 text-center mt-4">
                        By submitting this form, you agree to CloudDigify's privacy policy and terms of service.
                      </p>
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