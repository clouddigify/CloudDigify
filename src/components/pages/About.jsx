import React from 'react';
import { FaCloudUploadAlt, FaUsers, FaAward, FaRocket, FaChartLine, FaGlobe } from 'react-icons/fa';
import PageTemplate from '../templates/PageTemplate';

const About = () => {
  const pageInfo = {
    title: "About CloudDigify",
    description: "At CloudDigify, we're passionate about helping businesses harness the full potential of cloud technologies. Our team of experts delivers innovative, secure, and scalable solutions that drive digital transformation and business growth.",
    icon: <FaCloudUploadAlt />,
    heroBackground: "from-blue-600 via-indigo-600 to-blue-800",
    
    // Default text configurations for content pages
    defaultCtaText: "Join Our Team",
    defaultOverviewTitle: "Our Story",
    defaultBenefitsTitle: "Core Values",
    defaultSidebarTitle: "What Sets Us Apart",
    defaultSecondaryCta: "View Open Positions",
    defaultFeaturesTitle: "Our Leadership Team",
    defaultFeaturesDescription: "Meet the experts guiding our vision and strategy",
    defaultCtaTitle: "Want to Join Our Team?",
    defaultCtaDescription: "Join us in our mission to transform businesses through innovative cloud solutions.",
    defaultFinalCta: "View Career Opportunities",

    // Custom links
    ctaLink: "/careers",
    secondaryCtaLink: "/careers",
    finalCtaLink: "/careers",
    
    // Content sections
    overviewTitle: "Our Story",
    overviewDescription1: "Founded in 2015, CloudDigify began with a simple mission: to help businesses leverage the power of cloud technologies to drive innovation, efficiency, and growth. Over the years, we've grown from a small team of passionate cloud experts to a global organization serving clients across industries.",
    overviewDescription2: "Today, we continue to push the boundaries of what's possible with cloud technology, constantly exploring new approaches and innovations to help our clients stay ahead in a rapidly evolving digital landscape.",
    
    benefitsTitle: "Core Values",
    benefits: [
      "Client-Centric Approach - Our clients' success drives everything we do",
      "Excellence in Delivery - We are committed to delivering the highest quality solutions",
      "Innovation - We constantly explore emerging technologies and methodologies",
      "Continuous Improvement - We believe in constantly enhancing our skills and processes",
      "Global Perspective - Our diverse team brings global insights and local expertise"
    ],
    
    sidebarTitle: "What Sets Us Apart",
    approachPoints: [
      "Deep cloud expertise across AWS, Azure, and GCP",
      "Industry-specific solutions tailored to your needs",
      "End-to-end services from assessment to implementation",
      "Continuous support and optimization",
      "Proven track record of successful transformations",
      "Focus on measurable business outcomes"
    ],
    
    featuresTitle: "Our Leadership Team",
    featuresDescription: "Meet the experts guiding our vision and strategy",
    features: [
      {
        title: "Sarah Johnson - CEO & Founder",
        description: "With over 15 years in cloud technology and business leadership, Sarah founded CloudDigify with a vision to transform how businesses leverage cloud solutions."
      },
      {
        title: "David Chen - CTO",
        description: "David brings 12+ years of experience in cloud architecture and software engineering, leading our technical innovations and ensuring excellence in delivery."
      },
      {
        title: "Miguel Rodriguez - Head of Cloud Operations",
        description: "Miguel's expertise in cloud infrastructure and operations ensures our clients receive reliable, secure, and optimized cloud environments."
      },
      {
        title: "Aisha Patel - Director of Client Success",
        description: "Aisha leads our client success team, ensuring every client achieves their business objectives through our cloud solutions."
      }
    ],
    
    // Custom sections for values, journey, and certifications
    additionalSections: [
      {
        content: (
          <>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                These principles guide everything we do, from how we develop solutions to how we interact with our clients and each other.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-lg text-blue-600 flex items-center justify-center mb-6 text-2xl">
                  <FaUsers />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Client-Centric Approach</h3>
                <p className="text-gray-600">Our clients' success drives everything we do. We listen carefully to understand your unique challenges and goals.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-lg text-blue-600 flex items-center justify-center mb-6 text-2xl">
                  <FaAward />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Excellence in Delivery</h3>
                <p className="text-gray-600">We are committed to delivering the highest quality solutions that exceed expectations and drive measurable results.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-lg text-blue-600 flex items-center justify-center mb-6 text-2xl">
                  <FaRocket />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Innovation</h3>
                <p className="text-gray-600">We constantly explore emerging technologies and methodologies to bring innovative solutions to our clients.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-lg text-blue-600 flex items-center justify-center mb-6 text-2xl">
                  <FaChartLine />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Continuous Improvement</h3>
                <p className="text-gray-600">We believe in constantly enhancing our skills, processes, and solutions to deliver increasing value.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-lg text-blue-600 flex items-center justify-center mb-6 text-2xl">
                  <FaGlobe />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Global Perspective</h3>
                <p className="text-gray-600">Our diverse team brings global insights and local expertise to solve complex business challenges.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-lg text-blue-600 flex items-center justify-center mb-6 text-2xl">
                  <FaCloudUploadAlt />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Cloud Excellence</h3>
                <p className="text-gray-600">We are dedicated to mastering cloud technologies and best practices to optimize your digital transformation.</p>
              </div>
            </div>
          </>
        )
      },
      {
        content: (
          <>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                Milestones that have shaped our growth and success over the years
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline Line - Hidden on mobile, visible on desktop */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 rounded-full"></div>
              
              {/* Timeline Items */}
              <div className="space-y-8 md:space-y-12">
                <div className="relative flex flex-col md:flex-row md:items-center">
                  {/* Circle in the middle of timeline - Hidden on mobile */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow"></div>
                  
                  {/* Year marker for mobile */}
                  <div className="md:hidden mb-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-bold w-fit">
                    2015
                  </div>
                  
                  {/* Content Box */}
                  <div className="w-full md:w-5/12 p-6 bg-white rounded-xl shadow-lg border border-gray-100 md:mr-auto">
                    {/* Desktop header with year and title */}
                    <div className="hidden md:flex items-center justify-between mb-4">
                      <span className="px-4 py-1 bg-blue-100 text-blue-800 rounded-full font-bold">2015</span>
                      <h3 className="text-xl font-bold text-gray-800">Company Founded</h3>
                    </div>
                    
                    {/* Mobile title (without year) */}
                    <h3 className="md:hidden text-xl font-bold text-gray-800 mb-2">Company Founded</h3>
                    
                    <p className="text-gray-600">CloudDigify was established with a vision to revolutionize cloud services.</p>
                  </div>
                </div>

                <div className="relative flex flex-col md:flex-row md:items-center">
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow"></div>
                  <div className="md:hidden mb-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-bold w-fit">
                    2017
                  </div>
                  <div className="w-full md:w-5/12 p-6 bg-white rounded-xl shadow-lg border border-gray-100 md:ml-auto">
                    <div className="hidden md:flex items-center justify-between mb-4">
                      <span className="px-4 py-1 bg-blue-100 text-blue-800 rounded-full font-bold">2017</span>
                      <h3 className="text-xl font-bold text-gray-800">Major Partnership</h3>
                    </div>
                    <h3 className="md:hidden text-xl font-bold text-gray-800 mb-2">Major Partnership</h3>
                    <p className="text-gray-600">Strategic partnership with leading cloud providers expanded our capabilities.</p>
                  </div>
                </div>

                <div className="relative flex flex-col md:flex-row md:items-center">
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow"></div>
                  <div className="md:hidden mb-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-bold w-fit">
                    2019
                  </div>
                  <div className="w-full md:w-5/12 p-6 bg-white rounded-xl shadow-lg border border-gray-100 md:mr-auto">
                    <div className="hidden md:flex items-center justify-between mb-4">
                      <span className="px-4 py-1 bg-blue-100 text-blue-800 rounded-full font-bold">2019</span>
                      <h3 className="text-xl font-bold text-gray-800">Global Expansion</h3>
                    </div>
                    <h3 className="md:hidden text-xl font-bold text-gray-800 mb-2">Global Expansion</h3>
                    <p className="text-gray-600">Opened new offices in Europe and Asia to serve our international clients.</p>
                  </div>
                </div>

                <div className="relative flex flex-col md:flex-row md:items-center">
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow"></div>
                  <div className="md:hidden mb-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-bold w-fit">
                    2021
                  </div>
                  <div className="w-full md:w-5/12 p-6 bg-white rounded-xl shadow-lg border border-gray-100 md:ml-auto">
                    <div className="hidden md:flex items-center justify-between mb-4">
                      <span className="px-4 py-1 bg-blue-100 text-blue-800 rounded-full font-bold">2021</span>
                      <h3 className="text-xl font-bold text-gray-800">Industry Recognition</h3>
                    </div>
                    <h3 className="md:hidden text-xl font-bold text-gray-800 mb-2">Industry Recognition</h3>
                    <p className="text-gray-600">Awarded "Cloud Service Provider of the Year" by Tech Innovators.</p>
                  </div>
                </div>

                <div className="relative flex flex-col md:flex-row md:items-center">
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow"></div>
                  <div className="md:hidden mb-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-bold w-fit">
                    2023
                  </div>
                  <div className="w-full md:w-5/12 p-6 bg-white rounded-xl shadow-lg border border-gray-100 md:mr-auto">
                    <div className="hidden md:flex items-center justify-between mb-4">
                      <span className="px-4 py-1 bg-blue-100 text-blue-800 rounded-full font-bold">2023</span>
                      <h3 className="text-xl font-bold text-gray-800">Service Expansion</h3>
                    </div>
                    <h3 className="md:hidden text-xl font-bold text-gray-800 mb-2">Service Expansion</h3>
                    <p className="text-gray-600">Launched new AI and ML-powered cloud solutions for enterprise clients.</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      },
      {
        content: (
          <>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-6">Our Certifications</h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                Recognized expertise in cloud technologies and methodologies
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <div className="bg-white p-5 md:p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 mb-3 md:mb-4 flex items-center justify-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl md:text-2xl">
                    <FaAward />
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-bold mb-2 text-gray-800">AWS Certified Solutions Architect</h3>
                <p className="text-xs md:text-sm text-gray-600">Professional-level certification validating expertise in designing distributed systems on AWS</p>
              </div>
              
              <div className="bg-white p-5 md:p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 mb-3 md:mb-4 flex items-center justify-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl md:text-2xl">
                    <FaAward />
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-bold mb-2 text-gray-800">Microsoft Azure Solutions Expert</h3>
                <p className="text-xs md:text-sm text-gray-600">Expert-level certification for professionals who design and implement Azure solutions</p>
              </div>
              
              <div className="bg-white p-5 md:p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 mb-3 md:mb-4 flex items-center justify-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl md:text-2xl">
                    <FaAward />
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-bold mb-2 text-gray-800">Google Cloud Professional Architect</h3>
                <p className="text-xs md:text-sm text-gray-600">Certification validating expertise in designing and managing solutions on Google Cloud</p>
              </div>
              
              <div className="bg-white p-5 md:p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 mb-3 md:mb-4 flex items-center justify-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl md:text-2xl">
                    <FaAward />
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-bold mb-2 text-gray-800">Certified Kubernetes Administrator</h3>
                <p className="text-xs md:text-sm text-gray-600">Certification demonstrating proficiency in Kubernetes deployment and management</p>
              </div>
            </div>
          </>
        )
      }
    ],
    
    // Case study section
    caseStudy: {
      title: "Our Impact: Client Success Story",
      client: "Major Financial Services Provider",
      industry: "Financial Services",
      challenge: "A leading financial services organization faced significant challenges in their legacy infrastructure, resulting in slow time-to-market, rising costs, and security concerns. They needed a comprehensive cloud transformation to stay competitive.",
      solution: "CloudDigify delivered a tailored cloud migration and modernization strategy, including infrastructure automation, application refactoring, and a secure cloud architecture. Our team provided full implementation support and ongoing managed services.",
      results: [
        "Reduced infrastructure costs by 40% through optimization",
        "Decreased time-to-market for new features from months to days",
        "Achieved 99.99% uptime for critical applications",
        "Enhanced security posture with zero major incidents since implementation"
      ]
    },
    
    ctaTitle: "Ready to Transform Your Business?",
    ctaDescription: "Let's discuss how CloudDigify can help your organization succeed in the cloud.",
    finalCta: "Get in Touch",
    
    // Section visibility controls
    showCta: true,
    showBenefits: true,
    showSidebar: true,
    showSecondaryCta: true,
    showFeatures: true,
    showFeaturesDescription: true,
    showFinalCta: true
  };

  return <PageTemplate pageInfo={pageInfo} pageType="content" />;
};

export default About; 