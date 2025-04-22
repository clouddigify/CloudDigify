import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaUserCircle } from 'react-icons/fa';

// Client testimonials - easy to edit or add more
const testimonials = [
  {
    quote: "CloudDigify transformed our infrastructure with zero downtime and perfect execution. Their team's expertise in cloud migration was invaluable to our business transition.",
    author: "Sumit Gupta",
    position: "CTO",
    rating: 5,
    // Optional image URL if you want to add client photos
    image: "" 
  },
  {
    quote: "Their team provided amazing support for our migration. We're obliged for their effort and expertise. The ongoing maintenance service has been flawless for over a year now.",
    author: "Anuj Kumar",
    position: "IT Director",
    rating: 5,
    image: ""
  },
  {
    quote: "We appreciate their prompt response to our issues. As usual, they did wonders with our cloud setup. Their security implementation exceeded our expectations.",
    author: "Rajiv Goyal",
    position: "CEO",
    rating: 5,
    image: ""
  },
  {
    quote: "The DevOps automation implemented by CloudDigify reduced our deployment time by 70%. Their team's technical knowledge and commitment to excellence is remarkable.",
    author: "Priya Sharma",
    position: "VP of Engineering",
    rating: 5,
    image: ""
  },
  {
    quote: "CloudDigify's containerization solutions helped us scale our applications effortlessly. Their team was responsive and provided valuable insights throughout the project.",
    author: "Vikram Singh",
    position: "Head of IT Operations",
    rating: 5,
    image: ""
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
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Testimonials = () => (
  <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="max-w-6xl mx-auto"
    >
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Don't just take our word for it - see what our clients have to say about our cloud services and digital transformation solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative"
          >
            <div className="absolute top-6 left-6 text-blue-100">
              <FaQuoteLeft className="h-16 w-16 opacity-20" />
            </div>
            
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 h-5 w-5" />
              ))}
            </div>
            
            <p className="mb-6 text-gray-700 relative z-10">"{testimonial.quote}"</p>
            
            <div className="flex items-center">
              {testimonial.image ? (
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <FaUserCircle className="h-8 w-8 text-blue-400" />
                </div>
              )}
              <div>
                <p className="font-bold text-gray-800">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div variants={itemVariants} className="mt-12 text-center">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
        >
          <a href="/contact" className="font-medium">Become Our Next Success Story</a>
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Testimonials; 