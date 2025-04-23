import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown, FaChevronRight, FaCloud, FaServer, FaCode, FaShieldAlt, FaDatabase, FaUsers, FaMobileAlt, FaRobot, FaCogs, FaBrain, FaNetworkWired, FaDesktop, FaProjectDiagram, FaCheckCircle, FaTools, FaIndustry, FaCubes, FaSyncAlt, FaUsersCog, FaArrowRight, FaSearch, FaHome, FaGraduationCap, FaBlog, FaEnvelope, FaLightbulb, FaChartLine, FaRocket } from 'react-icons/fa';
import { menuConfig } from '../config/menuConfig';

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
      duration: 0.15,
      ease: "easeInOut"
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.15,
      ease: "easeOut",
      staggerChildren: 0.03
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: -5 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.15 }
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

const DropdownMenu = ({ items, isOpen, onMouseEnter, onMouseLeave }) => {
  if (!isOpen || !items) return null;

  return (
    <div
      className="absolute z-50 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="py-1">
        {items.map((item, index) => (
          <div key={index} className="relative">
            {item.submenu ? (
              <div
                className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                onMouseEnter={() => onMouseEnter(item)}
              >
                <div className="flex items-center">
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  {item.title}
                </div>
                <FaChevronRight className="ml-2" />
                {activeSubmenu === item && (
                  <div className="absolute left-full top-0 w-64 ml-1">
                    <DropdownMenu
                      items={item.submenu}
                      isOpen={true}
                      onMouseEnter={() => onMouseEnter(item)}
                      onMouseLeave={onMouseLeave}
                    />
                  </div>
                )}
              </div>
            ) : (
              <Link
                to={item.path}
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.title}
                {item.description && (
                  <span className="ml-2 text-xs text-gray-500">{item.description}</span>
                )}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const menuRef = useRef(null);
  const location = useLocation();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
        setActiveSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveMenu(null);
    setActiveSubmenu(null);
  }, [location]);

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleSubmenuEnter = (submenu) => {
    setActiveSubmenu(submenu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
    setActiveSubmenu(null);
  };

  return (
    <nav ref={menuRef} className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src={logoUrl} alt="Logo" />
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {menuConfig.mainNav.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.hasSubmenu ? (
                    <button
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
                    >
                      {item.title}
                      <FaChevronDown className="ml-1" />
                    </button>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `inline-flex items-center px-1 pt-1 text-sm font-medium ${
                          isActive ? 'text-indigo-600' : 'text-gray-900'
                        }`
                      }
                    >
                      {item.title}
                    </NavLink>
                  )}
                  {item.hasSubmenu && activeMenu === item && (
                    <DropdownMenu
                      items={item.submenu}
                      isOpen={true}
                      onMouseEnter={() => handleMouseEnter(item)}
                      onMouseLeave={handleMouseLeave}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1">
          {menuConfig.mainNav.map((item, index) => (
            <div key={index}>
              {item.hasSubmenu ? (
                <button
                  onClick={() => handleMouseEnter(item)}
                  className="w-full flex items-center px-3 py-2 text-base font-medium text-gray-900"
                >
                  {item.title}
                  <FaChevronDown className="ml-1" />
                </button>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-base font-medium ${
                      isActive ? 'text-indigo-600' : 'text-gray-900'
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              )}
              {item.hasSubmenu && activeMenu === item && (
                <div className="pl-4">
                  {item.submenu.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.path}
                      className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar; 