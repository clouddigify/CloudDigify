import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCloudUploadAlt,
  FaCogs,
  FaShieldAlt,
  FaChartLine,
  FaDatabase,
  FaLock
} from 'react-icons/fa';

const servicesList = [
  { title: 'DevOps & CI/CD',         icon: <FaCogs />,           description: 'Streamline development workflows with robust DevOps practices.' },
  { title: 'Cloud Migration',        icon: <FaCloudUploadAlt />,  description: 'Migrate your workloads to AWS, Azure, or OCI with ease.' },
  { title: 'Infrastructure as Code', icon: <FaChartLine />,       description: 'Automate infra provisioning and management at scale.' },
  { title: 'Managed Cloud Services', icon: <FaDatabase />,        description: '24/7 management of your cloud environments.' },
  { title: 'Architecture Design',    icon: <FaShieldAlt />,       description: 'Design scalable, fault‑tolerant architectures.' },
  { title: 'Security & Compliance',  icon: <FaLock />,            description: 'Ensure top‑tier security and compliance standards.' }
];

const Services = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <section className="py-16 px-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map(({ title, icon, description }) => (
          <div key={title} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="text-4xl text-blue-600 mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  </motion.div>
);

export default Services; 