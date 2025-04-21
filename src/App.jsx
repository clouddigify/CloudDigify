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

const App = () => {
  const location = useLocation();
  return (
    <>
      <NavBar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/"         element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/training" element={<Training />} />
            <Route path="/blogs"    element={<Blogs />} />
            <Route path="/contact"  element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
};

export default App; 