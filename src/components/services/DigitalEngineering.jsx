import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobile, FaCode, FaDatabase, FaCogs, FaCloud, FaDesktop, FaUserFriends, FaTools, FaCubes, FaRocket, FaChartLine, FaGlobe, FaTrophy, FaHandshake } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const DigitalEngineering = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Simple Static Visual Component
  const EngineeringVisual = () => {
    return (
      <div className="p-8 bg-white bg-opacity-10 rounded-lg shadow-lg mx-auto max-w-2xl mt-8">
        <div className="flex flex-col items-center">
          {/* Central Icon */}
          <div className="mb-6">
            <FaLaptopCode className="text-6xl text-blue-400" />
          </div>
          
          {/* Engineering Disciplines */}
          <div className="w-full grid grid-cols-3 gap-4">
            {[
              { name: 'Frontend', icon: FaDesktop, color: '#3B82F6' },
              { name: 'Backend', icon: FaDatabase, color: '#10B981' },
              { name: 'Mobile', icon: FaMobile, color: '#F59E0B' },
              { name: 'API Services', icon: FaCogs, color: '#EC4899' },
              { name: 'Cloud Native', icon: FaCloud, color: '#8B5CF6' },
              { name: 'Integration', icon: FaCubes, color: '#2563EB' },
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
            <span className="font-semibold">End-to-End Digital Solutions</span>
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
              <FaLaptopCode className="text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Digital Engineering Excellence
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
              Transform your business with our cutting-edge digital engineering services. We deliver scalable, secure, and future-ready solutions that drive innovation and growth.
            </p>
            
            <EngineeringVisual />
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
            Why Choose Our Digital Engineering Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaRocket,
                title: "Technical Excellence",
                description: "Our team of 200+ engineers have developed over 500 successful applications using the latest technologies and best practices in software development."
              },
              {
                icon: FaUserFriends,
                title: "Collaborative Approach",
                description: "We work as an extension of your team, adapting to your processes while bringing our expertise to enhance your development capabilities."
              },
              {
                icon: FaTools,
                title: "Full-Stack Expertise",
                description: "From frontend to backend, mobile to cloud infrastructure - we deliver end-to-end solutions with specialized expertise in every layer of the technology stack."
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
                icon: FaDesktop,
                title: "Custom Application Development",
                description: "We design and build bespoke applications tailored to your unique business requirements, using cutting-edge technologies and agile methodologies."
              },
              {
                icon: FaMobile,
                title: "Mobile Development",
                description: "Our experts create powerful, user-friendly mobile applications for iOS and Android platforms that engage users and drive business growth."
              },
              {
                icon: FaCloud,
                title: "Cloud-Native Development",
                description: "We architect and develop applications specifically for cloud environments, maximizing scalability, reliability, and cost-efficiency."
              },
              {
                icon: FaCode,
                title: "API Development & Integration",
                description: "We build robust APIs that connect your systems and allow for seamless data exchange between applications, partners, and services."
              },
              {
                icon: FaDatabase,
                title: "Database Engineering",
                description: "Our database specialists design and implement high-performance, scalable data solutions that ensure data integrity and availability."
              },
              {
                icon: FaCogs,
                title: "DevOps & Automation",
                description: "We implement CI/CD pipelines and automate processes to increase deployment frequency, reduce time-to-market, and improve software quality."
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
                title: "Time-to-Market",
                value: "60%",
                description: "Faster product delivery through our agile development practices and specialized expertise"
              },
              {
                title: "Cost Efficiency",
                value: "40%",
                description: "Reduction in development costs compared to traditional approaches"
              },
              {
                title: "Performance",
                value: "95%",
                description: "Improvement in application performance and user experience metrics"
              },
              {
                title: "Scalability",
                value: "100%",
                description: "Our solutions are built to scale seamlessly with your business growth"
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
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">Global E-Commerce Transformation</h3>
              <p className="text-gray-700 mb-6">
                A leading retail company needed to modernize their legacy e-commerce platform to support global expansion and improve user experience.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Challenge</h4>
                  <p className="text-gray-600 text-sm">Outdated technology stack with poor performance and limited scalability for seasonal traffic spikes</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Solution</h4>
                  <p className="text-gray-600 text-sm">Cloud-native microservices architecture with serverless components and global CDN implementation</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Results</h4>
                  <p className="text-gray-600 text-sm">300% improvement in page load times and 45% increase in conversion rates within 3 months</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center mt-8">
                <FaGlobe className="text-5xl text-indigo-500 mr-4" />
                <div>
                  <div className="text-3xl font-bold text-gray-900">12 Countries</div>
                  <div className="text-gray-600">Successful Global Deployment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Digital Capabilities?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Partner with us to build innovative, scalable, and high-performance digital solutions that drive your business forward.
          </p>
          <button className="bg-white text-indigo-600 py-3 px-8 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
            Request a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default DigitalEngineering; 