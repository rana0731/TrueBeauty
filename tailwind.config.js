module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    opacity:{
      "0": "0",
      "25": ".25",
      "50": ".5",
      "75": ".75",
      "10": ".1",
      "20": ".2",
      "30": ".3",
      "40": ".4",
      "50": ".5",
      "60": ".6",
      "70": ".7",
      "80": ".8", 
      "90": ".9",
      "100": "1",
    },
    cursor: {
        grab: "grab",
        pointer: "pointer",
    },
    extend: {
      colors: {
        "primary-blue": "#1992d4",
      },
      spacing: {
        "72" : "18rem",
      },
      translate: {
        "3x": "300%",
      }
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    display: ["responsive", "group-hover"]
  },
  plugins: [],
}