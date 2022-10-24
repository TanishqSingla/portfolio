/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "#344E41",
				"primary-soft": "#3A5A40",
				secondary: "#A3B18A",
				accent: "#588157",
				surface: "#DAD7CD",
				"dark-surface": "#212121",
				highlight: "#588157",
			},
		},
		plugins: [],
	},
};
