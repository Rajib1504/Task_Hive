/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EEF5FF", // background
        secondary: "#ffed4a", // Replace with your desired secondary color
      },
    },
  },
  plugins: [require("daisyui")],
};
