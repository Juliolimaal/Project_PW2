import { defineConfig } from 'vite';
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), 
        wine_red: resolve(__dirname, 'src/pages/wine_red.html'), 
        wine_rose: resolve(__dirname, 'src/pages/wine_rose.html'),
        wine_white: resolve(__dirname, 'src/pages/wine_white.html'),
      },
    },
  },
});