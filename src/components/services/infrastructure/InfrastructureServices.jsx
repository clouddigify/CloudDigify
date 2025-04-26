import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaServer,
  FaCloud, 
  FaDatabase, 
  FaNetworkWired,
  FaLock, 
  FaSearch,
  FaTools, 
  FaExchangeAlt, 
  FaChartLine,
  FaCheck, 
  FaShieldAlt,
  FaRocket,
  FaClock,
  FaPiggyBank,
  FaCheckCircle,
  FaLayerGroup,
  FaChartBar,
  FaHdd,
  FaSitemap,
  FaCode,
  FaArrowRight,
  FaGlobe
} from 'react-icons/fa';
import ServiceInquiryForm from '../../common/ServiceInquiryForm';

export default function InfrastructureServices() {
  // State for inquiry form
  const [isInquiryFormOpen, setIsInquiryFormOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState('Infrastructure Services');

  // Function to open form with specific service type
  const openInquiryForm = (serviceType) => {
    setInquiryType(`Infrastructure - ${serviceType}`);
    setIsInquiryFormOpen(true);
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

  const infraGridItems = [
    {
      icon: <FaServer className="w-8 h-8" />,
      title: "Compute Infrastructure",
      description: "CloudDigify builds high-performance server solutions tailored to your workloads",
      color: "from-blue-500 to-blue-600",
      features: [
        "Scalable compute resources",
        "Performance optimization",
        "Virtualization solutions",
        "Workload-specific configurations"
      ]
    },
    {
      icon: <FaDatabase className="w-8 h-8" />,
      title: "Storage Solutions",
      description: "We implement enterprise storage systems optimized for your data needs",
      color: "from-indigo-500 to-indigo-600",
      features: [
        "High-performance storage",
        "Data redundancy",
        "Backup solutions",
        "Storage optimization"
      ]
    },
    {
      icon: <FaNetworkWired className="w-8 h-8" />,
      title: "Network Architecture",
      description: "Our experts design secure and scalable networking for your organization",
      color: "from-purple-500 to-purple-600",
      features: [
        "Network optimization",
        "Traffic management",
        "SD-WAN solutions",
        "Network security"
      ]
    },
    {
      icon: <FaLayerGroup className="w-8 h-8" />,
      title: "Hybrid Infrastructure",
      description: "CloudDigify enables seamless integration between cloud and on-premises systems",
      color: "from-cyan-500 to-cyan-600",
      features: [
        "Cloud connectivity",
        "Hybrid deployments",
        "Workload balancing",
        "Unified management"
      ]
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Security & Compliance",
      description: "We implement enterprise-grade security measures for your infrastructure",
      color: "from-teal-500 to-teal-600",
      features: [
        "Security architecture",
        "Compliance frameworks",
        "Threat detection",
        "Security monitoring"
      ]
    },
    {
      icon: <FaHdd className="w-8 h-8" />,
      title: "Disaster Recovery",
      description: "CloudDigify builds resilient backup and recovery systems for business continuity",
      color: "from-gray-600 to-gray-700",
      features: [
        "Recovery planning",
        "Backup automation",
        "Recovery testing",
        "Business continuity"
      ]
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
      icon: <FaServer className="text-4xl" />,
      value: "300+",
      unit: "",
      label: "Servers Deployed",
      description: "Enterprise-grade reliability",
      color: "from-blue-500 to-blue-600",
      metric: "Across multiple industries",
      achievement: "5-star reliability rating"
    },
    {
      icon: <FaRocket className="text-4xl" />,
      value: "175+",
      unit: "",
      label: "Successful Deployments",
      description: "Infrastructure projects completed",
      color: "from-cyan-500 to-cyan-600",
      metric: "In the last 24 months",
      achievement: "Zero downtime deployments"
    },
    {
      icon: <FaPiggyBank className="text-4xl" />,
      value: "65",
      unit: "%",
      label: "Cost Reduction",
      description: "Average client savings",
      color: "from-emerald-500 to-emerald-600",
      metric: "Through optimization",
      achievement: "Industry-leading ROI"
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      value: "100",
      unit: "%",
      label: "Security Score",
      description: "Infrastructure security standards",
      color: "from-purple-500 to-purple-600",
      metric: "Compliance rate",
      achievement: "Zero security incidents"
    },
    {
      icon: <FaGlobe className="text-4xl" />,
      value: "60+",
      unit: "",
      label: "Global Regions",
      description: "Worldwide deployment",
      color: "from-indigo-500 to-indigo-600",
      metric: "Multi-region presence",
      achievement: "24/7 global support"
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      value: "30",
      unit: "min",
      label: "Response Time",
      description: "Average resolution time",
      color: "from-amber-500 to-amber-600",
      metric: "Support SLA",
      achievement: "98% client satisfaction"
    }
  ];

  const complianceCerts = [
    { name: "ISO 27001", icon: <FaCheckCircle /> },
    { name: "PCI DSS", icon: <FaLock /> },
    { name: "SOC 2", icon: <FaShieldAlt /> },
    { name: "HIPAA", icon: <FaCheckCircle /> },
    { name: "GDPR", icon: <FaLock /> }
  ];

  const pricingModels = [
    {
      title: "Managed Hourly Service",
      description: "From $150/hour",
      subtitle: "Flexible support with dedicated infrastructure specialists on an hourly basis.",
      ctaText: "Get Started",
      bgClass: "bg-gradient-to-b from-gray-50 to-white",
      features: [
        "Access to certified infrastructure engineers",
        "Flexible scheduling based on your needs",
        "No long-term commitment required",
        "24/7 emergency support available",
        "Regular infrastructure health checks"
      ]
    },
    {
      title: "Weekly Engagements",
      description: "From $5,000/week",
      subtitle: "Dedicated weekly infrastructure support for ongoing projects and maintenance.",
      ctaText: "Learn More",
      bgClass: "bg-gradient-to-b from-blue-50 to-white",
      features: [
        "Dedicated infrastructure team",
        "Weekly performance reporting",
        "Infrastructure optimization",
        "Continuous security monitoring",
        "Proactive issue resolution"
      ]
    },
    {
      title: "Monthly Retainer",
      description: "From $15,000/month",
      subtitle: "Comprehensive infrastructure management with guaranteed service levels.",
      ctaText: "Contact Us",
      isPopular: true,
      bgClass: "bg-gradient-to-b from-blue-500 to-white",
      features: [
        "Full infrastructure management",
        "99.9% uptime guarantee",
        "24/7 monitoring and support",
        "Monthly strategic planning",
        "Cost optimization and scaling"
      ]
    },
    {
      title: "Custom Enterprise",
      description: "Custom Pricing",
      subtitle: "Tailored infrastructure solutions for large-scale enterprise environments.",
      ctaText: "Request Quote",
      bgClass: "bg-gradient-to-b from-purple-50 to-white",
      features: [
        "Enterprise-grade infrastructure",
        "Multi-region deployment support",
        "Custom SLAs and compliance",
        "Dedicated account management",
        "Quarterly business reviews"
      ]
    }
  ];

  const deliveryTimeline = [
    {
      phase: "Discovery & Planning",
      duration: "1-2 Weeks",
      icon: <FaSearch className="text-blue-500 text-4xl mb-4" />,
      activities: [
        "Infrastructure assessment",
        "Requirements gathering",
        "Architecture planning",
        "Resource allocation",
        "Timeline development"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      phase: "Foundation Setup",
      duration: "2-3 Weeks",
      icon: <FaTools className="text-purple-500 text-4xl mb-4" />,
      activities: [
        "Infrastructure deployment",
        "Network configuration",
        "Security implementation",
        "Monitoring setup",
        "Initial testing"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      phase: "Migration & Development",
      duration: "3-6 Weeks",
      icon: <FaExchangeAlt className="text-green-500 text-4xl mb-4" />,
      activities: [
        "Data migration",
        "System integration",
        "Scalability implementation",
        "Redundancy setup",
        "Continuous deployment"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      phase: "Testing & Optimization",
      duration: "2-3 Weeks",
      icon: <FaChartLine className="text-yellow-500 text-4xl mb-4" />,
      activities: [
        "Performance testing",
        "Load testing",
        "Security validation",
        "Optimization",
        "Documentation"
      ],
      color: "from-yellow-500 to-yellow-600"
    },
    {
      phase: "Launch & Support",
      duration: "Ongoing",
      icon: <FaRocket className="text-red-500 text-4xl mb-4" />,
      activities: [
        "Production deployment",
        "24/7 monitoring",
        "Continuous improvement",
        "Regular maintenance",
        "Technical support"
      ],
      color: "from-red-500 to-red-600"
    }
  ];

  const pageInfo = {
    title: "Infrastructure Solutions",
    description: "Build, optimize, and manage robust infrastructure that powers your digital transformation.",
    benefits: [
      { icon: <FaServer className="text-blue-600 text-2xl" />, title: "Scalable Architecture", description: "Design infrastructure that grows with your business needs" },
      { icon: <FaShieldAlt className="text-blue-600 text-2xl" />, title: "Enhanced Security", description: "Implement enterprise-grade security across your infrastructure" },
      { icon: <FaChartLine className="text-blue-600 text-2xl" />, title: "Performance Optimization", description: "Maximize efficiency and minimize downtime" },
      { icon: <FaPiggyBank className="text-blue-600 text-2xl" />, title: "Cost Efficiency", description: "Optimize resource allocation and reduce operational costs" }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 opacity-90"
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
                <FaServer className="text-5xl text-white" />
                <h1 className="text-5xl md:text-6xl font-bold text-white">
                  {pageInfo.title}
              </h1>
              </div>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {pageInfo.description}
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <button
                  onClick={() => openInquiryForm('General Inquiry')}
                  className="group inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all duration-300"
                >
                  <span className="mr-2">Get Started with Infrastructure Solutions</span>
                  <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
          </motion.div>
        </div>
      </section>

      {/* Infrastructure Services Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Infrastructure Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From on-premises to cloud and hybrid environments, our infrastructure services are designed to meet your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infraGridItems && infraGridItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className={`bg-gradient-to-r ${item.color} text-white p-3 rounded-lg w-16 h-16 flex items-center justify-center mb-6`}>
                    {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
                <ul className="space-y-2">
                  {item.features && item.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering measurable infrastructure improvements for businesses across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {metrics && metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className={`absolute top-0 left-0 w-full h-2 rounded-t-2xl bg-gradient-to-r ${metric.color}`} />
                <div className="flex items-start">
                  <div className="mr-4">{metric.icon}</div>
                  <div>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900">{metric.value}</span>
                      <span className="text-xl ml-1 text-gray-600">{metric.unit}</span>
                  </div>
                    <h3 className="text-lg font-semibold text-gray-900 mt-2">{metric.label}</h3>
                    <p className="text-gray-600 mt-1">{metric.description}</p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-sm text-gray-500">{metric.metric}</p>
                      <p className="text-sm font-medium text-blue-600 mt-1">{metric.achievement}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Flexible Pricing Models
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the infrastructure service model that best fits your business needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {pricingModels && pricingModels.map((model, index) => (
              <motion.div
                key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`${model.bgClass} rounded-xl shadow-lg p-5 hover:shadow-xl transition-all duration-300 relative flex flex-col h-full
                    ${index === 2 ? 'border-2 border-blue-500 scale-105' : 'border border-transparent hover:border-blue-300'}`}
                >
                  {index === 2 && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-3 py-0.5 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                <h3 className="text-md font-bold text-gray-900 mb-1">{model.title}</h3>
                <p className="text-xl font-bold text-blue-600 mb-1">{model.description}</p>
                <p className="text-gray-600 mb-3 text-sm">{model.subtitle}</p>
                <ul className="space-y-1.5 mb-5 flex-grow">
                  {model.features && model.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <FaCheckCircle className="text-blue-500 mr-1.5 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <button 
                    onClick={() => openInquiryForm(model.title)}
                    className="w-full py-2 px-3 rounded-full bg-blue-500 text-white hover:bg-blue-700 transition-colors duration-300 text-sm"
                  >
                    {model.ctaText}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Infrastructure Implementation Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology ensures a smooth and efficient infrastructure deployment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {deliveryTimeline && deliveryTimeline.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative p-6 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col"
              >
                <div className={`absolute top-0 left-0 w-full h-2 rounded-t-2xl bg-gradient-to-r ${phase.color}`} />
                <div className="mb-3">{phase.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.phase}</h3>
                <p className="text-blue-600 font-semibold mb-3 text-sm">{phase.duration}</p>
                <ul className="space-y-2 text-sm">
                  {phase.activities && phase.activities.map((activity, aIndex) => (
                    <li key={aIndex} className="flex items-start">
                      <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{activity}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Infrastructure Compliance & Security
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our infrastructure solutions meet the highest industry standards and compliance requirements
            </p>
      </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {complianceCerts && complianceCerts.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-blue-600 text-4xl mb-4 flex justify-center">{cert.icon}</div>
                <h3 className="text-lg font-bold text-gray-900">{cert.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Infrastructure?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Partner with CloudDigify to build a resilient, scalable, and secure infrastructure foundation for your business
          </p>
          <button 
            onClick={() => openInquiryForm('General Inquiry')}
            className="bg-white text-blue-800 hover:bg-blue-100 transition-colors px-8 py-3 rounded-full font-medium shadow-lg text-lg">
            Schedule a Consultation
            </button>
        </div>
      </section>

      {/* Service Inquiry Form */}
      <ServiceInquiryForm 
        isOpen={isInquiryFormOpen}
        onClose={() => setIsInquiryFormOpen(false)}
        serviceName={inquiryType}
      />
    </div>
  );
}