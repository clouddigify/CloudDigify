import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaChartBar, FaDatabase, FaChartLine, FaChartPie, FaBrain, FaRocket, FaSearch, FaCogs, FaLightbulb, FaCheckCircle } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import ServiceInquiryForm from '../../common/ServiceInquiryForm';

const DataAnalytics = () => {
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [inquiryType, setInquiryType] = useState('Data Analytics');
  
  const openInquiryForm = (serviceType) => {
    setInquiryType(`Data Analytics - ${serviceType}`);
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
      title: "CloudDigify Data Analytics",
      description: "Empower your organization with data-driven insights to make smarter business decisions and drive innovation",
      icon: <FaChartBar className="text-5xl mb-4" />,
      bgClass: "bg-gradient-to-r from-purple-600 to-indigo-500"
    },
    overview: {
      title: "Transformative Data-Driven Solutions",
      descriptions: [
        "CloudDigify partners with you to transform raw data into strategic assets that fuel business growth and competitive advantage.",
        "Our expert team combines industry knowledge with cutting-edge analytics techniques to deliver actionable insights tailored to your specific business challenges."
      ]
    },
    benefits: {
      title: "How CloudDigify Empowers Your Business",
      items: [
        {
          icon: <FaLightbulb />,
          title: "Predictive Analytics",
          description: "CloudDigify helps you anticipate market trends and customer behavior through advanced ML algorithms, enabling proactive strategy development."
        },
        {
          icon: <FaDatabase />,
          title: "Data Integration",
          description: "CloudDigify breaks down data silos by consolidating information from diverse sources, creating a unified view for comprehensive business analysis."
        },
        {
          icon: <FaChartLine />,
          title: "Real-time Analytics",
          description: "CloudDigify enables instant decision-making with streaming analytics that process data as it's generated, giving you a competitive edge."
        },
        {
          icon: <FaChartPie />,
          title: "Descriptive Analytics",
          description: "CloudDigify transforms historical data into clear visualizations and insights, helping you understand past performance to optimize future strategies."
        }
      ]
    },
    features: {
      title: "The CloudDigify Advantage",
      items: [
        {
          icon: <FaCheckCircle className="text-green-500" />,
          text: "Dedicated team of data scientists and industry specialists focused on your business goals"
        },
        {
          icon: <FaCheckCircle className="text-green-500" />,
          text: "Tailored analytics solutions designed for your specific industry challenges"
        },
        {
          icon: <FaCheckCircle className="text-green-500" />,
          text: "Proven ROI with measurable outcomes tied to your business objectives"
        },
        {
          icon: <FaCheckCircle className="text-green-500" />,
          text: "End-to-end implementation from strategy to execution and ongoing optimization"
        },
        {
          icon: <FaCheckCircle className="text-green-500" />,
          text: "Seamless integration with your existing systems and cloud infrastructure"
        }
      ]
    },
    approach: {
      title: "Our Collaborative Approach",
      points: [
        "Discovery phase to understand your unique business goals and data landscape",
        "Custom data pipeline creation and quality enhancement",
        "Implementation of tailored analytics solutions and AI/ML models",
        "Interactive dashboard development for clear visualization and insight sharing",
        "Continuous optimization and knowledge transfer to empower your team"
      ]
    },
    callToAction: {
      title: "Ready to Transform Data into Strategic Value?",
      description: "Partner with CloudDigify to unlock the full potential of your data and gain the competitive advantage your business needs to thrive.",
      buttonText: "Start Your Data Journey"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Wave Pattern */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity, scale }}
          className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600"
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
              d="M0,96L48,122.7C96,149,192,203,288,224C384,245,480,235,576,202.7C672,171,768,117,864,117.3C960,117,1056,171,1152,192C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
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
              d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,128C672,117,768,139,864,160C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
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
            className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Discover How We Can Help
          </motion.button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-16 text-gray-800"
          >
            CloudDigify Analytics Solutions
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: FaChartBar,
                title: "Predictive Analytics",
                description: "CloudDigify helps you forecast trends and outcomes using advanced ML models customized for your industry"
              },
              {
                icon: FaDatabase,
                title: "Data Mining",
                description: "CloudDigify uncovers hidden patterns in your data to reveal opportunities for growth and optimization"
              },
              {
                icon: FaChartLine,
                title: "Real-time Analytics",
                description: "CloudDigify enables immediate insights through streaming data analysis for time-critical decisions"
              },
              {
                icon: FaBrain,
                title: "Machine Learning",
                description: "CloudDigify implements AI-driven solutions that learn and improve over time to solve complex business problems"
              },
              {
                icon: FaChartPie,
                title: "Business Analytics",
                description: "CloudDigify transforms your raw data into actionable business insights aligned with your strategic goals"
              },
              {
                icon: FaSearch,
                title: "Data Discovery",
                description: "CloudDigify helps you explore and visualize your data through intuitive interfaces for better understanding"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => openInquiryForm(service.title)}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-16 text-gray-800"
          >
            How CloudDigify Delivers Results
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: FaLightbulb,
                title: "Discovery & Strategy",
                description: "CloudDigify works closely with your team to understand your unique business needs and data ecosystem"
              },
              {
                icon: FaCogs,
                title: "Implementation & Integration",
                description: "CloudDigify deploys custom analytics solutions fully integrated with your existing systems and workflows"
              },
              {
                icon: FaRocket,
                title: "Optimization & Growth",
                description: "CloudDigify continuously refines your analytics capabilities to drive ongoing improvement and business value"
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <step.icon className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            {pageInfo.callToAction.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            {pageInfo.callToAction.description}
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openInquiryForm('Consultation')}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Partner with CloudDigify
          </motion.button>
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

export default DataAnalytics; 