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
        manualChunks: (id) => {
          // Bundle core React packages together
          if (id.includes('node_modules/react/') || 
              id.includes('node_modules/react-dom/') || 
              id.includes('node_modules/react-router-dom/')) {
            return 'vendor-react';
          }
          
          // Bundle UI libraries, but exclude unnecessary framer-motion modules
          if (id.includes('node_modules/react-icons/')) {
            return 'vendor-ui';
          }
          
          // Only include essential framer-motion features
          if (id.includes('node_modules/framer-motion/')) {
            // Exclude specific unused modules
            if (id.includes('/projection/node/create-projection-node') ||
                id.includes('/gestures/drag/VisualElementDragControls') ||
                id.includes('/gestures/pan/PanSession') ||
                id.includes('/gestures/press')) {
              return 'excluded-motion';
            }
            return 'vendor-ui';
          }
          
          // Bundle other utilities
          if (id.includes('node_modules/react-helmet-async/')) {
            return 'vendor-utils';
          }
        }
      },
    },
    // Improve chunk loading
    chunkSizeWarningLimit: 1000,
  },
  // Pre-optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'react-icons', 'react-helmet-async'],
  },
  // Enable HTTPS for local development
  server: {
    https: false,
    port: 3000,
  },
}); 