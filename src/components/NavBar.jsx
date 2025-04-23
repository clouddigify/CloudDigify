import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown, FaChevronRight, FaArrowRight } from 'react-icons/fa';
import { menuConfig, Icons } from '../config/menuConfig';
import IconRenderer from './IconRenderer';

// Update logo paths
const logoSvg = '/images/logo.svg';
const logoPng = '/images/logo.png';

const LogoWrapper = ({ children }) => (
  <motion.div
    className="flex items-center space-x-3 hover:opacity-90"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    transition={{ duration: 0.2 }}
  >
    {children}
  </motion.div>
);

const Logo = () => {
  return (
    <div className="relative w-12 h-12">
      <picture>
        <source srcSet={logoSvg} type="image/svg+xml" />
        <img 
          src={logoPng}
          alt="CloudDigify Logo" 
          className="w-full h-full object-contain"
          loading="eager"
          style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(89%) saturate(1857%) hue-rotate(199deg) brightness(91%) contrast(88%)' }}
        />
      </picture>
    </div>
  );
};

const BrandTitle = () => (
  <div className="flex items-center">
    <span className="text-2xl font-bold bg-gradient-to-r from-[#2B6CB0] to-[#4299E1] bg-clip-text text-transparent">
      Cloud
    </span>
    <span className="text-2xl font-bold text-[#4299E1]">
      Digify
    </span>
  </div>
);

const DropdownMenu = ({ items, isOpen, onMouseEnter, onMouseLeave, activeSubmenu }) => {
  if (!isOpen || !items) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute z-50 mt-2 w-72 rounded-xl shadow-2xl bg-white/95 backdrop-blur-sm ring-1 ring-black/5 border border-gray-100"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="py-2">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="relative"
            onMouseEnter={() => onMouseEnter(item)}
          >
            {item.submenu ? (
              <div
                className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 cursor-pointer group"
              >
                <div className="flex items-center space-x-3 min-w-0">
                  <span className="flex-shrink-0 text-blue-600 group-hover:scale-110 transition-transform">
                    <IconRenderer icon={item.icon} className="w-5 h-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="font-medium antialiased truncate">{item.title}</div>
                    {item.description && (
                      <div className="text-xs text-gray-500 antialiased truncate">{item.description}</div>
                    )}
                  </div>
                </div>
                <FaChevronRight className="ml-3 flex-shrink-0 text-gray-400 group-hover:text-blue-500 transition-colors" />
                {activeSubmenu === item && (
                  <div className="absolute left-full top-0 w-72 ml-1">
                    <DropdownMenu
                      items={item.submenu}
                      isOpen={true}
                      onMouseEnter={() => onMouseEnter(item)}
                      onMouseLeave={onMouseLeave}
                      activeSubmenu={activeSubmenu}
                    />
                  </div>
                )}
              </div>
            ) : (
              <Link
                to={item.path}
                className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 group"
              >
                <span className="flex-shrink-0 text-blue-600 group-hover:scale-110 transition-transform mr-3">
                  <IconRenderer icon={item.icon} className="w-5 h-5" />
                </span>
                <div className="min-w-0">
                  <div className="font-medium antialiased truncate">{item.title}</div>
                  {item.description && (
                    <div className="text-xs text-gray-500 antialiased truncate">{item.description}</div>
                  )}
                </div>
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  useEffect(() => {
    setIsOpen(false);
    setActiveMenu(null);
    setActiveSubmenu(null);
  }, [location]);

  const handleMouseEnter = (menu) => {
    if (menu.hasSubmenu) {
      setActiveMenu(menu);
    }
    if (menu.submenu) {
      setActiveSubmenu(menu);
    }
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
    setActiveSubmenu(null);
  };

  return (
    <motion.nav
      ref={menuRef}
      initial={false}
      animate={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 1)',
        backdropFilter: isScrolled ? 'blur(10px)' : 'blur(0px)',
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <LogoWrapper>
                <Logo />
                <BrandTitle />
              </LogoWrapper>
            </Link>
            <div className="hidden lg:ml-10 lg:flex lg:items-center lg:space-x-4">
              {menuConfig.mainNav.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={handleMouseLeave}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.hasSubmenu ? (
                    <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 rounded-full hover:bg-gray-50 transition-colors">
                      <span>{item.title}</span>
                      <motion.span
                        animate={{ rotate: activeMenu === item ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-1"
                      >
                        <FaChevronDown className="h-4 w-4" />
                      </motion.span>
                    </button>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `inline-flex items-center px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                          isActive
                            ? 'text-white bg-blue-600 hover:bg-blue-700'
                            : 'text-gray-900 hover:bg-gray-50'
                        }`
                      }
                    >
                      {item.title}
                    </NavLink>
                  )}
                  <AnimatePresence>
                    {item.hasSubmenu && activeMenu === item && (
                      <DropdownMenu
                        items={item.submenu}
                        isOpen={true}
                        onMouseEnter={() => handleMouseEnter(item)}
                        onMouseLeave={handleMouseLeave}
                        activeSubmenu={activeSubmenu}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:flex items-center px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-600"
            >
              Get Started
              <FaArrowRight className="ml-2" />
            </motion.button>
            
            <div className="lg:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="pt-2 pb-3 space-y-1 px-4">
              {menuConfig.mainNav.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.hasSubmenu ? (
                    <button
                      onClick={() => handleMouseEnter(item)}
                      className="w-full flex items-center justify-between px-4 py-2 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-50"
                    >
                      {item.title}
                      <motion.span
                        animate={{ rotate: activeMenu === item ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaChevronDown className="h-4 w-4" />
                      </motion.span>
                    </button>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-base font-medium rounded-lg ${
                          isActive
                            ? 'text-white bg-blue-600'
                            : 'text-gray-900 hover:bg-gray-50'
                        }`
                      }
                    >
                      {item.title}
                    </NavLink>
                  )}
                  <AnimatePresence>
                    {item.hasSubmenu && activeMenu === item && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="pl-4 mt-2 space-y-1"
                      >
                        {item.submenu.map((subItem, subIndex) => (
                          <motion.div
                            key={subIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: subIndex * 0.05 }}
                          >
                            <Link
                              to={subItem.path}
                              className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50"
                            >
                              {subItem.icon && (
                                <span className="mr-3 text-blue-600">
                                  <IconRenderer icon={subItem.icon} className="w-5 h-5" />
                                </span>
                              )}
                              {subItem.title}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-4 px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Get Started
                <FaArrowRight className="ml-2 inline" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar; 