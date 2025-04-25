import React from 'react';
import { SiAmazonaws } from 'react-icons/si';
import { 
  FaServer, 
  FaGlobe, 
  FaPiggyBank
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
      icon: <FaServer className="text-blue-600" />,
      value: '99.99',
      unit: '%',
      label: 'Service Uptime',
      description: 'Industry-leading reliability for your applications'
    },
    {
      icon: <FaGlobe className="text-blue-600" />,
      value: '25+',
      unit: '',
      label: 'Global Regions',
      description: 'Deploy closer to your users worldwide'
    },
    {
      icon: <FaPiggyBank className="text-blue-600" />,
      value: '72',
      unit: '%',
      label: 'Cost Reduction',
      description: 'Average savings with our optimization services'
    }
  ];

  const pricingModels = [
    {
      title: 'Managed Hourly Service',
      description: '75/hour',
      subtitle: 'Perfect for small projects',
      ctaText: 'Start Now',
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
      phase: 'Discovery',
      duration: '1-2 weeks',
      activities: [
        'Requirements gathering',
        'Infrastructure assessment',
        'Solution design'
      ]
    },
    {
      phase: 'Implementation',
      duration: '2-4 weeks',
      activities: [
        'Environment setup',
        'Migration execution',
        'Testing & validation'
      ]
    },
    {
      phase: 'Optimization',
      duration: 'Ongoing',
      activities: [
        'Performance monitoring',
        'Cost optimization',
        'Security updates'
      ]
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
    featuresWrapperClassName: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 auto-rows-fr',
    features: pricingModels.map((model, index) => ({
      className: `relative bg-white rounded-3xl transition-all duration-300 ease-in-out
        ${index === 2 ? 'border-2 border-emerald-400 mt-4' : 'border border-blue-100'} 
        shadow-sm hover:shadow-xl
        p-6 lg:p-8
        flex flex-col
        h-full
        transform hover:scale-[1.02]
        ${index === 2 ? 'lg:-translate-y-4' : ''}
      `,
      content: (
        <div className="flex flex-col h-full">
          {index === 2 && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-emerald-400 text-white px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                Most Popular
              </span>
            </div>
          )}
          
          <h3 className={`text-xl font-semibold mb-6 ${index === 2 ? 'text-emerald-500' : 'text-blue-500'}`}>
            {model.title}
          </h3>

          <div className="mb-8">
            <div className="flex items-baseline flex-wrap">
              {!model.description.includes('Custom') && (
                <span className="text-2xl font-semibold text-gray-900">$</span>
              )}
              <span className={`text-4xl lg:text-5xl font-bold text-gray-900 ${!model.description.includes('Custom') ? 'ml-1' : ''}`}>
                {model.description.includes('Custom') ? 'Custom Quote' : model.description.split('/')[0].trim()}
              </span>
              {!model.description.includes('Custom') && (
                <span className="text-gray-500 ml-2 text-lg">
                  /{model.description.split('/')[1]}
                </span>
              )}
            </div>
            <p className="text-gray-500 mt-2 text-sm">
              {model.description.includes('Custom') ? 'Contact us for custom pricing' : 'Billed per period'}
            </p>
          </div>

          <div className="flex-grow">
            <ul className="space-y-4">
              {model.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <svg 
                    className={`h-5 w-5 mr-3 mt-0.5 flex-shrink-0 ${index === 2 ? 'text-emerald-400' : 'text-blue-400'}`}
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
                  <span className="text-gray-600 text-sm lg:text-base">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <button className={`w-full py-3 px-6 rounded-xl font-medium text-white transition-all duration-300
              ${index === 2 ? 'bg-emerald-400 hover:bg-emerald-500' : 'bg-blue-500 hover:bg-blue-600'}
              transform hover:scale-[1.02] active:scale-[0.98]
            `}>
              {model.ctaText || 'Get Started'}
            </button>
          </div>
        </div>
      )
    })),
    additionalSections: [
      {
        content: (
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-8">
              Delivery Timeline
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {deliveryTimeline.map((phase, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg relative"
                >
                  <div className="text-2xl font-bold text-blue-600 mb-2">{phase.phase}</div>
                  <div className="text-gray-500 mb-4">{phase.duration}</div>
                  <ul className="space-y-2">
                    {phase.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-600">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        )
      },
      {
        content: (
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-8">
              Our Track Record
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg text-center"
                >
                  <div className="text-4xl mb-4 text-blue-600">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">
                    {stat.value}{stat.unit}
                  </div>
                  <div className="text-lg font-medium text-gray-600 mb-2">{stat.label}</div>
                  <div className="text-gray-500">{stat.description}</div>
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