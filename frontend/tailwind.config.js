/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spartan: ['"League Spartan"', 'sans-serif'],
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        neue : ['"Bebas Neue"', 'sans-serif']
      },
    },
    screens: {
      'xl' : {'max': '1200px'},
      'lg' : {'max': '1080px'},
      'md-lg' : {'max': '991px'},
      'md' : {'max': '768px'},
      'sm' : {'max': '576px'}, 
      'xs' : {'max': '480px'}, 
      '2xs' : {'max': '340px'},
    },
  },
  plugins: [],
}

