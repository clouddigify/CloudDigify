import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChartLine, FaCode, FaCloudUploadAlt, FaLock, FaClipboardCheck } from 'react-icons/fa';

const benefits = [
  {
    title: "Consistency",
    description: "Eliminate configuration drift with consistent infrastructure deployments.",
    icon: <FaClipboardCheck className="text-blue-500 text-2xl" />
  },
  {
    title: "Automation",
    description: "Automate resource provisioning and reduce human error.",
    icon: <FaCode className="text-blue-500 text-2xl" />
  },
  {
    title: "Speed",
    description: "Deploy complex infrastructure quickly and repeatedly.",
    icon: <FaCloudUploadAlt className="text-blue-500 text-2xl" />
  },
  {
    title: "Scalability",
    description: "Easily scale infrastructure up or down based on demand.",
    icon: <FaChartLine className="text-blue-500 text-2xl" />
  }
];

const InfrastructureAsCode = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {/* Hero Section */}
    <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Infrastructure as Code</h1>
          <p className="text-xl opacity-90 mb-8">
            Automate your infrastructure provisioning with code for consistency, repeatability, and scalability.
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
            <h2 className="text-3xl font-bold mb-6">Modernize Your Infrastructure Management</h2>
            <p className="text-gray-600 mb-6">
              Infrastructure as Code (IaC) is a modern approach to infrastructure management where infrastructure resources are defined using code templates. This eliminates manual processes, ensures consistency, and significantly reduces errors.
            </p>
            <p className="text-gray-600">
              At CloudDigify, we help organizations implement infrastructure as code practices using industry-leading tools like Terraform, AWS CloudFormation, Azure Resource Manager, and Oracle Resource Manager to automate the provisioning and management of your cloud resources.
            </p>
          </div>
          
          <div className="lg:pl-10">
            <div className="bg-blue-50 p-8 rounded-lg border border-blue-100">
              <div className="text-5xl text-blue-600 mb-6">
                <FaCode />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our IaC Approach</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Declarative Infrastructure Definition</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Version-Controlled Infrastructure</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Automated Provisioning & Deployment</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Infrastructure Testing</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Configuration Drift Prevention</span>
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
        <h2 className="text-3xl font-bold text-center mb-6">Our Infrastructure as Code Services</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          We provide comprehensive IaC solutions to automate your infrastructure management across all major cloud platforms.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">IaC Strategy & Implementation</h3>
            <p className="text-gray-600">
              Develop a tailored Infrastructure as Code strategy and implementation plan aligned with your organization's cloud adoption goals.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Terraform Implementation</h3>
            <p className="text-gray-600">
              Implement HashiCorp Terraform for cross-platform infrastructure automation with reusable modules and best practices.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">CloudFormation & ARM Templates</h3>
            <p className="text-gray-600">
              Design and implement AWS CloudFormation or Azure Resource Manager templates for native cloud resource management.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">IaC Pipeline Integration</h3>
            <p className="text-gray-600">
              Integrate IaC tools into your CI/CD pipelines for automated testing and deployment of infrastructure changes.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">IaC Security & Compliance</h3>
            <p className="text-gray-600">
              Implement security scanning, policy as code, and compliance checks within your infrastructure code.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">IaC Training & Enablement</h3>
            <p className="text-gray-600">
              Train your team on IaC practices and tools to ensure successful adoption and maintenance.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Benefits of Infrastructure as Code</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          IaC transforms how organizations manage infrastructure, delivering significant business advantages.
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
          <h2 className="text-3xl font-bold mb-6">Case Study: E-commerce Platform Infrastructure Modernization</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                A rapidly growing e-commerce platform was struggling with manual infrastructure provisioning, leading to inconsistencies and frequent outages during peak shopping periods.
              </p>
              <p className="text-gray-600 mb-4">
                CloudDigify implemented a comprehensive Infrastructure as Code solution that included:
              </p>
              <ul className="list-disc pl-5 text-gray-600 mb-4">
                <li>Full infrastructure definition using Terraform</li>
                <li>Version-controlled infrastructure with Git</li>
                <li>Automated testing and validation in CI/CD pipelines</li>
                <li>Implementation of immutable infrastructure patterns</li>
                <li>Infrastructure security scanning and policy enforcement</li>
              </ul>
              <p className="text-gray-600">
                As a result, the client reduced infrastructure deployment time from days to minutes, eliminated configuration drift, and successfully handled Black Friday traffic with zero outages.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Results Achieved</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Deployment Time Reduction</span>
                    <span className="font-medium">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Configuration Issues</span>
                    <span className="font-medium">-90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Time to Recovery</span>
                    <span className="font-medium">-85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Resource Utilization</span>
                    <span className="font-medium">+30%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '30%' }}></div>
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
        <h2 className="text-3xl font-bold mb-6">Ready to Modernize Your Infrastructure Management?</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          Let's discuss how Infrastructure as Code can transform your cloud operations.
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

export default InfrastructureAsCode; 