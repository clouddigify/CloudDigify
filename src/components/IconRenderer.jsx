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
  FaBrain,
  FaLink,
  FaChartBar,
  FaCog,
  FaFlask,
  FaTools,
  FaLock,
  FaServer,
  FaRobot,
  FaDesktop,
  FaQuestionCircle
} from 'react-icons/fa';

// Create a mapping of icon names to components
const ICONS = {
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
  Desktop: FaDesktop
};

const IconRenderer = ({ icon, className }) => {
  if (!icon) return null;
  
  // Check in our direct mapping first
  const IconComponent = ICONS[icon] || null;
  
  // If we found a direct match, use it
  if (IconComponent) {
    return <IconComponent className={className} />;
  }
  
  // Fallback to the dynamic approach
  const FallbackIcon = FaQuestionCircle;
  return <FallbackIcon className={className} />;
};

export default IconRenderer; 