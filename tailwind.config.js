/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "landing-bg": "url('/src/assets/imgs/landing-banner-bg.jpg')",
      },
    },
  },
  plugins: [],
};
