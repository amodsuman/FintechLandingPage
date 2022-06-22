const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ['./index.html', './assets/*.js'],
  theme: {
    screens: {
      xsm: '450px',
      sm: '640px',
      md: '768px',
      smm: '900px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      'tall': { 'raw': '(min-height: 700px)' },
    },
    extend: {
      colors: {
        primaryColor: '#F57059',
        secondaryColor: '#9EA2B3',
        tertiaryColor: '#F24021',
      },
      fontFamily: {
        manrope: ['Manrope'],
        poppins: ['Poppins'],
      },
      fontSize: {
        '10xl': '152px',
        '11xl': '204px',
      },
      lineHeight: {
        11: '46px',
        12: '60px',
        13: '80px',
        14: '204px',
      },
      letterSpacing: {
        tightest: '-0.003em',
      },
      backgroundSize: {
        '20%': '20%',
        '30%': '30%',
        '40%': '40%',
        '55%': '55%',
        '60%': '60%',
        '100%': '100%',
      },
      width: {
        65: '265px',
      },
      borderWidth: {
        '10': '10px',
        '16': '16px',
      },
    },
  },
  plugins: [],
}
