/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4fa',
          100: '#d9e2f5',
          200: '#b3c5e6',
          300: '#8ca8d8',
          400: '#668bc9',
          500: '#3f6eb9',
          600: '#1a365d',
          700: '#0f2447',
          800: '#091832',
          900: '#040c1c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
