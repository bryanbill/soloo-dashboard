module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        backgroundColor: "#faf9f8",
        primary: "#FDA050",
        primaryDark: "#3D412C",
        primaryOrange: "#EB470D",
        primaryMaroon: "#612E2D",
        lightBrown: "#D3BEAB",
        primaryAqua: "#6A8490",
        primaryBrownGreen: "#B0D851",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
