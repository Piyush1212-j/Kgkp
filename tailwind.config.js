// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        primary: '#9B6B3F',
        secondary: '#E04E2F',
        dark: '#1E1E1E',
        light: '#F8F8F8',
        customGray1: '#B1B2B3',
        customGray2: '#e8e8e8',
        customGray3: '#666666',
      },
      fontFamily: {
        nexa: ['Nexa', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container-fluid': {
          width: '100%',
          marginRight: 'auto',
          marginLeft: 'auto',
          paddingLeft: '15px',
          paddingRight: '15px',
          '@screen md': {
            paddingLeft: '4rem',
            paddingRight: '4rem',
          }
        },
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
          '@screen 2xl': {
            maxWidth: '1320px',
          },
        }
      })
    }
  ],
};
