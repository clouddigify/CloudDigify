import { 
  FaCloud, FaCode, FaDocker, FaGraduationCap, 
  FaLightbulb, FaChartLine, FaShieldAlt, 
  FaDatabase, FaMobileAlt, FaBrain, 
  FaServer, FaIndustry, FaProjectDiagram,
  FaCheckCircle, FaCubes
} from 'react-icons/fa';

export const menuConfig = {
  mainNav: [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { 
      title: 'Services', 
      path: '/services', 
      hasSubmenu: true,
      submenu: [
        {
          title: 'Cloud Services',
          path: '/services/cloud-services',
          icon: FaCloud,
          submenu: [
            { title: 'Cloud & Infrastructure Services', path: '/services/cloud-infrastructure' },
            { title: 'Cloud Migration', path: '/services/cloud-migration' },
            { title: 'Cloud Optimization', path: '/services/cloud-optimization' },
            { title: 'Disaster Recovery', path: '/services/disaster-recovery' },
            { title: 'Next Generation Workplace', path: '/services/next-gen-workplace' }
          ]
        },
        {
          title: 'DevOps & Engineering',
          path: '/services/devops-engineering',
          icon: FaCode,
          submenu: [
            { title: 'DevOps & CI/CD', path: '/services/devops' },
            { title: 'Infrastructure as Code', path: '/services/infrastructure-as-code' },
            { title: 'Containerization', path: '/services/containerization' },
            { title: 'Serverless Architecture', path: '/services/serverless' },
            { title: 'Agile Transformation', path: '/services/agile-transformation' }
          ]
        },
        {
          title: 'Security & Compliance',
          path: '/services/security',
          icon: FaShieldAlt,
          submenu: [
            { title: 'Security & Compliance', path: '/services/security-compliance' },
            { title: 'Cyber Defense Resiliency', path: '/services/cyber-defense' },
            { title: 'Privacy Services', path: '/services/privacy-services' },
            { title: 'Privacy SmartHub', path: '/services/privacy-smarthub' }
          ]
        }
      ]
    },
    { 
      title: 'Industries', 
      path: '/industries', 
      hasSubmenu: true,
      submenu: [
        {
          title: 'Financial Services',
          path: '/industries/financial-services',
          icon: FaDatabase,
          submenu: [
            { title: 'Banking', path: '/industries/banking' },
            { title: 'Insurance', path: '/industries/insurance' },
            { title: 'Capital Markets', path: '/industries/capital-markets' },
            { title: 'Fintech', path: '/industries/fintech' }
          ]
        },
        {
          title: 'Manufacturing',
          path: '/industries/manufacturing',
          icon: FaIndustry,
          submenu: [
            { title: 'Manufacturing', path: '/industries/manufacturing-general' },
            { title: 'Advanced Manufacturing', path: '/industries/advanced-manufacturing' },
            { title: 'Automotive', path: '/industries/automotive' },
            { title: 'Industrial IoT', path: '/industries/industrial-iot' }
          ]
        }
      ]
    },
    { 
      title: 'Training Services',
      path: '/training-services',
      hasSubmenu: true,
      submenu: [
        {
          title: 'AWS Training',
          path: '/training-services/aws',
          icon: FaCloud,
          description: 'Master AWS cloud services and architecture'
        },
        {
          title: 'Azure Training',
          path: '/training-services/azure',
          icon: FaCloud,
          description: 'Learn Microsoft Azure cloud platform'
        },
        {
          title: 'DevOps Training',
          path: '/training-services/devops',
          icon: FaCode,
          description: 'Master DevOps practices and tools'
        },
        {
          title: 'Kubernetes Training',
          path: '/training-services/kubernetes',
          icon: FaDocker,
          description: 'Learn container orchestration with Kubernetes'
        }
      ]
    },
    {
      title: 'Use Cases',
      path: '/use-cases',
      hasSubmenu: true,
      submenu: [
        {
          title: 'Enterprise Transformation',
          path: '/use-cases/enterprise',
          icon: FaChartLine,
          description: 'Digital transformation success stories'
        },
        {
          title: 'Cloud Migration',
          path: '/use-cases/migration',
          icon: FaCloud,
          description: 'Successful cloud migration cases'
        },
        {
          title: 'Digital Innovation',
          path: '/use-cases/innovation',
          icon: FaLightbulb,
          description: 'Innovation and modernization stories'
        }
      ]
    },
    { title: 'Contact', path: '/contact' }
  ]
}; 