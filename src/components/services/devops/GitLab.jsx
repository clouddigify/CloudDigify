import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGitlab, FaCodeBranch, FaRocket, FaCheck, FaCloudDownloadAlt } from 'react-icons/fa';
import { SiAmazonaws, SiMicrosoftazure, SiGooglecloud, SiDocker, SiKubernetes, SiSlack, SiJira, SiGitlab } from 'react-icons/si';
import ServiceInquiryForm from '../../common/ServiceInquiryForm';
import SEO from '../../common/SEO';

const GitLabDevOps = () => {
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <SEO
        title="GitLab DevOps Services | CloudDigify"
        description="Unify your DevOps lifecycle with GitLab: automation, CI/CD, and integrated security."
        canonicalUrl="https://clouddigify.com/services/devops/gitlab"
        keywords={['GitLab', 'DevOps', 'CI/CD', 'automation', 'CloudDigify']}
      />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        {/* Hero Section */}
        <section className="relative h-[420px] flex items-center justify-center bg-gradient-to-r from-orange-600 to-pink-600">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <FaGitlab className="text-[180px] md:text-[240px] text-white/10" />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <motion.h1 className="text-5xl font-bold mb-4" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
              <span className="inline-flex items-center gap-3 justify-center">
                <FaGitlab className="inline-block text-white/80 text-4xl md:text-5xl mr-2" />
                GitLab DevOps Solutions
              </span>
            </motion.h1>
            <motion.p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
              Unify your software delivery with GitLab CI/CD, automation, and built-in security.
            </motion.p>
            <motion.button onClick={() => setShowInquiryForm(true)} className="px-8 py-3 bg-white text-orange-700 rounded-lg font-semibold hover:bg-orange-50 transition-colors flex items-center mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Get GitLab Consultation
            </motion.button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2 className="text-3xl font-bold text-gray-900 text-center mb-12" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
              Why GitLab for DevOps?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: FaCodeBranch, title: 'Source Control', description: 'Integrated version control and collaboration.' },
                { icon: FaRocket, title: 'GitLab CI/CD', description: 'Automate builds, tests, and deployments with powerful pipelines.' },
                { icon: FaCheck, title: 'Security & Compliance', description: 'Built-in security scanning and policy management.' },
                { icon: FaCloudDownloadAlt, title: 'DevOps Lifecycle', description: 'Manage the entire DevOps lifecycle in one platform.' },
                { icon: FaGitlab, title: 'Open Core Model', description: 'Benefit from open source innovation and enterprise features.' },
                { icon: FaRocket, title: 'Auto DevOps', description: 'Automated CI/CD pipelines with best practices out of the box.' },
                { icon: FaCheck, title: 'Merge Requests', description: 'Streamlined code review and collaboration.' },
                { icon: FaCloudDownloadAlt, title: 'Container Registry', description: 'Built-in Docker image registry for your projects.' },
                { icon: FaCheck, title: 'Issue Boards', description: 'Agile project management and tracking.' }
              ].map((feature, idx) => (
                <motion.div key={idx} className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 text-center" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
                  <feature.icon className="text-4xl text-orange-600 mb-4 mx-auto" />
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
                { title: 'Unified Platform', value: 'All-in-One', description: 'Manage code, CI/CD, and security in one place.' },
                { title: 'Faster Delivery', value: '4x', description: 'Accelerate your software delivery pipeline.' },
                { title: 'Security', value: 'Integrated', description: 'Security and compliance built into every stage.' }
              ].map((benefit, idx) => (
                <motion.div key={idx} className="bg-gradient-to-r from-orange-600 to-pink-600 rounded-lg p-8 shadow-lg text-white text-center" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
                  <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                  <div className="text-4xl font-bold mb-2">{benefit.value}</div>
                  <p className="text-orange-100">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Use Cases Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2 className="text-3xl font-bold text-gray-900 text-center mb-12" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
              Popular Use Cases
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: FaRocket, title: 'Auto DevOps', description: 'Automate the entire DevOps lifecycle with built-in best practices.' },
                { icon: FaCheck, title: 'Security & Compliance', description: 'Automated security scanning and compliance management.' },
                { icon: FaCloudDownloadAlt, title: 'Containerized Delivery', description: 'Build and deploy Docker containers with integrated registry.' },
                { icon: FaGitlab, title: 'Self-Hosted DevOps', description: 'Run GitLab on your own infrastructure for full control.' },
              ].map((useCase, idx) => (
                <motion.div key={idx} className="bg-gray-50 rounded-lg p-8 shadow border border-gray-100 text-center" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
                  <useCase.icon className="text-4xl text-orange-600 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ecosystem Integrations Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2 className="text-3xl font-bold text-gray-900 text-center mb-12" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
              Ecosystem Integrations
            </motion.h2>
            <div className="flex flex-wrap justify-center items-center gap-10 text-5xl text-gray-400">
              {[
                { icon: SiKubernetes, label: 'Kubernetes' },
                { icon: SiAmazonaws, label: 'AWS' },
                { icon: SiGooglecloud, label: 'Google Cloud' },
                { icon: SiDocker, label: 'Docker' },
                { icon: SiSlack, label: 'Slack' },
                { icon: SiJira, label: 'Jira' },
                { icon: SiMicrosoftazure, label: 'Azure' },
                { icon: SiGitlab, label: 'GitLab CI' },
              ].map(({ icon: Icon, label }, idx) => (
                <div key={label} className="relative group flex flex-col items-center">
                  <Icon className="transition-colors duration-200 group-hover:text-orange-500" />
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-900 text-white text-xs opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-10 transition-opacity duration-200">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inquiry Form Modal */}
        {showInquiryForm && (
          <ServiceInquiryForm isOpen={showInquiryForm} onClose={() => setShowInquiryForm(false)} serviceName="GitLab DevOps" />
        )}
      </motion.div>
    </>
  );
};

export default GitLabDevOps; 