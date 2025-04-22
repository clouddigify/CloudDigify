import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaUsersCog, FaChalkboardTeacher, FaCertificate, FaCloudversify } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Training = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
    hover: {
      y: -10,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: { duration: 0.3 }
    }
  };

  // Training courses
  const courses = [
    { 
      icon: <FaCloudversify />,
      title: 'AWS Cloud Fundamentals', 
      description: 'Master the basics of AWS cloud services, architecture, security, and pricing models.',
      duration: '3 days',
      level: 'Beginner',
      featured: true
    },
    { 
      icon: <FaLaptopCode />,
      title: 'Azure Administrator Certification', 
      description: 'Comprehensive training for managing and implementing Azure infrastructure solutions.',
      duration: '5 days',
      level: 'Intermediate',
      featured: false
    },
    { 
      icon: <FaUsersCog />,
      title: 'Google Cloud Professional', 
      description: 'Advanced course covering GCP architecture patterns, solutions design, and best practices.',
      duration: '4 days',
      level: 'Advanced',
      featured: false
    },
    { 
      icon: <FaChalkboardTeacher />,
      title: 'Cloud DevOps Engineer', 
      description: 'Learn CI/CD pipelines, infrastructure automation, and DevOps methodologies.',
      duration: '5 days',
      level: 'Intermediate',
      featured: true
    },
    { 
      icon: <FaCertificate />,
      title: 'Kubernetes Administration', 
      description: 'Comprehensive training on deploying, managing, and scaling containerized applications with Kubernetes.',
      duration: '4 days',
      level: 'Advanced',
      featured: false
    },
    { 
      icon: <FaGraduationCap />,
      title: 'Cloud Security Specialist', 
      description: 'Learn to implement security controls, compliance frameworks, and threat protection in cloud environments.',
      duration: '3 days',
      level: 'Intermediate',
      featured: true
    }
  ];

  // Training categories
  const categories = [
    { name: 'AWS Courses', count: 12 },
    { name: 'Azure Courses', count: 8 },
    { name: 'Google Cloud Courses', count: 6 },
    { name: 'DevOps & CI/CD', count: 7 },
    { name: 'Security', count: 5 },
    { name: 'Data & Analytics', count: 4 }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Background Elements */}
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl -translate-x-1/2 -translate-y-1/3"
          animate={{
            scale: [1, 1.2, 1],
            x: [-100, -50, -100],
            y: [-100, -50, -100],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-100 rounded-full opacity-40 blur-3xl translate-x-1/3 translate-y-1/4"
          animate={{
            scale: [1, 1.3, 1],
            x: [100, 50, 100],
            y: [100, 50, 100],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block py-1 px-3 mb-4 bg-blue-100 text-blue-700 font-medium rounded-full text-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Cloud Training Programs
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 text-transparent bg-clip-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Build Cloud Expertise
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Advance your career with our industry-leading cloud training programs. 
              From foundational concepts to advanced certifications, our expert-led courses 
              provide hands-on experience with the latest cloud technologies.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition"
              >
                View Schedule
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-blue-600 border border-blue-200 font-medium rounded-lg shadow-sm hover:bg-blue-50 transition"
              >
                Request Custom Training
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Our Training Programs</h2>
            <p className="text-lg text-gray-600">
              Expert-led courses designed to help you master cloud technologies and advance your career
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                className={`bg-white p-6 rounded-xl shadow-lg border border-gray-100 ${course.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.1 }}
              >
                {course.featured && (
                  <div className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    Featured Course
                  </div>
                )}
                <div className="w-14 h-14 bg-blue-100 rounded-lg text-blue-600 flex items-center justify-center mb-6 text-2xl">
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="flex flex-wrap text-sm text-gray-500 mb-5 gap-4">
                  <div className="flex items-center">
                    <span className="mr-2">⏱️</span> 
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">🎯</span> 
                    {course.level}
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-center font-medium"
                >
                  Enroll Now
                </motion.button>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Courses
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      {/* Training Benefits */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Why Choose Our Training</h2>
            <p className="text-lg text-gray-600">
              Benefits that set our cloud training programs apart
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Instructors",
                description: "Learn from certified cloud professionals with extensive real-world experience",
                icon: <FaChalkboardTeacher className="text-blue-600 text-4xl mb-4" />
              },
              {
                title: "Hands-on Labs",
                description: "Practice with real cloud environments and solve practical challenges",
                icon: <FaLaptopCode className="text-blue-600 text-4xl mb-4" />
              },
              {
                title: "Certification Preparation",
                description: "Comprehensive materials designed to help you pass certification exams",
                icon: <FaCertificate className="text-blue-600 text-4xl mb-4" />
              },
              {
                title: "Small Class Sizes",
                description: "Personalized attention and interactive learning experience",
                icon: <FaUsersCog className="text-blue-600 text-4xl mb-4" />
              },
              {
                title: "Flexible Learning Options",
                description: "Choose from in-person, virtual, or self-paced training formats",
                icon: <FaGraduationCap className="text-blue-600 text-4xl mb-4" />
              },
              {
                title: "Post-Training Support",
                description: "Access to resources and community forums after course completion",
                icon: <FaCloudversify className="text-blue-600 text-4xl mb-4" />
              }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.1 }}
              >
                {benefit.icon}
                <h3 className="text-xl font-bold mb-3 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories and Schedule */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Categories */}
            <motion.div 
              className="lg:col-span-1"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Course Categories</h3>
                <ul className="space-y-4">
                  {categories.map((category, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-gray-700">{category.name}</span>
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                        {category.count} courses
                      </span>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-6">
                  <button className="text-blue-600 font-medium hover:text-blue-800 transition flex items-center">
                    View all categories
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
            
            {/* Upcoming Schedule */}
            <motion.div 
              className="lg:col-span-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Upcoming Training Sessions</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "AWS Cloud Fundamentals",
                      date: "June 15-17, 2023",
                      location: "Virtual",
                      seats: "5 seats left"
                    },
                    {
                      title: "Azure Administrator Certification",
                      date: "June 22-26, 2023",
                      location: "San Francisco",
                      seats: "3 seats left"
                    },
                    {
                      title: "Cloud DevOps Engineer",
                      date: "July 10-14, 2023",
                      location: "Virtual",
                      seats: "8 seats left"
                    },
                    {
                      title: "Kubernetes Administration",
                      date: "July 24-27, 2023",
                      location: "New York",
                      seats: "6 seats left"
                    }
                  ].map((session, index) => (
                    <motion.div 
                      key={index}
                      className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors border border-gray-100"
                      variants={itemVariants}
                    >
                      <div className="mb-4 md:mb-0">
                        <h4 className="font-bold text-gray-800">{session.title}</h4>
                        <div className="text-sm text-gray-600 mt-1">
                          <span className="inline-block mr-4">{session.date}</span>
                          <span>{session.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm text-blue-600 font-medium mr-4">{session.seats}</span>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
                        >
                          Register
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6">
                  <button className="text-blue-600 font-medium hover:text-blue-800 transition flex items-center">
                    View full schedule
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Your Cloud Skills?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of professionals who have accelerated their careers with our training programs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 font-medium rounded-lg shadow-lg hover:bg-blue-50 transition"
              >
                Explore Courses
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-white border border-white font-medium rounded-lg hover:bg-blue-600 transition"
              >
                Contact for Enterprise Training
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Training; 