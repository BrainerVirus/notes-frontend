/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // "primary-light": "#EF6351",
        // // "primary-dark": "#4D2C7F",
        // "secondary-light": "#F38375",
        // // "secondary-dark": "#7F2C7F",
        // "tertiary-light": "#F7A399",
        // // "tertiary-dark": "#2C427F",
        // "quaternary-light": "#FBC3BC",
        // "quinary-light": "#FFE3E0",
        // "bar-light": "#ffffff",
        "primary-light": "#E76F51",
        "secondary-light": "#E9C46A",
        "tertiary-light": "#2A9D8F",
        "Accent-light": "#264653",
        "background-light": "#F4A261",
        "bar-light": "#ffffff",
      },
    },
  },
  plugins: [],
};
