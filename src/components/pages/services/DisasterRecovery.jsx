import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaSync, FaCloudDownloadAlt, FaClock, FaChartLine, FaArrowRight } from 'react-icons/fa';

const DisasterRecovery = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-16"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cloud Disaster Recovery Solutions</h1>
            <p className="text-xl opacity-90 mb-8">
              Protect your business with resilient cloud-based disaster recovery strategies
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6">Business Continuity in the Cloud Era</h2>
              <p className="mb-6 text-lg text-gray-700">
                In today's digital landscape, unplanned downtime can result in significant revenue loss, damage to reputation, and regulatory penalties. Our cloud disaster recovery solutions ensure your critical systems and data remain available even during catastrophic events.
              </p>
              <p className="mb-10 text-lg text-gray-700">
                At CloudDigify, we design, implement, and manage comprehensive disaster recovery solutions tailored to your specific business requirements and risk tolerance.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Our Disaster Recovery Approach</h3>
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <FaShieldAlt size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Risk Assessment & Business Impact Analysis</h4>
                    <p className="text-gray-700">
                      We identify critical systems, potential risks, and establish recovery point objectives (RPO) and recovery time objectives (RTO) based on your business needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <FaSync size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">DR Strategy Design</h4>
                    <p className="text-gray-700">
                      We create a comprehensive DR strategy leveraging cloud-native solutions such as multi-region deployments, automated failover, and data replication.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <FaCloudDownloadAlt size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Implementation & Testing</h4>
                    <p className="text-gray-700">
                      We implement your DR solution and conduct regular testing to ensure recovery procedures work as expected when needed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <FaClock size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Continuous Monitoring & Improvement</h4>
                    <p className="text-gray-700">
                      We provide ongoing monitoring, maintenance, and periodic reviews to keep your DR solution aligned with evolving business needs and technology changes.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Our DR Technologies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Multi-Region Replication</h4>
                  <p className="text-sm text-gray-700">Replicate data and services across multiple geographic regions</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Automated Failover</h4>
                  <p className="text-sm text-gray-700">Seamless transition to backup systems when primary systems fail</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Point-in-time Recovery</h4>
                  <p className="text-sm text-gray-700">Restore data to specific points in time before incidents</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Infrastructure as Code</h4>
                  <p className="text-sm text-gray-700">Rapidly redeploy infrastructure in recovery scenarios</p>
                </div>
              </div>
            </div>

            <div className="md:w-1/3 bg-gray-50 p-6 rounded-lg sticky top-24">
              <h3 className="text-xl font-semibold mb-4">Benefits</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Minimize business disruption during outages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Reduce Recovery Time Objectives (RTO)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Lower Recovery Point Objectives (RPO)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Meet regulatory compliance requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Cost-efficient compared to traditional DR solutions</span>
                </li>
              </ul>

              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="font-medium mb-2 text-blue-800">Did you know?</h4>
                <p className="text-sm text-blue-800">
                  According to industry research, companies that experience significant data loss without an adequate DR solution have a 93% chance of filing for bankruptcy within one year.
                </p>
              </div>

              <Link 
                to="/contact" 
                className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition duration-300"
              >
                Request DR Assessment
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
            <h3 className="text-2xl font-semibold mb-3">Financial Services Provider</h3>
            <p className="mb-4 text-gray-700">
              A regional financial services company needed to meet strict regulatory requirements for disaster recovery while minimizing costs. We implemented a cloud-based DR solution that:
            </p>
            <ul className="space-y-2 mb-4 pl-5 list-disc text-gray-700">
              <li>Reduced their recovery time objective from 24 hours to under 2 hours</li>
              <li>Implemented cross-region data replication with near-zero data loss</li>
              <li>Automated the recovery process to minimize human error</li>
              <li>Reduced DR infrastructure costs by 40% compared to their previous solution</li>
            </ul>
            <p className="text-gray-700">
              The solution not only met all regulatory requirements but was proven effective during a power outage that affected their primary data center.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Prepare Your Business for Any Eventuality</h2>
          <p className="text-gray-700 mb-8 text-lg">
            Don't wait for disaster to strike. Contact our experts today to develop a robust disaster recovery plan tailored to your business needs.
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

export default DisasterRecovery; 