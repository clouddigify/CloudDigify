import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCloudUploadAlt, FaUsers, FaAward, FaRocket, FaChartLine, FaGlobe, FaHandshake, FaUserTie, FaBuilding, FaChartBar } from 'react-icons/fa';
import PageTemplate from '../templates/PageTemplate';

// Animated background shapes component
const AnimatedBackground = () => {
  const shapes = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    size: Math.random() * 60 + 40,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full bg-white/5"
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

const businessStats = [
  { icon: <FaBuilding className="w-7 h-7 text-blue-600" />, label: 'Founded', value: '2015' },
  { icon: <FaUsers className="w-7 h-7 text-blue-600" />, label: 'Clients Served', value: '200+' },
  { icon: <FaGlobe className="w-7 h-7 text-blue-600" />, label: 'Countries', value: '12+' },
  { icon: <FaChartBar className="w-7 h-7 text-blue-600" />, label: 'Projects Delivered', value: '350+' }
];

const coreValues = [
  { icon: <FaHandshake className="w-8 h-8 text-blue-600" />, title: 'Client Partnership', desc: 'We build lasting relationships and deliver value for every client.' },
  { icon: <FaAward className="w-8 h-8 text-blue-600" />, title: 'Excellence', desc: 'We set the bar high and deliver quality in every project.' },
  { icon: <FaRocket className="w-8 h-8 text-blue-600" />, title: 'Innovation', desc: 'We embrace new ideas and technologies to drive business growth.' },
  { icon: <FaChartLine className="w-8 h-8 text-blue-600" />, title: 'Results-Driven', desc: 'We focus on measurable outcomes and business impact.' },
  { icon: <FaGlobe className="w-8 h-8 text-blue-600" />, title: 'Global Perspective', desc: 'We bring international experience and local expertise.' },
  { icon: <FaCloudUploadAlt className="w-8 h-8 text-blue-600" />, title: 'Cloud Mastery', desc: 'We are dedicated to cloud excellence and digital transformation.' }
];

const leadership = [
  { name: 'Sarah Johnson', title: 'CEO & Founder', desc: 'Visionary leader with 15+ years in cloud and business strategy.', icon: <FaUserTie className="w-10 h-10 text-blue-600" /> },
  { name: 'David Chen', title: 'CTO', desc: 'Expert in cloud architecture and technical innovation.', icon: <FaUserTie className="w-10 h-10 text-blue-600" /> },
  { name: 'Miguel Rodriguez', title: 'Head of Operations', desc: 'Ensures reliable, secure, and optimized client solutions.', icon: <FaUserTie className="w-10 h-10 text-blue-600" /> }
];

const milestones = [
  { year: '2015', title: 'Company Founded', desc: 'CloudDigify was established to revolutionize cloud services.' },
  { year: '2017', title: 'Major Partnership', desc: 'Strategic partnership with leading cloud providers.' },
  { year: '2019', title: 'Global Expansion', desc: 'Expanded operations to serve clients in 12+ countries.' },
  { year: '2022', title: 'Award-Winning Delivery', desc: 'Recognized for excellence in digital transformation.' }
];

const keyFeatures = [
  { icon: <FaCloudUploadAlt className="text-blue-600 text-4xl mb-4" />, title: 'Cloud Expertise', desc: 'Deep experience in AWS, Azure, and Google Cloud to deliver secure, scalable, and cost-effective solutions.' },
  { icon: <FaRocket className="text-blue-600 text-4xl mb-4" />, title: 'Innovation', desc: 'We leverage the latest technologies and creative thinking to help your business stay ahead of the curve.' },
  { icon: <FaHandshake className="text-blue-600 text-4xl mb-4" />, title: 'Client Focus', desc: 'We prioritize your goals, offering tailored solutions and dedicated support for every client partnership.' },
  { icon: <FaGlobe className="text-blue-600 text-4xl mb-4" />, title: 'Global Reach', desc: 'Serving clients across 12+ countries, we bring international perspective and local expertise to every project.' },
  { icon: <FaChartLine className="text-blue-600 text-4xl mb-4" />, title: 'Scalable Solutions', desc: 'Our solutions are designed to grow with your business, ensuring flexibility and long-term value.' }
];

const certifications = [
  { title: 'AWS Certified Solutions Architect', desc: 'Professional-level certification validating expertise in designing distributed systems on AWS', icon: <FaAward className="w-14 h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl md:text-3xl mb-4" /> },
  { title: 'Microsoft Azure Solutions Expert', desc: 'Expert-level certification for professionals who design and implement Azure solutions', icon: <FaAward className="w-14 h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl md:text-3xl mb-4" /> },
  { title: 'Google Cloud Professional Architect', desc: 'Certification validating expertise in designing and managing solutions on Google Cloud', icon: <FaAward className="w-14 h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl md:text-3xl mb-4" /> },
  { title: 'Certified Kubernetes Administrator', desc: 'Certification demonstrating proficiency in Kubernetes deployment and management', icon: <FaAward className="w-14 h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl md:text-3xl mb-4" /> }
];

const About = () => (
  <div className="bg-gray-50">
    {/* Breadcrumb Navigation */}
    <nav className="max-w-7xl mx-auto px-4 pt-6 pb-2 text-sm text-gray-400 flex items-center" aria-label="Breadcrumb">
      <ol className="flex space-x-2">
        <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
        <li><span className="mx-2">&gt;</span></li>
        <li className="text-blue-700 font-semibold">About Us</li>
      </ol>
    </nav>

    {/* Animated Hero Section */}
    <section className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 text-white overflow-hidden" style={{ minHeight: '500px' }}>
      <AnimatedBackground />
      
      <div className="relative max-w-7xl mx-auto px-4 py-20 flex flex-col items-center justify-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
            About CloudDigify
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-blue-100 font-medium max-w-3xl mb-8"
        >
          Empowering businesses to achieve digital transformation through cloud innovation, partnership, and results-driven solutions.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center"
        >
          <Link to="/contact" className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300">
            Contact Us
          </Link>
        </motion.div>
      </div>
      
      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </motion.div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-white p-5 md:p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
                {cert.icon}
                <h3 className="text-base md:text-lg font-bold mb-2 text-gray-800">{cert.title}</h3>
                <p className="text-xs md:text-sm text-gray-600">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default About; 