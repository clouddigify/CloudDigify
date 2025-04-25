import React from 'react';
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
  FaClipboardList,
  FaBrain,
  FaLink,
  FaChartBar,
  FaCog,
  FaCogs,
  FaFlask,
  FaTools,
  FaLock,
  FaServer,
  FaRobot,
  FaDesktop,
  FaQuestionCircle,
  FaNetworkWired,
  FaLightbulb,
  FaWarehouse,
  FaCube,
  FaPlay,
  FaMicrochip,
  FaUserShield,
  FaCheck,
  FaCheckCircle,
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
  FaPaintBrush,
  FaPalette
} from 'react-icons/fa';

import { 
  SiAmazonaws,
  SiMicrosoftazure,
  SiGooglecloud,
  SiOracle,
  SiAlibabacloud,
  SiAzuredevops,
  SiDatabricks
} from 'react-icons/si';

// Create a mapping of icon names to components
const ICONS = {
  // Legacy mapping without fa- prefix
  Cloud: FaCloud,
  Code: FaCode,
  Shield: FaShieldAlt,
  ShieldAlt: FaShieldAlt,
  Database: FaDatabase,
  Industry: FaIndustry,
  Chart: FaChartLine,
  ChartLine: FaChartLine,
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
  Desktop: FaDesktop,
  
  // New mapping with fa- prefix
  'fa-home': FaHome,
  'fa-info': FaInfo,
  'fa-cloud': FaCloud,
  'fa-aws': SiAmazonaws,
  'fa-microsoft': SiMicrosoftazure,
  'fa-google': SiGooglecloud,
  'fa-oracle': SiOracle,
  'fa-alibaba': SiAlibabacloud,
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
  'fa-cloud-shield': FaCloud,
  'fa-clipboard-list': FaClipboardList,
  'fa-code': FaCode,
  
  // Brand-specific cloud provider icons with exact brand names as keys
  'AWS': SiAmazonaws,
  'Amazon Web Services': SiAmazonaws,
  'Microsoft Azure': SiMicrosoftazure,
  'Azure': SiMicrosoftazure,
  'Google Cloud': SiGooglecloud,
  'GCP': SiGooglecloud,
  'Oracle': SiOracle,
  'Oracle Cloud': SiOracle,
  'Alibaba': SiAlibabacloud,
  'Alibaba Cloud': SiAlibabacloud,
  'DataBricks': SiDatabricks
};

const IconRenderer = ({ icon, className }) => {
  if (!icon) return null;
  
  // Check in our direct mapping first
  const IconComponent = ICONS[icon] || null;
  
  // If we found a direct match, use it
  if (IconComponent) {
    return <IconComponent className={className} />;
  }
  
  // Fallback to the question mark icon
  console.log(`Icon not found: ${icon}`);
  const FallbackIcon = FaQuestionCircle;
  return <FallbackIcon className={className} />;
};

export default IconRenderer; 