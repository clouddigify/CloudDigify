import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChartLine, FaCloudDownloadAlt, FaCog, FaServer, FaCoins, FaArrowRight } from 'react-icons/fa';

const CloudOptimization = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-16"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cloud Optimization Services</h1>
            <p className="text-xl opacity-90 mb-8">
              Maximize ROI and performance with our expert cloud optimization strategies
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6">Optimizing Your Cloud Infrastructure</h2>
              <p className="mb-6 text-lg text-gray-700">
                Cloud optimization is the process of correctly selecting and assigning the right resources to a workload or application. When workloads run optimally in the cloud, they meet performance requirements while minimizing costs.
              </p>
              <p className="mb-10 text-lg text-gray-700">
                At CloudDigify, we help organizations reduce cloud waste, improve performance, and increase operational efficiency through our comprehensive optimization services.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Our Optimization Approach</h3>
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <FaChartLine size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Performance Analysis</h4>
                    <p className="text-gray-700">
                      We analyze your current cloud infrastructure to identify bottlenecks, resource utilization patterns, and performance issues.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <FaCoins size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Cost Optimization</h4>
                    <p className="text-gray-700">
                      We identify underutilized resources, recommend right-sizing instances, and implement automated scaling to reduce unnecessary expenses.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <FaCog size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Architecture Refinement</h4>
                    <p className="text-gray-700">
                      We optimize your cloud architecture to take advantage of managed services, serverless computing, and modern design patterns.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <FaCloudDownloadAlt size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Resource Management</h4>
                    <p className="text-gray-700">
                      We implement resource tagging, implement governance policies, and establish monitoring systems to maintain optimization over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/3 bg-gray-50 p-6 rounded-lg sticky top-24">
              <h3 className="text-xl font-semibold mb-4">Benefits</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Reduced cloud spending by 20-40%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Improved application performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Enhanced resource utilization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Better governance and cost control</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Environmentally responsible computing</span>
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

      {/* Case Studies Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Success Stories</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-semibold mb-3">E-commerce Platform Cost Reduction</h3>
            <p className="mb-4 text-gray-700">
              A growing e-commerce platform was facing escalating cloud costs as their customer base expanded. Our optimization team helped them reduce their monthly cloud bill by 35% while improving performance through:
            </p>
            <ul className="space-y-2 mb-4 pl-5 list-disc text-gray-700">
              <li>Implementing auto-scaling based on traffic patterns</li>
              <li>Moving infrequently accessed data to lower-cost storage tiers</li>
              <li>Converting on-demand instances to reserved instances</li>
              <li>Implementing serverless functions for event-driven workloads</li>
            </ul>
            <p className="text-gray-700">
              These improvements not only reduced costs but also improved their application's responsiveness during peak shopping periods.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Cloud Infrastructure?</h2>
          <p className="text-gray-700 mb-8 text-lg">
            Contact our cloud optimization experts today to discover how we can help you maximize ROI and performance.
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

export default CloudOptimization; 