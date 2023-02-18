const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				theme: '#FDF8EE',
				dark: '#1D1D1D',
				primary: '#4D2C5E',
				secondary: '#FF7426',
			},
			fontFamily: {
				sans: ['Roboto', ...defaultTheme.fontFamily.sans],
			},
			maxWidth: {
				'8xl': 1408,
			},
		},
	},
	plugins: [],
};
