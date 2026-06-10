import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative border-t border-fg/5 bg-canvas">
      <div className="container-x py-20">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow">Get in touch</p>
            <h3 className="display mt-4 text-5xl md:text-7xl">
              Let's build the <em className="text-gradient not-italic">unreasonable</em>.
            </h3>
            <Link
              to="/contact"
              data-cursor="hover"
              className="mt-8 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-fg/70 transition-colors hover:text-fg"
            >
              <span className="h-px w-12 bg-fg/60" />
              Start a conversation
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow">Studio</p>
            <ul className="mt-6 space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/careers", label: "Careers" },
                { to: "/contact", label: "Contact" },
              ].map((i) => (
                <li key={i.to}>
                  <Link
                    to={i.to}
                    data-cursor="hover"
                    className="font-mono text-sm text-fg/60 transition-colors hover:text-fg"
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow">Elsewhere</p>
            <ul className="mt-6 space-y-3">
              {[
                "Github",
                "LinkedIn",
                "Dribbble",
                "X / Twitter",
              ].map((i) => (
                <li key={i}>
                  <a
                    href="#"
                    data-cursor="hover"
                    className="group inline-flex items-center gap-2 font-mono text-sm text-fg/60 transition-colors hover:text-fg"
                  >
                    {i}
                    <span aria-hidden className="opacity-0 transition-opacity group-hover:opacity-100">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-fg/5 pt-8 text-fg/40 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-7 w-7 place-items-center rounded-md border border-fg/10 bg-fg/[0.02] font-display text-sm">
              R
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.25em]">
              © {new Date().getFullYear()} RegalLogix · Built with intent.
            </span>
          </div>
          <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.25em]">
            <span>San Francisco · Lahore · Remote</span>
            <span className="h-1 w-1 rounded-full bg-gold-500 shadow-[0_0_8px_#d4a857]" />
            <span>Available · Q3</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
