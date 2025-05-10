import React from 'react';
import { 
  FaCloud, FaCode, FaDocker, FaGraduationCap, 
  FaLightbulb, FaChartLine, FaShieldAlt, 
  FaDatabase, FaMobileAlt, FaBrain, 
  FaServer, FaIndustry, FaProjectDiagram,
  FaCheckCircle, FaCubes
} from 'react-icons/fa';

export const createIcon = (Icon) => React.createElement(Icon);

export const icons = {
  cloud: createIcon(FaCloud),
  code: createIcon(FaCode),
  docker: createIcon(FaDocker),
  graduation: createIcon(FaGraduationCap),
  lightbulb: createIcon(FaLightbulb),
  chart: createIcon(FaChartLine),
  shield: createIcon(FaShieldAlt),
  database: createIcon(FaDatabase),
  mobile: createIcon(FaMobileAlt),
  brain: createIcon(FaBrain),
  server: createIcon(FaServer),
  industry: createIcon(FaIndustry),
  project: createIcon(FaProjectDiagram),
  check: createIcon(FaCheckCircle),
  cubes: createIcon(FaCubes)
}; 