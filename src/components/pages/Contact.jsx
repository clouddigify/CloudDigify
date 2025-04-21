import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

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
    
    // Simulate form submission delay
    try {
      // In a real implementation, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
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
      setFormStatus({
        submitting: false,
        submitted: false,
        error: 'An error occurred. Please try again.'
      });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pb-16"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl opacity-90">
              Get in touch with our cloud experts to discuss your project.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-blue-600 mt-1 mr-4">
                      <FaMapMarkerAlt size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Address</h3>
                      <address className="not-italic text-gray-600">
                        123 Cloud Avenue<br />
                        Suite 400<br />
                        San Francisco, CA 94105
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-blue-600 mt-1 mr-4">
                      <FaPhone size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Phone</h3>
                      <p className="text-gray-600">
                        <a href="tel:+18005551234" className="hover:text-blue-600">+1 (800) 555-1234</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-blue-600 mt-1 mr-4">
                      <FaEnvelope size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@clouddigify.com" className="hover:text-blue-600">info@clouddigify.com</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-blue-600 mt-1 mr-4">
                      <FaClock size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                {formStatus.submitted ? (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                    <p>Thank you for your message! We'll get back to you shortly.</p>
                  </div>
                ) : null}
                
                {formStatus.error ? (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    <p>{formStatus.error}</p>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">Full Name*</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">Email Address*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your Phone Number"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-gray-700 mb-2">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">Message*</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                      rows="5"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formStatus.submitting}
                    className={`px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition ${formStatus.submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {formStatus.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
                
                <p className="mt-4 text-sm text-gray-600">
                  * Required fields
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Our Location</h2>
            <div className="h-96 bg-gray-200 rounded-lg">
              {/* In a real implementation, this would be a Google Maps or other map component */}
              <div className="h-full flex items-center justify-center bg-gray-100">
                <p className="text-gray-500">Map will be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact; 