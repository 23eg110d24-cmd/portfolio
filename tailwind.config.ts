import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          500: "#EF4444",
          600: "#DC2626"
        }
      },
      boxShadow: {
        glow: "0 0 45px rgba(239, 68, 68, 0.24)"
      }
    }
  },
  plugins: []
};

export default config;
