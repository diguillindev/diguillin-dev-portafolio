// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
// configuration deploy github
  site: 'https://diguillindev.github.io/diguillin-dev-portafolio/',
  base: '/diguillin-dev-portafolio/', 
  vite: {
    plugins: [tailwindcss()]
  }
});