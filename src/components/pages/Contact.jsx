import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaArrowRight, FaHeadset } from 'react-icons/fa';
import PageTemplate from '../templates/PageTemplate';

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
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          formType: 'contact-page'
        })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }
      
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

  const pageInfo = {
    title: "Contact Us",
    description: "Have questions about our cloud services? Ready to start your digital transformation journey? Our team of experts is here to help you every step of the way.",
    icon: <FaHeadset />,
    heroBackground: "from-blue-600 via-indigo-600 to-blue-800",
    
    // Default text configurations
    defaultCtaText: "Schedule a Consultation",
    defaultOverviewTitle: "Get in Touch",
    defaultBenefitsTitle: "Ways to Connect",
    defaultSidebarTitle: "Business Hours",
    defaultSecondaryCta: "Call Support",
    defaultFeaturesTitle: "Office Locations",
    defaultFeaturesDescription: "Visit our headquarters or regional offices",
    defaultCtaTitle: "Need Immediate Assistance?",
    defaultCtaDescription: "Our support team is available to help with urgent needs.",
    defaultFinalCta: "Call Now",

    // Custom links
    ctaLink: "/schedule",
    secondaryCtaLink: "tel:+18005551234",
    finalCtaLink: "tel:+18005551234",
    
    // Content sections
    overviewTitle: "Contact Information",
    overviewDescription1: "We're here to help with all your cloud computing needs.",
    overviewDescription2: "Reach out through any of our communication channels for expert assistance.",
    
    // Contact methods (using benefits section)
    benefitsTitle: "Ways to Reach Us",
    benefits: [
      "Phone: +1 (800) 555-1234",
      "Email: contact@clouddigify.com",
      "Address: 123 Cloud Avenue, Suite 400, San Francisco, CA 94105",
      "Support Hours: Monday - Friday, 9:00 AM - 6:00 PM PST"
    ],
    
    sidebarTitle: "Business Hours",
    approachPoints: [
      "Monday: 9:00 AM - 6:00 PM PST",
      "Tuesday: 9:00 AM - 6:00 PM PST",
      "Wednesday: 9:00 AM - 6:00 PM PST",
      "Thursday: 9:00 AM - 6:00 PM PST",
      "Friday: 9:00 AM - 6:00 PM PST",
      "Saturday: Closed",
      "Sunday: Closed"
    ],
    
    // Office locations (using features section)
    featuresTitle: "Our Locations",
    featuresDescription: "Visit our offices worldwide",
    features: [
      {
        title: "San Francisco HQ",
        description: "Our main headquarters in the heart of Silicon Valley",
        icon: <FaMapMarkerAlt />,
        features: [
          "123 Cloud Avenue, Suite 400",
          "San Francisco, CA 94105",
          "United States",
          "+1 (800) 555-1234"
        ]
      },
      {
        title: "London Office",
        description: "Our European headquarters",
        icon: <FaMapMarkerAlt />,
        features: [
          "456 Tech Square",
          "London, EC2A 4HJ",
          "United Kingdom",
          "+44 20 7123 4567"
        ]
      }
    ],
    
    // Contact form section
    additionalSections: [
      {
        content: (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
              
              {formStatus.submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6">
                  <p>Thank you for your message! We'll get back to you shortly.</p>
                </div>
              )}
              
              {formStatus.error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
                  <p>{formStatus.error}</p>
                </div>
              )}
              
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
            </div>
          </div>
        )
      },
      {
        content: (
          <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg border border-gray-100">
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
        )
      }
    ],
    
    // CTA section
    ctaTitle: "Need Immediate Assistance?",
    ctaDescription: "Our support team is available 24/7 to help with urgent needs.",
    finalCta: "Call Support Now",
    
    // Section visibility controls
    showCta: true,
    showBenefits: true,
    showSidebar: true,
    showSecondaryCta: true,
    showFeatures: true,
    showFeaturesDescription: true,
    showFinalCta: true
  };

  return <PageTemplate pageInfo={pageInfo} pageType="content" />;
};

export default Contact; 