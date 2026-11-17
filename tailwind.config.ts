import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#061325",
          900: "#0b2240",
          850: "#0e2a4f",
          800: "#133560",
          700: "#1b4477",
          600: "#245695",
        },
        steel: {
          50: "#f4f7fa",
          100: "#e8eff5",
          200: "#d1dfea",
          300: "#abc3d9",
          400: "#7da2c3",
          500: "#5784ae",
          600: "#416b94",
          700: "#345577",
          800: "#2c4661",
          900: "#273b50",
        },
        contourRed: {
          DEFAULT: "#c9252c",
          50: "#fef2f2",
          100: "#fee2e2",
          500: "#ef4444",
          600: "#dc2626",
          700: "#c9252c",
          800: "#991b1b",
          900: "#7f1d1d",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
