import React from 'react';
import PageTemplate from '../../templates/PageTemplate';
import { FaCubes, FaCheckCircle, FaDocker, FaCloudUploadAlt, FaLock, FaNetworkWired } from 'react-icons/fa';

const Containerization = () => {
  const pageInfo = {
    title: "Containerization Services",
    description: "Deploy applications consistently across environments with scalable, portable container solutions.",
    icon: <FaCubes />,
    heroBackground: "from-blue-600 to-teal-600",
    overviewTitle: "Modernize Your Application Deployment",
    overviewDescription1: "Containerization is revolutionizing how applications are built, deployed, and managed. By packaging your applications and their dependencies into lightweight, portable containers, you can ensure consistent behavior across any environment – from development to production.",
    overviewDescription2: "At CloudDigify, we help organizations implement container technologies like Docker and orchestration platforms like Kubernetes to improve deployment efficiency, enhance scalability, and accelerate innovation. Our containerization services provide a complete solution from assessment to implementation and ongoing management.",
    benefits: [
      "Consistent application deployment across all environments",
      "Improved resource efficiency and infrastructure utilization",
      "Faster application startup times and deployment cycles",
      "Enhanced isolation and security between applications",
      "Simplified scaling and management of microservices"
    ],
    sidebarTitle: "Why Containerize?",
    approachPoints: [
      "Build once, run anywhere consistency",
      "Lightweight and efficient resource usage",
      "Rapid application startup and scaling",
      "Simplified microservices implementation",
      "Improved DevOps workflows and CI/CD"
    ],
    secondaryCta: "Get Started",
    featuresTitle: "Our Containerization Services",
    featuresDescription: "We provide end-to-end containerization services to help you modernize your application deployment and management.",
    features: [
      {
        title: "Container Strategy & Assessment",
        description: "Evaluate your applications for containerization, create a roadmap, and develop a container strategy aligned with your business goals."
      },
      {
        title: "Application Containerization",
        description: "Convert your existing applications to containerized workloads with optimized configurations for performance and security."
      },
      {
        title: "Kubernetes Implementation",
        description: "Set up and configure production-ready Kubernetes clusters for automated deployment, scaling, and management of containerized applications."
      },
      {
        title: "Container Orchestration & Management",
        description: "Implement comprehensive solutions for monitoring, logging, security, and lifecycle management of container environments."
      }
    ],
    additionalSections: [
      {
        content: (
          <>
            <h2 className="text-3xl font-bold text-center mb-6">Benefits of Containerization</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Discover how containerization can transform your application deployment and management.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="mr-4">
                  <FaDocker className="text-blue-500 text-2xl" />
                  </div>
                  <div>
                  <h3 className="text-xl font-semibold mb-2">Consistency Everywhere</h3>
                  <p className="text-gray-600">Eliminate "it works on my machine" problems with containers that run the same way in every environment.</p>
                  </div>
                </div>

              <div className="flex p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="mr-4">
                  <FaCloudUploadAlt className="text-blue-500 text-2xl" />
                  </div>
                  <div>
                  <h3 className="text-xl font-semibold mb-2">Faster Deployments</h3>
                  <p className="text-gray-600">Accelerate your deployment cycles with lightweight containers that start in seconds instead of minutes.</p>
                </div>
              </div>

              <div className="flex p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="mr-4">
                  <FaLock className="text-blue-500 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Enhanced Security</h3>
                  <p className="text-gray-600">Improve application isolation and implement security controls at the container level for better protection.</p>
                </div>
                </div>
              
              <div className="flex p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="mr-4">
                  <FaNetworkWired className="text-blue-500 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Microservices Ready</h3>
                  <p className="text-gray-600">Enable microservices architectures with independent, loosely coupled services that can be deployed and scaled individually.</p>
                </div>
              </div>
            </div>
          </>
        )
      }
    ],
    technologiesTitle: "Technologies We Use",
    technologiesDescription: "We leverage industry-leading container technologies and orchestration platforms to deliver robust solutions.",
    technologiesUsed: [
      "Docker",
      "Kubernetes",
      "Amazon EKS",
      "Azure AKS",
      "Google GKE",
      "Docker Swarm",
      "Helm",
      "Istio"
    ],
    caseStudy: {
      title: "Containerization Transformation",
      client: "Global Retail Company",
      industry: "Retail",
      challenge: "A leading retail company with hundreds of applications was struggling with inconsistent deployments, slow release cycles, and inefficient infrastructure utilization. Their monolithic architecture limited scalability and made updates risky.",
      solution: "CloudDigify implemented a comprehensive containerization strategy, converting key applications to microservices running in Docker containers. We deployed Kubernetes for orchestration and implemented CI/CD pipelines for automated testing and deployment.",
      results: [
        "Deployment time reduced from days to minutes with automated CI/CD",
        "Infrastructure costs reduced by 45% through better resource utilization",
        "Application release cycles shortened from months to weeks",
        "Zero-downtime deployments achieved for critical customer-facing applications"
      ]
    },
    ctaTitle: "Ready to Modernize with Containers?",
    ctaDescription: "Contact our team today to learn how containerization can help your organization improve deployment efficiency and application management.",
    finalCta: "Contact Us"
  };

  return <PageTemplate pageInfo={pageInfo} pageType="service" />;
};

export default Containerization; 