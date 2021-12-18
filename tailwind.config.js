module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        "2*13rem": "13rem 13rem"
      },
      padding: {
        "5%":"5%",
        "11%": "11%",
        "15%": "15%"
      },
      width:{
        "22r": "100%",
      },
      height: {
        "28r":"28rem"
      },
      inset:{
        "17": "17%"
      },
      gridTemplateColumns: {
        "13rem": "repeat(4, minmax(0, 13rem))"
      },
      zIndex: {
        "negative1": "-1"
      },
      fontSize: {
        xxs: ["7px", "15px"]
      },
      colors: {
        cotegHoverColor: "#34397B",
        darkerBlue: "#0f1424",
        darkBlue: "#1c1f4a",
        desaturatedBlue: "#6f76c8",
        infoBgColor: "#5746f3",
        softBlue: "#56c2e6",
        paleBlue: "#bdc1ff",
        liteRed: "#ff8c66",
        darkRed: "#ff5c7c",
        limeGreen: "#4acf81",
        violet: "#7536d3",
        softOrange: "#f1c65b"
      },
      fontFamily: {
        body: ['Rubik']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
