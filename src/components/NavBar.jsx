import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown, FaCloud, FaServer, FaCode, FaShieldAlt, FaDatabase, FaUsers, FaMobileAlt, FaRobot, FaCogs, FaBrain, FaNetworkWired, FaDesktop, FaProjectDiagram, FaCheckCircle, FaTools, FaIndustry, FaCubes, FaSyncAlt, FaUsersCog } from 'react-icons/fa';

// You can replace this with your actual logo path
const logoUrl = '/logo.png';

// Define the multi-level service structure
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

// Define industries
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
      { title: 'Advanced Manufacturing', path: '/industries/advanced-manufacturing' },
      { title: 'Automotive', path: '/industries/automotive' },
      { title: 'Industrial IoT', path: '/industries/industrial-iot' }
    ]
  },
  {
    title: 'Technology',
    icon: <FaCode className="mr-2" />,
    submenu: [
      { title: 'Software Companies', path: '/industries/software' },
      { title: 'Hardware & Devices', path: '/industries/hardware' },
      { title: 'Telecommunications', path: '/industries/telecommunications' }
    ]
  },
  {
    title: 'Healthcare',
    icon: <FaShieldAlt className="mr-2" />,
    submenu: [
      { title: 'Healthcare Providers', path: '/industries/healthcare-providers' },
      { title: 'Life Sciences', path: '/industries/life-sciences' },
      { title: 'Health Tech', path: '/industries/health-tech' }
    ]
  },
  {
    title: 'Retail & CPG',
    icon: <FaUsers className="mr-2" />,
    submenu: [
      { title: 'Retail', path: '/industries/retail' },
      { title: 'Consumer Goods', path: '/industries/consumer-goods' },
      { title: 'E-commerce', path: '/industries/e-commerce' }
    ]
  },
  {
    title: 'Energy & Utilities',
    icon: <FaNetworkWired className="mr-2" />,
    submenu: [
      { title: 'Energy', path: '/industries/energy' },
      { title: 'Utilities', path: '/industries/utilities' },
      { title: 'Oil & Gas', path: '/industries/oil-gas' }
    ]
  },
  {
    title: 'Communications & Media',
    icon: <FaMobileAlt className="mr-2" />,
    submenu: [
      { title: 'Communications', path: '/industries/communications' },
      { title: 'Media & Entertainment', path: '/industries/media-entertainment' },
      { title: 'Digital Publishing', path: '/industries/digital-publishing' }
    ]
  },
  {
    title: 'Travel & Hospitality',
    icon: <FaUsers className="mr-2" />,
    submenu: [
      { title: 'Travel', path: '/industries/travel' },
      { title: 'Transport', path: '/industries/transport' },
      { title: 'Hospitality', path: '/industries/hospitality' }
    ]
  }
];

const links = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Services', path: '/services', hasSubmenu: true, submenu: serviceCategories, isMultiLevel: true },
  { title: 'Industries', path: '/industries', hasSubmenu: true, submenu: industryCategories, isMultiLevel: true },
  { title: 'Training', path: '/training' },
  { title: 'Blogs', path: '/blogs' },
  { title: 'Contact', path: '/contact' },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const navRef = useRef(null);
  
  // Function to check if submenu would go off-screen
  const checkSubmenuPosition = (e) => {
    if (!e) return 'left-full';
    
    const rect = e.target.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const remainingSpace = viewportWidth - rect.right;
    
    // If less than 300px from right edge, show on left side
    return remainingSpace < 300 ? 'right-full' : 'left-full';
  };

  const toggleSubmenu = (index) => {
    // If clicking on already open submenu, close it
    if (activeSubmenu === index) {
      setActiveSubmenu(null);
      setActiveCategory(null);
    } else {
      // Otherwise open the clicked submenu and close any open category
      setActiveSubmenu(index);
      setActiveCategory(null);
    }
  };

  const toggleCategory = (categoryIndex, e) => {
    // If clicking on already open category, close it
    if (activeCategory === categoryIndex) {
      setActiveCategory(null);
    } else {
      // Otherwise open the clicked category
      setActiveCategory(categoryIndex);
    }
  };
  
  // Handle hover for desktop
  const handleMouseEnter = (index) => {
    clearTimeout(hoverTimeout);
    setActiveSubmenu(index);
  };
  
  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveSubmenu(null);
      setActiveCategory(null);
    }, 300);
    setHoverTimeout(timeout);
  };
  
  // Handle hover for category
  const handleCategoryMouseEnter = (categoryIndex) => {
    clearTimeout(hoverTimeout);
    setActiveCategory(categoryIndex);
  };
  
  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveSubmenu(null);
        setActiveCategory(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white shadow"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        <Link to="/" className="flex items-center">
          <img src={logoUrl} alt="CloudDigify Logo" className="h-10" />
          <span className="ml-2 text-xl font-bold text-blue-600">CloudDigify</span>
        </Link>

        {/* Hamburger button - visible only on small screens */}
        <button
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex space-x-6">
          {links.map((link, index) => (
            <li key={link.path} className="relative group">
              {link.hasSubmenu ? (
                <div 
                  className="flex items-center cursor-pointer text-gray-700 hover:text-blue-600 py-2"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <span 
                    className="mr-1"
                    onClick={() => toggleSubmenu(index)}
                  >
                    {link.title}
                  </span>
                  <FaChevronDown 
                    className={`text-xs transition-transform duration-200 ${activeSubmenu === index ? 'rotate-180' : ''}`} 
                    onClick={() => toggleSubmenu(index)}
                  />
                  
                  {/* Primary Dropdown */}
                  {activeSubmenu === index && link.isMultiLevel && (
                    <div 
                      className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md overflow-hidden z-[60] max-h-[80vh] overflow-y-auto"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <ul>
                        {/* Main category link */}
                        <li>
                          <NavLink
                            to={link.path}
                            className={({ isActive }) =>
                              `block px-4 py-2 hover:bg-blue-50 ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700'} font-medium border-b border-gray-100`
                            }
                            onClick={() => {
                              setActiveSubmenu(null);
                              setActiveCategory(null);
                            }}
                          >
                            All {link.title}
                          </NavLink>
                        </li>
                        
                        {/* Categories with sub-menus */}
                        {link.submenu.map((category, categoryIndex) => (
                          <li key={category.title} className="relative">
                            <div 
                              className="flex items-center justify-between px-4 py-2 hover:bg-blue-50 cursor-pointer"
                            >
                              <NavLink
                                to={category.path}
                                className="flex items-center text-gray-700"
                                onClick={(e) => {
                                  e.stopPropagation(); 
                                  setActiveSubmenu(null);
                                  setActiveCategory(null);
                                }}
                              >
                                {category.icon}
                                <span>{category.title}</span>
                              </NavLink>
                              <button 
                                className="p-1 focus:outline-none"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleCategory(categoryIndex, e);
                                }}
                              >
                                <FaChevronDown 
                                  className={`text-xs transition-transform duration-200 ${activeCategory === categoryIndex ? 'rotate-180' : ''}`}
                                />
                              </button>
                            </div>
                            
                            {/* Secondary dropdown (Category submenus) */}
                            {activeCategory === categoryIndex && (
                              <div 
                                className={`absolute top-0 w-64 bg-white shadow-lg rounded-md overflow-hidden z-[70] max-h-[80vh] overflow-y-auto left-full`}
                                style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                              >
                                <ul>
                                  <li>
                                    <NavLink
                                      to={category.path}
                                      className={({ isActive }) =>
                                        `block px-4 py-2 hover:bg-blue-50 ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700'} font-medium border-b border-gray-100`
                                      }
                                      onClick={() => {
                                        setActiveSubmenu(null);
                                        setActiveCategory(null);
                                        setMenuOpen(false);
                                      }}
                                    >
                                      View All {category.title}
                                    </NavLink>
                                  </li>
                                  {category.submenu.map((subItem) => (
                                    <li key={subItem.path}>
                                      <NavLink
                                        to={subItem.path}
                                        className={({ isActive }) =>
                                          `block px-4 py-2 hover:bg-blue-50 ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700'}`
                                        }
                                        onClick={() => {
                                          setActiveSubmenu(null);
                                          setActiveCategory(null);
                                          setMenuOpen(false);
                                        }}
                                      >
                                        {subItem.title}
                                      </NavLink>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Simple Dropdown for non-multilevel menus */}
                  {activeSubmenu === index && !link.isMultiLevel && (
                    <div 
                      className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md overflow-hidden z-50"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <ul>
                        <li>
                          <NavLink
                            to={link.path}
                            className={({ isActive }) =>
                              `block px-4 py-2 hover:bg-blue-50 ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700'} font-medium border-b border-gray-100`
                            }
                            onClick={() => {
                              setActiveSubmenu(null);
                              setActiveCategory(null);
                            }}
                          >
                            All {link.title}
                          </NavLink>
                        </li>
                        
                        {link.submenu.map((subLink) => (
                          <li key={subLink.path}>
                            <NavLink
                              to={subLink.path}
                              className={({ isActive }) =>
                                `block px-4 py-2 hover:bg-blue-50 ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700'}`
                              }
                              onClick={() => setActiveSubmenu(null)}
                            >
                              {subLink.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
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

      {/* Mobile menu - slides down */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden md:hidden bg-white"
      >
        <ul className="flex flex-col py-4">
          {links.map((link, index) => (
            <li key={link.path} className="px-4">
              {link.hasSubmenu ? (
                <div>
                  <div 
                    className="flex items-center justify-between py-2 text-gray-700 border-b border-gray-100"
                    onClick={() => toggleSubmenu(index)}
                  >
                    <span className="font-medium">{link.title}</span>
                    <FaChevronDown className={`text-xs transition-transform duration-200 ${activeSubmenu === index ? 'rotate-180' : ''}`} />
                  </div>
                  
                  {/* Mobile Categories Dropdown */}
                  {activeSubmenu === index && link.isMultiLevel && (
                    <ul className="pl-4 py-2 bg-gray-50 rounded-md my-2">
                      {/* Main category link */}
                      <li>
                        <NavLink
                          to={link.path}
                          className={({ isActive }) =>
                            `block py-2 font-medium ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'} border-b border-gray-200 mb-2`
                          }
                          onClick={() => setMenuOpen(false)}
                        >
                          All {link.title}
                        </NavLink>
                      </li>
                      
                      {/* Categories with submenu */}
                      {link.submenu.map((category, categoryIndex) => (
                        <li key={category.title} className="mb-2">
                          <div
                            className="flex items-center justify-between py-2 text-gray-700 border-t border-gray-200 mt-1"
                          >
                            <NavLink
                              to={category.path}
                              className="flex items-center"
                              onClick={(e) => {
                                e.stopPropagation();
                                setMenuOpen(false);
                                setActiveSubmenu(null);
                                setActiveCategory(null);
                              }}
                            >
                              {category.icon}
                              <span className="font-medium">{category.title}</span>
                            </NavLink>
                            <button
                              className="p-1 focus:outline-none"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleCategory(categoryIndex);
                              }}
                            >
                              <FaChevronDown 
                                className={`text-xs transition-transform duration-200 ${activeCategory === categoryIndex ? 'rotate-180' : ''}`}
                              />
                            </button>
                          </div>
                          
                          {activeCategory === categoryIndex && (
                            <ul className="pl-6 py-1 bg-white rounded-md shadow-inner">
                              <li className="border-b border-gray-200">
                                <NavLink
                                  to={category.path}
                                  className={({ isActive }) =>
                                    `block py-2 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'} font-medium`
                                  }
                                  onClick={() => {
                                    setMenuOpen(false);
                                    setActiveSubmenu(null);
                                    setActiveCategory(null);
                                  }}
                                >
                                  View All {category.title}
                                </NavLink>
                              </li>
                              {category.submenu.map((subItem) => (
                                <li key={subItem.path} className="border-b border-gray-100 last:border-0">
                                  <NavLink
                                    to={subItem.path}
                                    className={({ isActive }) =>
                                      `block py-2 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}`
                                    }
                                    onClick={() => {
                                      setMenuOpen(false);
                                      setActiveSubmenu(null);
                                      setActiveCategory(null);
                                    }}
                                  >
                                    {subItem.title}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {/* Mobile simple dropdown */}
                  {activeSubmenu === index && !link.isMultiLevel && (
                    <ul className="pl-4 py-2 bg-gray-50 rounded-md my-2">
                      {/* Main link */}
                      <li>
                        <NavLink
                          to={link.path}
                          className={({ isActive }) =>
                            `block py-2 font-medium ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}`
                          }
                          onClick={() => setMenuOpen(false)}
                        >
                          All {link.title}
                        </NavLink>
                      </li>
                      
                      {/* Submenu items */}
                      {link.submenu.map((subLink) => (
                        <li key={subLink.path} className="border-t border-gray-200">
                          <NavLink
                            to={subLink.path}
                            className={({ isActive }) =>
                              `block py-2 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}`
                            }
                            onClick={() => setMenuOpen(false)}
                          >
                            {subLink.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <NavLink
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 border-b border-gray-100 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`
                  }
                >
                  {link.title}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default NavBar; 