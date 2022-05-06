// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.jsx', './src/**/*.css'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '520px',
      'sm': '640px',
      'sm2': '750px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1536px',
    },
    colors: {
      red: '#ad5a4f',
      redLt: '#ffddd5',
      yellow: '#fad400',
      yellowLt: '#fef2b6',
      blue: '#19536b',
      'cyan-l': '#25564b',
      'cyan-m': '#90d4c5',
      'blue-hover': '#6fcfff',
      black: '#182430',
      blackGr: '#215549',
      blackBl: '#20586f',
      greyLt: '#abaeb3',
      greyMd: '#585a59',
      white: '#f8f8ff',
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
      spacing: {
        '100': '28rem',
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
