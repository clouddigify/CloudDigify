import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCookie, 
  FaInfoCircle, 
  FaCog, 
  FaShieldAlt, 
  FaUserCog,
  FaToggleOn,
  FaQuestionCircle,
  FaExclamationTriangle
} from 'react-icons/fa';

const CookiePolicy = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

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

  const sections = [
    {
      id: 'what-are-cookies',
      title: '1. What Are Cookies?',
      icon: <FaCookie className="h-8 w-8 text-orange-600" />,
      content: (
        <>
          <p className="mb-4">
            Cookies are small text files that are placed on your device when you visit our website. 
            They serve various purposes and help improve your browsing experience by:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Remembering your preferences and settings</li>
            <li>Keeping you signed in to secure areas</li>
            <li>Understanding how you use our website</li>
            <li>Improving website performance and functionality</li>
          </ul>
        </>
      )
    },
    {
      id: 'types-of-cookies',
      title: '2. Types of Cookies We Use',
      icon: <FaInfoCircle className="h-8 w-8 text-orange-600" />,
      content: (
        <>
          <p className="mb-4">We use the following types of cookies:</p>
          <div className="space-y-4">
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">Essential Cookies</h4>
              <p className="text-gray-700">Required for the website to function properly. These cannot be disabled.</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">Functional Cookies</h4>
              <p className="text-gray-700">Remember your preferences and enhance your experience.</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">Analytics Cookies</h4>
              <p className="text-gray-700">Help us understand how visitors interact with our website.</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">Marketing Cookies</h4>
              <p className="text-gray-700">Track your activity across websites to deliver personalized advertising.</p>
            </div>
          </div>
        </>
      )
    },
    {
      id: 'cookie-management',
      title: '3. Managing Your Cookie Preferences',
      icon: <FaCog className="h-8 w-8 text-orange-600" />,
      content: (
        <>
          <p className="mb-4">
            You can control and manage cookies in various ways:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Through your browser settings</li>
            <li>Using our cookie consent manager</li>
            <li>Via third-party opt-out tools</li>
          </ul>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">Browser Settings</h4>
            <p>
              Most web browsers allow you to control cookies through their settings preferences. 
              However, limiting cookies may impact your experience using our website.
            </p>
          </div>
        </>
      )
    },
    {
      id: 'third-party-cookies',
      title: '4. Third-Party Cookies',
      icon: <FaUserCog className="h-8 w-8 text-orange-600" />,
      content: (
        <>
          <p className="mb-4">
            We use third-party services that may set cookies on your device. These include:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Google Analytics for website analytics</li>
            <li>Social media plugins for sharing content</li>
            <li>Payment processors for secure transactions</li>
            <li>Marketing tools for personalized content</li>
          </ul>
          <p>
            These third parties have their own privacy and cookie policies which we encourage you to review.
          </p>
        </>
      )
    },
    {
      id: 'cookie-security',
      title: '5. Cookie Security',
      icon: <FaShieldAlt className="h-8 w-8 text-orange-600" />,
      content: (
        <p>
          We implement appropriate security measures to protect the cookies we use from unauthorized access 
          or misuse. However, please note that no method of transmission over the Internet or electronic 
          storage is 100% secure.
        </p>
      )
    },
    {
      id: 'cookie-consent',
      title: '6. Your Consent',
      icon: <FaToggleOn className="h-8 w-8 text-orange-600" />,
      content: (
        <>
          <p className="mb-4">
            When you first visit our website, we ask for your consent to use cookies. You can:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Accept all cookies</li>
            <li>Reject non-essential cookies</li>
            <li>Customize your cookie preferences</li>
          </ul>
          <p>
            You can change your preferences at any time through our cookie settings.
          </p>
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Understanding how and why we use cookies to improve your experience
            </p>
            <p className="mt-4 text-orange-200">
              Last Updated: {currentDate}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {sections.map((section) => (
            <motion.div
              key={section.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-center mb-6">
                  {section.icon}
                  <h2 className="text-2xl font-bold text-gray-900 ml-4">
                    {section.title}
                  </h2>
                </div>
                <div className="prose max-w-none text-gray-600">
                  {section.content}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Information */}
        <motion.div
          variants={itemVariants}
          className="mt-12 bg-orange-50 rounded-xl p-6 sm:p-8"
        >
          <div className="flex items-center mb-4">
            <FaQuestionCircle className="h-6 w-6 text-orange-600" />
            <h3 className="text-xl font-semibold text-gray-900 ml-3">
              Questions About Our Cookie Policy?
            </h3>
          </div>
          <p className="text-gray-600 mb-6">
            If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
          </p>
          <div className="bg-white rounded-lg p-4">
            <p className="text-gray-800">Email: privacy@clouddigify.com</p>
            <p className="text-gray-800">Phone: +1 (800) 555-1234</p>
          </div>
        </motion.div>

        {/* Warning Notice */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex items-start p-4 bg-yellow-50 rounded-lg"
        >
          <FaExclamationTriangle className="h-6 w-6 text-yellow-600 mt-1" />
          <p className="ml-3 text-sm text-yellow-700">
            This Cookie Policy is part of our Privacy Policy. By using our website, you consent to the use of cookies 
            as described in this policy. Please note that refusing certain cookies may impact your ability to use some 
            features of our website.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicy; 