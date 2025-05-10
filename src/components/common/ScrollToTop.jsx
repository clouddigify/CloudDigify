import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    let scrolled = false;
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        scrolled = true;
        // Fallback for mobile: force instant scroll after a short delay
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'auto' });
        }, 500);
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, Opera
    // Fallback for mobile: force instant scroll after a short delay
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 500);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop; 