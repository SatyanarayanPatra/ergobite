/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class', // ✅ this enables class-based dark mode
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
