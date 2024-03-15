import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    server: { port: 9210 },
    outDir: './docs',
    site: `https://danosek.github.io/`,
	base: import.meta.env.DEV
		? '/'
		: '/sims-sw-web',
});