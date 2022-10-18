/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#344E41",
				secondary: "#A3B18A",
				surface: "#DAD7CD",
        highlight: '#588157'
			},
		},
		plugins: [],
	},
};
