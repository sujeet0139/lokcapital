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
        navy:  { DEFAULT: "#0D2B4E", light: "#1A4A7A" },
        brand: { DEFAULT: "#0D2B4E", accent: "#1A6BAA" },
        ink:   { DEFAULT: "#1A1A1A", muted: "#4A4A4A" },
        cream: "#F8F7F2",
        focus: "#2563EB",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
