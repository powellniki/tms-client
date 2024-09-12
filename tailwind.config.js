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
        heading: ['oswald'],
        Ubuntu: ['Ubuntu'],
        SourceSans: ['SourceSans'],
        Roboto: ['Roboto']
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
        'light': '2px 2px 6px rgba(0, 0, 0, 0.1)',
        'heavy': '4px 4px 10px rgba(0, 0, 0, 0.9)',
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
};
