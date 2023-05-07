/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      custom: ['contractica', 'sans-serif'],
      monospace: ['anonymous', 'monospace'],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.font-case': {
            fontFeatureSettings: `'case' on`,
          },
        },
        {
          layer: 'typography',
        }
      );
    },
    require('@tailwindcss/forms'),
  ],
};
