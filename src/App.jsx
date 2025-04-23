import React, { Suspense } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { siteConfig } from './config/siteConfig';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Page Components
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Industries from './components/pages/Industries';
import TrainingServices from './components/pages/TrainingServices';
import UseCases from './components/pages/UseCases';
import Blogs from './components/pages/Blogs';
import Contact from './components/pages/Contact';
import TermsAndConditions from './components/pages/legal/TermsAndConditions';
import PrivacyPolicy from './components/pages/legal/PrivacyPolicy';

// Use Case Components
import CloudMigrationCases from './components/pages/use-cases/CloudMigrationCases';
import DigitalInnovationCases from './components/pages/use-cases/DigitalInnovationCases';
import EnterpriseUseCases from './components/pages/use-cases/EnterpriseUseCases';

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">Please try refreshing the page</p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <pre className="text-left text-sm text-red-600 bg-red-50 p-4 rounded mb-4 overflow-auto">
                {this.state.error.toString()}
              </pre>
            )}
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Loading Component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
  </div>
);

// Wrap routes with AnimatePresence
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Main Routes */}
        <Route path="/" element={
          <ErrorBoundary>
            <Home pageInfo={siteConfig.pages.home} />
          </ErrorBoundary>
        } />
        <Route path="/about" element={<About pageInfo={siteConfig.pages.about} />} />
        <Route path="/services" element={<Services pageInfo={siteConfig.pages.services} />} />
        <Route path="/industries" element={<Industries pageInfo={siteConfig.pages.industries} />} />
        <Route path="/training-services" element={<TrainingServices pageInfo={siteConfig.pages.training} />} />
        <Route path="/use-cases" element={<UseCases pageInfo={siteConfig.pages.useCases} />} />
        <Route path="/blogs" element={<Blogs pageInfo={siteConfig.pages.blogs} />} />
        <Route path="/contact" element={<Contact pageInfo={siteConfig.pages.contact} />} />
        
        {/* Use Cases Routes */}
        <Route path="/use-cases/cloud-migration" element={<CloudMigrationCases pageInfo={siteConfig.pages.useCases.cloudMigration} />} />
        <Route path="/use-cases/digital-innovation" element={<DigitalInnovationCases pageInfo={siteConfig.pages.useCases.digitalInnovation} />} />
        <Route path="/use-cases/enterprise" element={<EnterpriseUseCases pageInfo={siteConfig.pages.useCases.enterprise} />} />
        
        {/* Legal Routes */}
        <Route path="/terms" element={<TermsAndConditions pageInfo={siteConfig.pages.legal.terms} />} />
        <Route path="/privacy" element={<PrivacyPolicy pageInfo={siteConfig.pages.legal.privacy} />} />
        
        {/* Dynamic Subroutes */}
        {siteConfig.navigation.main?.filter(item => item.submenu)?.map(item => 
          item.submenu?.map(subItem => (
            <Route
              key={subItem.path}
              path={subItem.path}
              element={
                <ErrorBoundary>
                  <Suspense fallback={<LoadingSpinner />}>
                    {React.createElement(
                      // Try to load the component dynamically
                      require(`./components/pages${subItem.path}`).default,
                      { pageInfo: { ...subItem, type: item.path.slice(1) } }
                    )}
                  </Suspense>
                </ErrorBoundary>
              }
            />
          ))
        )}
        
        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div className="flex flex-col min-h-screen bg-white">
          <NavBar />
          <Suspense fallback={<LoadingSpinner />}>
            <main className="flex-grow">
              <AnimatedRoutes />
            </main>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App; 