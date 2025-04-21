import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLock, FaShieldAlt, FaFileContract, FaSearch, FaUserShield } from 'react-icons/fa';

const benefits = [
  {
    title: "Reduced Risk",
    description: "Minimize security risks through proactive protection and compliance.",
    icon: <FaShieldAlt className="text-blue-500 text-2xl" />
  },
  {
    title: "Regulatory Compliance",
    description: "Meet industry regulations and standards like GDPR, HIPAA, and more.",
    icon: <FaFileContract className="text-blue-500 text-2xl" />
  },
  {
    title: "Threat Detection",
    description: "Early identification of potential security threats.",
    icon: <FaSearch className="text-blue-500 text-2xl" />
  },
  {
    title: "Data Protection",
    description: "Comprehensive safeguards for sensitive data and intellectual property.",
    icon: <FaUserShield className="text-blue-500 text-2xl" />
  }
];

const SecurityCompliance = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {/* Hero Section */}
    <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Security & Compliance</h1>
          <p className="text-xl opacity-90 mb-8">
            Protect your cloud infrastructure and ensure regulatory compliance with our comprehensive security solutions.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Request Security Assessment
          </Link>
        </div>
      </div>
    </section>

    {/* Overview */}
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Comprehensive Cloud Security</h2>
            <p className="text-gray-600 mb-6">
              As organizations move more workloads to the cloud, security and compliance become increasingly critical. At CloudDigify, we help you implement a robust security posture while ensuring compliance with relevant regulations and standards.
            </p>
            <p className="text-gray-600">
              Our security experts bring deep expertise in AWS, Azure, and Oracle Cloud security controls, compliance frameworks, and best practices to help you build and maintain secure cloud environments.
            </p>
          </div>
          
          <div className="lg:pl-10">
            <div className="bg-blue-50 p-8 rounded-lg border border-blue-100">
              <div className="text-5xl text-blue-600 mb-6">
                <FaLock />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Security Approach</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Security by Design</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Continuous Monitoring & Assessment</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Defense in Depth</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Automated Security Controls</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Compliance as Code</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="py-16 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Our Security & Compliance Services</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Comprehensive security and compliance solutions tailored to your unique requirements.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Security Assessment</h3>
            <p className="text-gray-600">
              Comprehensive evaluation of your cloud environment to identify vulnerabilities and security gaps.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Compliance Implementation</h3>
            <p className="text-gray-600">
              Implementation of controls to meet specific compliance requirements (GDPR, HIPAA, PCI DSS, SOC 2, etc.).
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Identity & Access Management</h3>
            <p className="text-gray-600">
              Design and implementation of robust IAM policies, role-based access control, and least privilege principles.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Data Protection</h3>
            <p className="text-gray-600">
              Implementation of encryption, data loss prevention, and secure storage solutions for sensitive information.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Security Monitoring</h3>
            <p className="text-gray-600">
              Setup of continuous security monitoring, threat detection, and incident response systems.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Security as Code</h3>
            <p className="text-gray-600">
              Implementation of security controls through infrastructure as code and policy as code approaches.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Compliance Frameworks */}
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Compliance Frameworks</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          We help organizations achieve and maintain compliance with various regulatory standards.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-3">General Data Protection</h3>
            <ul className="space-y-2 text-gray-600">
              <li>GDPR</li>
              <li>CCPA/CPRA</li>
              <li>PIPEDA</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-3">Industry-Specific</h3>
            <ul className="space-y-2 text-gray-600">
              <li>HIPAA (Healthcare)</li>
              <li>PCI DSS (Payment)</li>
              <li>FINRA/SEC (Financial)</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-3">Security Standards</h3>
            <ul className="space-y-2 text-gray-600">
              <li>SOC 1/2/3</li>
              <li>ISO 27001/27017/27018</li>
              <li>NIST Cybersecurity Framework</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-16 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Benefits of Our Security Services</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Robust security and compliance provide tangible benefits for your organization.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex p-6 bg-white rounded-lg shadow-md">
              <div className="mr-4">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Case Study Section */}
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-50 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6">Case Study: Healthcare Provider Compliance</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                A healthcare provider needed to migrate their patient management system to the cloud while ensuring HIPAA compliance and strong security controls.
              </p>
              <p className="text-gray-600 mb-4">
                CloudDigify implemented a comprehensive security and compliance solution that included:
              </p>
              <ul className="list-disc pl-5 text-gray-600 mb-4">
                <li>HIPAA-compliant cloud architecture</li>
                <li>End-to-end encryption for PHI data</li>
                <li>Role-based access control with multi-factor authentication</li>
                <li>Audit logging and monitoring for compliance reporting</li>
                <li>Regular security assessments and penetration testing</li>
              </ul>
              <p className="text-gray-600">
                The solution enabled the client to successfully migrate to the cloud, pass HIPAA audits, and reduce security incidents by 95% compared to their previous on-premises solution.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Results Achieved</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">HIPAA Compliance</span>
                    <span className="font-medium">100%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Security Incidents</span>
                    <span className="font-medium">-95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Audit Preparation Time</span>
                    <span className="font-medium">-80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Access Control Incidents</span>
                    <span className="font-medium">-90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Cloud Environment?</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          Schedule a security assessment to identify vulnerabilities and improve your cloud security posture.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Request Security Assessment
          </Link>
          <a
            href="tel:+18005551234"
            className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            Call Our Security Team
          </a>
        </div>
      </div>
    </section>
  </motion.div>
);

export default SecurityCompliance; 