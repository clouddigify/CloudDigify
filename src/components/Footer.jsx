import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

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
    
    {/* Legal Links */}
    <div className="max-w-6xl mx-auto pt-6 mt-6 border-t border-gray-700 flex flex-wrap justify-center space-x-4 px-6">
      <Link to="/terms" className="text-gray-400 hover:text-gray-300 text-sm">Terms & Conditions</Link>
      <Link to="/privacy" className="text-gray-400 hover:text-gray-300 text-sm">Privacy Policy</Link>
      <Link to="/cookies" className="text-gray-400 hover:text-gray-300 text-sm">Cookie Policy</Link>
    </div>
  </footer>
);

export default Footer; 