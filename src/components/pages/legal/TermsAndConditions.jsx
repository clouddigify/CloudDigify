import React from 'react';
import { motion } from 'framer-motion';
import { FaGavel, FaUserShield, FaFileContract, FaUserTie, 
         FaCreditCard, FaExclamationTriangle, FaBan, 
         FaShieldAlt, FaHistory, FaGlobe, FaUserCog, FaStar } from 'react-icons/fa';

const TermsAndConditions = () => {
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
      id: 'acceptance',
      title: '1. Acceptance of Terms',
      icon: <FaGavel className="h-8 w-8 text-indigo-600" />,
      content: (
        <p>
          By accessing and using the CloudDigify website and services (the "Service"), you acknowledge that you have read, 
          understood, and agree to be bound by these Terms and Conditions, as well as our Privacy Policy and Cookie Policy. 
          If you do not agree with any part of these terms, you may not use our Service.
        </p>
      )
    },
    {
      id: 'service-description',
      title: '2. Service Description',
      icon: <FaFileContract className="h-8 w-8 text-indigo-600" />,
      content: (
        <>
          <p className="mb-4">
            CloudDigify provides cloud computing, digital transformation, and IT consulting services. Our offerings include but are not limited to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Cloud migration and infrastructure management</li>
            <li>DevOps implementation and support</li>
            <li>Software development and maintenance</li>
            <li>IT strategy consulting</li>
            <li>Cybersecurity solutions</li>
            <li>Industry-specific digital transformation services</li>
          </ul>
          <p>
            We reserve the right to modify, suspend, or discontinue any part of the Service at any time, with or without notice to you.
          </p>
        </>
      )
    },
    {
      id: 'user-accounts',
      title: '3. User Accounts and Responsibilities',
      icon: <FaUserCog className="h-8 w-8 text-indigo-600" />,
      content: (
        <>
          <p className="mb-4">
            Some parts of our Service may require you to create an account or provide personal information. You are responsible for:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Maintaining the confidentiality of your account credentials</li>
            <li>Restricting access to your account</li>
            <li>Assuming responsibility for all activities that occur under your account</li>
            <li>Notifying us immediately of any unauthorized use of your account</li>
          </ul>
          <p className="mb-4">
            You must provide accurate, current, and complete information during the registration process and keep your account information updated.
          </p>
          <p>
            We reserve the right to terminate accounts, remove or edit content, or cancel orders at our sole discretion if we believe you have violated these Terms.
          </p>
        </>
      )
    },
    {
      id: 'intellectual-property',
      title: '4. Intellectual Property Rights',
      icon: <FaUserTie className="h-8 w-8 text-indigo-600" />,
      content: (
        <>
          <p className="mb-4">
            The Service and its original content, features, and functionality are owned by CloudDigify and are protected by international copyright, 
            trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
          <p className="mb-4">
            Unless explicitly stated, nothing in these Terms shall be construed as conferring any license to intellectual property rights, 
            whether by estoppel, implication, or otherwise. You may not copy, modify, distribute, sell, or lease any part of our Service 
            without prior written consent from CloudDigify.
          </p>
          <p>
            All logos, product names, and company names are trademarks™ or registered® trademarks of their respective holders. 
            Use of them does not imply any affiliation with or endorsement by them.
          </p>
        </>
      )
    },
    {
      id: 'payment-terms',
      title: '5. Payment Terms',
      icon: <FaCreditCard className="h-8 w-8 text-indigo-600" />,
      content: (
        <>
          <p className="mb-4">
            For paid services, you agree to pay all fees in accordance with the pricing and payment terms presented to you. 
            Unless otherwise stated:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>All fees are quoted in the currency specified and are exclusive of applicable taxes</li>
            <li>Payments are non-refundable unless expressly stated in our refund policy</li>
            <li>CloudDigify reserves the right to change pricing with reasonable notice</li>
            <li>For subscription services, you authorize us to charge your payment method on a recurring basis</li>
          </ul>
          <p>
            Failure to make timely payments may result in suspension or termination of your access to the Service.
          </p>
        </>
      )
    },
    {
      id: 'limitations',
      title: '6. Limitations of Liability',
      icon: <FaExclamationTriangle className="h-8 w-8 text-indigo-600" />,
      content: (
        <>
          <p className="mb-4">
            To the maximum extent permitted by law, CloudDigify and its directors, employees, partners, agents, suppliers, or affiliates shall not be liable for:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Any indirect, incidental, special, consequential, or punitive damages</li>
            <li>Loss of profits, revenue, data, goodwill, or other intangible losses</li>
            <li>Damages resulting from interruption of service or inability to access our services</li>
            <li>Damages arising from your use or inability to use our Service</li>
            <li>Any unauthorized access to or use of our servers and/or personal information stored therein</li>
          </ul>
          <p>
            This limitation applies whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis, 
            even if we have been advised of the possibility of such damage.
          </p>
        </>
      )
    },
    {
      id: 'disclaimer',
      title: '7. Disclaimer of Warranties',
      icon: <FaBan className="h-8 w-8 text-indigo-600" />,
      content: (
        <p>
          The Service is provided on an "AS IS" and "AS AVAILABLE" basis. CloudDigify expressly disclaims all warranties of any kind, 
          whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, 
          and non-infringement. We do not guarantee that the Service will be uninterrupted, timely, secure, or error-free, or that the results 
          that may be obtained from the use of the Service will be accurate or reliable.
        </p>
      )
    },
    {
      id: 'privacy',
      title: '8. Privacy Policy',
      icon: <FaUserShield className="h-8 w-8 text-indigo-600" />,
      content: (
        <p>
          Your use of the Service is also governed by our Privacy Policy, which is incorporated by reference into these Terms and Conditions. 
          Please review our <a href="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</a> to understand our practices 
          regarding the collection, use, and disclosure of your personal information.
        </p>
      )
    },
    {
      id: 'governing-law',
      title: '9. Governing Law',
      icon: <FaGlobe className="h-8 w-8 text-indigo-600" />,
      content: (
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which CloudDigify is established, 
          without regard to its conflict of law provisions. You agree to submit to the personal and exclusive jurisdiction of the courts located 
          within this jurisdiction for the resolution of any disputes arising from these Terms or your use of the Service.
        </p>
      )
    },
    {
      id: 'changes',
      title: '10. Changes to Terms',
      icon: <FaHistory className="h-8 w-8 text-indigo-600" />,
      content: (
        <p>
          We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice 
          before any new terms take effect. What constitutes a material change will be determined at our sole discretion. By continuing to access 
          or use our Service after any revisions become effective, you agree to be bound by the revised terms.
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
          className="bg-white rounded-xl shadow-lg p-8 mb-10 border-l-4 border-indigo-600"
          variants={itemVariants}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Terms and Conditions</h1>
          <div className="flex items-center text-gray-600">
            <FaHistory className="mr-2" />
            <p>Last Updated: {currentDate}</p>
          </div>
        </motion.div>

        {/* Hero */}
        <motion.div
          className="bg-indigo-50 rounded-lg p-8 mb-10"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-indigo-600">
              <FaFileContract className="w-16 h-16 md:w-24 md:h-24" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Agreement With You</h2>
              <p className="text-gray-700">
                These Terms and Conditions constitute a legally binding agreement between you and CloudDigify regarding your use of our website and services.
                Please read these terms carefully before using our services. Your access to and use of the service is conditioned on your acceptance of and compliance with these terms.
              </p>
            </div>
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
                <div className="mr-4 p-2 bg-indigo-50 rounded-lg">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-800" id={section.id}>{section.title}</h2>
              </div>
              <div className="prose max-w-none text-gray-700 ml-16">
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Eligibility */}
        <motion.div
          className="mt-10 bg-white rounded-lg shadow-md p-8"
          variants={itemVariants}
        >
          <div className="flex items-center mb-6">
            <FaShieldAlt className="h-6 w-6 text-indigo-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-800">Service Eligibility</h3>
          </div>
          <p className="text-gray-700 mb-4">
            By using our Service, you represent and warrant that you have the legal capacity to enter into these Terms 
            and that you are at least 18 years of age. If you are using the Service on behalf of an organization, you 
            represent and warrant that you have the authority to bind that organization to these Terms.
          </p>
          <p className="text-gray-700">
            Our Service is not intended for use by individuals or entities in jurisdictions where such use would be 
            contrary to local law or regulation. It is your responsibility to ensure that your use of the Service 
            complies with applicable laws.
          </p>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          className="mt-10 bg-indigo-50 rounded-lg p-8"
          variants={itemVariants}
        >
          <div className="flex flex-col text-center">
            <FaStar className="text-yellow-500 h-8 w-8 mx-auto mb-4" />
            <p className="text-lg text-gray-700 italic mb-6">
              "CloudDigify provides exceptional cloud services with clear terms and transparent business practices. 
              Their commitment to legal compliance and user privacy sets them apart in the industry."
            </p>
            <p className="font-semibold text-gray-800">— Enterprise Technology Review</p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-10 bg-indigo-600 rounded-lg p-8 text-center text-white"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-bold mb-4">Have Questions About Our Terms?</h3>
          <p className="mb-6">
            Our team is ready to help you understand our terms and conditions. Get in touch with us today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="px-6 py-3 bg-white text-indigo-600 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Contact Us
            </a>
            <a href="/privacy" className="px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-indigo-700 transition-colors">
              Privacy Policy
            </a>
          </div>
        </motion.div>

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

export default TermsAndConditions; 