import React from 'react';
import { Link } from 'react-router-dom';
import WhyChooseUs from '../sections/WhyChooseUs';
import Testimonials from '../sections/Testimonials';
import Partners from '../sections/Partners';
import QuickContact from '../sections/QuickContact';

// This component structure follows a pattern that the PageEditor can recognize and extract content from
const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="h-screen bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Empower Your Business in the Cloud
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl">
          We deliver expert cloud solutions on AWS, Azure & OCI to help you scale, optimize, and innovate.
        </p>
        <Link
          to="/services"
          className="bg-white text-blue-600 font-semibold px-8 py-3 rounded shadow-lg hover:bg-gray-100 transition"
        >
          See Our Services
        </Link>
      </section>
      
      {/* Our Vision and Mission */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-700 mb-4">
                At CloudDigify, we envision a future where technology seamlessly empowers businesses, 
                driving innovation, efficiency, and security. Our goal is to redefine digital transformation, 
                offering next-generation IT infrastructure, cloud solutions, automation, and AI-driven services.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                We are committed to delivering cutting-edge IT solutions through expertise in cloud computing, 
                infrastructure modernization, automation, and cybersecurity. By integrating innovation and continuous 
                improvement, we empower businesses to achieve operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Components Section */}
      <section>
        <WhyChooseUs />
        <Testimonials />
        <Partners />
        <QuickContact />
      </section>
    </div>
  );
};

export default Home; 