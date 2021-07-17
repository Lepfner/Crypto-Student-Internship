module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#282c34',
       }),
      backgroundImage: theme => ({
        'hero-pattern': "url('https://img.icons8.com/search')"
      }),
      stroke: theme => ({
        'red': theme('colors.red.500'),
        'green': theme('colors.green.500'),
        'blue': theme('colors.blue.500'),
      }),
      spacing: {
        '14%': '17%',
        '19': '4.75rem',
        '18': '4.5rem',
      },
      padding: {
        pola: '6%',
        login: '4.25rem',
      },
      height: {
        '80px' : '80px',
        '91.5%' : '91.5%',
        '500' : '500px',
      },
      width: {
        'skoro': '98%',
        '1/9' : '11%',
        '88': '22rem',
        '30': '7.5rem',
        'leftCol' : '54%',
        'rightCol': '46%',
        '14%' : '17%',
        '87%' : '84%',
        '900' : '900px',
      },
      margin: {
        '100' : '24rem',
        'ikona1' : '31%',
        '13p': '13%',
        '40p' : '40%',
        '18p' : '35%',
        '10p' : '25%',
        '11p' : '26%',
        '8p' : '2%',
      },
      fontSize:{
        '11x1' : '58px',
        '9x1': '33px',
        '10x1': '30px',
        '8x1': '23px',
        '7x1': '19px',
        '6x1': '20px',
        '5x1': '15px',
        '4x1': '13px',
        '3x1': '11px',
      },
      backgroundSize: {
        'taman': '20px',
      },
      backgroundColor: {
        'primary' : '#536ef5',
        'second' : '#a7a6b3',
        'orange': '#fc4503',
        'third' : '#55555a',
        'fourth': '#d8d6e6',
        'fifth' : '#4f4f53',
      },
      borderRadius: {
        '2x1': '1rem',
        '3x1': '0.75rem',
        '4x1': '0.625rem',
        '5x1': '0.875rem',
        '6x1': '2.5rem',
      },
      outline: {
        nema: '0',
      },
      borderColor: theme => ({
        DEFAULT: theme('colors.gray.300', 'currentColor'),
        'primary': '#536ef5',
        'second' : '#a7a6b3',
        'orange': '#fc4503',
      }),
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [],
}