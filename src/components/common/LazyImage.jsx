import React from 'react';

/**
 * LazyImage component for optimized image loading
 * 
 * @param {Object} props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Alt text for accessibility
 * @param {string} props.className - CSS classes
 * @param {string} props.width - Optional width
 * @param {string} props.height - Optional height
 * @param {Object} props.style - Optional inline styles
 */
const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  style = {}, 
  ...rest 
}) => {
  return (
    <img
      src={src}
      alt={alt || ""}
      className={className}
      width={width}
      height={height}
      loading="lazy"
      style={style}
      onError={(e) => {
        console.error(`Failed to load image: ${src}`);
        e.target.onerror = null;
        e.target.src = '/images/placeholder.png'; // Fallback image
      }}
      {...rest}
    />
  );
};

export default LazyImage; 