import React from 'react';
import { motion } from 'framer-motion';

// Client testimonials - easy to edit or add more
const testimonials = [
  {
    quote: "CloudDigify transformed our infrastructure with zero downtime and perfect execution.",
    author: "Sudip Samaddar",
    company: "Imagine Technologies",
    // Optional image URL if you want to add client photos
    image: "" 
  },
  {
    quote: "Their team provided amazing support for our migration. We're obliged for their effort and expertise.",
    author: "Anuj Kumar",
    company: "InnovateIT",
    image: ""
  },
  {
    quote: "We appreciate their prompt response to our issues. As usual, they did wonders with our cloud setup.",
    author: "Rajiv Goyal",
    company: "TechForward Solutions",
    image: ""
  }
];

// Edit section title and subtitle
const sectionTitle = "Client Testimonials";
const sectionSubtitle = "What our customers say about us";

const Testimonials = () => (
  <section className="py-16 px-6 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4">{sectionTitle}</h2>
      {sectionSubtitle && (
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">{sectionSubtitle}</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow"
          >
            {testimonial.image && (
              <div className="flex justify-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
            )}
            <p className="italic mb-4 text-gray-700">"{testimonial.quote}"</p>
            <div>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-sm text-gray-600">{testimonial.company}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials; 