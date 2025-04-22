import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown, FaCloud, FaServer, FaCode, FaShieldAlt, FaDatabase, FaUsers, FaMobileAlt, FaRobot, FaCogs, FaBrain, FaNetworkWired, FaDesktop, FaProjectDiagram, FaCheckCircle, FaTools, FaIndustry, FaCubes, FaSyncAlt, FaUsersCog, FaArrowRight } from 'react-icons/fa';

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
  { title: 'Training', path: '/training' },
    { title: 'Blogs', path: '/blogs' },
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
  closed: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2 }
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 }
  }
};

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  
  // State for navigation links
  const [links, setLinks] = useState(getNavLinks());

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle submenu 
  const toggleSubmenu = (index, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    if (activeSubmenu === index) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(index);
    }
  };

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveSubmenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Create submenu columns for better organization
  const createSubmenuColumns = (submenuItems, columnCount = 3) => {
    const columns = Array(columnCount).fill().map(() => []);
    const itemsPerColumn = Math.ceil(submenuItems.length / columnCount);
    
    submenuItems.forEach((item, index) => {
      const columnIndex = Math.floor(index / itemsPerColumn);
      columns[columnIndex].push(item);
    });
    
    return columns;
  };

  return (
    <motion.nav
      ref={navRef}
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`sticky top-0 z-50 w-full bg-white ${scrolled ? 'shadow-lg' : 'shadow-md'} transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        <Link to="/" className="flex items-center">
          <motion.img 
            src={logoUrl} 
            alt="CloudDigify Logo" 
            className="h-10" 
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span 
            className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            CloudDigify
          </motion.span>
        </Link>

        {/* Hamburger button - visible only on small screens */}
        <motion.button
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </motion.button>

        {/* Desktop navigation */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8">
          {links.map((link, index) => (
            <motion.li 
              key={link.path} 
              className="relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {link.hasSubmenu ? (
                <div>
                  <motion.div 
                    className="flex items-center cursor-pointer text-gray-700 py-2 px-1"
                    onClick={(e) => toggleSubmenu(index, e)}
                    whileHover={linkVariants.hover}
                    whileTap={linkVariants.tap}
                  >
                    <span className={`${activeSubmenu === index ? 'text-blue-600 font-semibold' : ''}`}>
                      {link.title}
                    </span>
                    <motion.div
                      animate={{ rotate: activeSubmenu === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronDown className={`ml-1 text-xs ${activeSubmenu === index ? 'text-blue-600' : ''}`} />
                    </motion.div>
                  </motion.div>
                  
                  {/* Mega menu dropdown */}
                  <AnimatePresence>
                    {activeSubmenu === index && link.isMultiLevel && (
                      <motion.div 
                        className="fixed left-0 right-0 mt-1 bg-white shadow-xl border-t border-gray-100 z-50 max-h-[80vh] overflow-y-auto"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="max-w-7xl mx-auto py-6 px-8">
                          {/* Header section */}
                          <motion.div 
                            className="flex justify-between items-center pb-4 mb-4 border-b border-gray-200"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                          >
                            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">{link.title}</h2>
                            <motion.div
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <NavLink 
                                to={link.path}
                                className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition"
                                onClick={() => setActiveSubmenu(null)}
                              >
                                View All {link.title}
                                <FaArrowRight className="ml-2 text-xs" />
                              </NavLink>
                            </motion.div>
                          </motion.div>
                          
                          {/* Grid of categories */}
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {link.submenu.map((category, catIndex) => (
                              <motion.div 
                                key={catIndex} 
                                className="space-y-3 bg-white rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + (catIndex * 0.05) }}
                                whileHover={{ y: -5 }}
                              >
                                <div className="flex items-center font-semibold text-gray-800 border-b pb-2">
                                  <motion.div 
                                    whileHover={{ rotate: 5, scale: 1.1 }}
                                    className="text-blue-600"
                                  >
                                    {category.icon}
                                  </motion.div>
                                  <span>{category.title}</span>
                                </div>
                                
                                {category.submenu && (
                                  <ul className="space-y-2">
                                    {category.submenu.map((item, itemIndex) => (
                                      <motion.li 
                                        key={itemIndex}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + (itemIndex * 0.03) }}
                                      >
                                        <NavLink
                                          to={item.path}
                                          className="block text-gray-600 hover:text-blue-600 transition-colors pl-6 py-1 border-l-2 border-gray-100 hover:border-blue-500"
                                          onClick={() => setActiveSubmenu(null)}
                                        >
                                          <motion.span
                                            whileHover={{ x: 3 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                          >
                                            {item.title}
                                          </motion.span>
                                        </NavLink>
                                      </motion.li>
                                    ))}
                                  </ul>
                                )}
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.div
                  whileHover={linkVariants.hover}
                  whileTap={linkVariants.tap}
                >
              <NavLink
                    to={link.path}
                className={({ isActive }) =>
                      `py-2 px-1 relative ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.title}
                        {isActive && (
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                            layoutId="navbar-underline"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </>
                    )}
              </NavLink>
                </motion.div>
              )}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Mobile navigation - visible only on small screens */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-2">
              {links.map((link, index) => (
                <motion.div 
                  key={link.path} 
                  className="border-b border-gray-100 last:border-0"
                  variants={menuItemVariants}
                >
                  {link.hasSubmenu ? (
                    <div>
                      <motion.div 
                        className="flex items-center justify-between py-3 text-gray-800"
                        onClick={(e) => toggleSubmenu(index, e)}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="font-medium">{link.title}</span>
                        <motion.div
                          animate={{ rotate: activeSubmenu === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FaChevronDown className="text-xs" />
                        </motion.div>
                      </motion.div>
                      
                      {/* Mobile dropdown */}
                      <AnimatePresence>
                        {activeSubmenu === index && (
      <motion.div
                            className="pb-4"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
                          >
                            <NavLink
                              to={link.path}
                              className="block py-2 font-medium text-blue-600 mb-2"
                              onClick={() => setMenuOpen(false)}
                            >
                              <motion.span
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                                className="flex items-center"
                              >
                                View All {link.title}
                                <FaArrowRight className="ml-2 text-xs" />
                              </motion.span>
                            </NavLink>
                            
                            <div className="space-y-4">
                              {link.submenu.map((category, catIndex) => (
                                category.submenu.length > 0 && (
                                  <motion.div 
                                    key={catIndex} 
                                    className="pl-3 border-l-2 border-blue-100"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * catIndex }}
                                  >
                                    <motion.div 
                                      whileHover={{ x: 5 }}
                                      transition={{ type: "spring", stiffness: 400 }}
                                    >
                                      <NavLink
                                        to={category.path || '#'}
                                        className="flex items-center font-medium text-gray-700 mb-1 hover:text-blue-600"
                                        onClick={() => setMenuOpen(false)}
                                      >
                                        <motion.div 
                                          className="text-blue-500 mr-2"
                                          whileHover={{ rotate: 5, scale: 1.1 }}
                                        >
                                          {category.icon}
                                        </motion.div>
                                        {category.title}
                                      </NavLink>
                                    </motion.div>
                                    
                                    {category.submenu && (
                                      <ul className="pl-6 space-y-1">
                                        {category.submenu.map((item, itemIndex) => (
                                          <motion.li 
                                            key={itemIndex}
                                            initial={{ opacity: 0, x: -5 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + (0.05 * itemIndex) }}
                                          >
              <NavLink
                                              to={item.path}
                                              className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
                                            >
                                              <motion.span
                                                whileHover={{ x: 3 }}
                                                transition={{ type: "spring", stiffness: 400 }}
                                              >
                                                {item.title}
                                              </motion.span>
              </NavLink>
                                          </motion.li>
          ))}
        </ul>
                                    )}
                                  </motion.div>
                                )
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.div
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                          `block py-3 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}`
                        }
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.title}
                      </NavLink>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
      </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar; 