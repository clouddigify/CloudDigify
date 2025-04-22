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

const App = () => {
  const location = useLocation();
  
  return (
    <>
      <NavBar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/training" element={<Training />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            
            {/* Service Routes */}
            <Route path="/services/devops" element={<DevOps />} />
            <Route path="/services/cloud-migration" element={<CloudMigration />} />
            <Route path="/services/managed-services" element={<ManagedServices />} />
            <Route path="/services/infrastructure-as-code" element={<InfrastructureAsCode />} />
            <Route path="/services/architecture-design" element={<ArchitectureDesign />} />
            <Route path="/services/security-compliance" element={<SecurityCompliance />} />
            <Route path="/services/cloud-optimization" element={<CloudOptimization />} />
            <Route path="/services/disaster-recovery" element={<DisasterRecovery />} />
            <Route path="/services/containerization" element={<Containerization />} />
            <Route path="/services/serverless" element={<Serverless />} />
            <Route path="/services/cloud-infrastructure" element={<CloudInfrastructure />} />
            
            {/* Industry Routes */}
            <Route path="/industries/financial-services" element={<FinancialServices />} />
            <Route path="/industries/banking" element={<Banking />} />
            
            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
};

export default App; 