import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaLinkedin, 
  FaTwitter, 
  FaUsers, 
  FaLightbulb,
  FaHandshake,
  FaRocket
} from 'react-icons/fa';
import LazyImage from '../common/LazyImage';
import SEO from '../common/SEO';

const OurTeam = () => {
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

  const leadershipTeam = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      bio: "With over 15 years of experience in digital transformation, Sarah leads CloudDigify's vision and strategy.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      bio: "Michael brings 20 years of expertise in cloud architecture and digital innovation.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Emily Rodriguez",
      role: "Chief Operations Officer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      bio: "Emily excels in optimizing business operations and driving organizational growth.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  const teamMembers = [
    {
      name: "David Park",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Lisa Thompson",
      role: "UX Designer",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "James Wilson",
      role: "Cloud Architect",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Maria Garcia",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Robert Taylor",
      role: "Security Specialist",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Anna Kim",
      role: "Data Scientist",
      image: "https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    }
  ];

  const values = [
    {
      icon: <FaLightbulb className="h-8 w-8 text-yellow-500" />,
      title: "Innovation",
      description: "We constantly push boundaries and embrace new technologies."
    },
    {
      icon: <FaHandshake className="h-8 w-8 text-blue-500" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and shared success."
    },
    {
      icon: <FaRocket className="h-8 w-8 text-purple-500" />,
      title: "Excellence",
      description: "We strive for the highest quality in everything we do."
    }
  ];

  return (
    <>
      <SEO
        title="Our Team | CloudDigify"
        description="Meet the CloudDigify leadership and delivery team."
        canonicalUrl="https://clouddigify.com/our-team"
        keywords={['our team', 'leadership', 'cloud experts', 'CloudDigify']}
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
                Passionate professionals dedicated to transforming businesses through digital innovation
              </p>
            </motion.div>
          </div>
        </div>

        {/* Leadership Team Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Leadership Team</h2>
              <p className="mt-4 text-xl text-gray-600">
                Guiding our vision and innovation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadershipTeam.map((leader) => (
                <motion.div
                  key={leader.name}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <LazyImage
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-64 object-cover"
                      width={400}
                      height={256}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
                    <p className="text-blue-600 font-medium">{leader.role}</p>
                    <p className="mt-4 text-gray-600">{leader.bio}</p>
                    <div className="mt-4 flex space-x-4">
                      <a href={leader.social.linkedin} className="text-gray-400 hover:text-blue-500">
                        <FaLinkedin className="h-6 w-6" />
                      </a>
                      <a href={leader.social.twitter} className="text-gray-400 hover:text-blue-500">
                        <FaTwitter className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Members Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
              <p className="mt-4 text-xl text-gray-600">
                The talented individuals behind our success
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <motion.div
                  key={member.name}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <LazyImage
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                      width={400}
                      height={256}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-blue-600 font-medium">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Company Values Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
              <p className="mt-4 text-xl text-gray-600">
                The principles that guide our work
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-lg p-6 text-center"
                >
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default OurTeam; 