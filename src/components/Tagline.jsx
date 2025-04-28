import React from 'react';
import { motion } from 'framer-motion';

const Tagline = ({ className = '', size = 'sm', withIcon = false }) => {
  return (
    <motion.div 
      className={`flex items-center ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {withIcon && (
        <svg 
          className={`${size === 'sm' ? 'w-4 h-4' : 'w-6 h-6'} mr-2 text-blue-600`} 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M12 2L2 7L12 12L22 7L12 2Z" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M2 17L12 22L22 17" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M2 12L12 17L22 12" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      )}
      <span className={`${size === 'sm' ? 'text-xs' : 'text-sm'} text-gray-500`}>
        Transforming What's Next
      </span>
    </motion.div>
  );
};

export default Tagline; 