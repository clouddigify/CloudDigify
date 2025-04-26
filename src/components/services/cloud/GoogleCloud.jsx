import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaServer, 
  FaGlobe, 
  FaPiggyBank,
  FaSearch,
  FaRocket,
  FaCogs,
  FaChartLine,
  FaShieldAlt,
  FaCode,
  FaCloudUploadAlt,
  FaCheckCircle,
  FaCloud,
  FaLock,
  FaTools,
  FaDatabase,
  FaNetworkWired,
  FaArrowRight
} from 'react-icons/fa';
import { SiGooglecloud } from 'react-icons/si';
import ImageSlider from '../../common/ImageSlider';

const GoogleCloud = () => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Content data
  const sliderImages = [
    {
      url: '/images/google/cloud-platform.jpg',
      alt: 'Google Cloud Platform',
      overlay: true,
      title: 'Google Cloud Platform',
      description: 'Enterprise-grade cloud computing solutions powered by Google Cloud'
    },
    {
      url: '/images/google/cloud-ai.jpg',
      alt: 'Google Cloud AI',
      overlay: true,
      title: 'AI & Machine Learning',
      description: 'Advanced AI and ML capabilities with Google Cloud'
    },
    {
      url: '/images/google/cloud-analytics.jpg',
      alt: 'Google Cloud Analytics',
      overlay: true,
      title: 'Data Analytics',
      description: 'Powerful analytics and BigQuery solutions'
    }
  ];

  const stats = [
    {
      icon: <FaServer className="text-4xl" />,
      value: '99.99',
      unit: '%',
      label: 'Uptime Guarantee',
      description: 'Enterprise-grade reliability',
      color: 'from-green-500 to-green-600',
      metric: 'Average across all services',
      achievement: '5-star reliability rating'
    },
    {
      icon: <FaRocket className="text-4xl" />,
      value: '150+',
      unit: '',
      label: 'Successful Launches',
      description: 'Cloud migrations completed',
      color: 'from-indigo-500 to-indigo-600',
      metric: 'In the last 24 months',
      achievement: 'Zero downtime migrations'
    },
    {
      icon: <FaPiggyBank className="text-4xl" />,
      value: '65',
      unit: '%',
      label: 'Cost Reduction',
      description: 'Average client savings',
      color: 'from-emerald-500 to-emerald-600',
      metric: 'Through optimization',
      achievement: 'Industry-leading ROI'
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      value: '100',
      unit: '%',
      label: 'Security Score',
      description: 'GCP security standards',
      color: 'from-purple-500 to-purple-600',
      metric: 'Compliance rate',
      achievement: 'Zero security incidents'
    },
    {
      icon: <FaGlobe className="text-4xl" />,
      value: '35+',
      unit: '',
      label: 'Global Regions',
      description: 'Worldwide deployment',
      color: 'from-rose-500 to-rose-600',
      metric: 'Multi-region presence',
      achievement: '24/7 global support'
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      value: '40',
      unit: 'min',
      label: 'Response Time',
      description: 'Average resolution time',
      color: 'from-amber-500 to-amber-600',
      metric: 'Support SLA',
      achievement: '97% client satisfaction'
    }
  ];

  const pricingModels = [
    {
      title: 'Managed Hourly Service',
      price: '$75/hour',
      features: [
        'Pay as you go',
        'Flexible scheduling',
        'Expert consultation',
        'No long-term commitment'
      ]
    },
    {
      title: 'Weekly Engagements',
      price: '$2,800/week',
      features: [
        'Dedicated GCP expert',
        'Weekly progress reports',
        'Priority support',
        'Regular check-ins'
      ]
    },
    {
      title: 'Monthly Retainer',
      price: '$8,500/month',
      features: [
        'Full-time dedicated team',
        'Comprehensive management',
        'Strategic planning',
        '24/7 premium support'
      ]
    },
    {
      title: 'Custom Enterprise',
      price: 'Custom Quote',
      features: [
        'Tailored solutions',
        'Multiple dedicated teams',
        'Enterprise SLA',
        'Custom reporting'
      ]
    }
  ];

  const deliveryTimeline = [
    {
      phase: 'Discovery & Planning',
      duration: '1-2 weeks',
      icon: <FaSearch className="text-3xl text-blue-500" />,
      activities: [
        'Initial consultation and requirements gathering',
        'Infrastructure assessment and gap analysis',
        'GCP solution architecture design',
        'Cost estimation and resource planning'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      phase: 'Foundation Setup',
      duration: '1-2 weeks',
      icon: <FaCloudUploadAlt className="text-3xl text-indigo-500" />,
      activities: [
        'GCP project configuration and setup',
        'Network architecture implementation',
        'Security baseline establishment',
        'CI/CD pipeline setup'
      ],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      phase: 'Migration & Development',
      duration: '2-4 weeks',
      icon: <FaCode className="text-3xl text-purple-500" />,
      activities: [
        'Phased migration execution',
        'Application modernization',
        'Integration testing',
        'Performance optimization'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      phase: 'Testing & Optimization',
      duration: '1-2 weeks',
      icon: <FaCogs className="text-3xl text-emerald-500" />,
      activities: [
        'Load testing and scalability validation',
        'Security testing and compliance checks',
        'Monitoring setup and alerts configuration',
        'Performance fine-tuning'
      ],
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      phase: 'Launch & Support',
      duration: 'Ongoing',
      icon: <FaRocket className="text-3xl text-rose-500" />,
      activities: [
        'Production deployment',
        'Go-live support and monitoring',
        'Knowledge transfer and documentation',
        'Continuous improvement and optimization'
      ],
      color: 'from-rose-500 to-rose-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 opacity-90"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        <div className="relative py-24 px-6">
          <motion.div 
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-3xl backdrop-blur-sm bg-white/10 p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <SiGooglecloud className="text-5xl text-white" />
                <h1 className="text-5xl md:text-6xl font-bold text-white">
                  Google Cloud
                </h1>
              </div>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Transform your business with Google Cloud Platform - leveraging cutting-edge AI, ML, and data analytics capabilities.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-green-50 transition-all duration-300"
                >
                  <span className="mr-2">Get Started with Google Cloud</span>
                  <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Slider Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <ImageSlider images={sliderImages} />
        </div>
      </section>

      {/* Stats Grid */}
      <motion.section 
        className="py-20 px-6 bg-gradient-to-b from-white to-gray-50"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-16 text-gray-900"
            variants={fadeInUp}
          >
            Google Cloud Performance Metrics
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className={`absolute top-0 left-0 w-full h-2 rounded-t-2xl bg-gradient-to-r ${stat.color}`} />
                <div className="flex items-start">
                  <div className="mr-4">{stat.icon}</div>
                  <div>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900">{stat.value}</span>
                      <span className="text-xl ml-1 text-gray-600">{stat.unit}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mt-2">{stat.label}</h3>
                    <p className="text-gray-600 mt-1">{stat.description}</p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-sm text-gray-500">{stat.metric}</p>
                      <p className="text-sm font-medium text-green-600 mt-1">{stat.achievement}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Flexible Pricing Models
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${model.bgClass} rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300`}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{model.title}</h3>
                <p className="text-2xl font-bold text-green-600 mb-2">${model.description}</p>
                <p className="text-gray-600 mb-6">{model.subtitle}</p>
                <ul className="space-y-3 mb-8">
                  {model.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-6 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors duration-300">
                  {model.ctaText}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Timeline */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Implementation Timeline
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliveryTimeline.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className={`absolute top-0 left-0 w-full h-2 rounded-t-2xl bg-gradient-to-r ${phase.color}`} />
                <div className="mb-4">{phase.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.phase}</h3>
                <p className="text-green-600 font-semibold mb-4">{phase.duration}</p>
                <ul className="space-y-3">
                  {phase.activities.map((activity, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GoogleCloud;
