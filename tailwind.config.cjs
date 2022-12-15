/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      textColor: {
        default: "var(--color-text-base)",
        muted: "var(--color-text-muted)",
        inverted: "var(--color-text-inverted)",
      },
      backgroundColor: {
        default: "var(--color-background)",
        card: "var(--color-card)",
      },
      fontFamily: {
        default: ["var(--font-family-base)", "sans-serif"],
        accent: ["var(--font-family-accent)", "serif"],
      },
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          dark: "var(--color-primary-dark)",
        },
        secondary: "var(--color-secondary)",
        neutral: "var(--color-neutral)",
      },
    },
  },
  plugins: [],
};
