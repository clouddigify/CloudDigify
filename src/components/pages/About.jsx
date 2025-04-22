import React from 'react';
import { motion } from 'framer-motion';
import { FaCloudUploadAlt, FaUsers, FaAward, FaRocket, FaChartLine, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
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

  const milestoneData = [
    { year: '2015', title: 'Company Founded', description: 'CloudDigify was established with a vision to revolutionize cloud services.' },
    { year: '2017', title: 'Major Partnership', description: 'Strategic partnership with leading cloud providers expanded our capabilities.' },
    { year: '2019', title: 'Global Expansion', description: 'Opened new offices in Europe and Asia to serve our international clients.' },
    { year: '2021', title: 'Industry Recognition', description: 'Awarded "Cloud Service Provider of the Year" by Tech Innovators.' },
    { year: '2023', title: 'Service Expansion', description: 'Launched new AI and ML-powered cloud solutions for enterprise clients.' }
  ];

  const valuesList = [
    { 
      icon: <FaUsers />, 
      title: "Client-Centric Approach", 
      description: "Our clients' success drives everything we do. We listen carefully to understand your unique challenges and goals." 
    },
    { 
      icon: <FaAward />, 
      title: "Excellence in Delivery", 
      description: "We are committed to delivering the highest quality solutions that exceed expectations and drive measurable results." 
    },
    { 
      icon: <FaRocket />, 
      title: "Innovation", 
      description: "We constantly explore emerging technologies and methodologies to bring innovative solutions to our clients." 
    },
    { 
      icon: <FaChartLine />, 
      title: "Continuous Improvement", 
      description: "We believe in constantly enhancing our skills, processes, and solutions to deliver increasing value." 
    },
    { 
      icon: <FaGlobe />, 
      title: "Global Perspective", 
      description: "Our diverse team brings global insights and local expertise to solve complex business challenges." 
    },
    { 
      icon: <FaCloudUploadAlt />, 
      title: "Cloud Excellence", 
      description: "We are dedicated to mastering cloud technologies and best practices to optimize your digital transformation." 
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      title: "CEO & Founder",
      bio: "With over 15 years in cloud technology and business leadership, Sarah founded CloudDigify with a vision to transform how businesses leverage cloud solutions.",
      image: "/images/team/sarah.jpg"
    },
    {
      name: "David Chen",
      title: "CTO",
      bio: "David brings 12+ years of experience in cloud architecture and software engineering, leading our technical innovations and ensuring excellence in delivery.",
      image: "/images/team/david.jpg"
    },
    {
      name: "Miguel Rodriguez",
      title: "Head of Cloud Operations",
      bio: "Miguel's expertise in cloud infrastructure and operations ensures our clients receive reliable, secure, and optimized cloud environments.",
      image: "/images/team/miguel.jpg"
    },
    {
      name: "Aisha Patel",
      title: "Director of Client Success",
      bio: "Aisha leads our client success team, ensuring every client achieves their business objectives through our cloud solutions.",
      image: "/images/team/aisha.jpg"
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      description: "Professional-level certification validating expertise in designing distributed systems on AWS",
      icon: "/images/certifications/aws.png"
    },
    {
      name: "Microsoft Azure Solutions Expert",
      description: "Expert-level certification for professionals who design and implement Azure solutions",
      icon: "/images/certifications/azure.png"
    },
    {
      name: "Google Cloud Professional Architect",
      description: "Certification validating expertise in designing and managing solutions on Google Cloud",
      icon: "/images/certifications/gcp.png"
    },
    {
      name: "Certified Kubernetes Administrator",
      description: "Certification demonstrating proficiency in Kubernetes deployment and management",
      icon: "/images/certifications/kubernetes.png"
    }
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
              About CloudDigify
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 text-transparent bg-clip-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Transforming Businesses Through Cloud Excellence
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              At CloudDigify, we're passionate about helping businesses harness the full potential of cloud technologies. Our team of experts delivers innovative, secure, and scalable solutions that drive digital transformation and business growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Image Side */}
            <motion.div 
              className="w-full md:w-1/2 relative"
              variants={itemVariants}
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blue-200 rounded-xl" />
                <div className="relative z-10 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="/images/about-team.jpg" 
                    alt="CloudDigify Team" 
                    className="w-full h-full object-cover mix-blend-overlay opacity-75"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-3xl md:text-4xl font-bold px-6 text-center">Our Journey</h3>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Text Side */}
            <motion.div 
              className="w-full md:w-1/2"
              variants={itemVariants}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2015, CloudDigify began with a simple mission: to help businesses leverage the power of cloud technologies to drive innovation, efficiency, and growth.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we've grown from a small team of passionate cloud experts to a global organization serving clients across industries. We've built a reputation for delivering exceptional cloud solutions that solve complex business challenges.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we continue to push the boundaries of what's possible with cloud technology, constantly exploring new approaches and innovations to help our clients stay ahead in a rapidly evolving digital landscape.
              </p>
              
              <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r-lg">
                <p className="text-gray-700 font-medium italic">
                  "We believe that cloud technology has the power to transform not just IT operations, but entire businesses and industries. Our goal is to be the catalyst for that transformation."
                </p>
                <p className="text-gray-600 mt-2 font-medium">— CloudDigify Leadership Team</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              These principles guide everything we do, from how we develop solutions to how we interact with our clients and each other.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valuesList.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg text-blue-600 flex items-center justify-center mb-6 text-2xl">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Section / Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Our Journey</h2>
            <p className="text-lg text-gray-600">
              Milestones that have shaped our growth and success over the years
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 rounded-full"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {milestoneData.map((milestone, index) => (
                <motion.div 
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} md:justify-between`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {/* Circle in the middle of timeline */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow"></div>
                  
                  {/* Content Box */}
                  <div className={`w-full md:w-5/12 p-6 bg-white rounded-xl shadow-lg border border-gray-100 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-4 py-1 bg-blue-100 text-blue-800 rounded-full font-bold">{milestone.year}</span>
                      <h3 className="text-xl font-bold text-gray-800">{milestone.title}</h3>
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Our Leadership</h2>
            <p className="text-lg text-gray-600">
              Meet the team behind CloudDigify's innovation and success
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-blue-500 text-5xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-800">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.title}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Our Certifications</h2>
            <p className="text-lg text-gray-600">
              Recognized expertise in cloud technologies and methodologies
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  {cert.icon ? (
                    <img src={cert.icon} alt={cert.name} className="w-full h-auto" />
                  ) : (
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl">
                      <FaAward />
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Let's discuss how CloudDigify can help your organization succeed in the cloud.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Get in Touch
            </Link>
            <Link
              to="/services"
              className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 