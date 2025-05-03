import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaDocker, FaCloud, FaServer, FaNetworkWired, FaShieldAlt } from 'react-icons/fa';
import { SiKubernetes, SiHelm, SiRancher, SiIstio, SiPrometheus } from 'react-icons/si';
import SEO from '../../common/SEO';

const KubernetesTraining = () => {
  const certifications = [
    {
      title: 'Kubernetes Fundamentals',
      levels: ['Beginner'],
      icon: <SiKubernetes className="text-3xl" />,
      description: 'Learn core Kubernetes concepts and architecture',
      duration: '8 weeks',
      popular: true,
    },
    {
      title: 'Container Orchestration',
      levels: ['Intermediate'],
      icon: <FaDocker className="text-3xl" />,
      description: 'Master Docker and Kubernetes deployment',
      duration: '10 weeks',
      popular: true,
    },
    {
      title: 'Kubernetes Security',
      levels: ['Advanced'],
      icon: <FaShieldAlt className="text-3xl" />,
      description: 'Implement security best practices in Kubernetes',
      duration: '8 weeks',
    },
    {
      title: 'Cloud Native Architecture',
      levels: ['Advanced'],
      icon: <FaCloud className="text-3xl" />,
      description: 'Design cloud-native applications with Kubernetes',
      duration: '12 weeks',
    },
    {
      title: 'Kubernetes Operations',
      levels: ['Advanced'],
      icon: <FaServer className="text-3xl" />,
      description: 'Day 2 operations and cluster management',
      duration: '10 weeks',
    },
  ];

  const features = [
    {
      title: 'Hands-on Labs',
      description: 'Practice with real Kubernetes clusters',
    },
    {
      title: 'CNCF Alignment',
      description: 'Training aligned with CNCF certification standards',
    },
    {
      title: 'Expert Instruction',
      description: 'Learn from certified Kubernetes administrators',
    },
    {
      title: 'Enterprise Focus',
      description: 'Real-world enterprise deployment scenarios',
    },
  ];

  return (
    <>
      <SEO
        title="Kubernetes Training | CloudDigify"
        description="Master Kubernetes and container orchestration with CloudDigify's hands-on training, labs, and real-world projects."
        canonicalUrl="https://clouddigify.com/training/kubernetes"
        keywords={['Kubernetes training', 'container orchestration', 'CloudDigify']}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
      >
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 py-20">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <SiKubernetes className="text-6xl mb-6" />
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Kubernetes Training
                  </h1>
                  <p className="text-xl mb-8">
                    Master container orchestration with comprehensive Kubernetes training
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/contact"
                      className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
                    >
                      Get Started
                    </Link>
                    <button
                      onClick={() => document.getElementById('courses').scrollIntoView({ behavior: 'smooth' })}
                      className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
                    >
                      View Courses
                    </button>
                  </div>
                </motion.div>
              </div>
              <div className="md:w-1/2">
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
                >
                  <h2 className="text-2xl font-semibold mb-4">Program Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div key={index} className="bg-white/10 rounded-lg p-4">
                        <h3 className="font-semibold mb-2">{feature.title}</h3>
                        <p className="text-sm">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Certification Tracks */}
        <div id="courses" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Kubernetes Certification Tracks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-blue-600">{cert.icon}</div>
                    {cert.popular && (
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        Popular
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.levels.map((level, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded"
                      >
                        {level}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{cert.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Duration: {cert.duration}</span>
                    <Link
                      to="/contact"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Kubernetes Ecosystem Tools</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              <div className="flex flex-col items-center">
                <SiKubernetes className="text-4xl text-blue-600 mb-2" />
                <span>Kubernetes</span>
              </div>
              <div className="flex flex-col items-center">
                <FaDocker className="text-4xl text-blue-600 mb-2" />
                <span>Docker</span>
              </div>
              <div className="flex flex-col items-center">
                <SiHelm className="text-4xl text-blue-600 mb-2" />
                <span>Helm</span>
              </div>
              <div className="flex flex-col items-center">
                <SiIstio className="text-4xl text-blue-600 mb-2" />
                <span>Istio</span>
              </div>
              <div className="flex flex-col items-center">
                <SiPrometheus className="text-4xl text-blue-600 mb-2" />
                <span>Prometheus</span>
              </div>
              <div className="flex flex-col items-center">
                <SiRancher className="text-4xl text-blue-600 mb-2" />
                <span>Rancher</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Master Kubernetes?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our comprehensive Kubernetes training program and become a certified container orchestration expert
            </p>
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default KubernetesTraining; 