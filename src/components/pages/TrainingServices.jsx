import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaAws, FaMicrosoft, FaGoogle, FaRobot, FaTools, FaBuilding, FaGraduationCap } from 'react-icons/fa';
import { SiAlibabacloud, SiOracle } from 'react-icons/si';
import PageTemplate from '../templates/PageTemplate';

const TrainingServices = () => {
  const pageInfo = {
    type: 'content',
    title: 'Training Services',
    description: 'Empower your team with cutting-edge technology training',
    heroImage: '/images/training-hero.jpg',
    breadcrumbs: [
      { title: 'Home', path: '/' },
      { title: 'Training Services', path: '/training-services' }
    ],
    overview: {
      title: 'Transform Your Team',
      description: 'Our comprehensive training programs are designed to equip your team with the latest skills and knowledge in cloud computing, DevOps, security, and digital transformation.',
      points: [
        'Expert-led training sessions',
        'Hands-on practical exercises',
        'Industry-recognized certifications',
        'Customized learning paths'
      ]
    }
  };

  const trainingCategories = [
    {
      title: 'Cloud Platform Training',
      description: 'Master the leading cloud platforms with our comprehensive certification programs',
      courses: [
        {
          name: 'AWS Training',
          icon: <FaAws className="text-4xl" />,
          path: '/training/aws',
          description: 'From AWS Solutions Architect to DevOps Engineer certifications',
          popular: true,
        },
        {
          name: 'Azure Training',
          icon: <FaMicrosoft className="text-4xl" />,
          path: '/training/azure',
          description: 'Azure Administrator, Developer, and Solutions Architect paths',
          popular: true,
        },
        {
          name: 'Google Cloud',
          icon: <FaGoogle className="text-4xl" />,
          path: '/training/googlecloud',
          description: 'GCP Professional certifications and specializations',
        },
        {
          name: 'Alibaba Cloud',
          icon: <SiAlibabacloud className="text-4xl" />,
          path: '/training/alibabacloud',
          description: 'ACA, ACP, and ACE certification training',
        },
        {
          name: 'Oracle Cloud',
          icon: <SiOracle className="text-4xl" />,
          path: '/training/oracle',
          description: 'OCI certifications and specialized tracks',
        },
      ],
    },
    {
      title: 'Technology & Innovation',
      description: 'Stay ahead with cutting-edge technology training',
      courses: [
        {
          name: 'AI & Machine Learning',
          icon: <FaRobot className="text-4xl" />,
          path: '/training/ai-ml',
          description: 'Deep Learning, NLP, and AI Engineering courses',
          popular: true,
        },
        {
          name: 'Automation Tools',
          icon: <FaTools className="text-4xl" />,
          path: '/training/automation',
          description: 'RPA, CI/CD, and DevOps automation training',
        },
      ],
    },
    {
      title: 'Enterprise Programs',
      description: 'Customized training solutions for organizations and institutions',
      courses: [
        {
          name: 'Corporate Training',
          icon: <FaBuilding className="text-4xl" />,
          path: '/training/corporate',
          description: 'Tailored programs for enterprise workforce development',
        },
        {
          name: 'Campus Training',
          icon: <FaGraduationCap className="text-4xl" />,
          path: '/training/campus',
          description: 'Academic partnerships and student development programs',
        },
      ],
    },
  ];

  return (
    <PageTemplate pageInfo={pageInfo}>
      {/* Training Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Training Programs</h2>
            <p className="text-xl text-gray-600">Comprehensive courses for modern technology skills</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                
                <div className="relative p-8">
                  <div className="flex flex-col items-center text-center mb-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mt-4 mb-2">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {category.courses.map((course, courseIndex) => (
                      <li key={courseIndex} className="flex items-center text-gray-600">
                        <div className={`text-${course.popular ? 'blue' : 'gray'}-600 mr-3`}>
                          {course.icon}
                        </div>
                        <Link
                          to={course.path}
                          className="text-blue-600 hover:text-blue-700 transition duration-300"
                        >
                          {course.name}
                        </Link>
                        {course.popular && (
                          <span className="ml-auto bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            Popular
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Training</h2>
            <p className="text-xl text-gray-600">Experience the difference with our expert-led training programs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-4">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry professionals with real-world experience</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-4">Hands-on Labs</h3>
              <p className="text-gray-600">Practice with real-world scenarios in our state-of-the-art labs</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-4">Flexible Learning</h3>
              <p className="text-gray-600">Choose from online, in-person, or hybrid training options</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl overflow-hidden"
          >
            <div className="relative px-8 py-16 md:px-16 text-center">
              <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Upskill Your Team?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Contact us to discuss your training needs and create a customized learning path
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-full bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-all duration-200 group"
                >
                  Get Started
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default TrainingServices; 