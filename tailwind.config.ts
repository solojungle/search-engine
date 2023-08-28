import { type Config } from "tailwindcss";

const colors = require("tailwindcss/colors");

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        offwhite: "#faf9f6",
        lotion: "#fbfcfd",
        primary: colors.black,
        secondary: colors.neutral[300],
        primaryHighlight: colors.orange[400],
        primaryLowlight: colors.orange[600],
        borderColor: colors.neutral[200],
        borderFocus: colors.neutral[300],
        textInverse: colors.white,
        textPrimary: colors.orange[600],
        textSecondary: colors.neutral[500],
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
