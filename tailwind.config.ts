import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080808",
        surface: {
          DEFAULT: "#111111",
          elevated: "#181818",
          highlight: "#222222",
          card: "#151515",
        },
        accent: {
          gold: "#C5A880",
          "gold-light": "#E2D1B3",
          "gold-dark": "#9E8159",
          brass: "#B89B70",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          muted: "rgba(255, 255, 255, 0.15)",
          gold: "rgba(197, 168, 128, 0.35)",
        },
        text: {
          ivory: "#F6F4F0",
          secondary: "#A6A19A",
          muted: "#6E6A64",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        serif: [
          "var(--font-serif)",
          "Georgia",
          "Cambria",
          "serif",
        ],
      },
      boxShadow: {
        "luxury": "0 20px 40px -15px rgba(0, 0, 0, 0.7)",
        "gold-glow": "0 0 25px rgba(197, 168, 128, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
