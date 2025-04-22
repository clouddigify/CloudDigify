import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaChartLine, FaShieldAlt, FaCogs, FaServer, FaArrowRight } from 'react-icons/fa';

// This is a template component that can be used for any industry page
// To use it, copy this file, rename it, and customize the content

const IndustryTemplate = () => {
  // Customize these values for each industry
  const industryInfo = {
    title: "Industry Name", // Replace with actual industry name
    description: "Digital transformation solutions for the industry sector.",
    icon: <FaCogs size={36} className="mb-4 text-blue-600" />, // Use appropriate icon
    heroBackground: "from-blue-800 to-indigo-900", // Customize gradient colors if needed
    challenges: [
      "Challenge 1 faced by this industry",
      "Challenge 2 faced by this industry",
      "Challenge 3 faced by this industry",
      "Challenge 4 faced by this industry"
    ],
    solutions: [
      {
        title: "Solution Area 1",
        icon: <FaChartLine className="text-blue-600 text-3xl mb-3" />,
        description: "Detailed description of this solution and how it addresses industry challenges.",
        features: ["Feature 1", "Feature 2", "Feature 3"]
      },
      {
        title: "Solution Area 2",
        icon: <FaShieldAlt className="text-blue-600 text-3xl mb-3" />,
        description: "Detailed description of this solution and how it addresses industry challenges.",
        features: ["Feature 1", "Feature 2", "Feature 3"]
      },
      {
        title: "Solution Area 3",
        icon: <FaServer className="text-blue-600 text-3xl mb-3" />,
        description: "Detailed description of this solution and how it addresses industry challenges.",
        features: ["Feature 1", "Feature 2", "Feature 3"]
      },
      {
        title: "Solution Area 4",
        icon: <FaCogs className="text-blue-600 text-3xl mb-3" />,
        description: "Detailed description of this solution and how it addresses industry challenges.",
        features: ["Feature 1", "Feature 2", "Feature 3"]
      }
    ],
    caseStudy: {
      title: "Success Story: Industry Transformation",
      client: "Leading Industry Enterprise",
      challenge: "Description of the specific challenges this client was facing in their industry.",
      solution: "How our tailored industry solutions were implemented to address their challenges.",
      results: [
        "Quantitative result 1 (e.g., 40% cost reduction)",
        "Quantitative result 2 (e.g., 50% faster time-to-market)",
        "Qualitative result (e.g., improved customer satisfaction)"
      ]
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-16"
    >
      {/* Hero Section */}
      <section className={`bg-gradient-to-r ${industryInfo.heroBackground} text-white py-20 px-6`}>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{industryInfo.title} Solutions</h1>
            <p className="text-xl opacity-90 mb-8">
              {industryInfo.description}
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6">Industry Overview</h2>
              <p className="mb-6 text-lg text-gray-700">
                The {industryInfo.title} industry is undergoing rapid digital transformation, driven by changing customer expectations, new regulatory requirements, and the need for operational efficiency.
              </p>
              <p className="mb-10 text-lg text-gray-700">
                CloudDigify helps {industryInfo.title} organizations navigate this complex landscape with secure and innovative cloud solutions tailored to your specific industry needs.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Industry Challenges We Solve</h3>
              <ul className="space-y-3 mb-8">
                {industryInfo.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">
                      <FaCheckCircle className="mt-1" />
                    </span>
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:w-1/3 bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Industry-specific expertise and insights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Tailored solutions for your unique challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Regulatory compliance and security focus</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Proven track record in the {industryInfo.title} sector</span>
                </li>
              </ul>
              
              <div className="bg-white p-4 rounded-lg mb-6">
                <h4 className="font-medium mb-2 text-blue-800">Industry Expertise</h4>
                <p className="text-sm text-blue-800">
                  Our team includes former {industryInfo.title} professionals who understand your industry's unique challenges and regulatory requirements.
                </p>
              </div>
              
              <Link 
                to="/contact" 
                className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition duration-300"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our {industryInfo.title} Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryInfo.solutions.map((solution, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{solution.title}</h3>
                <p className="text-gray-700 mb-6">
                  {solution.description}
                </p>
                <h4 className="font-medium text-gray-800 mb-2">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">{industryInfo.caseStudy.title}</h2>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="mb-6 pb-6 border-b border-gray-200">
              <h3 className="text-2xl font-semibold mb-2">{industryInfo.caseStudy.client}</h3>
              <div className="text-sm text-blue-600 font-medium">Industry: {industryInfo.title}</div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">The Challenge</h4>
              <p className="text-gray-700 mb-4">
                {industryInfo.caseStudy.challenge}
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Our Solution</h4>
              <p className="text-gray-700 mb-4">
                {industryInfo.caseStudy.solution}
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">Results</h4>
              <ul className="space-y-2">
                {industryInfo.caseStudy.results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/case-studies" 
              className="inline-flex items-center text-blue-600 font-medium"
            >
              View More Case Studies
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your {industryInfo.title} Organization?</h2>
          <p className="text-gray-700 mb-8 text-lg">
            Contact our {industryInfo.title} experts today to discuss how our cloud solutions can help you innovate, reduce costs, and enhance customer experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Contact Our {industryInfo.title} Team
            </Link>
            <Link
              to="/industries"
              className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              Explore All Industries
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default IndustryTemplate; 