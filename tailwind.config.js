/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3B0F0F",

          secondary: "#543C3C",

          accent: "#37CDBE",

          neutral: "#3D4451",

          "base-100": "#FCFAF5",

          info: "#E4DDCE",

          success: "#FCFAF5",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
