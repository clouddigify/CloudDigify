/**
 * This utility maps the service paths from Home.jsx to actual existing pages
 * Use this with the React Router to redirect requests for service pages
 * that don't exist to real pages that do exist in the application
 */

const serviceRedirects = {
  // From Home.jsx service cards
  "/services/cloud": "/services/cloud/aws",
  "/services/devops": "/services/devops/cicd",
  "/services/security": "/services/security/cyber-defence",
  "/services/analytics": "/services/consulting/data-analytics",
  "/services/digital": "/services/digital-engineering",
  "/services/ai": "/services/ai/artificial-intelligence",
  
  // Other potential redirects for non-existent pages
  "/services": "/services/cloud/aws",
  "/industries": "/industries/healthcare",
  "/training": "/training/aws"
};

export default serviceRedirects; 