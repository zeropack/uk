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
        sage: {
          50: "#f6f7f5",
          100: "#e9ede6",
          200: "#d4dbce",
          300: "#b5c3ab",
          400: "#94a783",
          500: "#778b68",
          600: "#5e7055",
          700: "#4b5846",
          800: "#3e473a",
          900: "#343c31",
          950: "#1a2018",
        },
        terracotta: {
          50: "#fef6f4",
          100: "#fde9e4",
          200: "#fbd6cc",
          300: "#f8b8a8",
          400: "#f38e75",
          500: "#e86a4c",
          600: "#d75131",
          700: "#b44025",
          800: "#953623",
          900: "#7d3320",
          950: "#43180c",
        },
        cream: {
          50: "#fdfbf7",
          100: "#faf6ec",
          200: "#f4ead0",
          300: "#ebd9ac",
          400: "#dfc27e",
          500: "#d4ab55",
          600: "#c6963b",
          700: "#a57a30",
          800: "#87652a",
          900: "#705428",
          950: "#3a2b14",
        },
        charcoal: {
          50: "#f6f7f6",
          100: "#e3e7e4",
          200: "#c7d0ca",
          300: "#a3b0a8",
          400: "#7d8e84",
          500: "#61726a",
          600: "#4d5c54",
          700: "#404c46",
          800: "#363f3a",
          900: "#2f3532",
          950: "#191d1a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-in-left": "slideInLeft 0.6s ease-out",
        "slide-in-right": "slideInRight 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
