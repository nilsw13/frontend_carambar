/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
          colors: {
              'carambar': {
// Orange Carambar
                  500: '#f97316', // Orange Carambar
                  600: '#ea580c',
                  700: '#c2410c',
                  
              },
              'purple-cam': {
                  400: '#DA1868',
          },
          fontFamily: {
            'custom': ['bubble', 'sans-serif'],
          },
      }
  },
  plugins: [require("daisyui")],
} }