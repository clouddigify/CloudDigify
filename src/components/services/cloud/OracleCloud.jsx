import React, { useState } from 'react';
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
  FaArrowRight,
  FaMicrochip,
  FaRobot,
  FaUsersCog,
  FaIndustry,
  FaCubes
} from 'react-icons/fa';
import { SiOracle } from 'react-icons/si';
import ServiceInquiryForm from '../../common/ServiceInquiryForm';
import SEO from '../../common/SEO';

const OracleCloud = () => {
  // State for form visibility
  const [showForm, setShowForm] = useState(false);
  const [inquiryType, setInquiryType] = useState('Oracle Cloud Services');

  // Function to open form with specific service type
  const openInquiryForm = (serviceType) => {
    setInquiryType(`Oracle Cloud - ${serviceType}`);
    setShowForm(true);
  };

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

  const oracleCloudServices = [
    {
      icon: <FaCloud className="text-4xl text-red-500" />,
      title: 'Oracle Cloud Infrastructure',
      description: 'CloudDigify builds enterprise-grade infrastructure on Oracle\'s second-generation cloud',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <FaDatabase className="text-4xl text-red-600" />,
      title: 'Oracle Database Cloud',
      description: 'We optimize and manage mission-critical Oracle databases in the cloud',
      color: 'from-red-600 to-red-700'
    },
    {
      icon: <FaShieldAlt className="text-4xl text-orange-500" />,
      title: 'Oracle Security',
      description: 'Our team implements Oracle\'s advanced security controls for your data',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <FaIndustry className="text-4xl text-amber-500" />,
      title: 'Oracle ERP Cloud',
      description: 'CloudDigify deploys and configures Oracle ERP cloud solutions for enterprises',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: <FaNetworkWired className="text-4xl text-red-400" />,
      title: 'Oracle Networking',
      description: 'We design and implement high-performance networking on Oracle Cloud',
      color: 'from-red-400 to-red-500'
    },
    {
      icon: <FaMicrochip className="text-4xl text-orange-600" />,
      title: 'Oracle Analytics',
      description: 'CloudDigify creates insightful analytics solutions using Oracle Cloud tools',
      color: 'from-orange-600 to-orange-700'
    },
    {
      icon: <FaCubes className="text-4xl text-amber-600" />,
      title: 'Oracle Integration',
      description: 'Our experts integrate Oracle Cloud services with your existing systems',
      color: 'from-amber-600 to-amber-700'
    },
    {
      icon: <FaRobot className="text-4xl text-red-500" />,
      title: 'Oracle Autonomous',
      description: 'CloudDigify leverages Oracle\'s autonomous services for your business',
      color: 'from-red-500 to-red-600'
    }
  ];

  // Content data
  const sliderImages = [
    {
      url: '/images/oracle/cloud-platform.jpg',
      alt: 'Oracle Cloud Platform',
      overlay: true,
      title: 'Oracle Cloud Platform',
      description: 'Enterprise-grade cloud computing solutions powered by Oracle Cloud'
    },
    {
      url: '/images/oracle/cloud-database.jpg',
      alt: 'Oracle Cloud Database',
      overlay: true,
      title: 'Database Solutions',
      description: 'Industry-leading database solutions in the cloud'
    },
    {
      url: '/images/oracle/cloud-enterprise.jpg',
      alt: 'Oracle Cloud Enterprise',
      overlay: true,
      title: 'Enterprise Solutions',
      description: 'Complete enterprise application suite in the cloud'
    }
  ];

  const stats = [
    {
      icon: <FaServer className="text-4xl" />,
      value: '99.99',
      unit: '%',
      label: 'Uptime Guarantee',
      description: 'Enterprise-grade reliability',
      color: 'from-red-500 to-red-600',
      metric: 'Average across all services',
      achievement: '5-star reliability rating'
    },
    {
      icon: <FaRocket className="text-4xl" />,
      value: '160+',
      unit: '',
      label: 'Successful Launches',
      description: 'Cloud migrations completed',
      color: 'from-orange-500 to-orange-600',
      metric: 'In the last 24 months',
      achievement: 'Zero downtime migrations'
    },
    {
      icon: <FaPiggyBank className="text-4xl" />,
      value: '68',
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
      description: 'OCI security standards',
      color: 'from-purple-500 to-purple-600',
      metric: 'Compliance rate',
      achievement: 'Zero security incidents'
    },
    {
      icon: <FaGlobe className="text-4xl" />,
      value: '30+',
      unit: '',
      label: 'Global Regions',
      description: 'Worldwide deployment',
      color: 'from-blue-500 to-blue-600',
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
      title: 'Hourly Services',
      description: '70/hour',
      subtitle: 'Perfect for small projects',
      ctaText: 'Start Now',
      bgClass: 'bg-gradient-to-b from-gray-50 to-white',
      features: [
        'Pay as you go',
        'Flexible scheduling',
        'Expert consultation',
        'No long-term commitment'
      ]
    },
    {
      title: 'Weekly Plan',
      description: '2,600/week',
      subtitle: 'Ideal for ongoing projects',
      ctaText: 'Schedule Call',
      bgClass: 'bg-gradient-to-b from-red-50 to-white',
      features: [
        'Dedicated OCI expert',
        'Weekly progress reports',
        'Priority support',
        'Regular check-ins'
      ]
    },
    {
      title: 'Monthly Retainer',
      description: '7,800/month',
      subtitle: 'Best value for enterprises',
      ctaText: 'Get Started',
      bgClass: 'bg-gradient-to-b from-[#C74634] to-white',
      features: [
        'Full-time dedicated team',
        'Comprehensive management',
        'Strategic planning',
        '24/7 premium support'
      ]
    },
    {
      title: 'Enterprise',
      description: 'Custom Quote',
      subtitle: 'Tailored to your needs',
      ctaText: 'Request Quote',
      bgClass: 'bg-gradient-to-b from-purple-50 to-white',
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
      icon: <FaSearch className="text-3xl text-red-500" />,
      activities: [
        'Initial consultation and requirements gathering',
        'Infrastructure assessment and gap analysis',
        'OCI solution architecture design',
        'Cost estimation and resource planning'
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      phase: 'Foundation Setup',
      duration: '1-2 weeks',
      icon: <FaCloudUploadAlt className="text-3xl text-[#C74634]" />,
      activities: [
        'OCI tenancy configuration and setup',
        'Network architecture implementation',
        'Security baseline establishment',
        'CI/CD pipeline setup'
      ],
      color: 'from-[#C74634] to-[#D85A4A]'
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
    <>
      <SEO
        title="Oracle Cloud Services | CloudDigify"
        description="Drive business agility and performance with Oracle Cloud solutions from CloudDigify."
        canonicalUrl="https://clouddigify.com/services/cloud/oraclecloud"
        keywords={['Oracle Cloud', 'cloud services', 'oracle', 'CloudDigify']}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-400 opacity-90"
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
                  <SiOracle className="text-5xl text-white" />
                  <h1 className="text-5xl md:text-6xl font-bold text-white">
                    Oracle Cloud
                  </h1>
                </div>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Transform your enterprise with Oracle Cloud Infrastructure - the high-performance cloud built for mission-critical applications.
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <button
                    onClick={() => openInquiryForm('General Inquiry')}
                    className="group inline-flex items-center bg-white text-red-600 px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-red-50 transition-all duration-300"
                  >
                    <span className="mr-2">Get Started with Oracle Cloud</span>
                    <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </div>
            </motion.div>
            </div>
        </section>

        {/* Oracle Cloud Services Grid Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Oracle Cloud Solutions By CloudDigify
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                CloudDigify delivers comprehensive Oracle Cloud services to build, deploy, and manage 
                applications that help our customers achieve their business goals with confidence
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {oracleCloudServices.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                  <div className={`absolute top-0 left-0 w-full h-1.5 rounded-t-2xl bg-gradient-to-r ${service.color}`} />
                  <div className="flex flex-col items-start h-full">
                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
                ))}
            </motion.div>
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
              Oracle Cloud Performance Metrics
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
                        <p className="text-sm font-medium text-red-600 mt-1">{stat.achievement}</p>
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
                    className={`${model.bgClass} rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 relative flex flex-col h-full
                      ${index === 2 ? 'border-2 border-red-500 scale-105' : 'border border-transparent hover:border-red-200'}`}
                  >
                    {index === 2 && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{model.title}</h3>
                  <p className="text-2xl font-bold text-red-600 mb-2">${model.description}</p>
                  <p className="text-gray-600 mb-6">{model.subtitle}</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {model.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <FaCheckCircle className="text-red-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                  <div className="mt-auto">
                    <button 
                      className="w-full py-3 px-6 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors duration-300"
                      onClick={() => openInquiryForm(model.title)}
                    >
                      {model.ctaText}
                    </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
        </section>

        {/* Delivery Timeline */}
        <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12 text-gray-900"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Implementation Timeline
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {deliveryTimeline.map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative p-6 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col"
                  >
                  <div className={`absolute top-0 left-0 w-full h-2 rounded-t-2xl bg-gradient-to-r ${phase.color}`} />
                  <div className="mb-3">{phase.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.phase}</h3>
                  <p className="text-red-600 font-semibold mb-3 text-sm">{phase.duration}</p>
                  <ul className="space-y-2 text-sm">
                    {phase.activities.map((activity, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <FaCheckCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                  </motion.div>
                ))}
              </div>
            </div>
        </section>

        {/* Service Inquiry Form */}
        <ServiceInquiryForm 
          isOpen={showForm} 
          onClose={() => setShowForm(false)} 
          serviceName={inquiryType} 
        />
        </div>
    </>
  );
};

export default OracleCloud; 