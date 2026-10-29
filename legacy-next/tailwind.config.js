/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/app/components/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend Exa', 'sans-serif'],
        ibarra: ['Ibarra Real Nova', 'serif'],
      },
    },
  },
  plugins: [],
}
