/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'main': '1px 1px 5px 2px rgba(0, 0, 0, 0.74)'
      },
      colors: {
        'gray-main': '#808080',
        'condicao': 'rgb(83, 83, 83)',
        'limite': 'rgb(59, 58, 58)',
        'light-gray': 'rgb(170, 168, 168)',
        'bold-gray': 'rgb(87, 86, 86)'
      },
      fontFamily: {
        'arial': 'Arial, Helvetica, sans-serif;'
      },
      fontSize: {
        '30pt': '30pt'
      },
      spacing: {
        '300px': '300px'
      }
    }
  },
  plugins: [],
}

