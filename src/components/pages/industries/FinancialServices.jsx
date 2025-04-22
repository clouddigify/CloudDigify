import React from 'react';
import { FaDatabase, FaLock, FaChartLine, FaRobot, FaShieldAlt } from 'react-icons/fa';
import PageTemplate from '../../templates/PageTemplate';
import { Link } from 'react-router-dom';

const FinancialServices = () => {
  // Define the industry info object
  const pageInfo = {
    title: "Financial Services",
    description: "Secure, compliant, and innovative cloud solutions for banking, insurance, and capital markets",
    icon: <FaDatabase size={36} className="mb-4 text-blue-600" />,
    heroBackground: "from-blue-800 to-indigo-900",
    
    overviewTitle: "Transforming Financial Services with Cloud Technology",
    overviewDescription1: "The financial services industry is undergoing rapid digital transformation, driven by changing customer expectations, increasing regulatory requirements, and the need for operational efficiency. CloudDigify helps financial institutions navigate this complex landscape with secure and innovative cloud solutions.",
    overviewDescription2: "Our deep understanding of the financial services industry, combined with our cloud expertise, enables us to deliver solutions that enhance customer experiences, improve operational efficiency, and ensure regulatory compliance.",
    
    challenges: [
      "Legacy system modernization without disruption",
      "Regulatory compliance (GDPR, PSD2, etc.)",
      "Cybersecurity and fraud prevention",
      "Digital customer experience enhancement",
      "Data analytics and business intelligence",
      "Cost reduction and operational efficiency"
    ],
    
    sidebarTitle: "Key Financial Services Sectors",
    approachPoints: [
      "Banking & Payment Services",
      "Insurance & Risk Management",
      "Capital Markets & Investments",
      "Fintech & Digital Finance"
    ],
    secondaryCta: "Schedule a Consultation",
    
    sidebarContent: {
      title: "Industry Expertise",
      description: "Our team includes former banking and financial services professionals who understand your industry's unique challenges and regulatory requirements."
    },
    
    additionalSections: [
      {
        content: (
          <>
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-8 text-center">Financial Services Sectors We Serve</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-blue-600 mb-3">
                    <FaDatabase size={24} />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Banking</h4>
                  <p className="text-gray-700 mb-3">Digital banking platforms, core banking modernization, payment processing, and fraud detection solutions.</p>
                  <Link 
                    to="/industries/banking" 
                    className="text-blue-600 font-medium inline-flex items-center group"
                  >
                    Learn More 
                    <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-blue-600 mb-3">
                    <FaLock size={24} />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Insurance</h4>
                  <p className="text-gray-700 mb-3">Policy administration, claims processing, underwriting automation, and customer engagement solutions.</p>
                  <Link 
                    to="/industries/insurance" 
                    className="text-blue-600 font-medium inline-flex items-center group"
                  >
                    Learn More 
                    <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-blue-600 mb-3">
                    <FaChartLine size={24} />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Capital Markets</h4>
                  <p className="text-gray-700 mb-3">Trading platforms, risk management, regulatory reporting, and analytics solutions.</p>
                  <Link 
                    to="/industries/capital-markets" 
                    className="text-blue-600 font-medium inline-flex items-center group"
                  >
                    Learn More 
                    <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-blue-600 mb-3">
                    <FaRobot size={24} />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Fintech</h4>
                  <p className="text-gray-700 mb-3">Digital lending, payment innovation, blockchain solutions, and AI-powered financial services.</p>
                  <Link 
                    to="/industries/fintech" 
                    className="text-blue-600 font-medium inline-flex items-center group"
                  >
                    Learn More 
                    <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )
      }
    ],
    
    solutionsTitle: "Our Financial Services Solutions",
    solutions: [
      {
        title: "Core System Modernization",
        icon: <FaDatabase className="text-blue-600 text-3xl mb-3" />,
        description: "We help financial institutions modernize their legacy core systems to improve agility, reduce costs, and enhance customer experiences.",
        features: ["Gradual migration strategies to minimize risk", "API-first architecture for flexibility", "Cloud-native solutions for scalability", "Regulatory compliance by design"]
      },
      {
        title: "Cybersecurity & Compliance",
        icon: <FaShieldAlt className="text-blue-600 text-3xl mb-3" />,
        description: "Our cybersecurity solutions help financial institutions protect sensitive data, prevent fraud, and comply with regulatory requirements.",
        features: ["Multi-layered security architecture", "Real-time fraud detection", "Automated compliance monitoring", "Secure authentication solutions"]
      },
      {
        title: "Data Analytics & AI",
        icon: <FaChartLine className="text-blue-600 text-3xl mb-3" />,
        description: "Unlock the value of your data with advanced analytics and AI solutions that drive better decision-making and customer insights.",
        features: ["Customer behavior analytics", "Risk modeling and analysis", "Predictive maintenance", "AI-powered recommendations"]
      },
      {
        title: "Digital Customer Experience",
        icon: <FaRobot className="text-blue-600 text-3xl mb-3" />,
        description: "Create seamless, omnichannel experiences that meet the expectations of today's digital-first financial services customers.",
        features: ["Omnichannel customer journeys", "Personalization engines", "Digital onboarding processes", "Self-service capabilities"]
      }
    ],
    
    caseStudy: {
      title: "Financial Services Transformation",
      client: "Global Investment Firm",
      challenge: "A global investment firm with over $50 billion in assets under management was struggling with legacy systems that limited their ability to scale and innovate. They needed to modernize their IT infrastructure while ensuring security, compliance, and business continuity for their clients worldwide.",
      solution: "CloudDigify implemented a comprehensive cloud transformation strategy, establishing a secure AWS landing zone with proper security controls and governance. We migrated core applications to microservices architecture, implemented DevOps practices for continuous delivery, and deployed advanced data analytics solutions for real-time insights.",
      results: [
        "70% reduction in infrastructure costs through cloud optimization",
        "85% faster application deployment with automated CI/CD pipelines",
        "99.99% system availability with robust disaster recovery",
        "Enhanced data security posture exceeding regulatory requirements"
      ]
    },
    
    ctaTitle: "Ready to Transform Your Financial Services Organization?",
    ctaDescription: "Contact our team to discuss how our cloud solutions can help your financial institution innovate, reduce costs, and deliver exceptional customer experiences.",
    finalCta: "Start Your Financial Transformation"
  };

  return <PageTemplate pageInfo={pageInfo} pageType="industry" />;
};

export default FinancialServices; 