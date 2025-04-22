import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaComments } from 'react-icons/fa';
import PageTemplate from '../templates/PageTemplate';

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
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          formType: 'quick-contact'
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
        message: ''
      });
      
      setFormStatus({
        submitting: false,
        success: true,
        error: null
      });
      
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

  const ContactForm = () => (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h3 className="text-2xl font-bold mb-6">Request a Callback</h3>
      
      {formStatus.success && (
        <div className="mb-6 bg-green-50 text-green-700 p-4 rounded-lg flex items-center">
          <FaCheckCircle className="mr-2" />
          <span>Thank you for your message! We'll get back to you shortly.</span>
        </div>
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
          <button
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
          </button>
        </div>
      </form>
    </div>
  );

  const pageInfo = {
    title: "Contact Us",
    description: "Get in touch with our team for any inquiries about our cloud services and solutions.",
    icon: <FaComments />,
    heroBackground: "from-blue-600 via-indigo-600 to-blue-800",

    // Default text configurations
    defaultCtaText: "Schedule a Call",
    defaultOverviewTitle: "Get in Touch",
    defaultBenefitsTitle: "Why Contact Us",
    defaultSidebarTitle: "Contact Information",
    defaultFeaturesTitle: "How We Can Help",
    defaultCtaDescription: "Ready to start your cloud journey? Let's talk!",

    // Overview section
    overviewTitle: "Get in Touch",
    overviewDescription1: "Our team is ready to answer your questions and help you with your cloud journey.",
    overviewDescription2: "Whether you need technical support, want to discuss a project, or learn more about our services, we're here to help.",

    // Benefits section
    benefitsTitle: "Why Contact Us",
    benefits: [
      "24/7 Technical Support - Always available when you need us",
      "Expert Consultation - Get advice from cloud specialists",
      "Quick Response Time - We respond within 24 hours",
      "Custom Solutions - Tailored to your specific needs",
      "Free Initial Consultation - No commitment required",
      "Multiple Communication Channels - Choose what works best for you"
    ],

    // Sidebar content
    sidebarTitle: "Contact Information",
    approachPoints: [
      "Email: info@clouddigify.com",
      "Phone: +1 800 123 4567",
      "Address: 10432 Innovation Drive",
      "San Francisco, CA 94103",
      "Hours: Mon-Fri 9AM-6PM PST",
      "Emergency Support: 24/7"
    ],

    // Features section
    featuresTitle: "How We Can Help",
    featuresDescription: "Our team provides support across various areas",
    features: [
      {
        title: "Technical Support",
        description: "Get help with technical issues and implementation",
        icon: <FaCheckCircle />,
        link: "#technical-support"
      },
      {
        title: "Sales Inquiries",
        description: "Learn more about our services and pricing",
        icon: <FaCheckCircle />,
        link: "#sales"
      },
      {
        title: "Partnership Opportunities",
        description: "Explore collaboration possibilities",
        icon: <FaCheckCircle />,
        link: "#partnerships"
      },
      {
        title: "Career Information",
        description: "Join our growing team",
        icon: <FaCheckCircle />,
        link: "#careers"
      }
    ],

    // Additional sections
    additionalSections: [
      {
        content: (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-gray-600 mb-8">
                If you'd like to talk to our consulting team, contact us via this form and we'll get back to you shortly.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                    <FaEnvelope className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email us</h4>
                    <p className="text-gray-600">info@clouddigify.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                    <FaPhone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Call us</h4>
                    <p className="text-gray-600">+1 800 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
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
                </div>
              </div>
            </div>
            
            <ContactForm />
          </div>
        )
      }
    ],

    // Section visibility controls
    showCta: true,
    showBenefits: true,
    showSidebar: true,
    showFeatures: true,
    showFeaturesDescription: true
  };

  return <PageTemplate pageInfo={pageInfo} pageType="content" />;
};

export default QuickContact; 