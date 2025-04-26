import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHeart,
  FaHandshake,
  FaLightbulb,
  FaUsers,
  FaRocket,
  FaGlobe,
  FaStar,
  FaLeaf,
  FaChartLine,
  FaCoffee
} from 'react-icons/fa';

const Culture = () => {
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

  const values = [
    {
      icon: <FaLightbulb className="h-12 w-12 text-yellow-500" />,
      title: "Innovation",
      description: "We embrace new technologies and ideas, constantly pushing boundaries to deliver cutting-edge solutions that transform businesses.",
      examples: [
        "Regular innovation workshops",
        "Research and development initiatives",
        "Continuous learning programs"
      ]
    },
    {
      icon: <FaHandshake className="h-12 w-12 text-blue-500" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and foster an environment where diverse perspectives come together to create exceptional results.",
      examples: [
        "Cross-functional team projects",
        "Open communication channels",
        "Collaborative workspace design"
      ]
    },
    {
      icon: <FaHeart className="h-12 w-12 text-red-500" />,
      title: "Passion",
      description: "Our team is driven by a genuine passion for technology and a commitment to making a positive impact in the digital world.",
      examples: [
        "Employee-led initiatives",
        "Technology meetups",
        "Community involvement"
      ]
    }
  ];

  const practices = [
    {
      icon: <FaUsers className="h-8 w-8 text-purple-500" />,
      title: "Inclusive Environment",
      description: "We celebrate diversity and create an inclusive workplace where everyone feels valued and heard."
    },
    {
      icon: <FaRocket className="h-8 w-8 text-indigo-500" />,
      title: "Growth Mindset",
      description: "We encourage continuous learning and professional development at all levels."
    },
    {
      icon: <FaGlobe className="h-8 w-8 text-green-500" />,
      title: "Global Perspective",
      description: "We embrace different cultures and perspectives, operating with a global mindset."
    }
  ];

  const benefits = [
    {
      icon: <FaLeaf className="h-8 w-8 text-green-500" />,
      title: "Work-Life Balance",
      description: "Flexible working hours and remote work options"
    },
    {
      icon: <FaChartLine className="h-8 w-8 text-blue-500" />,
      title: "Career Growth",
      description: "Clear career paths and mentorship programs"
    },
    {
      icon: <FaCoffee className="h-8 w-8 text-yellow-700" />,
      title: "Great Perks",
      description: "Modern office, team events, and wellness programs"
    }
  ];

  return (
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
              Our Culture & Values
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Building a workplace where innovation thrives and people grow
            </p>
          </motion.div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
            <p className="mt-4 text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="flex justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">{value.title}</h3>
                <p className="text-gray-600 text-center mb-6">{value.description}</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">How we live this value:</h4>
                  <ul className="space-y-2">
                    {value.examples.map((example, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <FaStar className="h-4 w-4 text-yellow-500 mr-2" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Work Culture Section */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Our Work Culture</h2>
              <p className="mt-4 text-xl text-gray-600">
                Creating an environment where everyone can thrive
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {practices.map((practice) => (
                <motion.div
                  key={practice.title}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-center mb-4">
                    {practice.icon}
                    <h3 className="text-xl font-bold text-gray-900 ml-4">{practice.title}</h3>
                  </div>
                  <p className="text-gray-600">{practice.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Life at CloudDigify</h2>
              <p className="mt-4 text-xl text-gray-600">
                Benefits and perks that make working here special
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          </div>

          {/* Join Us CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-24 text-center bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Be part of a team that's shaping the future of digital transformation
            </p>
            <a
              href="/career"
              className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-purple-700 transition-colors"
            >
              View Open Positions
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Culture; 