import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCloudUploadAlt, FaUsers, FaAward, FaRocket, FaChartLine, FaGlobe, FaHandshake, FaUserTie, FaBuilding, FaChartBar } from 'react-icons/fa';
import PageTemplate from '../templates/PageTemplate';
import SEO from '../common/SEO';

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

const About = () => {
  return (
    <>
      <SEO 
        title="About Us"
        description="Learn about CloudDigify's mission, values, and commitment to digital excellence"
        canonicalUrl="https://clouddigify.com/about"
        keywords={['about us', 'company mission', 'digital excellence', 'cloud experts']}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">About CloudDigify</h1>
          
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600 mb-6">
              CloudDigify is a leading provider of cloud solutions and digital transformation services. 
              We help businesses modernize their infrastructure, optimize operations, and achieve their digital goals.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To empower organizations with innovative technology solutions that drive growth, 
              efficiency, and competitive advantage in the digital age.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Innovation in everything we do</li>
              <li>Customer success as our priority</li>
              <li>Excellence in delivery</li>
              <li>Continuous learning and improvement</li>
              <li>Integrity and transparency</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Expertise</h3>
                <p className="text-gray-600">
                  Deep technical knowledge and industry experience
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">
                  Cutting-edge solutions for modern challenges
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Support</h3>
                <p className="text-gray-600">
                  24/7 dedicated customer support
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Results</h3>
                <p className="text-gray-600">
                  Proven track record of successful implementations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About; 