import React from 'react';
import { motion } from 'framer-motion';

const courses = [
  { title: 'AWS Fundamentals',   description: 'Cloud basics for beginners.' },
  { title: 'Azure Administrator', description: 'Manage Azure resources at scale.' },
  { title: 'OCI Architect',       description: 'Design OCI architectures.' }
];

const Training = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <section className="py-16 px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Training Programs</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map(({ title, description }) => (
          <div key={title} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  </motion.div>
);

export default Training; 