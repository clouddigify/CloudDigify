import React from 'react';
import { 
  FaServer,
  FaNetworkWired,
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
  FaArrowRight,
  FaHdd,
  FaMicrochip,
  FaSitemap,
  FaLayerGroup,
  FaIndustry,
  FaChartBar,
  FaClock
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import PageTemplate from '../../templates/PageTemplate';

const InfrastructureServices = () => {
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

  const sliderImages = [
    {
      url: '/images/infra/server-room-blue.jpg',
      alt: 'Modern Server Room with Blue LED Lighting',
      overlay: true,
      title: 'Enterprise Infrastructure Solutions',
      description: 'State-of-the-art data centers and server rooms built for performance and reliability'
    },
    {
      url: '/images/infra/network-engineer.jpg',
      alt: 'Network Engineer Working in Data Center',
      overlay: true,
      title: 'Expert Infrastructure Management',
      description: 'Certified professionals managing and optimizing your infrastructure 24/7'
    },
    {
      url: '/images/infra/server-racks.jpg',
      alt: 'Enterprise Server Racks and Networking Equipment',
      overlay: true,
      title: 'Advanced Network Architecture',
      description: 'High-performance computing and networking solutions for modern enterprises'
    }
  ];

  const infrastructureGrid = [
    {
      icon: <FaServer className="w-8 h-8" />,
      title: "Compute Infrastructure",
      description: "CloudDigify builds high-performance server solutions tailored to your workloads",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaDatabase className="w-8 h-8" />,
      title: "Storage Solutions",
      description: "We implement enterprise storage systems optimized for your data needs",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <FaNetworkWired className="w-8 h-8" />,
      title: "Network Architecture",
      description: "Our experts design secure and scalable networking for your organization",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <FaLayerGroup className="w-8 h-8" />,
      title: "Hybrid Infrastructure",
      description: "CloudDigify enables seamless integration between cloud and on-premises systems",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Security & Compliance",
      description: "We implement enterprise-grade security measures for your infrastructure",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: <FaChartBar className="w-8 h-8" />,
      title: "Infrastructure Monitoring",
      description: "CloudDigify deploys real-time monitoring solutions for optimal performance",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: <FaCloud className="w-8 h-8" />,
      title: "Cloud Migration",
      description: "We manage seamless transitions from legacy systems to cloud infrastructure",
      color: "from-blue-400 to-blue-500"
    },
    {
      icon: <FaHdd className="w-8 h-8" />,
      title: "Disaster Recovery",
      description: "CloudDigify builds resilient backup and recovery systems for business continuity",
      color: "from-gray-600 to-gray-700"
    }
  ];

  const approachTimeline = [
    {
      icon: <FaSearch className="w-6 h-6" />,
      title: "Infrastructure Audit",
      description: "Comprehensive assessment of current infrastructure",
      details: [
        "Performance analysis",
        "Security evaluation",
        "Cost optimization review",
        "Compliance check"
      ]
    },
    {
      icon: <FaSitemap className="w-6 h-6" />,
      title: "Architecture Design",
      description: "Blueprint for optimal infrastructure",
      details: [
        "Scalability planning",
        "Redundancy design",
        "Network architecture",
        "Security framework"
      ]
    },
    {
      icon: <FaCode className="w-6 h-6" />,
      title: "Infrastructure as Code",
      description: "Automation and deployment",
      details: [
        "Template development",
        "CI/CD integration",
        "Version control",
        "Automated testing"
      ]
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: "Monitoring & Optimization",
      description: "Continuous improvement",
      details: [
        "Performance monitoring",
        "Resource optimization",
        "Cost management",
        "Proactive maintenance"
      ]
    }
  ];

  const metrics = [
    {
      value: "300+",
      label: "Servers Deployed",
      icon: <FaServer className="w-6 h-6" />
    },
    {
      value: "<1hr",
      label: "Average SLA Response",
      icon: <FaClock className="w-6 h-6" />
    },
    {
      value: "100%",
      label: "Compliance Rate",
      icon: <FaShieldAlt className="w-6 h-6" />
    },
    {
      value: "50%",
      label: "Cost Optimization",
      icon: <FaPiggyBank className="w-6 h-6" />
    }
  ];

  const complianceCertifications = [
    { name: "ISO 27001", icon: <FaCheckCircle /> },
    { name: "PCI DSS", icon: <FaLock /> },
    { name: "SOC 2", icon: <FaShieldAlt /> },
    { name: "HIPAA", icon: <FaCheckCircle /> }
  ];

  const pricingModels = [
    {
      title: 'Hourly Services',
      description: '75/hour',
      subtitle: 'Infrastructure tuning & updates',
      ctaText: 'Start Now',
      bgClass: 'bg-gradient-to-b from-gray-50 to-white',
      features: [
        'Infrastructure patching',
        'Performance tuning',
        'Security updates',
        'On-demand support'
      ]
    },
    {
      title: 'Weekly Plan',
      description: '2,800/week',
      subtitle: 'Infrastructure setup & migration',
      ctaText: 'Schedule Call',
      bgClass: 'bg-gradient-to-b from-blue-50 to-white',
      features: [
        'Infrastructure migration',
        'Environment setup',
        'Weekly reporting',
        'Dedicated engineer'
      ]
    },
    {
      title: 'Monthly Retainer',
      description: '8,500/month',
      subtitle: 'Managed infrastructure support',
      ctaText: 'Get Started',
      bgClass: 'bg-gradient-to-b from-gray-800 to-blue-700',
      features: [
        'Full infrastructure management',
        '24/7 monitoring',
        'Proactive maintenance',
        'Priority support'
      ]
    },
    {
      title: 'Enterprise',
      description: 'Custom Quote',
      subtitle: 'SLA-backed enterprise management',
      ctaText: 'Request Quote',
      bgClass: 'bg-gradient-to-b from-purple-50 to-white',
      features: [
        'Custom SLA guarantees',
        'Dedicated team',
        'Enterprise support',
        'Quarterly reviews'
      ]
    }
  ];

  const deliveryTimeline = [
    {
      phase: 'Discovery & Assessment',
      duration: '1-2 weeks',
      icon: <FaSearch className="text-3xl text-blue-500" />,
      activities: [
        'Infrastructure inventory analysis',
        'Current state assessment',
        'Requirements gathering',
        'Gap analysis and recommendations'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      phase: 'Architecture & Design',
      duration: '1-2 weeks',
      icon: <FaTools className="text-3xl text-gray-700" />,
      activities: [
        'Network architecture planning',
        'Compute resources design',
        'Storage solution planning',
        'Security framework design'
      ],
      color: 'from-gray-700 to-gray-800'
    },
    {
      phase: 'Implementation & Automation',
      duration: '2-3 weeks',
      icon: <FaCode className="text-3xl text-purple-500" />,
      activities: [
        'Infrastructure as Code setup',
        'CI/CD pipeline implementation',
        'Automation framework deployment',
        'Monitoring system integration'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      phase: 'Testing & Optimization',
      duration: '1 week',
      icon: <FaCogs className="text-3xl text-emerald-500" />,
      activities: [
        'Performance testing',
        'Security validation',
        'Disaster recovery testing',
        'Load balancing optimization'
      ],
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      phase: 'Ongoing Support',
      duration: 'Continuous',
      icon: <FaRocket className="text-3xl text-rose-500" />,
      activities: [
        '24/7 infrastructure monitoring',
        'Regular patching and updates',
        'Scaling and optimization',
        'Continuous improvement'
      ],
      color: 'from-rose-500 to-rose-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-screen bg-gradient-to-br from-gray-900 to-blue-800 overflow-hidden">
        {/* Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <FaServer className="text-blue-400 w-16 h-16 mb-6" />
              <h1 className="text-5xl font-bold text-white mb-4">
                Infrastructure Services
              </h1>
              <h2 className="text-2xl text-blue-200 mb-8">
                Resilient. Scalable. Secure.
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl">
                Build and maintain enterprise-grade infrastructure that scales with your business needs. From on-premises to hybrid cloud, we deliver reliable and secure solutions.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2">
                <span>Book Infrastructure Assessment</span>
                <FaArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Infrastructure Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Infrastructure Solutions By CloudDigify
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              CloudDigify delivers comprehensive infrastructure services to build, deploy, and manage 
              systems that help our customers achieve their business goals with confidence
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {infrastructureGrid.map((service, index) => (
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

      {/* Metrics Section */}
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
            Infrastructure Performance Metrics
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className={`absolute top-0 left-0 w-full h-2 rounded-t-2xl bg-gradient-to-r from-blue-500 to-blue-600`} />
                <div className="flex items-start">
                  <div className="mr-4">{metric.icon}</div>
                  <div>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900">{metric.value}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mt-2">{metric.label}</h3>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-sm font-medium text-blue-600 mt-1">Industry-leading performance</p>
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
                    ${index === 2 ? 'border-2 border-blue-500 scale-105' : 'border border-transparent hover:border-blue-200'}`}
                >
                  {index === 2 && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{model.title}</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-2">${model.description}</p>
                  <p className="text-gray-600 mb-6">{model.subtitle}</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {model.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <FaCheckCircle className="text-blue-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <button className="w-full py-3 px-6 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
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
                  <p className="text-blue-600 font-semibold mb-3 text-sm">{phase.duration}</p>
                  <ul className="space-y-2 text-sm">
                    {phase.activities.map((activity, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <FaCheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Compliance & Security</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {complianceCertifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="text-blue-600 flex justify-center mb-4">
                  {React.cloneElement(cert.icon, { className: "w-8 h-8" })}
                </div>
                <div className="font-semibold">{cert.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 bg-gradient-to-br from-gray-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Let's Architect, Automate, and Scale Your Infrastructure
            </h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 mx-auto">
              <span>Start Now</span>
              <FaArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InfrastructureServices;