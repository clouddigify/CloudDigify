import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCookieBite } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { getAnalyticsConsent, setAnalyticsConsent, loadAnalytics } from '../../utils/analytics';

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Show banner only when no valid saved choice exists
    if (getAnalyticsConsent() === null) {
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setAnalyticsConsent('accepted');
    loadAnalytics();
    setShowBanner(false);
  };

  const handleReject = () => {
    setAnalyticsConsent('rejected');
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
                <div className="hidden sm:flex h-10 w-10 bg-[#EEF4FF] rounded-full items-center justify-center flex-shrink-0">
                  <FaCookieBite className="h-5 w-5 text-[#1E5EFF]" />
                </div>
                <p className="text-gray-700 text-sm md:text-base">
                  We use necessary cookies for website functionality. Optional analytics cookies help us improve the site and load only if you accept.{' '}
                  <Link to="/cookies" className="text-[#1E5EFF] font-medium hover:underline">
                    Cookie Policy
                  </Link>
                </p>
              </div>
              <div className="flex items-center gap-3 ml-auto">
                <button
                  onClick={handleReject}
                  className="border border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors py-2 px-5 rounded-md text-sm font-medium"
                >
                  Reject analytics
                </button>
                <button
                  onClick={handleAccept}
                  className="bg-[#1E5EFF] hover:bg-[#1848CC] transition-colors text-white py-2 px-5 rounded-md text-sm font-medium"
                >
                  Accept analytics
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsentBanner; 