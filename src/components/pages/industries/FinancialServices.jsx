import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaDatabase, FaLock, FaChartLine, FaRobot, FaShieldAlt, FaArrowRight } from 'react-icons/fa';

const FinancialServices = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-16"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Financial Services Cloud Solutions</h1>
            <p className="text-xl opacity-90 mb-8">
              Secure, compliant, and innovative cloud solutions for banking, insurance, and capital markets
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6">Transforming Financial Services with Cloud Technology</h2>
              <p className="mb-6 text-lg text-gray-700">
                The financial services industry is undergoing rapid digital transformation, driven by changing customer expectations, increasing regulatory requirements, and the need for operational efficiency. CloudDigify helps financial institutions navigate this complex landscape with secure and innovative cloud solutions.
              </p>
              <p className="mb-10 text-lg text-gray-700">
                Our deep understanding of the financial services industry, combined with our cloud expertise, enables us to deliver solutions that enhance customer experiences, improve operational efficiency, and ensure regulatory compliance.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-blue-600 mb-3">
                    <FaDatabase size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Banking</h3>
                  <p className="text-gray-700 mb-3">Digital banking platforms, core banking modernization, payment processing, and fraud detection solutions.</p>
                  <Link 
                    to="/industries/banking" 
                    className="text-blue-600 font-medium inline-flex items-center group"
                  >
                    Learn More 
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-blue-600 mb-3">
                    <FaLock size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Insurance</h3>
                  <p className="text-gray-700 mb-3">Policy administration, claims processing, underwriting automation, and customer engagement solutions.</p>
                  <Link 
                    to="/industries/insurance" 
                    className="text-blue-600 font-medium inline-flex items-center group"
                  >
                    Learn More 
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-blue-600 mb-3">
                    <FaChartLine size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Capital Markets</h3>
                  <p className="text-gray-700 mb-3">Trading platforms, risk management, regulatory reporting, and analytics solutions.</p>
                  <Link 
                    to="/industries/capital-markets" 
                    className="text-blue-600 font-medium inline-flex items-center group"
                  >
                    Learn More 
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-blue-600 mb-3">
                    <FaRobot size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Fintech</h3>
                  <p className="text-gray-700 mb-3">Digital lending, payment innovation, blockchain solutions, and AI-powered financial services.</p>
                  <Link 
                    to="/industries/fintech" 
                    className="text-blue-600 font-medium inline-flex items-center group"
                  >
                    Learn More 
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/3 bg-gray-50 p-6 rounded-lg sticky top-24">
              <h3 className="text-xl font-semibold mb-4">Key Challenges We Solve</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Legacy system modernization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Regulatory compliance (GDPR, PSD2, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Cybersecurity and fraud prevention</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Digital customer experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Data analytics and business intelligence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Cost reduction and operational efficiency</span>
                </li>
              </ul>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="font-medium mb-2 text-blue-800">Industry Expertise</h4>
                <p className="text-sm text-blue-800">
                  Our team includes former banking and financial services professionals who understand your industry's unique challenges and regulatory requirements.
                </p>
              </div>
              
              <Link 
                to="/contact" 
                className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition duration-300"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Financial Services Solutions</h2>
          
          <div className="space-y-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-4">Core System Modernization</h3>
                  <p className="text-gray-700 mb-4">
                    We help financial institutions modernize their legacy core systems to improve agility, reduce costs, and enhance customer experiences.
                  </p>
                  <ul className="space-y-2 mb-4 pl-5 list-disc text-gray-700">
                    <li>Gradual migration strategies to minimize risk</li>
                    <li>API-first architecture for flexibility and integration</li>
                    <li>Cloud-native solutions for scalability and resilience</li>
                    <li>Regulatory compliance by design</li>
                  </ul>
                </div>
                <div className="md:w-1/3 flex items-center justify-center">
                  <div className="p-4 bg-blue-50 rounded-full">
                    <FaDatabase size={64} className="text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-4">Cybersecurity & Compliance</h3>
                  <p className="text-gray-700 mb-4">
                    Our cybersecurity solutions help financial institutions protect sensitive data, prevent fraud, and comply with regulatory requirements.
                  </p>
                  <ul className="space-y-2 mb-4 pl-5 list-disc text-gray-700">
                    <li>Multi-layered security architecture</li>
                    <li>Real-time fraud detection and prevention</li>
                    <li>Automated compliance monitoring and reporting</li>
                    <li>Secure customer authentication solutions</li>
                  </ul>
                </div>
                <div className="md:w-1/3 flex items-center justify-center">
                  <div className="p-4 bg-blue-50 rounded-full">
                    <FaShieldAlt size={64} className="text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-4">Data Analytics & AI</h3>
                  <p className="text-gray-700 mb-4">
                    We help financial institutions leverage their data to gain insights, make better decisions, and create personalized customer experiences.
                  </p>
                  <ul className="space-y-2 mb-4 pl-5 list-disc text-gray-700">
                    <li>Advanced analytics platforms for actionable insights</li>
                    <li>AI-powered customer segmentation and personalization</li>
                    <li>Predictive models for risk assessment and credit scoring</li>
                    <li>Automated regulatory reporting and compliance</li>
                  </ul>
                </div>
                <div className="md:w-1/3 flex items-center justify-center">
                  <div className="p-4 bg-blue-50 rounded-full">
                    <FaChartLine size={64} className="text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Success Stories</h2>
          
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold mb-3">Digital Transformation for a Global Bank</h3>
            <p className="mb-4 text-gray-700">
              A leading global bank needed to modernize its core banking systems while maintaining regulatory compliance and enhancing customer experiences. Our team delivered:
            </p>
            <ul className="space-y-2 mb-4 pl-5 list-disc text-gray-700">
              <li>Cloud-native microservices architecture for core banking functions</li>
              <li>API gateway for secure third-party integration</li>
              <li>Real-time data analytics platform for customer insights</li>
              <li>Automated compliance monitoring and reporting system</li>
            </ul>
            <p className="text-gray-700 mb-6">
              <strong>Results:</strong> 40% reduction in operational costs, 60% faster time-to-market for new features, 99.99% system availability, and enhanced customer satisfaction scores.
            </p>
            <Link 
              to="/case-studies/banking-transformation" 
              className="text-blue-600 font-medium inline-flex items-center group"
            >
              Read Full Case Study 
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Financial Institution?</h2>
          <p className="text-gray-700 mb-8 text-lg">
            Contact our financial services experts today to discuss how our cloud solutions can help you innovate, reduce costs, and enhance customer experiences.
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Contact Our Financial Services Team
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default FinancialServices; 