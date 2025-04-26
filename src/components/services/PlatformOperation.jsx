import React from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaNetworkWired, FaCloud, FaExchangeAlt, FaShieldAlt, FaTachometerAlt, FaSyncAlt, FaClipboardCheck, FaUsers, FaTools, FaLightbulb, FaHeartbeat, FaDatabase, FaChartLine, FaSatelliteDish } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const PlatformOperation = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Simple Static Visual Component
  const PlatformVisual = () => {
    return (
      <div className="p-8 bg-white bg-opacity-10 rounded-lg shadow-lg mx-auto max-w-2xl mt-8">
        <div className="flex flex-col items-center">
          {/* Central Icon */}
          <div className="mb-6">
            <FaServer className="text-6xl text-blue-400" />
          </div>
          
          {/* Platform Components */}
          <div className="w-full grid grid-cols-3 gap-4">
            {[
              { name: 'Infrastructure', icon: FaNetworkWired, color: '#3B82F6' },
              { name: 'Cloud Services', icon: FaCloud, color: '#10B981' },
              { name: 'Monitoring', icon: FaTachometerAlt, color: '#F59E0B' },
              { name: 'Security', icon: FaShieldAlt, color: '#EC4899' },
              { name: 'Automation', icon: FaSyncAlt, color: '#8B5CF6' },
              { name: 'Integration', icon: FaExchangeAlt, color: '#2563EB' },
            ].map((layer, index) => (
              <div 
                key={index}
                className="bg-white bg-opacity-5 p-4 rounded-lg border flex flex-col items-center text-center"
                style={{ borderColor: layer.color }}
              >
                <layer.icon className="text-2xl mb-2" style={{ color: layer.color }} />
                <div className="text-white text-xs font-medium">{layer.name}</div>
              </div>
            ))}
          </div>
          
          {/* Central Element */}
          <div className="mt-8 bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 rounded-full shadow-md text-white">
            <span className="font-semibold">Seamless Platform Operations</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative h-[650px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="text-white">
            <div className="text-5xl mb-6 flex justify-center">
              <FaServer className="text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Enterprise Platform Operations
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
              Maximize reliability, security, and performance with our expert platform operations services. We manage your infrastructure so you can focus on your core business.
            </p>
            
            <PlatformVisual />
          </div>
        </div>
        
        {/* Wave SVG at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path
              d="M0,100 C240,0 480,0 720,0 C960,0 1200,0 1440,0 L1440,100 L0,100 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-gray-900 text-center mb-12"
          >
            Why Choose Our Platform Operations Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaHeartbeat,
                title: "24/7 Expert Support",
                description: "Our certified platform specialists provide round-the-clock monitoring and support, ensuring 99.99% uptime for your critical systems."
              },
              {
                icon: FaTools,
                title: "Automation Excellence",
                description: "We've implemented over 5,000 automation workflows for clients, reducing manual operations by 75% and virtually eliminating human error."
              },
              {
                icon: FaLightbulb,
                title: "Proactive Optimization",
                description: "Our proactive approach to platform management has saved clients an average of 35% on infrastructure costs while improving performance."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <feature.icon className="text-4xl text-indigo-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            ref={ref}
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-gray-900 text-center mb-16"
          >
            Our Comprehensive Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaNetworkWired,
                title: "Infrastructure Management",
                description: "We design, deploy, and manage scalable infrastructure solutions across on-premises, cloud, and hybrid environments to meet your specific business needs."
              },
              {
                icon: FaClipboardCheck,
                title: "Platform Monitoring",
                description: "Our advanced monitoring systems track performance, availability, and security metrics in real-time, providing actionable insights and early problem detection."
              },
              {
                icon: FaSyncAlt,
                title: "Automation & Orchestration",
                description: "We implement comprehensive automation solutions that streamline operations, reduce manual tasks, and enable consistent, error-free deployments."
              },
              {
                icon: FaShieldAlt,
                title: "Security Operations",
                description: "Our platform security specialists implement robust protection measures, conduct regular vulnerability assessments, and ensure compliance with industry standards."
              },
              {
                icon: FaDatabase,
                title: "Database Operations",
                description: "We manage and optimize your database environments for maximum performance, reliability, and data integrity across all major database technologies."
              },
              {
                icon: FaCloud,
                title: "Cloud Operations",
                description: "Our cloud experts optimize your cloud infrastructure for cost-efficiency, performance, and scalability while ensuring seamless integration with existing systems."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <feature.icon className="text-4xl text-indigo-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            className="text-4xl font-bold text-gray-900 text-center mb-16"
          >
            Business Benefits
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "System Uptime",
                value: "99.99%",
                description: "Our platform operations ensure near-perfect availability for your critical systems"
              },
              {
                title: "Cost Reduction",
                value: "35%",
                description: "Average infrastructure cost savings through optimization and automation"
              },
              {
                title: "Incident Resolution",
                value: "83%",
                description: "Faster incident resolution compared to industry average response times"
              },
              {
                title: "Operational Efficiency",
                value: "75%",
                description: "Reduction in manual operations through our automation solutions"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                <div className="text-4xl font-bold text-white mb-2">{benefit.value}</div>
                <p className="text-indigo-100">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            className="text-4xl font-bold text-gray-900 text-center mb-12"
          >
            Success Story
          </motion.h2>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl mx-auto">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">Healthcare Provider Transformation</h3>
              <p className="text-gray-700 mb-6">
                A leading healthcare provider needed to modernize their aging IT infrastructure to improve reliability and support rapid business growth.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Challenge</h4>
                  <p className="text-gray-600 text-sm">Frequent outages and poor performance impacting critical patient care systems and staff productivity</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Solution</h4>
                  <p className="text-gray-600 text-sm">Implemented hybrid cloud platform with automated operations, comprehensive monitoring, and disaster recovery</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Results</h4>
                  <p className="text-gray-600 text-sm">Zero unplanned downtime in 18 months and 40% reduction in IT operational costs</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center mt-8">
                <FaChartLine className="text-5xl text-indigo-500 mr-4" />
                <div>
                  <div className="text-3xl font-bold text-gray-900">15 Minutes</div>
                  <div className="text-gray-600">Average Incident Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Optimize Your Platform Operations?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Partner with us for reliable, secure, and efficient platform operations that power your business growth.
          </p>
          <button className="bg-white text-indigo-600 py-3 px-8 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
            Schedule a Platform Assessment
          </button>
        </div>
      </section>
    </div>
  );
};

export default PlatformOperation; 