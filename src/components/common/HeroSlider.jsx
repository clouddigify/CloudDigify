import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

const slides = [
  {
    image: '/images/homepage3.jpg', // Abstract cloud infrastructure visual
    alt: 'Abstract cloud infrastructure',
    title: 'Elevate Your Business with CloudDigify',
    subtitle: 'Unlock growth and efficiency with expert cloud, DevOps, and transformation services.',
    cta: { label: 'Get Started', link: '/contact' },
    gradient: 'bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-indigo-900/80'
  },
  {
    image: '/images/homepage1.jpg', // Secure cloud/network system visual
    alt: 'Secure cloud network system',
    title: 'Transform with Confidence',
    subtitle: 'Modernize your enterprise with secure, scalable, and innovative cloud solutions.',
    cta: { label: 'Start Your Journey', link: '/contact' },
    gradient: 'bg-gradient-to-br from-indigo-900/80 via-blue-800/70 to-blue-900/80'
  },
  {
    image: '/images/homepage2.jpg', // Futuristic automation dashboard visual
    alt: 'Futuristic automation dashboard',
    title: 'Seamless Cloud Solutions',
    subtitle: 'Accelerate your digital journey with tailored automation expertise.',
    cta: { label: 'Explore Services', action: 'scroll' },
    gradient: 'bg-gradient-to-br from-blue-800/80 via-indigo-900/70 to-blue-900/80'
  }
];

const SLIDE_INTERVAL = 6000;

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  // Function to scroll to Cloud Transformation Expertise section
  const scrollToServices = () => {
    // Try to find the section with "Cloud Transformation Expertise" heading
    const headings = document.querySelectorAll('h2');
    const servicesHeading = Array.from(headings).find(heading => 
      heading.textContent.includes('Cloud Transformation Expertise')
    );
    
    if (servicesHeading) {
      const servicesSection = servicesHeading.closest('section');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    
    // Fallback: scroll to the second section (services section)
    const sections = document.querySelectorAll('section');
    if (sections.length > 1) {
      sections[1].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    if (!isHovered) {
      timeoutRef.current = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, SLIDE_INTERVAL);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [current, isHovered]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (idx) => setCurrent(idx);

  return (
    <div
      className="relative w-full h-[60vh] md:h-[90vh] flex overflow-hidden mt-16 md:mt-20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Homepage hero slider"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 w-full h-full flex"
        >
          {/* Image Section - 70% on desktop, full width on mobile */}
          <div className="w-full md:w-[70%] h-full relative overflow-hidden bg-gray-900">
            <img
              src={slides[current].image}
              alt={slides[current].alt}
              // CHANGE: Dynamic object alignment based on current slide
              className={`w-full h-full object-cover ${
                current === 1 ? 'object-top' : (current === 2 ? 'object-bottom' : 'object-center')
              }`}
              loading="lazy"
              draggable="false"
              aria-label={slides[current].alt}
            />
            {/* Gradient overlay for image */}
            <div className={`absolute inset-0 bg-gradient-to-r from-black/20 via-black/5 to-transparent pointer-events-none`} aria-hidden="true" />
          </div>
          
          {/* Content Section - 30% on desktop, overlay on mobile */}
          <div className="absolute inset-0 md:relative md:w-[30%] h-full bg-gradient-to-br from-blue-900/90 via-blue-800/90 to-indigo-900/90 md:bg-gradient-to-br md:from-blue-900 md:via-blue-800 md:to-indigo-900 flex flex-col justify-center px-4 sm:px-6 py-6 md:py-8 relative">
            <div className="text-white z-10 text-center md:text-left max-w-sm mx-auto md:mx-0">
              <motion.h1
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 md:mb-4 tracking-tight leading-tight"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {slides[current].title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-sm sm:text-base md:text-lg font-medium mb-4 md:mb-6 leading-relaxed opacity-95"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {slides[current].subtitle}
              </motion.p>
              {slides[current].cta.action === 'scroll' ? (
                <motion.button
                  onClick={scrollToServices}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-xl transition-all duration-300 text-sm sm:text-base tracking-wide focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                  aria-label={slides[current].cta.label}
                >
                  {slides[current].cta.label}
                </motion.button>
              ) : (
                <motion.a
                  href={slides[current].cta.link}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-xl transition-all duration-300 text-sm sm:text-base tracking-wide focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                  aria-label={slides[current].cta.label}
                >
                  {slides[current].cta.label}
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-200 z-20"
        aria-label="Previous slide"
        tabIndex={0}
      >
        <IoChevronBackOutline size={24} className="md:w-7 md:h-7" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-200 z-20"
        aria-label="Next slide"
        tabIndex={0}
      >
        <IoChevronForwardOutline size={24} className="md:w-7 md:h-7" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-4 h-4 rounded-full border-2 border-white transition-all duration-200 focus:outline-none ${
              idx === current ? 'bg-white' : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
            tabIndex={0}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;