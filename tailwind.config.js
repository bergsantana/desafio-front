/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       gridTemplateRows: {
        'home': '150px 1fr 150px',
         
      },
      gridTemplateColumns: {
        'cart-list': '25% 60% 15%'
      }
    },
  },
  plugins: [],
}

