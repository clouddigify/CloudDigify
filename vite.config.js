import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      // Add alias for our optimized framer-motion exports
      'framer-motion-optimized': resolve(__dirname, 'src/components/common/LazyFramerMotion.js'),
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
        pure_funcs: ['console.log', 'console.debug', 'console.info'],
      },
    },
    // Split chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom', 'react-icons', 'react-helmet-async'],
          'framer-motion': ['framer-motion']
        },
      },
      // Improve tree-shaking for framer-motion
      treeshake: 'recommended',
    },
    // Improve chunk loading
    chunkSizeWarningLimit: 1000,
  },
  // Pre-optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'react-icons', 'react-helmet-async', 'framer-motion'],
  },
  // Enable HTTPS for local development
  server: {
    https: false,
    port: 3000,
  },
}); 