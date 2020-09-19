const nord = require('tailwind-nord');
const aspectRatios = require('tailwindcss-aspect-ratio');
const typography = require('@tailwindcss/typography');
const customForms = require('@tailwindcss/custom-forms');

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    aspectRatio: {},
    extend: {},
  },
  variants: {},
  plugins: [nord, aspectRatios, typography, customForms],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
