const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: colors.yellow,
        secondary: colors.blue,
        neutral: colors.gray,
        maroon: {
          50: '#e46464',
          100: '#d05050',
          200: '#bc3c3c',
          300: '#a82828',
          400: '#941414',
          500: '#800000',
          600: '#6c0000',
          700: '#580000',
          800: '#440000',
          900: '#300000'
        },
        indigo: {
          950: '#1d1a6d'
        },
      }
    }
  }
}