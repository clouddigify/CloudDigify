import React from 'react';
import { FaBolt, FaCheckCircle, FaServer, FaChartLine, FaClock, FaShieldAlt } from 'react-icons/fa';
import PageTemplate from '../../templates/PageTemplate';

const Serverless = () => {
  const pageInfo = {
    title: "Serverless Computing Solutions",
    description: "Build and deploy scalable applications without managing servers, reducing operational complexity and costs.",
    icon: <FaBolt />,
    heroBackground: "from-blue-600 to-purple-700",
    
    overviewTitle: "Focus on Code, Not Infrastructure",
    overviewDescription1: "Serverless computing represents a paradigm shift in how applications are built and deployed. By eliminating the need to manage servers, you can focus entirely on your code and business logic, allowing for faster innovation and reduced operational complexity.",
    overviewDescription2: "At CloudDigify, we help organizations design, build, and deploy serverless applications that automatically scale to meet demand, reduce infrastructure costs, and accelerate time-to-market. Our serverless solutions cover everything from simple functions to complex event-driven architectures.",
    
    benefits: [
      "Automatic scaling to match demand without manual intervention",
      "Reduced operational costs by paying only for actual compute time",
      "Faster time-to-market with simplified deployment processes",
      "Improved developer productivity with focus on code, not infrastructure",
      "Enhanced reliability with built-in fault tolerance"
    ],
    
    sidebarTitle: "Why Serverless?",
    approachPoints: [
      "No server management required",
      "Pay-per-execution pricing model",
      "Automatic scaling and high availability",
      "Built-in fault tolerance and security",
      "Simplified deployment and continuous integration"
    ],
    secondaryCta: "Get Started",
    
    featuresTitle: "Our Serverless Services",
    featuresDescription: "We provide a comprehensive range of serverless computing services to help you build scalable, resilient applications without the complexity of server management.",
    features: [
      {
        title: "Function-as-a-Service (FaaS)",
        description: "Deploy individual functions that respond to events, scale automatically, and only incur costs when executed."
      },
      {
        title: "Event-Driven Architecture",
        description: "Build reactive systems that respond to triggers from various sources like databases, storage, user interactions, and scheduled events."
      },
      {
        title: "Serverless Databases",
        description: "Implement fully managed database solutions that scale automatically and integrate seamlessly with your serverless applications."
      },
      {
        title: "API Development",
        description: "Create scalable and secure APIs without managing the underlying infrastructure using serverless frameworks and services."
      }
    ],
    
    // Define custom sections
    additionalSections: [
      {
        content: (
          <>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-6">Benefits of Serverless Computing</h2>
              <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
                Discover why leading organizations are adopting serverless architectures for their critical applications.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="mr-4">
                  <FaServer className="text-blue-500 text-2xl" />
                  </div>
                  <div>
                  <h3 className="text-xl font-semibold mb-2">Zero Server Management</h3>
                  <p className="text-gray-600">Focus entirely on your application code while the cloud provider handles all server maintenance and updates.</p>
                </div>
                </div>

              <div className="flex p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="mr-4">
                  <FaChartLine className="text-blue-500 text-2xl" />
                  </div>
                  <div>
                  <h3 className="text-xl font-semibold mb-2">Automatic Scaling</h3>
                  <p className="text-gray-600">Your applications automatically scale from a few requests per day to thousands per second without any configuration.</p>
                </div>
              </div>

              <div className="flex p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="mr-4">
                  <FaClock className="text-blue-500 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Pay-Per-Use</h3>
                  <p className="text-gray-600">Only pay for the compute time you actually use, with no charges when your code isn't running.</p>
                </div>
                </div>
              
              <div className="flex p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="mr-4">
                  <FaShieldAlt className="text-blue-500 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Built-in Security</h3>
                  <p className="text-gray-600">Benefit from built-in security features and isolation that reduce vulnerability to traditional server-based attacks.</p>
                </div>
              </div>
            </div>
          </>
        )
      }
    ],
    
    technologiesTitle: "Technologies We Use",
    technologiesDescription: "We leverage industry-leading serverless technologies to build powerful, scalable applications.",
    technologiesUsed: [
      "AWS Lambda",
      "Azure Functions",
      "Google Cloud Functions",
      "AWS API Gateway",
      "DynamoDB",
      "Serverless Framework",
      "Amazon EventBridge",
      "Azure Logic Apps"
    ],
    
    caseStudy: {
      title: "Real-Time Data Processing Solution",
      client: "Leading Financial Services Provider",
      industry: "Financial Services",
      challenge: "A financial services company needed to process millions of transactions daily with real-time analytics capabilities. Their traditional server-based architecture struggled with unpredictable load spikes and had high maintenance costs.",
      solution: "CloudDigify implemented a serverless architecture using AWS Lambda for data processing, Amazon EventBridge for event routing, and DynamoDB for storage. The solution included automatic scaling and integrated seamlessly with their existing systems.",
      results: [
        "Processing capacity scaled automatically to handle 10x normal load during peak periods",
        "Reduced infrastructure costs by 65% compared to previous server-based solution",
        "Improved processing time from minutes to seconds for critical transactions",
        "Eliminated system maintenance downtime with always-available serverless components"
      ]
    },
    
    ctaTitle: "Ready to Go Serverless?",
    ctaDescription: "Contact our team today to learn how serverless computing can help your business reduce costs, increase agility, and accelerate innovation.",
    finalCta: "Contact Us"
  };

  return <PageTemplate pageInfo={pageInfo} pageType="service" />;
};

export default Serverless; 