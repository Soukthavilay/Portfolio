module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#050505',
        onyx: '#0b0b0b',
        coal: '#111111',
        smoke: '#1a1a1a',
        bone: '#f5f1e8',
        blood: '#c8102e',
        crimson: '#e51c30',
        ember: '#7a0a18',
        gold: '#d4af37',
        champagne: '#f4e4a6',
        primary: '#000000',
        secondary: '#FFFFFF',
      },
      fontFamily: {
        display: ['"Cinzel"', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        'mega': '.5em',
      },
    },
  },
  plugins: [],
};
