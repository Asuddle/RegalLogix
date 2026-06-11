import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import PageShell from "../components/ui/PageShell";
import HeroScene from "../components/three/HeroScene";
import Marquee from "../components/ui/Marquee";
import MagneticButton from "../components/ui/MagneticButton";

const services = [
  {
    n: "01",
    title: "Web Engineering",
    body: "Production-grade React, Next.js and Remix systems engineered for scale, speed and longevity. From marketing surfaces to data-heavy dashboards.",
    keys: ["Next.js", "TypeScript", "Edge", "Design systems"],
    accent: "from-violet-500/30 to-transparent",
  },
  {
    n: "02",
    title: "AI Agents",
    body: "Custom agents, RAG pipelines and LLM-native workflows that ship outcomes — not demos. We design the eval harness alongside the product.",
    keys: ["LLM orchestration", "RAG", "Evals", "Tool use"],
    accent: "from-aqua-500/30 to-transparent",
  },
  {
    n: "03",
    title: "Mobile Engineering",
    body: "Native-feel iOS and Android products with React Native and Swift/Kotlin escape hatches. Polished interactions, offline-first, App Store ready.",
    keys: ["React Native", "Swift", "Kotlin", "OTA"],
    accent: "from-gold-500/30 to-transparent",
  },
  {
    n: "04",
    title: "Web3 & Blockchain",
    body: "On-chain products that don't feel on-chain. EVM and Solana smart contracts, indexing, account abstraction and wallets your grandmother could use.",
    keys: ["Solidity", "Rust", "EVM", "Account abstraction"],
    accent: "from-aqua-500/30 to-transparent",
  },
  {
    n: "05",
    title: "DevOps & Infrastructure",
    body: "Calm-operations specialists. Kubernetes, Terraform, GitHub Actions, observability — we treat your platform as a product with its own users (your engineers).",
    keys: ["Kubernetes", "Terraform", "GitOps", "Observability"],
    accent: "from-violet-500/30 to-transparent",
  },
  {
    n: "06",
    title: "Data & Platform",
    body: "The substrate underneath the product. Postgres, event streams, lakehouses, internal SDKs and the developer experience that lets your team move fast.",
    keys: ["Postgres", "Kafka", "dbt", "Internal SDKs"],
    accent: "from-gold-500/30 to-transparent",
  },
];

const process = [
  {
    step: "I.",
    title: "Discover",
    body: "We start by interrogating the problem, not the brief. Stakeholder interviews, jobs-to-be-done mapping, technical reconnaissance.",
  },
  {
    step: "II.",
    title: "Architect",
    body: "Lean specs, decision logs, prototypes you can click. We pick boring technology by default and exotic technology only when it earns it.",
  },
  {
    step: "III.",
    title: "Build",
    body: "Two-week visible cadences. You see something running every Friday. CI from day one. We deploy small and often.",
  },
  {
    step: "IV.",
    title: "Iterate",
    body: "Telemetry-driven post-launch loops. We instrument before we ship and treat the first 90 days post-launch as part of the engagement.",
  },
];

const work = [
  { tag: "Fintech", title: "Real-time risk console", year: "2025" },
  { tag: "Health", title: "Care navigator agent", year: "2025" },
  { tag: "Retail", title: "Headless commerce rebuild", year: "2024" },
  { tag: "AI", title: "Document intelligence suite", year: "2024" },
];

export default function Landing() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <PageShell>
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative isolate min-h-[100svh] overflow-hidden"
      >
        <div className="absolute inset-0">
          <HeroScene />
        </div>
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
        <div className="pointer-events-none absolute inset-0 aurora" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-canvas" />

        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="container-x relative flex min-h-[100svh] flex-col justify-end pb-16"
        >
          <div className="flex items-center justify-between">
            <span className="chip">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-500" />
              Open for Q3 engagements
            </span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-fg/40 md:inline">
              N 37.7749° · W 122.4194°
            </span>
          </div>

          <h1 className="display mt-8 text-[18vw] leading-[0.85] md:text-[12.5vw]">
            <span className="block">Regal</span>
            <span className="block">
              <span className="text-stroke">Logix</span>
              <em className="ml-4 font-display italic text-gold-500/90">.</em>
            </span>
          </h1>

          <div className="mt-10 grid items-end gap-8 md:grid-cols-12">
            <p className="md:col-span-5 max-w-md text-lg leading-relaxed text-fg/70">
              An engineering studio designing and building{" "}
              <span className="text-fg">
                web, mobile, AI agents, Web3 and the DevOps under it
              </span>{" "}
              — for category-defining teams.
            </p>
            <div className="md:col-span-4 md:col-start-7 flex items-center gap-3">
              <MagneticButton>
                <Link to="/contact" className="btn-primary">
                  Start a project
                  <span aria-hidden>→</span>
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link to="/about" className="btn-ghost">
                  Our studio
                </Link>
              </MagneticButton>
            </div>
            <div className="md:col-span-3 flex flex-col items-end justify-end font-mono text-[10px] uppercase tracking-[0.25em] text-fg/40">
              <span>v.2026.05</span>
              <span className="mt-1 text-fg/70">↓ scroll</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* MARQUEE */}
      <section className="relative border-y border-fg/5 py-8">
        <Marquee className="font-display text-5xl md:text-7xl">
          {[
            "Web ⟶",
            <em key="ai" className="text-gold-500/90">
              AI Agents
            </em>,
            "Mobile ⟶",
            <span key="web3" className="text-stroke">
              Web3
            </span>,
            "Blockchain ⟶",
            <em key="devops" className="text-violet-400">
              DevOps
            </em>,
            "Platform ⟶",
            <span key="design" className="text-stroke">
              Design Systems
            </span>,
            "Data ⟶",
            <em key="logix" className="text-gold-500/90">
              Logix
            </em>,
            "DX ⟶",
          ].map((c, i) => (
            <span key={i} className="text-fg/90">
              {c}
            </span>
          ))}
        </Marquee>
      </section>

      {/* SERVICES */}
      <section className="section bg-surface">
        <div className="container-x">
          <div className="grid items-end gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="eyebrow">What we do</p>
              <h2 className="display mt-6 text-6xl md:text-8xl">
                Six disciplines.
                <br />
                <span className="text-stroke">One studio.</span>
              </h2>
            </div>
            <p className="md:col-span-4 md:col-start-9 text-fg/60">
              We work end-to-end across product, design and engineering — so the
              system that ships looks and behaves like one thing, not four.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-fg/5 bg-fg/[0.02] md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.article
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group relative isolate overflow-hidden bg-canvas p-8 md:p-10"
                data-cursor="hover"
              >
                <div
                  className={`pointer-events-none absolute -inset-px bg-gradient-to-br ${s.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className="relative flex flex-col gap-10">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-fg/40">
                      {s.n} · Service
                    </span>
                    <span
                      aria-hidden
                      className="grid h-10 w-10 place-items-center rounded-full border border-fg/10 text-fg/40 transition-all group-hover:border-fg group-hover:text-fg"
                    >
                      ↗
                    </span>
                  </div>
                  <h3 className="display text-5xl md:text-6xl">{s.title}</h3>
                  <p className="max-w-md text-fg/65">{s.body}</p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {s.keys.map((k) => (
                      <span key={k} className="chip">
                        {k}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section">
        <div className="container-x">
          <div className="grid items-end gap-10 md:grid-cols-12">
            <div className="md:col-span-6">
              <p className="eyebrow">By the numbers</p>
              <h2 className="display mt-6 text-5xl md:text-7xl">
                A small studio with{" "}
                <em className="text-gradient not-italic">disproportionate</em>{" "}
                output.
              </h2>
            </div>
            <p className="md:col-span-4 md:col-start-9 text-fg/60">
              We staff lean teams of senior engineers and product designers.
              No middlemen, no hand-offs, no theatre.
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-fg/5 bg-fg/[0.02] md:grid-cols-4">
            {[
              { k: "8+", v: "years compounding craft" },
              { k: "60+", v: "products shipped to production" },
              { k: "11", v: "countries on the team" },
              { k: "0", v: "outsourced engineering hours" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-canvas p-10"
              >
                <div className="display text-6xl text-gradient">{s.k}</div>
                <div className="mt-3 max-w-[18ch] text-sm text-fg/55">
                  {s.v}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section relative overflow-hidden bg-surface accent-band">
        <div className="container-x">
          <div className="grid items-end gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="eyebrow">How we work</p>
              <h2 className="display mt-6 text-6xl md:text-8xl">
                Process,
                <br />
                <em className="text-gradient not-italic">not theatre.</em>
              </h2>
            </div>
            <p className="md:col-span-4 md:col-start-9 text-fg/60">
              Four phases. Two-week visible cadences. Decisions tracked in
              writing, not lost in stand-up.
            </p>
          </div>

          <ol className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-fg/5 bg-fg/[0.02] md:grid-cols-4">
            {process.map((p, i) => (
              <motion.li
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative bg-canvas p-10"
              >
                <div className="font-display text-3xl text-gold-500/80">
                  {p.step}
                </div>
                <h3 className="mt-6 font-display text-3xl">{p.title}</h3>
                <p className="mt-4 text-sm text-fg/60">{p.body}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* WORK */}
      <section className="section">
        <div className="container-x">
          <div className="flex items-end justify-between">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="display mt-6 text-6xl md:text-8xl">Recent.</h2>
            </div>
            <Link
              to="/portfolio"
              data-cursor="hover"
              className="hidden md:inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-fg/60 hover:text-fg"
            >
              All projects <span>→</span>
            </Link>
          </div>

          <ul className="mt-12 divide-y divide-fg/5 border-y border-fg/5">
            {work.map((w, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative"
              >
                <div
                  className="grid grid-cols-12 items-center gap-6 py-8 transition-colors duration-300 hover:bg-fg/[0.02] md:py-10"
                  data-cursor="hover"
                >
                  <span className="col-span-2 font-mono text-xs uppercase tracking-[0.25em] text-fg/40 md:col-span-1">
                    /{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="col-span-3 font-mono text-xs uppercase tracking-[0.25em] text-fg/55 md:col-span-2">
                    {w.tag}
                  </span>
                  <span className="col-span-6 font-display text-2xl md:col-span-7 md:text-4xl">
                    {w.title}
                  </span>
                  <span className="col-span-1 hidden text-right font-mono text-xs uppercase tracking-[0.25em] text-fg/40 md:inline md:col-span-1">
                    {w.year}
                  </span>
                  <span
                    aria-hidden
                    className="col-span-1 text-right text-2xl text-fg/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-fg"
                  >
                    →
                  </span>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section relative overflow-hidden bg-surface-2">
        <div className="absolute inset-0 aurora opacity-60" />
        <div className="container-x relative">
          <div className="relative overflow-hidden rounded-[32px] border border-fg/10 bg-canvas p-8 md:p-10">
            <div className="grid items-center gap-10 md:grid-cols-12">
              <div className="md:col-span-8">
                <p className="eyebrow">Next step</p>
                <h2 className="display mt-6 text-5xl md:text-7xl">
                  Have an{" "}
                  <em className="text-gradient not-italic">unreasonable</em>{" "}
                  product ambition?
                </h2>
                <p className="mt-6 max-w-xl text-fg/65">
                  Tell us what you're building. We'll respond within one
                  business day with thoughts, questions and — if it's a fit —
                  a calendar link.
                </p>
              </div>
              <div className="md:col-span-4 flex md:justify-end">
                <MagneticButton strength={36}>
                  <Link
                    to="/contact"
                    className="grid h-44 w-44 place-items-center rounded-full bg-fg text-center font-mono text-[11px] uppercase tracking-[0.25em] text-canvas transition-colors hover:bg-violet-400 hover:text-fg md:h-56 md:w-56"
                  >
                    <span>
                      Start
                      <br />a project
                      <span className="mt-2 block text-base">→</span>
                    </span>
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
