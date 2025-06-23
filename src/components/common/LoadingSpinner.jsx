import React from 'react';

const LoadingSpinner = ({ 
  size = 'md', 
  color = 'blue', 
  text = '', 
  className = '',
  overlay = false 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6', 
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const colorClasses = {
    blue: 'text-blue-600',
    white: 'text-white',
    gray: 'text-gray-600',
    green: 'text-green-600',
    red: 'text-red-600'
  };

  const SpinnerSVG = () => (
    <svg 
      className={`animate-spin ${sizeClasses[size]} ${colorClasses[color]}`}
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  if (overlay) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 shadow-xl flex flex-col items-center">
          <SpinnerSVG />
          {text && <p className="mt-3 text-gray-700 text-center">{text}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <SpinnerSVG />
      {text && <span className="ml-2 text-sm text-gray-600">{text}</span>}
    </div>
  );
};

// Form Button Loading Component
export const LoadingButton = ({ 
  loading, 
  children, 
  loadingText = 'Sending...',
  className = '',
  disabled,
  ...props 
}) => {
  return (
    <button
      {...props}
      disabled={loading || disabled}
      className={`${className} ${
        loading || disabled 
          ? 'opacity-75 cursor-not-allowed' 
          : 'hover:opacity-90'
      } transition-all duration-200 flex items-center justify-center`}
    >
      {loading ? (
        <>
          <LoadingSpinner size="sm" color="white" className="mr-2" />
          {loadingText}
        </>
      ) : children}
    </button>
  );
};

export default LoadingSpinner; 