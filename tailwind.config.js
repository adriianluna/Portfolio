/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        accent: '#00ff88',
        'accent-dim': '#00cc6a',
        dark: '#080808',
        surface: '#111111',
        card: '#171717',
        'border-dim': '#222222',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'cursive'],
        body: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
