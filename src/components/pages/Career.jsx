import React, { useState, useRef } from 'react';
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
  FaCoffee,
  FaLinkedin,
  FaArrowRight
} from 'react-icons/fa';
import SEO from '../common/SEO';

const Career = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const jobSectionRef = useRef(null);

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
      title: "AWS Engineer",
      department: "engineering",
      location: "Remote",
      type: "Full-time",
      description: "Design, implement, and manage AWS cloud infrastructure and services.",
      requirements: [
        "3+ years of AWS experience",
        "AWS certification preferred",
        "Strong scripting and automation skills",
        "Experience with cloud security and networking"
      ]
    },
    {
      id: 2,
      title: "Azure Engineer",
      department: "engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build and maintain solutions on Microsoft Azure for enterprise clients.",
      requirements: [
        "3+ years of Azure experience",
        "Azure certification preferred",
        "Experience with Azure DevOps and automation",
        "Strong troubleshooting and communication skills"
      ]
    },
    {
      id: 3,
      title: "Google Cloud Engineer",
      department: "engineering",
      location: "Remote",
      type: "Full-time",
      description: "Develop and optimize cloud solutions on Google Cloud Platform.",
      requirements: [
        "2+ years of GCP experience",
        "GCP certification preferred",
        "Experience with Kubernetes and containerization",
        "Solid understanding of cloud best practices"
      ]
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "engineering",
      location: "Remote",
      type: "Full-time",
      description: "Automate, monitor, and optimize CI/CD pipelines and cloud infrastructure.",
      requirements: [
        "3+ years in DevOps roles",
        "Experience with CI/CD tools (Jenkins, GitHub Actions, etc.)",
        "Strong scripting (Python, Bash, etc.)",
        "Cloud and containerization experience"
      ]
    },
    {
      id: 5,
      title: "Terraform Engineer",
      department: "engineering",
      location: "Remote",
      type: "Full-time",
      description: "Design and implement infrastructure as code using Terraform.",
      requirements: [
        "2+ years of Terraform experience",
        "Experience with AWS, Azure, or GCP",
        "Strong understanding of IaC principles",
        "Version control (Git) proficiency"
      ]
    },
    {
      id: 6,
      title: "Infrastructure as Code (IaC) Engineer",
      department: "engineering",
      location: "Remote",
      type: "Full-time",
      description: "Develop and maintain infrastructure as code solutions for cloud environments.",
      requirements: [
        "Experience with Terraform, CloudFormation, or ARM templates",
        "Cloud platform experience (AWS, Azure, GCP)",
        "Automation and scripting skills",
        "Strong documentation and collaboration skills"
      ]
    },
    {
      id: 7,
      title: "Website Developer",
      department: "design",
      location: "Remote",
      type: "Full-time",
      description: "Design, develop, and maintain modern, responsive websites.",
      requirements: [
        "3+ years of web development experience",
        "Proficiency in React, HTML, CSS, JavaScript",
        "Experience with web performance and SEO",
        "Strong UI/UX sensibility"
      ]
    },
    {
      id: 8,
      title: "Product Manager",
      department: "product",
      location: "Remote",
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
      id: 9,
      title: "Cloud Solutions Sales Specialist",
      department: "sales",
      location: "Remote",
      type: "Full-time",
      description: "Drive sales of cloud solutions to enterprise clients.",
      requirements: [
        "3+ years of technology sales experience",
        "Experience selling cloud or SaaS solutions",
        "Strong negotiation and presentation skills",
        "Proven track record of meeting sales targets"
      ]
    },
    {
      id: 10,
      title: "Digital Marketing Specialist",
      department: "marketing",
      location: "Remote",
      type: "Full-time",
      description: "Plan and execute digital marketing campaigns for our cloud services.",
      requirements: [
        "2+ years of digital marketing experience",
        "Experience with SEO, SEM, and social media marketing",
        "Strong analytical and creative skills",
        "Excellent written and verbal communication"
      ]
    },
    {
      id: 11,
      title: "Inside Sales Representative (ISR)",
      department: "sales",
      location: "Remote",
      type: "Full-time",
      description: "Engage with prospective clients, qualify leads, and support the sales pipeline for cloud and digital solutions.",
      requirements: [
        "1+ years of inside sales or tele-sales experience",
        "Excellent communication and relationship-building skills",
        "Experience with CRM tools (Salesforce, HubSpot, etc.)",
        "Ability to understand and explain technology solutions"
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
      icon: <FaPlane className="h-8 w-8 text-blue-400" />,
      title: "Remote Work Flexibility",
      description: "Work from anywhere with a fully remote team"
    },
    {
      icon: <FaGem className="h-8 w-8 text-purple-400" />,
      title: "Team Recognition & Rewards",
      description: "Regular recognition and rewards for outstanding contributions"
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

      {/* We're Hiring Section - Improved 2-column layout with animation */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-6 py-20 md:py-28"
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <img
            src="/images/join-our-team.jpg"
            alt="Join Our Team"
            className="w-full md:w-[45%] max-w-lg rounded-2xl shadow-2xl object-contain mb-8 md:mb-0 md:mr-12"
          />
          <div className="w-full md:w-[55%] text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">We're Hiring!</h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
              Want to be part of an innovative, passionate team? Explore our open positions and join CloudDigify!
            </p>
            <button
              onClick={() => {
                if (jobSectionRef.current) {
                  jobSectionRef.current.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg inline-flex items-center text-lg shadow-lg transition duration-200"
            >
              View Careers
              <FaArrowRight className="ml-3 w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.section>


      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-extrabold mb-8 drop-shadow-lg">
                Join Our Team
              </h1>
              <p className="text-2xl md:text-3xl text-purple-100 max-w-3xl mx-auto font-semibold">
                Build the future of digital transformation with us
              </p>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div ref={jobSectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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