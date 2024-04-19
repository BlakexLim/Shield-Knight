/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cutom: ['AncientModernTales', 'sans-serif'],
      },
      backgroundImage: {
        dungeon: "url('public/bg.shieldKnight.webp')",
      },
    },
  },
  plugins: [],
};
