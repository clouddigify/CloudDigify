import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCookieBite } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consentGiven = localStorage.getItem('cookieConsent') === 'true';
    
    // If no consent yet, show the banner after a short delay
    if (!consentGiven) {
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    // Save consent to localStorage
    localStorage.setItem('cookieConsent', 'true');
    
    // Hide the banner
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:px-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start sm:items-center gap-3">
                <div className="hidden sm:flex h-10 w-10 bg-orange-100 rounded-full items-center justify-center flex-shrink-0">
                  <FaCookieBite className="h-5 w-5 text-orange-600" />
                </div>
                <p className="text-gray-700 text-sm md:text-base">
                  We use cookies to improve your experience. By continuing to browse, you consent to our use of cookies.{' '}
                  <Link to="/cookies-policy" className="text-orange-600 font-medium hover:underline">
                    Learn More
                  </Link>
                </p>
              </div>
              <button
                onClick={handleAccept}
                className="bg-orange-600 hover:bg-orange-700 transition-colors text-white py-2 px-6 rounded-md text-sm font-medium ml-auto"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsentBanner; 