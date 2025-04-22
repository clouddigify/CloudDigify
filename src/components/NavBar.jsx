import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

// You can replace this with your actual logo path
const logoUrl = '/logo.png';

// Add the service submenu items
const serviceSubmenu = [
  { title: 'DevOps & CI/CD', path: '/services/devops' },
  { title: 'Cloud Migration', path: '/services/cloud-migration' },
  { title: 'Infrastructure as Code', path: '/services/infrastructure-as-code' },
  { title: 'Managed Cloud Services', path: '/services/managed-services' },
  { title: 'Architecture Design', path: '/services/architecture-design' },
  { title: 'Security & Compliance', path: '/services/security-compliance' },
  { title: 'Cloud Optimization', path: '/services/cloud-optimization' },
  { title: 'Disaster Recovery', path: '/services/disaster-recovery' },
  { title: 'Containerization', path: '/services/containerization' },
  { title: 'Serverless Architecture', path: '/services/serverless' },
];

const links = [
  { title: 'Home',     path: '/' },
  { title: 'About',    path: '/about' },
  { title: 'Services', path: '/services', hasSubmenu: true, submenu: serviceSubmenu },
  { title: 'Training', path: '/training' },
  { title: 'Blogs',    path: '/blogs' },
  { title: 'Contact',  path: '/contact' },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
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
                  
                  {/* Services Dropdown */}
                  {activeSubmenu === index && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md overflow-hidden z-50">
                      <ul>
                        {/* Main Services link */}
                        <li>
                          <NavLink
                            to={link.path}
                            className={({ isActive }) =>
                              `block px-4 py-2 hover:bg-blue-50 ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700'}`
                            }
                            onClick={() => setActiveSubmenu(null)}
                          >
                            All Services
                          </NavLink>
                        </li>
                        
                        {/* Service submenu items */}
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
                  
                  {/* Mobile Services Dropdown */}
                  {activeSubmenu === index && (
                    <ul className="pl-4 py-2">
                      {/* Main Services link */}
                      <li>
                        <NavLink
                          to={link.path}
                          className={({ isActive }) =>
                            `block py-2 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}`
                          }
                          onClick={() => setMenuOpen(false)}
                        >
                          All Services
                        </NavLink>
                      </li>
                      
                      {/* Service submenu items */}
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