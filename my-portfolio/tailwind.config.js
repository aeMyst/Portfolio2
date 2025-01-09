/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",        
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#242424',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-in-out': 'fadeInOut 3s infinite',
      },
      keyframes: {
        fadeInOut: {
          '0%, 100%': {opacity: 0},
          '50%': {opacity: 1},
        },
      },
    },
    plugins: [require('@tailwindcss/typography')],
  },
};
