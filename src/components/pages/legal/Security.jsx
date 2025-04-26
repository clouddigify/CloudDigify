import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaShieldAlt, 
  FaLock, 
  FaUserShield, 
  FaServer,
  FaCode,
  FaDatabase,
  FaCloudUploadAlt,
  FaUserSecret,
  FaBug,
  FaFileAlt,
  FaExclamationTriangle
} from 'react-icons/fa';

const Security = () => {
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
      id: 'overview',
      title: '1. Security Overview',
      icon: <FaShieldAlt className="h-8 w-8 text-blue-600" />,
      content: (
        <>
          <p className="mb-4">
            At CloudDigify, security is our top priority. We implement comprehensive security measures to protect:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Your personal and business data</li>
            <li>Cloud infrastructure and applications</li>
            <li>Communication channels</li>
            <li>Physical and digital assets</li>
          </ul>
          <p>
            Our security program follows industry best practices and international standards.
          </p>
        </>
      )
    },
    {
      id: 'data-protection',
      title: '2. Data Protection',
      icon: <FaLock className="h-8 w-8 text-blue-600" />,
      content: (
        <>
          <p className="mb-4">We protect your data through:</p>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Encryption</h4>
              <p className="text-gray-700">End-to-end encryption for data in transit and at rest</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Access Controls</h4>
              <p className="text-gray-700">Role-based access control and multi-factor authentication</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Data Backup</h4>
              <p className="text-gray-700">Regular backups with secure off-site storage</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Data Privacy</h4>
              <p className="text-gray-700">Compliance with GDPR, CCPA, and other privacy regulations</p>
            </div>
          </div>
        </>
      )
    },
    {
      id: 'infrastructure-security',
      title: '3. Infrastructure Security',
      icon: <FaServer className="h-8 w-8 text-blue-600" />,
      content: (
        <>
          <p className="mb-4">Our infrastructure security includes:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Firewalls and intrusion detection systems</li>
            <li>Regular security patches and updates</li>
            <li>Network segmentation and monitoring</li>
            <li>DDoS protection</li>
            <li>24/7 infrastructure monitoring</li>
          </ul>
          <p>
            We partner with leading cloud providers to ensure the highest level of infrastructure security.
          </p>
        </>
      )
    },
    {
      id: 'application-security',
      title: '4. Application Security',
      icon: <FaCode className="h-8 w-8 text-blue-600" />,
      content: (
        <>
          <p className="mb-4">Our application security practices include:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Secure software development lifecycle (SDLC)</li>
            <li>Regular security testing and code reviews</li>
            <li>Vulnerability scanning and penetration testing</li>
            <li>Third-party security audits</li>
            <li>Automated security testing in CI/CD pipeline</li>
          </ul>
        </>
      )
    },
    {
      id: 'compliance',
      title: '5. Compliance & Certifications',
      icon: <FaFileAlt className="h-8 w-8 text-blue-600" />,
      content: (
        <>
          <p className="mb-4">We maintain compliance with major security standards:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">ISO 27001</h4>
              <p className="text-gray-700">Information security management</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">SOC 2 Type II</h4>
              <p className="text-gray-700">Security, availability, and confidentiality</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">GDPR</h4>
              <p className="text-gray-700">Data protection and privacy</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">HIPAA</h4>
              <p className="text-gray-700">Healthcare data protection</p>
            </div>
          </div>
        </>
      )
    },
    {
      id: 'incident-response',
      title: '6. Security Incident Response',
      icon: <FaBug className="h-8 w-8 text-blue-600" />,
      content: (
        <>
          <p className="mb-4">Our incident response plan includes:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>24/7 security monitoring and alerting</li>
            <li>Dedicated incident response team</li>
            <li>Regular incident response drills</li>
            <li>Clear communication protocols</li>
            <li>Post-incident analysis and reporting</li>
          </ul>
          <p>
            We maintain transparency with our customers about security incidents and our response measures.
          </p>
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Security at CloudDigify
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Our commitment to protecting your data and maintaining trust
            </p>
            <p className="mt-4 text-blue-200">
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

        {/* Security Contact */}
        <motion.div
          variants={itemVariants}
          className="mt-12 bg-blue-50 rounded-xl p-6 sm:p-8"
        >
          <div className="flex items-center mb-4">
            <FaUserSecret className="h-6 w-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-900 ml-3">
              Report a Security Concern
            </h3>
          </div>
          <p className="text-gray-600 mb-6">
            If you discover a potential security issue, please contact our security team immediately:
          </p>
          <div className="bg-white rounded-lg p-4">
            <p className="text-gray-800">Email: security@clouddigify.com</p>
            <p className="text-gray-800">Emergency Hotline: +1 (800) 555-9999</p>
          </div>
        </motion.div>

        {/* Security Warning */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex items-start p-4 bg-yellow-50 rounded-lg"
        >
          <FaExclamationTriangle className="h-6 w-6 text-yellow-600 mt-1" />
          <p className="ml-3 text-sm text-yellow-700">
            While we implement comprehensive security measures, no system is completely immune to security risks. 
            We encourage all users to follow security best practices and promptly report any security concerns.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Security; 