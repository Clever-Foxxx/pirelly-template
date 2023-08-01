/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "bluePirelly":'#07A4FC',
        "shadowPirelly":'rgba(7, 164, 252, 0.10);',
        'whitePirelly':'#FDFDFD',
        "backBlue":"rgba(7, 164, 252, 0.09);",
        "perPirelly" : "#6615D6",
        'whiteWhite':'#FFFFFF'
      }
    },
  },
  plugins: [],
}

