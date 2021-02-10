const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
      mode: 'layers',
      content: ['./public/**/*.html']
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
        colors:{
            rose:colors.rose,
            amber:colors.amber
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
