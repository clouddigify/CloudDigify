import { motion, AnimatePresence } from '../common/LazyFramerMotion';
import React, { useState, useEffect, useCallback } from 'react';
import { FaChevronRight, FaChevronLeft, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ImageSlider = ({ images, interval = 5000, autoPlay = true, onConsultationClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    let slideInterval;
    
    if (isPlaying) {
      slideInterval = setInterval(nextSlide, interval);
    }
    
    return () => {
      if (slideInterval) {
        clearInterval(slideInterval);
      }
    };
  }, [isPlaying, interval, nextSlide]);

  const handleMouseEnter = () => {
    if (autoPlay) {
      setIsPlaying(false);
    }
  };

  const handleMouseLeave = () => {
    if (autoPlay) {
      setIsPlaying(true);
    }
  };

  const handleConsultationClick = () => {
    if (onConsultationClick && typeof onConsultationClick === 'function') {
      onConsultationClick(images[currentIndex].title || 'Cloud Consultation');
    }
  };

  const currentSlide = images[currentIndex];

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div 
      className="relative h-[65vh] min-h-[400px] max-h-[700px] w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className={`absolute inset-0 ${images[currentIndex].gradient || 'bg-blue-900'} flex flex-col justify-center items-center text-white px-4 md:px-8`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            {/* Text Content (Left Side) */}
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 relative z-10">
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {currentSlide.title}
              </motion.h1>
              
              <motion.p
                className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {currentSlide.description}
              </motion.p>
              
              <motion.div
                className="flex flex-wrap gap-4 justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <button
                  onClick={handleConsultationClick}
                  className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-blue-50 transition-all duration-300 flex items-center"
                >
                  <FaCalendarAlt className="mr-2" />
                  Get a Consultation
                </button>
              </motion.div>
            </div>
            
            {/* Abstract Shapes/Graphics (Right Side) */}
            <motion.div
              className="md:w-1/2 flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-1 backdrop-blur-sm">
                <div className="rounded-3xl aspect-[3/2] w-full max-w-md overflow-hidden">
                  <div className={`w-full h-full ${images[currentIndex].gradient || 'bg-blue-800'} flex items-center justify-center p-10`}>
                    <div className="relative w-full h-full">
                      {/* Abstract shapes */}
                      <div className="absolute top-0 left-0 w-20 h-20 rounded-full bg-white/10"></div>
                      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white/5"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-4 border-white/20"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-40 rounded-full border border-white/10 -rotate-45"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all z-10"
        onClick={prevSlide}
      >
        <FaChevronLeft />
      </button>
      
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all z-10"
        onClick={nextSlide}
      >
        <FaChevronRight />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-7' : 'bg-white/40 hover:bg-white/60'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider; 