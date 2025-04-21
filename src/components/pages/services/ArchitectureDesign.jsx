import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaChartLine, FaBalanceScale, FaCogs, FaCloudDownloadAlt } from 'react-icons/fa';

const benefits = [
  {
    title: "Scalability",
    description: "Design systems that can grow with your business needs.",
    icon: <FaChartLine className="text-blue-500 text-2xl" />
  },
  {
    title: "Reliability",
    description: "Create fault-tolerant architectures with high availability.",
    icon: <FaShieldAlt className="text-blue-500 text-2xl" />
  },
  {
    title: "Cost Efficiency",
    description: "Optimize architecture for performance and cost savings.",
    icon: <FaBalanceScale className="text-blue-500 text-2xl" />
  },
  {
    title: "Performance",
    description: "Enhance system performance and user experience.",
    icon: <FaCloudDownloadAlt className="text-blue-500 text-2xl" />
  }
];

const ArchitectureDesign = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {/* Hero Section */}
    <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cloud Architecture Design</h1>
          <p className="text-xl opacity-90 mb-8">
            Expert design of scalable, reliable, and cost-efficient cloud architectures tailored to your business needs.
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
            <h2 className="text-3xl font-bold mb-6">Strategic Cloud Architecture Design</h2>
            <p className="text-gray-600 mb-6">
              Effective cloud architecture is the foundation of successful digital transformation. At CloudDigify, we design tailored cloud solutions that align with your business goals, technical requirements, and budget constraints.
            </p>
            <p className="text-gray-600">
              Our certified cloud architects bring extensive experience designing solutions on AWS, Azure, and Oracle Cloud Infrastructure, ensuring your architecture embodies industry best practices for security, scalability, and performance.
            </p>
          </div>
          
          <div className="lg:pl-10">
            <div className="bg-blue-50 p-8 rounded-lg border border-blue-100">
              <div className="text-5xl text-blue-600 mb-6">
                <FaCogs />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Design Approach</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Well-Architected Framework Alignment</span>
                </li>
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
                  <span>Cost-Optimized Resources</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Scalable & Resilient Design</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Performance Optimization</span>
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
        <h2 className="text-3xl font-bold text-center mb-6">Our Architecture Design Services</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Comprehensive architecture design services for new deployments, migrations, and modernization projects.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Cloud Foundation Design</h3>
            <p className="text-gray-600">
              Design robust cloud foundations with landing zones, account structures, network topology, and security controls.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Application Architecture</h3>
            <p className="text-gray-600">
              Design scalable application architectures leveraging containers, serverless, microservices, or traditional approaches.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Data Architecture</h3>
            <p className="text-gray-600">
              Design optimal data storage, processing, and analytics architectures for your specific workloads.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Multi-Cloud Architecture</h3>
            <p className="text-gray-600">
              Design hybrid and multi-cloud architectures that leverage the best capabilities of different providers.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Architecture Review</h3>
            <p className="text-gray-600">
              Evaluate existing architectures and provide recommendations for improvement based on best practices.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Disaster Recovery Design</h3>
            <p className="text-gray-600">
              Design robust disaster recovery and business continuity solutions to meet your RPO and RTO requirements.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Benefits of Expert Architecture Design</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Proper architecture design provides the foundation for successful cloud deployments with tangible business benefits.
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
          <h2 className="text-3xl font-bold mb-6">Case Study: Financial Services Platform Modernization</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                A financial services company needed to modernize their monolithic application architecture to improve scalability, reduce costs, and accelerate feature delivery.
              </p>
              <p className="text-gray-600 mb-4">
                CloudDigify designed a comprehensive cloud architecture that included:
              </p>
              <ul className="list-disc pl-5 text-gray-600 mb-4">
                <li>Microservices architecture using containerization</li>
                <li>API gateway for service management</li>
                <li>Multi-region deployment for high availability</li>
                <li>Advanced security controls and compliance features</li>
                <li>Automated CI/CD pipelines for deployment</li>
              </ul>
              <p className="text-gray-600">
                The new architecture enabled the client to scale during peak trading periods, reduced infrastructure costs by 40%, and accelerated their release cycle from monthly to weekly deployments.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Results Achieved</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Scalability Improvement</span>
                    <span className="font-medium">10x</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Cost Reduction</span>
                    <span className="font-medium">40%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Release Frequency</span>
                    <span className="font-medium">+300%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">System Downtime</span>
                    <span className="font-medium">-95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '95%' }}></div>
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
        <h2 className="text-3xl font-bold mb-6">Ready for Expert Architecture Design?</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          Let our certified cloud architects design the optimal solution for your business needs.
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

export default ArchitectureDesign; 