import React from 'react';
import { motion } from 'framer-motion';

const QuickContact = () => (
  <section className="py-16 px-6 bg-gray-100">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">Request a Callback</h2>
          <p className="text-gray-600 mb-8">
            If you'd like to talk to our consulting team, contact us via this form and we'll get back to you shortly.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="text-2xl text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Email us</h3>
                <p className="text-gray-600">info@clouddigify.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="text-2xl text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Call us</h3>
                <p className="text-gray-600">+1 800 123 4567</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="text-2xl text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Visit us</h3>
                <p className="text-gray-600">
                  10432 Innovation Drive, Suite 300<br />
                  San Francisco, CA 94103
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input 
                type="text" 
                placeholder="Your name" 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" 
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" 
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Phone</label>
              <input 
                type="tel" 
                placeholder="Your phone number" 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" 
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea 
                placeholder="How can we help you?" 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                rows="4"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Submit Request
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  </section>
);

export default QuickContact; 