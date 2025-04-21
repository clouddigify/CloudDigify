import React from 'react';
import { motion } from 'framer-motion';

const posts = [
  { title: '5 Cloud Cost‑Saving Tips', excerpt: 'Optimize your spend …', link: '#' },
  { title: 'CI/CD Best Practices',     excerpt: 'Automate with confidence …', link: '#' },
  { title: 'OCI vs. AWS vs. Azure',    excerpt: 'Which fits your needs? …', link: '#' }
];

const Blogs = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <section className="py-16 px-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-12">Latest Articles</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map(({ title, excerpt, link }) => (
          <div key={title} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{excerpt}</p>
            <a href={link} className="text-blue-600 font-semibold hover:underline">
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
  </motion.div>
);

export default Blogs; 