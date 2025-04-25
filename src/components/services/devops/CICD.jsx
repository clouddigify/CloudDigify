import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCode, FaRocket, FaGithub, FaDocker, FaCloudUploadAlt, FaCheckCircle, FaBug, FaChartLine, FaCogs } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const CICD = () => {
  const [activeStage, setActiveStage] = useState(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const pipelineStages = [
    { id: 'code', title: 'Code', icon: FaCode, color: 'blue' },
    { id: 'build', title: 'Build', icon: FaRocket, color: 'green' },
    { id: 'test', title: 'Test', icon: FaBug, color: 'purple' },
    { id: 'deploy', title: 'Deploy', icon: FaCloudUploadAlt, color: 'orange' },
    { id: 'monitor', title: 'Monitor', icon: FaChartLine, color: 'red' }
  ];

  // Pipeline Animation
  const PipelineAnimation = () => {
    const stages = [
      { id: 'code', label: 'Code', icon: FaCode, angle: 0, color: '#60A5FA' },
      { id: 'build', label: 'Build', icon: FaCogs, angle: 72, color: '#34D399' },
      { id: 'test', label: 'Test', icon: FaBug, angle: 144, color: '#A78BFA' },
      { id: 'deploy', label: 'Deploy', icon: FaRocket, angle: 216, color: '#F97316' },
      { id: 'monitor', label: 'Monitor', icon: FaChartLine, angle: 288, color: '#EC4899' }
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
          {/* Pipeline Circle */}
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

          {/* Flow Connections */}
          {stages.map((stage, index) => {
            const nextIndex = (index + 1) % stages.length;
            const currentAngle = (stage.angle * Math.PI) / 180;
            const nextAngle = (stages[nextIndex].angle * Math.PI) / 180;
            
            const x1 = centerX + radius * Math.cos(currentAngle);
            const y1 = centerY + radius * Math.sin(currentAngle);
            const x2 = centerX + radius * Math.cos(nextAngle);
            const y2 = centerY + radius * Math.sin(nextAngle);
            
            const controlX = centerX + radius * 1.2 * Math.cos((stage.angle + 36) * Math.PI / 180);
            const controlY = centerY + radius * 1.2 * Math.sin((stage.angle + 36) * Math.PI / 180);

            return (
              <motion.path
                key={`flow-${stage.id}`}
                d={`M ${x1} ${y1} Q ${controlX} ${controlY} ${x2} ${y2}`}
                fill="none"
                stroke={`url(#gradient-${stage.id})`}
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{
                  duration: 2,
                  delay: index * 0.3,
                  ease: "easeOut",
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 1
                }}
              />
            );
          })}

          {/* Gradients for flow lines */}
          <defs>
            {stages.map((stage, index) => {
              const nextStage = stages[(index + 1) % stages.length];
              return (
                <linearGradient
                  key={`gradient-${stage.id}`}
                  id={`gradient-${stage.id}`}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor={stage.color} />
                  <stop offset="100%" stopColor={nextStage.color} />
                </linearGradient>
              );
            })}
          </defs>

          {/* Stages */}
          {stages.map((stage, index) => {
            const angle = (stage.angle * Math.PI) / 180;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            const isActive = activeStage === stage.id;

            return (
              <motion.g
                key={stage.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 1,
                  delay: index * 0.3,
                  ease: "easeOut"
                }}
                onMouseEnter={() => setActiveStage(stage.id)}
                onMouseLeave={() => setActiveStage(null)}
                style={{ pointerEvents: 'all' }}
              >
                {/* Connection to Center */}
                <motion.line
                  x1={centerX}
                  y1={centerY}
                  x2={x}
                  y2={y}
                  stroke={isActive ? stage.color : "rgba(255,255,255,0.2)"}
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

                {/* Stage Node */}
                <motion.circle
                  cx={x}
                  cy={y}
                  r="40"
                  fill={`${stage.color}1A`} // 10% opacity
                  stroke={stage.color}
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

                {/* Stage Icon */}
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
                  {React.createElement(stage.icon, {
                    x: x - 25,
                    y: y - 25,
                    width: 50,
                    height: 50,
                    style: { color: stage.color }
                  })}
                </motion.g>

                {/* Stage Label */}
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
                  {stage.label}
                </motion.text>
              </motion.g>
            );
          })}

          {/* Central Hub with Rotating Elements */}
          <motion.g>
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
                opacity: 1
              }}
              transition={{
                duration: 2
              }}
            />
            
            {/* Inner rotating circles */}
            {[30, 40].map((radius, index) => (
              <motion.circle
                key={`hub-ring-${index}`}
                cx={centerX}
                cy={centerY}
                r={radius}
                fill="none"
                stroke="#60A5FA"
                strokeWidth="2"
                strokeDasharray="3,6"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: 1,
                  opacity: 0.5,
                  rotate: 360
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.5
                }}
                style={{
                  transformOrigin: `${centerX}px ${centerY}px`
                }}
              />
            ))}
          </motion.g>
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
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
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
              <FaRocket className="text-white" />
            </motion.div>
            <motion.h1
              className="text-6xl font-bold mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              DevOps & CI/CD
            </motion.h1>
            <motion.p
              className="text-xl text-gray-200 mb-16 max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Accelerate your software delivery with automated pipelines and DevOps best practices
            </motion.p>
            
            <PipelineAnimation />
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
                icon: FaGithub,
                title: "Source Control Integration",
                description: "Seamless integration with Git and other version control systems"
              },
              {
                icon: FaDocker,
                title: "Container Support",
                description: "Built-in support for Docker and container orchestration"
              },
              {
                icon: FaRocket,
                title: "Automated Deployments",
                description: "Zero-touch deployment to any environment"
              },
              {
                icon: FaBug,
                title: "Automated Testing",
                description: "Comprehensive testing at every stage"
              },
              {
                icon: FaCheckCircle,
                title: "Quality Gates",
                description: "Enforce quality standards automatically"
              },
              {
                icon: FaChartLine,
                title: "Metrics & Analytics",
                description: "Real-time pipeline analytics and insights"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-700 rounded-lg p-8 hover:bg-gray-600 transition-colors"
              >
                <feature.icon className="text-4xl text-blue-500 mb-4" />
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
                title: "Faster Time to Market",
                value: "60%",
                description: "Reduction in deployment time"
              },
              {
                title: "Improved Quality",
                value: "80%",
                description: "Reduction in production defects"
              },
              {
                title: "Team Efficiency",
                value: "40%",
                description: "Increase in developer productivity"
              },
              {
                title: "Cost Reduction",
                value: "30%",
                description: "Reduction in operational costs"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8"
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

export default CICD;
