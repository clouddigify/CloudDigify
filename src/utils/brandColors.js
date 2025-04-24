/**
 * Brand Colors - Utility for standardized brand-specific colors
 * This file provides consistent brand colors for cloud service providers
 * and other branded elements throughout the application.
 */

// Main cloud providers colors
export const BRAND_COLORS = {
  // Cloud Providers
  'AWS': '#FF9900',
  'Amazon Web Services': '#FF9900',
  'Microsoft Azure': '#0078D4',
  'Azure': '#0078D4',
  'Google Cloud': '#4285F4',
  'GCP': '#4285F4',
  'Oracle Cloud': '#F80000',
  'Oracle': '#F80000',
  'Alibaba Cloud': '#FF6A00',
  'Alibaba': '#FF6A00',
  
  // Data Platforms
  'DataBricks': '#FF3621',
  'Snowflake': '#29B5E8',
  
  // Generic Services
  'Database': '#F80000',
  'Analytics': '#4285F4',
  'Security': '#00A651',
  'Compute': '#FF9900',
  'Storage': '#0078D4',
  'Network': '#6B46C1'
};

/**
 * Get brand color for a service name
 * @param {string} serviceName - The name of the service
 * @returns {string} - The appropriate color for the service
 */
export const getBrandColor = (serviceName) => {
  if (!serviceName) return null;
  
  // Check for exact match first
  if (BRAND_COLORS[serviceName]) {
    return BRAND_COLORS[serviceName];
  }
  
  // Check for partial matches using keywords in the name
  const serviceNameLower = serviceName.toLowerCase();
  
  if (serviceNameLower.includes('aws') || serviceNameLower.includes('amazon')) {
    return BRAND_COLORS['AWS'];
  }
  
  if (serviceNameLower.includes('azure') || serviceNameLower.includes('microsoft')) {
    return BRAND_COLORS['Azure'];
  }
  
  if (serviceNameLower.includes('google') || serviceNameLower.includes('gcp')) {
    return BRAND_COLORS['Google Cloud'];
  }
  
  if (serviceNameLower.includes('oracle')) {
    return BRAND_COLORS['Oracle'];
  }
  
  if (serviceNameLower.includes('alibaba')) {
    return BRAND_COLORS['Alibaba'];
  }
  
  // Generic service types
  if (serviceNameLower.includes('database') || serviceNameLower.includes('db')) {
    return BRAND_COLORS['Database'];
  }
  
  if (serviceNameLower.includes('analytics') || serviceNameLower.includes('data')) {
    return BRAND_COLORS['Analytics'];
  }
  
  if (serviceNameLower.includes('security') || serviceNameLower.includes('protect')) {
    return BRAND_COLORS['Security'];
  }
  
  // Default cloud-related color
  if (serviceNameLower.includes('cloud')) {
    return '#4285F4'; // Default cloud blue
  }
  
  return null; // No match found
};

/**
 * Get CSS style object for a specific brand
 * @param {string} brandName - Name of the brand or service
 * @returns {Object} - CSS style object with color property
 */
export const getBrandStyle = (brandName) => {
  const color = getBrandColor(brandName);
  return color ? { color } : {};
}; 