import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

const ImageSlider = ({ slides, interval = 6000, autoPlay = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let timer;
    if (autoPlay && !isHovered) {
      timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, interval);
    }
    return () => clearInterval(timer);
  }, [autoPlay, slides.length, interval, isHovered]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Homepage hero slider"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 w-full h-full"
        >
          <div
            className="w-full h-full bg-cover bg-center absolute inset-0"
            style={{ backgroundImage: `url('${slides[currentIndex].backgroundImage}')` }}
            aria-label={slides[currentIndex].alt}
          />
          {/* Gradient overlay for depth and readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-blue-900 to-indigo-900 opacity-70" aria-hidden="true" />
          {/* Centered content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
            <div className="max-w-3xl mx-auto w-full">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                className="text-white font-extrabold mb-4 drop-shadow-xl tracking-tight text-lg sm:text-2xl md:text-4xl lg:text-5xl"
              >
                {slides[currentIndex].title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className="text-white font-medium mb-6 max-w-2xl mx-auto drop-shadow-lg text-sm sm:text-base md:text-lg lg:text-xl"
              >
                {slides[currentIndex].description}
              </motion.p>
              {slides[currentIndex].cta && (
                <motion.a
                  href={slides[currentIndex].cta.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                  className="inline-block w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-xl transition-all duration-300 text-base sm:text-lg tracking-wide focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 mt-6"
                  aria-label={slides[currentIndex].cta.label}
                >
                  {slides[currentIndex].cta.label}
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full shadow-lg transition-all duration-200 z-20"
        aria-label="Previous slide"
        tabIndex={0}
      >
        <IoChevronBackOutline size={28} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full shadow-lg transition-all duration-200 z-20"
        aria-label="Next slide"
        tabIndex={0}
      >
        <IoChevronForwardOutline size={28} />
      </button>
      {/* Dots Navigation */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-20 pb-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full border-2 border-white transition-all duration-200 focus:outline-none ${
              index === currentIndex ? 'bg-white' : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            tabIndex={0}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider; 