// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    // enabled: true,
    // content: ['./src/**/*.jsx', './src/**/*.css'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      red: '#ad5a4f',
      redLt: '#ffddd5',
      yellow: '#fad400',
      yellowLt: '#fef2b6',
      blue: '#19536b',
      'cyan-l': '#25564b',
      'cyan-m': '#458c7e',
      black: '#182430',
      blackGr: '#215549',
      blackBl: '#20586f',
    },
    extend: {
      colors: {},
      fontFamily: {
        'heading': ['Fraunces'],
        'body': ['Barlow'],
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['focus'],
      borderColor: ['active'],
      backgroundColor: ['active'],
      fill: ['hover'],
      fontWeight: ['dark'],
      textColor: ['visited'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
