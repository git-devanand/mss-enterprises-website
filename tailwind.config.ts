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
          DEFAULT: "#101B35",
          light: "#1B2C52",
          dark: "#091022",
        },
        royal: {
          DEFAULT: "#164E9B",
          light: "#2162BC",
          dark: "#0F3872",
        },
        industrial: {
          orange: "#F26B21",
          orangeHover: "#D95A15",
          grey: "#F3F5F8",
          charcoal: "#202633",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
