import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import LoadingSpinner from './components/common/LoadingSpinner';
import Breadcrumbs from './components/common/Breadcrumbs';
import { getRedirect } from './config/redirects';

// Lazy load components
const Home = lazy(() => import('./components/pages/Home'));
const About = lazy(() => import('./components/pages/About'));
const Services = lazy(() => import('./components/pages/Services'));
const Contact = lazy(() => import('./components/pages/Contact'));
const Team = lazy(() => import('./components/pages/Team'));
const Career = lazy(() => import('./components/pages/Career'));
const Culture = lazy(() => import('./components/pages/Culture'));
const NotFound = lazy(() => import('./components/pages/NotFound'));

// Training pages
const AwsTraining = lazy(() => import('./components/pages/training/AwsTraining'));
const AzureTraining = lazy(() => import('./components/pages/training/AzureTraining'));
const GoogleCloudTraining = lazy(() => import('./components/pages/training/GoogleCloudTraining'));
const OracleCloudTraining = lazy(() => import('./components/pages/training/OracleCloudTraining'));
const AlibabaCloudTraining = lazy(() => import('./components/pages/training/AlibabaCloudTraining'));
const KubernetesTraining = lazy(() => import('./components/pages/training/KubernetesTraining'));
const DevOpsTraining = lazy(() => import('./components/pages/training/DevOpsTraining'));
const AIMLTraining = lazy(() => import('./components/pages/training/AIMLTraining'));
const AutomationTraining = lazy(() => import('./components/pages/training/AutomationTraining'));
const CampusTraining = lazy(() => import('./components/pages/training/CampusTraining'));
const CorporateTraining = lazy(() => import('./components/pages/training/CorporateTraining'));

// Industry pages
const Banking = lazy(() => import('./components/pages/industries/Banking'));
const Healthcare = lazy(() => import('./components/pages/industries/Healthcare'));
const Manufacturing = lazy(() => import('./components/pages/industries/Manufacturing'));
const FinancialServices = lazy(() => import('./components/pages/industries/FinancialServices'));
const IndustrialAutomation = lazy(() => import('./components/pages/industries/IndustrialAutomation'));
const ElectricalEquipment = lazy(() => import('./components/pages/industries/ElectricalEquipment'));
const TextileApparel = lazy(() => import('./components/pages/industries/TextileApparel'));
const ResearchAdvisory = lazy(() => import('./components/pages/industries/ResearchAdvisory'));
const PublicAdmin = lazy(() => import('./components/pages/industries/PublicAdmin'));

// Legal pages
const PrivacyPolicy = lazy(() => import('./components/pages/legal/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./components/pages/legal/TermsAndConditions'));
const CookiePolicy = lazy(() => import('./components/pages/legal/CookiePolicy'));
const Security = lazy(() => import('./components/pages/legal/Security'));

// Redirect component to handle 301 redirects
const RedirectHandler = ({ children }) => {
  const location = useLocation();
  const redirectPath = getRedirect(location.pathname);

  if (redirectPath) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <Breadcrumbs />
          <main className="flex-grow">
            <Suspense fallback={<LoadingSpinner />}>
              <RedirectHandler>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/career" element={<Career />} />
                  <Route path="/culture" element={<Culture />} />
                  
                  {/* Training Routes */}
                  <Route path="/training/aws" element={<AwsTraining />} />
                  <Route path="/training/azure" element={<AzureTraining />} />
                  <Route path="/training/google-cloud" element={<GoogleCloudTraining />} />
                  <Route path="/training/oracle-cloud" element={<OracleCloudTraining />} />
                  <Route path="/training/alibaba-cloud" element={<AlibabaCloudTraining />} />
                  <Route path="/training/kubernetes" element={<KubernetesTraining />} />
                  <Route path="/training/devops" element={<DevOpsTraining />} />
                  <Route path="/training/ai-ml" element={<AIMLTraining />} />
                  <Route path="/training/automation" element={<AutomationTraining />} />
                  <Route path="/training/campus" element={<CampusTraining />} />
                  <Route path="/training/corporate" element={<CorporateTraining />} />
                  
                  {/* Industry Routes */}
                  <Route path="/industries/banking" element={<Banking />} />
                  <Route path="/industries/healthcare" element={<Healthcare />} />
                  <Route path="/industries/manufacturing" element={<Manufacturing />} />
                  <Route path="/industries/financial-services" element={<FinancialServices />} />
                  <Route path="/industries/industrial-automation" element={<IndustrialAutomation />} />
                  <Route path="/industries/electrical-equipment" element={<ElectricalEquipment />} />
                  <Route path="/industries/textile-apparel" element={<TextileApparel />} />
                  <Route path="/industries/research-advisory" element={<ResearchAdvisory />} />
                  <Route path="/industries/public-admin" element={<PublicAdmin />} />
                  
                  {/* Legal Routes */}
                  <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/legal/terms-and-conditions" element={<TermsAndConditions />} />
                  <Route path="/legal/cookie-policy" element={<CookiePolicy />} />
                  <Route path="/legal/security" element={<Security />} />
                  
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </RedirectHandler>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App; 