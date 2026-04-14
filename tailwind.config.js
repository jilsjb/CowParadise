/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        meadow: '#27503b',
        moss: '#5c7a52',
        cream: '#fff8ec',
        hay: '#f4d7a1',
        clay: '#b76e45',
        ink: '#1f241d',
        brand: {
          cyan: '#06c7f2',
          gold: '#ffe500',
          peach: '#ffedd3',
          cream: '#fff5de'
        }
      },
      boxShadow: {
        soft: '0 18px 50px rgba(39, 80, 59, 0.14)'
      },
      fontFamily: {
        display: ['"Fredoka"', 'system-ui', 'sans-serif'],
        sans: ['"Rubik"', 'system-ui', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif']
      },
      backgroundImage: {
        pasture:
          'radial-gradient(circle at top left, rgba(244, 215, 161, 0.35), transparent 35%), radial-gradient(circle at bottom right, rgba(92, 122, 82, 0.18), transparent 28%)'
      }
    }
  },
  plugins: []
};
