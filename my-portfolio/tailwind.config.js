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
  },
    plugins: [require('@tailwindcss/typography')],
  },
};
