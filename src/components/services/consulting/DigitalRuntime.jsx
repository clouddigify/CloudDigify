import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaClock, FaRocket, FaChartLine, FaCogs, FaCode, FaCloud, FaCheckCircle } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import ServiceInquiryForm from '../../common/ServiceInquiryForm';

const DigitalRuntime = () => {
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [inquiryType, setInquiryType] = useState('Digital Runtime Services');
  
  const openInquiryForm = (serviceType) => {
    setInquiryType(`Digital Runtime - ${serviceType}`);
    setShowInquiryForm(true);
  };

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const pageInfo = {
    hero: {
      title: "CloudDigify Digital Runtime",
      description: "Optimize your digital operations with our comprehensive runtime services and solutions",
      icon: <FaClock className="text-5xl mb-4" />,
      bgClass: "bg-gradient-to-r from-blue-600 to-cyan-500"
    },
    overview: {
      title: "Runtime Excellence",
      descriptions: [
        "Transform your digital operations with CloudDigify's runtime services that ensure optimal performance, reliability, and scalability.",
        "We provide end-to-end runtime management solutions that help organizations maintain peak operational efficiency."
      ]
    },
    benefits: {
      title: "Key Benefits",
      items: [
        {
          icon: <FaRocket />,
          title: "Performance Optimization",
          description: "CloudDigify enhances application performance and response times through advanced runtime optimization techniques."
        },
        {
          icon: <FaChartLine />,
          title: "Scalability Management",
          description: "CloudDigify ensures your applications can handle growing workloads with dynamic scaling capabilities."
        },
        {
          icon: <FaCogs />,
          title: "Runtime Monitoring",
          description: "CloudDigify provides comprehensive monitoring and alerting systems for proactive issue resolution."
        },
        {
          icon: <FaCode />,
          title: "Runtime Security",
          description: "CloudDigify implements robust security measures to protect your applications during execution."
        },
        {
          icon: <FaCloud />,
          title: "Cloud Runtime Integration",
          description: "CloudDigify enables seamless integration with cloud platforms for enhanced runtime capabilities."
        }
      ]
    },
    features: {
      title: "Why Choose CloudDigify",
      items: [
        {
          icon: <FaCheckCircle className="text-green-500" />,
          text: "Experienced team of runtime optimization specialists"
        },
        {
          icon: <FaCheckCircle className="text-green-500" />,
          text: "Proven track record of improving application performance"
        },
        {
          icon: <FaCheckCircle className="text-green-500" />,
          text: "Customized solutions tailored to your specific needs"
        },
        {
          icon: <FaCheckCircle className="text-green-500" />,
          text: "24/7 monitoring and support services"
        },
        {
          icon: <FaCheckCircle className="text-green-500" />,
          text: "Transparent reporting and performance metrics"
        }
      ]
    },
    approach: {
      title: "Our Approach",
      points: [
        "Assessment of current runtime environment and performance metrics",
        "Implementation of optimization strategies and monitoring tools",
        "Continuous improvement through performance analysis and tuning",
        "Integration of security best practices in runtime operations",
        "Regular maintenance and updates to ensure optimal performance"
      ]
    },
    callToAction: {
      title: "Ready to Optimize Your Runtime Environment?",
      description: "Contact CloudDigify to learn how our Digital Runtime services can enhance your operational efficiency.",
      buttonText: "Get Started"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Wave Pattern */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity, scale }}
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500"
        />
        <div className="absolute inset-0">
          {/* Animated Wave Pattern */}
          <svg className="absolute w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <motion.path
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.2, y: 0 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,208C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="white"
              fillOpacity="0.2"
            />
            <motion.path
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 0.3, y: 0 }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 0.5
              }}
              d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,122.7C672,128,768,192,864,213.3C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="white"
              fillOpacity="0.2"
            />
            {/* Floating Circles Animation */}
            {[...Array(6)].map((_, index) => (
              <motion.circle
                key={index}
                cx={200 + index * 200}
                cy={160}
                r={10}
                fill="white"
                fillOpacity="0.3"
                initial={{ y: 0 }}
                animate={{ y: [-20, 20] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
              />
            ))}
          </svg>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-bold mb-4"
          >
            {pageInfo.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            {pageInfo.hero.description}
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openInquiryForm('General Inquiry')}
            className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Schedule Consultation
          </motion.button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">{pageInfo.overview.title}</h2>
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
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-600">{pageInfo.benefits.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pageInfo.benefits.items.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => openInquiryForm(benefit.title)}
              >
                <div className="text-3xl text-blue-500 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">{pageInfo.features.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {pageInfo.features.items.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4">
                <div className="text-xl">{feature.icon}</div>
                <p className="text-gray-700">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">{pageInfo.approach.title}</h2>
          <div className="space-y-4">
            {pageInfo.approach.points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-4"
              >
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  {index + 1}
                </div>
                <p className="text-lg text-gray-700">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{pageInfo.callToAction.title}</h2>
          <p className="text-xl mb-8">{pageInfo.callToAction.description}</p>
          <button 
            onClick={() => openInquiryForm('Digital Runtime Services')}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {pageInfo.callToAction.buttonText}
          </button>
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
}

export default DigitalRuntime; 