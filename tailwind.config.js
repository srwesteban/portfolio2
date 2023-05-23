/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {

      fontSize: {
        '10xl': '12.9rem', // Personalizamos una nueva clase de tamaño de fuente '10xl'
        '11xl': '13rem', // Personalizamos una nueva clase de tamaño de fuente '11xl'
        // Agrega más tamaños de fuente personalizados según tus necesidades
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'app-colortext': '#FCE713',
        'app-white': '#F7F7F7',
        'primary': {
          50: '#FEFEE8',
          100: '#FEFFC2',
          200: '#FFFE89',
          300: '#FFF645',
          400: '#FCE713',
          500: '#FCE713',
          600: '#CCA102',
          700: '#A27306',
          800: '#865A0D',
          900: '#724A11',
        },
      
        'secundary': {
          50: '#F7F7F7',
          100: '#E3E3E3',
          200: '#C8C8C8',
          300: '#A4A4A4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#030303',
        },

      },
    },
  },
  plugins: [],
};
