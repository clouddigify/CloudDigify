import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { siteConfig } from './config/siteConfig';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Page Components
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Industries from './components/pages/Industries';
import TrainingServices from './components/pages/TrainingServices';
import UseCases from './components/pages/UseCases';
import Blogs from './components/pages/Blogs';
import Contact from './components/pages/Contact';
import TermsAndConditions from './components/pages/legal/TermsAndConditions';
import PrivacyPolicy from './components/pages/legal/PrivacyPolicy';

// Wrap routes with AnimatePresence
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Main Routes */}
        <Route path="/" element={<Home pageInfo={siteConfig.pages.home} />} />
        
        {/* Generate routes from navigation config */}
        {siteConfig.navigation.map(item => (
          <React.Fragment key={item.path}>
            {/* Main route */}
            <Route 
              path={item.path} 
              element={React.createElement(
                // Dynamically get the component based on the path
                require(`./components/pages${item.path === '/training-services' ? '/TrainingServices' : item.path.charAt(0).toUpperCase() + item.path.slice(1)}`).default,
                { pageInfo: siteConfig.pages[item.path.substring(1).replace(/-./g, x => x[1].toUpperCase())] }
              )}
            />
            
            {/* Submenu routes */}
            {item.submenu?.map(subItem => (
              <Route
                key={subItem.path}
                path={subItem.path}
                element={React.createElement(
                  require(`./components/pages${subItem.path}`).default,
                  { pageInfo: { ...subItem, type: item.path.substring(1) } }
                )}
              />
            ))}
          </React.Fragment>
        ))}
        
        {/* Legal Routes */}
        <Route path="/terms" element={<TermsAndConditions pageInfo={siteConfig.pages.legal.terms} />} />
        <Route path="/privacy" element={<PrivacyPolicy pageInfo={siteConfig.pages.legal.privacy} />} />
        
        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App; 