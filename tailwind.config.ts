/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#121212',
        gray: '#C4C4C4',
        blue: '#007AFF',
        'grey-dot': '#D9D9D9',
        white: "#FFFFFF",
      },
      fontFamily: {
        'sf-pro-text': ['SF Pro Text', 'sans-serif'],
        'sf-pro': ['SF Pro', 'sans-serif'],
      },
      animation: {
        'grow': 'grow 0.3s ease-in-out forwards',
      },
      keyframes: {
        grow: {
          '0%': { width: '0.375rem' },
          '100%': { width: '1.125rem' },
        },
      },
      fontWeight: {
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
      },
      fontSize: {
        'title-1': ['2.5rem', { lineHeight: '3.75rem' }], // 40px
      },
      width: {
        4.5: "18px",
      },
      margin: {
        4.5: "18px",
      },
    },
  },
  plugins: [],
}