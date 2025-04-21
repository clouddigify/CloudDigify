import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import NavBar   from './components/NavBar';
import Footer   from './components/Footer';
import Home     from './components/pages/Home';
import Services from './components/pages/Services';
import Training from './components/pages/Training';
import Blogs    from './components/pages/Blogs';
import Contact  from './components/pages/Contact';
import About    from './components/pages/About';
import TermsAndConditions from './components/pages/legal/TermsAndConditions';
import PrivacyPolicy from './components/pages/legal/PrivacyPolicy';
import CookiePolicy from './components/pages/legal/CookiePolicy';
import DevOps from './components/pages/services/DevOps';
import CloudMigration from './components/pages/services/CloudMigration';
import ManagedServices from './components/pages/services/ManagedServices';
import InfrastructureAsCode from './components/pages/services/InfrastructureAsCode';
import ArchitectureDesign from './components/pages/services/ArchitectureDesign';
import SecurityCompliance from './components/pages/services/SecurityCompliance';

// Admin components
import AdminLogin from './components/Admin/Login';
import AdminDashboard from './components/Admin/Dashboard';

const App = () => {
  const location = useLocation();
  
  // Check if the current route is an admin route
  const isAdminRoute = location.pathname.startsWith('/admin');
  
  return (
    <>
      {!isAdminRoute && <NavBar />}
      <main className={`${isAdminRoute ? '' : 'flex-grow'}`}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* Public Routes */}
            <Route path="/"         element={<Home />} />
            <Route path="/about"    element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/training" element={<Training />} />
            <Route path="/blogs"    element={<Blogs />} />
            <Route path="/contact"  element={<Contact />} />
            <Route path="/terms"    element={<TermsAndConditions />} />
            <Route path="/privacy"  element={<PrivacyPolicy />} />
            <Route path="/cookies"  element={<CookiePolicy />} />
            <Route path="/services/devops" element={<DevOps />} />
            <Route path="/services/cloud-migration" element={<CloudMigration />} />
            <Route path="/services/managed-services" element={<ManagedServices />} />
            <Route path="/services/infrastructure-as-code" element={<InfrastructureAsCode />} />
            <Route path="/services/architecture-design" element={<ArchitectureDesign />} />
            <Route path="/services/security-compliance" element={<SecurityCompliance />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </AnimatePresence>
      </main>
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App; 