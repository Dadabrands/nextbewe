/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00102A",
        textColor: "#01498D",
        secondary: "#FF9933",
        footer: "#1E1E1E",
      },

      fontFamily: {
        Jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
