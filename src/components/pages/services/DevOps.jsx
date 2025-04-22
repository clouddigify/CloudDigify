import React from 'react';
import { FaCodeBranch, FaSyncAlt, FaRocket, FaTools, FaClipboardCheck, FaLock, FaChartLine, FaCheckCircle } from 'react-icons/fa';
import PageTemplate from '../../templates/PageTemplate';

const DevOps = () => {
  // Define the service info object
  const pageInfo = {
    title: "DevOps & CI/CD Services",
    description: "Accelerate your software delivery with streamlined DevOps processes, automated pipelines, and continuous integration and deployment.",
    icon: <FaCodeBranch />,
    heroBackground: "from-indigo-600 to-purple-700",
    
    overviewTitle: "Streamline Your Software Delivery",
    overviewDescription1: "In today's fast-paced digital landscape, the ability to deliver software quickly, consistently, and reliably is critical for business success. DevOps breaks down silos between development and operations teams, creating an environment where building, testing, and releasing software happens rapidly and consistently.",
    overviewDescription2: "Our DevOps services help organizations implement the tooling, processes, and cultural changes needed to accelerate software delivery while maintaining stability and security. From continuous integration and deployment pipelines to infrastructure automation and monitoring solutions, we provide end-to-end DevOps expertise.",
    
    benefits: [
      "Faster time-to-market with automated deployment pipelines",
      "Improved code quality through continuous integration practices",
      "Reduced operational overhead with infrastructure automation",
      "Enhanced stability and reliability of applications",
      "Greater team collaboration between development and operations"
    ],
    
    sidebarTitle: "Our DevOps Approach",
    approachPoints: [
      "Automation-first mindset",
      "Continuous integration/delivery",
      "Infrastructure as code",
      "Monitoring and observability",
      "Collaborative culture"
    ],
    secondaryCta: "Get Expert Advice",
    
    featuresTitle: "Our DevOps Services",
    featuresDescription: "Comprehensive DevOps solutions to accelerate your software delivery and improve operational efficiency.",
    features: [
      {
        title: "DevOps Assessment & Strategy",
        description: "Evaluate your current development and operations processes to create a tailored DevOps roadmap that aligns with your business objectives."
      },
      {
        title: "CI/CD Pipeline Implementation",
        description: "Design and build automated pipelines for continuous integration, testing, and deployment across development, staging, and production environments."
      },
      {
        title: "Infrastructure Automation",
        description: "Implement Infrastructure as Code (IaC) practices to create reproducible, version-controlled infrastructure deployments across cloud platforms."
      },
      {
        title: "Containerization & Orchestration",
        description: "Modernize applications with container technologies and implement orchestration solutions for efficient management and scaling."
      }
    ],
    
    // Define custom sections
    additionalSections: [
      {
        content: (
          <>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">The DevOps Journey</h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                Our approach to implementing DevOps follows a proven methodology that drives continuous improvement.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-indigo-500 text-3xl mb-4 mx-auto">
                  <FaClipboardCheck />
                </div>
                <h3 className="text-xl font-semibold mb-3">Assess</h3>
                <p className="text-gray-600">
                  Evaluate your current development practices, tooling, and challenges to establish a baseline.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-indigo-500 text-3xl mb-4 mx-auto">
                  <FaTools />
                </div>
                <h3 className="text-xl font-semibold mb-3">Implement</h3>
                <p className="text-gray-600">
                  Set up CI/CD pipelines, automation tools, and monitoring solutions tailored to your needs.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-indigo-500 text-3xl mb-4 mx-auto">
                  <FaRocket />
                </div>
                <h3 className="text-xl font-semibold mb-3">Accelerate</h3>
                <p className="text-gray-600">
                  Optimize your delivery pipeline, remove bottlenecks, and increase deployment frequency.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-indigo-500 text-3xl mb-4 mx-auto">
                  <FaSyncAlt />
                </div>
                <h3 className="text-xl font-semibold mb-3">Evolve</h3>
                <p className="text-gray-600">
                  Continuously improve practices through metrics-driven feedback and process refinement.
                </p>
              </div>
            </div>
          </>
        )
      },
      {
        content: (
          <>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Key DevOps Metrics</h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                These key performance indicators measure the success of your DevOps transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-indigo-500 text-3xl mb-4">
                  <FaRocket />
                </div>
                <h3 className="text-xl font-semibold mb-3">Velocity Metrics</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <div>
                      <span className="font-medium">Deployment Frequency</span>
                      <p className="text-sm text-gray-600">How often you deploy code to production</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <div>
                      <span className="font-medium">Lead Time for Changes</span>
                      <p className="text-sm text-gray-600">Time from code commit to production deployment</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <div>
                      <span className="font-medium">Time to Market</span>
                      <p className="text-sm text-gray-600">Duration from idea conception to production release</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-indigo-500 text-3xl mb-4">
                  <FaChartLine />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality & Stability Metrics</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <div>
                      <span className="font-medium">Change Failure Rate</span>
                      <p className="text-sm text-gray-600">Percentage of deployments causing production failures</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <div>
                      <span className="font-medium">Mean Time to Recovery</span>
                      <p className="text-sm text-gray-600">Average time to restore service after a failure</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <div>
                      <span className="font-medium">Automated Test Coverage</span>
                      <p className="text-sm text-gray-600">Percentage of code covered by automated tests</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )
      }
    ],
    
    technologiesTitle: "DevOps Tools & Technologies",
    technologiesDescription: "We leverage industry-leading technologies to implement robust DevOps solutions.",
    technologiesUsed: [
      "Jenkins",
      "GitLab CI",
      "GitHub Actions",
      "CircleCI",
      "Azure DevOps",
      "Terraform",
      "Ansible",
      "Docker",
      "Kubernetes",
      "Prometheus",
      "Grafana",
      "ELK Stack"
    ],
    
    caseStudy: {
      title: "DevOps Transformation",
      client: "Enterprise SaaS Provider",
      industry: "Software",
      challenge: "A growing SaaS company was struggling with lengthy release cycles, taking 3-4 weeks to deploy new features. Their manual deployment processes were error-prone, leading to frequent production issues and requiring extensive developer time for operational tasks.",
      solution: "CloudDigify implemented a comprehensive DevOps transformation, including Git workflow standardization, Jenkins CI/CD pipelines with automated testing, infrastructure as code using Terraform, containerization with Docker and Kubernetes, and comprehensive monitoring with Prometheus and Grafana.",
      results: [
        "Reduced deployment time from weeks to under 30 minutes with zero-downtime deployments",
        "Decreased production incidents by 78% through automated testing and gradual rollouts",
        "Improved developer productivity by 40% by eliminating manual operational tasks",
        "Enabled scaling to handle 10x traffic increases without performance degradation"
      ]
    },
    
    ctaTitle: "Ready to Transform Your Software Delivery?",
    ctaDescription: "Contact our DevOps experts today to discuss how we can help accelerate your development cycles while maintaining stability and security.",
    finalCta: "Start Your DevOps Journey"
  };

  return <PageTemplate pageInfo={pageInfo} pageType="service" />;
};

export default DevOps; 