/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily:{
      'light': 'Assistant'
    },
    colors: {
      "light-bg": "#ECE9F6",
      'dark': '#080403',
      'white': '#FFFFFF',
      "primary": "#98B847",
      "accent": "#AADF26",
      "card-color": "#A38C85",
      "card-dark": "#9C9717",
      "temp" : "#824057",
      "text" : '#000000',
      "red": "#FF0000"
    },
  },
  plugins: [],
};
