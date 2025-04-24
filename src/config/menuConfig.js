import { 
  FaCloud, 
  FaCode, 
  FaShieldAlt, 
  FaDatabase, 
  FaIndustry, 
  FaChartLine, 
  FaCubes,
  FaHome,
  FaInfo,
  FaGraduationCap,
  FaBuilding,
  FaClipboardCheck,
  FaBrain,
  FaLink,
  FaChartBar,
  FaCog,
  FaFlask,
  FaTools,
  FaLock,
  FaServer,
  FaRobot,
  FaDesktop
} from 'react-icons/fa';

// Create a mapping of icon components
const Icons = {
  Cloud: FaCloud,
  Code: FaCode,
  Shield: FaShieldAlt,
  Database: FaDatabase,
  Industry: FaIndustry,
  Chart: FaChartLine,
  Cubes: FaCubes,
  Home: FaHome,
  Info: FaInfo,
  GraduationCap: FaGraduationCap,
  Building: FaBuilding,
  Solutions: FaClipboardCheck,
  Brain: FaBrain,
  Link: FaLink,
  ChartBar: FaChartBar,
  Cog: FaCog,
  Flask: FaFlask,
  Tools: FaTools,
  Lock: FaLock,
  Server: FaServer,
  Robot: FaRobot,
  Desktop: FaDesktop
};

export const menuConfig = {
  mainNav: [
    { title: 'Home', path: '/', icon: 'Home' },
    { title: 'About Us', path: '/about', icon: 'Info' },
    { 
      title: 'Services', 
      path: '/services', 
      hasSubmenu: true,
      icon: 'Cog',
      submenu: [
        {
          title: 'Cloud & Infrastructure',
          icon: 'Cloud',
          submenu: [
            {
              title: 'Cloud',
              icon: 'Cloud',
              submenu: [
                { 
                  title: 'AWS',
                  path: '/services/cloud/aws',
                  description: 'Amazon Web Services solutions'
                },
                { 
                  title: 'Microsoft Azure',
                  path: '/services/cloud/azure',
                  description: 'Microsoft Azure cloud services'
                },
                { 
                  title: 'Google Cloud',
                  path: '/services/cloud/google-cloud',
                  description: 'Google Cloud Platform solutions'
                },
                { 
                  title: 'Oracle',
                  path: '/services/cloud/oracle',
                  description: 'Oracle Cloud Infrastructure'
                },
                { 
                  title: 'Alibaba',
                  path: '/services/cloud/alibaba',
                  description: 'Alibaba Cloud solutions'
                }
              ]
            },
            {
              title: 'Infrastructure Service',
              path: '/services/infrastructure-service',
              icon: 'Server',
              description: 'Infrastructure management services'
            }
          ]
        },
        {
          title: 'Consulting',
          icon: 'ChartBar',
          submenu: [
            { 
              title: 'Overview',
              path: '/services/consulting/overview',
              description: 'Consulting Overview'
            },
            { 
              title: 'Digital & Data Consulting',
              icon: 'Database',
              submenu: [
                { 
                  title: 'Data Analytics Services',
                  path: '/services/consulting/data-analytics',
                  description: 'Comprehensive data analytics solutions'
                },
                { 
                  title: 'Business Intelligence',
                  path: '/services/consulting/business-intelligence',
                  description: 'Business insights and analytics'
                },
                { 
                  title: 'Data Warehousing',
                  path: '/services/consulting/data-warehousing',
                  description: 'Enterprise data management solutions'
                },
                { 
                  title: 'DataBricks',
                  path: '/services/consulting/databricks',
                  description: 'DataBricks implementation and support'
                },
                { 
                  title: 'Experience Design',
                  path: '/services/consulting/experience-design',
                  description: 'User experience and design services'
                },
                { 
                  title: 'Digital Integration',
                  path: '/services/consulting/digital-integration',
                  description: 'Seamless system integration services'
                },
                { 
                  title: 'Digital Runtime',
                  path: '/services/consulting/digital-runtime',
                  description: 'Digital runtime environments'
                }
              ]
            }
          ]
        },
        {
          title: 'AI & Automations',
          icon: 'Brain',
          submenu: [
            { 
              title: 'Artificial Intelligence',
              path: '/services/ai/artificial-intelligence',
              description: 'AI solutions for enterprises'
            },
            { 
              title: 'Cognitive Services',
              path: '/services/ai/cognitive-services',
              description: 'Advanced cognitive computing'
            },
            { 
              title: 'Agentic AI',
              path: '/services/ai/agentic-ai',
              description: 'Autonomous AI agents'
            },
            { 
              title: 'Machine Learning Operations',
              path: '/services/ai/mlops',
              description: 'MLOps implementation'
            },
            { 
              title: 'RPA Automations',
              path: '/services/ai/rpa',
              description: 'Robotic Process Automation'
            }
          ]
        },
        {
          title: 'Blockchain',
          path: '/services/blockchain',
          icon: 'Link',
          description: 'Blockchain solutions and implementations'
        },
        {
          title: 'Strategy, Experience and Applied Innovation',
          path: '/services/strategy',
          icon: 'Flask',
          description: 'Strategic innovation services'
        },
        {
          title: 'DevOps & Engineering',
          icon: 'Code',
          submenu: [
            { 
              title: 'DevOps & CI/CD',
              path: '/services/devops/cicd',
              description: 'Continuous integration and delivery'
            },
            { 
              title: 'Infrastructure as a Code',
              path: '/services/devops/iac',
              description: 'Infrastructure automation'
            },
            { 
              title: 'Containerization',
              path: '/services/devops/containerization',
              description: 'Container orchestration'
            },
            { 
              title: 'Serverless Architecture',
              path: '/services/devops/serverless',
              description: 'Serverless application design'
            },
            { 
              title: 'Agile Transformation',
              path: '/services/devops/agile',
              description: 'Agile methodology implementation'
            }
          ]
        },
        {
          title: 'Security & Compliance',
          icon: 'Shield',
          submenu: [
            { 
              title: 'Cyber Defence Resiliency',
              path: '/services/security/cyber-defence',
              description: 'Robust cyber security solutions'
            },
            { 
              title: 'Privacy SmartHub',
              path: '/services/security/privacy-smarthub',
              description: 'Privacy management platform'
            }
          ]
        },
        {
          title: 'Digital Engineering',
          path: '/services/digital-engineering',
          icon: 'Desktop',
          description: 'Advanced digital engineering services'
        },
        {
          title: 'Platform Operation',
          path: '/services/platform-operation',
          icon: 'Server',
          description: 'Comprehensive platform management'
        },
        {
          title: 'Quality Engineering',
          path: '/services/quality-engineering',
          icon: 'Tools',
          description: 'Quality assurance and testing'
        }
      ]
    },
    { 
      title: 'Training', 
      path: '/training', 
      hasSubmenu: true,
      icon: 'GraduationCap',
      submenu: [
        { 
          title: 'Amazon Web Services',
          path: '/training/aws',
          icon: 'Cloud',
          description: 'AWS certification training'
        },
        { 
          title: 'Microsoft Azure',
          path: '/training/azure',
          icon: 'Cloud',
          description: 'Azure certification training'
        },
        { 
          title: 'Google Cloud',
          path: '/training/google-cloud',
          icon: 'Cloud',
          description: 'GCP certification training'
        },
        { 
          title: 'Alibaba Cloud',
          path: '/training/alibaba-cloud',
          icon: 'Cloud',
          description: 'Alibaba Cloud certification'
        },
        { 
          title: 'Oracle',
          path: '/training/oracle',
          icon: 'Cloud',
          description: 'Oracle certification programs'
        },
        { 
          title: 'AI & ML',
          path: '/training/ai-ml',
          icon: 'Brain',
          description: 'Artificial Intelligence & Machine Learning'
        },
        { 
          title: 'Automation Tools',
          path: '/training/automation',
          icon: 'Robot',
          description: 'Automation tools training'
        },
        { 
          title: 'Corporate Training',
          path: '/training/corporate',
          icon: 'Building',
          description: 'Customized corporate training programs'
        },
        { 
          title: 'On Campus Training',
          path: '/training/campus',
          icon: 'GraduationCap',
          description: 'Campus-based training programs'
        }
      ]
    },
    { 
      title: 'Industries', 
      path: '/industries', 
      hasSubmenu: true,
      icon: 'Industry',
      submenu: [
        { 
          title: 'Healthcare',
          path: '/industries/healthcare',
          description: 'Digital healthcare solutions'
        },
        { 
          title: 'Banking',
          path: '/industries/banking',
          description: 'Banking technology solutions'
        },
        { 
          title: 'Textile & Apparel Industries',
          path: '/industries/textile',
          description: 'Digital solutions for textile industry'
        },
        { 
          title: 'Industrial Automation & Control System',
          path: '/industries/automation',
          description: 'Industrial automation solutions'
        },
        { 
          title: 'Electrical & Equipment',
          path: '/industries/electrical',
          description: 'Technology for electrical industry'
        },
        { 
          title: 'Research & Advisory Services',
          path: '/industries/research',
          description: 'Research and advisory solutions'
        },
        { 
          title: 'Public Administration & Governance',
          path: '/industries/governance',
          description: 'Public sector digital transformation'
        }
      ]
    },
    { 
      title: 'Customer Solutions', 
      path: '/solutions', 
      hasSubmenu: true,
      icon: 'Solutions',
      submenu: [
        { 
          title: 'Transforming Data, Empowering Growth',
          path: '/solutions/data-transformation',
          description: 'Data-driven business transformation'
        },
        { 
          title: 'Secure, Efficient, and Cloud-Driven',
          path: '/solutions/cloud-driven',
          description: 'Secure cloud-based solutions'
        }
      ]
    }
  ]
}; 

export { Icons }; 