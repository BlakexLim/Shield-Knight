/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['AncientModernTales', 'sans-serif'],
      },
      backgroundImage: {
        dungeon: ["url('/bg.shieldKnight.webp')"],
      },
    },
  },
  plugins: [],
};
