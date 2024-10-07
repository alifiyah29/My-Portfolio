// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CAD2C5',
        accent1: '#84A98C',
        accent2: '#52796F',
        darkText: '#354F52',
        darkBg: '#2F3E46',
      },
    },
  },
  plugins: [],
};
