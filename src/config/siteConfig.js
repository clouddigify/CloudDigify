import { 
  FaCloud, 
  FaIndustry, 
  FaGraduationCap, 
  FaLightbulb, 
  FaBlog, 
  FaPhone,
  FaInfoCircle,
  FaBook,
  FaFileContract,
  FaShieldAlt
} from 'react-icons/fa';

export const siteConfig = {
  // Main Navigation Structure
  navigation: {
    main: [
      {
        title: 'About',
        path: '/about',
        icon: FaInfoCircle
      },
      {
        title: 'Services',
        path: '/services',
        icon: FaCloud
      },
      {
        title: 'Industries',
        path: '/industries',
        icon: FaIndustry
      },
      {
        title: 'Training',
        path: '/training-services',
        icon: FaGraduationCap
      },
      {
        title: 'Use Cases',
        path: '/use-cases',
        icon: FaLightbulb
      },
      {
        title: 'Blog',
        path: '/blogs',
        icon: FaBlog
      },
      {
        title: 'Contact',
        path: '/contact',
        icon: FaPhone
      }
    ],
    subpages: {
      services: [],
      industries: [],
      training: [],
      useCases: []
    }
  },

  // Page Configurations
  pages: {
    home: {
      title: 'Cloud Solutions for Digital Success',
      description: 'Transform your business with our comprehensive cloud services and solutions',
      type: 'home'
    },
    about: {
      title: 'About Us',
      description: 'Leading the way in cloud innovation and digital transformation',
      type: 'about',
      breadcrumbs: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' }
      ]
    },
    services: {
      title: 'Our Services',
      description: 'Comprehensive cloud solutions tailored to your needs',
      type: 'service',
      breadcrumbs: [
        { title: 'Home', path: '/' },
        { title: 'Services', path: '/services' }
      ]
    },
    industries: {
      title: 'Industries We Serve',
      description: 'Specialized cloud solutions for various industries',
      type: 'industry',
      breadcrumbs: [
        { title: 'Home', path: '/' },
        { title: 'Industries', path: '/industries' }
      ]
    },
    training: {
      title: 'Training Services',
      description: 'Expert-led cloud technology training programs',
      type: 'training',
      breadcrumbs: [
        { title: 'Home', path: '/' },
        { title: 'Training', path: '/training-services' }
      ]
    },
    useCases: {
      title: 'Success Stories',
      description: 'Real-world implementations and outcomes',
      type: 'use-case',
      breadcrumbs: [
        { title: 'Home', path: '/' },
        { title: 'Use Cases', path: '/use-cases' }
      ]
    },
    blogs: {
      title: 'Blog',
      description: 'Insights and updates from our cloud experts',
      type: 'blog',
      breadcrumbs: [
        { title: 'Home', path: '/' },
        { title: 'Blog', path: '/blogs' }
      ]
    },
    contact: {
      title: 'Contact Us',
      description: 'Get in touch with our cloud experts',
      type: 'contact',
      breadcrumbs: [
        { title: 'Home', path: '/' },
        { title: 'Contact', path: '/contact' }
      ]
    },
    legal: {
      terms: {
        title: 'Terms and Conditions',
        description: 'Our terms of service and usage guidelines',
        type: 'legal',
        breadcrumbs: [
          { title: 'Home', path: '/' },
          { title: 'Terms', path: '/terms' }
        ]
      },
      privacy: {
        title: 'Privacy Policy',
        description: 'How we protect and handle your data',
        type: 'legal',
        breadcrumbs: [
          { title: 'Home', path: '/' },
          { title: 'Privacy', path: '/privacy' }
        ]
      }
    }
  },

  // Common Settings
  company: {
    name: 'CloudDigify',
    tagline: 'Transforming Businesses Through Cloud Innovation',
    contact: {
      email: 'info@clouddigify.com',
      phone: '+1 (555) 123-4567',
      address: '123 Cloud Street, Tech City, TC 12345'
    },
    social: {
      linkedin: 'https://linkedin.com/company/clouddigify',
      twitter: 'https://twitter.com/clouddigify',
      facebook: 'https://facebook.com/clouddigify'
    }
  }
};

export default siteConfig; 