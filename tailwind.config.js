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
                  500: '#f97316', // Orange Carambar
                  600: '#ea580c',
                  700: '#c2410c',
              }
          }
      }
  },
  plugins: [
    require('daisyui'),
  ],
}