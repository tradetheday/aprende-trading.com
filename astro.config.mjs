// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://tradetheday.github.io',
	base: '/aprende-trading.com',
	integrations: [mdx(), sitemap()],
	i18n: {
		defaultLocale: 'es',
		locales: ['es'],
	},
});
