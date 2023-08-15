/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				tnr: 'Times New Roman',
				sans: 'Manrope, sans-serif'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
