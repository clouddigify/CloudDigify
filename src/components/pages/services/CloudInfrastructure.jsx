import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight, FaCloud, FaServer, FaNetworkWired, FaShieldAlt, FaSyncAlt } from 'react-icons/fa';

const CloudInfrastructure = () => {
  // Customize these values for each service
  const serviceInfo = {
    title: "Cloud & Infrastructure Services",
    description: "Enterprise-grade cloud infrastructure solutions designed for reliability, scalability, and performance.",
    icon: <FaCloud className="text-blue-500 text-4xl mb-4" />,
    heroBackground: "from-blue-600 to-indigo-700",
    benefits: [
      "Reduced operational costs through optimized cloud resource allocation",
      "Enhanced scalability to accommodate growing business demands",
      "Improved reliability with redundant systems and disaster recovery",
      "Increased security with industry-leading compliance standards",
      "24/7 monitoring and support from certified cloud specialists"
    ],
    features: [
      {
        title: "Hybrid Cloud Architecture",
        description: "Custom-designed infrastructure that combines public and private cloud resources to optimize performance, security, and cost."
      },
      {
        title: "Infrastructure Assessment",
        description: "Comprehensive evaluation of your current infrastructure to identify optimization opportunities and develop a tailored cloud strategy."
      },
      {
        title: "Cloud Networking",
        description: "Secure and reliable network architecture including VPNs, load balancing, content delivery, and direct connectivity options."
      },
      {
        title: "Compute & Storage Management",
        description: "Optimized virtual machine deployment, container orchestration, and efficient storage solutions for all workloads."
      }
    ],
    technologiesUsed: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "Kubernetes",
      "Terraform",
      "VMware",
      "OpenStack",
      "Docker"
    ],
    caseStudy: {
      title: "Infrastructure Transformation Success",
      client: "Leading Financial Services Company",
      challenge: "A global financial institution was struggling with aging data centers that were costly to maintain and couldn't scale to support their growing digital services. They needed to modernize their infrastructure while maintaining strict security and compliance requirements.",
      solution: "We implemented a hybrid cloud infrastructure solution, migrating non-sensitive workloads to public cloud platforms while creating a private cloud for sensitive data processing. Our team designed the architecture, implemented security controls, and provided training for their IT staff.",
      results: [
        "40% reduction in infrastructure operational costs",
        "99.99% uptime achieved across all critical systems",
        "75% faster deployment of new applications and services",
        "Successful compliance with GDPR, PCI-DSS, and industry-specific regulations"
      ]
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-16"
    >
      {/* Hero Section */}
      <section className={`bg-gradient-to-r ${serviceInfo.heroBackground} text-white py-20 px-6`}>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{serviceInfo.title}</h1>
            <p className="text-xl opacity-90 mb-8">
              {serviceInfo.description}
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-gray-700 mb-6">
                At CloudDigify, we provide comprehensive cloud infrastructure services that help organizations build, optimize, and manage robust cloud environments. Our solutions are designed to create scalable, secure, and high-performing infrastructure that supports your critical business applications and services.
              </p>
              <p className="text-gray-700 mb-8">
                Whether you're migrating to the cloud for the first time, optimizing your existing infrastructure, or implementing a hybrid or multi-cloud strategy, our team of certified cloud experts will work closely with you to design and implement solutions that align with your business objectives.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
              <ul className="space-y-3 mb-8">
                {serviceInfo.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">
                      <FaCheckCircle className="mt-1" />
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:w-1/3 bg-blue-50 p-6 rounded-lg self-start">
              <h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Certified cloud architects and engineers with multi-cloud expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Vendor-agnostic approach to provide the best solution for your needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">End-to-end services from assessment to implementation and support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Proven success with enterprises across diverse industries</span>
                </li>
              </ul>
              
              <Link 
                to="/contact" 
                className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceInfo.features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Technologies We Use</h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
            We leverage industry-leading cloud platforms and technologies to deliver robust, scalable, and secure infrastructure solutions.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {serviceInfo.technologiesUsed.map((tech, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                <span className="font-medium text-gray-800">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{serviceInfo.caseStudy.title}</h2>
          
          <div className="bg-white p-8 rounded-lg shadow">
            <div className="mb-6 pb-6 border-b border-gray-100">
              <h3 className="text-2xl font-semibold mb-2">{serviceInfo.caseStudy.client}</h3>
              <div className="text-sm text-blue-600 font-medium">Industry: Financial Services</div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">The Challenge</h4>
              <p className="text-gray-700 mb-4">{serviceInfo.caseStudy.challenge}</p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Our Solution</h4>
              <p className="text-gray-700 mb-4">{serviceInfo.caseStudy.solution}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">Results</h4>
              <ul className="space-y-2">
                {serviceInfo.caseStudy.results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Infrastructure?</h2>
          <p className="text-gray-700 mb-8 text-lg">
            Contact our team today to learn how our {serviceInfo.title} can help your business build a more reliable, scalable, and efficient cloud foundation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Contact Us
            </Link>
            <Link
              to="/services"
              className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default CloudInfrastructure; 