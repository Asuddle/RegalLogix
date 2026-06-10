import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      data-cursor="hover"
      className={`group relative inline-flex h-9 w-[68px] items-center rounded-full border border-fg/15 bg-fg/[0.04] px-1 transition-colors hover:border-fg/30 ${className}`}
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
        className={`grid h-7 w-7 place-items-center rounded-full bg-fg text-canvas ${
          isDark ? "ml-auto" : "mr-auto"
        }`}
      >
        {isDark ? (
          <MoonIcon className="h-3.5 w-3.5" />
        ) : (
          <SunIcon className="h-3.5 w-3.5" />
        )}
      </motion.span>
      <span className="sr-only">{isDark ? "Dark" : "Light"} mode</span>
    </button>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((d) => (
        <rect
          key={d}
          x="11.25"
          y="1"
          width="1.5"
          height="3.5"
          rx="0.75"
          fill="currentColor"
          transform={`rotate(${d} 12 12)`}
        />
      ))}
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
