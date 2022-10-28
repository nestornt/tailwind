/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  /* corePlugins: {
    preflight: false,
  },*/
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [
    require('./src/styles/brand.colors.preset.cjs'),
    require('./src/styles/brand.screens.preset.cjs'),
  ],
  theme: {
    blur: {
      'none': '0px',
      'sm': '2px',
      DEFAULT: '4px',
      'md': '6px',
      'lg': '8px',
      'xl': '10px',
      '2xl': '12px'
    },
    extend: {
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '6.5': '1.625rem',
        '7.5': '1.875rem',
        '8.5': '2.125rem',
        '9.5': '2.375rem',
        },
      fontFamily: {
        'display': ['"Carter One"'],
      }
    }
  },
  plugins: [],
}