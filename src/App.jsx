import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import NavBar   from './components/NavBar';
import Footer   from './components/Footer';
import Home     from './components/pages/Home';
import Services from './components/pages/Services';
import Industries from './components/pages/Industries';
import Training from './components/pages/Training';
import Blogs    from './components/pages/Blogs';
import Contact  from './components/pages/Contact';
import About    from './components/pages/About';
import TermsAndConditions from './components/pages/legal/TermsAndConditions';
import PrivacyPolicy from './components/pages/legal/PrivacyPolicy';
import CookiePolicy from './components/pages/legal/CookiePolicy';

// Service pages
import DevOps from './components/pages/services/DevOps';
import CloudMigration from './components/pages/services/CloudMigration';
import ManagedServices from './components/pages/services/ManagedServices';
import InfrastructureAsCode from './components/pages/services/InfrastructureAsCode';
import ArchitectureDesign from './components/pages/services/ArchitectureDesign';
import SecurityCompliance from './components/pages/services/SecurityCompliance';
import CloudOptimization from './components/pages/services/CloudOptimization';
import DisasterRecovery from './components/pages/services/DisasterRecovery';
import Containerization from './components/pages/services/Containerization';
import Serverless from './components/pages/services/Serverless';
import CloudInfrastructure from './components/pages/services/CloudInfrastructure';

// Industry pages
import FinancialServices from './components/pages/industries/FinancialServices';
import Banking from './components/pages/industries/Banking';

// Admin components
import AdminLogin from './components/Admin/Login';
import AdminDashboard from './components/Admin/Dashboard';
import PageEditor from './components/Admin/PageEditor';
import PageManager from './components/Admin/PageManager';

// Import the page configuration
import {
  mainPages,
  servicePages,
  industryPages,
  legalPages,
  isPageEnabled
} from './config/pageConfig';

// Component that checks if a page is enabled
const EnabledRoute = ({ pageKey, category, element, fallback = "/" }) => {
  // Check if the page should be rendered
  const isEnabled = isPageEnabled(pageKey, category);
  
  // If enabled, render the element, otherwise redirect to the fallback route
  return isEnabled ? element : <Navigate to={fallback} replace />;
};

const App = () => {
  const location = useLocation();
  
  // Check if the current route is an admin route
  const isAdminRoute = location.pathname.startsWith('/admin');

  // Load saved configurations from local storage
  React.useEffect(() => {
    const loadSavedConfig = (configName, defaultConfig) => {
      const savedConfig = localStorage.getItem(`clouddigify_${configName}`);
      if (savedConfig) {
        try {
          // We're not using the result here, just checking if it exists
          // In a full implementation, this would update the config
          JSON.parse(savedConfig);
          console.log(`Loaded saved ${configName} configuration`);
        } catch (error) {
          console.error(`Error parsing saved ${configName}:`, error);
        }
      }
    };
    
    loadSavedConfig('mainPages', mainPages);
    loadSavedConfig('servicePages', servicePages);
    loadSavedConfig('industryPages', industryPages);
    loadSavedConfig('legalPages', legalPages);
  }, []);
  
  return (
    <>
      {!isAdminRoute && <NavBar />}
      <main className={`${isAdminRoute ? '' : 'flex-grow'}`}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* Public Routes */}
            <Route path="/" element={<EnabledRoute pageKey="home" category="main" element={<Home />} />} />
            <Route path="/about" element={<EnabledRoute pageKey="about" category="main" element={<About />} />} />
            <Route path="/services" element={<EnabledRoute pageKey="services" category="main" element={<Services />} />} />
            <Route path="/industries" element={<EnabledRoute pageKey="industries" category="main" element={<Industries />} />} />
            <Route path="/training" element={<EnabledRoute pageKey="training" category="main" element={<Training />} />} />
            <Route path="/blogs" element={<EnabledRoute pageKey="blogs" category="main" element={<Blogs />} />} />
            <Route path="/contact" element={<EnabledRoute pageKey="contact" category="main" element={<Contact />} />} />
            <Route path="/terms" element={<EnabledRoute pageKey="terms" category="legal" element={<TermsAndConditions />} />} />
            <Route path="/privacy" element={<EnabledRoute pageKey="privacy" category="legal" element={<PrivacyPolicy />} />} />
            <Route path="/cookies" element={<EnabledRoute pageKey="cookies" category="legal" element={<CookiePolicy />} />} />
            
            {/* Service Routes */}
            <Route path="/services/devops" element={<EnabledRoute pageKey="devops" category="service" element={<DevOps />} fallback="/services" />} />
            <Route path="/services/cloud-migration" element={<EnabledRoute pageKey="cloudMigration" category="service" element={<CloudMigration />} fallback="/services" />} />
            <Route path="/services/managed-services" element={<EnabledRoute pageKey="managedServices" category="service" element={<ManagedServices />} fallback="/services" />} />
            <Route path="/services/infrastructure-as-code" element={<EnabledRoute pageKey="infrastructureAsCode" category="service" element={<InfrastructureAsCode />} fallback="/services" />} />
            <Route path="/services/architecture-design" element={<EnabledRoute pageKey="architectureDesign" category="service" element={<ArchitectureDesign />} fallback="/services" />} />
            <Route path="/services/security-compliance" element={<EnabledRoute pageKey="securityCompliance" category="service" element={<SecurityCompliance />} fallback="/services" />} />
            <Route path="/services/cloud-optimization" element={<EnabledRoute pageKey="cloudOptimization" category="service" element={<CloudOptimization />} fallback="/services" />} />
            <Route path="/services/disaster-recovery" element={<EnabledRoute pageKey="disasterRecovery" category="service" element={<DisasterRecovery />} fallback="/services" />} />
            <Route path="/services/containerization" element={<EnabledRoute pageKey="containerization" category="service" element={<Containerization />} fallback="/services" />} />
            <Route path="/services/serverless" element={<EnabledRoute pageKey="serverless" category="service" element={<Serverless />} fallback="/services" />} />
            <Route path="/services/cloud-infrastructure" element={<EnabledRoute pageKey="cloudInfrastructure" category="service" element={<CloudInfrastructure />} fallback="/services" />} />
            
            {/* Industry Routes */}
            <Route path="/industries/financial-services" element={<EnabledRoute pageKey="financialServices" category="industry" element={<FinancialServices />} fallback="/industries" />} />
            <Route path="/industries/banking" element={<EnabledRoute pageKey="banking" category="industry" element={<Banking />} fallback="/industries" />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/pages" element={<PageManager />} />
            <Route path="/admin/edit/:pagePath" element={<PageEditor />} />

            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </main>
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App; 