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
      }
    },
  },
  plugins: [],
}

