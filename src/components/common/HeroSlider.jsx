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
    cta: { label: 'Explore Services', link: '/services' },
    gradient: 'bg-gradient-to-br from-blue-800/80 via-indigo-900/70 to-blue-900/80'
  }
];

const SLIDE_INTERVAL = 6000;

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

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
      className="relative w-full h-[40vh] md:h-[90vh] flex items-center justify-center overflow-hidden"
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
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={slides[current].image}
            alt={slides[current].alt}
            className="w-full h-[220px] md:h-full object-contain md:object-cover object-center"
            loading="lazy"
            draggable="false"
            aria-label={slides[current].alt}
          />
          {/* Gradient overlay */}
          <div className={`absolute inset-0 ${slides[current].gradient} pointer-events-none`} aria-hidden="true" />
          {/* Centered content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2 py-4 md:px-4 md:py-0 z-10 mb-8 md:mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-white text-xl sm:text-3xl md:text-6xl font-extrabold mb-2 md:mb-4 drop-shadow-xl tracking-tight"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {slides[current].title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white text-base sm:text-xl md:text-2xl font-medium mb-4 md:mb-8 max-w-2xl mx-auto drop-shadow-lg"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {slides[current].subtitle}
            </motion.p>
            <motion.a
              href={slides[current].cta.link}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-xl transition-all duration-300 text-lg tracking-wide focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              aria-label={slides[current].cta.label}
            >
              {slides[current].cta.label}
            </motion.a>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full shadow-lg transition-all duration-200 z-20"
        aria-label="Previous slide"
        tabIndex={0}
      >
        <IoChevronBackOutline size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full shadow-lg transition-all duration-200 z-20"
        aria-label="Next slide"
        tabIndex={0}
      >
        <IoChevronForwardOutline size={28} />
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