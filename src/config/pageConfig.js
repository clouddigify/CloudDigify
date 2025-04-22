// Page configuration for CloudDigify website
// This file controls which pages are enabled/disabled across the website

// Main pages
export const mainPages = {
  home: { path: '/', enabled: true },
  about: { path: '/about', enabled: true },
  services: { path: '/services', enabled: true },
  industries: { path: '/industries', enabled: true },
  training: { path: '/training', enabled: true },
  blogs: { path: '/blogs', enabled: true },
  contact: { path: '/contact', enabled: true }
};

// Service pages
export const servicePages = {
  // Cloud Services
  cloudInfrastructure: { path: '/services/cloud-infrastructure', enabled: true },
  cloudMigration: { path: '/services/cloud-migration', enabled: true },
  cloudOptimization: { path: '/services/cloud-optimization', enabled: true },
  disasterRecovery: { path: '/services/disaster-recovery', enabled: true },
  nextGenWorkplace: { path: '/services/next-gen-workplace', enabled: false },
  
  // DevOps & Engineering
  devops: { path: '/services/devops', enabled: true },
  infrastructureAsCode: { path: '/services/infrastructure-as-code', enabled: true },
  containerization: { path: '/services/containerization', enabled: true },
  serverless: { path: '/services/serverless', enabled: true },
  agileTransformation: { path: '/services/agile-transformation', enabled: false },
  
  // Security & Compliance
  securityCompliance: { path: '/services/security-compliance', enabled: true },
  cyberDefense: { path: '/services/cyber-defense', enabled: false },
  privacyServices: { path: '/services/privacy-services', enabled: false },
  privacySmartHub: { path: '/services/privacy-smarthub', enabled: false },
  
  // Data & Analytics
  dataAnalytics: { path: '/services/data-analytics', enabled: false },
  businessIntelligence: { path: '/services/business-intelligence', enabled: false },
  dataWarehousing: { path: '/services/data-warehousing', enabled: false },
  bigData: { path: '/services/big-data', enabled: false },
  
  // Digital Experiences
  experienceDesign: { path: '/services/experience-design', enabled: false },
  digitalInteractive: { path: '/services/digital-interactive', enabled: false },
  enterpriseMobility: { path: '/services/enterprise-mobility', enabled: false },
  digitalIntegration: { path: '/services/digital-integration', enabled: false },
  digitalRuntime: { path: '/services/digital-runtime', enabled: false },
  
  // AI & Automation
  artificialIntelligence: { path: '/services/artificial-intelligence', enabled: false },
  intelligentAutomation: { path: '/services/intelligent-automation', enabled: false },
  cognitiveServices: { path: '/services/cognitive-services', enabled: false },
  rpa: { path: '/services/rpa', enabled: false },
  
  // Enterprise Services
  managedServices: { path: '/services/managed-services', enabled: true },
  architectureDesign: { path: '/services/architecture-design', enabled: true },
  applicationDevelopment: { path: '/services/application-development', enabled: false },
  applicationMaintenance: { path: '/services/application-maintenance', enabled: false },
  systemIntegration: { path: '/services/system-integration', enabled: false },
  
  // Industry Solutions
  industry40: { path: '/services/industry-4-0', enabled: false },
  blockchain: { path: '/services/blockchain', enabled: false },
  qualityEngineering: { path: '/services/quality-engineering', enabled: false },
  organizationalChange: { path: '/services/organizational-change', enabled: false },
  
  // Consulting Services
  technologyConsulting: { path: '/services/technology-consulting', enabled: false },
  digitalTransformation: { path: '/services/digital-transformation', enabled: false },
  enterpriseArchitecture: { path: '/services/enterprise-architecture', enabled: false },
  businessProcess: { path: '/services/business-process', enabled: false },
  ocm: { path: '/services/ocm', enabled: false },
  
  // Quality Assurance
  qualityAssurance: { path: '/services/quality-assurance', enabled: false },
  testAutomation: { path: '/services/test-automation', enabled: false },
  performanceTesting: { path: '/services/performance-testing', enabled: false },
  securityTesting: { path: '/services/security-testing', enabled: false },
  
  // Specialized Solutions
  iotSolutions: { path: '/services/iot-solutions', enabled: false },
  platformEngineering: { path: '/services/platform-engineering', enabled: false },
  reimaginedEnterprise: { path: '/services/reimagined-enterprise', enabled: false },
  smartCity: { path: '/services/smart-city', enabled: false }
};

// Industry pages
export const industryPages = {
  // Financial Services
  financialServices: { path: '/industries/financial-services', enabled: true },
  banking: { path: '/industries/banking', enabled: true },
  insurance: { path: '/industries/insurance', enabled: false },
  capitalMarkets: { path: '/industries/capital-markets', enabled: false },
  fintech: { path: '/industries/fintech', enabled: false },
  
  // Manufacturing
  manufacturing: { path: '/industries/manufacturing', enabled: false },
  advancedManufacturing: { path: '/industries/advanced-manufacturing', enabled: false },
  automotive: { path: '/industries/automotive', enabled: false },
  industrialIot: { path: '/industries/industrial-iot', enabled: false },
  
  // Technology
  technology: { path: '/industries/technology', enabled: false },
  software: { path: '/industries/software', enabled: false },
  hardware: { path: '/industries/hardware', enabled: false },
  telecommunications: { path: '/industries/telecommunications', enabled: false },
  
  // Healthcare
  healthcare: { path: '/industries/healthcare', enabled: false },
  healthcareProviders: { path: '/industries/healthcare-providers', enabled: false },
  lifeSciences: { path: '/industries/life-sciences', enabled: false },
  healthTech: { path: '/industries/health-tech', enabled: false },
  
  // Retail & CPG
  retailCpg: { path: '/industries/retail-cpg', enabled: false },
  retail: { path: '/industries/retail', enabled: false },
  consumerGoods: { path: '/industries/consumer-goods', enabled: false },
  ecommerce: { path: '/industries/e-commerce', enabled: false },
  
  // Energy & Utilities
  energyUtilities: { path: '/industries/energy-utilities', enabled: false },
  energy: { path: '/industries/energy', enabled: false },
  utilities: { path: '/industries/utilities', enabled: false },
  oilGas: { path: '/industries/oil-gas', enabled: false },
  
  // Communications & Media
  communicationsMedia: { path: '/industries/communications-media', enabled: false },
  communications: { path: '/industries/communications', enabled: false },
  mediaEntertainment: { path: '/industries/media-entertainment', enabled: false },
  digitalPublishing: { path: '/industries/digital-publishing', enabled: false },
  
  // Travel & Hospitality
  travelHospitality: { path: '/industries/travel-hospitality', enabled: false },
  travel: { path: '/industries/travel', enabled: false },
  transport: { path: '/industries/transport', enabled: false },
  hospitality: { path: '/industries/hospitality', enabled: false }
};

// Legal pages
export const legalPages = {
  terms: { path: '/terms', enabled: true },
  privacy: { path: '/privacy', enabled: true },
  cookies: { path: '/cookies', enabled: true }
};

// Helper function to check if a page is enabled
export const isPageEnabled = (pageKey, pageCategory) => {
  let config;
  
  switch(pageCategory) {
    case 'main':
      config = mainPages;
      break;
    case 'service':
      config = servicePages;
      break;
    case 'industry':
      config = industryPages;
      break;
    case 'legal':
      config = legalPages;
      break;
    default:
      return false;
  }
  
  return config[pageKey]?.enabled === true;
};

// Helper function to get all enabled pages
export const getEnabledPages = (pageCategory) => {
  let config;
  
  switch(pageCategory) {
    case 'main':
      config = mainPages;
      break;
    case 'service':
      config = servicePages;
      break;
    case 'industry':
      config = industryPages;
      break;
    case 'legal':
      config = legalPages;
      break;
    default:
      return [];
  }
  
  return Object.entries(config)
    .filter(([_, value]) => value.enabled)
    .map(([key, value]) => ({ key, ...value }));
}; 