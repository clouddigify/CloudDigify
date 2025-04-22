import React from 'react';
import { FaQuoteLeft, FaStar, FaUserCircle, FaComments } from 'react-icons/fa';
import PageTemplate from '../templates/PageTemplate';

// Client testimonials data
const testimonials = [
  {
    quote: "CloudDigify transformed our infrastructure with zero downtime and perfect execution. Their team's expertise in cloud migration was invaluable to our business transition.",
    author: "Sumit Gupta",
    position: "CTO",
    rating: 5,
    image: ""
  },
  {
    quote: "Their team provided amazing support for our migration. We're obliged for their effort and expertise. The ongoing maintenance service has been flawless for over a year now.",
    author: "Anuj Kumar",
    position: "IT Director",
    rating: 5,
    image: ""
  },
  {
    quote: "We appreciate their prompt response to our issues. As usual, they did wonders with our cloud setup. Their security implementation exceeded our expectations.",
    author: "Rajiv Goyal",
    position: "CEO",
    rating: 5,
    image: ""
  },
  {
    quote: "The DevOps automation implemented by CloudDigify reduced our deployment time by 70%. Their team's technical knowledge and commitment to excellence is remarkable.",
    author: "Priya Sharma",
    position: "VP of Engineering",
    rating: 5,
    image: ""
  },
  {
    quote: "CloudDigify's containerization solutions helped us scale our applications effortlessly. Their team was responsive and provided valuable insights throughout the project.",
    author: "Vikram Singh",
    position: "Head of IT Operations",
    rating: 5,
    image: ""
  }
];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative">
    <div className="absolute top-6 left-6 text-blue-100">
      <FaQuoteLeft className="h-16 w-16 opacity-20" />
    </div>
    
    <div className="flex mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <FaStar key={i} className="text-yellow-400 h-5 w-5" />
      ))}
    </div>
    
    <p className="mb-6 text-gray-700 relative z-10">"{testimonial.quote}"</p>
    
    <div className="flex items-center">
      {testimonial.image ? (
        <img 
          src={testimonial.image} 
          alt={testimonial.author} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
      ) : (
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
          <FaUserCircle className="h-8 w-8 text-blue-400" />
        </div>
      )}
      <div>
        <p className="font-bold text-gray-800">{testimonial.author}</p>
        <p className="text-sm text-gray-600">{testimonial.position}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const pageInfo = {
    title: "Client Testimonials",
    description: "Don't just take our word for it - see what our clients have to say about our cloud services and digital transformation solutions.",
    icon: <FaComments />,
    heroBackground: "from-blue-600 via-indigo-600 to-blue-800",

    // Default text configurations
    defaultCtaText: "Share Your Story",
    defaultOverviewTitle: "What Our Clients Say",
    defaultBenefitsTitle: "Client Success Stories",
    defaultSidebarTitle: "Success Metrics",
    defaultFeaturesTitle: "Featured Testimonials",
    defaultCtaDescription: "Join our growing list of satisfied clients",
    defaultFeaturesDescription: "Hear from our valued clients about their experience with CloudDigify",

    // Overview section
    overviewTitle: "What Our Clients Say",
    overviewDescription1: "Our clients' success stories speak volumes about our commitment to excellence and innovation in cloud solutions.",
    overviewDescription2: "From startups to enterprises, we've helped organizations across industries achieve their digital transformation goals.",

    // Benefits section (Client success metrics)
    benefitsTitle: "Client Success Stories",
    benefits: [
      "100% Client Satisfaction Rate",
      "70% Average Reduction in Deployment Time",
      "99.99% System Uptime Achievement",
      "24/7 Technical Support Response",
      "Zero Data Loss During Migrations",
      "50+ Successful Cloud Transformations"
    ],

    // Sidebar content (Success metrics)
    sidebarTitle: "Success Metrics",
    approachPoints: [
      "Average Cost Reduction: 40%",
      "Infrastructure Efficiency: 75%",
      "Client Retention Rate: 95%",
      "Support Response Time: <1 hour",
      "Project Delivery: On-time",
      "Client Satisfaction: 100%"
    ],

    // Features section (Featured testimonials)
    featuresTitle: "Featured Testimonials",
    featuresDescription: "Read what our clients have to say about their experience with CloudDigify",
    features: testimonials.slice(0, 3).map(testimonial => ({
      title: testimonial.author,
      description: testimonial.quote,
      icon: <FaQuoteLeft />,
      subtitle: testimonial.position
    })),

    // Additional sections
    additionalSections: [
      {
        content: (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        )
      }
    ],

    // Section visibility controls
    showCta: true,
    showBenefits: true,
    showSidebar: true,
    showFeatures: true,
    showFeaturesDescription: true,
    showFinalCta: true,

    // Final CTA
    finalCtaTitle: "Ready to Transform Your Business?",
    finalCtaDescription: "Join our growing list of satisfied clients and experience the CloudDigify difference.",
    finalCtaText: "Get Started Today"
  };

  return <PageTemplate pageInfo={pageInfo} pageType="content" />;
};

export default Testimonials; 