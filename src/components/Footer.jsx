import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-12">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div>
          <Link to="/" className="text-2xl font-bold mb-4 block">CloudDigify</Link>
          <p className="text-gray-400 mb-4">
            Your trusted partner in IT transformation & cloud solutions.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={20} /></a>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
            <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
            <li><Link to="/training" className="text-gray-400 hover:text-white">Training</Link></li>
            <li><Link to="/blogs" className="text-gray-400 hover:text-white">Blogs</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">DevOps & CI/CD</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Cloud Migration</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Infrastructure as Code</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Managed Services</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Security & Compliance</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="text-gray-400">
              10432 Innovation Drive, Suite 300<br />
              San Francisco, CA 94103
            </li>
            <li className="text-gray-400">info@clouddigify.com</li>
            <li className="text-gray-400">+1 800 123 4567</li>
          </ul>
        </div>
      </div>
      
      <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 mb-4 md:mb-0">
          © {new Date().getFullYear()} CloudDigify. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 