import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const QuickContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
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
    setFormStatus({ submitting: true, success: false, error: null });
    
    try {
      // Send data to our API endpoint
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          formType: 'quick-contact' // Specify this is quick contact form
        })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }
      
      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      setFormStatus({
        submitting: false,
        success: true,
        error: null
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, success: false }));
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        submitting: false,
        success: false,
        error: error.message || 'Failed to submit form. Please try again.'
      });
    }
  };

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

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our team is ready to answer your questions and help you with your cloud journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-gray-600 mb-8">
                If you'd like to talk to our consulting team, contact us via this form and we'll get back to you shortly.
              </p>
              
              <div className="space-y-6">
                <motion.div 
                  variants={itemVariants}
                  className="flex items-start space-x-4"
                >
                  <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                    <FaEnvelope className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email us</h4>
                    <p className="text-gray-600">info@clouddigify.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  className="flex items-start space-x-4"
                >
                  <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                    <FaPhone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Call us</h4>
                    <p className="text-gray-600">+1 800 123 4567</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  className="flex items-start space-x-4"
                >
                  <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                    <FaMapMarkerAlt className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Visit us</h4>
                    <p className="text-gray-600">
                      10432 Innovation Drive, Suite 300<br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6">Request a Callback</h3>
              
              {formStatus.success && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 bg-green-50 text-green-700 p-4 rounded-lg flex items-center"
                >
                  <FaCheckCircle className="mr-2" />
                  <span>Thank you for your message! We'll get back to you shortly.</span>
                </motion.div>
              )}
              
              {formStatus.error && (
                <div className="mb-6 bg-red-50 text-red-700 p-4 rounded-lg">
                  {formStatus.error}
                </div>
              )}
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    rows="4"
                  ></textarea>
                </div>
                
                <div>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    disabled={formStatus.submitting}
                    className={`w-full py-3 px-6 flex items-center justify-center rounded-lg text-white font-medium ${formStatus.submitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} transition-colors shadow-md`}
                  >
                    {formStatus.submitting ? 'Sending...' : (
                      <>
                        <FaPaperPlane className="mr-2" /> 
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default QuickContact; 