import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaRobot, FaNetworkWired, FaBrain, FaUserCog, FaExchangeAlt, FaLightbulb, FaDatabase, FaCogs, FaChartLine } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const AgenticAI = () => {
  const [activeAgent, setActiveAgent] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Dynamic agent positions
  const [agentPositions, setAgentPositions] = useState([]);
  
  useEffect(() => {
    const generatePositions = () => {
      const positions = [];
      const count = 8;
      const radius = 200;
      const centerX = 500;
      const centerY = 300;
      
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        const role = ['Analyzer', 'Planner', 'Executor', 'Monitor', 'Learner', 'Coordinator', 'Optimizer', 'Validator'][i];
        positions.push({ x, y, role });
      }
      setAgentPositions(positions);
    };
    
    generatePositions();
  }, []);

  // Enhanced Agent Network Animation
  const AgentNetworkAnimation = () => {
    return (
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <svg className="w-full h-full" viewBox="0 0 1000 600">
          {/* Enhanced grid pattern */}
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2"/>
            <circle cx="20" cy="20" r="1" fill="currentColor" fillOpacity="0.2"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Neural network connections */}
          {agentPositions.map((agent, i) => (
            <g key={`agent-group-${i}`}>
              {agentPositions.map((target, j) => {
                if (j <= i) return null;
                const isActive = activeAgent === i || activeAgent === j;
                
                return (
                  <motion.path
                    key={`connection-${i}-${j}`}
                    d={`M ${agent.x} ${agent.y} Q ${500} ${300} ${target.x} ${target.y}`}
                    stroke="currentColor"
                    strokeWidth={isActive ? "2" : "1"}
                    strokeOpacity={isActive ? "0.6" : "0.2"}
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ 
                      pathLength: 1,
                      strokeDasharray: isActive ? "5,5" : "none"
                    }}
                    transition={{ 
                      duration: 1.5,
                      delay: i * 0.1,
                      repeat: isActive ? Infinity : 0,
                      repeatType: "reverse"
                    }}
                  />
                );
              })}

              {/* Enhanced agent nodes */}
              <motion.g
                onHoverStart={() => setActiveAgent(i)}
                onHoverEnd={() => setActiveAgent(null)}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <motion.circle
                  cx={agent.x}
                  cy={agent.y}
                  r="15"
                  fill="currentColor"
                  fillOpacity="0.8"
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: activeAgent === i ? 1.2 : 1,
                    filter: activeAgent === i ? "drop-shadow(0 0 10px currentColor)" : "none"
                  }}
                />
                
                <motion.circle
                  cx={agent.x}
                  cy={agent.y}
                  r="25"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeOpacity="0.3"
                  fill="none"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.1, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />

                <motion.text
                  x={agent.x}
                  y={agent.y + 30}
                  textAnchor="middle"
                  fill="currentColor"
                  fontSize="12"
                  opacity={activeAgent === i ? 1 : 0.7}
                >
                  {agent.role}
                </motion.text>

                {/* Data flow particles */}
                {activeAgent === i && (
                  <motion.circle
                    cx={agent.x}
                    cy={agent.y}
                    r="4"
                    fill="currentColor"
                    initial={{ scale: 0 }}
                    animate={{
                      scale: [0, 1, 0],
                      x: [agent.x, 500, agent.x],
                      y: [agent.y, 300, agent.y]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                )}
              </motion.g>
            </g>
          ))}

          {/* Enhanced central hub */}
          <g>
            <motion.circle
              cx="500"
              cy="300"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeOpacity="0.3"
              initial={{ scale: 0 }}
              animate={{ 
                scale: 1,
                rotate: 360
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.circle
              cx="500"
              cy="300"
              r="30"
              fill="currentColor"
              fillOpacity="0.2"
              initial={{ scale: 0 }}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.circle
              cx="500"
              cy="300"
              r="20"
              fill="currentColor"
              fillOpacity="0.8"
            />
          </g>
        </svg>
      </motion.div>
    );
  };

  const pageInfo = {
    hero: {
      title: "Agentic AI Solutions",
      description: "Harness the power of autonomous AI agents to transform your business processes and decision-making",
      icon: <FaRobot className="text-5xl mb-4" />,
      bgClass: "bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600"
    },
    overview: {
      title: "Autonomous AI Excellence",
      descriptions: [
        "Deploy intelligent AI agents that can understand, learn, and make decisions autonomously.",
        "Our agentic AI solutions combine advanced reasoning, learning, and decision-making capabilities to solve complex challenges."
      ]
    },
    benefits: {
      title: "Key Capabilities",
      items: [
        {
          icon: <FaBrain />,
          title: "Autonomous Decision Making",
          description: "AI agents that can make informed decisions based on complex data and scenarios."
        },
        {
          icon: <FaNetworkWired />,
          title: "Multi-Agent Systems",
          description: "Coordinated networks of AI agents working together to achieve goals."
        },
        {
          icon: <FaExchangeAlt />,
          title: "Adaptive Learning",
          description: "Agents that continuously learn and improve from interactions and feedback."
        },
        {
          icon: <FaUserCog />,
          title: "Process Automation",
          description: "Intelligent automation of complex business processes and workflows."
        },
        {
          icon: <FaLightbulb />,
          title: "Strategic Planning",
          description: "AI-driven strategic planning and resource optimization."
        }
      ]
    },
    approach: {
      title: "Our Approach",
      points: [
        "Assessment of agent implementation opportunities",
        "Agent architecture design and development",
        "Multi-agent system integration",
        "Performance monitoring and optimization",
        "Continuous learning and adaptation"
      ]
    },
    callToAction: {
      title: "Ready to Deploy Autonomous AI Agents?",
      description: "Contact us to discover how our agentic AI solutions can revolutionize your operations.",
      buttonText: "Get Started"
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Enhanced Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-900 via-violet-900 to-purple-900 text-white">
        <motion.div
          style={{ opacity, scale }}
          className="absolute inset-0"
        >
          <AgentNetworkAnimation />
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-6xl mb-6"
          >
            <FaRobot />
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl font-bold mb-6"
          >
            {pageInfo.hero.title}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl mb-8"
          >
            {pageInfo.hero.description}
          </motion.p>
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.7 }}
            className="bg-white text-violet-900 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90"
          >
            Explore Agentic AI
          </motion.button>
        </motion.div>

        {/* Animated wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-24" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <motion.path
              initial={{ d: "M0,100 C240,100 480,100 720,100 C960,100 1200,100 1440,100 L1440,100 L0,100 Z" }}
              animate={{ d: "M0,100 C240,0 480,0 720,0 C960,0 1200,0 1440,0 L1440,100 L0,100 Z" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{pageInfo.overview.title}</h2>
          <div className="space-y-4">
            {pageInfo.overview.descriptions.map((desc, index) => (
              <p key={index} className="text-lg text-gray-600 text-center">{desc}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">{pageInfo.benefits.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pageInfo.benefits.items.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-lg"
              >
                <div className="text-3xl text-violet-600 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{pageInfo.approach.title}</h2>
          <div className="space-y-4">
            {pageInfo.approach.points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-4"
              >
                <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center">
                  {index + 1}
                </div>
                <p className="text-lg text-gray-700">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{pageInfo.callToAction.title}</h2>
          <p className="text-xl mb-8">{pageInfo.callToAction.description}</p>
          <button className="bg-white text-violet-600 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
            {pageInfo.callToAction.buttonText}
          </button>
        </div>
      </section>
    </motion.div>
  );
};

export default AgenticAI; 