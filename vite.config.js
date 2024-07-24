import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    host: true, // This makes the server accessible over the network
    port: 3000, // You can change the port if needed
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Log all warnings
        console.warn(warning);
        // Use default for other warnings
        warn(warning);
      }
    }
  }
});