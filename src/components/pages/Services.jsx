import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaCloud,
  FaCode,
  FaShieldAlt,
  FaDatabase,
  FaMobileAlt,
  FaBrain,
  FaServer,
  FaIndustry,
  FaProjectDiagram,
  FaCheckCircle,
  FaCubes,
  FaArrowRight
} from 'react-icons/fa';

// Main service categories - matching our nav structure
const serviceCategories = [
  {
    title: 'Cloud Services',
    icon: <FaCloud className="text-4xl text-blue-600 mb-4" />,
    description: 'Infrastructure modernization, cloud migration, optimization, and disaster recovery solutions.',
    path: '/services/cloud-infrastructure',
    featured: ['Cloud Migration', 'Cloud Optimization', 'Disaster Recovery']
  },
  {
    title: 'DevOps & Engineering',
    icon: <FaCode className="text-4xl text-blue-600 mb-4" />,
    description: 'CI/CD pipelines, infrastructure as code, containerization, and serverless architectures.',
    path: '/services/devops',
    featured: ['DevOps & CI/CD', 'Infrastructure as Code', 'Containerization']
  },
  {
    title: 'Security & Compliance',
    icon: <FaShieldAlt className="text-4xl text-blue-600 mb-4" />,
    description: 'Secure your cloud environments with advanced protection and compliance frameworks.',
    path: '/services/security-compliance',
    featured: ['Security & Compliance', 'Cyber Defense', 'Privacy Services']
  },
  {
    title: 'Data & Analytics',
    icon: <FaDatabase className="text-4xl text-blue-600 mb-4" />,
    description: 'Data warehousing, business intelligence, and advanced analytics solutions.',
    path: '/services/data-analytics',
    featured: ['Business Intelligence', 'Data Warehousing', 'Big Data Solutions']
  },
  {
    title: 'Digital Experiences',
    icon: <FaMobileAlt className="text-4xl text-blue-600 mb-4" />,
    description: 'Create engaging digital experiences with modern UI/UX and mobility solutions.',
    path: '/services/experience-design',
    featured: ['Experience Design', 'Enterprise Mobility', 'Digital Integration']
  },
  {
    title: 'AI & Automation',
    icon: <FaBrain className="text-4xl text-blue-600 mb-4" />,
    description: 'Intelligent automation, AI solutions, and cognitive services for business transformation.',
    path: '/services/artificial-intelligence',
    featured: ['Artificial Intelligence', 'Intelligent Automation', 'Cognitive Services']
  },
  {
    title: 'Enterprise Services',
    icon: <FaServer className="text-4xl text-blue-600 mb-4" />,
    description: 'Managed services, architecture design, and application development & maintenance.',
    path: '/services/managed-services',
    featured: ['Managed Cloud Services', 'Architecture Design', 'Application Development']
  },
  {
    title: 'Industry Solutions',
    icon: <FaIndustry className="text-4xl text-blue-600 mb-4" />,
    description: 'Industry 4.0, blockchain, and quality engineering for sector-specific needs.',
    path: '/services/industry-4-0',
    featured: ['Industry 4.0', 'Blockchain Solutions', 'Quality Engineering']
  },
  {
    title: 'Consulting Services',
    icon: <FaProjectDiagram className="text-4xl text-blue-600 mb-4" />,
    description: 'Strategic technology consulting and digital transformation advisory.',
    path: '/services/technology-consulting',
    featured: ['Digital Transformation', 'Enterprise Architecture', 'Business Process Consulting']
  },
  {
    title: 'Quality Assurance',
    icon: <FaCheckCircle className="text-4xl text-blue-600 mb-4" />,
    description: 'Comprehensive testing and quality engineering for software systems.',
    path: '/services/quality-assurance',
    featured: ['Test Automation', 'Performance Testing', 'Security Testing']
  },
  {
    title: 'Specialized Solutions',
    icon: <FaCubes className="text-4xl text-blue-600 mb-4" />,
    description: 'IoT, platform engineering, and smart city solutions for emerging technologies.',
    path: '/services/iot-solutions',
    featured: ['Platform Engineering', 'Smart City Solutions', 'Reimagined Enterprise']
  }
];

const Services = () => (
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Cloud & Digital Services</h1>
          <p className="text-xl opacity-90 mb-8">
            End-to-end solutions to transform, scale, and secure your enterprise technology landscape
          </p>
        </div>
      </div>
    </section>

    {/* Services Overview */}
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Our Service Portfolio</h2>
        <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12">
          CloudDigify offers a comprehensive suite of digital and cloud services to help enterprises 
          at every stage of their technology transformation journey.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-800">Cloud & Infrastructure</h3>
            <p className="text-gray-700">Modernize your IT infrastructure with our cloud-first approach, from migration to optimization.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-800">Digital Transformation</h3>
            <p className="text-gray-700">Reimagine your business processes and customer experiences with innovative digital solutions.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-800">Technology Excellence</h3>
            <p className="text-gray-700">Accelerate innovation with DevOps, quality engineering, and intelligent automation.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Services Categories */}
    <section className="py-16 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Service Categories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map(({ title, icon, description, path, featured }) => (
            <div key={title} className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition flex flex-col h-full">
              <div>{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{description}</p>
              
              <div className="mt-2 mb-4">
                <h4 className="font-medium text-gray-800 mb-2">Featured Services:</h4>
                <ul className="space-y-1">
                  {featured.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700 text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link 
                to={path} 
                className="text-blue-600 font-medium inline-flex items-center mt-auto group"
              >
                Explore {title}
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Approach Section */}
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Approach</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-4">
            <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 font-bold text-xl">1</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Assess</h3>
            <p className="text-gray-600">Evaluate your current environment and identify opportunities.</p>
          </div>
          
          <div className="text-center p-4">
            <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 font-bold text-xl">2</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Design</h3>
            <p className="text-gray-600">Create a tailored strategy and solution architecture.</p>
          </div>
          
          <div className="text-center p-4">
            <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 font-bold text-xl">3</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Implement</h3>
            <p className="text-gray-600">Execute with agility and following best practices.</p>
          </div>
          
          <div className="text-center p-4">
            <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 font-bold text-xl">4</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Optimize</h3>
            <p className="text-gray-600">Continuously improve performance and efficiency.</p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-16 px-6 bg-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Start Your Digital Transformation?</h2>
        <p className="text-gray-700 mb-8 text-lg">
          Partner with CloudDigify for comprehensive solutions that drive innovation and growth.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </Link>
          <Link
            to="/training"
            className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            Explore Training
          </Link>
        </div>
      </div>
    </section>
  </motion.div>
);

export default Services; 