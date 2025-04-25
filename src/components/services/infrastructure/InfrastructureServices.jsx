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
import ImageSlider from '../../common/ImageSlider';

const InfrastructureServices = () => {
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
      description: "High-performance server solutions and virtualization",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaDatabase className="w-8 h-8" />,
      title: "Storage Solutions",
      description: "Enterprise storage and data management",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <FaNetworkWired className="w-8 h-8" />,
      title: "Network Architecture",
      description: "Secure and scalable networking",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <FaLayerGroup className="w-8 h-8" />,
      title: "Hybrid Infrastructure",
      description: "Seamless cloud and on-premises integration",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security measures",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: <FaChartBar className="w-8 h-8" />,
      title: "Infrastructure Monitoring",
      description: "Real-time performance analytics",
      color: "from-emerald-500 to-emerald-600"
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
      title: 'Managed Hourly Service',
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
      title: 'Weekly Engagements',
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
      title: 'Custom Enterprise',
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

  const pageInfo = {
    icon: <FaServer className="text-gray-800 text-6xl mb-6" />,
    title: 'Infrastructure Services',
    description: 'Unlock resilient, scalable, and secure infrastructure tailored to your business needs.',
    heroBackground: 'from-gray-800 to-blue-700',
    overviewTitle: 'Robust Infrastructure Solutions',
    overviewDescription1: 'We provide comprehensive end-to-end infrastructure management services, from initial assessment to continuous optimization, ensuring your systems run at peak performance.',
    overviewDescription2: 'Our expertise spans cloud-to-on-premises modernization, helping organizations build and maintain resilient infrastructure that scales with their business needs.',
    benefits: [
      'High Availability - Redundant systems and failover protection',
      'Scalability - Elastic infrastructure that grows with you',
      'Security - Enterprise-grade security at every layer',
      'Automation - Streamlined operations and reduced manual work'
    ],
    approachPoints: [
      'Infrastructure audit & gap analysis',
      'Resilient architecture design',
      'Infrastructure as Code setup',
      'Automated deployments & scaling',
      'Ongoing support and patching'
    ],
    ctaText: 'Ready to optimize your infrastructure? Let\'s architect, automate, and scale together.',
    ctaLink: '/contact',
    showBenefits: true,
    showSidebar: true,
    showCta: true,
    showFeatures: true,
    featuresTitle: 'Our Pricing Models',
    featuresDescription: 'Choose the perfect infrastructure management plan for your business',
    featuresContainerClassName: 'container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl',
    featuresWrapperClassName: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center',
    features: pricingModels.map((model, index) => ({
      className: `relative bg-white rounded-xl transition-all duration-300 ease-in-out
        ${index === 2 
          ? 'border-2 border-blue-600' 
          : 'border border-gray-100'} 
        shadow-sm hover:shadow-xl
        p-4
        flex flex-col
        h-full w-full
        min-h-[380px] max-w-[280px]
        ${index === 2 ? 'lg:-translate-y-2' : ''}
      `,
      content: (
        <div className="flex flex-col h-full">
          {index === 2 && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-600 text-white px-3 py-0.5 rounded-full text-xs font-medium whitespace-nowrap">
                Most Popular
              </span>
            </div>
          )}
          
          <div className="text-center mb-4">
            <h3 className={`text-base font-semibold ${
              index === 2 ? 'text-blue-600' : 'text-gray-800'
            }`}>
              {model.title}
            </h3>

            <div className="mt-2">
              <div className="flex items-baseline justify-center">
                {!model.description.includes('Custom') && (
                  <span className="text-lg font-semibold text-gray-900">$</span>
                )}
                <span className={`text-2xl font-bold text-gray-900 ${!model.description.includes('Custom') ? 'ml-0.5' : ''}`}>
                  {model.description.includes('Custom') ? 'Custom Quote' : model.description.split('/')[0].trim()}
                </span>
                {!model.description.includes('Custom') && (
                  <span className="text-gray-500 ml-1.5 text-sm">
                    /{model.description.split('/')[1]}
                  </span>
                )}
              </div>
              <p className="text-gray-500 mt-1 text-xs">
                {model.description.includes('Custom') ? 'Contact us for custom pricing' : 'Billed per period'}
              </p>
            </div>
          </div>

          <div className="flex-grow">
            <ul className="space-y-2">
              {model.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <svg 
                    className={`h-3.5 w-3.5 mr-2 mt-0.5 flex-shrink-0 ${
                      index === 2 ? 'text-blue-600' : 'text-gray-400'
                    }`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600 text-xs leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <button className={`w-full py-2 px-3 rounded-lg text-xs font-medium text-white transition-all duration-300
              ${index === 2 
                ? 'bg-blue-600 hover:bg-blue-700' 
                : 'bg-gray-600 hover:bg-gray-700'
              }
              hover:shadow-lg active:scale-[0.98]
            `}>
              Get Started
            </button>
          </div>
        </div>
      )
    })),
    additionalSections: [
      {
        content: (
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-gray-800 to-blue-700 bg-clip-text text-transparent mb-12">
              Delivery Timeline
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {deliveryTimeline.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${phase.color} rounded-t-xl`} />
                  <div className="p-6">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gray-50 group-hover:scale-110 transition-transform duration-300">
                      {phase.icon}
                    </div>
                    <div className="text-xl font-bold text-gray-800 mb-2">{phase.phase}</div>
                    <div className="text-sm text-blue-600 font-medium mb-4 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {phase.duration}
                    </div>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <svg 
                            className="w-4 h-4 mr-2 mt-0.5 text-blue-600 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path 
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-600 group-hover:text-gray-800 transition-colors">
                            {activity}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )
      },
      {
        content: (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-gray-800 to-blue-700 bg-clip-text text-transparent mb-8">
              Our Track Record
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${metric.color}`} />
                  <div className="p-4">
                    <div className="flex flex-col items-center">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${metric.color} text-white transform group-hover:scale-110 transition-transform duration-300 mb-3`}>
                        {React.cloneElement(metric.icon, { className: "text-2xl" })}
                      </div>
                      <div className="text-center">
                        <div className="flex items-baseline justify-center">
                          <span className="text-2xl font-bold text-gray-800">{metric.value}</span>
                          <span className="text-lg font-semibold text-gray-600 ml-0.5">{metric.label}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )
      }
    ]
  };

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
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Infrastructure Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infrastructureGrid.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${item.color}`} />
                <div className="p-6">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${item.color} text-white flex items-center justify-center mb-4`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Approach Timeline */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Approach</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {approachTimeline.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <FaCheckCircle className="text-blue-600 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                {index < approachTimeline.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-blue-200 transform translate-x-1/2">
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                      <FaArrowRight className="text-blue-400" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Metrics Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-blue-800 rounded-xl p-8 text-center text-white"
              >
                <div className="flex justify-center mb-4">
                  {React.cloneElement(metric.icon, { className: "w-8 h-8 text-blue-400" })}
                </div>
                <div className="text-4xl font-bold mb-2">{metric.value}</div>
                <div className="text-blue-200">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

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