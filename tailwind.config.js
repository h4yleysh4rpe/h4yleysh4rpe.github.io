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
        fadedgold: "#d6ad85",
        navy: "#00162B",
      },
      fontFamily: {
        judson: ['"Judson"', "serif"],
        Roboto: ['"Roboto"'],
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: 0,
            transform: "translateY(1rem)",
            visibility: "hidden",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in": "fade-in ease-out 1.5s forwards",
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
