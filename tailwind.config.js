/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Legacy / accent palette (theme-invariant)
        ink: {
          950: "#050507",
          900: "#0a0a0f",
          800: "#0f1018",
          700: "#161724",
        },
        bone: {
          50: "#f7f5ef",
          100: "#eae6d8",
        },
        violet: {
          500: "#8b5cf6",
          400: "#a78bfa",
        },
        aqua: {
          500: "#22d3ee",
          400: "#67e8f9",
        },
        gold: {
          500: "#d4a857",
          400: "#e5c07a",
        },
        // Semantic tokens (theme-aware via CSS variables)
        canvas: "rgb(var(--canvas) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-2": "rgb(var(--surface-2) / <alpha-value>)",
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
      letterSpacing: {
        tightest: "-0.05em",
      },
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
