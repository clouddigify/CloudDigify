import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCodeBranch, FaRocket, FaCheck, FaCloudDownloadAlt } from 'react-icons/fa';
import ServiceInquiryForm from '../../common/ServiceInquiryForm';
import SEO from '../../common/SEO';

const GitHubDevOps = () => {
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <SEO
        title="GitHub DevOps Services | CloudDigify"
        description="Streamline your DevOps workflows with GitHub integration, automation, and CI/CD pipelines."
        canonicalUrl="https://clouddigify.com/services/devops/github"
        keywords={['GitHub', 'DevOps', 'CI/CD', 'automation', 'CloudDigify']}
      />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        {/* Hero Section */}
        <section className="relative h-[420px] flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700">
          <div className="relative z-10 text-center text-white px-4">
            <motion.h1 className="text-5xl font-bold mb-4" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
              GitHub DevOps Solutions
            </motion.h1>
            <motion.p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
              Accelerate your software delivery with GitHub Actions, automation, and seamless CI/CD pipelines.
            </motion.p>
            <motion.button onClick={() => setShowInquiryForm(true)} className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Get GitHub Consultation
            </motion.button>
          </div>
          <FaGithub className="absolute right-8 bottom-8 text-[120px] text-white/10 hidden md:block" />
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2 className="text-3xl font-bold text-gray-900 text-center mb-12" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
              Why GitHub for DevOps?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: FaCodeBranch, title: 'Source Control', description: 'Industry-leading version control and collaboration.' },
                { icon: FaRocket, title: 'GitHub Actions', description: 'Automate builds, tests, and deployments with native CI/CD.' },
                { icon: FaCheck, title: 'Security & Compliance', description: 'Built-in code scanning, secret detection, and policy enforcement.' },
                { icon: FaCloudDownloadAlt, title: 'Marketplace Integrations', description: 'Thousands of DevOps tools and actions ready to use.' },
                { icon: FaGithub, title: 'Open Source Ecosystem', description: 'Leverage the world\'s largest open source community.' },
                { icon: FaRocket, title: 'Codespaces', description: 'Cloud-powered development environments for rapid onboarding.' },
                { icon: FaCheck, title: 'Dependabot', description: 'Automated dependency updates and vulnerability alerts.' },
                { icon: FaCloudDownloadAlt, title: 'Project Boards', description: 'Agile project management and tracking built-in.' },
              ].map((feature, idx) => (
                <motion.div key={idx} className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 text-center" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
                  <feature.icon className="text-4xl text-gray-900 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2 className="text-3xl font-bold text-gray-900 text-center mb-12" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
              Business Benefits
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Faster Releases', value: '5x', description: 'Accelerate your release cycles with automation.' },
                { title: 'Collaboration', value: 'Global', description: 'Work seamlessly across distributed teams.' },
                { title: 'Security', value: 'Built-in', description: 'Integrated security and compliance tools.' }
              ].map((benefit, idx) => (
                <motion.div key={idx} className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-lg p-8 shadow-lg text-white text-center" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
                  <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                  <div className="text-4xl font-bold mb-2">{benefit.value}</div>
                  <p className="text-gray-200">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Inquiry Form Modal */}
        {showInquiryForm && (
          <ServiceInquiryForm isOpen={showInquiryForm} onClose={() => setShowInquiryForm(false)} serviceName="GitHub DevOps" />
        )}
      </motion.div>
    </>
  );
};

export default GitHubDevOps; 