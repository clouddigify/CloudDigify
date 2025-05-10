/**
 * Generates optimized image URLs for different screen sizes
 * @param {string} imageUrl - Original image URL
 * @param {Object} options - Optimization options
 * @returns {Object} - Object containing URLs for different screen sizes
 */
export const getOptimizedImageUrls = (imageUrl, options = {}) => {
  const {
    widths = [320, 640, 960, 1280],
    quality = 80,
    format = 'webp'
  } = options;

  // If the image is already optimized or is an external URL, return as is
  if (imageUrl.startsWith('data:') || imageUrl.startsWith('http')) {
    return {
      original: imageUrl,
      srcSet: imageUrl
    };
  }

  // Generate srcSet for responsive images
  const srcSet = widths
    .map(width => `${imageUrl}?w=${width}&q=${quality}&fmt=${format} ${width}w`)
    .join(', ');

  return {
    original: imageUrl,
    srcSet
  };
};

/**
 * Generates a blur placeholder for images
 * @param {string} imageUrl - Original image URL
 * @returns {string} - Base64 encoded blur placeholder
 */
export const generateBlurPlaceholder = (imageUrl) => {
  // This is a placeholder implementation
  // In a real application, you would use a server-side solution
  // or a service like Cloudinary/Imgix to generate blur placeholders
  return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmMWYxZjEiLz48L3N2Zz4=';
};

/**
 * Checks if an image needs optimization
 * @param {string} imageUrl - Image URL to check
 * @returns {boolean} - Whether the image needs optimization
 */
export const needsOptimization = (imageUrl) => {
  // Check if the image is already optimized
  if (imageUrl.includes('?w=') || imageUrl.includes('?q=')) {
    return false;
  }

  // Check if the image is an external URL
  if (imageUrl.startsWith('http')) {
    return false;
  }

  return true;
}; 