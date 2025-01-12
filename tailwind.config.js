/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'index.html',
    'src/**/*.jsx'
  ],
  theme: {
    extend: {
      colors: {
        'body-main': '#f0f0f0',
        main: '#3C9E00',
        'main-complementary': '#426B1F'
      },
      gridTemplateColumns: {
        '3/4': '51% 49%'
      },
      fontFamily: {
        highlight: ['"Inknut Antiqua"', 'serif']
      },
    },
  },
  plugins: [],
}

