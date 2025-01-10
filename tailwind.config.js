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
        main: '#5bc217',
        'main-complementary': '#1a920f'
      }
    },
  },
  plugins: [],
}

