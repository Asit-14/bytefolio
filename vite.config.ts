import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ✅ Replace with your GitHub repo name
export default defineConfig({
  base: '/bytefolio/',
  plugins: [react()],
});
