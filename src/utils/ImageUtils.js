/**
 * Image Utilities
 * 
 * Helpers for image-related functionality, including alt text generation
 */

/**
 * Generate descriptive alt text from an image filename or path
 * 
 * @param {string} src - The image source path or filename
 * @param {string} fallback - Optional fallback if no meaningful alt text can be generated
 * @returns {string} - Generated alt text
 */
export const generateAltText = (src, fallback = 'Image') => {
  if (!src) return fallback;
  
  try {
    // Extract filename from path
    const filename = src.split('/').pop().split('#')[0].split('?')[0];
    
    // Remove file extension
    const nameWithoutExtension = filename.replace(/\.[^/.]+$/, "");
    
    // Convert kebab/snake case to readable text
    const readable = nameWithoutExtension
      .replace(/-/g, ' ')
      .replace(/_/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
    
    return readable || fallback;
  } catch (e) {
    console.error("Error generating alt text:", e);
    return fallback;
  }
};

export default {
  generateAltText
}; 