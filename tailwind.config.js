/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EEF5FF", // background
        secondary: "#86B6F6", // text  color
        borderColor: "#B4D4FF", // border color
        buttonColor: "#176B87", // button color
      },
    },
  },
  plugins: [require("daisyui")],
};
