import React from 'react';
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCloudUploadAlt, FaUsers, FaAward, FaRocket, FaChartLine, FaGlobe, FaHandshake, FaUserTie, FaBuilding, FaChartBar, FaHome, FaCodeBranch, FaShieldAlt, FaProjectDiagram, FaCertificate, FaMedal, FaCheckCircle } from 'react-icons/fa';
import { SiAmazonaws, SiGooglecloud, SiMicrosoftazure } from 'react-icons/si';
import SEO from '../common/SEO';
import Breadcrumbs from '../common/Breadcrumbs';

const businessStats = [
  { icon: <FaBuilding className="w-7 h-7 text-blue-600" />, label: 'Founded', value: '2022' },
  { icon: <FaUsers className="w-7 h-7 text-blue-600" />, label: 'Clients Served', value: '50+' },
  { icon: <FaGlobe className="w-7 h-7 text-blue-600" />, label: 'Countries', value: '7+' },
  { icon: <FaChartBar className="w-7 h-7 text-blue-600" />, label: 'Projects Delivered', value: '50+' }
];

const coreValues = [
  { icon: <FaHandshake className="w-8 h-8 text-blue-600" />, title: 'Client Partnership', desc: 'We build lasting relationships and deliver value for every client.' },
  { icon: <FaAward className="w-8 h-8 text-blue-600" />, title: 'Excellence', desc: 'We set the bar high and deliver quality in every project.' },
  { icon: <FaRocket className="w-8 h-8 text-blue-600" />, title: 'Innovation', desc: 'We embrace new ideas and technologies to drive business growth.' },
  { icon: <FaChartLine className="w-8 h-8 text-blue-600" />, title: 'Results-Driven', desc: 'We focus on measurable outcomes and business impact.' },
  { icon: <FaGlobe className="w-8 h-8 text-blue-600" />, title: 'Global Perspective', desc: 'We bring international experience and local expertise.' },
  { icon: <FaCloudUploadAlt className="w-8 h-8 text-blue-600" />, title: 'Cloud Mastery', desc: 'We are dedicated to cloud excellence and digital transformation.' }
];


const keyFeatures = [
  { icon: <FaCloudUploadAlt className="text-blue-600 text-4xl mb-4" />, title: 'Cloud Expertise', desc: 'Deep experience in AWS, Azure, and Google Cloud to deliver secure, scalable, and cost-effective solutions.' },
  { icon: <FaRocket className="text-blue-600 text-4xl mb-4" />, title: 'Innovation', desc: 'We leverage the latest technologies and creative thinking to help your business stay ahead of the curve.' },
  { icon: <FaHandshake className="text-blue-600 text-4xl mb-4" />, title: 'Client Focus', desc: 'We prioritize your goals, offering tailored solutions and dedicated support for every client partnership.' },
  { icon: <FaGlobe className="text-blue-600 text-4xl mb-4" />, title: 'Global Reach', desc: 'Serving clients across 7+ countries, we bring international perspective and local expertise to every project.' },
  { icon: <FaChartLine className="text-blue-600 text-4xl mb-4" />, title: 'Scalable Solutions', desc: 'Our solutions are designed to grow with your business, ensuring flexibility and long-term value.' }
];

const certifications = [
  { title: 'AWS Certified Solutions Architect – Associate', icon: <FaAward className="text-4xl text-blue-600 mb-2" /> },
  { title: 'Google Cloud Certified – Professional Cloud Developer', icon: <FaCertificate className="text-4xl text-indigo-500 mb-2" /> },
  { title: 'Microsoft Certified: Azure Administrator Associate', icon: <FaMedal className="text-4xl text-cyan-600 mb-2" /> },
  { title: 'Microsoft Certified: Azure Solutions Architect Expert', icon: <FaCheckCircle className="text-4xl text-purple-500 mb-2" /> },
  { title: 'Microsoft Certified: DevOps Engineer Expert', icon: <FaAward className="text-4xl text-pink-500 mb-2" /> },
  { title: 'Microsoft Certified: Azure Security Engineer Associate', icon: <FaCertificate className="text-4xl text-green-600 mb-2" /> },
  { title: 'Microsoft Certified: Azure Data Engineer Associate', icon: <FaMedal className="text-4xl text-yellow-500 mb-2" /> },
  { title: 'ITIL® Foundation Certificate in IT Service Management', icon: <FaCheckCircle className="text-4xl text-red-500 mb-2" /> },
  { title: 'Certified ScrumMaster® (CSM)', icon: <FaAward className="text-4xl text-orange-500 mb-2" /> },
];

const About = () => (
  <>
    <SEO
      title="About Us"
      description="Empowering businesses to achieve digital transformation through cloud innovation, partnership, and results-driven solutions. Learn more about CloudDigify's mission, values, and expertise."
      canonicalUrl="https://clouddigify.com/about"
      keywords={["about us", "clouddigify", "company", "cloud", "digital transformation", "values", "certifications"]}
    />
    <div className="bg-gray-50">
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="bg-white border-b border-[#E5E7EB]">
        <div className="container-site py-14 md:py-20 flex flex-col items-center justify-center text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl mb-6">
              About CloudDigify
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-[#4B5563] font-medium max-w-3xl mb-8"
          >
            Empowering businesses to achieve digital transformation through cloud innovation, partnership, and results-driven solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center"
          >
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Rest of the sections */}
      <div id="learn-more">
        {/* Business Stats Section */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">Who We Are</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">CloudDigify is a business-focused technology partner, helping organizations of all sizes harness the power of the cloud to drive growth, efficiency, and innovation. We deliver secure, scalable, and tailored solutions that make a real business impact.</p>
            <div className="flex flex-wrap justify-center gap-8">
              {businessStats.map((stat, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow p-6 min-w-[140px] flex flex-col items-center">
                  {stat.icon}
                  <div className="text-2xl font-bold mt-2 text-blue-700">{stat.value}</div>
                  <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-12 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
              {keyFeatures.map((feature, idx) => (
                <div key={idx} className="flex flex-col items-center bg-white rounded-xl shadow p-6 h-full">
                  {feature.icon}
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h4>
                  <p className="text-gray-600 text-sm text-center">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Core Values Section */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {coreValues.map((val, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
                  <span className="mb-6">{val.icon}</span>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{val.title}</h3>
                  <p className="text-gray-600">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Certifications Section */}
        <section className="py-12 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">Our Certifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center justify-center text-center p-8 transition-transform duration-200 hover:scale-105 hover:shadow-xl"
                >
                  <div className="mb-4 flex items-center justify-center w-full">
                    {React.cloneElement(cert.icon, { className: 'text-5xl ' + (cert.icon.props.className || '') })}
                  </div>
                  <div className="font-semibold text-lg text-gray-800 text-center">{cert.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  </>
);

export default About; 