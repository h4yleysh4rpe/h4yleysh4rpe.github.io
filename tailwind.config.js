export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgblue: "#E6F0FA", // light blue
        headerblue: "#CCDDED",
        gold: "#D9720C",
        navy: "#00162B",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-bottom-navy": {
          "text-shadow": "0 2px 3px rgba(0,22,43,0.5)",
        },
      });
    },
  ],
};
