import React from 'react';
import { FaGraduationCap, FaLaptopCode, FaUsersCog, FaChalkboardTeacher, FaCertificate, FaCloudversify } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PageTemplate from '../templates/PageTemplate';

const Training = () => {
  // Training courses
  const courses = [
    { 
      icon: <FaCloudversify />,
      title: 'AWS Cloud Fundamentals', 
      description: 'Master the basics of AWS cloud services, architecture, security, and pricing models.',
      duration: '3 days',
      level: 'Beginner',
      featured: true
    },
    { 
      icon: <FaLaptopCode />,
      title: 'Azure Administrator Certification', 
      description: 'Comprehensive training for managing and implementing Azure infrastructure solutions.',
      duration: '5 days',
      level: 'Intermediate',
      featured: false
    },
    { 
      icon: <FaUsersCog />,
      title: 'Google Cloud Professional', 
      description: 'Advanced course covering GCP architecture patterns, solutions design, and best practices.',
      duration: '4 days',
      level: 'Advanced',
      featured: false
    },
    { 
      icon: <FaChalkboardTeacher />,
      title: 'Cloud DevOps Engineer', 
      description: 'Learn CI/CD pipelines, infrastructure automation, and DevOps methodologies.',
      duration: '5 days',
      level: 'Intermediate',
      featured: true
    },
    { 
      icon: <FaCertificate />,
      title: 'Kubernetes Administration', 
      description: 'Comprehensive training on deploying, managing, and scaling containerized applications with Kubernetes.',
      duration: '4 days',
      level: 'Advanced',
      featured: false
    },
    { 
      icon: <FaGraduationCap />,
      title: 'Cloud Security Specialist', 
      description: 'Learn to implement security controls, compliance frameworks, and threat protection in cloud environments.',
      duration: '3 days',
      level: 'Intermediate',
      featured: true
    }
  ];

  // Training categories
  const categories = [
    { name: 'AWS Courses', count: 12 },
    { name: 'Azure Courses', count: 8 },
    { name: 'Google Cloud Courses', count: 6 },
    { name: 'DevOps & CI/CD', count: 7 },
    { name: 'Security', count: 5 },
    { name: 'Data & Analytics', count: 4 }
  ];

  // Upcoming sessions
  const upcomingSessions = [
    {
      title: "AWS Cloud Fundamentals",
      date: "June 15-17, 2023",
      location: "Virtual",
      seats: "5 seats left"
    },
    {
      title: "Azure Administrator Certification",
      date: "June 22-26, 2023",
      location: "San Francisco",
      seats: "3 seats left"
    },
    {
      title: "Cloud DevOps Engineer",
      date: "July 10-14, 2023",
      location: "Virtual",
      seats: "8 seats left"
    },
    {
      title: "Kubernetes Administration",
      date: "July 24-27, 2023",
      location: "New York",
      seats: "6 seats left"
    }
  ];

  const pageInfo = {
    title: "Build Cloud Expertise",
    description: "Advance your career with our industry-leading cloud training programs. From foundational concepts to advanced certifications, our expert-led courses provide hands-on experience with the latest cloud technologies.",
    icon: <FaGraduationCap />,
    heroBackground: "from-blue-600 via-indigo-600 to-blue-800",

    // Default text configurations
    defaultCtaText: "View Schedule",
    defaultOverviewTitle: "Our Training Programs",
    defaultBenefitsTitle: "Training Benefits",
    defaultSidebarTitle: "Course Categories",
    defaultSecondaryCta: "Request Custom Training",
    defaultFeaturesTitle: "Featured Courses",
    defaultFeaturesDescription: "Expert-led courses designed to help you master cloud technologies",
    defaultCtaTitle: "Ready to Enhance Your Cloud Skills?",
    defaultCtaDescription: "Join thousands of professionals who have accelerated their careers with our training programs.",
    defaultFinalCta: "Get Started",

    // Custom links
    ctaLink: "/schedule",
    secondaryCtaLink: "/custom-training",
    finalCtaLink: "/courses",

    // Overview section
    overviewTitle: "Our Training Programs",
    overviewDescription1: "Expert-led courses designed to help you master cloud technologies and advance your career.",
    overviewDescription2: "Choose from a variety of courses ranging from foundational concepts to advanced certifications.",

    // Benefits section
    benefitsTitle: "Why Choose Our Training",
    benefits: [
      "Expert Instructors - Learn from certified cloud professionals with extensive real-world experience",
      "Hands-on Labs - Practice with real cloud environments and solve practical challenges",
      "Certification Preparation - Comprehensive materials designed to help you pass certification exams",
      "Small Class Sizes - Personalized attention and interactive learning experience",
      "Flexible Learning Options - Choose from in-person, virtual, or self-paced training formats",
      "Post-Training Support - Access to resources and community forums after course completion"
    ],

    // Sidebar (Course Categories)
    sidebarTitle: "Course Categories",
    approachPoints: categories.map(cat => `${cat.name} (${cat.count} courses)`),

    // Features section (Featured Courses)
    featuresTitle: "Featured Courses",
    featuresDescription: "Our most popular and comprehensive training programs",
    features: courses.filter(course => course.featured).map(course => ({
      title: course.title,
      description: course.description,
      icon: course.icon,
      features: [
        `Duration: ${course.duration}`,
        `Level: ${course.level}`,
        'Hands-on Labs Included',
        'Certification Path Available'
      ]
    })),

    // Additional sections
    additionalSections: [
      {
        content: (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Instructors",
                description: "Learn from certified cloud professionals with extensive real-world experience",
                icon: <FaChalkboardTeacher className="text-blue-600 text-4xl mb-4" />
              },
              {
                title: "Hands-on Labs",
                description: "Practice with real cloud environments and solve practical challenges",
                icon: <FaLaptopCode className="text-blue-600 text-4xl mb-4" />
              },
              {
                title: "Certification Preparation",
                description: "Comprehensive materials designed to help you pass certification exams",
                icon: <FaCertificate className="text-blue-600 text-4xl mb-4" />
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
                {benefit.icon}
                <h3 className="text-xl font-bold mb-3 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        )
      },
      {
        content: (
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Upcoming Training Sessions</h3>
            <div className="space-y-6">
              {upcomingSessions.map((session, index) => (
                <div 
                  key={index}
                  className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors border border-gray-100"
                >
                  <div className="mb-4 md:mb-0">
                    <h4 className="font-bold text-gray-800">{session.title}</h4>
                    <div className="text-sm text-gray-600 mt-1">
                      <span className="inline-block mr-4">{session.date}</span>
                      <span>{session.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-blue-600 font-medium mr-4">{session.seats}</span>
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition">
                      Register
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      }
    ],

    // CTA section
    ctaTitle: "Ready to Enhance Your Cloud Skills?",
    ctaDescription: "Join thousands of professionals who have accelerated their careers with our training programs.",
    finalCta: "Explore Courses",

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

export default Training; 