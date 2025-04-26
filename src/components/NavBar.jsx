import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown, FaChevronRight, FaArrowRight } from 'react-icons/fa';
import { menuConfig, Icons } from '../config/menuConfig';
import IconRenderer from './IconRenderer';

// Create a context for managing active menu state
const MenuContext = createContext({
  activeMenu: null,
  setActiveMenu: () => {},
  preventClose: false,
  setPreventClose: () => {},
});

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
  const [wasClicked, setWasClicked] = useState(false);
  const { setPreventClose } = useContext(MenuContext);
  const [shouldAlignLeft, setShouldAlignLeft] = useState(false);

  useEffect(() => {
    if (menuRef.current && parentRef.current) {
      const rect = parentRef.current.getBoundingClientRect();
      const menuWidth = menuRef.current.offsetWidth;
      const viewportWidth = window.innerWidth;
      
      // If submenu would extend beyond viewport, align it to the left
      if (rect.right + menuWidth > viewportWidth) {
        setShouldAlignLeft(true);
      }
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only close on click outside if not manually clicked
      if (!wasClicked && 
          menuRef.current && !menuRef.current.contains(event.target) && 
          parentRef.current && !parentRef.current.contains(event.target)) {
        setActiveItemIndex(-1);
        setNestedActiveIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [parentRef, setActiveItemIndex, wasClicked]);

  const handleMouseEnter = (itemId) => {
    // Clear any previous timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    
    // When switching between submenu items, prevent menu closing
    if (activeItemIndex !== -1 && activeItemIndex !== itemId) {
      setPreventClose(true);
    }
    
    // Immediately set active item - this will close other submenus
    setActiveItemIndex(itemId);
    // Clear any active nested items when entering a new item
    setNestedActiveIndex(-1);
  };

  const handleMouseLeave = () => {
    // Don't close if was clicked
    if (wasClicked) {
      return;
    }
    
    // When leaving the submenu, set a delay before closing
    timeoutRef.current = setTimeout(() => {
      setActiveItemIndex(-1);
      setNestedActiveIndex(-1);
    }, 50); // Reduced delay for better responsiveness
  };

  const handleItemClick = (index, hasSubmenu) => (e) => {
    // Only prevent default for items with submenus
    if (hasSubmenu) {
      e.preventDefault();
      e.stopPropagation();
      
      // Prevent menu closing when clicking on submenu items
      setPreventClose(true);
      setWasClicked(true);
      setActiveItemIndex(index);
    }
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
        depth === 0 
          ? shouldAlignLeft 
            ? 'top-full right-0 mt-2' 
            : 'top-full left-0 mt-2'
          : shouldAlignLeft
            ? 'right-full top-0 mr-0.5'
            : 'left-full top-0 ml-0.5'
      } w-[280px] rounded-xl shadow-lg bg-white/95 backdrop-blur-sm ring-1 ring-black/5 border border-gray-100 z-50`}
      onMouseEnter={() => {
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
                  className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 cursor-pointer h-10 w-full"
                  onMouseEnter={() => {
                    setActiveItemIndex(index);
                  }}
                  onClick={handleItemClick(index, true)}
                >
                  <div className="flex items-center space-x-3 min-w-0 overflow-hidden max-w-[280px]">
                    {item.icon && (
                      <span className="flex-shrink-0 text-blue-600 w-5 h-5 flex items-center justify-center">
                        <IconRenderer icon={item.icon} className="w-4 h-4" title={item.title} />
                      </span>
                    )}
                    <div className="whitespace-normal">
                      <div className="font-medium">{item.title}</div>
                      {item.description && (
                        <div className="text-xs text-gray-500">{item.description}</div>
                      )}
                    </div>
                  </div>
                  <FaChevronRight className={`ml-2 text-gray-400 flex-shrink-0 w-4 h-4 ${shouldAlignLeft ? 'rotate-180' : ''}`} />
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
                className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 h-10 w-full"
                onClick={handleItemClick(index, false)}
              >
                <div className="flex items-center space-x-3 min-w-0 overflow-hidden max-w-[280px]">
                  {item.icon && (
                    <span className="flex-shrink-0 text-blue-600 w-5 h-5 flex items-center justify-center">
                      <IconRenderer icon={item.icon} className="w-4 h-4" title={item.title} />
                    </span>
                  )}
                  <div className="whitespace-normal">
                    <div className="font-medium">{item.title}</div>
                    {item.description && (
                      <div className="text-xs text-gray-500">{item.description}</div>
                    )}
                  </div>
                </div>
                {item.type === 'action' && <FaArrowRight className="ml-2 text-gray-400 flex-shrink-0 w-4 h-4" />}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const NavItem = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState(-1);
  const itemRef = useRef(null);
  const timeoutRef = useRef(null);
  const activationTimeoutRef = useRef(null);
  const { activeMenu, setActiveMenu, setPreventClose } = useContext(MenuContext);
  const [wasClicked, setWasClicked] = useState(false);

  // Effect to close menu when another menu becomes active
  useEffect(() => {
    // If this is not the active menu and it's open, close it immediately
    if (activeMenu !== index && isOpen) {
      setIsOpen(false);
      setActiveItemIndex(-1);
      setWasClicked(false);
    }
    // If activeMenu is null (set when mouse leaves nav), close everything
    if (activeMenu === null && isOpen) {
      setIsOpen(false);
      setActiveItemIndex(-1);
      setWasClicked(false);
    }
  }, [activeMenu, index, isOpen]);

  // Effect to ensure this menu opens when it becomes the active menu
  // This fixes the issue with switching between menu items
  useEffect(() => {
    if (activeMenu === index && !isOpen) {
      setIsOpen(true);
      setWasClicked(true);
    } else if (activeMenu === null && isOpen) {
      // Close when no menu is active (e.g., when mouse leaves navigation)
      setIsOpen(false);
      setActiveItemIndex(-1);
      setWasClicked(false);
    }
  }, [activeMenu, index, isOpen]);

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
    
    // When switching between menus via hover, briefly prevent closing
    if (activeMenu !== null && activeMenu !== index) {
      setPreventClose(true);
    }
    
    // Immediately set this as the active menu (this will close other menus)
    setActiveMenu(index);
    
    // Add a very short delay when opening the top-level menu
    // to prevent flickering during quick mouse movements
    activationTimeoutRef.current = setTimeout(() => {
      setIsOpen(true);
    }); // Very short delay
  };

  const handleMouseLeave = () => {
    // If this menu was clicked open, don't close it on mouseleave
    if (wasClicked) {
      return;
    }
    
    // Clear any activation timeout
    if (activationTimeoutRef.current) {
      clearTimeout(activationTimeoutRef.current);
      activationTimeoutRef.current = null;
    }
    
    // Set timeout to close the menu
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      setActiveItemIndex(-1); // Reset active submenu item when leaving
      
      // Only clear active menu if this is the current active menu
      if (activeMenu === index) {
        setActiveMenu(null);
      }
    }); // Delay before closing
  };

  // Handle click on menu button
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // When switching between menus via click, briefly prevent closing
    if (activeMenu !== null && activeMenu !== index) {
      setPreventClose(true);
    }
    
    // Ensure we close any previously open menu
    // and wait a brief moment before opening the new one
    if (activeMenu !== null && activeMenu !== index) {
      // First set this as the active menu (which will trigger the other menu to close)
      setActiveMenu(index);
      // This menu will be automatically opened by the useEffect above
      setWasClicked(true);
    } else if (isOpen && wasClicked) {
      // If this menu is already open and was clicked, close it
      setIsOpen(false);
      setWasClicked(false);
      setActiveMenu(null);
    } else {
      // If this menu is closed or wasn't clicked open before
      setIsOpen(true);
      setWasClicked(true);
      setActiveMenu(index);
    }
  };

  // Add document click handler to close clicked menus when clicking elsewhere
  useEffect(() => {
    const handleDocumentClick = (e) => {
      // If menu is open and was clicked to open it
      if (isOpen && wasClicked) {
        // Check if click was outside menu
        if (
          itemRef.current && 
          !itemRef.current.contains(e.target)
        ) {
          setIsOpen(false);
          setWasClicked(false);
          setActiveMenu(null);
        }
      }
    };

    document.addEventListener('mousedown', handleDocumentClick);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, [isOpen, wasClicked, setActiveMenu]);

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
        <button 
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 
                   hover:text-blue-600 transition-colors duration-200"
          onClick={handleClick}
        >
          <span>{item.title}</span>
          <FaChevronDown 
            className={`ml-1.5 h-4 w-4 transition-transform duration-200 
                     ${isOpen ? 'rotate-180' : ''}`} 
          />
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
        `inline-flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200
         ${isActive 
           ? 'text-blue-600' 
           : 'text-gray-700 hover:text-blue-600'
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
              className="flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50 min-h-[40px]"
            >
              <div className="flex items-center min-w-0 overflow-hidden">
                {item.icon && (
                  <span className="mr-3 text-blue-600 flex-shrink-0">
                    <IconRenderer icon={item.icon} className="w-5 h-5" title={item.title} />
                  </span>
                )}
                <div className="truncate">
                  <div className="truncate">{item.title}</div>
                  {item.description && (
                    <div className="text-xs text-gray-500 truncate">{item.description}</div>
                  )}
                </div>
              </div>
              {item.type === 'action' && <FaArrowRight className="ml-2 text-gray-400 flex-shrink-0" />}
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
          className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-50 min-h-[48px]"
        >
          <div className="flex items-center min-w-0 overflow-hidden">
            {item.icon && (
              <span className="mr-3 text-blue-600 flex-shrink-0 w-5 h-5 flex items-center justify-center">
                <IconRenderer icon={item.icon} className="w-4 h-4" title={item.title} />
              </span>
            )}
            <div className="truncate max-w-[200px]">
              <div className="truncate">{item.title}</div>
              {item.description && (
                <div className="text-xs text-gray-500 truncate">{item.description}</div>
              )}
            </div>
          </div>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0 w-4 h-4 flex items-center justify-center"
          >
            <FaChevronDown className="w-4 h-4" />
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
      className="flex items-center justify-between px-4 py-3 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-50 min-h-[48px] w-full"
    >
      <div className="flex items-center min-w-0 overflow-hidden">
        {item.icon && (
          <span className="mr-3 text-blue-600 flex-shrink-0 w-5 h-5 flex items-center justify-center">
            <IconRenderer icon={item.icon} className="w-5 h-5" title={item.title} />
          </span>
        )}
        <div className="truncate max-w-[200px]">
          <div className="truncate">{item.title}</div>
          {item.description && (
            <div className="text-xs text-gray-500 truncate">{item.description}</div>
          )}
        </div>
      </div>
      {item.type === 'action' && <FaArrowRight className="ml-2 text-gray-400 flex-shrink-0 w-4 h-4" />}
    </Link>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(null);
  const [preventClose, setPreventClose] = useState(false);
  const navRef = useRef(null);
  const closeTimeoutRef = useRef(null);

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

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Add global document click handler to close menus when clicking outside navbar
  useEffect(() => {
    const handleDocumentClick = (e) => {
      // If there's an active menu and click is outside nav and we're not preventing close
      if (activeMenu !== null && !preventClose && navRef.current && !navRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
      // Reset the prevent close flag after handling the click
      if (preventClose) {
        setPreventClose(false);
      }
    };

    document.addEventListener('mousedown', handleDocumentClick);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, [activeMenu, preventClose]);

  // Function to handle switching between menu items
  const handleMenuSwitch = (newIndex) => {
    // If we're switching between menus, temporarily prevent closing
    if (activeMenu !== null && activeMenu !== newIndex) {
      setPreventClose(true);
    }
    setActiveMenu(newIndex);
  };

  // Handle mouse leave for the entire navigation
  const handleNavMouseLeave = () => {
    // Don't close immediately, add a short delay
    closeTimeoutRef.current = setTimeout(() => {
      // When mouse leaves entire nav, close all menus
      setActiveMenu(null);
      // Reset prevent close flag
      setPreventClose(false);
    });
  };

  // Handle mouse enter for the navigation
  const handleNavMouseEnter = () => {
    // Clear any pending close timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  return (
    <MenuContext.Provider value={{ 
      activeMenu, 
      setActiveMenu: handleMenuSwitch,
      preventClose,
      setPreventClose
    }}>
      <motion.header
        ref={navRef}
        initial={false}
        animate={{
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 1)',
          backdropFilter: isScrolled ? 'blur(10px)' : 'blur(0px)',
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
          isScrolled ? 'shadow-lg' : 'shadow-sm'
        }`}
        onMouseLeave={handleNavMouseLeave}
        onMouseEnter={handleNavMouseEnter}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Left section: Logo + Navigation */}
            <div className="flex items-center flex-1">
              {/* Logo */}
              <Link to="/" className="flex-shrink-0">
                <LogoWrapper>
                  <Logo />
                  <BrandTitle />
                </LogoWrapper>
              </Link>

              {/* Main Navigation */}
              <nav className="hidden lg:flex items-center ml-auto mr-8">
               <ul className="flex items-center space-x-6">
                  {menuConfig.mainNav.map((item, index) => (
                    <li key={index}>
                      <NavItem item={item} index={index} />
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Right section: CTA Button + Mobile Menu */}
            <div className="flex items-center pl-4">
              <Link to="/contact" className="hidden lg:block">
                <motion.button
                  className="px-6 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg 
                           transition-all duration-200 ease-in-out
                           hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 
                           focus:ring-blue-500 focus:ring-offset-2 shadow-md"
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="ml-4 p-2 lg:hidden rounded-md text-gray-400 hover:text-gray-500 
                         hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset 
                         focus:ring-blue-500"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-white border-t"
            >
              <div className="px-4 pt-2 pb-3 space-y-1">
                {menuConfig.mainNav.map((item, index) => (
                  <MobileMenuItem key={index} item={item} />
                ))}
                <div className="pt-4">
                  <Link to="/contact" className="block w-full">
                    <motion.button
                      className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg 
                               font-medium hover:bg-blue-700 transition-all duration-200 
                               text-center shadow-md"
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Started
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </MenuContext.Provider>
  );
};

export default NavBar; 