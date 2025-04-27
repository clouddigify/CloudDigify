import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import serviceRedirects from './utils/serviceRedirects';
import CookieConsentBanner from './components/common/CookieConsentBanner';

// Page Components
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import OurTeam from './components/pages/OurTeam';
import Career from './components/pages/Career';
import Culture from './components/pages/Culture';

// Legal Pages
import TermsAndConditions from './components/pages/legal/TermsAndConditions';
import PrivacyPolicy from './components/pages/legal/PrivacyPolicy';
import CookiePolicy from './components/pages/legal/CookiePolicy';
import Security from './components/pages/legal/Security';

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

// Cloud Service Pages
import AWS from './components/services/cloud/AWS';
import Azure from './components/services/cloud/Azure';
import GoogleCloud from './components/services/cloud/GoogleCloud';
import OracleCloud from './components/services/cloud/OracleCloud';
import AlibabaCloud from './components/services/cloud/AlibabaCloud';

// DevOps Service Pages
import CICD from './components/services/devops/CICD';
import InfrastructureAsCode from './components/services/devops/InfrastructureAsCode';
import Containerization from './components/services/devops/Containerization';
import ServerlessArchitecture from './components/services/devops/ServerlessArchitecture';
import AgileTransformation from './components/services/devops/AgileTransformation';

// Security Service Pages
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

// Infrastructure, Blockchain, and Strategy Service Pages
import InfrastructureServices from './components/services/infrastructure/InfrastructureServices';
import Blockchain from './components/services/blockchain/Blockchain';
import Strategy from './components/services/strategy/Strategy';

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
        <Route path="/contact" element={<Contact />} />
        
        {/* New Routes */}
        <Route path="/team" element={<OurTeam />} />
        <Route path="/career" element={<Career />} />
        <Route path="/culture" element={<Culture />} />
        
        {/* Legal Routes */}
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="/security" element={<Security />} />
        
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
        
        {/* Cloud Service Routes */}
        <Route path="/services/cloud/aws" element={<AWS />} />
        <Route path="/services/cloud/azure" element={<Azure />} />
        <Route path="/services/cloud/googlecloud" element={<GoogleCloud />} />
        <Route path="/services/cloud/oraclecloud" element={<OracleCloud />} />
        <Route path="/services/cloud/alibabacloud" element={<AlibabaCloud />} />
        
        {/* DevOps Service Routes */}
        <Route path="/services/devops/cicd" element={<CICD />} />
        <Route path="/services/devops/iac" element={<InfrastructureAsCode />} />
        <Route path="/services/devops/containerization" element={<Containerization />} />
        <Route path="/services/devops/serverless" element={<ServerlessArchitecture />} />
        <Route path="/services/devops/agile" element={<AgileTransformation />} />
        
        {/* Security Service Routes */}
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

        {/* Infrastructure, Blockchain, and Strategy Routes */}
        <Route path="/services/infrastructure" element={<InfrastructureServices />} />
        <Route path="/services/blockchain" element={<Blockchain />} />
        <Route path="/services/strategy" element={<Strategy />} />        
        
        {/* Redirects for service paths from Home.jsx */}
        <Route path="/services/cloud" element={<Navigate to="/services/cloud/aws" replace />} />
        <Route path="/services/devops" element={<Navigate to="/services/devops/cicd" replace />} />
        <Route path="/services/security" element={<Navigate to="/services/security/cyber-defence" replace />} />
        <Route path="/services/analytics" element={<Navigate to="/services/consulting/data-analytics" replace />} />
        <Route path="/services/digital" element={<Navigate to="/services/digital-engineering" replace />} />
        <Route path="/services/ai" element={<Navigate to="/services/ai/artificial-intelligence" replace />} />
        
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
          <CookieConsentBanner />
        </div>
      </ErrorBoundary>
    </Router>
  );
};

export default App; 