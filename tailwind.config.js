const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'marron': '#3F2305',
      'gris': '#DFD7BF',
      'beige': '#F2EAD3',
      'blanco': '#F5F5F5',
      'negro': '#000000',
      "rojo": "#FF0000",
      "verde":"#00bb2d",
      "blanco":"#FFFFFF",

      "rosa" :"#ebcac1",
      "rosa-oscuro":"#a36e68",
      "rosa-claro":"#fbf5f5",
      "marron-oscuro":"#693f2b",
      "rosa-claro":"#e7d7cc",
      "rosa-oscuro-2":"#a87c73",
      "negro-proyecto":"#100e0e",
      "amarrillo":"#fffef6"
      

    },
    fontFamily: {
      poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      gridTemplateColumns: {
        '6md': 'repeat(6, minmax(200px, 1fr))',
      },
      gridTemplateRows: {
        'layoutMd': 'repeat(6, minmax(60px, 1fr))',
      }
    },

  },
  plugins: [],
}

{
  // gridTemplateColumns: {
  //   // Simple 16 column grid
  //   '16': 'repeat(16, minmax(0, 1fr))',

  //   // Complex site-specific column configuration
  //   'footer': '200px minmax(900px, 1fr) 100px',
  // }
}


// gridTemplateColumns: {
//   '4md': 'repeat(auto-fill, minmax(200px, 1fr));',
// },