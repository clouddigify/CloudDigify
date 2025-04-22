import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaShieldAlt, FaUserCircle, FaCookieBite, FaGlobeAmericas, FaLock, 
  FaUserCog, FaChild, FaHistory, FaEnvelope, FaDatabase, FaExchangeAlt,
  FaRegEye, FaUserShield, FaQuestionCircle
} from 'react-icons/fa';

const PrivacyPolicy = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
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

  const sections = [
    {
      id: 'information-collection',
      title: '1. Information We Collect',
      icon: <FaUserShield className="h-8 w-8 text-blue-600" />,
      content: (
        <>
          <p className="mb-4">
            We collect several types of information from and about users of our website, including:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Personal data: name, email address, phone number, company information, and other contact details you provide when registering, subscribing to services, or contacting us</li>
            <li>Usage data: information about how you use our website, services, and products</li>
            <li>Technical data: IP addresses, browser types, device information, operating systems, and other technology on the devices you use to access our website</li>
            <li>Marketing preferences: your preferences for receiving marketing communications from us</li>
          </ul>
          <p>
            We collect this information through direct interactions, automated technologies, and third parties.
          </p>
        </>
      )
    },
    {
      id: 'information-use',
      title: '2. How We Use Your Information',
      icon: <FaDatabase className="h-8 w-8 text-blue-600" />,
      content: (
        <>
          <p className="mb-4">
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Providing, maintaining, and improving our services</li>
            <li>Processing transactions and fulfilling orders</li>
            <li>Sending administrative information, updates, and service announcements</li>
            <li>Providing customer support and responding to inquiries</li>
            <li>Sending marketing and promotional materials (with your consent)</li>
            <li>Analyzing usage patterns to enhance user experience</li>
            <li>Detecting, preventing, and addressing technical issues or fraud</li>
          </ul>
          <p>
            We process your information based on your consent, for the performance of contracts, for our legitimate business interests, and to comply with legal obligations.
          </p>
        </>
      )
    },
    {
      id: 'information-sharing',
      title: '3. Information Sharing and Disclosure',
      icon: <FaExchangeAlt className="h-8 w-8 text-blue-600" />,
      content: (
        <>
          <p className="mb-4">
            We may share your personal information with:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Service providers who perform services on our behalf</li>
            <li>Business partners with whom we jointly offer products or services</li>
            <li>Affiliated companies within our corporate family</li>
            <li>Legal authorities when required by law or to protect our rights</li>
          </ul>
          <p className="mb-4">
            We require all third parties to respect the security of your personal data and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal data for their own purposes.
          </p>
          <p>
            We do not sell your personal information to third parties.
          </p>
        </>
      )
    },
    {
      id: 'cookies',
      title: '4. Cookies and Tracking Technologies',
      icon: <FaCookieBite className="h-8 w-8 text-blue-600" />,
      content: (
        <>
          <p className="mb-4">
            We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with small amounts of data that may include an anonymous unique identifier.
          </p>
          <p className="mb-4">
            We use the following types of cookies:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h4 className="font-bold text-gray-800 mb-2">Essential Cookies</h4>
              <p className="text-gray-700">Necessary for the website to function properly</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h4 className="font-bold text-gray-800 mb-2">Analytical Cookies</h4>
              <p className="text-gray-700">Help us improve our website by collecting usage information</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h4 className="font-bold text-gray-800 mb-2">Functionality Cookies</h4>
              <p className="text-gray-700">Enable us to personalize content and remember your preferences</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h4 className="font-bold text-gray-800 mb-2">Targeting Cookies</h4>
              <p className="text-gray-700">Used to deliver relevant advertisements based on your interests</p>
            </div>
          </div>
          <p className="mt-4">
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website. For more information, please see our <a href="/cookies" className="text-blue-600 hover:underline">Cookie Policy</a>.
          </p>
        </>
      )
    },
    {
      id: 'data-security',
      title: '5. Data Security',
      icon: <FaLock className="h-8 w-8 text-blue-600" />,
      content: (
        <>
          <p className="mb-4">
            We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, accessed, altered, or disclosed in an unauthorized way.
          </p>
          <p className="mb-4">
            Our security measures include:
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-5 rounded-lg shadow-sm">
            <ul className="list-none space-y-3">
              <li className="flex items-center">
                <span className="bg-blue-100 p-2 rounded-full mr-3"><FaShieldAlt className="text-blue-600" /></span>
                <span>Encryption of sensitive data</span>
              </li>
              <li className="flex items-center">
                <span className="bg-blue-100 p-2 rounded-full mr-3"><FaLock className="text-blue-600" /></span>
                <span>Secure networks and servers</span>
              </li>
              <li className="flex items-center">
                <span className="bg-blue-100 p-2 rounded-full mr-3"><FaRegEye className="text-blue-600" /></span>
                <span>Regular security assessments</span>
              </li>
              <li className="flex items-center">
                <span className="bg-blue-100 p-2 rounded-full mr-3"><FaUserCog className="text-blue-600" /></span>
                <span>Access controls and authentication procedures</span>
              </li>
              <li className="flex items-center">
                <span className="bg-blue-100 p-2 rounded-full mr-3"><FaUserShield className="text-blue-600" /></span>
                <span>Employee training on data protection</span>
              </li>
            </ul>
          </div>
          <p className="mt-4">
            Despite our best efforts, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security of your data.
          </p>
        </>
      )
    },
    {
      id: 'international-transfers',
      title: '6. International Data Transfers',
      icon: <FaGlobeAmericas className="h-8 w-8 text-blue-600" />,
      content: (
        <p>
          We may transfer your personal data to countries outside of your country of residence, which may have different data protection laws. In such cases, we ensure appropriate safeguards are in place to protect your information, including data transfer agreements incorporating standard data protection clauses approved by relevant regulatory authorities, or other suitable safeguards as required by applicable laws.
        </p>
      )
    },
    {
      id: 'your-rights',
      title: '7. Your Privacy Rights',
      icon: <FaUserCog className="h-8 w-8 text-blue-600" />,
      content: (
        <>
          <p className="mb-4">
            Depending on your location, you may have the following rights regarding your personal data:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            <div className="bg-white shadow-sm rounded-lg p-3 hover:shadow-md transition-shadow duration-300 border-l-2 border-blue-500">
              <h5 className="font-semibold">Right to Access</h5>
              <p className="text-sm text-gray-600">Request access to your personal data</p>
            </div>
            <div className="bg-white shadow-sm rounded-lg p-3 hover:shadow-md transition-shadow duration-300 border-l-2 border-blue-500">
              <h5 className="font-semibold">Right to Rectification</h5>
              <p className="text-sm text-gray-600">Request correction of inaccurate personal data</p>
            </div>
            <div className="bg-white shadow-sm rounded-lg p-3 hover:shadow-md transition-shadow duration-300 border-l-2 border-blue-500">
              <h5 className="font-semibold">Right to Erasure</h5>
              <p className="text-sm text-gray-600">Request deletion of your personal data</p>
            </div>
            <div className="bg-white shadow-sm rounded-lg p-3 hover:shadow-md transition-shadow duration-300 border-l-2 border-blue-500">
              <h5 className="font-semibold">Right to Restriction</h5>
              <p className="text-sm text-gray-600">Request restriction of processing your data</p>
            </div>
            <div className="bg-white shadow-sm rounded-lg p-3 hover:shadow-md transition-shadow duration-300 border-l-2 border-blue-500">
              <h5 className="font-semibold">Right to Portability</h5>
              <p className="text-sm text-gray-600">Request the transfer of your personal data</p>
            </div>
            <div className="bg-white shadow-sm rounded-lg p-3 hover:shadow-md transition-shadow duration-300 border-l-2 border-blue-500">
              <h5 className="font-semibold">Right to Object</h5>
              <p className="text-sm text-gray-600">Object to processing of your personal data</p>
            </div>
          </div>
          <p>
            To exercise any of these rights, please contact us using the information provided in the "Contact Us" section. We may need to verify your identity before fulfilling your request.
          </p>
        </>
      )
    },
    {
      id: 'children-privacy',
      title: '8. Children\'s Privacy',
      icon: <FaChild className="h-8 w-8 text-blue-600" />,
      content: (
        <p>
          Our website is not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us. If we become aware that we have collected personal information from children without verification of parental consent, we take steps to remove that information from our servers.
        </p>
      )
    },
    {
      id: 'changes',
      title: '9. Changes to This Privacy Policy',
      icon: <FaHistory className="h-8 w-8 text-blue-600" />,
      content: (
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
        </p>
      )
    },
    {
      id: 'contact',
      title: '10. Contact Us',
      icon: <FaEnvelope className="h-8 w-8 text-blue-600" />,
      content: (
        <div className="bg-blue-50 p-5 rounded-lg">
          <p className="mb-3">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FaEnvelope className="mr-2 text-blue-600" />
              <a href="mailto:privacy@clouddigify.com" className="text-blue-600 hover:underline">privacy@clouddigify.com</a>
            </li>
            <li className="flex items-center">
              <FaQuestionCircle className="mr-2 text-blue-600" />
              <a href="/contact" className="text-blue-600 hover:underline">Contact Form</a>
            </li>
          </ul>
        </div>
      )
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg p-8 mb-10 border-l-4 border-blue-600"
          variants={itemVariants}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
          <div className="flex items-center text-gray-600">
            <FaHistory className="mr-2" />
            <p>Last Updated: {currentDate}</p>
          </div>
        </motion.div>

        {/* Privacy hero */}
        <motion.div
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-10 flex flex-col md:flex-row items-center gap-6 shadow-md"
          variants={itemVariants}
        >
          <div className="text-blue-600 bg-white p-5 rounded-full shadow-sm">
            <FaShieldAlt className="w-16 h-16 md:w-24 md:h-24" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Your Privacy Matters to Us</h2>
            <p className="text-gray-700 leading-relaxed">
              At CloudDigify, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, and protect your personal information when you visit our website or use our services. 
              We're committed to ensuring that your data is secure and handled with care.
            </p>
          </div>
        </motion.div>

        {/* Interactive content navigation */}
        <motion.div 
          variants={itemVariants}
          className="bg-white rounded-lg shadow-md p-6 mb-10"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Navigation</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {sections.map((section) => (
              <a 
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors duration-300 group"
              >
                <div className="mr-3 text-blue-500 group-hover:text-blue-600">
                  {section.icon}
                </div>
                <span className="text-sm text-gray-700 group-hover:text-blue-800">{section.title}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Policy sections */}
        <div className="space-y-6">
          {sections.map((section) => (
            <motion.div
              key={section.id}
              id={section.id}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
            >
              <button 
                onClick={() => toggleSection(section.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-blue-50 transition-colors duration-300"
              >
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-blue-50 rounded-lg">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{section.title}</h3>
                </div>
                <div className={`transform transition-transform duration-300 ${expandedSection === section.id ? 'rotate-180' : ''}`}>
                  <FaChevronDown />
                </div>
              </button>
              
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: expandedSection === section.id ? 'auto' : 0,
                  opacity: expandedSection === section.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 border-t border-gray-100">
                  {section.content}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-4">Have Questions About Your Privacy?</h3>
          <p className="mb-6">
            We're here to help you understand how we protect your information. If you have any questions or concerns,
            please don't hesitate to reach out to our privacy team.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center"
            >
              <FaEnvelope className="mr-2" /> Contact Us
            </a>
            <a 
              href="/terms" 
              className="bg-transparent border border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              View Terms & Conditions
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy; 