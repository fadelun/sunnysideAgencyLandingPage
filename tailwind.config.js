module.exports = {
  purge: ["index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        softRed: "hsl(7, 99%, 70%)",
        yellow: "hsl(51, 100%, 49%)",
        dark: "hsl(198, 62%, 26%)", // photography text
        darkCyan: "hsl(167, 40%, 24%)", // graphic design text
        darkCyan02: "hsl(168, 34%, 41%)", // footer
        neutral: {
          white: "hsl(0, 0%, 100%)",
          dark: {
            rayish: "hsl(213, 9%, 39%)",
            desaturated: "hsl(212, 27%, 19%)",
            darkGrayish: "hsl(232, 10%, 55%)",
            grayish: "hsl(210, 4%, 67%)",
          },
        },
      },
      fontFamily: {
        body: ["Barlow", "serif"],
        display: ["Fraunces", "serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
