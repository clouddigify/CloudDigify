import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaCloud,
  FaRobot,
  FaShieldAlt,
  FaCode,
  FaCogs,
  FaChartLine,
  FaCubes,
  FaServer,
  FaTools,
  FaCheckCircle
} from 'react-icons/fa';
import SEO from '../../common/SEO';

const CampusTraining = () => {
  const trainingTracks = [
    {
      category: "Cloud & Infrastructure",
      courses: [
        {
          title: "Multi-Cloud Architecture",
          description: "Master AWS, Azure, Google Cloud, and Oracle Cloud platforms",
          duration: "12 weeks",
          level: "Advanced",
          icon: <FaCloud />
        },
        {
          title: "Infrastructure Management",
          description: "Learn modern infrastructure and platform operations",
          duration: "10 weeks",
          level: "Intermediate",
          icon: <FaServer />
        }
      ]
    },
    {
      category: "AI & Digital Engineering",
      courses: [
        {
          title: "AI & Machine Learning",
          description: "Build and deploy ML models and AI applications",
          duration: "16 weeks",
          level: "Advanced",
          icon: <FaRobot />
        },
        {
          title: "Digital Engineering Practices",
          description: "Modern software engineering and digital solutions",
          duration: "12 weeks",
          level: "Intermediate",
          icon: <FaCode />
        }
      ]
    },
    {
      category: "Security & DevOps",
      courses: [
        {
          title: "Cybersecurity Operations",
          description: "Enterprise security and threat management",
          duration: "14 weeks",
          level: "Advanced",
          icon: <FaShieldAlt />
        },
        {
          title: "DevOps Engineering",
          description: "CI/CD, automation, and DevOps practices",
          duration: "12 weeks",
          level: "Advanced",
          icon: <FaCogs />
        }
      ]
    },
    {
      category: "Strategy & Consulting",
      courses: [
        {
          title: "Digital Transformation",
          description: "Lead organizational digital transformation initiatives",
          duration: "8 weeks",
          level: "Advanced",
          icon: <FaChartLine />
        },
        {
          title: "Blockchain Technology",
          description: "Enterprise blockchain solutions and implementation",
          duration: "10 weeks",
          level: "Intermediate",
          icon: <FaCubes />
        }
      ]
    },
    {
      category: "Quality Engineering",
      courses: [
        {
          title: "Quality Automation",
          description: "Advanced testing and quality automation frameworks",
          duration: "10 weeks",
          level: "Intermediate",
          icon: <FaTools />
        },
        {
          title: "Quality Management",
          description: "Quality processes and best practices",
          duration: "8 weeks",
          level: "Intermediate",
          icon: <FaCheckCircle />
        }
      ]
    }
  ];

  const features = [
    {
      title: "Industry-Aligned Curriculum",
      description: "Programs designed with input from industry leaders"
    },
    {
      title: "Hands-on Labs",
      description: "Practice with real-world tools and technologies"
    },
    {
      title: "Expert Instructors",
      description: "Learn from experienced professionals"
    },
    {
      title: "Career Support",
      description: "Job placement assistance and industry connections"
    }
  ];

  return (
    <>
      <SEO
        title="Campus Training Programs | CloudDigify"
        description="Comprehensive campus training programs by CloudDigify: cloud, AI, security, DevOps, and more. Industry-aligned and hands-on."
        canonicalUrl="https://clouddigify.com/training/campus"
        keywords={['campus training', 'student training', 'CloudDigify', 'technology education']}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
      >
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 py-20">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Campus Training Programs
                  </h1>
                  <p className="text-xl mb-8">
                    Comprehensive technology training aligned with industry demands
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/contact"
                      className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
                    >
                      Enroll Now
                    </Link>
                    <button
                      onClick={() => document.getElementById('tracks').scrollIntoView({ behavior: 'smooth' })}
                      className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
                    >
                      View Programs
                    </button>
                  </div>
                </motion.div>
              </div>
              <div className="md:w-1/2">
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
                >
                  <h2 className="text-2xl font-semibold mb-4">Program Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div key={index} className="bg-white/10 rounded-lg p-4">
                        <h3 className="font-semibold mb-2">{feature.title}</h3>
                        <p className="text-sm">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Training Tracks */}
        <div id="tracks" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Training Tracks</h2>
          <div className="space-y-12">
            {trainingTracks.map((track, trackIndex) => (
              <motion.div
                key={trackIndex}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: trackIndex * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-2xl font-bold mb-6 text-blue-600">{track.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {track.courses.map((course, courseIndex) => (
                    <div
                      key={courseIndex}
                      className="border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition duration-300"
                    >
                      <div className="flex items-center mb-4 text-blue-600">
                        {course.icon}
                        <span className="ml-2 text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {course.level}
                        </span>
                      </div>
                      <h4 className="text-xl font-semibold mb-2">{course.title}</h4>
                      <p className="text-gray-600 mb-4">{course.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Duration: {course.duration}</span>
                        <Link
                          to="/contact"
                          className="text-blue-600 hover:text-blue-700 font-medium"
                        >
                          Learn More →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Start Your Tech Career Journey</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our comprehensive training programs and gain the skills needed for today's technology industry
            </p>
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CampusTraining; 