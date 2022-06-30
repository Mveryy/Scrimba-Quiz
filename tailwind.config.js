/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				startbg: "url(./start-bg.svg)",
			},
			fontFamily: {
				sans: "Karla, sans-serif",
			},
		},
	},
	plugins: [],
};
