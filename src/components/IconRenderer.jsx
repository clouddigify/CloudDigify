import React from 'react';
import { 
  FaCloud, 
  FaCode, 
  FaShieldAlt, 
  FaDatabase, 
  FaIndustry, 
  FaChartLine, 
  FaCubes,
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
  Cubes: FaCubes
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