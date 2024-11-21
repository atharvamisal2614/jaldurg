/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        greatVibes: ['"greatvibes-regular"', 'sans-serif'],
      },
      colors: {
        customBlue: '#02394e',
        customOrange : '#e72a22'
      },
    },
  },
  plugins: [],
};
