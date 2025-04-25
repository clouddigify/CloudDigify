import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaCode, FaBug, FaRocket, FaSync, FaChartBar, FaClock, FaHandshake, FaCogs, FaLightbulb } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const AgileTransformation = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Simple Static Agile Visualization 
  const AgileVisual = () => {
    const phases = [
      { name: 'Plan', icon: FaUsers, color: '#3B82F6', description: 'Define requirements & plan' },
      { name: 'Develop', icon: FaCode, color: '#10B981', description: 'Build features & code' },
      { name: 'Test', icon: FaBug, color: '#F59E0B', description: 'Quality assurance' },
      { name: 'Deploy', icon: FaRocket, color: '#EC4899', description: 'Release to production' },
      { name: 'Review', icon: FaChartBar, color: '#8B5CF6', description: 'Gather feedback' },
    ];
    
    return (
      <div className="p-6 bg-white bg-opacity-10 rounded-xl shadow-lg mx-auto max-w-2xl mt-8">
        <div className="grid grid-cols-5 gap-3">
          {phases.map((phase, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center"
            >
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-md mb-2" 
                style={{ background: `${phase.color}30`, border: `2px solid ${phase.color}` }}
              >
                <phase.icon className="text-xl" style={{ color: phase.color }} />
              </div>
              <div className="text-white text-sm font-medium mb-1">{phase.name}</div>
              <div className="text-gray-300 text-xs">{phase.description}</div>
              
              {/* Arrow to next phase */}
              {index < phases.length - 1 && (
                <div className="absolute" style={{ 
                  right: '-15px', 
                  top: '20px',
                  transform: 'translateY(-50%)',
                  color: 'rgba(255,255,255,0.3)'
                }}>
                  →
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Central Element */}
        <div className="flex justify-center items-center mt-4">
          <div className="bg-gradient-to-r from-indigo-400 to-purple-400 px-4 py-1 rounded-full shadow-md flex items-center gap-2">
            <FaSync className="text-white" />
            <span className="text-white text-sm font-semibold">Continuous Improvement</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative h-[650px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="text-white">
            <div className="text-5xl mb-6 flex justify-center">
              <FaSync className="text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Agile Transformation
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
              Transform your organization with iterative delivery and continuous improvement
            </p>
            
            <AgileVisual />
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

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            ref={ref}
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-gray-900 text-center mb-16"
          >
            Key Features
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaUsers,
                title: "Cross-Functional Teams",
                description: "Build teams around business capabilities and outcomes"
              },
              {
                icon: FaRocket,
                title: "Iterative Delivery",
                description: "Develop in short cycles with regular customer feedback"
              },
              {
                icon: FaHandshake,
                title: "Scrum Framework",
                description: "Structured approach with defined roles and ceremonies"
              },
              {
                icon: FaCogs,
                title: "CI/CD Integration",
                description: "Automate testing and deployment for faster delivery"
              },
              {
                icon: FaChartBar,
                title: "Metrics & Visibility",
                description: "Track progress with dashboards and KPIs"
              },
              {
                icon: FaLightbulb,
                title: "Continuous Improvement",
                description: "Regular retrospectives to adapt and optimize"
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            className="text-4xl font-bold text-gray-900 text-center mb-16"
          >
            Benefits
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Time to Market",
                value: "50%",
                description: "Faster product delivery times"
              },
              {
                title: "Team Productivity",
                value: "35%",
                description: "Increased team output and efficiency"
              },
              {
                title: "Quality",
                value: "60%",
                description: "Fewer defects and production issues"
              },
              {
                title: "Customer Satisfaction",
                value: "45%",
                description: "Improved customer experience and feedback"
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
    </div>
  );
};

export default AgileTransformation; 