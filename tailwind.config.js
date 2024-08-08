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
        'tms-yellow': '#FDDC06'
      },
      textShadow: {
        'light': '4px 4px 8px rgba(0, 0, 0, 0.5)',
        'heavy': '4px 4px 16px rgba(0, 0, 0, 1)',
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
};
