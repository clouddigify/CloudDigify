import React from 'react';
import { FaLinkedin, FaTwitter, FaEnvelope, FaUsers } from 'react-icons/fa';
import PageTemplate from '../templates/PageTemplate';
import LazyImage from '../common/LazyImage';

const Leadership = () => {
  const leaders = [
    {
      name: 'Chirag Malhotra',
      title: 'Co-Founder & CEO',
      email: 'chirag@clouddigify.com',
      bio: 'Chirag brings over 15 years of experience in cloud technologies and digital transformation. His vision drives our company strategy and innovation roadmap.',
      image: '/images/leaders/chirag-malhotra.jpg', // Replace with actual image path
      social: {
        linkedin: 'https://linkedin.com/in/chiragmalhotra',
        twitter: 'https://twitter.com/chiragmalhotra'
      }
    }
  ];

  const pageInfo = {
    title: "Our Leadership Team",
    description: "Meet the visionaries behind CloudDigify who are driving innovation in cloud services and digital transformation",
    icon: <FaUsers />,
    heroBackground: "from-blue-600 via-indigo-600 to-blue-800",

    // Default text configurations
    defaultCtaText: "Join Our Team",
    defaultOverviewTitle: "Leadership Team",
    defaultBenefitsTitle: "Our Values",
    defaultSidebarTitle: "Quick Facts",
    defaultSecondaryCta: "Contact Leadership",
    defaultFeaturesTitle: "Executive Team",
    defaultFeaturesDescription: "Meet our experienced leadership team",
    defaultCtaTitle: "Ready to Work With Us?",
    defaultCtaDescription: "Join our team of innovators and cloud technology experts.",
    defaultFinalCta: "View Careers",

    // Custom links
    ctaLink: "/careers",
    secondaryCtaLink: "/contact",
    finalCtaLink: "/careers",

    // Overview section
    overviewTitle: "Leadership Team",
    overviewDescription1: "Our leadership team brings decades of combined experience in cloud technology, digital transformation, and business innovation.",
    overviewDescription2: "Together, they guide our company's vision and ensure we deliver exceptional value to our clients.",

    // Benefits section (Company Values)
    benefitsTitle: "Our Values",
    benefits: [
      "Innovation First - Constantly pushing boundaries in cloud technology",
      "Client Success - Dedicated to delivering exceptional results",
      "Technical Excellence - Maintaining highest standards in delivery",
      "Collaborative Spirit - Working together to achieve greatness",
      "Continuous Learning - Always evolving and improving",
      "Integrity & Trust - Building lasting relationships"
    ],

    // Sidebar
    sidebarTitle: "Quick Facts",
    approachPoints: [
      "Founded in 2018",
      "100+ Enterprise Clients",
      "Global Presence",
      "Award-winning Team",
      "Industry Recognition",
      "Certified Experts"
    ],

    // Features section (Leadership Profiles)
    featuresTitle: "Executive Team",
    featuresDescription: "Meet the visionaries leading CloudDigify's innovation and growth",
    features: leaders.map(leader => ({
      title: leader.name,
      description: leader.bio,
      subtitle: leader.title,
      features: [
        `Email: ${leader.email}`,
        'Industry Expert',
        'Cloud Technology Pioneer',
        'Digital Transformation Leader'
      ]
    })),

    // Additional sections
    additionalSections: [
      {
        content: (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {leaders.map((leader, index) => (
              <div key={leader.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 bg-gray-200">
                  {leader.image ? (
                    <LazyImage
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                      width={400}
                      height={400}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-blue-100">
                      <span className="text-5xl font-bold text-blue-300">
                        {leader.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{leader.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{leader.title}</p>
                  
                  <p className="text-gray-600 mb-6">{leader.bio}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                      {leader.social.linkedin && (
                        <a 
                          href={leader.social.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-blue-600 transition-colors"
                        >
                          <FaLinkedin className="h-5 w-5" />
                        </a>
                      )}
                      
                      {leader.social.twitter && (
                        <a 
                          href={leader.social.twitter} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-blue-400 transition-colors"
                        >
                          <FaTwitter className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                    
                    <a 
                      href={`mailto:${leader.email}`}
                      className="text-blue-600 hover:text-blue-800 transition-colors flex items-center"
                    >
                      <FaEnvelope className="h-4 w-4 mr-1" />
                      <span className="text-sm">Contact</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      }
    ],

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

export default Leadership; 