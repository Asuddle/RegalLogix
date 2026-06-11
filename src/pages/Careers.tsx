import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageShell from "../components/ui/PageShell";
import AmbientScene from "../components/three/AmbientScene";
import Marquee from "../components/ui/Marquee";

const openRoles = [
  {
    id: "ENG-001",
    title: "Senior Full-Stack Engineer",
    team: "Web Engineering",
    type: "Full-time",
    location: "Remote (UTC ±3)",
    body: "Lead the architecture and delivery of complex Next.js applications for fintech and AI clients. Equally comfortable in TypeScript on the edge and Postgres at the storage layer.",
  },
  {
    id: "AI-002",
    title: "AI Engineer · Agents",
    team: "AI Systems",
    type: "Full-time",
    location: "Remote (Global)",
    body: "Build and ship production LLM agents with tool use, retrieval and evals. You've shipped at least one agent that customers paid for and you can talk about why it failed before it worked.",
  },
  {
    id: "MOB-003",
    title: "Senior Mobile Engineer",
    team: "Mobile",
    type: "Full-time",
    location: "Hybrid · Lahore",
    body: "React Native with native escape hatches in Swift / Kotlin. You care about 60fps scroll, offline-first state, and App Store review cycles. Bonus for shipped consumer apps at scale.",
  },
  {
    id: "DES-004",
    title: "Product Designer",
    team: "Design",
    type: "Full-time",
    location: "Remote (UTC ±3)",
    body: "Design systems thinker who can also wireframe a new product on a Tuesday and prototype in code on a Wednesday. You see Figma as a starting point, not a deliverable.",
  },
  {
    id: "W3B-005",
    title: "Smart Contract Engineer",
    team: "Web3 & Blockchain",
    type: "Full-time",
    location: "Remote (Global)",
    body: "Ship Solidity (and selectively Rust/Move) contracts that survive audit. You think in invariants, you write Foundry tests in your sleep, and you can explain MEV to a non-engineer.",
  },
  {
    id: "DEV-006",
    title: "DevOps / SRE Engineer",
    team: "Infrastructure",
    type: "Full-time",
    location: "Remote (Global)",
    body: "Calm-operations specialist. Kubernetes, Terraform, GitOps, observability. You make on-call boring and CI delightful. You write runbooks the way other engineers write code.",
  },
  {
    id: "DAT-007",
    title: "Data / Platform Engineer",
    team: "Data",
    type: "Full-time",
    location: "Remote (UTC ±3)",
    body: "Postgres, event streams, lakehouses. You build the substrate other teams build on top of, and you treat developer experience as the product.",
  },
  {
    id: "INT-008",
    title: "Engineering Intern",
    team: "Various",
    type: "Internship · 6 mo",
    location: "Remote",
    body: "Paid internship for graduating CS students or career-switchers with one shipped project under their belt. Mentored directly by a practice lead.",
  },
];

const perks = [
  {
    n: "01",
    t: "Senior-only floors",
    b: "Every engineer on the team has shipped production. You'll grow next to people who've done this before — not under them.",
  },
  {
    n: "02",
    t: "Calendar protection",
    b: "Two no-meeting days per week, studio-wide. We schedule around maker time, not the other way around.",
  },
  {
    n: "03",
    t: "Hardware & time budget",
    b: "Latest hardware, paid courses, conference travel, four-week sabbatical after three years.",
  },
  {
    n: "04",
    t: "Honest comp",
    b: "Above-market salary with transparent banding. Equity in studio outcomes. No surprises at review time.",
  },
  {
    n: "05",
    t: "Real remote",
    b: "Two annual meetups, asynchronous by default, working hours overlap of at least four hours per pod.",
  },
  {
    n: "06",
    t: "Health & care",
    b: "Top-tier health insurance per market, mental-health stipend, paid parental leave for all caregivers.",
  },
];

export default function Careers() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative isolate min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0 -z-10 mask-radial opacity-50">
          <AmbientScene colorA="#22d3ee" colorB="#a78bfa" />
        </div>
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
        <div className="container-x relative flex min-h-[80vh] flex-col justify-end pb-14 pt-32">
          <p className="eyebrow">Careers</p>
          <h1 className="display mt-6 text-[14vw] leading-[0.9] md:text-[10vw]">
            Build with people who
            <br />
            <span className="text-stroke">have shipped before.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-fg/70">
            We hire slowly and pay attention. The result is a studio where you'll
            spend more time doing your best work and less time managing the
            organisation around it.
          </p>
        </div>
      </section>

      {/* Marquee */}
      <section className="border-y border-fg/5 py-6">
        <Marquee reverse className="font-display text-4xl md:text-6xl">
          {[
            "Senior-only ⟶",
            <em key="real" className="italic text-gradient">
              real remote
            </em>,
            "Two no-meeting days ⟶",
            <span key="craft" className="text-stroke">
              craft over churn
            </span>,
            "Calendar protection ⟶",
            <em key="hire" className="italic text-gold-500">
              hire slowly
            </em>,
          ].map((c, i) => (
            <span key={i} className="text-fg/90">
              {c}
            </span>
          ))}
        </Marquee>
      </section>

      {/* Perks */}
      <section className="section bg-surface">
        <div className="container-x">
          <div className="grid items-end gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="eyebrow">What you get</p>
              <h2 className="display mt-6 text-6xl md:text-8xl">
                Operating conditions
                <br />
                <em className="text-gradient not-italic">that compound.</em>
              </h2>
            </div>
            <p className="md:col-span-4 md:col-start-9 text-fg/65">
              These aren't perks in the SaaS-foosball-table sense. They're the
              operating conditions that make sustained craft possible.
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-fg/5 bg-fg/[0.02] md:grid-cols-3">
            {perks.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-canvas p-10 md:p-12"
              >
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-fg/40">
                  /{p.n}
                </div>
                <h3 className="mt-6 font-display text-3xl">{p.t}</h3>
                <p className="mt-4 text-fg/65">{p.b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="section">
        <div className="container-x">
          <div className="flex items-end justify-between">
            <div>
              <p className="eyebrow">Open positions</p>
              <h2 className="display mt-6 text-6xl md:text-7xl">
                {openRoles.length} roles, hiring slowly.
              </h2>
            </div>
            <div className="hidden text-right font-mono text-xs uppercase tracking-[0.25em] text-fg/50 md:block">
              Last updated · 2026-05-21
              <br />
              All roles · Full equity
            </div>
          </div>

          <ul className="mt-14 divide-y divide-fg/5 border-y border-fg/5">
            {openRoles.map((r, i) => (
              <motion.li
                key={r.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="group relative"
              >
                <details className="group/details">
                  <summary
                    data-cursor="hover"
                    className="grid cursor-pointer list-none grid-cols-12 items-center gap-4 py-8 transition-colors hover:bg-fg/[0.02] md:py-10"
                  >
                    <span className="col-span-2 font-mono text-[11px] uppercase tracking-[0.3em] text-fg/40 md:col-span-1">
                      {r.id}
                    </span>
                    <span className="col-span-10 font-display text-2xl md:col-span-5 md:text-4xl">
                      {r.title}
                    </span>
                    <span className="col-span-6 hidden md:col-span-2 md:inline font-mono text-[11px] uppercase tracking-[0.25em] text-fg/55">
                      {r.team}
                    </span>
                    <span className="col-span-6 hidden md:col-span-2 md:inline font-mono text-[11px] uppercase tracking-[0.25em] text-fg/55">
                      {r.location}
                    </span>
                    <span
                      aria-hidden
                      className="col-span-12 grid h-9 w-9 place-items-center justify-self-end rounded-full border border-fg/15 text-fg/60 transition-all duration-300 group-open/details:rotate-45 group-open/details:border-fg group-open/details:text-fg md:col-span-1"
                    >
                      +
                    </span>
                  </summary>
                  <div className="grid gap-8 pb-12 md:grid-cols-12 md:gap-12">
                    <p className="md:col-span-7 md:col-start-2 max-w-2xl text-fg/70">
                      {r.body}
                    </p>
                    <div className="md:col-span-3 flex items-start gap-3">
                      <Link
                        to="/contact"
                        className="btn-primary"
                        data-cursor="hover"
                      >
                        Apply <span aria-hidden>→</span>
                      </Link>
                    </div>
                  </div>
                </details>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Hiring process */}
      <section className="section bg-surface accent-band">
        <div className="container-x">
          <p className="eyebrow">Hiring process</p>
          <h2 className="display mt-6 text-5xl md:text-7xl">
            Four conversations.
            <br />
            <em className="text-gradient not-italic">No take-homes.</em>
          </h2>

          <ol className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-fg/5 bg-fg/[0.02] md:grid-cols-4">
            {[
              { s: "01", t: "Intro", b: "30 min with a practice lead. Mutual sniff test." },
              { s: "02", t: "Craft", b: "Paid pairing session on a real, scoped problem. ~3 hours." },
              { s: "03", t: "Studio fit", b: "Two short conversations with future teammates." },
              { s: "04", t: "Offer", b: "Same-week decision. Honest comp band. No theatre." },
            ].map((s, i) => (
              <motion.li
                key={s.s}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-canvas p-10"
              >
                <div className="font-display text-3xl text-gold-500/80">
                  {s.s}
                </div>
                <h3 className="mt-6 font-display text-2xl">{s.t}</h3>
                <p className="mt-3 text-sm text-fg/60">{s.b}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Don't see role */}
      <section className="section bg-surface-2">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-fg/10 bg-canvas p-10 md:flex-row md:items-center md:p-14">
            <div>
              <p className="eyebrow">Speculative</p>
              <h3 className="display mt-4 max-w-2xl text-4xl md:text-5xl">
                Don't see your role? <em className="text-gradient not-italic">Tell us anyway.</em>
              </h3>
              <p className="mt-4 max-w-xl text-fg/60">
                If you're the kind of engineer or designer we'd want in the
                room, we'll figure out the role. Send your work.
              </p>
            </div>
            <Link to="/contact" className="btn-primary shrink-0" data-cursor="hover">
              Send a note <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
