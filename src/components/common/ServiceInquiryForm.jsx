import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaPaperPlane, FaUser, FaEnvelope, FaBuilding, FaPhone, FaCommentAlt, FaCheck } from 'react-icons/fa';

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      service: serviceName || 'General Inquiry'
    }));
  }, [serviceName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ submitted: false, error: true, message: 'Please fill all required fields.' });
      return;
    }
    setFormStatus({ submitted: true, error: false, message: 'Thank you! We will contact you shortly.' });
    setTimeout(() => {
      onClose();
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        service: serviceName || 'General Inquiry'
      });
      setFormStatus({ submitted: false, error: false, message: '' });
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
          >
            <div
              ref={modalRef}
              className="w-[92%] sm:w-[380px] max-w-[400px] bg-white rounded-2xl shadow-xl overflow-hidden relative max-h-[95vh] border border-gray-100"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white bg-blue-500 hover:bg-blue-600 rounded-full p-2 z-10 shadow-md transition-all duration-200"
                aria-label="Close form"
              >
                <FaTimes />
              </button>

              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-5 sm:p-6 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: 1,
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{
                    duration: 1.2,
                    ease: "easeInOut"
                  }}
                  className="w-12 h-12 rounded-full bg-white bg-opacity-20 backdrop-blur-sm mx-auto mb-3 flex items-center justify-center shadow-lg"
                >
                  <FaPaperPlane className="text-white text-lg" />
                </motion.div>
                <motion.h2 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl font-bold mb-1"
                >
                  Request Consultation
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-blue-100 text-xs"
                >
                  {serviceName ? `Tell us about your ${serviceName} needs` : 'Tell us about your project needs'}
                </motion.p>
              </div>

              {/* Form */}
              <div className="p-5">
                {formStatus.submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex justify-center mb-4"
                    >
                      <div className="bg-blue-100 p-3 rounded-full">
                        <FaCheck className="text-blue-600 text-xl" />
                      </div>
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Thank You!</h3>
                    <p className="text-gray-600 text-sm">{formStatus.message}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {formStatus.error && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-50 text-red-600 p-2.5 rounded-xl text-xs flex items-center"
                      >
                        <FaTimes className="mr-2" />
                        {formStatus.message}
                      </motion.div>
                    )}
                    <div>
                      <label className="text-xs font-semibold text-gray-700 block mb-1.5">Name <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <FaUser className="absolute left-3.5 top-2.5 text-blue-400 text-sm" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:outline-none text-sm shadow-sm transition-all duration-200"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-gray-700 block mb-1.5">Email <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <FaEnvelope className="absolute left-3.5 top-2.5 text-blue-400 text-sm" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:outline-none text-sm shadow-sm transition-all duration-200"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex-1">
                        <label className="text-xs font-semibold text-gray-700 block mb-1.5">Company</label>
                        <div className="relative">
                          <FaBuilding className="absolute left-3.5 top-2.5 text-blue-400 text-sm" />
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:outline-none text-sm shadow-sm transition-all duration-200"
                            placeholder="Your company"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <label className="text-xs font-semibold text-gray-700 block mb-1.5">Phone</label>
                        <div className="relative">
                          <FaPhone className="absolute left-3.5 top-2.5 text-blue-400 text-sm" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:outline-none text-sm shadow-sm transition-all duration-200"
                            placeholder="(123) 456-7890"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-gray-700 block mb-1.5">Message <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <FaCommentAlt className="absolute left-3.5 top-2.5 text-blue-400 text-sm" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="3"
                          className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:outline-none text-sm shadow-sm transition-all duration-200"
                          placeholder="Describe your project or requirements"
                          required
                        ></textarea>
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, boxShadow: "0 8px 15px -5px rgba(59, 130, 246, 0.5)" }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium py-2.5 text-sm rounded-xl transition-all duration-300 shadow-md"
                    >
                      <div className="flex items-center justify-center">
                        <FaPaperPlane className="mr-2" />
                        <span>Submit Request</span>
                      </div>
                    </motion.button>
                    
                    <p className="text-xs text-gray-500 text-center mt-3">
                      By submitting, you agree to our privacy policy
                    </p>
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
