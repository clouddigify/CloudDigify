import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChevronBackOutline, IoChevronForwardOutline, IoCalendarOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const ImageSlider = ({ images, interval = 5000, autoPlay = true, onConsultationClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let timer;
    if (autoPlay && !isHovered) {
      timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, interval);
    }
    return () => clearInterval(timer);
  }, [autoPlay, images.length, interval, isHovered]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleConsultationClick = () => {
    if (onConsultationClick && typeof onConsultationClick === 'function') {
      onConsultationClick(images[currentIndex].title || 'Cloud Consultation');
    }
  };

  const currentSlide = images[currentIndex];

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {currentSlide.url ? (
            <img
              src={currentSlide.url}
              alt={currentSlide.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className={`w-full h-full ${currentSlide.gradient}`} />
          )}
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center max-w-6xl mx-auto leading-tight"
            >
              {currentSlide.title}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl text-center max-w-3xl mx-auto mb-10 text-gray-100"
            >
              {currentSlide.description}
            </motion.p>
            
            {/* Buttons container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              {/* Consultation Button */}
              <button
                onClick={handleConsultationClick}
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center shadow-lg"
                aria-label="Request consultation"
              >
                <IoCalendarOutline className="mr-2 text-xl" />
                <span>Get Consultation</span>
              </button>
              
              {/* Services Link Button */}
              {currentSlide.serviceLink && (
                <Link to={currentSlide.serviceLink}>
                  <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300">
                    Explore Services
                  </button>
                </Link>
              )}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all duration-200 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <IoChevronBackOutline size={28} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all duration-200 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <IoChevronForwardOutline size={28} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-6 h-6 flex items-center justify-center p-0 ${
              index === currentIndex ? 'bg-white/30' : 'bg-transparent'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className={`block w-2.5 h-2.5 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/70'
            }`} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider; 