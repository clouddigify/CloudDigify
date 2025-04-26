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

// Service Pages
import AWS from './components/services/cloud/AWS';
import Azure from './components/services/cloud/Azure';
import GoogleCloud from './components/services/cloud/GoogleCloud';
import OracleCloud from './components/services/cloud/OracleCloud';
import AlibabaCloud from './components/services/cloud/AlibabaCloud';

// Digital Engineering Pages
import DigitalEngineering from './components/services/DigitalEngineering';
import PlatformOperation from './components/services/PlatformOperation';
import QualityEngineering from './components/services/QualityEngineering';

// DevOps Service Pages
import CICD from './components/services/devops/CICD';
import InfrastructureAsCode from './components/services/devops/InfrastructureAsCode';
import Containerization from './components/services/devops/Containerization';
import ServerlessArchitecture from './components/services/devops/ServerlessArchitecture';
import AgileTransformation from './components/services/devops/AgileTransformation';

// Security & Compliance Pages
import CyberDefence from './components/services/security/CyberDefence';
import PrivacySmartHub from './components/services/security/PrivacySmartHub';

// AI Service Pages
import ArtificialIntelligence from './components/services/ai/ArtificialIntelligence';
import CognitiveServices from './components/services/ai/CognitiveServices';
import AgenticAI from './components/services/ai/AgenticAI';
import MLOps from './components/services/ai/MLOps';
import RPA from './components/services/ai/RPA';

// Consulting Service Pages
import DigitalIntegration from './components/services/consulting/DigitalIntegration';
import ConsultingOverview from './components/services/consulting/ConsultingOverview';
import ExperienceDesign from './components/services/consulting/ExperienceDesign';
import Databricks from './components/services/consulting/Databricks';
import DataWarehousing from './components/services/consulting/DataWarehousing';
import BusinessIntelligence from './components/services/consulting/BusinessIntelligence';
import DataAnalytics from './components/services/consulting/DataAnalytics';
import DigitalRuntime from './components/services/consulting/DigitalRuntime';

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

// Wrap routes with AnimatePresence
const AnimatedRoutes = () => {
  const location = useLocation();
  console.log('Current location:', location.pathname);
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public Routes */}
        <Route path="/" element={
          <ErrorBoundary>
            <Home />
          </ErrorBoundary>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/training-services" element={<TrainingServices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        
        {/* Cloud Service Routes */}
        <Route path="/services/cloud/aws" element={<AWS />} />
        <Route path="/services/cloud/azure" element={<Azure />} />
        <Route path="/services/cloud/googlecloud" element={<GoogleCloud />} />
        <Route path="/services/cloud/oraclecloud" element={<OracleCloud />} />
        <Route path="/services/cloud/alibabacloud" element={<AlibabaCloud />} />
        
        {/* Digital Engineering Routes */}
        <Route path="/services/digital-engineering" element={<DigitalEngineering />} />
        <Route path="/services/platform-operation" element={<PlatformOperation />} />
        <Route path="/services/quality-engineering" element={<QualityEngineering />} />
        
        {/* DevOps Service Routes */}
        <Route path="/services/devops/cicd" element={<CICD />} />
        <Route path="/services/devops/iac" element={<InfrastructureAsCode />} />
        <Route path="/services/devops/containerization" element={<Containerization />} />
        <Route path="/services/devops/serverless" element={<ServerlessArchitecture />} />
        <Route path="/services/devops/agile" element={<AgileTransformation />} />
        
        {/* Security & Compliance Routes */}
        <Route path="/services/security/cyber-defence" element={<CyberDefence />} />
        <Route path="/services/security/privacy-smarthub" element={<PrivacySmartHub />} />
        
        {/* AI Service Routes */}
        <Route path="/services/ai/artificial-intelligence" element={<ArtificialIntelligence />} />
        <Route path="/services/ai/cognitive-services" element={<CognitiveServices />} />
        <Route path="/services/ai/agentic-ai" element={<AgenticAI />} />
        <Route path="/services/ai/mlops" element={<MLOps />} />
        <Route path="/services/ai/rpa" element={<RPA />} />
        
        {/* Consulting Service Routes */}
        <Route path="/services/consulting/digital-integration" element={<DigitalIntegration />} />
        <Route path="/services/consulting/overview" element={<ConsultingOverview />} />
        <Route path="/services/consulting/experience-design" element={<ExperienceDesign />} />
        <Route path="/services/consulting/databricks" element={<Databricks />} />
        <Route path="/services/consulting/data-warehousing" element={<DataWarehousing />} />
        <Route path="/services/consulting/business-intelligence" element={<BusinessIntelligence />} />
        <Route path="/services/consulting/data-analytics" element={<DataAnalytics />} />
        <Route path="/services/consulting/digital-runtime" element={<DigitalRuntime />} />
        
        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  console.log('App rendering');
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