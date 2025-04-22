import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaChartLine, FaShieldAlt, FaCogs, FaServer, FaArrowRight, FaUniversity, FaCreditCard, FaMobileAlt, FaLock } from 'react-icons/fa';

const Banking = () => {
  // Customize these values for each industry
  const industryInfo = {
    title: "Banking",
    description: "Accelerate digital transformation and enhance customer experiences with secure, scalable cloud solutions for the banking sector.",
    icon: <FaUniversity size={36} className="mb-4 text-blue-600" />,
    heroBackground: "from-blue-800 to-indigo-900",
    challenges: [
      "Meeting rising customer expectations for digital banking experiences",
      "Managing increasing security threats and regulatory compliance",
      "Modernizing legacy core banking systems and infrastructure",
      "Competing with fintech disruptors and digital-first banks",
      "Optimizing operational costs while improving service delivery"
    ],
    solutions: [
      {
        title: "Core Banking Modernization",
        icon: <FaServer className="text-blue-600 text-3xl mb-3" />,
        description: "Transform your legacy core banking systems into modern, cloud-based platforms that enhance agility, reduce costs, and support innovation.",
        features: ["API-first architecture", "Microservices-based systems", "Real-time processing capabilities"]
      },
      {
        title: "Digital Banking Platforms",
        icon: <FaMobileAlt className="text-blue-600 text-3xl mb-3" />,
        description: "Create seamless omnichannel banking experiences across mobile, web, and branch with modern digital platforms powered by cloud technology.",
        features: ["Personalized customer experiences", "Integrated banking journeys", "Advanced analytics and insights"]
      },
      {
        title: "Banking Security & Compliance",
        icon: <FaShieldAlt className="text-blue-600 text-3xl mb-3" />,
        description: "Implement robust security measures and compliance frameworks specifically designed for banking regulations and industry standards.",
        features: ["Comprehensive threat detection", "Regulatory compliance automation", "Zero-trust security architecture"]
      },
      {
        title: "Payment Systems Modernization",
        icon: <FaCreditCard className="text-blue-600 text-3xl mb-3" />,
        description: "Deploy modern payment infrastructure to support real-time payments, open banking, and emerging payment technologies.",
        features: ["Real-time payment processing", "Open banking APIs", "Fraud detection and prevention"]
      }
    ],
    caseStudy: {
      title: "Success Story: Digital Banking Transformation",
      client: "Regional Commercial Bank",
      challenge: "A mid-sized commercial bank was struggling with outdated core banking systems that couldn't support their digital growth objectives. Their customers were demanding more digital services, while the bank faced increasing competition from digital-only banks and fintech companies. Additionally, they needed to ensure ongoing compliance with evolving regulations.",
      solution: "CloudDigify implemented a phased core banking modernization approach, starting with a cloud-based digital layer that integrated with their existing systems. We developed APIs to enable safe, controlled access to core banking functions, deployed a new digital banking platform, and implemented a robust security and compliance framework tailored to financial services regulations.",
      results: [
        "68% increase in digital customer engagement within 6 months",
        "45% reduction in time-to-market for new banking products",
        "30% decrease in operational costs through cloud optimization",
        "Achieved full compliance with banking regulations while enhancing security posture"
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
              <h2 className="text-3xl font-bold mb-6">Banking Industry Overview</h2>
              <p className="mb-6 text-lg text-gray-700">
                The banking industry is undergoing a profound digital transformation driven by changing customer expectations, regulatory pressures, and technological advancements. As traditional banking models evolve, financial institutions must embrace cloud solutions to remain competitive, agile, and customer-focused.
              </p>
              <p className="mb-10 text-lg text-gray-700">
                CloudDigify helps banking organizations navigate this complex digital landscape with secure and innovative cloud solutions specifically designed for the unique challenges of the financial services sector. From core banking modernization to digital customer experiences, we provide the expertise and technology to drive your banking transformation.
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
              <h3 className="text-xl font-semibold mb-4">Why Choose Us for Banking</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Deep understanding of banking operations and regulations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Specialized security frameworks for financial services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Experience with core banking systems integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Proven expertise in banking digital transformation</span>
                </li>
              </ul>
              
              <div className="bg-white p-4 rounded-lg mb-6">
                <h4 className="font-medium mb-2 text-blue-800">Banking Compliance Expertise</h4>
                <p className="text-sm text-blue-800">
                  Our team includes former banking technology leaders who understand the unique regulatory requirements of the industry, including PCI-DSS, GDPR, AML, KYC, and regional banking regulations.
                </p>
              </div>
              
              <Link 
                to="/contact" 
                className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition duration-300"
              >
                Schedule a Banking Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Banking Solutions</h2>
          
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
              View More Banking Case Studies
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Banking Organization?</h2>
          <p className="text-gray-700 mb-8 text-lg">
            Contact our banking technology experts today to discuss how our cloud solutions can help you innovate, reduce costs, and enhance customer experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Contact Our Banking Team
            </Link>
            <Link
              to="/industries/financial-services"
              className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              Explore Financial Services
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Banking; 