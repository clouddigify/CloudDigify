import { FaCloud, FaCode, FaShieldAlt, FaDatabase, FaIndustry, FaGraduationCap, FaLightbulb, FaChartLine, FaCubes, FaRocket, FaCogs, FaNetworkWired, FaTools, FaDesktop, FaSyncAlt, FaUsers, FaUsersCog } from 'react-icons/fa';

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
          icon: <FaCloud className="w-5 h-5" />,
          submenu: [
            { 
              title: 'Cloud Infrastructure',
              path: '/services/cloud-infrastructure',
              description: 'Enterprise cloud infrastructure solutions'
            },
            { 
              title: 'Cloud Migration',
              path: '/services/cloud-migration',
              description: 'Seamless cloud migration services'
            },
            { 
              title: 'Cloud Optimization',
              path: '/services/cloud-optimization',
              description: 'Optimize your cloud resources'
            }
          ]
        },
        {
          title: 'DevOps & Engineering',
          icon: <FaCode className="w-5 h-5" />,
          submenu: [
            { 
              title: 'DevOps Services',
              path: '/services/devops',
              description: 'End-to-end DevOps solutions'
            },
            { 
              title: 'Infrastructure as Code',
              path: '/services/infrastructure-as-code',
              description: 'Automated infrastructure deployment'
            },
            { 
              title: 'Containerization',
              path: '/services/containerization',
              description: 'Container orchestration services'
            }
          ]
        },
        {
          title: 'Security & Compliance',
          icon: <FaShieldAlt className="w-5 h-5" />,
          submenu: [
            { 
              title: 'Security Services',
              path: '/services/security-compliance',
              description: 'Comprehensive security solutions'
            },
            { 
              title: 'Compliance Management',
              path: '/services/compliance',
              description: 'Regulatory compliance services'
            },
            { 
              title: 'Security Assessment',
              path: '/services/security-assessment',
              description: 'Security auditing and testing'
            }
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
          icon: <FaDatabase className="w-5 h-5" />,
          submenu: [
            { 
              title: 'Banking Solutions',
              path: '/industries/banking',
              description: 'Digital banking transformation'
            },
            { 
              title: 'Insurance',
              path: '/industries/insurance',
              description: 'Insurance technology solutions'
            },
            { 
              title: 'Fintech',
              path: '/industries/fintech',
              description: 'Financial technology innovation'
            }
          ]
        },
        {
          title: 'Manufacturing',
          icon: <FaIndustry className="w-5 h-5" />,
          submenu: [
            { 
              title: 'Smart Manufacturing',
              path: '/industries/manufacturing',
              description: 'Industry 4.0 solutions'
            },
            { 
              title: 'Industrial IoT',
              path: '/industries/industrial-iot',
              description: 'Connected manufacturing'
            },
            { 
              title: 'Supply Chain',
              path: '/industries/supply-chain',
              description: 'Digital supply chain solutions'
            }
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
          title: 'Cloud Training',
          icon: <FaCloud className="w-5 h-5" />,
          submenu: [
            { 
              title: 'AWS Training',
              path: '/training-services/aws',
              description: 'Amazon Web Services certification'
            },
            { 
              title: 'Azure Training',
              path: '/training-services/azure',
              description: 'Microsoft Azure certification'
            }
          ]
        },
        {
          title: 'DevOps Training',
          icon: <FaCode className="w-5 h-5" />,
          submenu: [
            { 
              title: 'DevOps Fundamentals',
              path: '/training-services/devops',
              description: 'Core DevOps practices'
            },
            { 
              title: 'Kubernetes',
              path: '/training-services/kubernetes',
              description: 'Container orchestration'
            }
          ]
        }
      ]
    },
    { 
      title: 'Use Cases',
      path: '/use-cases',
      hasSubmenu: true,
      submenu: [
        {
          title: 'Success Stories',
          icon: <FaChartLine className="w-5 h-5" />,
          submenu: [
            { 
              title: 'Enterprise Cases',
              path: '/use-cases/enterprise',
              description: 'Enterprise transformation stories'
            },
            { 
              title: 'Cloud Migration',
              path: '/use-cases/migration',
              description: 'Successful migration cases'
            }
          ]
        },
        {
          title: 'Solutions',
          icon: <FaCubes className="w-5 h-5" />,
          submenu: [
            { 
              title: 'Industry Solutions',
              path: '/use-cases/industry-solutions',
              description: 'Industry-specific solutions'
            },
            { 
              title: 'Custom Solutions',
              path: '/use-cases/custom-solutions',
              description: 'Tailored digital solutions'
            }
          ]
        }
      ]
    },
    { title: 'Contact', path: '/contact' }
  ]
}; 