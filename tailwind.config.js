/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: 'Manrope, sans-serif'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
