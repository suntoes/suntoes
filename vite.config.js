import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';
export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			src: path.resolve('src/')
		}
	}
});
//# sourceMappingURL=vite.config.js.map
