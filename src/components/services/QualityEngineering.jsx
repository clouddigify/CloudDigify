import React from 'react';
import { motion } from 'framer-motion';
import { FaVial, FaCheck, FaCogs, FaBug, FaRobot, FaUserFriends, FaTachometerAlt, FaClipboardCheck, FaChartLine, FaShieldAlt, FaBolt, FaRegLightbulb, FaMobileAlt, FaDesktop, FaDatabase } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const QualityEngineering = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Simple Static Visual Component
  const QualityVisual = () => {
    return (
      <div className="p-8 bg-white bg-opacity-10 rounded-lg shadow-lg mx-auto max-w-2xl mt-8">
        <div className="flex flex-col items-center">
          {/* Central Icon */}
          <div className="mb-6">
            <FaVial className="text-6xl text-blue-400" />
          </div>
          
          {/* Quality Elements */}
          <div className="w-full grid grid-cols-3 gap-4">
            {[
              { name: 'Test Automation', icon: FaRobot, color: '#3B82F6' },
              { name: 'Performance', icon: FaTachometerAlt, color: '#10B981' },
              { name: 'Security Testing', icon: FaShieldAlt, color: '#F59E0B' },
              { name: 'UAT', icon: FaUserFriends, color: '#EC4899' },
              { name: 'Monitoring', icon: FaChartLine, color: '#8B5CF6' },
              { name: 'Continuous Testing', icon: FaCogs, color: '#2563EB' },
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
            <span className="font-semibold">Comprehensive Quality Assurance</span>
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
              <FaVial className="text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Quality Engineering Excellence
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
              Deliver flawless digital experiences with our comprehensive quality engineering solutions. We help you build, test, and deploy with confidence.
            </p>
            
            <QualityVisual />
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
            Why Choose Our Quality Engineering Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaRegLightbulb,
                title: "Shift-Left Approach",
                description: "Our quality engineering experts integrate testing early in the development lifecycle, identifying issues before they become expensive problems."
              },
              {
                icon: FaBolt,
                title: "Automation Expertise",
                description: "We've automated over 10,000 test cases for clients, reducing testing time by 70% while increasing coverage and reliability."
              },
              {
                icon: FaClipboardCheck,
                title: "Industry-Leading Methodologies",
                description: "Our proprietary testing frameworks and methodologies have been refined across hundreds of enterprise projects in diverse industries."
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
                icon: FaRobot,
                title: "Test Automation",
                description: "We design and implement robust test automation frameworks that enable continuous testing and faster release cycles with higher confidence."
              },
              {
                icon: FaTachometerAlt,
                title: "Performance Engineering",
                description: "Our performance specialists identify bottlenecks and optimize your applications to handle peak loads and deliver exceptional user experiences."
              },
              {
                icon: FaBug,
                title: "Functional Testing",
                description: "We ensure your applications meet all functional requirements through comprehensive manual and automated testing strategies."
              },
              {
                icon: FaShieldAlt,
                title: "Security Testing",
                description: "Our security testing experts identify vulnerabilities and ensure your applications are protected against the latest threats and exploits."
              },
              {
                icon: FaMobileAlt,
                title: "Mobile & Cross-Platform Testing",
                description: "We validate your applications across devices, browsers, and operating systems to ensure consistent quality everywhere."
              },
              {
                icon: FaDatabase,
                title: "Data Quality Management",
                description: "We implement data validation processes that ensure the integrity, accuracy, and reliability of your critical business information."
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
                title: "Defect Reduction",
                value: "92%",
                description: "Fewer production defects through our comprehensive testing methodologies"
              },
              {
                title: "Time-to-Market",
                value: "70%",
                description: "Faster delivery through automated testing and continuous quality processes"
              },
              {
                title: "Test Coverage",
                value: "95%",
                description: "Comprehensive coverage of functionality, ensuring reliable applications"
              },
              {
                title: "Cost Savings",
                value: "65%",
                description: "Reduction in overall quality assurance costs through automation and efficiency"
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
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">Financial Services Quality Transformation</h3>
              <p className="text-gray-700 mb-6">
                A leading financial institution needed to accelerate their release cycles while maintaining strict quality and compliance standards.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Challenge</h4>
                  <p className="text-gray-600 text-sm">Manual testing processes causing 4-week release cycles and frequent production issues</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Solution</h4>
                  <p className="text-gray-600 text-sm">Implemented CI/CD pipeline with automated testing, performance monitoring, and security validation</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Results</h4>
                  <p className="text-gray-600 text-sm">Release cycles reduced to 1 week with 85% reduction in production defects</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center mt-8">
                <FaChartLine className="text-5xl text-indigo-500 mr-4" />
                <div>
                  <div className="text-3xl font-bold text-gray-900">98%</div>
                  <div className="text-gray-600">Test Automation Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Quality Engineering?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Partner with us to implement quality engineering practices that accelerate delivery while ensuring exceptional user experiences.
          </p>
          <button className="bg-white text-indigo-600 py-3 px-8 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
            Request a Quality Assessment
          </button>
        </div>
      </section>
    </div>
  );
};

export default QualityEngineering; 