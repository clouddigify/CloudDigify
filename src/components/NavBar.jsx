import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown, FaChevronRight, FaCloud, FaServer, FaCode, FaShieldAlt, FaDatabase, FaUsers, FaMobileAlt, FaRobot, FaCogs, FaBrain, FaNetworkWired, FaDesktop, FaProjectDiagram, FaCheckCircle, FaTools, FaIndustry, FaCubes, FaSyncAlt, FaUsersCog, FaArrowRight, FaSearch, FaHome, FaGraduationCap, FaBlog, FaEnvelope, FaLightbulb, FaChartLine, FaRocket } from 'react-icons/fa';

// Import the page configuration for paths
import { 
  mainPages, 
  servicePages, 
  industryPages
} from '../config/pageConfig';

// You can replace this with your actual logo path
const logoUrl = '/logo.png';

// Define the multi-level service structure
const getServiceCategories = () => {
  const serviceCategories = [
    {
      title: 'Cloud Services',
      icon: <FaCloud className="mr-2" />,
      submenu: [
        { title: 'Cloud & Infrastructure Services', path: '/services/cloud-infrastructure' },
        { title: 'Cloud Migration', path: '/services/cloud-migration' },
        { title: 'Cloud Optimization', path: '/services/cloud-optimization' },
        { title: 'Disaster Recovery', path: '/services/disaster-recovery' },
        { title: 'Next Generation Workplace', path: '/services/next-gen-workplace' }
      ]
    },
    {
      title: 'DevOps & Engineering',
      icon: <FaCode className="mr-2" />,
      submenu: [
        { title: 'DevOps & CI/CD', path: '/services/devops' },
        { title: 'Infrastructure as Code', path: '/services/infrastructure-as-code' },
        { title: 'Containerization', path: '/services/containerization' },
        { title: 'Serverless Architecture', path: '/services/serverless' },
        { title: 'Agile Transformation', path: '/services/agile-transformation' }
      ]
    },
    {
      title: 'Security & Compliance',
      icon: <FaShieldAlt className="mr-2" />,
      submenu: [
        { title: 'Security & Compliance', path: '/services/security-compliance' },
        { title: 'Cyber Defense Resiliency', path: '/services/cyber-defense' },
        { title: 'Privacy Services', path: '/services/privacy-services' },
        { title: 'Privacy SmartHub', path: '/services/privacy-smarthub' }
      ]
    },
    {
      title: 'Data & Analytics',
      icon: <FaDatabase className="mr-2" />,
      submenu: [
        { title: 'Data Analytics Services', path: '/services/data-analytics' },
        { title: 'Business Intelligence', path: '/services/business-intelligence' },
        { title: 'Data Warehousing', path: '/services/data-warehousing' },
        { title: 'Big Data Solutions', path: '/services/big-data' }
      ]
    },
    {
      title: 'Digital Experiences',
      icon: <FaMobileAlt className="mr-2" />,
      submenu: [
        { title: 'Experience Design', path: '/services/experience-design' },
        { title: 'Digital Interactive', path: '/services/digital-interactive' },
        { title: 'Enterprise Mobility', path: '/services/enterprise-mobility' },
        { title: 'Digital Integration', path: '/services/digital-integration' },
        { title: 'Digital Runtime', path: '/services/digital-runtime' }
      ]
    },
    {
      title: 'AI & Automation',
      icon: <FaBrain className="mr-2" />,
      submenu: [
        { title: 'Artificial Intelligence', path: '/services/artificial-intelligence' },
        { title: 'Intelligent Automation', path: '/services/intelligent-automation' },
        { title: 'Cognitive Services', path: '/services/cognitive-services' },
        { title: 'Robotic Process Automation', path: '/services/rpa' }
      ]
    },
    {
      title: 'Enterprise Services',
      icon: <FaServer className="mr-2" />,
      submenu: [
        { title: 'Managed Cloud Services', path: '/services/managed-services' },
        { title: 'Architecture Design', path: '/services/architecture-design' },
        { title: 'Application Development', path: '/services/application-development' },
        { title: 'Application Maintenance', path: '/services/application-maintenance' },
        { title: 'System Integration', path: '/services/system-integration' }
      ]
    },
    {
      title: 'Industry Solutions',
      icon: <FaIndustry className="mr-2" />,
      submenu: [
        { title: 'Industry 4.0', path: '/services/industry-4-0' },
        { title: 'Blockchain Solutions', path: '/services/blockchain' },
        { title: 'Quality Engineering', path: '/services/quality-engineering' },
        { title: 'Organizational Change', path: '/services/organizational-change' }
      ]
    },
    {
      title: 'Consulting Services',
      icon: <FaProjectDiagram className="mr-2" />,
      submenu: [
        { title: 'Technology Consulting', path: '/services/technology-consulting' },
        { title: 'Digital Transformation', path: '/services/digital-transformation' },
        { title: 'Enterprise Architecture', path: '/services/enterprise-architecture' },
        { title: 'Business Process Consulting', path: '/services/business-process' },
        { title: 'Organizational Change Management', path: '/services/ocm' }
      ]
    },
    {
      title: 'Quality Assurance',
      icon: <FaCheckCircle className="mr-2" />,
      submenu: [
        { title: 'Assurance & Quality Engineering', path: '/services/quality-assurance' },
        { title: 'Test Automation', path: '/services/test-automation' },
        { title: 'Performance Testing', path: '/services/performance-testing' },
        { title: 'Security Testing', path: '/services/security-testing' }
      ]
    },
    {
      title: 'Specialized Solutions',
      icon: <FaCubes className="mr-2" />,
      submenu: [
        { title: 'IoT Solutions', path: '/services/iot-solutions' },
        { title: 'Platform Engineering', path: '/services/platform-engineering' },
        { title: 'Reimagined Enterprise', path: '/services/reimagined-enterprise' },
        { title: 'Smart City Solutions', path: '/services/smart-city' }
      ]
    }
  ];
  
  return serviceCategories;
};

// Define industry categories
const getIndustryCategories = () => {
  const industryCategories = [
    {
      title: 'Financial Services',
      icon: <FaDatabase className="mr-2" />,
      submenu: [
        { title: 'Banking', path: '/industries/banking' },
        { title: 'Insurance', path: '/industries/insurance' },
        { title: 'Capital Markets', path: '/industries/capital-markets' },
        { title: 'Fintech', path: '/industries/fintech' }
      ]
    },
    {
      title: 'Manufacturing',
      icon: <FaCogs className="mr-2" />,
      submenu: [
        { title: 'Manufacturing', path: '/industries/manufacturing' },
        { title: 'Advanced Manufacturing', path: '/industries/advanced-manufacturing' },
        { title: 'Automotive', path: '/industries/automotive' },
        { title: 'Industrial IoT', path: '/industries/industrial-iot' }
      ]
    },
    {
      title: 'Technology',
      icon: <FaNetworkWired className="mr-2" />,
      submenu: [
        { title: 'Technology', path: '/industries/technology' },
        { title: 'Software', path: '/industries/software' },
        { title: 'Hardware', path: '/industries/hardware' },
        { title: 'Telecommunications', path: '/industries/telecommunications' }
      ]
    },
    {
      title: 'Healthcare',
      icon: <FaTools className="mr-2" />,
      submenu: [
        { title: 'Healthcare', path: '/industries/healthcare' },
        { title: 'Healthcare Providers', path: '/industries/healthcare-providers' },
        { title: 'Life Sciences', path: '/industries/life-sciences' },
        { title: 'Health Tech', path: '/industries/health-tech' }
      ]
    },
    {
      title: 'Retail & CPG',
      icon: <FaDesktop className="mr-2" />,
      submenu: [
        { title: 'Retail & CPG', path: '/industries/retail-cpg' },
        { title: 'Retail', path: '/industries/retail' },
        { title: 'Consumer Goods', path: '/industries/consumer-goods' },
        { title: 'E-commerce', path: '/industries/e-commerce' }
      ]
    },
    {
      title: 'Energy & Utilities',
      icon: <FaSyncAlt className="mr-2" />,
      submenu: [
        { title: 'Energy & Utilities', path: '/industries/energy-utilities' },
        { title: 'Energy', path: '/industries/energy' },
        { title: 'Utilities', path: '/industries/utilities' },
        { title: 'Oil & Gas', path: '/industries/oil-gas' }
      ]
    },
    {
      title: 'Communications & Media',
      icon: <FaUsers className="mr-2" />,
      submenu: [
        { title: 'Communications & Media', path: '/industries/communications-media' },
        { title: 'Communications', path: '/industries/communications' },
        { title: 'Media & Entertainment', path: '/industries/media-entertainment' },
        { title: 'Digital Publishing', path: '/industries/digital-publishing' }
      ]
    },
    {
      title: 'Travel & Hospitality',
      icon: <FaUsersCog className="mr-2" />,
      submenu: [
        { title: 'Travel & Hospitality', path: '/industries/travel-hospitality' },
        { title: 'Travel', path: '/industries/travel' },
        { title: 'Transport', path: '/industries/transport' },
        { title: 'Hospitality', path: '/industries/hospitality' }
      ]
    }
  ];
  
  return industryCategories;
};

// Build navigation links
const getNavLinks = () => {
const links = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { 
      title: 'Services',
      path: '/services',
      hasSubmenu: true,
      submenu: getServiceCategories(),
      isMultiLevel: true
    },
    { 
      title: 'Industries',
      path: '/industries',
      hasSubmenu: true,
      submenu: getIndustryCategories(),
      isMultiLevel: true
    },
    { 
      title: 'Training Services',
      path: '/training-services',
      icon: <FaGraduationCap className="mr-2" />,
      hasSubmenu: true,
      submenu: [
        {
          title: 'Cloud & DevOps',
          icon: <FaCloud className="mr-2" />,
          submenu: [
            { title: 'AWS Certification Training', path: '/training-services/aws' },
            { title: 'Azure Cloud Training', path: '/training-services/azure' },
            { title: 'DevOps Tools & Practices', path: '/training-services/devops' },
            { title: 'Kubernetes & Container Training', path: '/training-services/kubernetes' }
          ]
        },
        {
          title: 'Digital Transformation',
          icon: <FaRocket className="mr-2" />,
          submenu: [
            { title: 'Agile & Scrum', path: '/training-services/agile' },
            { title: 'Digital Leadership', path: '/training-services/leadership' },
            { title: 'Innovation Workshops', path: '/training-services/innovation' }
          ]
        },
        {
          title: 'Enterprise Solutions',
          icon: <FaCogs className="mr-2" />,
          submenu: [
            { title: 'Enterprise Architecture', path: '/training-services/architecture' },
            { title: 'Microservices', path: '/training-services/microservices' },
            { title: 'API Design & Development', path: '/training-services/api' }
          ]
        },
        {
          title: 'Security & Compliance',
          icon: <FaShieldAlt className="mr-2" />,
          submenu: [
            { title: 'Cybersecurity Training', path: '/training-services/cybersecurity' },
            { title: 'Compliance Workshops', path: '/training-services/compliance' },
            { title: 'Security Best Practices', path: '/training-services/security' }
          ]
        }
      ]
    },
    { 
      title: 'Use Cases',
      path: '/use-cases',
      icon: <FaLightbulb className="mr-2" />,
      hasSubmenu: true,
      submenu: [
        {
          title: 'Success Stories',
          icon: <FaChartLine className="mr-2" />,
          submenu: [
            { title: 'Enterprise Transformation', path: '/use-cases/enterprise' },
            { title: 'Cloud Migration', path: '/use-cases/migration' },
            { title: 'Digital Innovation', path: '/use-cases/innovation' }
          ]
        },
        {
          title: 'Solutions Portfolio',
          icon: <FaCubes className="mr-2" />,
          submenu: [
            { title: 'Custom Solutions', path: '/use-cases/custom-solutions' },
            { title: 'Industry Solutions', path: '/use-cases/industry-solutions' },
            { title: 'Platform Solutions', path: '/use-cases/platform-solutions' }
          ]
        },
        {
          title: 'IP & Accelerators',
          icon: <FaRocket className="mr-2" />,
          submenu: [
            { title: 'Reusable Components', path: '/use-cases/components' },
            { title: 'Frameworks', path: '/use-cases/frameworks' },
            { title: 'Tools & Utilities', path: '/use-cases/tools' }
          ]
        }
      ]
    },
    { title: 'Contact', path: '/contact' }
  ];
  
  return links;
};

// Animation variants
const navVariants = {
  hidden: { opacity: 0, y: -25 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    }
  }
};

const linkVariants = {
  hover: { 
    scale: 1.05, 
    color: "#1E40AF", 
    transition: { duration: 0.2 } 
  },
  tap: { 
    scale: 0.95,
    transition: { duration: 0.1 } 
  }
};

const menuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      when: "afterChildren"
    }
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const menuItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 }
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2
    }
  }
};

const menuContainerVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      staggerChildren: 0.04
    }
  }
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navRef = useRef(null);
  const location = useLocation();
  
  // Reset states on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveMenu(null);
  }, [location]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <motion.nav
      ref={navRef}
      initial={false}
      animate={isScrolled ? "scrolled" : "top"}
      variants={{
        scrolled: {
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
        },
        top: {
          backgroundColor: "rgba(255, 255, 255, 1)",
          backdropFilter: "none",
          boxShadow: "none"
        }
      }}
      className="fixed w-full z-50 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center space-x-3">
            <img src="/logo.png" alt="CloudDigify" className="h-8 w-auto" />
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              CloudDigify
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 ${isActive ? 'text-blue-600' : ''}`
              }
            >
              <FaHome className="mr-2" />
              Home
            </NavLink>

            {/* Solutions Link */}
            <NavLink 
              to="/solutions" 
              className={({ isActive }) => 
                `flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 ${isActive ? 'text-blue-600' : ''}`
              }
            >
              <FaCubes className="mr-2" />
              Solutions
            </NavLink>

            {/* Services Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu('services')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button 
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                <FaCogs className="mr-2" />
                <span>Services</span>
                <FaChevronDown className={`transform transition-transform duration-200 ${activeMenu === 'services' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeMenu === 'services' && (
                  <>
                    {/* Backdrop */}
                    <motion.div
                      variants={backdropVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="fixed inset-0 bg-black/5 backdrop-blur-sm z-40"
                      style={{ marginTop: '4rem' }}
                    />

                    {/* Menu Container */}
                    <motion.div
                      variants={menuContainerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="absolute top-full left-1/2 transform -translate-x-1/2 w-[1000px] bg-white rounded-2xl shadow-xl border border-gray-100 z-50"
                      style={{ marginTop: '1rem' }}
                    >
                      {/* Services Grid */}
                      <div className="grid grid-cols-3 gap-6 p-8">
                        {getServiceCategories().map((category, index) => (
                          <motion.div
                            key={index}
                            variants={menuItemVariants}
                            className="group relative bg-white rounded-xl p-4 hover:bg-blue-50 transition-colors duration-200"
                          >
                            <div className="flex items-center space-x-3 mb-4">
                              <div className="p-2 rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-200 transition-colors duration-200">
                                {category.icon}
                              </div>
                              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                                {category.title}
                              </h3>
                            </div>
                            <ul className="space-y-2">
                              {category.submenu.map((item, idx) => (
                                <motion.li
                                  key={idx}
                                  variants={menuItemVariants}
                                >
                                  <Link
                                    to={item.path}
                                    className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-100/50 rounded-lg px-3 py-2 transition-all duration-200"
                                  >
                                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                    <span>{item.title}</span>
                                  </Link>
                                </motion.li>
                              ))}
                            </ul>
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-100 rounded-xl transition-colors duration-200" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Featured Section */}
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-b-2xl">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-lg font-semibold mb-2">Explore Our Services</h4>
                            <p className="text-blue-100">Discover how we can transform your business</p>
                          </div>
                          <Link
                            to="/services"
                            className="inline-flex items-center px-4 py-2 rounded-lg bg-white text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                          >
                            View All Services
                            <FaArrowRight className="ml-2" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu('industries')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button 
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                <FaIndustry className="mr-2" />
                <span>Industries</span>
                <FaChevronDown className={`transform transition-transform duration-200 ${activeMenu === 'industries' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeMenu === 'industries' && (
                  <>
                    {/* Backdrop */}
                    <motion.div
                      variants={backdropVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="fixed inset-0 bg-black/5 backdrop-blur-sm z-40"
                      style={{ marginTop: '4rem' }}
                    />

                    {/* Menu Container */}
                    <motion.div
                      variants={menuContainerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="absolute top-full left-1/2 transform -translate-x-1/2 w-[800px] bg-white rounded-2xl shadow-xl border border-gray-100 z-50"
                      style={{ marginTop: '1rem' }}
                    >
                      {/* Industries Grid */}
                      <div className="grid grid-cols-2 gap-6 p-8">
                        {getIndustryCategories().map((category, index) => (
                          <motion.div
                            key={index}
                            variants={menuItemVariants}
                            className="group relative bg-white rounded-xl p-4 hover:bg-blue-50 transition-colors duration-200"
                          >
                            <div className="flex items-center space-x-3 mb-4">
                              <div className="p-2 rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-200 transition-colors duration-200">
                                {category.icon}
                              </div>
                              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                                {category.title}
                              </h3>
                            </div>
                            <ul className="space-y-2">
                              {category.submenu.map((item, idx) => (
                                <motion.li
                                  key={idx}
                                  variants={menuItemVariants}
                                >
                                  <Link
                                    to={item.path}
                                    className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-100/50 rounded-lg px-3 py-2 transition-all duration-200"
                                  >
                                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                    <span>{item.title}</span>
                                  </Link>
                                </motion.li>
                              ))}
                            </ul>
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-100 rounded-xl transition-colors duration-200" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Featured Section */}
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-b-2xl">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-lg font-semibold mb-2">Industry Expertise</h4>
                            <p className="text-blue-100">Solutions tailored for your industry</p>
                          </div>
                          <Link
                            to="/industries"
                            className="inline-flex items-center px-4 py-2 rounded-lg bg-white text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                          >
                            View All Industries
                            <FaArrowRight className="ml-2" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Training Services Link */}
            <NavLink 
              to="/training-services"
              className={({ isActive }) => 
                `flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 ${isActive ? 'text-blue-600' : ''}`
              }
            >
              <FaGraduationCap className="mr-2" />
              Training
            </NavLink>

            {/* Use Cases Link */}
            <NavLink 
              to="/use-cases"
              className={({ isActive }) => 
                `flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 ${isActive ? 'text-blue-600' : ''}`
              }
            >
              <FaLightbulb className="mr-2" />
              Use Cases
            </NavLink>

            {/* Contact Button */}
            <NavLink 
              to="/contact"
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 group"
            >
              <FaEnvelope className="mr-2" />
              Contact Us
              <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
          >
            {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="max-h-[80vh] overflow-y-auto">
              <div className="px-4 py-2 space-y-1">
                <Link
                  to="/"
                  className="flex items-center px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                >
                  <FaHome className="mr-3" />
                  Home
                </Link>

                <Link
                  to="/solutions"
                  className="flex items-center px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                >
                  <FaCubes className="mr-3" />
                  Solutions
                </Link>

                {/* Mobile Services Accordion */}
                <div className="space-y-2">
                  <button
                    onClick={() => setActiveMenu(activeMenu === 'mobile-services' ? null : 'mobile-services')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  >
                    <div className="flex items-center">
                      <FaCogs className="mr-3" />
                      <span>Services</span>
                    </div>
                    <FaChevronDown className={`transform transition-transform duration-200 ${activeMenu === 'mobile-services' ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {activeMenu === 'mobile-services' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4"
                      >
                        {getServiceCategories().map((category, index) => (
                          <div key={index} className="py-1">
                            <div className="flex items-center px-3 py-2 text-sm font-medium text-gray-900">
                              {category.icon}
                              <span className="ml-2">{category.title}</span>
                            </div>
                            <div className="pl-8">
                              {category.submenu.map((item, idx) => (
                                <Link
                                  key={idx}
                                  to={item.path}
                                  className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                                >
                                  {item.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Industries Accordion */}
                <div className="space-y-2">
                  <button
                    onClick={() => setActiveMenu(activeMenu === 'mobile-industries' ? null : 'mobile-industries')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  >
                    <div className="flex items-center">
                      <FaIndustry className="mr-3" />
                      <span>Industries</span>
                    </div>
                    <FaChevronDown className={`transform transition-transform duration-200 ${activeMenu === 'mobile-industries' ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {activeMenu === 'mobile-industries' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4"
                      >
                        {getIndustryCategories().map((category, index) => (
                          <div key={index} className="py-1">
                            <div className="flex items-center px-3 py-2 text-sm font-medium text-gray-900">
                              {category.icon}
                              <span className="ml-2">{category.title}</span>
                            </div>
                            <div className="pl-8">
                              {category.submenu.map((item, idx) => (
                                <Link
                                  key={idx}
                                  to={item.path}
                                  className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                                >
                                  {item.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/training-services"
                  className="flex items-center px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                >
                  <FaGraduationCap className="mr-3" />
                  Training
                </Link>

                <Link
                  to="/use-cases"
                  className="flex items-center px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                >
                  <FaLightbulb className="mr-3" />
                  Use Cases
                </Link>

                <Link
                  to="/contact"
                  className="flex items-center px-3 py-2 rounded-lg text-base font-medium bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700"
                >
                  <FaEnvelope className="mr-3" />
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl"
            >
              <div className="flex items-center space-x-4 mb-4">
                <FaSearch className="text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services, industries, or content..."
                  className="flex-1 border-none focus:ring-0 text-lg"
                  autoFocus
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <FaTimes />
                </button>
              </div>
              
              {/* Quick Links */}
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Popular Searches</h3>
                <div className="flex flex-wrap gap-2">
                  {['Cloud Migration', 'DevOps', 'Security', 'AI & ML', 'Digital Transformation'].map((term, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchQuery(term)}
                      className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700 hover:bg-gray-200"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar; 