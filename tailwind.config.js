module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif']
      },
      boxShadow: {
        DEFAULT: '0px 2px 10px rgba(226, 233, 238, 0.6)',
        'header-mobile': '0px 4px 8px rgba(0, 0, 0, 0.1)'
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
        'green-border': '#8BA753',
        'teal': {
          4: '#39B4AC'
        }
      },
      borderWidth: {
        '3': '3px'
      },
      width: {
        'form-container': '657px'
      },
      backgroundImage: () => ({
        'radio-bg': "url(\"data:image/svg+xml,<svg viewBox='0 0 16 16' fill='%23008980' xmlns='http://www.w3.org/2000/svg'><circle cx='8' cy='8' r='2'/></svg>\")",
        'app-bg': "url('./assets/bg.png')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
