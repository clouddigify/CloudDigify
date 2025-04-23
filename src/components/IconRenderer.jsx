import React from 'react';
import * as FaIcons from 'react-icons/fa';

const IconRenderer = ({ icon, className }) => {
  if (!icon) return null;
  
  const IconComponent = FaIcons[`Fa${icon}`];
  return IconComponent ? <IconComponent className={className} /> : null;
};

export default IconRenderer; 