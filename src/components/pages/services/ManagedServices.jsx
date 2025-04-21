import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaDatabase, FaServer, FaCloudDownloadAlt, FaShieldAlt, FaChartLine, FaClock } from 'react-icons/fa';

const benefits = [
  {
    title: "24/7 Support",
    description: "Around-the-clock monitoring and support for your cloud infrastructure.",
    icon: <FaClock className="text-blue-500 text-2xl" />
  },
  {
    title: "Cost Optimization",
    description: "Continuous assessment and optimization to reduce cloud spending.",
    icon: <FaChartLine className="text-blue-500 text-2xl" />
  },
  {
    title: "Enhanced Security",
    description: "Proactive security monitoring and threat management.",
    icon: <FaShieldAlt className="text-blue-500 text-2xl" />
  },
  {
    title: "Performance Optimization",
    description: "Ensuring your cloud resources operate at peak efficiency.",
    icon: <FaCloudDownloadAlt className="text-blue-500 text-2xl" />
  }
];

const ManagedServices = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {/* Hero Section */}
    <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Managed Cloud Services</h1>
          <p className="text-xl opacity-90 mb-8">
            Focus on your business while we take care of your cloud infrastructure with our comprehensive 24/7 managed services.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Request Consultation
          </Link>
        </div>
      </div>
    </section>

    {/* Overview */}
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Our Managed Services</h2>
            <p className="text-gray-600 mb-6">
              Cloud infrastructure requires continuous attention, monitoring, and optimization to ensure performance, security, and cost-efficiency. Our managed cloud services provide the expertise and oversight needed to maximize your cloud investment.
            </p>
            <p className="text-gray-600">
              With CloudDigify's managed services, you gain access to a team of certified cloud professionals who monitor, maintain, and optimize your cloud environment 24/7, allowing your team to focus on core business activities and innovation.
            </p>
          </div>
          
          <div className="lg:pl-10">
            <div className="bg-blue-50 p-8 rounded-lg border border-blue-100">
              <div className="text-5xl text-blue-600 mb-6">
                <FaDatabase />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Management Approach</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Proactive Monitoring & Alerting</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Regular Maintenance & Updates</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Security & Compliance Management</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cost Optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>24/7 Technical Support</span>
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
        <h2 className="text-3xl font-bold text-center mb-6">Our Managed Cloud Services</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          We offer comprehensive managed services for all major cloud platforms including AWS, Azure, and Oracle Cloud.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Infrastructure Management</h3>
            <p className="text-gray-600">
              Comprehensive monitoring, maintenance, and optimization of your cloud infrastructure including compute, storage, and network resources.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Security Management</h3>
            <p className="text-gray-600">
              Continuous security monitoring, threat detection, and vulnerability management to protect your cloud environment.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Database Management</h3>
            <p className="text-gray-600">
              Expert management of your cloud databases including performance tuning, backup management, and high availability configuration.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Cost Optimization</h3>
            <p className="text-gray-600">
              Regular analysis of cloud usage and implementation of cost-saving measures to optimize your cloud spending.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Backup & Disaster Recovery</h3>
            <p className="text-gray-600">
              Implementation and management of robust backup and disaster recovery solutions to ensure business continuity.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Performance Monitoring</h3>
            <p className="text-gray-600">
              Continuous monitoring of application and infrastructure performance with proactive optimization recommendations.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Benefits of Our Managed Services</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Let us handle the complexities of cloud management while you focus on your core business objectives.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex p-6 bg-gray-50 rounded-lg">
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
    <section className="py-16 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6">Case Study: Healthcare Provider Cloud Management</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                A growing healthcare provider was struggling to maintain their expanding cloud infrastructure with their limited IT team. They faced challenges with security compliance, performance issues during peak times, and rising costs.
              </p>
              <p className="text-gray-600 mb-4">
                CloudDigify implemented a comprehensive managed services solution that included:
              </p>
              <ul className="list-disc pl-5 text-gray-600 mb-4">
                <li>24/7 monitoring and management of their entire cloud environment</li>
                <li>Implementation of security best practices and compliance controls</li>
                <li>Performance optimization and auto-scaling configuration</li>
                <li>Cost management and resource optimization</li>
              </ul>
              <p className="text-gray-600">
                As a result, the client achieved 99.99% uptime, reduced cloud costs by 30%, and successfully passed their compliance audits without issues.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Results Achieved</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Uptime Improvement</span>
                    <span className="font-medium">99.99%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '99.99%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Cost Reduction</span>
                    <span className="font-medium">30%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Security Incidents</span>
                    <span className="font-medium">-85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">IT Team Productivity</span>
                    <span className="font-medium">+40%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Take the Burden of Cloud Management Off Your Team?</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          Let our experts manage your cloud infrastructure so you can focus on your core business objectives.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Schedule a Consultation
          </Link>
          <a
            href="tel:+18005551234"
            className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            Call Us Today
          </a>
        </div>
      </div>
    </section>
  </motion.div>
);

export default ManagedServices; 