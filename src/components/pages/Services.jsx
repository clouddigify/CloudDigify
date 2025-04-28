import React from 'react';
import SEO from '../common/SEO';

const Services = () => {
  return (
    <>
      <SEO 
        title="Our Services"
        description="Explore our comprehensive range of cloud, DevOps, and digital transformation services."
        canonicalUrl="https://clouddigify.com/services"
        keywords={['cloud services', 'devops', 'digital transformation', 'consulting']}
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Cloud Services */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Cloud Services</h2>
            <p className="text-gray-600 mb-4">
              Comprehensive cloud solutions including migration, optimization, and management.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Cloud Migration</li>
              <li>Cloud Optimization</li>
              <li>Cloud Management</li>
            </ul>
          </div>

          {/* DevOps Services */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">DevOps Services</h2>
            <p className="text-gray-600 mb-4">
              Streamline your development and operations with our DevOps solutions.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>CI/CD Implementation</li>
              <li>Infrastructure as Code</li>
              <li>Containerization</li>
            </ul>
          </div>

          {/* Digital Transformation */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Digital Transformation</h2>
            <p className="text-gray-600 mb-4">
              Transform your business with cutting-edge digital solutions.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Digital Strategy</li>
              <li>Process Automation</li>
              <li>Technology Consulting</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services; 