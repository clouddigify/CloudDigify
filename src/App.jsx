import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import LoadingSpinner from './components/common/LoadingSpinner';
import { getRedirect } from './config/redirects';

// Lazy load components
const Home = lazy(() => import('./components/pages/Home'));
const About = lazy(() => import('./components/pages/About'));
const Services = lazy(() => import('./components/pages/Services'));
const Contact = lazy(() => import('./components/pages/Contact'));
const NotFound = lazy(() => import('./components/pages/NotFound'));

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
          <main className="flex-grow">
            <Suspense fallback={<LoadingSpinner />}>
              <RedirectHandler>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact" element={<Contact />} />
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