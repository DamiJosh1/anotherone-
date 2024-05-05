/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#121212",
        "color-grey-grey-50": "#f9f9f9",
        "color-grey-grey-200": "#f0f0f0",
        "color-primary-primary-50": "#eaf4f4",
        shopprgreen: "#2e9092",
        black1: "#000",
        "color-red-red-400": "#ee4a52",
        "color-red-red-50": "#fef1f2",
        "color-red-red-800": "#811015",
        lavender: "#f5eafa",
        darkorchid: {
          "100": "#8d19c3",
          "200": "#7b21a5",
        },
        "color-purple-purple-600": "#9d40aa",
        "color-yellow-yellow-100": "#fff7d9",
        "color-yellow-yellow-600": "#e7b021",
        "color-yellow-yellow-800": "#8c6a14",
        "color-grey-grey-100": "#f5f5f5",
        "text-text-text-100": "#b6b8b8",
        "text-text-text-200": "#929696",
        "color-grey-grey-300": "#cbcbcb",
        gray: {
          "100": "#f8fdfe",
          "200": "#f8fbf8",
        },
        dimgray: "#565656",
        gainsboro: "#d9d9d9",
      },
      spacing: {
        big: "24px",
        xlarge: "48px",
        large: "32px",
        reg: "12px",
        med: "16px",
      },
      fontFamily: {
        "text-heading-h6": "Roboto",
        "text-heading-h1": "Poppins",
      },
      borderRadius: {
        "4xs-6": "8.6px",
        "8xs-3": "4.3px",
        "13xl": "32px",
        "81xl": "100px",
        "radius-s": "6px",
        "radius-med": "8px",
      },
    },
    fontSize: {
      "29xl": "48px",
      sm: "14px",
      "6xs-5": "6.5px",
      smi: "13px",
      "4xs-6": "8.6px",
      "base-1": "15.1px",
      base: "16px",
      xl: "20px",
      "5xl": "24px",
      "21xl": "40px",
      xs: "12px",
      "7xs": "6px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      mq: {
        raw: "screen and (max-width: 640px)",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
