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
  hidden: {
    opacity: 0,
    y: -5,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.2 }
  }
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
  const [hoverTimeout, setHoverTimeout] = useState(null);
  
  useEffect(() => {
    setIsOpen(false);
    setActiveMenu(null);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = (menu) => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveMenu(null);
    }, 300);
    setHoverTimeout(timeout);
  };

  return (
    <motion.nav
      ref={navRef}
      initial={false}
      animate={isScrolled ? "scrolled" : "top"}
      variants={{
        scrolled: {
          backgroundColor: "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
        },
        top: {
          backgroundColor: "rgba(255, 255, 255, 1)",
          backdropFilter: "none",
          boxShadow: "none"
        }
      }}
      className="fixed w-full z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center space-x-3">
            <img src="/logo.png" alt="CloudDigify" className="h-10 w-auto" />
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              CloudDigify
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 ${
                  isActive ? 'text-blue-600 bg-blue-50' : ''
                }`
              }
            >
              Home
            </NavLink>

            {/* Services Menu */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`px-4 py-2 rounded-lg flex items-center space-x-1 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 ${
                  activeMenu === 'services' ? 'text-blue-600 bg-blue-50' : ''
                }`}
              >
                <span>Services</span>
                <motion.span
                  animate={{ rotate: activeMenu === 'services' ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaChevronDown className="h-4 w-4" />
                </motion.span>
              </button>

              <AnimatePresence>
                {activeMenu === 'services' && (
                  <motion.div
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="absolute top-full left-1/2 transform -translate-x-1/2 w-[1000px] bg-white rounded-2xl shadow-lg border border-gray-100/50 backdrop-blur-xl"
                    style={{ 
                      marginTop: '1rem',
                      background: 'linear-gradient(to bottom right, rgba(255,255,255,0.9), rgba(255,255,255,0.95))'
                    }}
                  >
                    <div className="grid grid-cols-3 gap-6 p-8">
                      {getServiceCategories().map((category, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          className="group relative"
                        >
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="relative p-4">
                            <div className="flex items-center space-x-3 mb-4">
                              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 text-white transform group-hover:scale-110 transition-transform duration-300">
                                {category.icon}
                              </div>
                              <h3 className="font-semibold text-gray-900">
                                {category.title}
                              </h3>
                            </div>
                            <ul className="space-y-1">
                              {category.submenu.map((item, idx) => (
                                <motion.li
                                  key={idx}
                                  variants={itemVariants}
                                >
                                  <Link
                                    to={item.path}
                                    className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 rounded-lg px-3 py-2 transition-all duration-200 hover:bg-blue-50/50"
                                  >
                                    <motion.span
                                      initial={{ width: 0 }}
                                      whileHover={{ width: '6px' }}
                                      className="h-1.5 bg-blue-600 rounded-full"
                                    />
                                    <span>{item.title}</span>
                                  </Link>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-b-2xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Ready to Transform?</h4>
                          <p className="text-blue-100">Discover how our services can elevate your business</p>
                        </div>
                        <Link
                          to="/contact"
                          className="inline-flex items-center px-4 py-2 rounded-lg bg-white text-blue-600 hover:bg-blue-50 transition-all duration-200 transform hover:scale-105"
                        >
                          Get Started
                          <FaArrowRight className="ml-2" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Menu */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('industries')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`px-4 py-2 rounded-lg flex items-center space-x-1 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 ${
                  activeMenu === 'industries' ? 'text-blue-600 bg-blue-50' : ''
                }`}
              >
                <span>Industries</span>
                <motion.span
                  animate={{ rotate: activeMenu === 'industries' ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaChevronDown className="h-4 w-4" />
                </motion.span>
              </button>

              <AnimatePresence>
                {activeMenu === 'industries' && (
                  <motion.div
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="absolute top-full left-1/2 transform -translate-x-1/2 w-[800px] bg-white rounded-2xl shadow-lg border border-gray-100/50 backdrop-blur-xl"
                    style={{ 
                      marginTop: '1rem',
                      background: 'linear-gradient(to bottom right, rgba(255,255,255,0.9), rgba(255,255,255,0.95))'
                    }}
                  >
                    <div className="grid grid-cols-2 gap-6 p-8">
                      {getIndustryCategories().map((industry, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          className="group relative"
                        >
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="relative p-4">
                            <div className="flex items-center space-x-3 mb-4">
                              <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 text-white transform group-hover:scale-110 transition-transform duration-300">
                                {industry.icon}
                              </div>
                              <h3 className="font-semibold text-gray-900">
                                {industry.title}
                              </h3>
                            </div>
                            <ul className="space-y-1">
                              {industry.submenu.map((item, idx) => (
                                <motion.li
                                  key={idx}
                                  variants={itemVariants}
                                >
                                  <Link
                                    to={item.path}
                                    className="flex items-center space-x-2 text-sm text-gray-600 hover:text-indigo-600 rounded-lg px-3 py-2 transition-all duration-200 hover:bg-indigo-50/50"
                                  >
                                    <motion.span
                                      initial={{ width: 0 }}
                                      whileHover={{ width: '6px' }}
                                      className="h-1.5 bg-indigo-600 rounded-full"
                                    />
                                    <span>{item.title}</span>
                                  </Link>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-6 rounded-b-2xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Industry Expertise</h4>
                          <p className="text-blue-100">Solutions tailored for your industry challenges</p>
                        </div>
                        <Link
                          to="/industries"
                          className="inline-flex items-center px-4 py-2 rounded-lg bg-white text-indigo-600 hover:bg-indigo-50 transition-all duration-200 transform hover:scale-105"
                        >
                          Explore Industries
                          <FaArrowRight className="ml-2" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink 
              to="/training" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 ${
                  isActive ? 'text-blue-600 bg-blue-50' : ''
                }`
              }
            >
              Training
            </NavLink>

            <NavLink 
              to="/use-cases" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 ${
                  isActive ? 'text-blue-600 bg-blue-50' : ''
                }`
              }
            >
              Use Cases
            </NavLink>

            <Link
              to="/contact"
              className="ml-4 px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              {/* Mobile menu content */}
              {/* ... Implement mobile menu content ... */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar; 