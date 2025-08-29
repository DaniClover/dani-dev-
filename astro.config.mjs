import { defineConfig } from 'astro/config';

export default defineConfig({
  server: { host: true },
  vite: {
    server: { fs: { strict: false } }
  }
});
