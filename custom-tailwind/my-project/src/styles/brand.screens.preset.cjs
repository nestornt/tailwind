const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  theme: {
    screens: {
      'xs': '440px', ...defaultTheme.screens,
      'phone': '640px',
      'tablet': '768px',
      'md': '960px',
      'laptop': '1024px',
      'lg': '1440px',
      'desktop': '1280px',
      '3xl': '1600px',
      '4xl': '2400px',
      'uwide': '3200px',
    }
  },
}