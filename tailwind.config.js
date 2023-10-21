/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
    screens: {
      'xxs': '468px',
      'xs': '540px', // Custom breakpoint
      'sm': '640px', // Example: Small screens
      'md': '768px', // Example: Medium screens
      'lg': '1024px', // Example: Large screens
      'xl': '1280px', // Example: Extra-large screens
    }
  },
  plugins: [],
}