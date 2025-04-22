import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaUserCircle, FaCookieBite, FaGlobeAmericas, FaLock, FaUserCog, FaChild, FaHistory, FaEnvelope } from 'react-icons/fa';

const PrivacyPolicy = () => {
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
      id: 'information-collection',
      title: '1. Information We Collect',
      icon: <FaUserCircle className="h-8 w-8 text-blue-600" />,
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
      icon: <FaLock className="h-8 w-8 text-blue-600" />,
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
      id: 'cookies',
      title: '3. Cookies and Tracking Technologies',
      icon: <FaCookieBite className="h-8 w-8 text-blue-600" />,
      content: (
        <>
          <p className="mb-4">
            We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with small amounts of data that may include an anonymous unique identifier.
          </p>
          <p className="mb-4">
            We use the following types of cookies:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Essential cookies: necessary for the website to function properly</li>
            <li>Analytical/performance cookies: help us improve our website by collecting and reporting information on how you use it</li>
            <li>Functionality cookies: enable us to personalize content and remember your preferences</li>
            <li>Targeting cookies: used to deliver relevant advertisements based on your interests</li>
          </ul>
          <p>
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
          </p>
        </>
      )
    },
    {
      id: 'data-sharing',
      title: '4. Sharing Your Information',
      icon: <FaGlobeAmericas className="h-8 w-8 text-blue-600" />,
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
      id: 'data-security',
      title: '5. Data Security',
      icon: <FaShieldAlt className="h-8 w-8 text-blue-600" />,
      content: (
        <>
          <p className="mb-4">
            We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, accessed, altered, or disclosed in an unauthorized way.
          </p>
          <p className="mb-4">
            Our security measures include:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Encryption of sensitive data</li>
            <li>Secure networks and servers</li>
            <li>Regular security assessments</li>
            <li>Access controls and authentication procedures</li>
            <li>Employee training on data protection</li>
          </ul>
          <p>
            Despite our best efforts, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security of your data.
          </p>
        </>
      )
    },
    {
      id: 'your-rights',
      title: '6. Your Privacy Rights',
      icon: <FaUserCog className="h-8 w-8 text-blue-600" />,
      content: (
        <>
          <p className="mb-4">
            Depending on your location, you may have the following rights regarding your personal data:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Access: Request access to your personal data</li>
            <li>Correction: Request correction of inaccurate personal data</li>
            <li>Erasure: Request deletion of your personal data</li>
            <li>Restriction: Request restriction of processing of your personal data</li>
            <li>Portability: Request the transfer of your personal data</li>
            <li>Objection: Object to processing of your personal data</li>
            <li>Withdraw consent: Withdraw consent where we rely on consent to process your personal data</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us using the information provided in the "Contact Us" section. We may need to verify your identity before fulfilling your request.
          </p>
        </>
      )
    },
    {
      id: 'children-privacy',
      title: '7. Children\'s Privacy',
      icon: <FaChild className="h-8 w-8 text-blue-600" />,
      content: (
        <p>
          Our website is not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us. If we become aware that we have collected personal information from children without verification of parental consent, we take steps to remove that information from our servers.
        </p>
      )
    },
    {
      id: 'changes',
      title: '8. Changes to This Privacy Policy',
      icon: <FaHistory className="h-8 w-8 text-blue-600" />,
      content: (
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
        </p>
      )
    },
    {
      id: 'contact',
      title: '9. Contact Us',
      icon: <FaEnvelope className="h-8 w-8 text-blue-600" />,
      content: (
        <p>
          If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@clouddigify.com" className="text-blue-600 hover:underline">privacy@clouddigify.com</a> or through the contact form on our website.
        </p>
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
          className="bg-blue-50 rounded-lg p-8 mb-10 flex flex-col md:flex-row items-center gap-6"
          variants={itemVariants}
        >
          <div className="text-blue-600">
            <FaShieldAlt className="w-16 h-16 md:w-24 md:h-24" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Privacy Matters</h2>
            <p className="text-gray-700">
              At CloudDigify, we are committed to protecting your privacy and personal data. 
              This Privacy Policy explains how we collect, use, and safeguard your information 
              when you visit our website or use our services.
            </p>
          </div>
        </motion.div>

        {/* Policy sections */}
        <div className="space-y-8">
          {sections.map((section) => (
            <motion.div
              key={section.id}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="mr-4 p-2 bg-blue-50 rounded-lg">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
              </div>
              <div className="prose max-w-none text-gray-700 ml-16">
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div 
          variants={itemVariants}
          className="mt-10 text-center text-gray-600"
        >
          <p>© {new Date().getFullYear()} CloudDigify. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy; 