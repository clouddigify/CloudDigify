import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown, FaCloud, FaServer, FaCode, FaShieldAlt, FaDatabase, FaUsers, FaMobileAlt, FaRobot, FaCogs, FaBrain, FaNetworkWired, FaDesktop, FaProjectDiagram, FaCheckCircle, FaTools, FaIndustry, FaCubes, FaSyncAlt, FaUsersCog, FaArrowRight } from 'react-icons/fa';

// Import the page configuration system
import { 
  mainPages, 
  servicePages, 
  industryPages,
  isPageEnabled
} from '../config/pageConfig';

// You can replace this with your actual logo path
const logoUrl = '/logo.png';

// Define the multi-level service structure using the configuration
const getEnabledServiceCategories = () => {
  // Helper function to check if any submenu item in a category is enabled
  const hasEnabledSubmenuItems = (items) => {
    return items.some(item => {
      // Extract the key from the path (e.g., 'cloud-migration' from '/services/cloud-migration')
      const pathSegments = item.path.split('/');
      const pageKey = pathSegments[pathSegments.length - 1]
        .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()); // Convert kebab-case to camelCase
      
      return isPageEnabled(pageKey, 'service');
    });
  };

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
      ].filter(item => {
        const key = item.path.split('/').pop().replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
        return isPageEnabled(key, 'service');
      })
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
      ].filter(item => {
        const key = item.path.split('/').pop().replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
        return isPageEnabled(key, 'service');
      })
    },
    {
      title: 'Security & Compliance',
      icon: <FaShieldAlt className="mr-2" />,
      submenu: [
        { title: 'Security & Compliance', path: '/services/security-compliance' },
        { title: 'Cyber Defense Resiliency', path: '/services/cyber-defense' },
        { title: 'Privacy Services', path: '/services/privacy-services' },
        { title: 'Privacy SmartHub', path: '/services/privacy-smarthub' }
      ].filter(item => {
        const key = item.path.split('/').pop().replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
        return isPageEnabled(key, 'service');
      })
    },
    {
      title: 'Data & Analytics',
      icon: <FaDatabase className="mr-2" />,
      submenu: [
        { title: 'Data Analytics Services', path: '/services/data-analytics' },
        { title: 'Business Intelligence', path: '/services/business-intelligence' },
        { title: 'Data Warehousing', path: '/services/data-warehousing' },
        { title: 'Big Data Solutions', path: '/services/big-data' }
      ].filter(item => {
        const key = item.path.split('/').pop().replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
        return isPageEnabled(key, 'service');
      })
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
      ].filter(item => {
        const key = item.path.split('/').pop().replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
        return isPageEnabled(key, 'service');
      })
    },
    {
      title: 'AI & Automation',
      icon: <FaBrain className="mr-2" />,
      submenu: [
        { title: 'Artificial Intelligence', path: '/services/artificial-intelligence' },
        { title: 'Intelligent Automation', path: '/services/intelligent-automation' },
        { title: 'Cognitive Services', path: '/services/cognitive-services' },
        { title: 'Robotic Process Automation', path: '/services/rpa' }
      ].filter(item => {
        const key = item.path.split('/').pop().replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
        return isPageEnabled(key, 'service');
      })
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
      ].filter(item => {
        const key = item.path.split('/').pop().replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
        return isPageEnabled(key, 'service');
      })
    },
    {
      title: 'Industry Solutions',
      icon: <FaIndustry className="mr-2" />,
      submenu: [
        { title: 'Industry 4.0', path: '/services/industry-4-0' },
        { title: 'Blockchain Solutions', path: '/services/blockchain' },
        { title: 'Quality Engineering', path: '/services/quality-engineering' },
        { title: 'Organizational Change', path: '/services/organizational-change' }
      ].filter(item => {
        const key = item.path.split('/').pop().replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
        return isPageEnabled(key, 'service');
      })
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
      ].filter(item => {
        const key = item.path.split('/').pop().replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
        return isPageEnabled(key, 'service');
      })
    },
    {
      title: 'Quality Assurance',
      icon: <FaCheckCircle className="mr-2" />,
      submenu: [
        { title: 'Assurance & Quality Engineering', path: '/services/quality-assurance' },
        { title: 'Test Automation', path: '/services/test-automation' },
        { title: 'Performance Testing', path: '/services/performance-testing' },
        { title: 'Security Testing', path: '/services/security-testing' }
      ].filter(item => {
        const key = item.path.split('/').pop().replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
        return isPageEnabled(key, 'service');
      })
    },
    {
      title: 'Specialized Solutions',
      icon: <FaCubes className="mr-2" />,
      submenu: [
        { title: 'IoT Solutions', path: '/services/iot-solutions' },
        { title: 'Platform Engineering', path: '/services/platform-engineering' },
        { title: 'Reimagined Enterprise', path: '/services/reimagined-enterprise' },
        { title: 'Smart City Solutions', path: '/services/smart-city' }
      ].filter(item => {
        const key = item.path.split('/').pop().replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
        return isPageEnabled(key, 'service');
      })
    }
  ];
  
  // Only return categories that have enabled submenu items
  return serviceCategories.filter(category => category.submenu.length > 0);
};

// Define industry categories using the configuration
const getEnabledIndustryCategories = () => {
  const industryCategories = [
    {
      title: 'Financial Services',
      icon: <FaDatabase className="mr-2" />,
      submenu: [
        { title: 'Banking', path: '/industries/banking' },
        { title: 'Insurance', path: '/industries/insurance' },
        { title: 'Capital Markets', path: '/industries/capital-markets' },
        { title: 'Fintech', path: '/industries/fintech' }
      ].filter(item => {
        const key = item.path.split('/').pop().replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
        return isPageEnabled(key, 'industry');
      })
    },
    {
      title: 'Manufacturing',
      icon: <FaCogs className="mr-2" />,
      submenu: [
        { title: 'Advanced Manufacturing', path: '/industries/advanced-manufacturing' },
        { title: 'Automotive', path: '/industries/automotive' },
        { title: 'Industrial IoT', path: '/industries/industrial-iot' }
      ].filter(item => {
        const key = item.path.split('/').pop().replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
        return isPageEnabled(key, 'industry');
      })
    },
    {
      title: 'Technology',
      icon: <FaCode className="mr-2" />,
      submenu: [
        { title: 'Software Companies', path: '/industries/software' },
        { title: 'Hardware & Devices', path: '/industries/hardware' },
        { title: 'Telecommunications', path: '/industries/telecommunications' }
      ].filter(item => {
        const key = item.path.split('/').pop().replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
        return isPageEnabled(key, 'industry');
      })
    },
    {
      title: 'Healthcare',
      icon: <FaShieldAlt className="mr-2" />,
      submenu: [
        { title: 'Healthcare Providers', path: '/industries/healthcare-providers' },
        { title: 'Life Sciences', path: '/industries/life-sciences' },
        { title: 'Health Tech', path: '/industries/health-tech' }
      ].filter(item => {
        const key = item.path.split('/').pop().replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
        return isPageEnabled(key, 'industry');
      })
    },
    {
      title: 'Retail & CPG',
      icon: <FaUsers className="mr-2" />,
      submenu: [
        { title: 'Retail', path: '/industries/retail' },
        { title: 'Consumer Goods', path: '/industries/consumer-goods' },
        { title: 'E-commerce', path: '/industries/e-commerce' }
      ].filter(item => {
        const key = item.path.split('/').pop().replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
        return isPageEnabled(key, 'industry');
      })
    },
    {
      title: 'Energy & Utilities',
      icon: <FaNetworkWired className="mr-2" />,
      submenu: [
        { title: 'Energy', path: '/industries/energy' },
        { title: 'Utilities', path: '/industries/utilities' },
        { title: 'Oil & Gas', path: '/industries/oil-gas' }
      ].filter(item => {
        const key = item.path.split('/').pop().replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
        return isPageEnabled(key, 'industry');
      })
    },
    {
      title: 'Communications & Media',
      icon: <FaMobileAlt className="mr-2" />,
      submenu: [
        { title: 'Communications', path: '/industries/communications' },
        { title: 'Media & Entertainment', path: '/industries/media-entertainment' },
        { title: 'Digital Publishing', path: '/industries/digital-publishing' }
      ].filter(item => {
        const key = item.path.split('/').pop().replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
        return isPageEnabled(key, 'industry');
      })
    },
    {
      title: 'Travel & Hospitality',
      icon: <FaUsers className="mr-2" />,
      submenu: [
        { title: 'Travel', path: '/industries/travel' },
        { title: 'Transport', path: '/industries/transport' },
        { title: 'Hospitality', path: '/industries/hospitality' }
      ].filter(item => {
        const key = item.path.split('/').pop().replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
        return isPageEnabled(key, 'industry');
      })
    }
  ];
  
  // Only return categories that have enabled submenu items
  return industryCategories.filter(category => category.submenu.length > 0);
};

// Build navigation links dynamically based on enabled pages
const getNavLinks = () => {
  const links = [];
  
  // Add main pages that are enabled
  if (isPageEnabled('home', 'main')) {
    links.push({ title: 'Home', path: '/' });
  }
  
  if (isPageEnabled('about', 'main')) {
    links.push({ title: 'About', path: '/about' });
  }
  
  // Add Services if enabled with submenu
  if (isPageEnabled('services', 'main')) {
    const serviceSubmenu = getEnabledServiceCategories();
    if (serviceSubmenu.length > 0) {
      links.push({
        title: 'Services',
        path: '/services',
        hasSubmenu: true,
        submenu: serviceSubmenu,
        isMultiLevel: true
      });
    } else {
      links.push({ title: 'Services', path: '/services' });
    }
  }
  
  // Add Industries if enabled with submenu
  if (isPageEnabled('industries', 'main')) {
    const industrySubmenu = getEnabledIndustryCategories();
    if (industrySubmenu.length > 0) {
      links.push({
        title: 'Industries',
        path: '/industries',
        hasSubmenu: true,
        submenu: industrySubmenu,
        isMultiLevel: true
      });
    } else {
      links.push({ title: 'Industries', path: '/industries' });
    }
  }
  
  // Add other main pages that are enabled
  if (isPageEnabled('training', 'main')) {
    links.push({ title: 'Training', path: '/training' });
  }
  
  if (isPageEnabled('blogs', 'main')) {
    links.push({ title: 'Blogs', path: '/blogs' });
  }
  
  if (isPageEnabled('contact', 'main')) {
    links.push({ title: 'Contact', path: '/contact' });
  }
  
  return links;
};

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const navRef = useRef(null);
  
  // State for navigation links
  const [links, setLinks] = useState([]);
  
  // Load the navigation links on component mount and when localStorage changes
  useEffect(() => {
    // Load saved configuration from localStorage
    const loadSavedConfig = () => {
      const mainConfig = localStorage.getItem('clouddigify_mainPages');
      const serviceConfig = localStorage.getItem('clouddigify_servicePages');
      const industryConfig = localStorage.getItem('clouddigify_industryPages');
      
      // If we have saved config, update links
      if (mainConfig || serviceConfig || industryConfig) {
        setLinks(getNavLinks());
      } else {
        // Otherwise use default config
        setLinks(getNavLinks());
      }
    };
    
    loadSavedConfig();
    
    // Listen for storage events to update when configs change
    const handleStorageChange = (e) => {
      if (e.key && e.key.startsWith('clouddigify_')) {
        loadSavedConfig();
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
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
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white shadow-md"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        <Link to="/" className="flex items-center">
          <img src={logoUrl} alt="CloudDigify Logo" className="h-10" />
          <span className="ml-2 text-xl font-bold text-blue-600">CloudDigify</span>
        </Link>

        {/* Hamburger button - visible only on small screens */}
        <button
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop navigation */}
        <ul className="hidden md:flex space-x-8">
          {links.map((link, index) => (
            <li key={link.path} className="relative group">
              {link.hasSubmenu ? (
                <div>
                  <div 
                    className="flex items-center cursor-pointer text-gray-700 hover:text-blue-600 py-2"
                    onClick={(e) => toggleSubmenu(index, e)}
                  >
                    <span className={`${activeSubmenu === index ? 'text-blue-600 font-semibold' : ''}`}>
                      {link.title}
                    </span>
                    <FaChevronDown 
                      className={`ml-1 text-xs transition-transform duration-200 ${activeSubmenu === index ? 'rotate-180 text-blue-600' : ''}`}
                    />
                  </div>
                  
                  {/* Mega menu dropdown */}
                  {activeSubmenu === index && link.isMultiLevel && (
                    <div className="fixed left-0 right-0 mt-2 bg-white shadow-xl border-t border-gray-100 z-50 max-h-[80vh] overflow-y-auto">
                      <div className="max-w-7xl mx-auto py-6 px-8">
                        {/* Header section */}
                        <div className="flex justify-between items-center pb-4 mb-4 border-b border-gray-200">
                          <h2 className="text-xl font-bold text-blue-700">{link.title}</h2>
                          <NavLink 
                            to={link.path}
                            className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition"
                            onClick={() => setActiveSubmenu(null)}
                          >
                            View All {link.title}
                            <FaArrowRight className="ml-2 text-xs" />
                          </NavLink>
                        </div>
                        
                        {/* Categories grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                          {link.submenu.map((category, catIndex) => (
                            category.submenu.length > 0 && (
                              <div key={catIndex} className="mb-4">
                                <NavLink
                                  to={category.path || '#'}
                                  className="flex items-center text-gray-800 font-semibold text-md mb-3 hover:text-blue-600 transition"
                                  onClick={() => setActiveSubmenu(null)}
                                >
                                  {category.icon}
                                  {category.title}
                                </NavLink>
                                <ul className="space-y-2">
                                  {category.submenu && category.submenu.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                      <NavLink
                                        to={item.path}
                                        className="text-gray-600 hover:text-blue-600 transition pl-6 block text-sm"
                                        onClick={() => setActiveSubmenu(null)}
                                      >
                                        {item.title}
                                      </NavLink>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-blue-600 font-semibold py-2 block'
                      : 'text-gray-700 hover:text-blue-600 py-2 block'
                  }
                >
                  {link.title}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white"
      >
        <div className="px-4 py-2">
          {links.map((link, index) => (
            <div key={link.path} className="border-b border-gray-100 last:border-0">
              {link.hasSubmenu ? (
                <div>
                  <div 
                    className="flex items-center justify-between py-3 text-gray-800"
                    onClick={(e) => toggleSubmenu(index, e)}
                  >
                    <span className="font-medium">{link.title}</span>
                    <FaChevronDown className={`text-xs transition-transform duration-200 ${activeSubmenu === index ? 'rotate-180' : ''}`} />
                  </div>
                  
                  {/* Mobile dropdown */}
                  {activeSubmenu === index && (
                    <div className="pb-4">
                      <NavLink
                        to={link.path}
                        className="block py-2 font-medium text-blue-600 mb-2"
                        onClick={() => setMenuOpen(false)}
                      >
                        View All {link.title}
                      </NavLink>
                      
                      <div className="space-y-4">
                        {link.submenu.map((category, catIndex) => (
                          category.submenu.length > 0 && (
                            <div key={catIndex} className="pl-3 border-l-2 border-gray-200">
                              <NavLink
                                to={category.path || '#'}
                                className="flex items-center font-medium text-gray-700 mb-1 hover:text-blue-600"
                                onClick={() => setMenuOpen(false)}
                              >
                                {category.icon}
                                {category.title}
                              </NavLink>
                              
                              {category.submenu && (
                                <ul className="pl-6 space-y-1">
                                  {category.submenu.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                      <NavLink
                                        to={item.path}
                                        className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                                        onClick={() => setMenuOpen(false)}
                                      >
                                        {item.title}
                                      </NavLink>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          )
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `block py-3 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {link.title}
                </NavLink>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default NavBar; 