export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgblue: "#E6F0FA", // light blue
        headerblue: "#CCDDED",
        buttonblue: "#bbcee1",
        hoverbuttonblue: "#a8c0d8",
        gold: "#D9720C",
        navy: "#00162B",
      },
      fontFamily: {
        judson: ['"Judson"', "serif"],
        Roboto: ['"Roboto"'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-bottom-navy": {
          "text-shadow": "0 2px 3px rgba(0,22,43,0.5)",
        },
        ".text-shadow-blue": {
          "text-shadow": "0 0.5px 0.5px rgba(187,206,225,0.2)",
        },
      });
    },
  ],
};
