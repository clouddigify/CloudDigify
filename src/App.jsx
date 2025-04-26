import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ScrollToTop from './components/common/ScrollToTop';

// Page Components
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Industries from './components/pages/Industries';
import TrainingServices from './components/pages/TrainingServices';
import Contact from './components/pages/Contact';
import About from './components/pages/About';

// Legal Pages
import TermsAndConditions from './components/pages/legal/TermsAndConditions';
import PrivacyPolicy from './components/pages/legal/PrivacyPolicy';

// Industry Pages
import FinancialServices from './components/pages/industries/FinancialServices';
import Banking from './components/pages/industries/Banking';
import Healthcare from './components/pages/industries/Healthcare';
import TextileApparel from './components/pages/industries/TextileApparel';
import IndustrialAutomation from './components/pages/industries/IndustrialAutomation';
import ElectricalEquipment from './components/pages/industries/ElectricalEquipment';
import ResearchAdvisory from './components/pages/industries/ResearchAdvisory';
import PublicAdmin from './components/pages/industries/PublicAdmin';
import Manufacturing from './components/pages/industries/Manufacturing';

// Training Pages
import AwsTraining from './components/pages/training/AwsTraining';
import AzureTraining from './components/pages/training/AzureTraining';
import GoogleCloudTraining from './components/pages/training/GoogleCloudTraining';
import OracleCloudTraining from './components/pages/training/OracleCloudTraining';
import AlibabaCloudTraining from './components/pages/training/AlibabaCloudTraining';
import AIMLTraining from './components/pages/training/AIMLTraining';
import AutomationTraining from './components/pages/training/AutomationTraining';
import CorporateTraining from './components/pages/training/CorporateTraining';
import CampusTraining from './components/pages/training/CampusTraining';
import DevOpsTraining from './components/pages/training/DevOpsTraining';
import KubernetesTraining from './components/pages/training/KubernetesTraining';

// Service Pages
import DigitalEngineering from './components/services/DigitalEngineering';
import PlatformOperation from './components/services/PlatformOperation';
import QualityEngineering from './components/services/QualityEngineering';

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error);
    console.error('Error info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4">
          <h1>Something went wrong.</h1>
          <pre>{this.state.error?.toString()}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public Routes */}
        <Route path="/" element={<ErrorBoundary><Home /></ErrorBoundary>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/training" element={<TrainingServices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        
        {/* Industry Routes */}
        <Route path="/industries/financial-services" element={<FinancialServices />} />
        <Route path="/industries/banking" element={<Banking />} />
        <Route path="/industries/healthcare" element={<Healthcare />} />
        <Route path="/industries/textile" element={<TextileApparel />} />
        <Route path="/industries/automation" element={<IndustrialAutomation />} />
        <Route path="/industries/electrical" element={<ElectricalEquipment />} />
        <Route path="/industries/research" element={<ResearchAdvisory />} />
        <Route path="/industries/governance" element={<PublicAdmin />} />
        <Route path="/industries/manufacturing" element={<Manufacturing />} />

        {/* Training Routes */}
        <Route path="/training/aws" element={<AwsTraining />} />
        <Route path="/training/azure" element={<AzureTraining />} />
        <Route path="/training/googlecloud" element={<GoogleCloudTraining />} />
        <Route path="/training/oracle" element={<OracleCloudTraining />} />
        <Route path="/training/alibabacloud" element={<AlibabaCloudTraining />} />
        <Route path="/training/ai-ml" element={<AIMLTraining />} />
        <Route path="/training/automation" element={<AutomationTraining />} />
        <Route path="/training/corporate" element={<CorporateTraining />} />
        <Route path="/training/campus" element={<CampusTraining />} />
        <Route path="/training/devops" element={<DevOpsTraining />} />
        <Route path="/training/kubernetes" element={<KubernetesTraining />} />
        
        {/* Service Routes */}
        <Route path="/services/digital-engineering" element={<DigitalEngineering />} />
        <Route path="/services/platform-operation" element={<PlatformOperation />} />
        <Route path="/services/quality-engineering" element={<QualityEngineering />} />
        
        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router basename="/">
      <ErrorBoundary>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </Router>
  );
};

export default App; 