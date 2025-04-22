import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaAward, FaUsers, FaCloudversify, FaHandshake, FaUserCircle } from 'react-icons/fa';

// Team members data
const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Cloud Architect',
    bio: 'Former AWS Solutions Architect with 15+ years of cloud computing experience.',
    useIcon: true
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    bio: 'Azure-certified expert with a background in enterprise architecture and DevOps.',
    useIcon: true
  },
  {
    name: 'Olivia Rodriguez',
    role: 'Security Director',
    bio: 'CISSP-certified security professional with expertise in cloud security frameworks.',
    useIcon: true
  },
  {
    name: 'David Wilson',
    role: 'DevOps Lead',
    bio: 'Automation expert with extensive experience implementing CI/CD pipelines.',
    useIcon: true
  }
];

// Company values
const values = [
  {
    icon: <FaCloudversify className="text-4xl text-blue-500 mb-3" />,
    title: 'Innovation',
    description: 'We constantly explore emerging technologies to deliver cutting-edge solutions.'
  },
  {
    icon: <FaAward className="text-4xl text-blue-500 mb-3" />,
    title: 'Excellence',
    description: 'We are committed to delivering the highest quality in everything we do.'
  },
  {
    icon: <FaUsers className="text-4xl text-blue-500 mb-3" />,
    title: 'Collaboration',
    description: 'We work closely with our clients as partners to achieve shared success.'
  },
  {
    icon: <FaHandshake className="text-4xl text-blue-500 mb-3" />,
    title: 'Integrity',
    description: 'We maintain the highest ethical standards in all our business operations.'
  }
];

const About = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {/* Hero Section */}
    <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20 px-6"><div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About CloudDigify</h1>
          <p className="text-xl opacity-90 mb-8">
            We're a&nbsp; team of cloud experts dedicated to transforming businesses through innovative cloud solutions.
          </p>
        </div>
      </div></section>

    {/* Our Story */}
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              CloudDigify was founded in 2018 by a team of cloud computing experts who saw a gap in the market for truly comprehensive cloud services. We recognized that many organizations were struggling with their cloud adoption journey and needed a partner who could provide end-to-end support.
            </p>
            <p className="text-gray-600 mb-4">
              What started as a small team of consultants has grown into a full-service cloud solutions provider with expertise across AWS, Azure, and Oracle Cloud Infrastructure. Our team brings decades of combined experience in cloud architecture, DevOps, security, and managed services.
            </p>
            <p className="text-gray-600">
              Today, we help organizations of all sizes – from startups to enterprises – harness the power of the cloud to drive innovation, optimize costs, and achieve their business objectives.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Company Milestones</h3>
            <ul className="space-y-4">
              <li className="flex">
                <div className="flex-shrink-0 w-12 text-right font-bold text-blue-600 mr-4">2018</div>
                <div>CloudDigify founded with a focus on cloud migration services</div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 w-12 text-right font-bold text-blue-600 mr-4">2019</div>
                <div>Expanded service offerings to include DevOps and security solutions</div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 w-12 text-right font-bold text-blue-600 mr-4">2020</div>
                <div>Achieved AWS Premier Consulting Partner status</div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 w-12 text-right font-bold text-blue-600 mr-4">2021</div>
                <div>Launched managed cloud services practice</div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 w-12 text-right font-bold text-blue-600 mr-4">2022</div>
                <div>Recognized as Microsoft Azure Expert MSP</div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 w-12 text-right font-bold text-blue-600 mr-4">2023</div>
                <div>Expanded to international markets with clients across North America and Europe</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Our Values */}
    <section className="py-16 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              {value.icon}
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Our Team */}
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Meet Our Leadership Team</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Our team brings decades of experience in cloud computing, software development, and IT operations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              {member.useIcon ? (
                <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
                  <FaUserCircle className="text-gray-400" size={120} />
                </div>
              ) : (
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center" 
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Certifications */}
    <section className="py-16 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Our Certifications</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          We maintain the highest level of expertise through continuous education and certification.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-3">AWS</h3>
            <ul className="space-y-2 text-gray-600">
              <li>AWS Solutions Architect Professional</li>
              <li>AWS DevOps Professional</li>
              <li>AWS Security Specialty</li>
              <li>AWS Advanced Networking Specialty</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-3">Microsoft Azure</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Azure Solutions Architect Expert</li>
              <li>Azure DevOps Engineer Expert</li>
              <li>Azure Security Engineer Associate</li>
              <li>Azure Administrator Associate</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-3">Other Certifications</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Oracle Cloud Infrastructure Architect</li>
              <li>Certified Kubernetes Administrator</li>
              <li>Certified Information Systems Security Professional (CISSP)</li>
              <li>HashiCorp Terraform Associate</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          Let's discuss how CloudDigify can help your organization succeed in the cloud.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Get in Touch
          </Link>
          <Link
            to="/services"
            className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  </motion.div>
);

export default About; 