/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        b3blue: '#252656',
        b3yellow: '#eeb114',
        b3white: '#fefffc',
      },
      fontFamily: {
        aeonik: ['Aeonik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


