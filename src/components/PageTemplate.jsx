import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';

const PageTemplate = ({ pageInfo, children }) => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 py-24 md:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {pageInfo.title}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {pageInfo.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumbs */}
      {pageInfo.breadcrumbs && (
        <div className="bg-gray-50 border-b">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <ol className="flex items-center space-x-2 text-sm">
              {pageInfo.breadcrumbs.map((crumb, index) => (
                <React.Fragment key={crumb.path}>
                  {index > 0 && (
                    <span className="text-gray-400">/</span>
                  )}
                  <li>
                    <Link
                      to={crumb.path}
                      className={`hover:text-blue-600 ${
                        index === pageInfo.breadcrumbs.length - 1
                          ? 'text-gray-600 font-medium'
                          : 'text-gray-500'
                      }`}
                    >
                      {crumb.title}
                    </Link>
                  </li>
                </React.Fragment>
              ))}
            </ol>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>
    </motion.div>
  );
};

export default PageTemplate; 