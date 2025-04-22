import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const leaders = [
  {
    name: 'Chirag Malhotra',
    title: 'Co-Founder & CEO',
    email: 'chirag@clouddigify.com',
    bio: 'Chirag brings over 15 years of experience in cloud technologies and digital transformation. His vision drives our company strategy and innovation roadmap.',
    image: '/images/leaders/chirag-malhotra.jpg', // Replace with actual image path
    social: {
      linkedin: 'https://linkedin.com/in/chiragmalhotra',
      twitter: 'https://twitter.com/chiragmalhotra'
    }
  },
  {
    name: 'Manish Sharma',
    title: 'Co-Founder & CTO',
    email: 'manish@clouddigify.com',
    bio: 'With deep expertise in cloud architecture and DevOps, Manish leads our technical strategy and ensures delivery of cutting-edge solutions to our clients.',
    image: '/images/leaders/manish-sharma.jpg', // Replace with actual image path
    social: {
      linkedin: 'https://linkedin.com/in/manishsharma',
      twitter: 'https://twitter.com/manishsharma'
    }
  },
  {
    name: 'Deepak Verma',
    title: 'Co-Founder & COO',
    email: 'deepak@clouddigify.com',
    bio: 'Deepak oversees our operations and client delivery, ensuring excellence in service quality and maximum business value for our clients.',
    image: '/images/leaders/deepak-verma.jpg', // Replace with actual image path
    social: {
      linkedin: 'https://linkedin.com/in/deepakverma',
      twitter: 'https://twitter.com/deepakverma'
    }
  }
];

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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const Leadership = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Leadership Team</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Meet the visionaries behind CloudDigify who are driving innovation in cloud services and digital transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-64 bg-gray-200">
                {leader.image ? (
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-blue-100">
                    <span className="text-5xl font-bold text-blue-300">
                      {leader.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">{leader.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{leader.title}</p>
                
                <p className="text-gray-600 mb-6">{leader.bio}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    {leader.social.linkedin && (
                      <a 
                        href={leader.social.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-600 transition-colors"
                      >
                        <FaLinkedin className="h-5 w-5" />
                      </a>
                    )}
                    
                    {leader.social.twitter && (
                      <a 
                        href={leader.social.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-400 transition-colors"
                      >
                        <FaTwitter className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                  
                  <a 
                    href={`mailto:${leader.email}`}
                    className="text-blue-600 hover:text-blue-800 transition-colors flex items-center"
                  >
                    <FaEnvelope className="h-4 w-4 mr-1" />
                    <span className="text-sm">Contact</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Leadership; 