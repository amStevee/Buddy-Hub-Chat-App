import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        onboarding: resolve(__dirname, 'src/pages/onboarding/index.html'),
        login: resolve(__dirname, 'src/pages/login/index.html'),
        signup: resolve(__dirname, 'src/pages/signup/index.html'),
        otp: resolve(__dirname, 'src/pages/otp/index.html'),
        chats: resolve(__dirname, 'src/pages/chats/index.html'),
        conversation: resolve(__dirname, 'src/pages/conversation/index.html'),
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
