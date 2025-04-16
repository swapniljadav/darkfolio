/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          inter: ['var(--font-inter)', 'sans-serif'],
          sora: ['var(--font-sora)', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  