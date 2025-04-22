import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaDatabase, FaCogs, FaCode, FaShieldAlt, FaUsers, FaNetworkWired, FaMobileAlt, FaArrowRight } from 'react-icons/fa';

const industriesList = [
  { 
    title: 'Financial Services',
    icon: <FaDatabase size={36} className="mb-4 text-blue-600" />, 
    description: 'Digital solutions for banking, insurance, and capital markets.',
    path: '/industries/financial-services',
    highlights: ['Digital banking transformation', 'Insurance automation', 'Fraud detection & prevention', 'Regulatory compliance'] 
  },
  { 
    title: 'Manufacturing',
    icon: <FaCogs size={36} className="mb-4 text-blue-600" />, 
    description: 'Smart manufacturing and Industry 4.0 solutions.',
    path: '/industries/manufacturing',
    highlights: ['Industrial IoT', 'Predictive maintenance', 'Supply chain optimization', 'Digital twins'] 
  },
  { 
    title: 'Technology',
    icon: <FaCode size={36} className="mb-4 text-blue-600" />, 
    description: 'Solutions for software, hardware and telecommunications companies.',
    path: '/industries/technology',
    highlights: ['Product engineering', 'Platform modernization', 'API ecosystems', 'SaaS transformation'] 
  },
  { 
    title: 'Healthcare',
    icon: <FaShieldAlt size={36} className="mb-4 text-blue-600" />, 
    description: 'Digital solutions for healthcare providers and life sciences.',
    path: '/industries/healthcare',
    highlights: ['Telehealth platforms', 'Clinical analytics', 'Patient engagement', 'Regulatory compliance'] 
  },
  { 
    title: 'Retail & CPG',
    icon: <FaUsers size={36} className="mb-4 text-blue-600" />, 
    description: 'Omnichannel retail and consumer goods solutions.',
    path: '/industries/retail-cpg',
    highlights: ['E-commerce platforms', 'Supply chain optimization', 'Customer analytics', 'Personalization engines'] 
  },
  { 
    title: 'Energy & Utilities',
    icon: <FaNetworkWired size={36} className="mb-4 text-blue-600" />, 
    description: 'Digital transformation for energy and utility companies.',
    path: '/industries/energy-utilities',
    highlights: ['Smart grid solutions', 'Energy analytics', 'Asset management', 'Sustainable energy'] 
  },
  { 
    title: 'Telecommunications',
    icon: <FaMobileAlt size={36} className="mb-4 text-blue-600" />, 
    description: 'Solutions for telecom service providers and network operators.',
    path: '/industries/telecommunications',
    highlights: ['5G enablement', 'OSS/BSS transformation', 'Network virtualization', 'Customer experience'] 
  }
];

const Industries = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-16"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Industry-Focused Cloud Solutions</h1>
            <p className="text-xl opacity-90 mb-8">
              Cloud technologies tailored to the unique needs of your industry
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Industry Solutions</h2>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12">
            At CloudDigify, we understand that each industry faces unique challenges. Our industry-focused solutions are designed to address specific needs while leveraging our cloud expertise across all sectors.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {industriesList.map(({ title, icon, description, path, highlights }) => (
              <div key={title} className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition flex flex-col h-full">
                <div className="text-center mb-4">{icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
                <p className="text-gray-600 mb-4 text-center">{description}</p>
                
                <div className="mt-auto">
                  <h4 className="font-medium text-gray-800 mb-2">Key Capabilities:</h4>
                  <ul className="space-y-1 mb-6">
                    {highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-700 text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to={path} 
                    className="text-blue-600 font-medium inline-flex items-center group"
                  >
                    Learn More 
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories Across Industries</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-sm text-blue-600 font-medium mb-2">Financial Services</div>
              <h3 className="text-2xl font-semibold mb-3">Digital Transformation for a Global Bank</h3>
              <p className="text-gray-700 mb-4">
                We helped a leading global bank modernize their core banking infrastructure, moving from legacy systems to a cloud-native platform that reduced operational costs by 40% and accelerated new feature deployment by 60%.
              </p>
              <Link 
                to="/case-studies/banking-transformation" 
                className="text-blue-600 font-medium inline-flex items-center group"
              >
                Read Case Study 
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-sm text-blue-600 font-medium mb-2">Manufacturing</div>
              <h3 className="text-2xl font-semibold mb-3">Industry 4.0 Implementation</h3>
              <p className="text-gray-700 mb-4">
                Our team helped a manufacturing company implement IoT sensors and real-time analytics across their factory floor, resulting in a 28% decrease in downtime and 15% improvement in overall equipment effectiveness.
              </p>
              <Link 
                to="/case-studies/manufacturing-iot" 
                className="text-blue-600 font-medium inline-flex items-center group"
              >
                Read Case Study 
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Industry?</h2>
          <p className="text-gray-700 mb-8 text-lg">
            Contact our experts to discuss how our industry-focused cloud solutions can help you overcome challenges and drive innovation in your sector.
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Industries; 