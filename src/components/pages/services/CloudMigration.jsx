import React from 'react';
import { FaCloudUploadAlt, FaServer, FaCode, FaShieldAlt, FaChartLine, FaSyncAlt } from 'react-icons/fa';
import PageTemplate from '../../templates/PageTemplate';

const CloudMigration = () => {
  // Define the page info object
  const pageInfo = {
    title: "Cloud Migration Services",
    description: "Seamlessly transition your applications and infrastructure to the cloud with our strategic, secure, and efficient migration services.",
    icon: <FaCloudUploadAlt className="text-blue-500" />,
    heroBackground: "from-blue-600 to-cyan-500",
    
    overviewTitle: "Cloud Migration Overview",
    overviewDescription1: "Moving to the cloud is a critical step in your digital transformation journey. Our cloud migration services provide a systematic approach to help you migrate applications, workloads, and data to the right cloud environment with minimal disruption to your business operations.",
    overviewDescription2: "We assess your current infrastructure, develop a tailored migration strategy, execute the migration with precision, and optimize your cloud environment post-migration to ensure maximum value from your investment.",
    
    benefits: [
      "Reduce capital expenses by shifting to a pay-as-you-go model",
      "Improve scalability and flexibility to meet changing business needs",
      "Enhance business continuity and disaster recovery capabilities",
      "Accelerate innovation and time-to-market for new initiatives",
      "Optimize IT resources and operational efficiency"
    ],
    
    sidebarTitle: "Our Migration Approach",
    approachPoints: [
      "Comprehensive discovery and assessment",
      "Strategic migration planning and roadmap",
      "Secure and efficient migration execution",
      "Post-migration optimization and management",
      "Knowledge transfer and team enablement"
    ],
    secondaryCta: "Schedule Migration Assessment",
    
    featuresTitle: "Our Cloud Migration Services",
    featuresDescription: "End-to-end migration services to ensure a seamless transition to your optimal cloud environment.",
    features: [
      {
        title: "Discovery & Assessment",
        description: "Comprehensive analysis of your current IT landscape, application dependencies, and infrastructure to develop an optimal migration strategy aligned with your business goals."
      },
      {
        title: "Migration Planning & Design",
        description: "Detailed migration roadmap including application prioritization, architecture design, security considerations, and timeline to minimize business disruption."
      },
      {
        title: "Migration Execution",
        description: "Expert implementation of the migration using proven methodologies and tools, with rigorous testing to ensure application functionality and performance."
      },
      {
        title: "Post-Migration Optimization",
        description: "Continuous optimization of your cloud environment for performance, security, and cost-efficiency, ensuring you maximize the benefits of cloud adoption."
      }
    ],
    
    technologiesTitle: "Migration Technologies & Tools",
    technologiesDescription: "We leverage industry-leading migration tools and technologies to ensure efficient, secure, and successful cloud migrations.",
    technologiesUsed: [
      "AWS Migration Hub",
      "Azure Migrate",
      "Google Migration Center",
      "CloudEndure",
      "VMware HCX",
      "Terraform",
      "Ansible",
      "Database Migration Services",
      "Application Discovery Service",
      "Cloud Formation",
      "Azure Resource Manager",
      "Kubernetes"
    ],
    
    caseStudy: {
      title: "Enterprise Cloud Migration Success Story",
      client: "Global Financial Services Company",
      industry: "Financial Services",
      challenge: "A leading financial services company with 200+ applications running on legacy infrastructure faced scalability challenges, high operational costs, and difficulty meeting regulatory compliance requirements. They needed a secure, efficient migration to the cloud without disrupting critical business operations.",
      solution: "CloudDigify implemented a phased migration approach, beginning with non-critical applications to build confidence. We established secure landing zones, refactored applications where appropriate, leveraged infrastructure as code for automation, and implemented comprehensive security controls. Our team provided continuous monitoring during migration to ensure zero data loss and minimal downtime.",
      results: [
        "Successfully migrated 200+ applications to the cloud over 12 months with zero critical incidents",
        "35% reduction in infrastructure costs within the first year",
        "60% improvement in application deployment speed",
        "Enhanced security posture with full regulatory compliance",
        "Improved disaster recovery capabilities with 99.99% availability"
      ]
    },
    
    ctaTitle: "Ready to Begin Your Cloud Migration Journey?",
    ctaDescription: "Our expert team is ready to help you navigate the complexities of cloud migration and ensure a smooth transition to your optimal cloud environment.",
    finalCta: "Start Your Migration Assessment"
  };

  return <PageTemplate pageInfo={pageInfo} pageType="service" />;
};

export default CloudMigration; 