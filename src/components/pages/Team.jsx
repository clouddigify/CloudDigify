import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import LazyImage from '../common/LazyImage';
import SEO from '../common/SEO';

const teamMembers = {
  leadership: [
    {
      name: "John Smith",
      role: "Chief Executive Officer",
      image: "https://via.placeholder.com/200",
      bio: "20+ years of experience in cloud technology and digital transformation.",
      social: {
        linkedin: "https://linkedin.com/in/johnsmith",
        twitter: "https://twitter.com/johnsmith",
        email: "john@clouddigify.com"
      }
    },
    {
      name: "Sarah Johnson",
      role: "Chief Technology Officer",
      image: "https://via.placeholder.com/200",
      bio: "Former Google engineer with expertise in cloud architecture and AI.",
      social: {
        linkedin: "https://linkedin.com/in/sarahjohnson",
        twitter: "https://twitter.com/sarahjohnson",
        email: "sarah@clouddigify.com"
      }
    },
    {
      name: "Michael Chen",
      role: "Chief Operations Officer",
      image: "https://via.placeholder.com/200",
      bio: "15+ years experience in scaling global technology operations.",
      social: {
        linkedin: "https://linkedin.com/in/michaelchen",
        twitter: "https://twitter.com/michaelchen",
        email: "michael@clouddigify.com"
      }
    }
  ],
  departments: [
    {
      name: "Engineering",
      members: [
        {
          name: "David Wilson",
          role: "Lead Cloud Architect",
          image: "https://via.placeholder.com/200",
          social: {
            linkedin: "https://linkedin.com/in/davidwilson"
          }
        },
        {
          name: "Emily Brown",
          role: "Senior DevOps Engineer",
          image: "https://via.placeholder.com/200",
          social: {
            linkedin: "https://linkedin.com/in/emilybrown"
          }
        }
      ]
    },
    {
      name: "AI & Analytics",
      members: [
        {
          name: "Dr. Lisa Wang",
          role: "Head of AI Research",
          image: "https://via.placeholder.com/200",
          social: {
            linkedin: "https://linkedin.com/in/lisawang"
          }
        },
        {
          name: "James Anderson",
          role: "Lead Data Scientist",
          image: "https://via.placeholder.com/200",
          social: {
            linkedin: "https://linkedin.com/in/jamesanderson"
          }
        }
      ]
    }
  ]
};

const Team = () => {
  return (
    <>
      <SEO
        title="Our Team | CloudDigify"
        description="Meet the CloudDigify team of cloud, DevOps, and digital transformation experts."
        canonicalUrl="https://clouddigify.com/team"
        keywords={['team', 'cloud experts', 'devops', 'CloudDigify']}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Meet Our Team
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                We're a team of passionate individuals dedicated to transforming businesses
                through innovative cloud solutions.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600">Meet the visionaries leading our company</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.leadership.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <LazyImage
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 mb-2">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600"
                      >
                        <FaLinkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400"
                      >
                        <FaTwitter className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <FaEnvelope className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Department Teams */}
        {teamMembers.departments.map((department, deptIndex) => (
          <div key={deptIndex} className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{department.name} Team</h2>
                <p className="text-lg text-gray-600">Meet our talented {department.name.toLowerCase()} professionals</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {department.members.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden"
                  >
                    <div className="aspect-w-1 aspect-h-1">
                      <LazyImage
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        width={400}
                        height={400}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                      <p className="text-blue-600 text-sm mb-2">{member.role}</p>
                      {member.social && (
                        <div className="flex space-x-4 mt-2">
                          {member.social.linkedin && (
                            <a
                              href={member.social.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-blue-600"
                            >
                              <FaLinkedin className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Join Us CTA */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Team</h2>
              <p className="text-lg text-gray-600 mb-8">
                We're always looking for talented individuals to join our mission.
              </p>
              <a
                href="/career"
                className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Open Positions
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team; 