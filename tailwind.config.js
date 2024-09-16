/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        prime: {
          100: "#5ad2f4",
          200: "#8ce0f7",
        },
        complementary: { 100: "#fcf6d3", 200: "#fbf2c0" },
        accent: { 100: "#550c18", 200: "#3b0811" },
      },
    },
    plugins: [],
  },
};
