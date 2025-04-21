import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaCloudUploadAlt,
  FaCogs,
  FaShieldAlt,
  FaChartLine,
  FaDatabase,
  FaLock,
  FaArrowRight
} from 'react-icons/fa';

const servicesList = [
  { 
    title: 'DevOps & CI/CD', 
    icon: <FaCogs />, 
    description: 'Streamline development workflows with robust DevOps practices.',
    path: '/services/devops' 
  },
  { 
    title: 'Cloud Migration', 
    icon: <FaCloudUploadAlt />, 
    description: 'Migrate your workloads to AWS, Azure, or OCI with ease.',
    path: '/services/cloud-migration' 
  },
  { 
    title: 'Infrastructure as Code', 
    icon: <FaChartLine />, 
    description: 'Automate infra provisioning and management at scale.',
    path: '/services/infrastructure-as-code' 
  },
  { 
    title: 'Managed Cloud Services', 
    icon: <FaDatabase />, 
    description: '24/7 management of your cloud environments.',
    path: '/services/managed-services' 
  },
  { 
    title: 'Architecture Design', 
    icon: <FaShieldAlt />, 
    description: 'Design scalable, fault‑tolerant architectures.',
    path: '/services/architecture-design' 
  },
  { 
    title: 'Security & Compliance', 
    icon: <FaLock />, 
    description: 'Ensure top‑tier security and compliance standards.',
    path: '/services/security-compliance' 
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cloud Solutions for Modern Enterprises</h1>
          <p className="text-xl opacity-90 mb-8">
            Comprehensive cloud services to transform, scale, and secure your business infrastructure
          </p>
        </div>
      </div>
    </section>

    {/* Services Grid */}
    <section className="py-16 px-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map(({ title, icon, description, path }) => (
          <div key={title} className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition flex flex-col h-full">
            <div className="text-4xl text-blue-600 mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4 flex-grow">{description}</p>
            <Link 
              to={path} 
              className="text-blue-600 font-medium inline-flex items-center mt-auto group"
            >
              Learn More 
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        ))}
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Cloud Infrastructure?</h2>
        <p className="text-gray-600 mb-8">
          Partner with CloudDigify for comprehensive cloud solutions that drive innovation and growth.
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

export default Services; 