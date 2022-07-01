/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{jsx,tsx}'],
	theme: {
		screens: {
			'sm': { 'max': '768px' }
		},
		extend: {
			backgroundImage: {
				startbg: 'url(./memphis-colorful.png)'
			},
			fontFamily: {
				sans: 'Karla, sans-serif'
			}
		}
	},
	plugins: []
}
