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
        lightnavy: "#00305e",
      },
      fontFamily: {
        judson: ["Judson", "serif"],
        roboto: ["Roboto"],
        inter: ["Inter", "sans-serif"],
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
        "about-pop-up": {
          "0%": {
            opacity: 0,
            visibility: "hidden",
          },
          "100%": {
            opacity: 1,
          },
        },
        "reveal-corner": {
          "0%": {
            opacity: 0,
            visibility: "hidden",
            clipPath: "polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%)",
          },
          "100%": {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            opacity: 1,
          },
        },
      },
      animation: {
        "fade-in": "fade-in ease-out 1.2s forwards",
        "about-pop-up-img": "about-pop-up ease-in-out 0.5s forwards",
        "about-pop-up-arrow": "reveal-corner ease-in-out 0.7s forwards",
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
