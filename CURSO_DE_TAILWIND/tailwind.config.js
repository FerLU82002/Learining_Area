/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
         'azul-claro':' #1E90FF',
         'azul-oscuro':'#000080',
      },
      spacing:{
        '42':'170px'
      }
    },
  },
  plugins: [],
}