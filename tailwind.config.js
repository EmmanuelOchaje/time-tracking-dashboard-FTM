module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Fraunces: ["var(--font-fraunces)", "serif"],
        Montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
    },
  },
};
