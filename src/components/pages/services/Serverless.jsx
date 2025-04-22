import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLightbulb, FaCode, FaServer, FaBolt, FaShieldAlt, FaArrowRight } from 'react-icons/fa';

const Serverless = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-16"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Serverless Architecture Services</h1>
            <p className="text-xl opacity-90 mb-8">
              Build modern, scalable applications without managing infrastructure
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6">Embrace the Future of Cloud Computing</h2>
              <p className="mb-6 text-lg text-gray-700">
                Serverless architecture allows you to build and run applications without thinking about servers. With serverless computing, your application still runs on servers, but all the server management is done by the cloud provider.
              </p>
              <p className="mb-10 text-lg text-gray-700">
                At CloudDigify, we help organizations leverage serverless technologies to reduce operational costs, increase development speed, and create highly scalable applications that can handle any workload.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Our Serverless Services</h3>
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <FaLightbulb size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Serverless Strategy & Consulting</h4>
                    <p className="text-gray-700">
                      We help you determine which workloads are ideal for serverless architecture and develop a comprehensive adoption strategy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <FaCode size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Serverless Application Development</h4>
                    <p className="text-gray-700">
                      Our developers build cloud-native applications using serverless frameworks and services like AWS Lambda, Azure Functions, and Google Cloud Functions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <FaServer size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Microservices to Serverless Migration</h4>
                    <p className="text-gray-700">
                      We help you refactor existing applications into serverless architectures, breaking monolithic applications into scalable function-based services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <FaShieldAlt size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Serverless Security & Governance</h4>
                    <p className="text-gray-700">
                      We implement security best practices for serverless environments and establish governance frameworks for managing multiple serverless applications.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Serverless Technologies We Work With</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-medium">AWS Lambda</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-medium">Azure Functions</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-medium">Google Cloud Functions</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-medium">API Gateway</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-medium">Event-driven Architecture</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-medium">Serverless Framework</h4>
                </div>
              </div>
            </div>

            <div className="md:w-1/3 bg-gray-50 p-6 rounded-lg sticky top-24">
              <h3 className="text-xl font-semibold mb-4">Benefits</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>No server management required</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Pay only for compute time used</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Automatic scaling with traffic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Faster time to market for applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Reduced operational overhead</span>
                </li>
              </ul>

              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="font-medium mb-2 text-blue-800">Did you know?</h4>
                <p className="text-sm text-blue-800">
                  Organizations that adopt serverless architecture typically see up to 80% reduction in operational costs compared to traditional server-based architectures.
                </p>
              </div>

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

      {/* Case Studies Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Success Stories</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-semibold mb-3">Media Processing Pipeline Transformation</h3>
            <p className="mb-4 text-gray-700">
              A digital media company was struggling with scalability and cost management for their media processing pipeline. Our serverless team helped them:
            </p>
            <ul className="space-y-2 mb-4 pl-5 list-disc text-gray-700">
              <li>Rebuild their media processing pipeline using AWS Lambda and Step Functions</li>
              <li>Implement event-driven processing to handle varying workloads</li>
              <li>Set up automated distribution of processed content to global CDNs</li>
              <li>Create a dashboard for monitoring and analytics</li>
            </ul>
            <p className="text-gray-700">
              The new serverless architecture reduced processing costs by 65%, improved processing time by 40%, and eliminated all infrastructure management overhead.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Go Serverless?</h2>
          <p className="text-gray-700 mb-8 text-lg">
            Contact our serverless architecture experts today to learn how we can help you modernize your applications.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Contact Us <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Serverless; 