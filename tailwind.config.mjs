// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat','Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      },

      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px', 
        // for tablets 
        // => @media (min-width: 768px) { ... }
  
        'lg': '1025px',
        // => @media (min-width: 1024px) { ... }
        //using for laptops and desktop
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },

      colors:{
        'theme-blue': '#3B82F6',
        'theme-dark': '#232323',
        'theme-light': '#FFFFFF',
        'dark-offcanvas':"#353535",
        'dark-hover':"#454545",
        'light-hover':"#F5F5F5",
        'body-text-light':"#737373",
        'body-text-dark':"#fff",
        'job-light':"#e5e7eb",
        'job-dark':"rgba(245, 245, 245,0.5)",





      },

      boxShadow: {
        'hero-image': '33px 40px 0px 9px #313131',
        'aboutme-image': '-23px 40px 0px 4px #3B82F6',


      },
    },
  },
  plugins: [
    function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') }, // Customize the size
      });
    }
  ],
  darkMode: 'class',
}
