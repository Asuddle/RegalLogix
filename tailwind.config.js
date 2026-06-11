/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0e0c0a",
          900: "#181410",
          800: "#221c16",
          700: "#2d2519",
        },
        bone: {
          50: "#f5efe2",
          100: "#ebe2c9",
        },
        violet: {
          500: "#7c5db8",
          400: "#a78bfa",
        },
        aqua: {
          500: "#22d3ee",
          400: "#67e8f9",
          600: "#0e7490",
        },
        gold: {
          500: "#d4a857",
          400: "#e5c07a",
          600: "#a07a30",
        },
        // Semantic tokens (theme-aware)
        canvas: "rgb(var(--canvas) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-2": "rgb(var(--surface-2) / <alpha-value>)",
        "surface-3": "rgb(var(--surface-3) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        serif: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
        sans: ['"Geist"', '"Inter"', "system-ui", "sans-serif"],
        mono: ['"Geist Mono"', '"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: { tightest: "-0.05em" },
      animation: {
        marquee: "marquee 35s linear infinite",
        "marquee-rev": "marquee-rev 40s linear infinite",
        "float-slow": "float 8s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-rev": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
