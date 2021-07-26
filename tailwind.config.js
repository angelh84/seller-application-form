module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif']
      },
      boxShadow: {
        DEFAULT: '0px 2px 10px rgba(226, 233, 238, 0.6)'
      },
      colors: {
        'cool-gray': {
          4: '#E2E9EE',
          7: '#899298',
          8: '#6E777D',
          10: '#303538'
        },
        'neutral-gray': '#FBFBFD',
        'mock-green': '#008980',
        'green-border': '#8BA753'
      },
      borderWidth: {
        '3': '3px'
      },
      width: {
        'form-container': '657px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
