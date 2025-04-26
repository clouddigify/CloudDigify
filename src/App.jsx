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
import UseCases from './components/pages/UseCases';
import Blogs from './components/pages/Blogs';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import BrandedIconsDemo from './components/pages/BrandedIconsDemo';

// Legal Pages
import TermsAndConditions from './components/pages/legal/TermsAndConditions';
import PrivacyPolicy from './components/pages/legal/PrivacyPolicy';

// Service Pages
import DevOps from './components/pages/services/DevOps';
import CloudMigration from './components/pages/services/CloudMigration';
import ManagedServices from './components/pages/services/ManagedServices';
import ArchitectureDesign from './components/pages/services/ArchitectureDesign';
import SecurityCompliance from './components/pages/services/SecurityCompliance';
import CloudOptimization from './components/pages/services/CloudOptimization';
import DisasterRecovery from './components/pages/services/DisasterRecovery';
import Serverless from './components/pages/services/Serverless';
import CloudInfrastructure from './components/pages/services/CloudInfrastructure';
import AWS from './components/services/cloud/AWS';
import Azure from './components/services/cloud/Azure';
import GoogleCloud from './components/services/cloud/GoogleCloud';
import OracleCloud from './components/services/cloud/OracleCloud';
import AlibabaCloud from './components/services/cloud/AlibabaCloud';
import InfrastructureServices from './components/services/infrastructure/InfrastructureServices';

// New Service Pages - Using the existing component files
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

// Training Pages
import AWSTraining from './components/pages/training/AWSTraining';
import AzureTraining from './components/pages/training/AzureTraining';
import GoogleCloudTraining from './components/pages/training/GoogleCloudTraining';
import AlibabaCloudTraining from './components/pages/training/AlibabaCloudTraining';
import OracleCloudTraining from './components/pages/training/OracleCloudTraining';
import AIMLTraining from './components/pages/training/AIMLTraining';
import AutomationTraining from './components/pages/training/AutomationTraining';
import CorporateTraining from './components/pages/training/CorporateTraining';
import CampusTraining from './components/pages/training/CampusTraining';
import DevOpsTraining from './components/pages/training/DevOpsTraining';
import KubernetesTraining from './components/pages/training/KubernetesTraining';

// Use Cases Pages
import EnterpriseUseCases from './components/pages/use-cases/EnterpriseUseCases';
import CloudMigrationCases from './components/pages/use-cases/CloudMigrationCases';
import DigitalInnovationCases from './components/pages/use-cases/DigitalInnovationCases';

// Industry Pages
import FinancialServices from './components/pages/industries/FinancialServices';
import Banking from './components/pages/industries/Banking';
import Healthcare from './components/pages/industries/Healthcare';
import Textile from './components/pages/industries/Textile';
import IndustrialAutomation from './components/pages/industries/IndustrialAutomation';
import Electrical from './components/pages/industries/Electrical';
import Research from './components/pages/industries/Research';
import PublicAdmin from './components/pages/industries/PublicAdmin';

// Consulting Services
import DigitalIntegration from './components/services/consulting/DigitalIntegration';
import ConsultingOverview from './components/services/consulting/ConsultingOverview';
import ExperienceDesign from './components/services/consulting/ExperienceDesign';
import Databricks from './components/services/consulting/Databricks';
import DataWarehousing from './components/services/consulting/DataWarehousing';
import BusinessIntelligence from './components/services/consulting/BusinessIntelligence';
import DataAnalytics from './components/services/consulting/DataAnalytics';
import DigitalRuntime from './components/services/consulting/DigitalRuntime';

// Strategy and Blockchain Services
import Strategy from './components/services/strategy/Strategy';
import Blockchain from './components/services/blockchain/Blockchain';

// AI Service Components
import ArtificialIntelligence from './components/services/ai/ArtificialIntelligence';
import CognitiveServices from './components/services/ai/CognitiveServices';
import AgenticAI from './components/services/ai/AgenticAI';
import MLOps from './components/services/ai/MLOps';
import RPA from './components/services/ai/RPA';

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
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/icons-demo" element={<BrandedIconsDemo />} />
        
        {/* Service Routes */}
        <Route path="/services/devops" element={<DevOps />} />
        <Route path="/services/cloud-migration" element={<CloudMigration />} />
        <Route path="/services/managed-services" element={<ManagedServices />} />
        <Route path="/services/architecture-design" element={<ArchitectureDesign />} />
        <Route path="/services/security-compliance" element={<SecurityCompliance />} />
        <Route path="/services/cloud-optimization" element={<CloudOptimization />} />
        <Route path="/services/disaster-recovery" element={<DisasterRecovery />} />
        <Route path="/services/serverless" element={<Serverless />} />
        <Route path="/services/cloud-infrastructure" element={<CloudInfrastructure />} />
        <Route path="/services/cloud/aws" element={<AWS />} />
        <Route path="/services/cloud/azure" element={<Azure />} />
        <Route path="/services/cloud/googlecloud" element={<GoogleCloud />} />
        <Route path="/services/cloud/oraclecloud" element={<OracleCloud />} />
        <Route path="/services/cloud/alibabacloud" element={<AlibabaCloud />} />
        <Route path="/services/infrastructure" element={<InfrastructureServices />} />
        
        {/* Digital Engineering, Platform Operation, and Quality Engineering Routes */}
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
        
        {/* Training Routes */}
        <Route path="/training" element={<TrainingServices />} />
        <Route path="/training/aws" element={<AWSTraining />} />
        <Route path="/training/azure" element={<AzureTraining />} />
        <Route path="/training/googlecloud" element={<GoogleCloudTraining />} />
        <Route path="/training/alibabacloud" element={<AlibabaCloudTraining />} />
        <Route path="/training/oracle" element={<OracleCloudTraining />} />
        <Route path="/training/ai-ml" element={<AIMLTraining />} />
        <Route path="/training/automation" element={<AutomationTraining />} />
        <Route path="/training/corporate" element={<CorporateTraining />} />
        <Route path="/training/campus" element={<CampusTraining />} />
        <Route path="/training/devops" element={<DevOpsTraining />} />
        <Route path="/training/kubernetes" element={<KubernetesTraining />} />
        
        {/* Use Cases Routes */}
        <Route path="/use-cases/enterprise" element={<EnterpriseUseCases />} />
        <Route path="/use-cases/migration" element={<CloudMigrationCases />} />
        <Route path="/use-cases/innovation" element={<DigitalInnovationCases />} />
        
        {/* Industry Routes */}
        <Route path="/industries/financial-services" element={<FinancialServices />} />
        <Route path="/industries/banking" element={<Banking />} />
        <Route path="/industries/healthcare" element={<Healthcare />} />
        <Route path="/industries/textile" element={<Textile />} />
        <Route path="/industries/automation" element={<IndustrialAutomation />} />
        <Route path="/industries/electrical" element={<Electrical />} />
        <Route path="/industries/research" element={<Research />} />
        <Route path="/industries/governance" element={<PublicAdmin />} />
        
        {/* Consulting Service Routes */}
        <Route path="/services/consulting/digital-integration" element={<DigitalIntegration />} />
        <Route path="/services/consulting/overview" element={<ConsultingOverview />} />
        <Route path="/services/consulting/experience-design" element={<ExperienceDesign />} />
        <Route path="/services/consulting/databricks" element={<Databricks />} />
        <Route path="/services/consulting/data-warehousing" element={<DataWarehousing />} />
        <Route path="/services/consulting/business-intelligence" element={<BusinessIntelligence />} />
        <Route path="/services/consulting/data-analytics" element={<DataAnalytics />} />
        <Route path="/services/consulting/digital-runtime" element={<DigitalRuntime />} />

        {/* Strategy and Blockchain Routes */}
        <Route path="/services/strategy" element={<Strategy />} />
        <Route path="/services/blockchain" element={<Blockchain />} />
        
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