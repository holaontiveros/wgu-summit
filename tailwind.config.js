const plugin = require("tailwindcss/plugin");

/**
 * utility class presets
 */
function _presets() {
  const shapes = ["circle", "ellipse"];
  const pos = {
    c: "center",
    t: "top",
    b: "bottom",
    l: "left",
    r: "right",
    tl: "top left",
    tr: "top right",
    bl: "bottom left",
    br: "bottom right",
  };
  let result = {};
  for (const shape of shapes)
    for (const [posName, posValue] of Object.entries(pos))
      result[`${shape}-${posName}`] = `${shape} at ${posValue}`;

  return result;
}

const radialGradientPlugin = plugin(
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        // map to bg-radient-[*]
        "bg-radient": (value) => ({
          "background-image": `radial-gradient(${value},var(--tw-gradient-stops))`,
        }),
      },
      { values: theme("radialGradients") },
    );
  },
  {
    theme: {
      radialGradients: _presets(),
    },
  },
);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          250: "#F4F9FB",
          400: "#355571",
          500: "#022A4D",
          850: "#010D17",
        },
        secondary: {
          500: "#217AAE",
          700: "#144968",
        },
        tertiary: {
          50: "#E8F5F6",
          500: "#1B9DA0",
        },
        butter: {
          50: "#FFF5E0",
          500: "#FFCC5B",
        },
        grayscale: {
          50: "#E3E3E480",
          100: "#CCCCCD",
          450: "#6D6D6F",
          500: "#676769",
        },
      },
    },
    // font family for everything would be Open sans
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [radialGradientPlugin, require("tailwindcss-safe-area")],
};
