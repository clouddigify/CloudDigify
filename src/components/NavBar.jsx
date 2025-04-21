import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const links = [
  { title: 'Home',     path: '/' },
  { title: 'Services', path: '/services' },
  { title: 'Training', path: '/training' },
  { title: 'Blogs',    path: '/blogs' },
  { title: 'Contact',  path: '/contact' },
];

const NavBar = () => (
  <motion.nav
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="sticky top-0 z-50 bg-white shadow py-4"
  >
    <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
      <Link to="/" className="text-2xl font-bold text-blue-600">CloudDigify</Link>
      <ul className="flex space-x-6">
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
  </motion.nav>
);

export default NavBar; 