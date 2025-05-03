import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaBriefcase,
  FaGraduationCap,
  FaUsers,
  FaLaptopCode,
  FaHandshake,
  FaChartLine,
  FaMedal,
  FaLeaf,
  FaPlane,
  FaHeart,
  FaGem,
  FaCoffee
} from 'react-icons/fa';
import SEO from '../common/SEO';

const Career = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'design', name: 'Design' },
    { id: 'product', name: 'Product' },
    { id: 'sales', name: 'Sales' },
    { id: 'marketing', name: 'Marketing' }
  ];

  const jobs = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "engineering",
      location: "Remote",
      type: "Full-time",
      description: "We're looking for an experienced Full Stack Developer to join our engineering team.",
      requirements: [
        "5+ years of experience with React and Node.js",
        "Experience with cloud platforms (AWS/Azure/GCP)",
        "Strong understanding of web security and performance",
        "Excellent problem-solving skills"
      ]
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "design",
      location: "Hybrid",
      type: "Full-time",
      description: "Join our design team to create beautiful and intuitive user experiences.",
      requirements: [
        "3+ years of UX/UI design experience",
        "Proficiency in Figma and Adobe Creative Suite",
        "Portfolio showcasing web and mobile designs",
        "Experience with design systems"
      ]
    },
    {
      id: 3,
      title: "Product Manager",
      department: "product",
      location: "On-site",
      type: "Full-time",
      description: "Lead product strategy and development for our digital solutions.",
      requirements: [
        "4+ years of product management experience",
        "Strong analytical and strategic thinking skills",
        "Experience with agile methodologies",
        "Excellent communication skills"
      ]
    },
    {
      id: 4,
      title: "Cloud Solutions Architect",
      department: "engineering",
      location: "Remote",
      type: "Full-time",
      description: "Design and implement scalable cloud infrastructure solutions.",
      requirements: [
        "6+ years of cloud architecture experience",
        "AWS/Azure certification required",
        "Experience with microservices architecture",
        "Strong security background"
      ]
    }
  ];

  const benefits = [
    {
      icon: <FaMedal className="h-8 w-8 text-yellow-500" />,
      title: "Competitive Salary",
      description: "Industry-leading compensation packages"
    },
    {
      icon: <FaLeaf className="h-8 w-8 text-green-500" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: <FaPlane className="h-8 w-8 text-blue-500" />,
      title: "Flexible PTO",
      description: "Generous paid time off and flexible work arrangements"
    },
    {
      icon: <FaHeart className="h-8 w-8 text-red-500" />,
      title: "Family Care",
      description: "Parental leave and family support benefits"
    },
    {
      icon: <FaGem className="h-8 w-8 text-purple-500" />,
      title: "Growth & Development",
      description: "Learning stipend and career development opportunities"
    },
    {
      icon: <FaCoffee className="h-8 w-8 text-brown-500" />,
      title: "Office Perks",
      description: "Modern offices with great amenities"
    }
  ];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobs 
    : jobs.filter(job => job.department === selectedDepartment);

  return (
    <>
      <SEO
        title="Careers at CloudDigify"
        description="Explore career opportunities at CloudDigify. Join our team of cloud, DevOps, and digital transformation experts."
        canonicalUrl="https://clouddigify.com/career"
        keywords={['careers', 'jobs', 'cloud jobs', 'CloudDigify']}
      />

      {/* Join Our Team Banner */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 mb-8 border-b border-blue-200">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center px-4 text-center md:text-left">
          <img
            src="/images/join-our-team.webp"
            alt="Join Our Team"
            className="rounded-xl shadow-lg mb-6 md:mb-0 md:mr-10 w-full max-w-xs h-auto"
            width={350}
            height={250}
            loading="lazy"
            decoding="async"
          />
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">We're Hiring!</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-xl">
              Want to be part of an innovative, passionate team? Explore our open positions and join CloudDigify!
            </p>
            <a
              href="#open-positions"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              View Careers
            </a>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Join Our Team
              </h1>
              <p className="text-xl text-purple-100 max-w-2xl mx-auto">
                Build the future of digital transformation with us
              </p>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Department Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-4 justify-center">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDepartment(dept.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                    ${selectedDepartment === dept.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-purple-50'
                    }`}
                >
                  {dept.name}
                </button>
              ))}
            </div>
          </div>

          {/* Job Listings */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">{job.title}</h2>
                    <div className="flex space-x-4">
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                        {job.location}
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900">Requirements:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="text-gray-600">{req}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Why Join Us?</h2>
              <p className="mt-4 text-xl text-gray-600">
                We offer great benefits and a fantastic work environment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit.title}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-center mb-4">
                    {benefit.icon}
                    <h3 className="text-xl font-bold text-gray-900 ml-4">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="mt-24 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Don't see the right role?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Send us your resume and we'll keep you in mind for future opportunities
            </p>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-purple-700 transition-colors">
              Submit Your Resume
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Career; 