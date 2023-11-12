/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}",
    ],
  theme: {
    screens: {
      sm: "640px",
      md: "720px",
      lg: "960px",
      "lg-max": { max: "960px" },
      xl: "1140px",
      "2xl": "1400px",
      "3xl": "1441px"
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      spacing: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      colors: {
        transparent: 'transparent',
        dark:'#080A12',
        'main':{
          "100": "#FFFDFD",
          "200": "#FBEFE7",
          "300": "#E4D7CE",
          "400": "#CEBFB6",
          "500": "#B7A89F",
          "600": "#A09288",
          "700": "#8A7C72",
          "800": "#73665E",
          "900": "#5C5149",
          "901": "#463C36",
          "902": "#0F0C0A",
        },
               
      },

      container:{
        'box':'xl:pt-[150px] xl:pb-[120px] xl:px-[120px] bg-red-900'
      }
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '10rem',
      },
    },
  },
  plugins: [],
}

