import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
      <div className="mb-4 md:mb-0">
        <Link to="/" className="text-xl font-bold">CloudDigify</Link>
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} CloudDigify. All rights reserved.
        </p>
      </div>
      <div className="flex space-x-4">
        <Link to="/"         className="hover:text-gray-300">Home</Link>
        <Link to="/services" className="hover:text-gray-300">Services</Link>
        <Link to="/training" className="hover:text-gray-300">Training</Link>
        <Link to="/blogs"    className="hover:text-gray-300">Blogs</Link>
        <Link to="/contact"  className="hover:text-gray-300">Contact</Link>
      </div>
    </div>
  </footer>
);

export default Footer; 