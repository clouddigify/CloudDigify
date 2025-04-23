import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Page Components
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Industries from './components/pages/Industries';
import TrainingServices from './components/pages/TrainingServices';
import UseCases from './components/pages/UseCases';
import Blogs from './components/pages/Blogs';
import Contact from './components/pages/Contact';
import About from './components/pages/About';

// Legal Pages
import TermsAndConditions from './components/pages/legal/TermsAndConditions';
import PrivacyPolicy from './components/pages/legal/PrivacyPolicy';

// Service Pages
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

// Training Pages
import AwsTraining from './components/pages/training/AwsTraining';
import AzureTraining from './components/pages/training/AzureTraining';
import DevOpsTraining from './components/pages/training/DevOpsTraining';
import KubernetesTraining from './components/pages/training/KubernetesTraining';

// Use Cases Pages
import EnterpriseUseCases from './components/pages/use-cases/EnterpriseUseCases';
import CloudMigrationCases from './components/pages/use-cases/CloudMigrationCases';
import DigitalInnovationCases from './components/pages/use-cases/DigitalInnovationCases';

// Industry Pages
import FinancialServices from './components/pages/industries/FinancialServices';
import Banking from './components/pages/industries/Banking';

// Wrap routes with AnimatePresence
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/training-services" element={<TrainingServices />} />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        
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
        
        {/* Training Routes */}
        <Route path="/training-services/aws" element={<AwsTraining />} />
        <Route path="/training-services/azure" element={<AzureTraining />} />
        <Route path="/training-services/devops" element={<DevOpsTraining />} />
        <Route path="/training-services/kubernetes" element={<KubernetesTraining />} />
        
        {/* Use Cases Routes */}
        <Route path="/use-cases/enterprise" element={<EnterpriseUseCases />} />
        <Route path="/use-cases/migration" element={<CloudMigrationCases />} />
        <Route path="/use-cases/innovation" element={<DigitalInnovationCases />} />
        
        {/* Industry Routes */}
        <Route path="/industries/financial-services" element={<FinancialServices />} />
        <Route path="/industries/banking" element={<Banking />} />
        
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