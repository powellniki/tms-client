/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        heading: ['oswald']
      },
      colors: {
        'tms-red': '#CD1728',
        'tms-yellow': '#FDDC06',
        'tms-dark-yellow': '#ECCA06',
        'tms-white': '#F7F7F7',
        'tms-gray': '#BCBCBC',
        'tms-black': '#272A2E'

      },
      textShadow: {
        'light': '1px 1px 4px rgba(0, 0, 0, 0.25)',
        'heavy': '4px 4px 16px rgba(0, 0, 0, 1)',
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
};
