/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'width': 'width',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
}
