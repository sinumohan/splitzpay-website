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
        brand: {
          green: "#10B981",
          "green-dark": "#059669",
          navy: "#0F172A",
          amber: "#F59E0B",
          slate: "#475569",
          mint: "#D1FAE5",
        },
      },
      fontFamily: {
        sans: ["Inter", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #0F172A 0%, #0F2D40 50%, #0F172A 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
