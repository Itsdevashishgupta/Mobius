/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0649E7',
        darkPrimary: '#022183',
        whiteCustom: '#FEFEFE',
        lightBackground: '#EBF1FF',
        almostBlack: '#101010',
      },
      maxWidth: {
        'page': '1500px',
      },
    },
  },
  plugins: [],
}