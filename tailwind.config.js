/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xsm':'200px',
      'sm': '350px',
      'md': '550px',
      'lg': '650px',
      'xl': '750px',
      'xxl':"1000px",
    },
  },
  plugins: [],

}