/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: 1 },
          '50%': { transform: 'scale(0.95)', opacity: 0.7 },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in forwards',
        pulse: 'pulse 1s ease-in-out infinite',
      },
      fontFamily: {
        'londrina-solid': ['"Londrina Solid"', 'cursive'],
        bogaloo: ['"Bogaloo"', 'cursive']
      },
    },
  },
  plugins: [],
}