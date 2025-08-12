import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaShieldAlt, FaUserCircle, FaGlobeAmericas, FaLock, 
  FaUserCog, FaChild, FaHistory, FaEnvelope, FaDatabase, FaExchangeAlt,
  FaRegEye, FaUserShield, FaQuestionCircle, FaChevronDown,
  FaCookieBite, FaBuilding, FaInfoCircle
} from 'react-icons/fa';
import SEO from '../../common/SEO';

const PrivacyPolicy = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
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
    <>
      <SEO
        title="Privacy Policy | CloudDigify"
        description="Read CloudDigify's privacy policy to learn how we protect your data and privacy online."
        canonicalUrl="https://clouddigify.com/legal/privacy-policy"
        keywords={['privacy policy', 'data protection', 'CloudDigify', 'privacy']}
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
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
              <FaShieldAlt className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
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
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full mr-4">
                  <FaInfoCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                  <div className="prose max-w-none text-gray-600">
                    <p>Your privacy is important to us.</p>
                    <p>CloudDigify LLP ("CloudDigify", "we", "us", or "our") is committed to protecting your personal information and respecting your privacy throughout your engagement with us.</p>
                    <p>This Privacy Statement explains how we collect, use, disclose, and protect your information when you interact with our website, services, or when you submit inquiries.</p>
                    <p>We comply with applicable privacy laws, including but not limited to the Information Technology Act 2000 (India), GDPR (Europe), CCPA (California), and other relevant global data protection laws.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Scope */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-sm overflow-hidden mb-8"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full mr-4">
                  <FaBuilding className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Scope</h2>
                  <div className="prose max-w-none text-gray-600">
                    <p>This Privacy Statement applies to:</p>
                    <ul className="list-disc pl-5 mb-4">
                      <li>Website visitors,</li>
                      <li>Clients,</li>
                      <li>Prospective clients,</li>
                      <li>Partners and service providers interacting with CloudDigify.</li>
                    </ul>
                    <p>It covers how CloudDigify collects, uses, processes, stores, shares, and secures personal data.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Information We Collect */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-sm overflow-hidden mb-8"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full mr-4">
                  <FaUserShield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                  <div className="prose max-w-none text-gray-600">
                    <p>We may collect and process the following types of information:</p>
                    <ul className="list-disc pl-5 mb-4">
                      <li>Personal Identification Information: Name, Email Address, Phone Number, Company Name</li>
                      <li>Message/Inquiry Details: Content you submit through forms</li>
                      <li>Technical Information: IP address, browser type, operating system (via tools like Google Analytics)</li>
                    </ul>
                    <p>We collect this information when you:</p>
                    <ul className="list-disc pl-5 mb-4">
                      <li>Submit a form through our website</li>
                      <li>Contact us directly via email or other channels</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* How We Use Your Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-sm overflow-hidden mb-8"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full mr-4">
                  <FaDatabase className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                  <div className="prose max-w-none text-gray-600">
                    <p>We use your personal information to:</p>
                    <ul className="list-disc pl-5 mb-4">
                      <li>Respond to inquiries or service requests</li>
                      <li>Communicate regarding our products, services, or updates</li>
                      <li>Improve our website, services, and customer experience</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Data Sharing and Disclosure */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-sm overflow-hidden mb-8"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full mr-4">
                  <FaExchangeAlt className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Sharing and Disclosure</h2>
                  <div className="prose max-w-none text-gray-600">
                    <p>We may share your information with:</p>
                    <ul className="list-disc pl-5 mb-4">
                      <li>Trusted partners such as AWS, Google, Zoho, and others necessary for fulfilling services</li>
                      <li>Service providers who assist in our operations (such as web hosting, email service providers)</li>
                      <li>Legal authorities if required by applicable law</li>
                    </ul>
                    <p>We do not sell your personal information to third parties for their independent marketing purposes.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* International Data Transfers */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-sm overflow-hidden mb-8"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full mr-4">
                  <FaGlobeAmericas className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
                  <div className="prose max-w-none text-gray-600">
                    <p>As a global business, we may transfer your information outside your country of residence.</p>
                    <p>When transferring personal data internationally, we ensure it is protected through appropriate safeguards such as Standard Contractual Clauses or equivalent.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cookies and Tracking Technologies */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-sm overflow-hidden mb-8"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full mr-4">
                  <FaCookieBite className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
                  <div className="prose max-w-none text-gray-600">
                    <p>We may use cookies and similar tracking technologies to improve website functionality and analyze visitor interactions.</p>
                    <p>You may manage cookie preferences through your browser settings.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Data Security */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-sm overflow-hidden mb-8"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full mr-4">
                  <FaLock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                  <div className="prose max-w-none text-gray-600">
                    <p>We implement industry-standard technical and organizational measures to protect your personal data, including:</p>
                    <ul className="list-disc pl-5 mb-4">
                      <li>Secure hosting (Vercel)</li>
                      <li>Access control and authentication</li>
                      <li>Encryption of communication channels</li>
                      <li>Regular monitoring and system updates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Children's Privacy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-sm overflow-hidden mb-8"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full mr-4">
                  <FaChild className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
                  <div className="prose max-w-none text-gray-600">
                    <p>Our services are not intentionally directed to individuals under 18 years of age.</p>
                    <p>We do not knowingly collect personal data from children without appropriate consent.</p>
                    <p>If you believe we have inadvertently collected information of a minor, please contact us to request deletion.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Your Rights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-sm overflow-hidden mb-8"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full mr-4">
                  <FaUserCog className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                  <div className="prose max-w-none text-gray-600">
                    <p>Depending on your jurisdiction, you have rights under applicable privacy laws, including:</p>
                    <ul className="list-disc pl-5 mb-4">
                      <li>Right to access your personal data</li>
                      <li>Right to correct inaccurate data</li>
                      <li>Right to request deletion (Right to be forgotten)</li>
                      <li>Right to withdraw consent at any time</li>
                      <li>Right to data portability</li>
                      <li>Right to lodge a complaint with a data protection authority</li>
                    </ul>
                    <p>To exercise your rights, please contact us (details below).</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Changes to This Privacy Statement */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-sm overflow-hidden mb-8"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full mr-4">
                  <FaHistory className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Statement</h2>
                  <div className="prose max-w-none text-gray-600">
                    <p>We may update this Privacy Statement periodically to reflect changes in our practices or applicable laws.</p>
                    <p>Any changes will be posted on this page with an updated "Last Updated" date.</p>
                    <p>Last Updated: April 27, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-sm overflow-hidden mb-8"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full mr-4">
                  <FaEnvelope className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                  <div className="prose max-w-none text-gray-600">
                    <p>If you have questions, concerns, or requests regarding this Privacy Statement or your personal information, you may contact us:</p>
                    <p>CloudDigify LLP</p>
                    <p>AFOF 54, Plot C, 01, Sector 16B Rd, Greater Noida West, Uttar Pradesh 201301</p>
                    <p>Phone: +91 7011112386</p>
                    <p>Email: info@clouddigify.com</p>
                    <p>(Privacy email to be updated to privacy@clouddigify.com in the future.)</p>
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

export default PrivacyPolicy; 