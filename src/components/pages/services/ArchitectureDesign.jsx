import React from 'react';
import PageTemplate from '../../templates/PageTemplate';
import { FaCloudversify, FaServer, FaCogs, FaSitemap, FaRegLightbulb } from 'react-icons/fa';

const ArchitectureDesign = () => {
  const pageInfo = {
    title: "Cloud Architecture Design",
    description: "Build robust, scalable, and secure cloud infrastructure with our expert architecture design services tailored to your business needs.",
    icon: <FaCloudversify />,
    heroBackground: "from-indigo-700 to-purple-800",
    overviewTitle: "Expert Cloud Architecture Design",
    overviewDescription1: "Cloud architecture design is the foundation of any successful cloud implementation. A well-designed architecture ensures your applications are scalable, resilient, secure, and cost-effective in the cloud.",
    overviewDescription2: "Our experienced cloud architects work closely with your team to understand your business requirements, technical constraints, and future growth plans to design a cloud architecture that aligns with your goals.",
    benefits: [
      "Optimized performance and scalability for your applications",
      "Enhanced security and compliance with industry standards",
      "Cost-efficient resource allocation and utilization",
      "Improved reliability and disaster recovery capabilities",
      "Future-proof design that supports business growth"
    ],
    sidebarTitle: "Our Design Approach",
    approachPoints: [
      "Business-driven architecture",
      "Cloud-native best practices",
      "Secure by design principles",
      "Cost optimization strategies",
      "Well-Architected frameworks"
    ],
    secondaryCta: "Schedule Architecture Consultation",
    featuresTitle: "Our Architecture Design Services",
    featuresDescription: "Comprehensive cloud architecture design services to build secure, scalable, and cost-effective solutions.",
    features: [
      {
        title: "Cloud Foundation Design",
        description: "Design of base cloud infrastructure including network topology, account structure, identity and access management, and governance frameworks."
      },
      {
        title: "Application Architecture",
        description: "Design of application-specific architectures leveraging cloud-native services, microservices, serverless, and container technologies."
      },
      {
        title: "Migration Architecture",
        description: "Design of transition architectures for moving existing applications and infrastructure to the cloud with minimal disruption."
      },
      {
        title: "Security Architecture",
        description: "Design of comprehensive security controls, identity models, data protection strategies, and compliance frameworks for your cloud environment."
      }
    ],
    additionalSections: [
      {
        content: (
          <>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Architecture Design Process</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We follow a structured and collaborative approach to cloud architecture design that ensures alignment with your business goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-lg font-semibold mb-2">Discovery</h3>
                <p className="text-gray-600">Understanding your business objectives, technical requirements, and existing infrastructure.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-lg font-semibold mb-2">Design</h3>
                <p className="text-gray-600">Creating high-level and detailed architecture designs with documentation and diagrams.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-lg font-semibold mb-2">Validation</h3>
                <p className="text-gray-600">Validating the design through reviews, proof of concepts, and architectural assessments.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-lg font-semibold mb-2">Implementation</h3>
                <p className="text-gray-600">Supporting the implementation of the architecture with guidance and best practices.</p>
              </div>
            </div>
          </>
        )
      }
    ],
    technologiesTitle: "Cloud Platforms & Technologies",
    technologiesDescription: "We design architectures across all major cloud platforms and technologies to meet your specific needs.",
    technologiesUsed: [
      "Amazon Web Services (AWS)",
      "Microsoft Azure",
      "Google Cloud Platform",
      "Oracle Cloud",
      "VMware Cloud",
      "Kubernetes",
      "Docker",
      "Serverless",
      "Microservices",
      "Terraform",
      "CloudFormation",
      "Pulumi"
    ],
    caseStudy: {
      title: "Financial Institution Modernizes Core Banking Platform",
      client: "Leading Regional Bank",
      industry: "Financial Services",
      challenge: "A mid-sized regional bank needed to modernize their legacy core banking system that was running on outdated on-premises infrastructure. They faced challenges with scalability during peak periods, high maintenance costs, and difficulties implementing new features and integrations quickly enough to remain competitive.",
      solution: "CloudDigify designed a cloud-native architecture for their core banking platform using a microservices approach. We created a multi-account AWS architecture with dedicated environments for development, testing, and production. The solution included a secure networking design, real-time data processing with Kafka, containerized applications with EKS, and a CI/CD pipeline for automated deployments. We also implemented comprehensive security controls to ensure compliance with financial regulations.",
      results: [
        "97% reduction in infrastructure provisioning time from weeks to hours",
        "80% improvement in application performance during peak periods",
        "65% reduction in infrastructure costs through right-sizing and auto-scaling",
        "Ability to release new features 4x faster with CI/CD automation"
      ]
    },
    ctaTitle: "Ready to Design Your Cloud Architecture?",
    ctaDescription: "Contact our team of expert cloud architects to discuss your needs and schedule an architecture workshop.",
    finalCta: "Schedule Architecture Workshop"
  };

  return <PageTemplate pageInfo={pageInfo} pageType="service" />;
};

export default ArchitectureDesign; 