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
  FaClipboardList,
  FaBrain,
  FaLink,
  FaChartBar,
  FaCog,
  FaLightbulb,
  FaTools,
  FaLock,
  FaServer,
  FaRobot,
  FaDesktop,
  FaNetworkWired,
  FaWarehouse,
  FaPlay,
  FaMicrochip,
  FaUserShield,
  FaCogs,
  FaCheck,
  FaUniversity,
  FaTshirt,
  FaBolt,
  FaSearch,
  FaLandmark,
  FaSyncAlt,
  FaProjectDiagram,
  FaCodeBranch,
  FaFileCode,
  FaBox,
  FaLaptopCode,
  FaVial,
  FaHeartbeat,
  FaPlug,
  FaClock,
  FaPaintBrush
} from 'react-icons/fa';

import { 
  SiAmazonaws,
  SiMicrosoft,
  SiGoogle
} from 'react-icons/si';

// Create a mapping of icon components
const Icons = {
  // Simple mapping of icon name strings to components
  'fa-home': FaHome,
  'fa-info': FaInfo,
  'fa-cloud': FaCloud,
  'fa-aws': SiAmazonaws,
  'fa-microsoft': SiMicrosoft,
  'fa-google': SiGoogle,
  'fa-database': FaDatabase,
  'fa-alipay': FaDatabase, // Fallback
  'fa-network-wired': FaNetworkWired,
  'fa-lightbulb': FaLightbulb,
  'fa-chart-line': FaChartLine,
  'fa-brain': FaBrain,
  'fa-warehouse': FaWarehouse,
  'fa-cubes': FaCubes,
  'fa-paint-brush': FaPaintBrush,
  'fa-plug': FaPlug,
  'fa-clock': FaClock,
  'fa-robot': FaRobot,
  'fa-microchip': FaMicrochip,
  'fa-project-diagram': FaProjectDiagram,
  'fa-cogs': FaCogs,
  'fa-link': FaLink,
  'fa-lightbulb-on': FaLightbulb,
  'fa-code-branch': FaCodeBranch,
  'fa-file-code': FaFileCode,
  'fa-box': FaBox,
  'fa-sync': FaSyncAlt,
  'fa-shield-alt': FaShieldAlt,
  'fa-user-shield': FaUserShield,
  'fa-laptop-code': FaLaptopCode,
  'fa-server': FaServer,
  'fa-vial': FaVial,
  'fa-tools': FaTools,
  'fa-building': FaBuilding,
  'fa-graduation-cap': FaGraduationCap,
  'fa-heartbeat': FaHeartbeat,
  'fa-university': FaUniversity,
  'fa-tshirt': FaTshirt,
  'fa-industry': FaIndustry,
  'fa-bolt': FaBolt,
  'fa-search': FaSearch,
  'fa-landmark': FaLandmark,
  'fa-chart-bar': FaChartBar,
  'fa-cloud-shield': FaCloud
};

export const menuConfig = {
  mainNav: [
    { title: 'Home', path: '/', icon: 'fa-home' },
    { title: 'About Us', path: '/about', icon: 'fa-info' },
    { 
      title: 'Services', 
      path: '/services', 
      hasSubmenu: true,
      icon: 'fa-cogs',
      submenu: [
        {
          title: 'Cloud & Infrastructure',
          icon: 'fa-cloud',
          submenu: [
            { 
              title: 'AWS',
              path: '/services/cloud/aws',
              icon: 'fa-aws'
            },
            { 
              title: 'Microsoft Azure',
              path: '/services/cloud/azure',
              icon: 'fa-microsoft'
            },
            { 
              title: 'Google Cloud',
              path: '/services/cloud/google-cloud',
              icon: 'fa-google'
            },
            { 
              title: 'Oracle Cloud',
              path: '/services/cloud/oracle',
              icon: 'fa-database'
            },
            { 
              title: 'Alibaba Cloud',
              path: '/services/cloud/alibaba',
              icon: 'fa-alipay'
            },
            {
              title: 'Infrastructure Service',
              path: '/services/infrastructure-service',
              icon: 'fa-network-wired'
            }
          ]
        },
        {
          title: 'Consulting',
          icon: 'fa-lightbulb',
          submenu: [
            { 
              title: 'Consulting Overview',
              path: '/services/consulting',
              icon: 'fa-lightbulb'
            },
            { 
              title: 'Digital & Data Consulting',
              icon: 'fa-database',
              submenu: [
                { 
                  title: 'Data Analytics Services',
                  path: '/services/consulting/data-analytics',
                  icon: 'fa-chart-bar'
                },
                { 
                  title: 'Business Intelligence',
                  path: '/services/consulting/business-intelligence',
                  icon: 'fa-chart-line'
                },
                { 
                  title: 'Data Warehousing',
                  path: '/services/consulting/data-warehousing',
                  icon: 'fa-database'
                },
                { 
                  title: 'DataBricks',
                  path: '/services/consulting/databricks',
                  icon: 'DataBricks'
                },
                { 
                  title: 'Experience Design',
                  path: '/services/consulting/experience-design',
                  icon: 'fa-palette'
                },
                { 
                  title: 'Digital Integration',
                  path: '/services/consulting/digital-integration',
                  icon: 'fa-link'
                },
                { 
                  title: 'Digital Runtime',
                  path: '/services/consulting/digital-runtime',
                  icon: 'fa-clock'
                }
              ]
            },
            {
              title: 'AI & Automations',
              icon: 'fa-brain',
              submenu: [
                { 
                  title: 'Artificial Intelligence',
                  path: '/services/ai/artificial-intelligence',
                  icon: 'fa-robot'
                },
                { 
                  title: 'Cognitive Services',
                  path: '/services/ai/cognitive-services',
                  icon: 'fa-brain'
                },
                { 
                  title: 'Agentic AI',
                  path: '/services/ai/agentic-ai',
                  icon: 'fa-microchip'
                },
                { 
                  title: 'Machine Learning Operations',
                  path: '/services/ai/mlops',
                  icon: 'fa-cogs'
                },
                { 
                  title: 'RPA Automations',
                  path: '/services/ai/rpa',
                  icon: 'fa-robot'
                }
              ]
            },
            {
              title: 'Blockchain',
              path: '/services/blockchain',
              icon: 'fa-link'
            },
            {
              title: 'Strategy, Experience and Applied Innovation',
              path: '/services/strategy',
              icon: 'fa-lightbulb'
            },
            {
              title: 'DevOps & Engineering',
              icon: 'fa-code-branch',
              submenu: [
                { 
                  title: 'DevOps & CI/CD',
                  path: '/services/devops/cicd',
                  icon: 'fa-code-branch'
                },
                { 
                  title: 'Infrastructure as a Code',
                  path: '/services/devops/iac',
                  icon: 'fa-file-code'
                },
                { 
                  title: 'Containerization',
                  path: '/services/devops/containerization',
                  icon: 'fa-cube'
                },
                { 
                  title: 'Serverless Architecture',
                  path: '/services/devops/serverless',
                  icon: 'fa-server'
                },
                { 
                  title: 'Agile Transformation',
                  path: '/services/devops/agile',
                  icon: 'fa-sync'
                }
              ]
            }
          ]
        },
        {
          title: 'Security & Compliance',
          icon: 'fa-shield-alt',
          submenu: [
            { 
              title: 'Cyber Defence Resiliency',
              path: '/services/security/cyber-defence',
              icon: 'fa-shield-alt'
            },
            { 
              title: 'Privacy SmartHub',
              path: '/services/security/privacy-smarthub',
              icon: 'fa-user-shield'
            }
          ]
        },
        {
          title: 'Digital Engineering',
          path: '/services/digital-engineering',
          icon: 'fa-laptop-code'
        },
        {
          title: 'Platform Operation',
          path: '/services/platform-operation',
          icon: 'fa-server'
        },
        {
          title: 'Quality Engineering',
          path: '/services/quality-engineering',
          icon: 'fa-vial'
        }
      ]
    },
    { 
      title: 'Training', 
      path: '/training', 
      hasSubmenu: true,
      icon: 'fa-graduation-cap',
      submenu: [
        { 
          title: 'Amazon Web Services',
          path: '/training/aws',
          icon: 'fa-aws'
        },
        { 
          title: 'Microsoft Azure',
          path: '/training/azure',
          icon: 'fa-microsoft'
        },
        { 
          title: 'Google Cloud',
          path: '/training/google-cloud',
          icon: 'fa-google'
        },
        { 
          title: 'Alibaba Cloud',
          path: '/training/alibaba-cloud',
          icon: 'fa-alipay'
        },
        { 
          title: 'Oracle Cloud',
          path: '/training/oracle',
          icon: 'fa-database'
        },
        { 
          title: 'AI & ML',
          path: '/training/ai-ml',
          icon: 'fa-robot'
        },
        { 
          title: 'Automation Tools',
          path: '/training/automation',
          icon: 'fa-tools'
        },
        { 
          title: 'Corporate Training',
          path: '/training/corporate',
          icon: 'fa-building'
        },
        { 
          title: 'On Campus Training',
          path: '/training/campus',
          icon: 'fa-graduation-cap'
        }
      ]
    },
    { 
      title: 'Industries', 
      path: '/industries', 
      hasSubmenu: true,
      icon: 'fa-industry',
      submenu: [
        { 
          title: 'Healthcare',
          path: '/industries/healthcare',
          icon: 'fa-heartbeat'
        },
        { 
          title: 'Banking',
          path: '/industries/banking',
          icon: 'fa-university'
        },
        { 
          title: 'Textile & Apparel Industries',
          path: '/industries/textile',
          icon: 'fa-tshirt'
        },
        { 
          title: 'Industrial Automation & Control System',
          path: '/industries/automation',
          icon: 'fa-industry'
        },
        { 
          title: 'Electrical & Equipment',
          path: '/industries/electrical',
          icon: 'fa-bolt'
        },
        { 
          title: 'Research & Advisory Services',
          path: '/industries/research',
          icon: 'fa-search'
        },
        { 
          title: 'Public Administration & Governance',
          path: '/industries/governance',
          icon: 'fa-landmark'
        }
      ]
    },
    { 
      title: 'Customer Solutions', 
      path: '/solutions', 
      hasSubmenu: true,
      icon: 'fa-clipboard-list',
      submenu: [
        { 
          title: 'Transforming Data, Empowering Growth',
          path: '/solutions/data-transformation',
          icon: 'fa-chart-bar'
        },
        { 
          title: 'Secure, Efficient, and Cloud-Driven',
          path: '/solutions/cloud-driven',
          icon: 'fa-cloud-shield'
        }
      ]
    },
    { title: 'Icons Demo', path: '/icons-demo', icon: 'fa-palette' }
  ]
}; 

export { Icons }; 