import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

// You can replace this with your actual logo path
const logoUrl = '/logo.png';

const links = [
  { title: 'Home',     path: '/' },
  { title: 'About',    path: '/about' },
  { title: 'Services', path: '/services' },
  { title: 'Training', path: '/training' },
  { title: 'Blogs',    path: '/blogs' },
  { title: 'Contact',  path: '/contact' },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
          {links.map(({ title, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-700 hover:text-blue-600'
                }
              >
                {title}
              </NavLink>
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
        <ul className="flex flex-col items-center space-y-4 py-4">
          {links.map(({ title, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-700 hover:text-blue-600'
                }
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default NavBar; 