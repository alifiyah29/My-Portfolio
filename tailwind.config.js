// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkText: '#2F3E46',      // Font color
        buttonsColor: '#354F52',  // Button background color
        accent1: '#84A98C',       // Highlight color on hover
      },
    },
  },
  plugins: [],
};
