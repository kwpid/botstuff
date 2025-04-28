/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'discord-dark': '#36393f',
        'discord-darker': '#2f3136',
        'discord-darkest': '#202225',
        'discord-light': '#dcddde',
        'discord-accent': '#5865f2',
      },
    },
  },
  plugins: [],
} 