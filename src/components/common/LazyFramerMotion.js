// LazyFramerMotion.js - Optimized exports for framer-motion
// This file helps reduce bundle size by only importing what we need

import { motion, AnimatePresence } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Re-export only what we need
export { 
  motion, 
  AnimatePresence,
  useScroll,
  useTransform,
  useInView
};

// Common animation variants used across the app
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Helper hook that combines useScroll and useTransform
export const useScrollTransform = (outputRange) => {
  const { scrollYProgress } = useScroll();
  return useTransform(
    scrollYProgress,
    [0, 1],
    outputRange
  );
}; 