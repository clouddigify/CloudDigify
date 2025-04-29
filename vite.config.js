import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    // Generate source maps for better debugging
    sourcemap: true,
    // Optimize bundle size
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Split chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code into separate chunks
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['react-icons'],
          'vendor-framer': ['framer-motion'],
          'vendor-utils': ['react-helmet-async'],
        },
      },
    },
    // Improve chunk loading
    chunkSizeWarningLimit: 1000,
  },
  // Pre-optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'react-icons', 'react-helmet-async'],
    // Only include specific framer-motion features we need
    include: [
      'framer-motion/dist/es/render/dom/motion',
      'framer-motion/dist/es/animation/AnimatePresence',
      'framer-motion/dist/es/value/use-scroll',
      'framer-motion/dist/es/value/use-transform',
      'framer-motion/dist/es/render/utils/use-animation',
      'framer-motion/dist/es/utils/use-in-view',
    ],
  },
  // Enable HTTPS for local development
  server: {
    https: false,
    port: 3000,
  },
}); 