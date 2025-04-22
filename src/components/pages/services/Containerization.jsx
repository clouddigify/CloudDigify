import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaDocker, FaCubes, FaCloud, FaRocket, FaNetworkWired, FaArrowRight } from 'react-icons/fa';

const Containerization = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-16"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cloud Containerization Services</h1>
            <p className="text-xl opacity-90 mb-8">
              Transform your applications with modern container technologies for enhanced scalability and portability
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6">Modernize with Container Technology</h2>
              <p className="mb-6 text-lg text-gray-700">
                Containerization packages applications with all their dependencies into standardized units for development, shipment, and deployment. This approach significantly improves consistency across multiple development, testing, and production environments.
              </p>
              <p className="mb-10 text-lg text-gray-700">
                At CloudDigify, we help organizations adopt containerization to increase efficiency, maximize resource utilization, and accelerate application deployment cycles.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Our Containerization Services</h3>
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <FaDocker size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Container Strategy & Implementation</h4>
                    <p className="text-gray-700">
                      We develop customized containerization strategies and implement container platforms like Docker, Kubernetes, and managed container services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <FaCubes size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Application Containerization</h4>
                    <p className="text-gray-700">
                      We modernize your existing applications for container environments, creating optimized container images and deployment configurations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <FaCloud size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Container Orchestration</h4>
                    <p className="text-gray-700">
                      We set up and manage container orchestration platforms like Kubernetes, Amazon ECS/EKS, or Azure AKS to automate deployment, scaling, and management.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <FaNetworkWired size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Container Networking & Security</h4>
                    <p className="text-gray-700">
                      We implement secure networking for container environments and establish best practices for container security.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Container Technologies We Work With</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-medium">Docker</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-medium">Kubernetes</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-medium">Amazon ECS/EKS</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-medium">Azure AKS</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-medium">Google GKE</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-medium">OpenShift</h4>
                </div>
              </div>
            </div>

            <div className="md:w-1/3 bg-gray-50 p-6 rounded-lg sticky top-24">
              <h3 className="text-xl font-semibold mb-4">Benefits</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Consistent environments across development and production</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Faster application deployment and scaling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Improved resource utilization and cost efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Enhanced application portability across cloud environments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Simplified microservices implementation</span>
                </li>
              </ul>

              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="font-medium mb-2 text-blue-800">Did you know?</h4>
                <p className="text-sm text-blue-800">
                  Organizations that adopt container technology typically deploy new code 7x more frequently and reduce time spent fixing security issues by up to 70%.
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
            <h3 className="text-2xl font-semibold mb-3">E-commerce Platform Modernization</h3>
            <p className="mb-4 text-gray-700">
              A rapidly growing e-commerce company struggled with inconsistent deployments and scaling challenges during peak shopping periods. Our containerization team helped them:
            </p>
            <ul className="space-y-2 mb-4 pl-5 list-disc text-gray-700">
              <li>Containerize their monolithic application into microservices</li>
              <li>Implement Kubernetes for orchestration across multiple cloud regions</li>
              <li>Set up automated CI/CD pipelines for consistent deployments</li>
              <li>Configure autoscaling to handle traffic spikes during sales events</li>
            </ul>
            <p className="text-gray-700">
              The result was a 70% reduction in deployment time, 99.99% uptime during peak seasons, and a 30% reduction in cloud infrastructure costs.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Modernize with Containers?</h2>
          <p className="text-gray-700 mb-8 text-lg">
            Contact our containerization experts today to learn how we can help you transform your applications.
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

export default Containerization; 