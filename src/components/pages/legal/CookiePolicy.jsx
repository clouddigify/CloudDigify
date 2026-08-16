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
  FaExclamationTriangle,
  FaEnvelope,
  FaHistory,
  FaTable
} from 'react-icons/fa';
import SEO from '../../common/SEO';
import { resetAnalyticsConsent } from '../../../utils/analytics';

const CookiePolicy = () => {
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
    <>
      <SEO
        title="Cookie Policy | CloudDigify"
        description="Read CloudDigify's cookie policy to learn how we use cookies and similar technologies on our website."
        canonicalUrl="https://clouddigify.com/cookies"
        keywords={['cookie policy', 'cookies', 'privacy', 'CloudDigify']}
      />
      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center p-3 bg-orange-100 rounded-full mb-4">
              <FaCookie className="h-8 w-8 text-orange-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookies Policy</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Last Updated: April 27, 2025
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-sm overflow-hidden mb-8"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 bg-orange-100 p-2 rounded-full mr-4">
                  <FaInfoCircle className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                  <div className="prose max-w-none text-gray-600">
                    <p>This Cookies Policy explains how CloudDigify LLP ("CloudDigify", "we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website.</p>
                    <p>It explains what these technologies are and why we use them, as well as your rights to control our use of them.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* What Are Cookies */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-sm overflow-hidden mb-8"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 bg-orange-100 p-2 rounded-full mr-4">
                  <FaQuestionCircle className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
                  <div className="prose max-w-none text-gray-600">
                    <p>Cookies are small text files stored on your device when you visit a website.</p>
                    <p>They help websites recognize your device, store preferences, and enhance your browsing experience.</p>
                    <p>Cookies can be:</p>
                    <ul className="list-disc pl-5 mb-4">
                      <li>Session Cookies: Deleted when you close your browser.</li>
                      <li>Persistent Cookies: Remain stored until deleted manually or automatically.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* How We Use Cookies */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-sm overflow-hidden mb-8"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 bg-orange-100 p-2 rounded-full mr-4">
                  <FaCog className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
                  <div className="prose max-w-none text-gray-600">
                    <p>We use two categories of cookies:</p>
                    <ul className="list-disc pl-5 mb-4">
                      <li><strong>Necessary:</strong> required for website functionality (e.g., form submissions, navigation). Always active.</li>
                      <li><strong>Analytics (optional):</strong> Google Analytics / Google Tag Manager, used to understand how visitors use our site. Analytics load <strong>only after you accept</strong> them in the cookie banner. If you reject, analytics stay disabled and the website works normally.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Types of Cookies We Use */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-sm overflow-hidden mb-8"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 bg-orange-100 p-2 rounded-full mr-4">
                  <FaTable className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
                  <div className="prose max-w-none text-gray-600">
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white border border-gray-200 my-4">
                        <thead>
                          <tr>
                            <th className="text-left py-3 px-4 border-b border-gray-200 bg-gray-50 font-semibold">Type of Cookie</th>
                            <th className="text-left py-3 px-4 border-b border-gray-200 bg-gray-50 font-semibold">Purpose</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-3 px-4 border-b border-gray-200">Essential Cookies</td>
                            <td className="py-3 px-4 border-b border-gray-200">Necessary for website functionality (e.g., form submissions, navigation).</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border-b border-gray-200">Analytics Cookies</td>
                            <td className="py-3 px-4 border-b border-gray-200">Help us understand how users interact with the website to improve user experience.</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border-b border-gray-200">Performance Cookies</td>
                            <td className="py-3 px-4 border-b border-gray-200">Enhance the speed and responsiveness of the site.</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border-b border-gray-200">Preference Cookies</td>
                            <td className="py-3 px-4 border-b border-gray-200">Remember your settings (e.g., language, location preferences).</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border-b border-gray-200">Marketing Cookies (if used)</td>
                            <td className="py-3 px-4 border-b border-gray-200">Deliver personalized ads based on your behavior (future planned use).</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Third-Party Cookies */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-sm overflow-hidden mb-8"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 bg-orange-100 p-2 rounded-full mr-4">
                  <FaUserCog className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
                  <div className="prose max-w-none text-gray-600">
                    <p>Some cookies may be set by third parties such as:</p>
                    <ul className="list-disc pl-5 mb-4">
                      <li>Google Analytics</li>
                      <li>Future service providers (e.g., marketing or CRM tools)</li>
                    </ul>
                    <p>We do not control these cookies.</p>
                    <p>You should review the respective third-party privacy policies for more information.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Managing Cookies */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-sm overflow-hidden mb-8"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 bg-orange-100 p-2 rounded-full mr-4">
                  <FaToggleOn className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h2>
                  <div className="prose max-w-none text-gray-600">
                    <p>You choose whether optional analytics cookies are used:</p>
                    <ul className="list-disc pl-5 mb-4">
                      <li>On your first visit, the cookie banner offers <strong>Accept analytics</strong> and <strong>Reject analytics</strong>.</li>
                      <li>If you reject, analytics are not loaded and remain disabled on future visits.</li>
                      <li>If you accept, analytics load and your choice is remembered.</li>
                      <li>You can change your choice at any time using the button below — the banner will reappear on your next page view.</li>
                    </ul>
                    <button
                      onClick={() => {
                        resetAnalyticsConsent();
                        window.location.reload();
                      }}
                      className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-5 rounded-md text-sm font-medium"
                    >
                      Change my analytics choice
                    </button>
                    <p className="mt-4">You can also manage or delete cookies through your browser settings. Disabling necessary cookies may impact website functionality.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Changes to This Cookies Policy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-sm overflow-hidden mb-8"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 bg-orange-100 p-2 rounded-full mr-4">
                  <FaHistory className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Cookies Policy</h2>
                  <div className="prose max-w-none text-gray-600">
                    <p>We may update this Cookies Policy from time to time.</p>
                    <p>Updates will be posted on this page with an updated "Last Updated" date.</p>
                    <p>Last Updated: April 27, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Us */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-sm overflow-hidden mb-8"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 bg-orange-100 p-2 rounded-full mr-4">
                  <FaEnvelope className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                  <div className="prose max-w-none text-gray-600">
                    <p>If you have questions or concerns regarding this Cookies Policy, please contact us:</p>
                    <p>CloudDigify LLP</p>
                    <p>Gaur World SmartStreet, AFOF 54, Plot C, 01, Sector 16B Rd, Greater Noida West, Uttar Pradesh 201301</p>
                    <p>Phone: +91 7011112386</p>
                    <p>Email: info@clouddigify.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CookiePolicy; 