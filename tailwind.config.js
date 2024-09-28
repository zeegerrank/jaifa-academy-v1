/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        prime: {
          100: "#85c1e9",
          200: "#2980b9",
        },
        accent: {
          100: "#11354c",
          200: "#1a5276",
        },
        complementary: { 200: "#f8e38b", 100: "#faeaa8" },
      },
    },
    plugins: [],
  },
};
