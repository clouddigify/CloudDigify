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
              className="w-[92%] sm:w-[380px] max-w-[400px] bg-white rounded-2xl shadow-lg overflow-hidden relative max-h-[95vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white bg-blue-500 hover:bg-blue-600 rounded-full p-2"
              >
                <FaTimes />
              </button>

              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-4 sm:p-5 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-10 h-10 rounded-full bg-white bg-opacity-20 mx-auto mb-3 flex items-center justify-center"
                >
                  <FaPaperPlane className="text-white text-lg" />
                </motion.div>
                <h2 className="text-lg font-bold">Request Consultation</h2>
                <p className="text-xs mt-1">{serviceName ? `Tell us about your ${serviceName} needs` : 'Tell us about your project needs'}</p>
              </div>

              {/* Form */}
              <div className="p-4 sm:p-5">
                {formStatus.submitted ? (
                  <div className="text-center py-8">
                    <div className="flex justify-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <FaCheck className="text-blue-600 text-xl" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Thank You!</h3>
                    <p className="text-gray-600 text-sm">{formStatus.message}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {formStatus.error && (
                      <div className="bg-red-100 text-red-700 p-2 rounded-md text-xs">
                        {formStatus.message}
                      </div>
                    )}
                    <div>
                      <label className="text-xs font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
                      <div className="relative mt-1">
                        <FaUser className="absolute left-3 top-2.5 text-blue-400 text-sm" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-10 pr-3 py-1.5 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
                      <div className="relative mt-1">
                        <FaEnvelope className="absolute left-3 top-2.5 text-blue-400 text-sm" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-10 pr-3 py-1.5 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <div className="flex-1">
                        <label className="text-xs font-medium text-gray-700">Company</label>
                        <div className="relative mt-1">
                          <FaBuilding className="absolute left-3 top-2.5 text-blue-400 text-sm" />
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-1.5 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
                            placeholder="Your company"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <label className="text-xs font-medium text-gray-700">Phone</label>
                        <div className="relative mt-1">
                          <FaPhone className="absolute left-3 top-2.5 text-blue-400 text-sm" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-1.5 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
                            placeholder="(123) 456-7890"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-gray-700">Message <span className="text-red-500">*</span></label>
                      <div className="relative mt-1">
                        <FaCommentAlt className="absolute left-3 top-2.5 text-blue-400 text-sm" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="2"
                          className="w-full pl-10 pr-3 py-1.5 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
                          placeholder="Describe your project or requirements"
                          required
                        ></textarea>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 text-sm rounded-full transition-all"
                    >
                      Submit Request
                    </button>
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
