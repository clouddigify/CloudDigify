import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram, 
  FaGithub,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaInfoCircle,
  FaUsers,
  FaBriefcase,
  FaHandshake,
  FaCogs,
  FaGraduationCap,
  FaIndustry,
  FaFileContract,
  FaUserShield,
  FaCookie,
  FaShieldAlt,
  FaCloud,
  FaLaptopCode,
  FaServer,
  FaVial,
  FaBrain,
  FaHeartbeat,
  FaUniversity,
  FaTshirt,
  FaBolt,
  FaSearch,
  FaLandmark,
  FaYoutube
} from 'react-icons/fa';

import { menuConfig } from '../config/menuConfig';

// Company info
const companyInfo = {
  name: "CloudDigify",
  tagline: "Your trusted digital transformation partner",
  address: "Plot No GH-02/A, Sector 16, Vaidpura, Greater Noida, Ghaziabad, Uttar Pradesh 201309",
  phone: "+91 7011112386",
  email: "contact@clouddigify.com",
  hours: "Mon-Fri: 9:00 AM - 6:00 PM IST"
};

// Social media links
const socialLinks = [
  { icon: <FaLinkedin className="w-5 h-5" />, url: "https://linkedin.com/company/clouddigify", label: "LinkedIn" },
  { icon: <FaTwitter className="w-5 h-5" />, url: "https://twitter.com/clouddigify", label: "Twitter" },
  { icon: <FaFacebook className="w-5 h-5" />, url: "https://facebook.com/clouddigify", label: "Facebook" },
  { icon: <FaInstagram className="w-5 h-5" />, url: "https://instagram.com/clouddigify", label: "Instagram" },
  { icon: <FaYoutube className="w-5 h-5" />, url: "https://youtube.com/@clouddigify", label: "YouTube" },
  { icon: <FaGithub className="w-5 h-5" />, url: "https://github.com/clouddigify", label: "GitHub" }
];

// Footer links organized by sections
const footerLinks = {
  company: [
    { title: "About Us", path: "/about", icon: <FaInfoCircle className="w-4 h-4" /> },
    { title: "Our Team", path: "/team", icon: <FaUsers className="w-4 h-4" /> },
    { title: "Our Culture", path: "/culture", icon: <FaHandshake className="w-4 h-4" /> },
    { title: "Career", path: "/career", icon: <FaBriefcase className="w-4 h-4" /> },
    { title: "Contact", path: "/contact", icon: <FaEnvelope className="w-4 h-4" /> }
  ],
  services: [
    { title: "Services", path: "/services", icon: <FaCogs className="w-4 h-4" /> },
    { title: "Training", path: "/training", icon: <FaGraduationCap className="w-4 h-4" /> },
    { title: "Industries", path: "/industries", icon: <FaIndustry className="w-4 h-4" /> }
  ],
  resources: [
    { title: "Terms & Conditions", path: "/terms", icon: <FaFileContract className="w-4 h-4" /> },
    { title: "Privacy Policy", path: "/privacy", icon: <FaUserShield className="w-4 h-4" /> },
    { title: "Cookie Policy", path: "/cookies", icon: <FaCookie className="w-4 h-4" /> },
    { title: "Security", path: "/security", icon: <FaShieldAlt className="w-4 h-4" /> }
  ]
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-400">Subscribe to our newsletter for the latest updates and insights.</p>
            </div>
            <form className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Company Info */}
          <div className="lg:w-2/5 lg:pr-12 border-b lg:border-b-0 lg:border-r border-gray-700 pb-8 lg:pb-0">
            <Link to="/" className="inline-block">
              <h2 className="text-2xl font-bold">{companyInfo.name}</h2>
              <p className="text-gray-400 mt-2">{companyInfo.tagline}</p>
            </Link>
            <div className="mt-6 space-y-4 text-gray-400">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-5 h-5 mt-1 text-blue-500" />
                <span>{companyInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="w-5 h-5 text-blue-500" />
                <span>{companyInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="w-5 h-5 text-blue-500" />
                <span>{companyInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaClock className="w-5 h-5 text-blue-500" />
                <span>{companyInfo.hours}</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="grid grid-cols-2 gap-8 w-full max-w-xl mx-auto">
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path} className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200">
                        {link.icon}
                        <span>{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path} className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200">
                        {link.icon}
                        <span>{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-gray-400 text-sm">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-full transition-colors duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 