import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://photos.jainankush.com',
  integrations: [tailwind()],
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    domains: [],
  },
});
