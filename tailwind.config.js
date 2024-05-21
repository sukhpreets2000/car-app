/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      yellow: '#ffc107',
      black: 'black',
      darkblue: '#03031e',
      white:'white',
      grey:'rgba(153, 136, 136, 0.877)',
      lightgrey:'rgb(255 255 255 / 10%)',
      overlay:'#000000a3',
    },
    extend: {}
  },
  plugins: [],
}

