/**
 * Configuration for 301 redirects
 * Format: { from: '/old-path', to: '/new-path' }
 */
export const redirects = [
  // Example redirects
  { from: '/old-services', to: '/services' },
  { from: '/old-about', to: '/about' },
  { from: '/old-contact', to: '/contact' },
  // Add more redirects as needed
];

/**
 * Checks if a path has a redirect
 * @param {string} path - Current path
 * @returns {string|null} - Redirect path or null
 */
export const getRedirect = (path) => {
  const redirect = redirects.find(r => r.from === path);
  return redirect ? redirect.to : null;
}; 