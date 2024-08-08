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
        basicBlue: '#007AFF',
      },
      fontSize: {
        '2.5xl': '26px',

        'title-1': ['2.5em', { lineHeight: '60px', fontWeight: '600' }], // 40px

        'normal' : ['1.0625em', { lineHeight: '18px', fontWeight: '400' }],
        'base-m' : ['1em', { lineHeight: '16px', fontWeight: '500' }],


        'large-lg': ['1.25em', { lineHeight: '24px' }], // 20px
        'medium-lg': ['1.125em', { lineHeight: '21.6px' }], // 18px
        'normal-lg': ['1em', { lineHeight: '21.6px' }], // 16px
        'small-lg': ['1.14285714286em', { lineHeight: '16.8px' }], // 14px

        'large-sm': ['0.875em', { lineHeight: '16.8px' }], // 14px
        'medium-sm': ['0.75em', { lineHeight: '14.4px' }], // 12px
        'normal-sm': ['0.625em', { lineHeight: '12px' }], // 10px
      },
    },
  },
  plugins: [],
}