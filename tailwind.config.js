/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D5F4F',
        secondary: '#8B7355',
        accent: '#D4A574',
        background: '#FAF8F5',
        surface: '#F0EDE8',
        text: '#2A2A2A',
        'text-muted': '#6B6B6B',
        border: '#E5DFD6',
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'serif'],
        body: ['Nunito', 'sans-serif'],
      },
      transitionDuration: {
        '250': '250ms',
      },
    },
  },
  plugins: [],
}
