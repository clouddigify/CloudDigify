import React from 'react';
import ServiceTemplate from '../../templates/ServiceTemplate';
import { FaShieldAlt, FaHistory, FaCloudDownloadAlt, FaSyncAlt, FaServer } from 'react-icons/fa';

const DisasterRecovery = () => {
  const serviceInfo = {
    title: "Disaster Recovery",
    description: "Protect your business from disruption with comprehensive cloud disaster recovery solutions to ensure business continuity.",
    icon: <FaShieldAlt />,
    heroBackground: "from-purple-700 to-indigo-900",
    overviewTitle: "Enterprise-Grade Disaster Recovery",
    overviewParagraphs: [
      "In today's digital business environment, downtime and data loss can have severe consequences. Disaster recovery planning is essential to minimize the impact of unplanned outages and ensure quick recovery from disruptions.",
      "Our cloud-based disaster recovery solutions offer robust protection for your business-critical systems and data, with flexible recovery options tailored to your specific business requirements and budget constraints."
    ],
    benefits: [
      "Minimized downtime during disruptions to maintain business operations",
      "Protection against data loss with reliable backup and recovery systems",
      "Reduced financial impact from unplanned outages",
      "Enhanced compliance with industry regulations and standards",
      "Peace of mind with tested and validated recovery procedures"
    ],
    sidebarTitle: "Our DR Approach",
    approach: [
      "Business impact analysis",
      "Recovery time objective (RTO) planning",
      "Recovery point objective (RPO) planning",
      "Multi-region DR architecture",
      "Regular DR testing and validation"
    ],
    sidebarCta: "Schedule DR Assessment",
    featuresTitle: "Our Disaster Recovery Services",
    featuresSubtitle: "Comprehensive disaster recovery solutions to protect your business from disruptions.",
    features: [
      {
        title: "DR Assessment & Planning",
        description: "Evaluate your current disaster recovery capabilities, identify risks, and develop a comprehensive DR plan aligned with your business requirements."
      },
      {
        title: "Cloud-Based DR Implementation",
        description: "Implement robust DR solutions leveraging cloud platforms for cost-effective, scalable protection with flexible recovery options."
      },
      {
        title: "Backup & Recovery Systems",
        description: "Deploy modern backup and recovery systems with automated processes, encrypted storage, and quick restoration capabilities."
      },
      {
        title: "DR Testing & Validation",
        description: "Conduct regular DR testing to validate recovery procedures, identify gaps, and ensure your systems can be restored within defined RTO/RPO targets."
      }
    ],
    middleSection: (
      <>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Understanding Disaster Recovery Metrics</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Key metrics that define your disaster recovery capabilities and guide our solution design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <span className="bg-purple-100 text-purple-800 p-2 rounded-full mr-3">RTO</span>
              Recovery Time Objective
            </h3>
            <p className="text-gray-700 mb-4">
              The maximum acceptable time it takes to restore business operations after a disruption. RTO determines how quickly your systems need to be back online.
            </p>
            <div className="bg-gray-50 p-4 rounded">
              <p className="text-sm text-gray-600">
                <strong>Example:</strong> An RTO of 4 hours means your critical systems must be restored within 4 hours of an outage to avoid unacceptable business impact.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-500">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <span className="bg-indigo-100 text-indigo-800 p-2 rounded-full mr-3">RPO</span>
              Recovery Point Objective
            </h3>
            <p className="text-gray-700 mb-4">
              The maximum acceptable amount of data loss measured in time. RPO determines how frequently you need to back up your data.
            </p>
            <div className="bg-gray-50 p-4 rounded">
              <p className="text-sm text-gray-600">
                <strong>Example:</strong> An RPO of 15 minutes means you can lose a maximum of 15 minutes of data during a recovery, requiring backups at least every 15 minutes.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="text-purple-600 text-2xl mb-4">
              <FaCloudDownloadAlt />
            </div>
            <h3 className="text-lg font-semibold mb-2">Backup as a Service</h3>
            <p className="text-gray-600">
              Cloud-based backup solutions that automatically protect your data with secure, off-site storage and flexible retention policies.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="text-purple-600 text-2xl mb-4">
              <FaServer />
            </div>
            <h3 className="text-lg font-semibold mb-2">Warm Standby</h3>
            <p className="text-gray-600">
              Maintain a scaled-down but ready-to-scale-up copy of your production environment for quicker recovery with minimal data loss.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="text-purple-600 text-2xl mb-4">
              <FaSyncAlt />
            </div>
            <h3 className="text-lg font-semibold mb-2">Multi-Region Recovery</h3>
            <p className="text-gray-600">
              Distribute your applications across multiple geographic regions to provide continuous availability even during regional outages.
            </p>
          </div>
        </div>
      </>
    ),
    technologiesTitle: "DR Technologies & Tools",
    technologiesSubtitle: "We leverage industry-leading technologies to implement robust disaster recovery solutions.",
    technologiesUsed: [
      "AWS Backup",
      "Azure Site Recovery",
      "Google Cloud Backup",
      "VMware Site Recovery",
      "Veeam",
      "Commvault",
      "Zerto",
      "Rubrik",
      "Cohesity",
      "Veritas",
      "CloudEndure",
      "Terraform Disaster Recovery"
    ],
    caseStudy: {
      title: "Manufacturing Company Achieves Resilient Operations",
      client: "Global Manufacturing Enterprise",
      industry: "Manufacturing",
      challenge: "A manufacturing company with operations across multiple countries was running critical production systems without adequate disaster recovery protection. They had experienced a significant outage that disrupted manufacturing operations for 3 days, resulting in substantial financial losses and customer dissatisfaction. Their existing backup systems were outdated, manual, and unable to meet their recovery requirements.",
      solution: "CloudDigify implemented a comprehensive cloud-based disaster recovery solution across their global operations. We conducted a detailed business impact analysis to identify critical systems and their recovery requirements. Based on this analysis, we designed and implemented an AWS-based DR solution with cross-region replication, automated backup systems, and orchestrated recovery procedures. We also established regular DR testing protocols and documentation.",
      results: [
        "Reduced recovery time from days to under 2 hours for critical systems",
        "Improved data protection with 15-minute RPO, down from 24 hours",
        "Successfully validated DR procedures through quarterly testing exercises",
        "Achieved compliance with industry regulations and customer requirements",
        "Implemented cost-effective solution that saved 40% compared to traditional DR approaches"
      ]
    },
    ctaTitle: "Ready to Protect Your Business?",
    ctaDescription: "Contact our disaster recovery experts today to assess your current readiness and develop a comprehensive DR plan.",
    ctaButtonText: "Schedule DR Consultation"
  };

  return <ServiceTemplate serviceInfo={serviceInfo} />;
};

export default DisasterRecovery; 