module.exports = {
  content: ["./src/**/*.{html,ts}"],
  safelist: process.env.NODE_ENV === "production" ? [] : [{ pattern: /./ }],
  theme: {
    extend: {},
  },
  plugins: [],
};
