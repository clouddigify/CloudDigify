import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCogs, FaRocket, FaCode, FaClipboardCheck, FaChartLine } from 'react-icons/fa';

const benefits = [
  {
    title: "Faster Delivery",
    description: "Accelerate your development lifecycle and deliver features faster to market.",
    icon: <FaRocket className="text-blue-500 text-2xl" />
  },
  {
    title: "Improved Quality",
    description: "Enhance software quality with automated testing and continuous integration.",
    icon: <FaCode className="text-blue-500 text-2xl" />
  },
  {
    title: "Enhanced Collaboration",
    description: "Break down silos between development and operations teams.",
    icon: <FaClipboardCheck className="text-blue-500 text-2xl" />
  },
  {
    title: "Cost Efficiency",
    description: "Reduce operational costs through automation and optimization.",
    icon: <FaChartLine className="text-blue-500 text-2xl" />
  }
];

const DevOps = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {/* Hero Section */}
    <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">DevOps & CI/CD Services</h1>
          <p className="text-xl opacity-90 mb-8">
            Streamline your development process, improve collaboration, and accelerate delivery with our comprehensive DevOps solutions.
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
            <h2 className="text-3xl font-bold mb-6">Transform Your Development Process</h2>
            <p className="text-gray-600 mb-6">
              DevOps is more than just a set of practices—it's a cultural and technical transformation that bridges the gap between development and operations. At CloudDigify, we help organizations implement DevOps methodologies that enhance collaboration, streamline processes, and deliver value to customers faster.
            </p>
            <p className="text-gray-600">
              Our DevOps services combine people, processes, and technology to help your organization build, test, and deploy applications with greater speed, quality, and efficiency. From continuous integration and delivery to infrastructure automation, we provide end-to-end solutions tailored to your specific needs.
            </p>
          </div>
          
          <div className="lg:pl-10">
            <div className="bg-blue-50 p-8 rounded-lg border border-blue-100">
              <div className="text-5xl text-blue-600 mb-6">
                <FaCogs />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our DevOps Approach</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Continuous Integration & Continuous Delivery (CI/CD)</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Infrastructure as Code (IaC)</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Configuration Management</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Monitoring & Observability</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Containerization & Orchestration</span>
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
        <h2 className="text-3xl font-bold text-center mb-6">Our DevOps Services</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          We offer a comprehensive range of DevOps services to help you streamline your development process and improve operational efficiency.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">CI/CD Pipeline Implementation</h3>
            <p className="text-gray-600">
              Set up automated build, test, and deployment pipelines using industry-leading tools like Jenkins, GitLab CI, GitHub Actions, or Azure DevOps.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Infrastructure Automation</h3>
            <p className="text-gray-600">
              Implement Infrastructure as Code (IaC) using tools like Terraform, AWS CloudFormation, or Azure Resource Manager templates.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Containerization & Orchestration</h3>
            <p className="text-gray-600">
              Containerize your applications with Docker and orchestrate them using Kubernetes, Amazon ECS, or Azure Container Service.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Configuration Management</h3>
            <p className="text-gray-600">
              Automate configuration management with tools like Ansible, Chef, or Puppet to ensure consistency and reduce errors.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Monitoring & Observability</h3>
            <p className="text-gray-600">
              Implement comprehensive monitoring solutions using tools like Prometheus, Grafana, ELK Stack, or CloudWatch.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">DevOps Assessment & Strategy</h3>
            <p className="text-gray-600">
              Evaluate your current processes and develop a roadmap for implementing DevOps practices tailored to your organization.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Benefits of Our DevOps Services</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          By implementing DevOps practices, you can realize significant benefits that enhance your business operations and outcomes.
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
          <h2 className="text-3xl font-bold mb-6">Case Study: E-commerce Platform Transformation</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                A leading e-commerce company was struggling with slow deployment cycles and frequent production issues. Their development and operations teams worked in silos, leading to communication gaps and inefficiencies.
              </p>
              <p className="text-gray-600 mb-4">
                CloudDigify implemented a comprehensive DevOps solution that included:
              </p>
              <ul className="list-disc pl-5 text-gray-600 mb-4">
                <li>CI/CD pipeline automation using GitLab CI</li>
                <li>Infrastructure as Code with Terraform</li>
                <li>Containerization with Docker and Kubernetes</li>
                <li>Automated testing and quality gates</li>
                <li>Monitoring and alerting with Prometheus and Grafana</li>
              </ul>
              <p className="text-gray-600">
                <strong className="text-blue-600">Results:</strong> Deployment time reduced from days to minutes, 75% reduction in production incidents, and 40% improvement in development productivity.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-700">Key Achievements</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-2">90%</p>
                  <p className="text-gray-600">Reduction in deployment time</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-2">75%</p>
                  <p className="text-gray-600">Fewer production incidents</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-2">40%</p>
                  <p className="text-gray-600">Improved developer productivity</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-2">60%</p>
                  <p className="text-gray-600">Faster time to market</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Development Process?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Partner with CloudDigify to implement DevOps practices that drive innovation and growth.
        </p>
        <Link 
          to="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Schedule a Consultation
        </Link>
      </div>
    </section>
  </motion.div>
);

export default DevOps; 