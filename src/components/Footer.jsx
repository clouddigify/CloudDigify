import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

// Company info - easy to edit
const companyInfo = {
  name: "CloudDigify",
  tagline: "Your trusted cloud transformation partner"
};

// Social media links - easy to edit
const socialLinks = [
  { icon: <FaLinkedin />, url: "https://linkedin.com/company/clouddigify", label: "LinkedIn" },
  { icon: <FaTwitter />, url: "https://twitter.com/clouddigify", label: "Twitter" },
  { icon: <FaFacebook />, url: "https://facebook.com/clouddigify", label: "Facebook" },
  { icon: <FaInstagram />, url: "https://instagram.com/clouddigify", label: "Instagram" },
  { icon: <FaGithub />, url: "https://github.com/clouddigify", label: "GitHub" }
];

// Navigation links
const navLinks = [
  { title: "Home", path: "/" },
  { title: "Services", path: "/services" },
  { title: "Training", path: "/training" },
  { title: "Blogs", path: "/blogs" },
  { title: "Contact", path: "/contact" }
];

// Legal links
const legalLinks = [
  { title: "Terms & Conditions", path: "/terms" },
  { title: "Privacy Policy", path: "/privacy" }
];

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="mb-6 md:mb-0">
          <Link to="/" className="text-xl font-bold">{companyInfo.name}</Link>
          <p className="text-gray-400 text-sm mt-1">{companyInfo.tagline}</p>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">Navigate</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-gray-400 hover:text-white">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-xl"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Legal Links */}
      <div className="pt-6 mt-6 border-t border-gray-700 flex flex-wrap justify-center space-x-4">
        {legalLinks.map((link, index) => (
          <Link 
            key={index}
            to={link.path} 
            className="text-gray-400 hover:text-gray-300 text-sm"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer; 