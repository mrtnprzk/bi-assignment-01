/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      tablet: "800px",
      hd: "1280px",
      fhd: "1920px",
      qhd: "2560px",
      "4k": "3840px",
    },
  },
  plugins: [],
};
