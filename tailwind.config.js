/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        monts:['HelveticaNeue']
      },
      width: {
        100: "380px",
      },
      colors:{
        brend:{
          gray:{
            100:"#7F5539",
          }
        }
      },
    },
  },
  plugins: [],
}

