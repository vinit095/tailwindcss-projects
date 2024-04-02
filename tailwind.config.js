/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: '#0969da',
              fontWeight: '400',
              textUnderlineOffset: '.2em'
            },
            img: {
              display: 'inline-block',
              marginTop: '0px',
              marginBottom: '0px'
            },
            hr: {
              color: theme('colors.gray.500'),
              marginTop: '2em',
              marginBottom: '2em',
              borderWidth: '2px'
            },
            h2: {
              marginTop: '24px',
              marginBottom: '16px',
              paddingBottom: '.3em',
              fontSize: '1.5em',
              borderBottom: '1px solid #d0d7deb3',
              fontWeight: '600'
            }
          }
        }
      })
    },
    container: {
      screens: {
        xl: '1280px'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
