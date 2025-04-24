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

const SubMenu = ({ items, depth, parentRef, activeItemIndex, setActiveItemIndex }) => {
  const menuRef = useRef(null);
  const timeoutRef = useRef(null);
  const [nestedActiveIndex, setNestedActiveIndex] = useState(-1);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && 
          parentRef.current && !parentRef.current.contains(event.target)) {
        setActiveItemIndex(-1);
        setNestedActiveIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [parentRef, setActiveItemIndex]);

  const handleMouseEnter = (itemId) => {
    // Clear any previous timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    // Immediately set active item - this will close other submenus
    setActiveItemIndex(itemId);
    // Clear any active nested items when entering a new item
    setNestedActiveIndex(-1);
  };

  const handleMouseLeave = () => {
    // When leaving the submenu, set a delay before closing
    timeoutRef.current = setTimeout(() => {
      setActiveItemIndex(-1);
      setNestedActiveIndex(-1);
    }, 300); // Reduced delay for better responsiveness
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={menuRef}
      className={`absolute ${
        depth === 0 ? 'top-full left-0 mt-2' : 'left-full top-0 ml-0.5'
      } min-w-[250px] rounded-xl shadow-lg bg-white/95 backdrop-blur-sm ring-1 ring-black/5 border border-gray-100 z-50`}
      onMouseEnter={() => {
        // Clear any timeout when entering the menu
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
      }}
      onMouseLeave={handleMouseLeave}
    >
      <div className="py-1">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => handleMouseEnter(index)}
          >
            {item.submenu ? (
              <>
                <div 
                  className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 cursor-pointer"
                  onMouseEnter={() => {
                    // When hovering on the submenu title itself, set it as active immediately
                    setActiveItemIndex(index);
                  }}
                >
                  <div className="flex items-center space-x-3 min-w-0">
                    {item.icon && (
                      <span className="flex-shrink-0 text-blue-600">
                        <IconRenderer icon={item.icon} className="w-5 h-5" />
                      </span>
                    )}
                    <div>
                      <div className="font-medium">{item.title}</div>
                      {item.description && (
                        <div className="text-xs text-gray-500">{item.description}</div>
                      )}
                    </div>
                  </div>
                  <FaChevronRight className="ml-2 text-gray-400" />
                </div>
                {activeItemIndex === index && item.submenu && (
                  <SubMenu
                    items={item.submenu}
                    depth={depth + 1}
                    parentRef={menuRef}
                    activeItemIndex={nestedActiveIndex}
                    setActiveItemIndex={setNestedActiveIndex}
                  />
                )}
              </>
            ) : (
              <Link
                to={item.path}
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50"
              >
                {item.icon && (
                  <span className="flex-shrink-0 text-blue-600 mr-3">
                    <IconRenderer icon={item.icon} className="w-5 h-5" />
                  </span>
                )}
                <div>
                  <div className="font-medium">{item.title}</div>
                  {item.description && (
                    <div className="text-xs text-gray-500">{item.description}</div>
                  )}
                </div>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const NavItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState(-1);
  const itemRef = useRef(null);
  const timeoutRef = useRef(null);
  const activationTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    // Clear any previous timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    
    // Clear any previous activation timeout
    if (activationTimeoutRef.current) {
      clearTimeout(activationTimeoutRef.current);
    }
    
    // Add a very short delay when opening the top-level menu
    // to prevent flickering during quick mouse movements
    activationTimeoutRef.current = setTimeout(() => {
      setIsOpen(true);
    }, 50); // Very short delay
  };

  const handleMouseLeave = () => {
    // Clear any activation timeout
    if (activationTimeoutRef.current) {
      clearTimeout(activationTimeoutRef.current);
      activationTimeoutRef.current = null;
    }
    
    // Set timeout to close the menu
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      setActiveItemIndex(-1); // Reset active submenu item when leaving
    }, 300); // Delay before closing
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (activationTimeoutRef.current) {
        clearTimeout(activationTimeoutRef.current);
      }
    };
  }, []);

  if (item.hasSubmenu && Array.isArray(item.submenu)) {
    return (
      <div
        ref={itemRef}
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 rounded-full hover:bg-gray-50 transition-colors">
          <span>{item.title}</span>
          <FaChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        {isOpen && Array.isArray(item.submenu) && (
          <SubMenu 
            items={item.submenu} 
            depth={0} 
            parentRef={itemRef} 
            activeItemIndex={activeItemIndex}
            setActiveItemIndex={setActiveItemIndex}
          />
        )}
      </div>
    );
  }

  return (
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
  );
};

// Mobile submenu component specifically for mobile view
const MobileSubMenu = ({ items }) => {
  return (
    <div className="pl-4 mt-2 space-y-1">
      {items.map((item, index) => (
        <div key={index} className="py-1">
          {item.submenu ? (
            <MobileMenuItem item={item} />
          ) : (
            <Link
              to={item.path}
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50"
            >
              {item.icon && (
                <span className="mr-3 text-blue-600">
                  <IconRenderer icon={item.icon} className="w-5 h-5" />
                </span>
              )}
              {item.title}
              {item.description && (
                <span className="ml-2 text-xs text-gray-500">{item.description}</span>
              )}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

// Mobile menu item component specifically for mobile view
const MobileMenuItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsOpen(!isOpen);
  };

  if (item.submenu && Array.isArray(item.submenu)) {
    return (
      <div className="mb-2">
        <button
          onClick={toggleSubmenu}
          className="w-full flex items-center justify-between px-4 py-2 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-50"
        >
          {item.icon && (
            <span className="mr-3 text-blue-600">
              <IconRenderer icon={item.icon} className="w-5 h-5" />
            </span>
          )}
          <span className="flex-1 text-left">{item.title}</span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <FaChevronDown className="h-4 w-4" />
          </motion.span>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MobileSubMenu items={item.submenu} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Link
      to={item.path}
      className="block px-4 py-2 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-50"
    >
      {item.title}
    </Link>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.nav
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
                <NavItem key={index} item={item} />
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
            className="lg:hidden bg-white border-t overflow-y-auto max-h-[80vh]"
          >
            <div className="pt-2 pb-3 space-y-1 px-4">
              {menuConfig.mainNav.map((item, index) => (
                <MobileMenuItem key={index} item={item} />
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