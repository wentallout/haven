import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { FontaineTransform } from 'fontaine';

export default defineConfig({
	plugins: [sveltekit(), FontaineTransform.vite({ fallbacks: ['Arial', 'Roboto'] })]
});
