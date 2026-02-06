/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        blink: "blink 1.1s infinite",

      },
      animation: {
        shine: "shine 3s linear infinite",
      },
    },
  },
  plugins: [],
};
