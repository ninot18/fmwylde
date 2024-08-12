/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			width: {
				'1000': '1000px',
				'850': '850px',
				'700': '700px',
				'500': '500px',
			  },
		},
	},
	plugins: [],
}
