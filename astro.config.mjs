import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    server: { port: 9210 },
	/* Adresa, kde leží stránky */
    site: `https://danosek.github.io/`,
	/* Nastavení base (výsledná stránka nemusí na serveru ležet v rootu) */
	base: import.meta.env.DEV
		? '/' /* Hodota při vývoji */
		: '/sims-sw-web/', /* Hodnota pro produkci */
});