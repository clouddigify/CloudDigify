import React from 'react';
import { SiAmazonaws } from 'react-icons/si';
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
  FaCloudUploadAlt
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import PageTemplate from '../../templates/PageTemplate';
import ImageSlider from '../../common/ImageSlider';

const AWS = () => {
  const sliderImages = [
    {
      url: '/images/aws/aws-infrastructure.jpg',
      alt: 'AWS Cloud Infrastructure',
      overlay: true,
      title: 'AWS Cloud Infrastructure',
      description: 'Build scalable and reliable applications with AWS cloud services'
    },
    {
      url: '/images/aws/aws-security.jpg',
      alt: 'AWS Security',
      overlay: true,
      title: 'Enterprise-Grade Security',
      description: "Protect your data with AWS's comprehensive security features"
    },
    {
      url: '/images/aws/aws-automation.jpg',
      alt: 'AWS Automation',
      overlay: true,
      title: 'DevOps & Automation',
      description: 'Streamline your operations with AWS automation tools'
    }
  ];

  const stats = [
    {
      icon: <FaServer className="text-4xl" />,
      value: '99.99',
      unit: '%',
      label: 'Uptime Guarantee',
      description: 'Enterprise-grade reliability',
      color: 'from-blue-500 to-blue-600',
      metric: 'Average across all deployments',
      achievement: '5-star reliability rating'
    },
    {
      icon: <FaRocket className="text-4xl" />,
      value: '200+',
      unit: '',
      label: 'Successful Launches',
      description: 'Cloud migrations completed',
      color: 'from-indigo-500 to-indigo-600',
      metric: 'In the last 24 months',
      achievement: 'Zero downtime migrations'
    },
    {
      icon: <FaPiggyBank className="text-4xl" />,
      value: '72',
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
      description: 'AWS security standards',
      color: 'from-purple-500 to-purple-600',
      metric: 'Compliance rate',
      achievement: 'Zero security incidents'
    },
    {
      icon: <FaGlobe className="text-4xl" />,
      value: '25+',
      unit: '',
      label: 'Global Regions',
      description: 'Worldwide deployment',
      color: 'from-rose-500 to-rose-600',
      metric: 'Multi-region presence',
      achievement: '24/7 global support'
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      value: '45',
      unit: 'min',
      label: 'Response Time',
      description: 'Average resolution time',
      color: 'from-amber-500 to-amber-600',
      metric: 'Support SLA',
      achievement: '98% client satisfaction'
    }
  ];

  const pricingModels = [
    {
      title: 'Managed Hourly Service',
      description: '75/hour',
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
      title: 'Weekly Engagements',
      description: '2,800/week',
      subtitle: 'Ideal for ongoing projects',
      ctaText: 'Schedule Call',
      bgClass: 'bg-gradient-to-b from-blue-50 to-white',
      features: [
        'Dedicated AWS expert',
        'Weekly progress reports',
        'Priority support',
        'Regular check-ins'
      ]
    },
    {
      title: 'Monthly Retainer',
      description: '8,000/month',
      subtitle: 'Best value for enterprises',
      ctaText: 'Get Started',
      bgClass: 'bg-gradient-to-b from-emerald-50 to-white',
      features: [
        'Full-time dedicated team',
        'Comprehensive management',
        'Strategic planning',
        '24/7 premium support'
      ]
    },
    {
      title: 'Custom Enterprise',
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
      icon: <FaSearch className="text-3xl text-blue-500" />,
      activities: [
        'Initial consultation and requirements gathering',
        'Infrastructure assessment and gap analysis',
        'Solution architecture design',
        'Cost estimation and resource planning'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      phase: 'Foundation Setup',
      duration: '1-2 weeks',
      icon: <FaCloudUploadAlt className="text-3xl text-indigo-500" />,
      activities: [
        'AWS account configuration and setup',
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

  const pageInfo = {
    icon: <SiAmazonaws className="text-[#FF9900] text-6xl mb-6" />,
    title: 'Amazon Web Services (AWS)',
    description: 'Transform your business with AWS cloud solutions. We help you leverage the full power of AWS to build, deploy, and scale applications with confidence.',
    heroBackground: 'from-blue-600 to-blue-800',
    overviewTitle: 'AWS Cloud Solutions',
    overviewDescription1: 'Amazon Web Services (AWS) is the world\'s most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally.',
    overviewDescription2: 'As an AWS partner, we help organizations accelerate their cloud journey with expert guidance, proven methodologies, and cutting-edge solutions tailored to their unique needs.',
    benefits: [
      'Scalable Infrastructure - Easily scale your applications up or down based on demand',
      'Cost Optimization - Pay only for what you use with our efficient resource management',
      'Enhanced Security - Protect your data with AWS\'s comprehensive security features',
      '24/7 Support - Round-the-clock expert support for your AWS infrastructure'
    ],
    approachPoints: [
      'Assessment of your current infrastructure',
      'Custom migration strategy development',
      'Seamless implementation and testing',
      'Continuous monitoring and optimization',
      'Regular security audits and updates'
    ],
    ctaText: 'Book Free Consultation',
    ctaLink: '/contact',
    showBenefits: true,
    showSidebar: true,
    showCta: true,
    showFeatures: true,
    featuresTitle: 'Our Pricing Models',
    featuresDescription: 'Choose the perfect plan that fits your business needs',
    featuresContainerClassName: 'container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl',
    featuresWrapperClassName: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center',
    features: pricingModels.map((model, index) => ({
      className: `relative bg-white rounded-xl transition-all duration-300 ease-in-out
        ${index === 2 
          ? 'border-2 border-emerald-400' 
          : 'border border-blue-100'} 
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
              <span className="bg-emerald-400 text-white px-3 py-0.5 rounded-full text-xs font-medium whitespace-nowrap">
                Most Popular
              </span>
            </div>
          )}
          
          <div className="text-center mb-4">
            <h3 className={`text-base font-semibold ${
              index === 2 ? 'text-emerald-500' : 'text-blue-500'
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
                      index === 2 ? 'text-emerald-400' : 'text-blue-400'
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
                ? 'bg-emerald-400 hover:bg-emerald-500' 
                : 'bg-blue-500 hover:bg-blue-600'
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
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-12">
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
                            className="w-4 h-4 mr-2 mt-0.5 text-green-500 flex-shrink-0"
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
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-8">
              Our Track Record
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${stat.color}`} />
                  <div className="p-4">
                    <div className="flex flex-col items-center">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} text-white transform group-hover:scale-110 transition-transform duration-300 mb-3`}>
                        {React.cloneElement(stat.icon, { className: "text-2xl" })}
                      </div>
                      <div className="text-center">
                        <div className="flex items-baseline justify-center">
                          <span className="text-2xl font-bold text-gray-800">{stat.value}</span>
                          <span className="text-lg font-semibold text-gray-600 ml-0.5">{stat.unit}</span>
                        </div>
                        <h3 className="text-sm font-medium text-gray-800 mb-2">{stat.label}</h3>
                        <div className="text-xs text-gray-500">{stat.description}</div>
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
    <>
      <div className="relative w-full h-screen">
        <ImageSlider images={sliderImages} />
      </div>
      <div className="relative bg-white">
        <PageTemplate pageInfo={pageInfo} pageType="service" />
      </div>
    </>
  );
};

export default AWS;