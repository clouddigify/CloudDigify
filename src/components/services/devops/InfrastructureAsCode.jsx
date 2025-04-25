import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCogs, FaServer, FaCloud, FaShieldAlt, FaDatabase, FaUsers, FaChartLine, FaHandshake, FaCertificate, FaGlobe, FaCode } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const InfrastructureAsCode = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    const lastPath = sessionStorage.getItem('currentPath');
    const currentPath = window.location.pathname;
    if (lastPath === currentPath) setIsFirstLoad(false);
    sessionStorage.setItem('currentPath', currentPath);
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden pt-32">
        <motion.div style={{ opacity, scale }} className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <FaCogs className="text-5xl mb-6 mx-auto" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Infrastructure as Code</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Automate your infrastructure deployment with code-driven architecture
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0,100 C240,0 480,0 720,0 C960,0 1200,0 1440,0 L1440,100 L0,100 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 ref={ref} initial={{ y: 20, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} className="text-4xl font-bold text-center mb-16">
            Key Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{ icon: FaServer, title: "Version Control", description: "Track infrastructure changes with Git" }, { icon: FaCloud, title: "Multi-Cloud Support", description: "Deploy to any cloud provider" }, { icon: FaCogs, title: "Automation", description: "Automated provisioning and updates" }, { icon: FaShieldAlt, title: "Security", description: "Built-in security best practices" }, { icon: FaServer, title: "Scalability", description: "Scale infrastructure on demand" }, { icon: FaDatabase, title: "State Management", description: "Track and manage infrastructure state" }].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl border"
              >
                <feature.icon className="text-4xl text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 initial={{ y: 20, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} className="text-4xl font-bold text-center mb-16">
            Business Benefits
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[{ title: "Accelerated Time-to-Market", value: "90%", description: "Faster infrastructure deployment enabling rapid business expansion" }, { title: "Operational Efficiency", value: "75%", description: "Reduction in manual configuration and management overhead" }, { title: "Cost Optimization", value: "45%", description: "Infrastructure cost reduction through automation and optimization" }, { title: "Resource Utilization", value: "65%", description: "Improved resource allocation and management efficiency" }, { title: "Compliance Success", value: "99%", description: "Adherence to security and compliance requirements" }, { title: "Innovation Speed", value: "80%", description: "Faster implementation of new technologies and features" }].map((benefit, index) => (
              <motion.div key={index} initial={{ scale: 0.9, opacity: 0 }} animate={inView ? { scale: 1, opacity: 1 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                <div className="text-4xl font-bold mb-2">{benefit.value}</div>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 initial={{ y: 20, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} className="text-4xl font-bold text-center mb-16">
            Why Choose Us for IaC Implementation
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{ icon: FaUsers, title: "Expert Team", description: "Certified professionals with 10+ years of experience in infrastructure automation" }, { icon: FaChartLine, title: "Proven Track Record", description: "Successfully delivered 200+ IaC projects across various industries" }, { icon: FaHandshake, title: "End-to-End Support", description: "Comprehensive services from assessment to implementation and maintenance" }, { icon: FaCertificate, title: "Industry Recognition", description: "Award-winning solutions and partnerships with leading cloud providers" }, { icon: FaGlobe, title: "Global Presence", description: "Supporting clients across multiple regions with 24/7 availability" }, { icon: FaCode, title: "Best Practices", description: "Implementation of industry-standard practices and security protocols" }].map((feature, index) => (
              <motion.div key={index} initial={{ y: 20, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl border">
                <feature.icon className="text-4xl text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default InfrastructureAsCode;
