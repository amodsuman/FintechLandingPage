const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./**/*.html', './assets/*.js'],
  theme: {
    extend: {
      screens: {
        xsm: '569px',
        xm: '604px',
        l: '1256px',
      },
      colors: {
        primaryColor1: '#F57059',
        primaryColor2: '#9EA2B3',
        primaryColor3: '#F24021',
        greyColor1: '#757095',
        greyColor2: '#64607D',
        greyColor3: '#DEE1E6',
        greyColor4: '#E9ECF2',
        greyColor5: '#F8F9FD',
        greyColor6: '#F9F9F9',
        greyColor7: '#E5E5EA',
        greyColor8: '#F2F3F4',
        greyColor9: '#C4C4C4',
        blueColor1: '#1B1C31',
        blueColor2: '#00E1F0',
        blueColor3: '#3734A9',
        greenColor1: '#01966B',
        greenColor2: '#002D20',
        greenColor3: '#05796B',
        greenColor4: '#03534A',
      },
      fontFamily: {
        manrope: ['Manrope'],
        poppins: ['Poppins'],
      },
      fontSize: {
        '10xl': '204px',
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
        '55%': '55%',
        '60%': '60%',
        '100%': '100%',
      },
      width: {
        65: '265px',
      },
      borderWidth: {
        '20': '20px',
      },
    },
  },
  plugins: [],
}
