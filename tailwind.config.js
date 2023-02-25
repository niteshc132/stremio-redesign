/* eslint-disable global-require */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6419C8',
        secondary: '#FFBE0B',
        accent: '#FF006E',
        success: '#3A86FF',
        info: '#900000',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['light', 'dark'],
  },
};
