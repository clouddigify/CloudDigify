import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCloud, FaShieldAlt, FaCogs, FaDatabase, FaMobileAlt, FaBrain, FaCheck, FaCalendarAlt, FaIndustry, FaAddressBook, FaFileInvoiceDollar, FaSyncAlt, FaUsersCog, FaHeartbeat, FaUniversity, FaShoppingBag, FaGraduationCap } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import LazyImage from '../common/LazyImage';
import SEO from '../common/SEO';
import { PLATFORM_MODULES, PLATFORM_ROUTES } from '../../config/platformConfig';

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

  const industryVerticals = [
    {
      name: "Healthcare",
      solutions: ["Healthcare Compliance Support", "Patient Data Analytics", "Telemedicine Infrastructure"],
      icon: <FaHeartbeat className="text-4xl text-blue-600" />
    },
    {
      name: "Finance",
      solutions: ["Secure Banking Cloud", "Real-time Analytics", "Fraud Detection"],
      icon: <FaUniversity className="text-4xl text-blue-600" />
    },
    {
      name: "Retail",
      solutions: ["E-commerce Platform", "Inventory Management", "Customer Analytics"],
      icon: <FaShoppingBag className="text-4xl text-blue-600" />
    },
    {
      name: "Manufacturing",
      solutions: ["IoT Integration", "Supply Chain Optimization", "Predictive Maintenance"],
      icon: <FaIndustry className="text-4xl text-blue-600" />
    }
  ];

  const platformModuleIcons = [
    <FaAddressBook className="text-2xl text-blue-600" />,
    <FaFileInvoiceDollar className="text-2xl text-blue-600" />,
    <FaCloud className="text-2xl text-blue-600" />,
    <FaSyncAlt className="text-2xl text-blue-600" />,
    <FaShieldAlt className="text-2xl text-blue-600" />,
    <FaUsersCog className="text-2xl text-blue-600" />,
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
        {/* Dual-door Hero */}
        <section className="relative bg-white border-b border-[#E5E7EB] mt-16">
          <div className="container-site py-14 md:py-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="eyebrow bg-[#EEF4FF] text-[#1E5EFF]">
                  Cloud Services + SaaS Platform
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] mb-5">
                  Cloud operations, billing and growth — in one ecosystem.
                </h1>
                <p className="text-lg text-[#4B5563] max-w-[640px] mb-8">
                  CloudDigify helps businesses modernize cloud infrastructure while giving MSPs, CSP partners
                  and cloud resellers a platform to manage sales, billing, subscriptions and customer operations.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                  <Link to={PLATFORM_ROUTES.demo} className="btn-primary">
                    Request Demo
                  </Link>
                  <Link to="/services" className="btn-secondary">
                    Explore Cloud Services
                  </Link>
                </div>
              </div>

              {/* Dual doors */}
              <div className="grid grid-cols-1 gap-4">
                <Link
                  to="/services"
                  className="group card p-6 md:p-7 hover:shadow-md transition-shadow flex items-start gap-5"
                >
                  <div className="icon-tile mt-1">
                    <FaCogs className="text-xl" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-wider uppercase text-[#6B7280] mb-1">Cloud & IT Services</p>
                    <h2 className="text-xl font-semibold text-[#111827] mb-1.5">AWS, Azure, GCP, DevOps, security and consulting</h2>
                    <p className="text-sm text-[#4B5563] mb-3">Hands-on cloud engineering and managed delivery for your business.</p>
                    <span className="btn-tertiary text-sm">Talk to an Expert →</span>
                  </div>
                </Link>
                <Link
                  to={PLATFORM_ROUTES.landing}
                  className="group rounded-xl border border-[#1E5EFF]/30 bg-[#EEF4FF] p-6 md:p-7 hover:shadow-md transition-shadow flex items-start gap-5"
                >
                  <div className="w-11 h-11 rounded-lg bg-white text-[#1E5EFF] flex items-center justify-center flex-shrink-0 mt-1 border border-[#1E5EFF]/20">
                    <FaCloud className="text-xl" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-wider uppercase text-[#1E5EFF] mb-1">CloudDigify Platform</p>
                    <h2 className="text-xl font-semibold text-[#111827] mb-1.5">CRM, billing, cloud billing and renewals in one product</h2>
                    <p className="text-sm text-[#4B5563] mb-3">SaaS for MSPs, CSP partners, cloud resellers and IT service companies.</p>
                    <span className="btn-tertiary text-sm">Request Demo →</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust / technology ecosystem */}
        <Suspense fallback={<LoadingFallback />}>
          <CloudPartners />
        </Suspense>

        {/* CloudDigify Platform Section */}
        <section className="section section-brand-tint border-y border-slate-100">
          <div className="container-site">
            <div className="text-center mb-12">
              <h2 className="section-heading">CloudDigify Platform</h2>
              <p className="section-sub mx-auto">
                One platform for MSPs, CSP partners, cloud resellers and IT service companies to manage
                sales, billing, cloud operations, subscriptions and customer collaboration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {PLATFORM_MODULES.map((module, index) => (
                <div key={module.title} className="card p-6 hover:shadow-md transition-shadow">
                  <div className="icon-tile mb-4">
                    {platformModuleIcons[index]}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1.5">{module.title}</h3>
                  <p className="text-slate-600 text-sm">{module.description}</p>
                </div>
              ))}
            </div>

            {/* Compact real product preview */}
            <div className="max-w-3xl mx-auto mb-10">
              <img
                src="/images/platform/platform-crm.webp"
                alt="CloudDigify CRM leads workspace showing lead status, ownership and follow-up management"
                width="1600"
                height="1000"
                loading="lazy"
                decoding="async"
                className="w-full h-auto rounded-xl border border-[#E5E7EB] shadow-sm"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to={PLATFORM_ROUTES.landing} className="btn-primary">
                Explore Platform
              </Link>
              <Link to={PLATFORM_ROUTES.pricing} className="btn-secondary">
                View Pricing
              </Link>
              <Link to={PLATFORM_ROUTES.demo} className="btn-tertiary">
                Request a Demo →
              </Link>
            </div>
          </div>
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

        {/* Training strip */}
        <section className="section-tinted border-y border-[#E5E7EB]">
          <div className="container-site py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-[#F59E0B]/10 text-[#B45309] flex items-center justify-center flex-shrink-0">
                <FaGraduationCap className="text-xl" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[#111827] mb-1">Cloud & technology training</h2>
                <p className="text-sm text-[#4B5563]">AWS, Azure, Google Cloud, DevOps, Kubernetes and corporate programs.</p>
              </div>
            </div>
            <Link to="/training" className="btn-secondary whitespace-nowrap">Request Training Details</Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section section-navy">
          <div className="container-site text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to move forward?</h2>
            <p className="text-lg text-blue-100/80 mb-8 max-w-2xl mx-auto">
              Talk to us about cloud services for your business — or see the CloudDigify Platform in action.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={() => openInquiryForm('Digital Transformation')}
                className="btn-primary bg-white text-[#101B33] hover:bg-blue-50"
              >
                <FaCalendarAlt className="mr-2" />
                Talk to an Expert
              </button>
              <Link to={PLATFORM_ROUTES.demo} className="btn-secondary border-white/60 text-white bg-transparent hover:bg-white/10">
                Request a Platform Demo
              </Link>
            </div>
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