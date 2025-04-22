import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaUsers, FaCertificate, FaLaptopCode, FaCloud, FaRocket, FaCogs, FaShieldAlt } from 'react-icons/fa';
import PageTemplate from '../templates/PageTemplate';

const TrainingServices = () => {
  const pageInfo = {
    type: 'service',
    title: 'Training Services',
    description: 'Expert-led training programs for digital transformation and cloud technologies',
    heroImage: '/images/training-hero.jpg',
    breadcrumbs: [
      { title: 'Home', path: '/' },
      { title: 'Training Services', path: '/training-services' }
    ]
  };

  const trainers = [
    {
      name: 'Sarah Johnson',
      role: 'Cloud Architecture Expert',
      expertise: ['AWS', 'Azure', 'GCP'],
      image: '/images/trainer1.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'DevOps Specialist',
      expertise: ['Kubernetes', 'Docker', 'CI/CD'],
      image: '/images/trainer2.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Digital Transformation Lead',
      expertise: ['Agile', 'Scrum', 'Leadership'],
      image: '/images/trainer3.jpg'
    },
    {
      name: 'David Kim',
      role: 'Security Expert',
      expertise: ['Cybersecurity', 'Compliance', 'Risk Management'],
      image: '/images/trainer4.jpg'
    }
  ];

  const TrainerCard = ({ trainer }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h3 className="text-xl font-bold">{trainer.name}</h3>
          <p className="text-sm opacity-90">{trainer.role}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex flex-wrap gap-2">
          {trainer.expertise.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const features = [
    {
      icon: <FaUsers className="text-4xl text-blue-600" />,
      title: 'Expert Trainers',
      description: 'Learn from industry veterans with extensive real-world experience'
    },
    {
      icon: <FaCertificate className="text-4xl text-blue-600" />,
      title: 'Certification Prep',
      description: 'Comprehensive preparation for industry-recognized certifications'
    },
    {
      icon: <FaLaptopCode className="text-4xl text-blue-600" />,
      title: 'Hands-on Labs',
      description: 'Practice with real-world scenarios and industry tools'
    },
    {
      icon: <FaGraduationCap className="text-4xl text-blue-600" />,
      title: 'Flexible Learning',
      description: 'Choose between onsite, remote, or hybrid training options'
    }
  ];

  const trainingCategories = [
    {
      icon: <FaCloud className="text-3xl text-blue-600" />,
      title: 'Cloud & DevOps',
      courses: [
        'AWS Certification Training',
        'Azure Cloud Training',
        'DevOps Tools & Practices',
        'Kubernetes & Container Training'
      ]
    },
    {
      icon: <FaRocket className="text-3xl text-blue-600" />,
      title: 'Digital Transformation',
      courses: [
        'Agile & Scrum',
        'Digital Leadership',
        'Innovation Workshops'
      ]
    },
    {
      icon: <FaCogs className="text-3xl text-blue-600" />,
      title: 'Enterprise Solutions',
      courses: [
        'Enterprise Architecture',
        'Microservices',
        'API Design & Development'
      ]
    },
    {
      icon: <FaShieldAlt className="text-3xl text-blue-600" />,
      title: 'Security & Compliance',
      courses: [
        'Cybersecurity Training',
        'Compliance Workshops',
        'Security Best Practices'
      ]
    }
  ];

  return (
    <PageTemplate pageInfo={pageInfo}>
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Training?</h2>
            <p className="text-xl text-gray-600">Comprehensive learning experience designed for your success</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Training Categories</h2>
            <p className="text-xl text-gray-600">Explore our comprehensive training programs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h3 className="text-2xl font-semibold text-gray-900 ml-4">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.courses.map((course, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                      {course}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/training-services/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center mt-6 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Trainers Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Trainers</h2>
            <p className="text-xl text-gray-600">Learn from industry veterans with proven expertise</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer, index) => (
              <TrainerCard key={index} trainer={trainer} />
            ))}
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
                  Ready to Start Your Learning Journey?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Contact us to discuss your training needs and create a customized learning plan
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