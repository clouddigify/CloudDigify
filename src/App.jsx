import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import serviceRedirects from './utils/serviceRedirects';
import CookieConsentBanner from './components/common/CookieConsentBanner';
import NotFound from './components/pages/NotFound';

// Lazy load all page components
const Home = lazy(() => import('./components/pages/Home'));
const Contact = lazy(() => import('./components/pages/Contact'));
const About = lazy(() => import('./components/pages/About'));
const OurTeam = lazy(() => import('./components/pages/OurTeam'));
const Career = lazy(() => import('./components/pages/Career'));
const Culture = lazy(() => import('./components/pages/Culture'));

// Legal Pages
const TermsAndConditions = lazy(() => import('./components/pages/legal/TermsAndConditions'));
const PrivacyPolicy = lazy(() => import('./components/pages/legal/PrivacyPolicy'));
const CookiePolicy = lazy(() => import('./components/pages/legal/CookiePolicy'));
const Security = lazy(() => import('./components/pages/legal/Security'));

// Industry Pages
const FinancialServices = lazy(() => import('./components/pages/industries/FinancialServices'));
const Banking = lazy(() => import('./components/pages/industries/Banking'));
const Healthcare = lazy(() => import('./components/pages/industries/Healthcare'));
const TextileApparel = lazy(() => import('./components/pages/industries/TextileApparel'));
const IndustrialAutomation = lazy(() => import('./components/pages/industries/IndustrialAutomation'));
const ElectricalEquipment = lazy(() => import('./components/pages/industries/ElectricalEquipment'));
const ResearchAdvisory = lazy(() => import('./components/pages/industries/ResearchAdvisory'));
const PublicAdmin = lazy(() => import('./components/pages/industries/PublicAdmin'));
const Manufacturing = lazy(() => import('./components/pages/industries/Manufacturing'));

// Training Pages
const AwsTraining = lazy(() => import('./components/pages/training/AwsTraining'));
const AzureTraining = lazy(() => import('./components/pages/training/AzureTraining'));
const GoogleCloudTraining = lazy(() => import('./components/pages/training/GoogleCloudTraining'));
const OracleCloudTraining = lazy(() => import('./components/pages/training/OracleCloudTraining'));
const AlibabaCloudTraining = lazy(() => import('./components/pages/training/AlibabaCloudTraining'));
const AIMLTraining = lazy(() => import('./components/pages/training/AIMLTraining'));
const AutomationTraining = lazy(() => import('./components/pages/training/AutomationTraining'));
const CorporateTraining = lazy(() => import('./components/pages/training/CorporateTraining'));
const CampusTraining = lazy(() => import('./components/pages/training/CampusTraining'));
const DevOpsTraining = lazy(() => import('./components/pages/training/DevOpsTraining'));
const KubernetesTraining = lazy(() => import('./components/pages/training/KubernetesTraining'));

// Service Pages
const DigitalEngineering = lazy(() => import('./components/services/DigitalEngineering'));
const PlatformOperation = lazy(() => import('./components/services/PlatformOperation'));
const QualityEngineering = lazy(() => import('./components/services/QualityEngineering'));

// Cloud Service Pages
const AWS = lazy(() => import('./components/services/cloud/AWS'));
const Azure = lazy(() => import('./components/services/cloud/Azure'));
const GoogleCloud = lazy(() => import('./components/services/cloud/GoogleCloud'));
const OracleCloud = lazy(() => import('./components/services/cloud/OracleCloud'));
const AlibabaCloud = lazy(() => import('./components/services/cloud/AlibabaCloud'));

// DevOps Service Pages
const CICD = lazy(() => import('./components/services/devops/CICD'));
const InfrastructureAsCode = lazy(() => import('./components/services/devops/InfrastructureAsCode'));
const Containerization = lazy(() => import('./components/services/devops/Containerization'));
const ServerlessArchitecture = lazy(() => import('./components/services/devops/ServerlessArchitecture'));
const AgileTransformation = lazy(() => import('./components/services/devops/AgileTransformation'));

// Security Service Pages
const CyberDefence = lazy(() => import('./components/services/security/CyberDefence'));
const PrivacySmartHub = lazy(() => import('./components/services/security/PrivacySmartHub'));

// AI Service Pages
const ArtificialIntelligence = lazy(() => import('./components/services/ai/ArtificialIntelligence'));
const CognitiveServices = lazy(() => import('./components/services/ai/CognitiveServices'));
const AgenticAI = lazy(() => import('./components/services/ai/AgenticAI'));
const MLOps = lazy(() => import('./components/services/ai/MLOps'));
const RPA = lazy(() => import('./components/services/ai/RPA'));

// Consulting Service Pages
const DigitalIntegration = lazy(() => import('./components/services/consulting/DigitalIntegration'));
const ConsultingOverview = lazy(() => import('./components/services/consulting/ConsultingOverview'));
const ExperienceDesign = lazy(() => import('./components/services/consulting/ExperienceDesign'));
const Databricks = lazy(() => import('./components/services/consulting/Databricks'));
const DataWarehousing = lazy(() => import('./components/services/consulting/DataWarehousing'));
const BusinessIntelligence = lazy(() => import('./components/services/consulting/BusinessIntelligence'));
const DataAnalytics = lazy(() => import('./components/services/consulting/DataAnalytics'));
const DigitalRuntime = lazy(() => import('./components/services/consulting/DigitalRuntime'));

// Infrastructure, Blockchain, and Strategy Service Pages
const InfrastructureServices = lazy(() => import('./components/services/infrastructure/InfrastructureServices'));
const Blockchain = lazy(() => import('./components/services/blockchain/Blockchain'));
const Strategy = lazy(() => import('./components/services/strategy/Strategy'));

import LoadingSpinner from './components/common/LoadingSpinner';

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
      <React.Suspense fallback={<LoadingSpinner />}>
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
          
          {/* Fallback route: show custom 404 page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </React.Suspense>
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