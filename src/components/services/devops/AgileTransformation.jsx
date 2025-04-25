import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FaUsers, 
  FaSync, 
  FaRocket, 
  FaChartLine, 
  FaComments, 
  FaTasks, 
  FaUserCog, 
  FaRegLightbulb,
  FaCode,
  FaBug 
} from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const AgileTransformation = () => {
  const [activePhase, setActivePhase] = useState(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Agile Cycle Animation
  const AgileCycleAnimation = () => {
    const phases = [
      { id: 'plan', label: 'Plan', icon: FaTasks, angle: 0 },
      { id: 'develop', label: 'Develop', icon: FaCode, angle: 72 },
      { id: 'test', label: 'Test', icon: FaBug, angle: 144 },
      { id: 'deploy', label: 'Deploy', icon: FaRocket, angle: 216 },
      { id: 'review', label: 'Review', icon: FaChartLine, angle: 288 }
    ];

    const radius = 150;
    const centerX = 500;
    const centerY = 250;

    return (
      <motion.div
        className="relative w-full h-[500px] overflow-visible mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <svg className="w-full h-full" viewBox="0 0 1000 500">
          {/* Circular Path */}
          <motion.circle
            cx={centerX}
            cy={centerY}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />

          {/* Phases */}
          {phases.map((phase, index) => {
            const angle = (phase.angle * Math.PI) / 180;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            const isActive = activePhase === phase.id;

            return (
              <motion.g
                key={phase.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 1,
                  delay: index * 0.3,
                  ease: "easeOut"
                }}
                onMouseEnter={() => setActivePhase(phase.id)}
                onMouseLeave={() => setActivePhase(null)}
                style={{ pointerEvents: 'all' }}
              >
                {/* Connection to Center */}
                <motion.line
                  x1={centerX}
                  y1={centerY}
                  x2={x}
                  y2={y}
                  stroke={isActive ? "#60A5FA" : "rgba(255,255,255,0.2)"}
                  strokeWidth={isActive ? "3" : "1"}
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ 
                    duration: 1.5,
                    delay: index * 0.3,
                    ease: "easeOut"
                  }}
                />

                {/* Phase Node */}
                <motion.circle
                  cx={x}
                  cy={y}
                  r="40"
                  fill="rgba(96, 165, 250, 0.1)"
                  stroke="#60A5FA"
                  strokeWidth="2"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: isActive ? 1.2 : 1,
                    opacity: 1,
                    fillOpacity: isActive ? 0.2 : 0.1
                  }}
                  transition={{ 
                    duration: 0.8,
                    delay: index * 0.3,
                    ease: "easeOut"
                  }}
                  style={{ pointerEvents: 'all' }}
                />

                {/* Phase Icon */}
                <motion.g
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: isActive ? 1.2 : 1,
                    opacity: 1,
                    y: isActive ? -5 : 0
                  }}
                  transition={{ 
                    duration: 0.8,
                    delay: index * 0.3 + 0.2,
                    ease: "easeOut"
                  }}
                  style={{ pointerEvents: 'all' }}
                >
                  {React.createElement(phase.icon, {
                    x: x - 25,
                    y: y - 25,
                    width: 50,
                    height: 50,
                    className: "text-blue-400"
                  })}
                </motion.g>

                {/* Phase Label */}
                <motion.text
                  x={x}
                  y={y + 70}
                  textAnchor="middle"
                  fill="white"
                  fontSize="14"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isActive ? 1 : 0.7 }}
                  transition={{ 
                    duration: 0.8,
                    delay: index * 0.3 + 0.3
                  }}
                  style={{ pointerEvents: 'none' }}
                >
                  {phase.label}
                </motion.text>
              </motion.g>
            );
          })}

          {/* Central Hub */}
          <motion.circle
            cx={centerX}
            cy={centerY}
            r="50"
            fill="rgba(96, 165, 250, 0.1)"
            stroke="#60A5FA"
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1,
              opacity: 1,
              rotate: 360
            }}
            transition={{
              duration: 2,
              rotate: {
                duration: 3,
                ease: "easeOut"
              }
            }}
          />
        </svg>
      </motion.div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        <motion.div
          style={{ opacity, scale }}
          className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
        />
        
        <div className="relative z-10 container mx-auto px-4 pt-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <motion.div
              className="text-6xl mb-8 flex justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaSync className="text-white" />
            </motion.div>
            <motion.h1
              className="text-6xl font-bold mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Agile Transformation
            </motion.h1>
            <motion.p
              className="text-xl text-gray-200 mb-16 max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Transform your organization with agile methodologies and practices
            </motion.p>
            
            <AgileCycleAnimation />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2
            ref={ref}
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Key Features
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaUsers,
                title: "Team Collaboration",
                description: "Foster cross-functional team collaboration"
              },
              {
                icon: FaSync,
                title: "Iterative Development",
                description: "Implement sprint-based development cycles"
              },
              {
                icon: FaComments,
                title: "Daily Stand-ups",
                description: "Regular team communication and updates"
              },
              {
                icon: FaChartLine,
                title: "Performance Metrics",
                description: "Track and measure team velocity"
              },
              {
                icon: FaUserCog,
                title: "Continuous Learning",
                description: "Regular retrospectives and improvements"
              },
              {
                icon: FaRegLightbulb,
                title: "Innovation Culture",
                description: "Promote creativity and experimentation"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-700 rounded-lg p-8 hover:bg-gray-600 transition-colors"
              >
                <feature.icon className="text-4xl text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Benefits
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Time to Market",
                value: "50%",
                description: "Faster product delivery"
              },
              {
                title: "Team Productivity",
                value: "40%",
                description: "Increased team efficiency"
              },
              {
                title: "Customer Satisfaction",
                value: "80%",
                description: "Improved product quality"
              },
              {
                title: "Innovation Rate",
                value: "60%",
                description: "Enhanced innovation capability"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                <div className="text-4xl font-bold text-white mb-2">{benefit.value}</div>
                <p className="text-gray-200">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AgileTransformation; 