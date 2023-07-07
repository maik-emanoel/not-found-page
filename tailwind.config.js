/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'ping-slow': 'ping 4s linear infinite',
      },
      dropShadow: {
        planetShadow: '0px 0px 70px rgba(112, 0, 255, 0.70)'
      },
      screens:{
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '768px'},
        // => @media (max-width: 768px) { ... }
  
        'sm': {'max': '445px'},
        // => @media (max-width: 445px) { ... }
      }
    },
  },
  plugins: [],
}

