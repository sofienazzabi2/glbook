module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        dark: "#f2f0f5",
        primary: "#ffffff",
        "primary-lighter": "#f2f0f5",
        "primary-darker": "#cfcfcf",
        secondary: "#8527dd",
        tertiary: "#ebab34",
      },
      flexGrow: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [],
};
