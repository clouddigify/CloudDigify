import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCloudUploadAlt, FaRocket, FaChartLine, FaShieldAlt, FaDollarSign } from 'react-icons/fa';

const benefits = [
  {
    title: "Cost Optimization",
    description: "Reduce capital expenses and optimize operational costs with pay-as-you-go cloud models.",
    icon: <FaDollarSign className="text-blue-500 text-2xl" />
  },
  {
    title: "Enhanced Scalability",
    description: "Easily scale resources up or down based on demand, ensuring optimal performance at all times.",
    icon: <FaRocket className="text-blue-500 text-2xl" />
  },
  {
    title: "Improved Security",
    description: "Leverage advanced security features and compliance certifications offered by cloud providers.",
    icon: <FaShieldAlt className="text-blue-500 text-2xl" />
  },
  {
    title: "Business Agility",
    description: "Respond quickly to market changes and drive innovation with modern cloud technologies.",
    icon: <FaChartLine className="text-blue-500 text-2xl" />
  }
];

const phases = [
  {
    number: "01",
    title: "Assessment & Discovery",
    description: "We assess your current infrastructure, applications, and dependencies to develop a comprehensive migration strategy."
  },
  {
    number: "02",
    title: "Planning & Design",
    description: "We create a detailed migration plan with architecture designs, timeline, resource allocation, and risk mitigation strategies."
  },
  {
    number: "03",
    title: "Migration Execution",
    description: "We systematically migrate your applications, data, and infrastructure to the cloud with minimal disruption."
  },
  {
    number: "04",
    title: "Optimization & Management",
    description: "We continuously optimize your cloud environment for performance, security, and cost-efficiency."
  }
];

const CloudMigration = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {/* Hero Section */}
    <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cloud Migration Services</h1>
          <p className="text-xl opacity-90 mb-8">
            Seamlessly transition your workloads to AWS, Azure, or Oracle Cloud with our expert migration services.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Request Migration Assessment
          </Link>
        </div>
      </div>
    </section>

    {/* Overview */}
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Accelerate Your Cloud Journey</h2>
            <p className="text-gray-600 mb-6">
              Cloud migration is a strategic move that can transform your IT infrastructure, enhance performance, and drive innovation. At CloudDigify, we specialize in helping organizations seamlessly migrate their applications, data, and infrastructure to the cloud with minimal disruption.
            </p>
            <p className="text-gray-600">
              Our comprehensive migration services cover every aspect of the cloud transition, from assessment and planning to execution and optimization. Whether you're moving from on-premises to the cloud or transitioning between cloud providers, our experienced team ensures a smooth and successful migration.
            </p>
          </div>
          
          <div className="lg:pl-10">
            <div className="bg-blue-50 p-8 rounded-lg border border-blue-100">
              <div className="text-5xl text-blue-600 mb-6">
                <FaCloudUploadAlt />
              </div>
              <h3 className="text-2xl font-bold mb-4">Cloud Platforms We Support</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Amazon Web Services (AWS)</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Microsoft Azure</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Oracle Cloud Infrastructure (OCI)</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Google Cloud Platform (GCP)</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Hybrid and Multi-Cloud Environments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Migration Approaches */}
    <section className="py-16 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Our Migration Approaches</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          We tailor our migration strategy to your specific needs, choosing the most appropriate approach for each workload.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 text-sm font-bold">1</span>
              Rehost (Lift & Shift)
            </h3>
            <p className="text-gray-600">
              Quickly move applications to the cloud with minimal modifications, ideal for large-scale migrations with tight timelines.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 text-sm font-bold">2</span>
              Replatform (Lift & Reshape)
            </h3>
            <p className="text-gray-600">
              Make targeted optimizations to take advantage of cloud capabilities while minimizing application changes.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 text-sm font-bold">3</span>
              Refactor / Rearchitect
            </h3>
            <p className="text-gray-600">
              Redesign applications to be cloud-native, fully leveraging cloud services for maximum benefits.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Migration Process */}
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Our Migration Process</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          We follow a proven, structured approach to ensure successful cloud migrations with minimal disruption.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {phases.map((phase, index) => (
            <div key={index} className="flex">
              <div className="mr-6">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  {phase.number}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-16 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Benefits of Cloud Migration</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Migrating to the cloud offers numerous advantages that can transform your business operations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex p-6 bg-white rounded-lg shadow-md">
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

    {/* Case Study */}
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="bg-blue-50 p-8 rounded-lg border border-blue-100">
          <h2 className="text-3xl font-bold mb-6 text-center">Case Study: Financial Services Migration</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-4">
                A leading financial services firm needed to migrate their legacy infrastructure to the cloud to improve scalability, reduce costs, and enhance security. They had over 200 applications, 5TB of data, and strict compliance requirements.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">The Challenge</h3>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>Migrating business-critical applications with zero downtime</li>
                <li>Ensuring compliance with financial industry regulations</li>
                <li>Integrating complex legacy systems with modern cloud services</li>
                <li>Maintaining robust security throughout the migration process</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3">Our Solution</h3>
              <p className="text-gray-700 mb-4">
                CloudDigify developed a comprehensive migration strategy using a phased approach:
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>Detailed assessment and discovery of all applications and dependencies</li>
                <li>Custom migration plans for each application based on its criticality</li>
                <li>Implementation of security controls exceeding regulatory requirements</li>
                <li>Zero-downtime migration using advanced replication techniques</li>
                <li>Comprehensive testing and validation at each migration phase</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-700 text-center">Results</h3>
              
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">40%</p>
                  <p className="text-gray-600">Reduction in infrastructure costs</p>
                </div>
                
                <div className="border-t border-gray-200 pt-4 text-center">
                  <p className="text-3xl font-bold text-blue-600">99.9%</p>
                  <p className="text-gray-600">System availability</p>
                </div>
                
                <div className="border-t border-gray-200 pt-4 text-center">
                  <p className="text-3xl font-bold text-blue-600">3x</p>
                  <p className="text-gray-600">Faster deployment of new features</p>
                </div>
                
                <div className="border-t border-gray-200 pt-4 text-center">
                  <p className="text-3xl font-bold text-blue-600">Zero</p>
                  <p className="text-gray-600">Security incidents during migration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-16 px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">How long does a typical cloud migration take?</h3>
            <p className="text-gray-600">
              The timeline varies depending on the complexity and scale of your environment. Simple migrations can take a few weeks, while complex enterprise migrations may take several months. We work with you to develop a phased approach that minimizes disruption.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Is there downtime during migration?</h3>
            <p className="text-gray-600">
              We design our migration strategies to minimize or eliminate downtime. In many cases, we can achieve zero-downtime migrations using advanced replication techniques and carefully planned cutover processes.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">How do you ensure security during migration?</h3>
            <p className="text-gray-600">
              Security is integrated into every phase of our migration process. We implement robust security controls, encrypt data in transit and at rest, and follow industry best practices. We also conduct thorough security assessments before, during, and after migration.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">What happens after the migration is complete?</h3>
            <p className="text-gray-600">
              We offer post-migration support and optimization services to ensure your cloud environment continues to perform optimally. This includes monitoring, optimization, cost management, and ongoing support as needed.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Cloud Migration Journey?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Partner with CloudDigify for a seamless, secure, and efficient migration to the cloud.
        </p>
        <Link 
          to="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Request a Migration Assessment
        </Link>
      </div>
    </section>
  </motion.div>
);

export default CloudMigration; 