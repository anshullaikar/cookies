
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: theme => ({
        "screen-2/3":"calc(200vh / 3)",
        "screen/2": "50vh",
        "screen-2/5": "40vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
        "screen-nav":"calc(100vh - 4rem)"
      }),
      minHeight: {
        '36': "36rem",
      }
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
};
