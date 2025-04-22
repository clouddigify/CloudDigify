import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaDatabase, 
  FaCogs, 
  FaCode, 
  FaShieldAlt, 
  FaUsers, 
  FaNetworkWired, 
  FaMobileAlt, 
  FaPlane,
  FaArrowRight 
} from 'react-icons/fa';

// Expanded industries list matching our navigation
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
    title: 'Communications & Media',
    icon: <FaMobileAlt size={36} className="mb-4 text-blue-600" />, 
    description: 'Solutions for telecom service providers, media, and entertainment companies.',
    path: '/industries/communications',
    highlights: ['5G enablement', 'OSS/BSS transformation', 'Content delivery', 'Digital publishing'] 
  },
  { 
    title: 'Travel & Hospitality',
    icon: <FaPlane size={36} className="mb-4 text-blue-600" />, 
    description: 'Digital solutions for travel, transport, and hospitality businesses.',
    path: '/industries/travel',
    highlights: ['Booking platforms', 'Customer experience', 'Loyalty programs', 'Operational efficiency'] 
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

      {/* Overview Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Industry Expertise</h2>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12">
            CloudDigify combines deep industry expertise with cutting-edge technology to deliver solutions 
            that address the specific challenges and opportunities in your sector.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Domain Specialists</h3>
              <p className="text-gray-700">Our teams include industry veterans who understand your business challenges.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Regulatory Compliance</h3>
              <p className="text-gray-700">We ensure solutions meet industry-specific compliance requirements.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Pre-built Solutions</h3>
              <p className="text-gray-700">Industry-specific accelerators to speed up your digital transformation.</p>
            </div>
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

      {/* Value Proposition */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Industry Solutions</h2>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="mr-4 mt-1 text-blue-600 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Deep Industry Knowledge</h3>
                    <p className="text-gray-600">Our specialists have years of experience in your specific industry.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 mt-1 text-blue-600 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Faster Time to Value</h3>
                    <p className="text-gray-600">Industry-specific accelerators reduce implementation time by up to 40%.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 mt-1 text-blue-600 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Compliance-First Approach</h3>
                    <p className="text-gray-600">We build solutions with industry regulations like HIPAA, PCI-DSS, and GDPR in mind.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 mt-1 text-blue-600 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Outcome-Driven</h3>
                    <p className="text-gray-600">We focus on business outcomes specific to your industry metrics.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Our Industry Partnerships</h3>
              <p className="text-gray-700 mb-6">
                We collaborate with leading technology providers and industry consortiums to deliver best-in-class solutions:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Financial Services Technology Consortium</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Healthcare Information and Management Systems Society</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Manufacturing Enterprise Solutions Association</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Retail Industry Leaders Association</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Energy & Utilities Alliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories Across Industries</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow">
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
            
            <div className="bg-white p-8 rounded-lg shadow">
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

          <div className="text-center mt-10">
            <Link 
              to="/case-studies" 
              className="inline-flex items-center text-blue-600 font-medium"
            >
              View All Case Studies
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Industry?</h2>
          <p className="text-gray-700 mb-8 text-lg">
            Contact our experts to discuss how our industry-focused cloud solutions can help you overcome challenges and drive innovation in your sector.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Schedule a Consultation
            </Link>
            <Link
              to="/industries/financial-services"
              className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              Explore Financial Services
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Industries; 