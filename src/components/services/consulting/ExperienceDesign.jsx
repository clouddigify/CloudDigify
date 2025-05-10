import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaPalette, FaMobile, FaDesktop, FaUsers, FaMagic, FaPencilRuler, FaRegLightbulb, FaRegCompass, FaHandPointer, FaMoneyBillWave, FaAward, FaSmile, FaSearch, FaSitemap, FaCogs, FaPaintBrush, FaLaptopCode } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import ServiceInquiryForm from '../../common/ServiceInquiryForm';

const ExperienceDesign = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState('Experience Design');
  
  const openInquiryForm = (serviceType) => {
    setInquiryType(`Experience Design - ${serviceType}`);
    setIsFormOpen(true);
  };

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const services = [
    {
      icon: FaRegLightbulb,
      title: "UX Strategy",
      description: "CloudDigify develops strategic planning for optimal user experiences and digital touchpoints"
    },
    {
      icon: FaUsers,
      title: "User Research",
      description: "CloudDigify conducts in-depth analysis of user needs and behaviors to inform design decisions"
    },
    {
      icon: FaPencilRuler,
      title: "UI Design",
      description: "CloudDigify creates beautiful and intuitive interface designs that elevate your brand"
    },
    {
      icon: FaMobile,
      title: "Responsive Design",
      description: "CloudDigify ensures seamless experiences across all devices and screen sizes"
    },
    {
      icon: FaMagic,
      title: "Interaction Design",
      description: "CloudDigify crafts engaging and meaningful user interactions that delight customers"
    },
    {
      icon: FaRegCompass,
      title: "Design Systems",
      description: "CloudDigify builds scalable and consistent design frameworks for enterprise applications"
    }
  ];

  const benefits = [
    {
      icon: FaHandPointer,
      title: "Increased User Engagement",
      description: "CloudDigify's experience design solutions create intuitive interfaces that keep users engaged, increasing time spent with your product and improving conversion rates."
    },
    {
      icon: FaMoneyBillWave,
      title: "Reduced Development Costs",
      description: "CloudDigify's design-first approach identifies usability issues early, reducing expensive changes later in development and shortening time-to-market."
    },
    {
      icon: FaAward,
      title: "Brand Differentiation",
      description: "CloudDigify helps your digital products stand out with distinctive, on-brand experiences that create emotional connections with your users."
    },
    {
      icon: FaSmile,
      title: "Higher Customer Satisfaction",
      description: "CloudDigify designs intuitive experiences that help users accomplish their goals efficiently, leading to higher satisfaction and loyalty."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Interactive Design Elements Animation */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity, scale }}
          className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
        />
        <div className="absolute inset-0">
          {/* Interactive Design Elements Animation */}
          <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Design Grid */}
            {[...Array(16)].map((_, index) => {
              const row = Math.floor(index / 4);
              const col = index % 4;
              const x = 20 + col * 15;
              const y = 20 + row * 15;

              return (
                <motion.rect
                  key={`grid-${index}`}
                  x={x}
                  y={y}
                  width="12"
                  height="12"
                  rx="2"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.2)"
                  strokeWidth="0.5"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.1,
                    ease: "easeInOut"
                  }}
                />
              );
            })}

            {/* Floating UI Elements */}
            {[...Array(6)].map((_, index) => {
              const radius = 25;
              const angle = (index * Math.PI * 2) / 6;
              const x = 50 + Math.cos(angle) * radius;
              const y = 50 + Math.sin(angle) * radius;

              return (
                <g key={`ui-${index}`}>
                  {/* UI Element */}
                  <motion.path
                    d={`M ${x-3},${y} h6 v${index % 2 ? 4 : 2} h-6 z`}
                    fill="rgba(255, 255, 255, 0.6)"
                    initial={{ scale: 0 }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 0.8, 0.6]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Connecting Lines */}
                  <motion.line
                    x1="50"
                    y1="50"
                    x2={x}
                    y2={y}
                    stroke="rgba(255, 255, 255, 0.3)"
                    strokeWidth="0.5"
                    strokeDasharray="2,2"
                    initial={{ pathLength: 0 }}
                    animate={{
                      pathLength: [0, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                </g>
              );
            })}

            {/* Interactive Cursor Effect */}
            <motion.circle
              cx="50"
              cy="50"
              r="8"
              fill="none"
              stroke="rgba(255, 255, 255, 0.4)"
              strokeWidth="0.5"
              initial={{ scale: 0 }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 0.6, 0.4]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-bold mb-4"
          >
            Experience Design
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Creating delightful digital experiences that inspire and engage
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openInquiryForm('General Inquiry')}
            className="px-8 py-3 bg-white text-pink-600 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Explore Design Services
          </motion.button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How CloudDigify Transforms User Experiences</h2>
            <p className="text-lg text-gray-600">
              CloudDigify partners with you to create exceptional digital experiences that captivate users and drive business results. Our design experts combine user research, creativity, and technical expertise to deliver interfaces that are not only beautiful but also intuitive and effective at meeting user needs.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => openInquiryForm(service.title)}
              >
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-2xl text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose CloudDigify for Experience Design</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="text-2xl text-pink-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-center mb-6">
                <FaPalette className="inline-block mr-2 text-pink-600" />
                CloudDigify's Design Process
              </h3>
              <div className="space-y-4">
                {[
                  {
                    step: "Discovery & Research",
                    description: "CloudDigify conducts user research and stakeholder interviews to deeply understand both user needs and business goals."
                  },
                  {
                    step: "Strategy & Concepts",
                    description: "CloudDigify develops UX strategy and concepts that align user expectations with your brand values and business objectives."
                  },
                  {
                    step: "Wireframing & Prototyping",
                    description: "CloudDigify creates interactive wireframes and prototypes to validate concepts before moving to visual design."
                  },
                  {
                    step: "UI Design & Iteration",
                    description: "CloudDigify crafts beautiful, intuitive interfaces with iterative user testing to refine and optimize the experience."
                  },
                  {
                    step: "Implementation Support",
                    description: "CloudDigify works closely with development teams to ensure design fidelity and experience quality through launch."
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start p-4 bg-white rounded-lg shadow-sm"
                  >
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center font-semibold">
                        {index === 0 && <FaSearch className="text-sm" />}
                        {index === 1 && <FaSitemap className="text-sm" />}
                        {index === 2 && <FaPencilRuler className="text-sm" />}
                        {index === 3 && <FaPaintBrush className="text-sm" />}
                        {index === 4 && <FaLaptopCode className="text-sm" />}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">{item.step}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            Ready to Transform Your Digital Experience?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            Partner with CloudDigify to design digital experiences that delight your users and drive your business forward.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openInquiryForm('Design Journey')}
            className="px-8 py-3 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors"
          >
            Start Your Design Journey
          </motion.button>
        </div>
      </section>
      
      {/* Service Inquiry Form Modal */}
      {isFormOpen && (
        <ServiceInquiryForm
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          serviceName={inquiryType}
        />
      )}
    </div>
  );
};

export default ExperienceDesign; 