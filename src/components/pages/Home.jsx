import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionValue, useVelocity } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRocket, FaCloud, FaCogs, FaShieldAlt, FaDatabase, FaChartLine, FaLightbulb, FaArrowRight, FaPlay, FaMobileAlt, FaBrain, FaCode } from 'react-icons/fa';
import WhyChooseUs from '../sections/WhyChooseUs';
import Testimonials from '../sections/Testimonials';
import Partners from '../sections/Partners';
import QuickContact from '../sections/QuickContact';

const Home = () => {
  const targetRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [cursorVariant, setCursorVariant] = useState("default");

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const springConfig = { damping: 15, stiffness: 100 };
  const scaleSpring = useSpring(1, springConfig);
  const rotateSpring = useSpring(0, springConfig);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      scaleSpring.set(1 - (scroll * 0.001));
      rotateSpring.set(scroll * 0.1);
    };

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [scaleSpring, rotateSpring, mouseX, mouseY]);

  const services = [
    { 
      icon: <FaCloud />, 
      title: "Cloud Services", 
      description: "Modernize your infrastructure",
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      icon: <FaCode />, 
      title: "DevOps", 
      description: "Streamline your development",
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      icon: <FaShieldAlt />, 
      title: "Security", 
      description: "Protect your assets",
      gradient: "from-green-500 to-emerald-500"
    },
    { 
      icon: <FaDatabase />, 
      title: "Data Analytics", 
      description: "Unlock insights",
      gradient: "from-orange-500 to-red-500"
    },
    { 
      icon: <FaMobileAlt />, 
      title: "Digital Experience", 
      description: "Transform engagement",
      gradient: "from-indigo-500 to-purple-500"
    },
    { 
      icon: <FaBrain />, 
      title: "AI & Automation", 
      description: "Innovate with intelligence",
      gradient: "from-rose-500 to-pink-500"
    }
  ];

  const heroVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="relative overflow-hidden" ref={targetRef}>
      {/* Animated Cursor */}
      <motion.div
        className="fixed w-6 h-6 bg-blue-500 rounded-full pointer-events-none mix-blend-difference z-50"
        style={{
          x: mouseX,
          y: mouseY,
          scale: cursorVariant === "hover" ? 1.5 : 1
        }}
        animate={cursorVariant}
      />

      {/* Hero Section with Enhanced Parallax */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/grid.svg')",
            backgroundSize: "cover",
            y: useTransform(scrollYProgress, [0, 1], ["0%", "50%"]),
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.2])
          }}
        />
        
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.2,
                scale: Math.random() * 2
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
        
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center">
            <motion.div
              className="mb-8"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.02, 0.98, 1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img
                src="/illustrations/hero-illustration.svg"
                alt="Digital Transformation"
                className="w-64 h-64 mx-auto"
              />
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
              variants={itemVariants}
            >
              Transform Your Digital Future
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Accelerate your business with cloud-native solutions, AI-driven insights, and cutting-edge technology
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <Link 
                to="/contact"
                className="group inline-flex items-center px-8 py-4 rounded-full bg-white text-blue-900 font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                Get Started
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <FaArrowRight />
                </motion.span>
              </Link>

              <motion.button 
                className="inline-flex items-center px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <FaPlay className="mr-2" />
                Watch Demo
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-0 w-full h-32"
          style={{
            background: "linear-gradient(to top, white, transparent)",
            y: useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
          }}
        />
      </div>

      {/* Services Grid with Enhanced Hover Effects */}
      <div className="bg-white py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for your digital transformation journey</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <div className="relative p-8 rounded-2xl overflow-hidden">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-90`}
                    initial={{ opacity: 0.5 }}
                    whileHover={{ opacity: 0.9 }}
                  />
                  
                  <motion.div
                    className="absolute inset-0 bg-[url('/grid.svg')] bg-center"
                    style={{
                      opacity: 0.1,
                      scale: useTransform(mouseX, [0, window.innerWidth], [0.8, 1.2])
                    }}
                  />

                  <div className="relative z-10 text-white">
                    <motion.div
                      className="text-4xl mb-4"
                      animate={{
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      {service.icon}
                    </motion.div>
                    
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-white/90 mb-4">{service.description}</p>
                    
                    <motion.div
                      className="flex items-center text-white font-medium group"
                      whileHover={{ x: 5 }}
                    >
                      Learn More
                      <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section with Enhanced Counter Animation */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 py-24 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('/grid.svg')] bg-center"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.05, 0.1, 0.05]),
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.2])
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Clients Worldwide", icon: <FaCloud /> },
              { number: "1000+", label: "Projects Delivered", icon: <FaRocket /> },
              { number: "50+", label: "Cloud Experts", icon: <FaCogs /> },
              { number: "99.9%", label: "Client Satisfaction", icon: <FaChartLine /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="text-5xl text-blue-400 mb-4"
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div 
                  className="text-4xl font-bold text-white mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    delay: index * 0.2
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="relative rounded-3xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <motion.div
              className="absolute inset-0 bg-[url('/grid.svg')] bg-center"
              style={{
                opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.05, 0.1, 0.05]),
                scale: useTransform(scrollYProgress, [0, 1], [1, 1.1])
              }}
            />

            <div className="relative z-10 p-12 text-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Ready to Start Your Digital Transformation?
              </motion.h2>
              
              <motion.p 
                className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Let's collaborate to build innovative solutions that drive your business forward
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-full bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 group"
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  Get in Touch
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <FaArrowRight />
                  </motion.span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Other sections with enhanced animations */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <WhyChooseUs />
        <Testimonials />
        <Partners />
        <QuickContact />
      </motion.div>
    </div>
  );
};

export default Home; 