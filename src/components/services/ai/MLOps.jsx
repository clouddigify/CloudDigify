import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCogs, FaCode, FaServer, FaChartLine, FaCloud, FaRocket, FaShieldAlt, FaDatabase, FaArrowRight, FaClock, FaRobot, FaUsersCog, FaCoins, FaLightbulb, FaSitemap, FaStream, FaNetworkWired, FaChartBar, FaGraduationCap } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import ServiceInquiryForm from '../../common/ServiceInquiryForm';

const MLOps = () => {
  const [hoveredNode, setHoveredNode] = useState(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [inquiryType, setInquiryType] = useState('MLOps');
  
  // Scroll to top when page loads/refreshes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const openInquiryForm = (serviceType) => {
    setInquiryType(`MLOps - ${serviceType}`);
    setShowInquiryForm(true);
  };

  const springProps = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)' },
    config: { tension: 300, friction: 20 }
  });

  const nodes = [
    { x: 40, y: 100, label: 'Data' },
    { x: 80, y: 80, label: 'Preprocess' },
    { x: 120, y: 100, label: 'Train' },
    { x: 160, y: 120, label: 'Deploy' },
    { x: 200, y: 100, label: 'Monitor' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Enhanced Pipeline Animation */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity, scale }}
          className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-[600px] h-[400px] relative"
          >
            {/* Enhanced Pipeline Animation */}
            <svg viewBox="0 0 240 160" className="w-full h-full">
              {/* Grid Background */}
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
              </pattern>
              <rect width="240" height="160" fill="url(#grid)" />

              {/* Connection Lines */}
              {nodes.slice(0, -1).map((node, i) => (
                <motion.path
                  key={i}
                  d={`M${node.x},${node.y} L${nodes[i + 1].x},${nodes[i + 1].y}`}
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth={hoveredNode === i ? "4" : "2"}
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: i * 0.2 }}
                />
              ))}

              {/* Data Flow Particles */}
              {nodes.slice(0, -1).map((node, i) => (
                <motion.circle
                  key={`particle-${i}`}
                  r={3}
                  fill="white"
                  initial={{ x: node.x, y: node.y }}
                  animate={{ 
                    x: nodes[i + 1].x,
                    y: nodes[i + 1].y,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "linear"
                  }}
                />
              ))}

              {/* Interactive Nodes */}
              {nodes.map((node, i) => (
                <g key={i}>
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r={8}
                    fill="white"
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: hoveredNode === i ? 1.2 : 1,
                      filter: hoveredNode === i ? "drop-shadow(0 0 8px white)" : "none"
                    }}
                    transition={{ duration: 0.3 }}
                    onMouseEnter={() => setHoveredNode(i)}
                    onMouseLeave={() => setHoveredNode(null)}
                    style={{ cursor: "pointer" }}
                  />
                  <motion.text
                    x={node.x}
                    y={node.y + 20}
                    textAnchor="middle"
                    fill="white"
                    fontSize="8"
                    opacity={hoveredNode === i ? 1 : 0.7}
                  >
                    {node.label}
                  </motion.text>
                </g>
              ))}

              {/* Central Hub */}
              <motion.circle
                cx="120"
                cy="100"
                r="25"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: 360
                }}
                transition={{
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  rotate: {
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
              />
            </svg>
          </motion.div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-bold mb-4"
          >
            CloudDigify MLOps Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Streamline your machine learning operations with automated pipelines to accelerate AI value delivery
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openInquiryForm('General Inquiry')}
            className="px-8 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-colors flex items-center mx-auto"
          >
            Explore MLOps Solutions <FaArrowRight className="ml-2" />
          </motion.button>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-24" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path
              d="M0,100 C240,0 480,0 720,0 C960,0 1200,0 1440,0 L1440,100 L0,100 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* MLOps Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-6"
            >
              CloudDigify MLOps Capabilities
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Comprehensive machine learning operations solutions to improve efficiency, reliability, and scalability of AI deployments
            </motion.p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: FaDatabase,
                title: "Data Management",
                description: "Automated data preparation and versioning to ensure consistent, high-quality inputs for your machine learning models"
              },
              {
                icon: FaCode,
                title: "Model Development",
                description: "Streamlined model training and experimentation frameworks that accelerate development cycles"
              },
              {
                icon: FaServer,
                title: "Model Deployment",
                description: "Efficient deployment pipelines that transition models from development to production environments seamlessly"
              },
              {
                icon: FaChartLine,
                title: "Performance Monitoring",
                description: "Real-time monitoring and alerting for model performance and drift detection"
              },
              {
                icon: FaShieldAlt,
                title: "Governance & Security",
                description: "Built-in security and governance controls to ensure compliance with industry standards and regulations"
              },
              {
                icon: FaRocket,
                title: "Scalable Infrastructure",
                description: "Cloud-native infrastructure that scales with your machine learning workloads and business needs"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative transform hover:scale-105 transition-transform cursor-pointer"
                onClick={() => openInquiryForm(item.title)}
              >
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-6">
                    <item.icon className="text-3xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MLOps Metrics */}
      <section className="py-20 bg-gradient-to-r from-orange-900 to-red-900 text-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-16"
          >
            MLOps Impact Metrics
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Deployment Speed", value: "10x", icon: FaRocket },
              { title: "Model Accuracy", value: "95%", icon: FaChartLine },
              { title: "Infrastructure Cost", value: "-40%", icon: FaCloud },
              { title: "Time to Market", value: "-60%", icon: FaCogs }
            ].map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <metric.icon className="text-5xl mb-4 mx-auto text-orange-300" />
                <div className="text-4xl font-bold mb-2">{metric.value}</div>
                <div className="text-lg text-orange-200">{metric.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Benefits of CloudDigify MLOps
            </h2>
            <p className="text-xl text-gray-600">
              Transform your AI initiatives with our enterprise-grade MLOps solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {[
              {
                icon: FaClock,
                title: "Accelerated Time-to-Value",
                description: "Reduce model deployment time from months to days with automated CI/CD pipelines and streamlined workflows, getting your AI solutions to market faster."
              },
              {
                icon: FaRobot,
                title: "Improved Model Performance",
                description: "Enhance model accuracy and reliability through continuous monitoring, automated testing, and intelligent retraining triggers."
              },
              {
                icon: FaUsersCog,
                title: "Enhanced Team Collaboration",
                description: "Bridge the gap between data scientists, engineers, and business stakeholders with unified workflows and comprehensive documentation."
              },
              {
                icon: FaCoins,
                title: "Reduced Operational Costs",
                description: "Minimize infrastructure and maintenance costs through optimization, automation, and efficient resource utilization."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => openInquiryForm('MLOps Benefits')}
                className="cursor-pointer"
              >
                <div className="flex items-start">
                  <div className="mr-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <item.icon className="text-2xl text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              CloudDigify MLOps Implementation Process
            </h2>
            <p className="text-xl text-gray-600">
              Our structured approach ensures successful MLOps adoption and long-term value
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: FaLightbulb,
                title: "Assessment & Strategy",
                description: "We evaluate your current ML infrastructure, processes, and team capabilities to develop a tailored MLOps roadmap."
              },
              {
                icon: FaSitemap,
                title: "MLOps Architecture",
                description: "Our team designs a scalable MLOps architecture aligned with your business goals and technology stack."
              },
              {
                icon: FaStream,
                title: "Pipeline Development",
                description: "We build automated CI/CD pipelines for data preparation, model training, testing, and deployment."
              },
              {
                icon: FaNetworkWired,
                title: "Systems Integration",
                description: "Seamless integration of your MLOps platform with existing data sources, business applications, and analytics tools."
              },
              {
                icon: FaChartBar,
                title: "Monitoring & Alerting",
                description: "Implementation of comprehensive monitoring for model performance, data drift, and infrastructure health."
              },
              {
                icon: FaGraduationCap,
                title: "Team Enablement",
                description: "We provide training and knowledge transfer to ensure your team can effectively operate and evolve the MLOps platform."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-all"
                onClick={() => openInquiryForm('MLOps Implementation')}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 bg-gradient-to-r from-orange-100 to-red-100 p-4 rounded-full">
                    <item.icon className="text-3xl text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Inquiry Form Modal */}
      {showInquiryForm && (
        <ServiceInquiryForm
          isOpen={showInquiryForm}
          onClose={() => setShowInquiryForm(false)}
          serviceName={inquiryType}
        />
      )}
    </div>
  );
};

export default MLOps; 