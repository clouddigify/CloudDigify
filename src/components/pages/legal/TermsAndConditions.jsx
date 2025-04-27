import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGavel, FaUserShield, FaFileContract, FaLink, 
  FaPencilAlt, FaExclamationTriangle, FaBan, 
  FaShieldAlt, FaHistory, FaGlobe, FaUserCog, FaBalanceScale,
  FaBuilding, FaEnvelope, FaHandshake
} from 'react-icons/fa';

const TermsAndConditions = () => {
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
    <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full mb-4">
            <FaGavel className="h-8 w-8 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
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
              <div className="flex-shrink-0 bg-indigo-100 p-2 rounded-full mr-4">
                <FaBuilding className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <div className="prose max-w-none text-gray-600">
                  <p>Welcome to CloudDigify LLP ("CloudDigify", "we", "us", or "our").</p>
                  <p>These Terms and Conditions ("Terms") govern your access to and use of our website and services.</p>
                  <p>By accessing or using our website, you agree to be bound by these Terms.</p>
                  <p>If you do not agree, please do not use our website.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Use of Website */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-xl shadow-sm overflow-hidden mb-8"
        >
          <div className="p-6 sm:p-8">
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 bg-indigo-100 p-2 rounded-full mr-4">
                <FaUserCog className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of Website</h2>
                <div className="prose max-w-none text-gray-600">
                  <p>You agree to use the website:</p>
                  <ul className="list-disc pl-5 mb-4">
                    <li>Only for lawful purposes.</li>
                    <li>In a way that does not infringe the rights of others.</li>
                    <li>Without engaging in activities that may harm CloudDigify LLP, its users, or its partners.</li>
                  </ul>
                  <p>We reserve the right to restrict or terminate your access if we believe you are violating these Terms.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Intellectual Property */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-xl shadow-sm overflow-hidden mb-8"
        >
          <div className="p-6 sm:p-8">
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 bg-indigo-100 p-2 rounded-full mr-4">
                <FaFileContract className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
                <div className="prose max-w-none text-gray-600">
                  <p>All content on this website, including but not limited to text, graphics, logos, images, icons, software, and trademarks, are owned by CloudDigify LLP or licensed to us.</p>
                  <p>You may not copy, reproduce, republish, download, distribute, or otherwise exploit any content without our prior written consent.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Third-Party Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-xl shadow-sm overflow-hidden mb-8"
        >
          <div className="p-6 sm:p-8">
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 bg-indigo-100 p-2 rounded-full mr-4">
                <FaLink className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
                <div className="prose max-w-none text-gray-600">
                  <p>Our website may contain links to third-party websites or services.</p>
                  <p>CloudDigify LLP is not responsible for the content, policies, or practices of any third-party websites.</p>
                  <p>Accessing third-party sites is at your own risk.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* User Submissions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-xl shadow-sm overflow-hidden mb-8"
        >
          <div className="p-6 sm:p-8">
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 bg-indigo-100 p-2 rounded-full mr-4">
                <FaPencilAlt className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">User Submissions</h2>
                <div className="prose max-w-none text-gray-600">
                  <p>By submitting any content, inquiries, or feedback through our website:</p>
                  <ul className="list-disc pl-5 mb-4">
                    <li>You grant us the right to use, reproduce, and distribute that content for our business purposes.</li>
                    <li>You confirm that the information you submit is accurate, lawful, and does not infringe any third-party rights.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer of Warranties */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-xl shadow-sm overflow-hidden mb-8"
        >
          <div className="p-6 sm:p-8">
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 bg-indigo-100 p-2 rounded-full mr-4">
                <FaBan className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer of Warranties</h2>
                <div className="prose max-w-none text-gray-600">
                  <p>Our website and its contents are provided "as is" without warranties of any kind.</p>
                  <p>We do not guarantee that the website will always be available, secure, or error-free.</p>
                  <p>Use of the website is at your own risk.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Limitation of Liability */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-xl shadow-sm overflow-hidden mb-8"
        >
          <div className="p-6 sm:p-8">
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 bg-indigo-100 p-2 rounded-full mr-4">
                <FaExclamationTriangle className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <div className="prose max-w-none text-gray-600">
                  <p>To the fullest extent permitted by applicable law, CloudDigify LLP shall not be liable for:</p>
                  <ul className="list-disc pl-5 mb-4">
                    <li>Any indirect, incidental, special, consequential, or punitive damages.</li>
                    <li>Any loss of profits, revenues, or data.</li>
                    <li>Any damages resulting from your use of or inability to use our website or services.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Indemnity */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-xl shadow-sm overflow-hidden mb-8"
        >
          <div className="p-6 sm:p-8">
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 bg-indigo-100 p-2 rounded-full mr-4">
                <FaShieldAlt className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnity</h2>
                <div className="prose max-w-none text-gray-600">
                  <p>You agree to indemnify, defend, and hold harmless CloudDigify LLP, its affiliates, partners, and employees from any claims, liabilities, damages, and expenses arising from your use of the website or your breach of these Terms.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Changes to Terms */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-xl shadow-sm overflow-hidden mb-8"
        >
          <div className="p-6 sm:p-8">
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 bg-indigo-100 p-2 rounded-full mr-4">
                <FaHistory className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                <div className="prose max-w-none text-gray-600">
                  <p>CloudDigify LLP reserves the right to modify these Terms at any time.</p>
                  <p>Changes will be posted on this page with an updated "Last Updated" date.</p>
                  <p>Your continued use of the website after changes are posted constitutes acceptance of those changes.</p>
                  <p>Last Updated: April 27, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Governing Law */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-xl shadow-sm overflow-hidden mb-8"
        >
          <div className="p-6 sm:p-8">
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 bg-indigo-100 p-2 rounded-full mr-4">
                <FaBalanceScale className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
                <div className="prose max-w-none text-gray-600">
                  <p>These Terms are governed by the laws of India.</p>
                  <p>Any disputes will be subject to the exclusive jurisdiction of the courts located in Uttar Pradesh, India.</p>
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
              <div className="flex-shrink-0 bg-indigo-100 p-2 rounded-full mr-4">
                <FaEnvelope className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <div className="prose max-w-none text-gray-600">
                  <p>If you have any questions or concerns about these Terms, you may contact us at:</p>
                  <p>CloudDigify LLP</p>
                  <p>Email: info@clouddigify.com</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsAndConditions; 