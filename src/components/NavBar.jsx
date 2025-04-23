import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { siteConfig } from '../config/siteConfig';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveSubmenu(null);
  }, [location]);

  const handleMouseEnter = (index) => {
    if (window.innerWidth > 768) {
      setActiveSubmenu(index);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setActiveSubmenu(null);
    }
  };

  const toggleSubmenu = (index) => {
    if (window.innerWidth <= 768) {
      setActiveSubmenu(activeSubmenu === index ? null : index);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-blue-600">{siteConfig.company.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {siteConfig.navigation.main.map((item, index) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.path}
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                >
                  {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                  {item.title}
                </Link>

                {/* Submenu */}
                {item.submenu && (
                  <AnimatePresence>
                    {activeSubmenu === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                      >
                        <div className="py-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className="group flex items-start p-4 hover:bg-gray-50"
                            >
                              {subItem.icon && <subItem.icon className="w-5 h-5 mt-1 text-blue-600" />}
                              <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                                  {subItem.title}
                                </p>
                                {subItem.description && (
                                  <p className="mt-1 text-xs text-gray-500">
                                    {subItem.description}
                                  </p>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
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
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {siteConfig.navigation.main.map((item, index) => (
                <div key={item.path}>
                  <button
                    onClick={() => toggleSubmenu(index)}
                    className="w-full flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                  >
                    {item.icon && <item.icon className="w-5 h-5 mr-3" />}
                    {item.title}
                  </button>

                  {/* Mobile Submenu */}
                  {item.submenu && activeSubmenu === index && (
                    <div className="pl-6 mt-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-blue-600"
                        >
                          {subItem.icon && <subItem.icon className="w-4 h-4 mr-2" />}
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;