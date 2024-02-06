import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "conversion-01": "linear-gradient(92deg, #FF6B00 0%, #F90 100%)",
        "conversion-02": "linear-gradient(92deg, #03AACE 0%, #49D8D8 100%)",
        "conversion-disabled":
          "linear-gradient(92deg, #D3D3D3 0%, #E2E2E2 100%)",
        "conversion-transparent":
          "linear-gradient(180deg, #DDE6ED 0%, rgba(217, 217, 217, 0.25) 100%)",
      },
      boxShadow: {
        card: "1px 10px 15px -10px #211e35",
      },
      colors: {
        gray: {
          100: "#DDE6ED",
          200: "#9DB2BF",
          300: "#526D82",
          400: "#393E46",
          500: "#222831",
        },
        tertiary: "#151038",
        text: {
          100: "#FFF",
          300: "#D2D2D2",
          400: "#626262",
          500: "#28282E",
        },
        bg: {
          100: "#FFF",
        },
        orange: {
          100: "#F90",
        },
      },
      fontFamily: {
        mitr: ["Mitr"],
      },
      animation: {
        text: "text 5s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        dash: {
          to: {
            "stroke-dashoffset": "0",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
