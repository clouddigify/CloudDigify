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

// Use Case Components
import CloudMigrationCases from './components/pages/use-cases/CloudMigrationCases';
import DigitalInnovationCases from './components/pages/use-cases/DigitalInnovationCases';
import EnterpriseUseCases from './components/pages/use-cases/EnterpriseUseCases';

// Wrap routes with AnimatePresence
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Main Routes */}
        <Route path="/" element={<Home pageInfo={siteConfig.pages.home} />} />
        <Route path="/about" element={<About pageInfo={siteConfig.pages.about} />} />
        <Route path="/services" element={<Services pageInfo={siteConfig.pages.services} />} />
        <Route path="/industries" element={<Industries pageInfo={siteConfig.pages.industries} />} />
        <Route path="/training-services" element={<TrainingServices pageInfo={siteConfig.pages.training} />} />
        <Route path="/use-cases" element={<UseCases pageInfo={siteConfig.pages.useCases} />} />
        <Route path="/blogs" element={<Blogs pageInfo={siteConfig.pages.blogs} />} />
        <Route path="/contact" element={<Contact pageInfo={siteConfig.pages.contact} />} />
        
        {/* Use Cases Routes */}
        <Route path="/use-cases/cloud-migration" element={<CloudMigrationCases pageInfo={siteConfig.pages.useCases.cloudMigration} />} />
        <Route path="/use-cases/digital-innovation" element={<DigitalInnovationCases pageInfo={siteConfig.pages.useCases.digitalInnovation} />} />
        <Route path="/use-cases/enterprise" element={<EnterpriseUseCases pageInfo={siteConfig.pages.useCases.enterprise} />} />
        
        {/* Legal Routes */}
        <Route path="/terms" element={<TermsAndConditions pageInfo={siteConfig.pages.legal.terms} />} />
        <Route path="/privacy" element={<PrivacyPolicy pageInfo={siteConfig.pages.legal.privacy} />} />
        
        {/* Dynamic Subroutes */}
        {siteConfig.navigation?.map(item => 
          item.submenu?.map(subItem => (
            <Route
              key={subItem.path}
              path={subItem.path}
              element={
                React.createElement(
                  // Try to load the component dynamically
                  require(`./components/pages${subItem.path}`).default,
                  { pageInfo: { ...subItem, type: item.path.slice(1) } }
                )
              }
            />
          ))
        )}
        
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