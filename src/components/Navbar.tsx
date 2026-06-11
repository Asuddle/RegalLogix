import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-canvas/60 border-b border-fg/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between py-5">
        <Link to="/" className="group flex items-center gap-3" data-cursor="hover">
          <span className="relative grid h-9 w-9 place-items-center rounded-lg border border-fg/15 bg-fg/[0.03]">
            <span className="font-display text-lg leading-none text-fg">R</span>
            <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-gold-500 shadow-[0_0_12px_#d4a857]" />
          </span>
          <div className="leading-tight">
            <div className="font-display text-[18px] tracking-tight text-fg">
              RegalLogix
            </div>
            <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-fg/40">
              Engineering Studio
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-cursor="hover"
              className={({ isActive }) =>
                `relative rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors ${
                  isActive ? "text-fg" : "text-fg/55 hover:text-fg"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{l.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full border border-fg/15 bg-fg/[0.04]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/contact"
            data-cursor="hover"
            className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-canvas transition-transform hover:scale-[1.02]"
          >
            Start a project
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
            data-cursor="hover"
            className="grid h-10 w-10 place-items-center rounded-full border border-fg/15"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`h-px w-5 bg-fg transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-5 bg-fg transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t border-fg/5 bg-canvas/95 backdrop-blur-xl"
          >
            <div className="container-x flex flex-col gap-2 py-6">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-4 font-display text-3xl ${
                      isActive ? "text-fg" : "text-fg/40"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
