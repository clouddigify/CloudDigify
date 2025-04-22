import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRocket, FaLightbulb, FaChartLine, FaShieldAlt, FaCloud, FaCogs, FaCode, FaDatabase, FaMobile } from 'react-icons/fa';
import PageTemplate from '../templates/PageTemplate';

const Home = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.9]);

  const features = [
    {
      title: "Innovation at Speed",
      description: "Accelerate your digital transformation with cutting-edge solutions",
      icon: <FaRocket className="w-12 h-12 text-blue-500" />,
      delay: 0.2
    },
    {
      title: "Cloud Excellence",
      description: "Enterprise-grade cloud infrastructure and migration services",
      icon: <FaCloud className="w-12 h-12 text-blue-500" />,
      delay: 0.3
    },
    {
      title: "Smart Analytics",
      description: "Data-driven insights powered by advanced analytics",
      icon: <FaChartLine className="w-12 h-12 text-blue-500" />,
      delay: 0.4
    }
  ];

  const services = [
    {
      icon: <FaCloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Seamless cloud migration and management",
      gradient: "from-blue-500 to-indigo-600",
      path: "/services/cloud"
    },
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Custom Development",
      description: "Tailored software solutions for your needs",
      gradient: "from-purple-500 to-pink-600",
      path: "/services/development"
    },
    {
      icon: <FaDatabase className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Transform data into actionable insights",
      gradient: "from-green-500 to-teal-600",
      path: "/services/analytics"
    }
  ];

  const pageInfo = {
    type: 'home',
    title: 'Cloud Solutions for Digital Transformation',
    description: 'Accelerate your business with cloud-native solutions and digital innovation',
    heroImage: '/images/hero-bg.jpg',
    overview: {
      title: 'Transform Your Business',
      description: 'CloudDigify helps enterprises accelerate their digital transformation journey with innovative cloud solutions and expert services.',
      points: [
        'Cloud-Native Solutions',
        'Digital Innovation',
        'Enterprise Transformation',
        'Expert Consultation'
      ]
    }
  };

  const coreServices = [
    {
      icon: <FaCloud className="text-5xl text-blue-600" />,
      title: 'Cloud Services',
      description: 'Comprehensive cloud solutions for modern enterprises',
      features: [
        'Cloud Migration',
        'Infrastructure Optimization',
        'Cloud Security',
        'Managed Services'
      ],
      path: '/services/cloud-services',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaCode className="text-5xl text-indigo-600" />,
      title: 'DevOps & Engineering',
      description: 'Streamline development and operations',
      features: [
        'CI/CD Pipeline',
        'Infrastructure as Code',
        'Containerization',
        'Microservices'
      ],
      path: '/services/devops',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <FaShieldAlt className="text-5xl text-green-600" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security solutions',
      features: [
        'Security Assessment',
        'Compliance Management',
        'Threat Protection',
        'Identity Management'
      ],
      path: '/services/security',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FaDatabase className="text-5xl text-rose-600" />,
      title: 'Data & Analytics',
      description: 'Turn data into actionable insights',
      features: [
        'Data Engineering',
        'Analytics Platform',
        'Business Intelligence',
        'Machine Learning'
      ],
      path: '/services/data-analytics',
      gradient: 'from-rose-500 to-pink-500'
    }
  ];

  const highlights = [
    {
      icon: <FaRocket className="text-4xl text-blue-600" />,
      title: 'Digital Innovation',
      description: 'Drive innovation with cutting-edge technology solutions'
    },
    {
      icon: <FaLightbulb className="text-4xl text-indigo-600" />,
      title: 'Industry Expertise',
      description: 'Deep domain knowledge across multiple industries'
    },
    {
      icon: <FaChartLine className="text-4xl text-green-600" />,
      title: 'Proven Results',
      description: 'Track record of successful digital transformations'
    },
    {
      icon: <FaMobile className="text-4xl text-rose-600" />,
      title: 'Expert Team',
      description: 'Certified professionals with extensive experience'
    }
  ];

  const stats = [
    { number: '500+', label: 'Enterprise Clients' },
    { number: '1000+', label: 'Projects Delivered' },
    { number: '99.9%', label: 'System Uptime' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div ref={targetRef} className="relative overflow-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-600/90" />
          <div className="absolute inset-0 bg-[url('/illustrations/hero-pattern.svg')] bg-center opacity-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <img
              src="/illustrations/hero-illustration.svg"
              alt="Digital Transformation"
              className="w-64 h-64 mx-auto"
            />
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Transform Your Digital Future
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Innovative solutions for the modern enterprise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group px-8 py-4 rounded-full bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <motion.span
                className="inline-block ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>

        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "50%"]) }}
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"
        />
      </section>

      {/* Features Section with Floating Cards */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose CloudDigify
            </h2>
            <p className="text-xl text-gray-600">
              Experience the future of digital transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: feature.delay }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="mb-6 relative">
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="absolute inset-0 bg-blue-500/10 rounded-full"
                  />
                  <div className="relative">{feature.icon}</div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase with 3D Cards */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions for your digital needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50
                }}
                className={`bg-gradient-to-br ${service.gradient} p-8 rounded-2xl text-white transform perspective-1000`}
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-blue-100 mb-6">{service.description}</p>
                <Link
                  to={service.path}
                  className="inline-flex items-center text-white hover:underline group"
                >
                  Learn more
                  <motion.svg
                    className="w-5 h-5 ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section with Counter Animation */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100 }}
                className="text-4xl font-bold text-blue-600 mb-2"
              >
                500+
              </motion.div>
              <p className="text-gray-600">Projects Delivered</p>
            </motion.div>
            {/* Add more statistics here */}
          </div>
        </div>
      </section>

      {/* CTA Section with Animated Background */}
      <section className="py-20 relative overflow-hidden">
        <motion.div
          style={{
            scale: useTransform(scrollYProgress, [0, 1], [1.2, 1]),
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 0.8, 1])
          }}
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600"
        />
        <div className="absolute inset-0 bg-[url('/illustrations/cta-pattern.svg')] bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            >
              Let's discuss how we can help accelerate your digital journey
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 rounded-full bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey
                <motion.svg
                  className="w-5 h-5 ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 