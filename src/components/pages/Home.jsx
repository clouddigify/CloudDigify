import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCloud, FaRocket, FaShieldAlt, FaServer, FaChartLine, FaCogs, FaDatabase, FaMobileAlt, FaBrain, FaCheck, FaAws, FaMicrosoft, FaGoogle, FaCalendarAlt, FaQuoteLeft, FaCalculator, FaIndustry, FaNewspaper, FaTrophy, FaChartBar, FaAddressBook, FaMailBulk, FaAt, FaHandshake } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import LazyImage from '../common/LazyImage';
import SEO from '../common/SEO';
import HeroSlider from '../common/HeroSlider';

// Lazy load non-critical components
const CloudPartners = lazy(() => import('../CloudPartners'));
const ImageSlider = lazy(() => import('../common/ImageSlider'));
const ServiceInquiryForm = lazy(() => import('../common/ServiceInquiryForm'));

// Loading fallback
const LoadingFallback = () => (
  <div className="w-full h-64 flex items-center justify-center">
    <div className="animate-pulse bg-gray-200 rounded-xl w-full h-full max-w-md mx-auto" />
  </div>
);

const Home = () => {
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openInquiryForm = (serviceName = '') => {
    setSelectedService(serviceName);
    setShowInquiryForm(true);
  };

  // Pre-defined dimensions for UI elements to prevent layout shifts
  useEffect(() => {
    // Reserve space for elements that might cause layout shifts
    document.documentElement.style.setProperty('--header-height', '80px');
    document.documentElement.style.setProperty('--footer-form-height', '180px');
    
    return () => {
      document.documentElement.style.removeProperty('--header-height');
      document.documentElement.style.removeProperty('--footer-form-height');
    };
  }, []);

  const heroSlides = [
    {
      backgroundImage: '/assets/home-hero/slide1.jpg',
      alt: 'Digital Transformation',
      title: 'Transform Your Enterprise with Cloud Excellence',
      description: 'Accelerate innovation and growth with our comprehensive cloud solutions.',
      cta: {
        label: 'Explore Solutions',
        link: '#'
      }
    },
    {
      backgroundImage: '/assets/home-hero/slide2.jpg',
      alt: 'AI & Automation',
      title: 'Innovate with AI & Automation',
      description: 'Streamline operations and unlock insights with AI-powered solutions.',
      cta: {
        label: 'Discover AI',
        link: '/services/ai/artificial-intelligence'
      }
    },
    {
      backgroundImage: '/assets/home-hero/slide3.jpg',
      alt: 'Security & Compliance',
      title: 'Enterprise-Grade Cloud Security',
      description: 'Protect your digital assets with real-time monitoring and compliance.',
      cta: {
        label: 'Secure Now',
        link: '/services/security/cyber-defence'
      }
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -10,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: { duration: 0.3 }
    }
  };

  const services = [
    { 
      icon: <FaCloud className="text-4xl" />, 
      title: "Cloud Migration & Modernization", 
      description: "Transform your legacy systems into modern, cloud-native applications with zero downtime",
      gradient: "from-blue-500 to-cyan-500",
      path: "/services/cloud/aws"
    },
    { 
      icon: <FaCogs className="text-4xl" />, 
      title: "DevOps Excellence", 
      description: "Accelerate delivery with automated CI/CD pipelines and infrastructure as code",
      gradient: "from-purple-500 to-pink-500",
      path: "/services/devops/cicd"
    },
    { 
      icon: <FaShieldAlt className="text-4xl" />, 
      title: "Cloud Security & Compliance", 
      description: "Enterprise-grade security with real-time threat detection and compliance automation",
      gradient: "from-green-500 to-emerald-500",
      path: "/services/security/cyber-defence"
    },
    { 
      icon: <FaDatabase className="text-4xl" />, 
      title: "Data Analytics & AI", 
      description: "Turn your data into actionable insights with advanced analytics and AI/ML solutions",
      gradient: "from-orange-500 to-red-500",
      path: "/services/consulting/data-analytics"
    },
    { 
      icon: <FaMobileAlt className="text-4xl" />, 
      title: "Cloud-Native Development", 
      description: "Build scalable, resilient applications using microservices and containers",
      gradient: "from-indigo-500 to-purple-500",
      path: "/services/digital-engineering"
    },
    { 
      icon: <FaBrain className="text-4xl" />, 
      title: "Intelligent Automation", 
      description: "Streamline operations with AI-powered automation and workflow optimization",
      gradient: "from-rose-500 to-pink-500",
      path: "/services/ai/artificial-intelligence"
    }
  ];

  const highlights = [
    "Multi-Cloud Architecture Expertise",
    "Digital Transformation Solutions",
    "Industry-Specific Cloud Strategy",
    "Continuous Innovation & Optimization"
  ];

  const stats = [
    { number: "300+", label: "Enterprise Transformations" },
    { number: "99.99%", label: "Solution Reliability" },
    { number: "40%", label: "Avg. Performance Gain" },
    { number: "15+", label: "Industry Verticals Served" }
  ];

  const partners = [
    {
      name: "AWS",
      logo: "/assets/partners/aws-logo.svg",
      services: ["EC2", "Lambda", "S3", "RDS", "EKS"]
    },
    {
      name: "Microsoft Azure",
      logo: "/assets/partners/azure-logo.svg",
      services: ["Azure VMs", "Azure Functions", "CosmosDB", "AKS"]
    },
    {
      name: "Google Cloud",
      logo: "/assets/partners/gcp-logo.svg",
      services: ["Compute Engine", "Cloud Functions", "BigQuery", "GKE"]
    },
    {
      name: "Oracle Cloud",
      logo: "/assets/partners/oracle-logo.svg",
      services: ["OCI", "Oracle DB", "Container Engine"]
    }
  ];

  // Add new data structures for new sections
  const caseStudies = [
    {
      company: "Global Financial Corp",
      industry: "Finance",
      challenge: "Legacy System Migration",
      solution: "Cloud-Native Transformation",
      results: "40% Cost Reduction, 99.99% Uptime",
      logo: "/images/case-studies/finance.jpg"
    },
    {
      company: "HealthTech Solutions",
      industry: "Healthcare",
      challenge: "Data Security & Compliance",
      solution: "Zero-Trust Security Implementation",
      results: "HIPAA Compliance, 60% Faster Processing",
      logo: "/images/case-studies/healthcare.jpg"
    },
    {
      company: "RetailGiant",
      industry: "Retail",
      challenge: "Scale During Peak Season",
      solution: "Auto-scaling Cloud Architecture",
      results: "3x Faster Loading, 45% Cost Savings",
      logo: "/images/case-studies/retail.jpg"
    }
  ];

  const industryVerticals = [
    {
      name: "Healthcare",
      solutions: ["HIPAA Compliance", "Patient Data Analytics", "Telemedicine Infrastructure"],
      icon: "🏥"
    },
    {
      name: "Finance",
      solutions: ["Secure Banking Cloud", "Real-time Analytics", "Fraud Detection"],
      icon: "💰"
    },
    {
      name: "Retail",
      solutions: ["E-commerce Platform", "Inventory Management", "Customer Analytics"],
      icon: "🛍️"
    },
    {
      name: "Manufacturing",
      solutions: ["IoT Integration", "Supply Chain Optimization", "Predictive Maintenance"],
      icon: "🏭"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO",
      company: "TechCorp Inc.",
      quote: "CloudDigify transformed our infrastructure, reducing costs by 45% while improving performance.",
      image: "/images/testimonials/sarah.jpg",
      metrics: "45% cost reduction"
    },
    {
      name: "Michael Chen",
      position: "Head of Engineering",
      company: "InnovateTech",
      quote: "The migration was seamless, and our applications now scale automatically with demand.",
      image: "/images/testimonials/michael.jpg",
      metrics: "99.99% uptime"
    }
  ];

  const insights = [
    {
      title: "The Future of Cloud Computing in 2024",
      category: "Trends",
      date: "2024-01-15",
      readTime: "5 min"
    },
    {
      title: "Securing Your Cloud Infrastructure",
      category: "Security",
      date: "2024-01-10",
      readTime: "4 min"
    }
  ];

  return (
    <>
      <SEO
        title="CloudDigify | Cloud, DevOps, Digital Transformation Services"
        description="CloudDigify offers cloud, DevOps, AI, and digital transformation services to accelerate your business growth."
        canonicalUrl="https://clouddigify.com/"
        keywords={['cloud services', 'devops', 'digital transformation', 'AI', 'CloudDigify']}
      />
      <Helmet>
        <title>CloudDigify | Cloud Transformation & Digital Solutions</title>
        <meta name="description" content="CloudDigify delivers enterprise-grade cloud transformation, AI, and digital solutions to accelerate innovation and growth for businesses worldwide." />
        <meta name="keywords" content="cloud transformation, digital solutions, cloud migration, AI solutions, enterprise cloud, cloud security" />
        <meta httpEquiv="Cache-Control" content="max-age=86400, public" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </Helmet>
      <div className="min-h-screen">
        {/* Hero Section - Carousel */}
        <section className="relative w-full">
          <HeroSlider slides={heroSlides} />
        </section>

        {/* Services Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Cloud Transformation Expertise</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Future-proof your business with strategic cloud adoption that drives innovation, efficiency, and sustainable growth across your organization
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  custom={index}
                >
                  <div className={`p-4 sm:p-6 bg-gradient-to-br ${service.gradient}`}>
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4">{service.description}</p>
                    <div className="flex justify-between items-center">
                      <button 
                        onClick={() => openInquiryForm(service.title)}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm sm:text-base font-medium"
                      >
                        Learn More
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CRM & Business Tools Section */}
        <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <FaHandshake className="mr-2" />
                Authorized Partners
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                CRM & Business Tools
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Streamline your business operations with our CRM and email solutions from trusted partners Zoho and Microsoft.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-6">
                  <FaAddressBook className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Zoho CRM</h3>
                <p className="text-gray-600 mb-4">Complete customer relationship management with lead tracking, sales analytics, and automation.</p>
                <div className="flex items-center text-blue-600 font-medium">
                  <Link to="/services/crm/zoho-crm" className="flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mb-6">
                  <FaMailBulk className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Zoho Mail</h3>
                <p className="text-gray-600 mb-4">Professional business email with custom domains, advanced security, and seamless integration.</p>
                <div className="flex items-center text-blue-600 font-medium">
                  <Link to="/services/crm/zoho-mail" className="flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mb-6">
                  <FaAt className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Microsoft Mail</h3>
                <p className="text-gray-600 mb-4">Enterprise-grade email solution with Microsoft 365 integration and advanced security features.</p>
                <div className="flex items-center text-blue-600 font-medium">
                  <Link to="/services/crm/microsoft-mail" className="flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Exclusive Partner Benefits</h3>
                <p className="text-lg text-gray-600">Get more value with our authorized partnerships</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Zoho Partnership Card */}
                <motion.div
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <FaHandshake className="text-white text-xl" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Zoho Partnership</h4>
                      <p className="text-blue-600 font-medium">Authorized Partner</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">Special partner pricing</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">Free migration support</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">Priority technical support</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">Custom training programs</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-blue-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-blue-600 font-medium">Save up to 30%</span>
                      <Link to="/services/crm/zoho-crm" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </motion.div>

                {/* Microsoft Partnership Card */}
                <motion.div
                  className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100 hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mr-4">
                      <FaHandshake className="text-white text-xl" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Microsoft Partnership</h4>
                      <p className="text-purple-600 font-medium">Authorized Reseller</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">Authorized reseller discounts</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">Expert implementation</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">24/7 support</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">Integration services</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-purple-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-purple-600 font-medium">Save up to 25%</span>
                      <Link to="/services/crm/microsoft-mail" className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 bg-white p-6 rounded-xl shadow-md"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <FaCheck className="text-blue-600 text-xl" />
                  </div>
                  <span className="text-lg font-medium text-gray-800">{highlight}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Cloud Partners Section */}
        <Suspense fallback={<LoadingFallback />}>
          <CloudPartners />
        </Suspense>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Accelerate Your Digital Transformation
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join the 300+ enterprises already achieving measurable business outcomes with our tailored cloud solutions
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <button
                  onClick={() => openInquiryForm('Digital Transformation')}
                  className="px-8 py-4 bg-white text-blue-600 font-medium rounded-lg shadow-lg hover:bg-blue-50 transition duration-300 flex items-center"
                >
                  <FaCalendarAlt className="mr-2" />
                  Schedule a Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industry Solutions Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">Industry Solutions</h2>
              <p className="text-xl text-gray-600">Tailored solutions for your industry</p>
            </motion.div>
            <div className="grid md:grid-cols-4 gap-6">
              {industryVerticals.map((industry, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{industry.name}</h3>
                  <ul className="space-y-2">
                    {industry.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-center">
                        <FaCheck className="text-green-500 mr-2" />
                        <span className="text-gray-600">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Free Assessment CTA */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-4">Get Your Free Cloud Assessment</h2>
              <p className="text-xl mb-8">Discover your cloud transformation potential with our expert analysis</p>
              <button
                onClick={() => openInquiryForm('Free Assessment')}
                className="bg-white text-indigo-600 px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all"
              >
                Start Free Assessment
              </button>
            </motion.div>
          </div>
        </section>
      </div>
      
      {/* Service Inquiry Form Modal */}
      <Suspense fallback={null}>
        <ServiceInquiryForm 
          isOpen={showInquiryForm}
          onClose={() => setShowInquiryForm(false)}
          serviceName={selectedService}
        />
      </Suspense>
    </>
  );
};

export default Home; 