import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown, FaCloud, FaServer, FaCode, FaShieldAlt, FaDatabase, FaUsers, FaMobileAlt, FaRobot, FaCogs, FaBrain } from 'react-icons/fa';

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
      { title: 'Privacy Services', path: '/services/privacy-services' }
    ]
  },
  {
    title: 'Data & Analytics',
    icon: <FaDatabase className="mr-2" />,
    submenu: [
      { title: 'Data Analytics', path: '/services/data-analytics' },
      { title: 'Business Intelligence', path: '/services/business-intelligence' },
      { title: 'Data Warehousing', path: '/services/data-warehousing' }
    ]
  },
  {
    title: 'Digital Experiences',
    icon: <FaMobileAlt className="mr-2" />,
    submenu: [
      { title: 'Experience Design', path: '/services/experience-design' },
      { title: 'Digital Interactive', path: '/services/digital-interactive' },
      { title: 'Enterprise Mobility', path: '/services/enterprise-mobility' },
      { title: 'Digital Integration', path: '/services/digital-integration' }
    ]
  },
  {
    title: 'AI & Automation',
    icon: <FaBrain className="mr-2" />,
    submenu: [
      { title: 'Artificial Intelligence', path: '/services/artificial-intelligence' },
      { title: 'Intelligent Automation', path: '/services/intelligent-automation' },
      { title: 'Cognitive Services', path: '/services/cognitive-services' }
    ]
  },
  {
    title: 'Enterprise Services',
    icon: <FaServer className="mr-2" />,
    submenu: [
      { title: 'Managed Cloud Services', path: '/services/managed-services' },
      { title: 'Architecture Design', path: '/services/architecture-design' },
      { title: 'Application Development', path: '/services/application-development' },
      { title: 'System Integration', path: '/services/system-integration' }
    ]
  },
  {
    title: 'Industry Solutions',
    icon: <FaCogs className="mr-2" />,
    submenu: [
      { title: 'Industry 4.0', path: '/services/industry-4-0' },
      { title: 'Blockchain Solutions', path: '/services/blockchain' },
      { title: 'Quality Engineering', path: '/services/quality-engineering' },
      { title: 'Organizational Change', path: '/services/organizational-change' }
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

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
    setActiveCategory(null);
  };

  const toggleCategory = (categoryIndex) => {
    setActiveCategory(activeCategory === categoryIndex ? null : categoryIndex);
  };

  return (
    <motion.nav
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
                <div className="flex items-center cursor-pointer text-gray-700 hover:text-blue-600">
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
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md overflow-hidden z-50">
                      <ul>
                        {/* Main category link */}
                        <li>
                          <NavLink
                            to={link.path}
                            className={({ isActive }) =>
                              `block px-4 py-2 hover:bg-blue-50 ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700'}`
                            }
                            onClick={() => setActiveSubmenu(null)}
                          >
                            All {link.title}
                          </NavLink>
                        </li>
                        
                        {/* Categories with sub-menus */}
                        {link.submenu.map((category, categoryIndex) => (
                          <li key={category.title} className="relative">
                            <div 
                              className="flex items-center justify-between px-4 py-2 hover:bg-blue-50 cursor-pointer"
                              onClick={() => toggleCategory(categoryIndex)}
                            >
                              <div className="flex items-center text-gray-700">
                                {category.icon}
                                <span>{category.title}</span>
                              </div>
                              <FaChevronDown className={`text-xs transition-transform duration-200 ${activeCategory === categoryIndex ? 'rotate-180' : ''}`} />
                            </div>
                            
                            {/* Secondary dropdown (Category submenus) */}
                            {activeCategory === categoryIndex && (
                              <div className="absolute left-full top-0 w-64 bg-white shadow-lg rounded-md overflow-hidden">
                                <ul>
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
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md overflow-hidden z-50">
                      <ul>
                        <li>
                          <NavLink
                            to={link.path}
                            className={({ isActive }) =>
                              `block px-4 py-2 hover:bg-blue-50 ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700'}`
                            }
                            onClick={() => setActiveSubmenu(null)}
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
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-700 hover:text-blue-600'
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
                    className="flex items-center justify-between py-2 text-gray-700"
                    onClick={() => toggleSubmenu(index)}
                  >
                    <span>{link.title}</span>
                    <FaChevronDown className={`text-xs transition-transform duration-200 ${activeSubmenu === index ? 'rotate-180' : ''}`} />
                  </div>
                  
                  {/* Mobile Categories Dropdown */}
                  {activeSubmenu === index && link.isMultiLevel && (
                    <ul className="pl-4 py-2">
                      {/* Main category link */}
                      <li>
                        <NavLink
                          to={link.path}
                          className={({ isActive }) =>
                            `block py-2 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}`
                          }
                          onClick={() => setMenuOpen(false)}
                        >
                          All {link.title}
                        </NavLink>
                      </li>
                      
                      {/* Categories with submenu */}
                      {link.submenu.map((category, categoryIndex) => (
                        <li key={category.title}>
                          <div
                            className="flex items-center justify-between py-2 text-gray-700"
                            onClick={() => toggleCategory(categoryIndex)}
                          >
                            <div className="flex items-center">
                              {category.icon}
                              <span>{category.title}</span>
                            </div>
                            <FaChevronDown className={`text-xs transition-transform duration-200 ${activeCategory === categoryIndex ? 'rotate-180' : ''}`} />
                          </div>
                          
                          {activeCategory === categoryIndex && (
                            <ul className="pl-8 py-1">
                              {category.submenu.map((subItem) => (
                                <li key={subItem.path}>
                                  <NavLink
                                    to={subItem.path}
                                    className={({ isActive }) =>
                                      `block py-2 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}`
                                    }
                                    onClick={() => setMenuOpen(false)}
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
                    <ul className="pl-4 py-2">
                      {/* Main link */}
                      <li>
                        <NavLink
                          to={link.path}
                          className={({ isActive }) =>
                            `block py-2 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}`
                          }
                          onClick={() => setMenuOpen(false)}
                        >
                          All {link.title}
                        </NavLink>
                      </li>
                      
                      {/* Submenu items */}
                      {link.submenu.map((subLink) => (
                        <li key={subLink.path}>
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
                    `block py-2 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`
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