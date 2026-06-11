import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageShell from "../components/ui/PageShell";
import AmbientScene from "../components/three/AmbientScene";

type Project = {
  id: string;
  client: string;
  title: string;
  tag: string;
  year: string;
  body: string;
  stack: string[];
  metrics: { k: string; v: string }[];
  swatch: { from: string; via: string; to: string };
  mockType: "dashboard" | "mobile" | "wallet" | "agent" | "docs" | "graph";
};

const projects: Project[] = [
  {
    id: "01",
    client: "Helios Markets",
    title: "Real-time risk console for a derivatives desk",
    tag: "Fintech · Web",
    year: "2025",
    body: "A trader-facing console showing live PnL, exposure and counterparty risk at sub-50ms render budgets. Rebuilt from the kernel up — Postgres, websockets, edge cache, a custom virtualised grid.",
    stack: ["Next.js", "Postgres", "ClickHouse", "WS"],
    metrics: [
      { k: "42ms", v: "p95 render" },
      { k: "11×", v: "throughput vs. legacy" },
    ],
    swatch: { from: "from-gold-500/40", via: "via-aqua-600/30", to: "to-ink-950/0" },
    mockType: "dashboard",
  },
  {
    id: "02",
    client: "Arcadia Health",
    title: "Care-navigator AI agent for primary clinics",
    tag: "Health · AI",
    year: "2025",
    body: "An LLM agent embedded in the EMR that triages messages, drafts patient replies and surfaces missing context. Built with a strict eval harness and a refuse-by-default policy on PHI.",
    stack: ["Anthropic", "RAG", "Postgres", "Evals"],
    metrics: [
      { k: "62%", v: "messages auto-drafted" },
      { k: "0", v: "HIPAA escalations" },
    ],
    swatch: { from: "from-violet-500/40", via: "via-gold-500/25", to: "to-ink-950/0" },
    mockType: "agent",
  },
  {
    id: "03",
    client: "Saffron Goods",
    title: "Headless commerce rebuild for a heritage brand",
    tag: "Retail · Web",
    year: "2024",
    body: "Migrated a 12-year-old monolith to a headless stack with editorial-grade product pages, instant search and a checkout that converts on first paint. Story-led, performance-first.",
    stack: ["Next.js", "Shopify", "Sanity", "Algolia"],
    metrics: [
      { k: "+38%", v: "conversion vs. legacy" },
      { k: "1.1s", v: "LCP global p75" },
    ],
    swatch: { from: "from-aqua-600/35", via: "via-gold-500/25", to: "to-ink-950/0" },
    mockType: "mobile",
  },
  {
    id: "04",
    client: "Lattice Labs",
    title: "On-chain wallet & swap UX",
    tag: "Web3 · Mobile",
    year: "2024",
    body: "A smart-account wallet with social recovery, batched swaps and a UX that hides gas. Built on EIP-4337 with a paymaster, account-key custody on-device, and a Solidity test suite our auditors enjoyed reading.",
    stack: ["Solidity", "Foundry", "React Native", "Viem"],
    metrics: [
      { k: "94%", v: "first-tx success rate" },
      { k: "AA-grade", v: "audit verdict" },
    ],
    swatch: { from: "from-violet-500/40", via: "via-aqua-600/30", to: "to-ink-950/0" },
    mockType: "wallet",
  },
  {
    id: "05",
    client: "Glyph Systems",
    title: "Document intelligence platform",
    tag: "Enterprise · AI",
    year: "2024",
    body: "A document-extraction pipeline for legal teams. Two-tier model routing, structured outputs with grammar constraints, side-by-side highlight UI, and per-tenant fine-tuning when justified by the data.",
    stack: ["Anthropic", "OpenAI", "pgvector", "Temporal"],
    metrics: [
      { k: "98.4%", v: "field extraction F1" },
      { k: "4×", v: "throughput per dollar" },
    ],
    swatch: { from: "from-gold-500/40", via: "via-violet-500/30", to: "to-ink-950/0" },
    mockType: "docs",
  },
  {
    id: "06",
    client: "North Beach Energy",
    title: "Grid telemetry & forecasting dashboard",
    tag: "Energy · Data",
    year: "2023",
    body: "A live-grid telemetry dashboard for a community-energy utility. Time-series ingestion, anomaly detection, and a forecast model trained on weather + load history. Operations could finally sleep through the night.",
    stack: ["TimescaleDB", "Python", "Grafana", "Terraform"],
    metrics: [
      { k: "-71%", v: "alert volume" },
      { k: "3.1%", v: "forecast MAPE" },
    ],
    swatch: { from: "from-aqua-600/35", via: "via-violet-500/25", to: "to-ink-950/0" },
    mockType: "graph",
  },
];

export default function Portfolio() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative isolate min-h-[70vh] overflow-hidden">
        <div className="absolute inset-0 -z-10 mask-radial opacity-50">
          <AmbientScene colorA="#d4a857" colorB="#7c5db8" />
        </div>
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
        <div className="container-x relative flex min-h-[70vh] flex-col justify-end pb-14 pt-32">
          <p className="eyebrow">Selected work</p>
          <h1 className="display mt-6 text-[13vw] leading-[0.9] md:text-[9vw]">
            Things we
            <br />
            <em className="text-gradient not-italic">shipped.</em>
          </h1>
          <div className="mt-10 grid items-end gap-10 md:grid-cols-12">
            <p className="md:col-span-6 max-w-xl text-lg text-fg/70">
              A small slice of recent work across web, AI agents, mobile, Web3
              and the DevOps holding it together. Every project linked here
              shipped to production and is in use today.
            </p>
            <dl className="md:col-span-4 md:col-start-9 grid grid-cols-3 gap-6 self-end">
              {[
                ["60+", "shipped"],
                ["8", "industries"],
                ["98%", "still in production"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="display text-3xl text-gradient">{k}</dt>
                  <dd className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-fg/55">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Projects — alternating editorial layout */}
      <section className="section bg-surface">
        <div className="container-x space-y-20 md:space-y-24">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} flipped={i % 2 === 1} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-surface-2 accent-band">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-fg/10 bg-canvas p-10 md:flex-row md:items-center md:p-14">
            <div>
              <p className="eyebrow">Next chapter</p>
              <h3 className="display mt-4 max-w-2xl text-4xl md:text-5xl">
                Want your project to live up here next?
              </h3>
              <p className="mt-4 max-w-xl text-fg/65">
                We take on a handful of new engagements each quarter. Tell us
                what you're building.
              </p>
            </div>
            <Link to="/contact" className="btn-primary shrink-0" data-cursor="hover">
              Start a project <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function ProjectCard({ project, flipped }: { project: Project; flipped: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="grid items-center gap-10 md:grid-cols-12 md:gap-14"
      data-cursor="hover"
    >
      {/* Mockup */}
      <div
        className={`md:col-span-7 ${flipped ? "md:order-2 md:col-start-6" : "md:col-start-1"}`}
      >
        <Mock project={project} />
      </div>

      {/* Copy */}
      <div
        className={`md:col-span-5 ${flipped ? "md:order-1 md:col-start-1" : "md:col-start-8"}`}
      >
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-fg/55">
          <span className="text-fg">/{project.id}</span>
          <span className="h-px w-6 bg-fg/40" />
          <span>{project.tag}</span>
          <span className="h-px w-6 bg-fg/40" />
          <span>{project.year}</span>
        </div>

        <h3 className="display mt-5 text-4xl md:text-5xl">{project.title}</h3>
        <p className="mt-2 font-serif text-xl italic text-gold-500">
          {project.client}
        </p>

        <p className="mt-6 text-fg/70">{project.body}</p>

        <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-fg/10 pt-6">
          {project.metrics.map((m) => (
            <div key={m.k}>
              <dt className="display text-3xl text-gradient">{m.k}</dt>
              <dd className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-fg/55">
                {m.v}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>

        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-fg/75 transition-colors hover:text-fg"
          data-cursor="hover"
        >
          <span className="h-px w-10 bg-fg/40" />
          View case study
          <span aria-hidden>→</span>
        </Link>
      </div>
    </motion.article>
  );
}

function Mock({ project }: { project: Project }) {
  const { swatch, mockType } = project;
  return (
    <div
      className={`group relative aspect-[16/11] overflow-hidden rounded-3xl border border-fg/10 bg-canvas`}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${swatch.from} ${swatch.via} ${swatch.to}`}
      />
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
      <div className="pointer-events-none absolute inset-0 noise opacity-40" />

      <div className="relative h-full p-6 md:p-10">
        {mockType === "dashboard" && <DashboardMock />}
        {mockType === "mobile" && <MobileMock />}
        {mockType === "wallet" && <WalletMock />}
        {mockType === "agent" && <AgentMock />}
        {mockType === "docs" && <DocsMock />}
        {mockType === "graph" && <GraphMock />}
      </div>

      {/* corner meta */}
      <div className="pointer-events-none absolute left-6 top-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-fg/60">
        <span className="h-1.5 w-1.5 rounded-full bg-gold-500 shadow-[0_0_10px_#d4a857]" />
        Live
      </div>
      <div className="pointer-events-none absolute right-6 top-6 font-mono text-[10px] uppercase tracking-[0.3em] text-fg/60">
        {project.client}
      </div>
    </div>
  );
}

/* ---------- Mock visualisations (pure CSS/SVG, no images) ---------- */

function DashboardMock() {
  return (
    <div className="grid h-full grid-cols-12 grid-rows-6 gap-3">
      <div className="col-span-3 row-span-6 rounded-xl border border-fg/10 bg-fg/[0.04] p-3">
        <div className="mb-3 h-1 w-8 rounded bg-fg/40" />
        {[80, 60, 70, 50, 65, 45].map((w, i) => (
          <div
            key={i}
            className="mb-2 h-1 rounded bg-fg/20"
            style={{ width: `${w}%` }}
          />
        ))}
      </div>
      <div className="col-span-9 row-span-2 rounded-xl border border-fg/10 bg-fg/[0.03] p-3">
        <div className="flex items-center justify-between">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg/60">
            Exposure · Live
          </div>
          <div className="font-display text-xl text-gold-500">$12.4M</div>
        </div>
        <svg viewBox="0 0 200 40" className="mt-2 h-10 w-full">
          <polyline
            fill="none"
            stroke="#d4a857"
            strokeWidth="1.5"
            points="0,30 15,22 30,26 45,14 60,18 75,8 90,16 105,12 120,20 135,10 150,18 165,6 180,12 200,8"
          />
          <polyline
            fill="none"
            stroke="#7c5db8"
            strokeWidth="1.5"
            opacity="0.6"
            points="0,34 15,30 30,32 45,24 60,28 75,20 90,26 105,22 120,28 135,20 150,26 165,18 180,22 200,18"
          />
        </svg>
      </div>
      <div className="col-span-5 row-span-4 rounded-xl border border-fg/10 bg-fg/[0.03] p-3">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg/60">
          Positions
        </div>
        {["AAPL · 1.2k", "NVDA · 940", "EURUSD · 8.1k", "BTC · 0.4"].map((r) => (
          <div
            key={r}
            className="mt-2 flex items-center justify-between border-t border-fg/10 pt-2 font-mono text-[11px] text-fg/70"
          >
            <span>{r}</span>
            <span className="text-gold-500">+0.42%</span>
          </div>
        ))}
      </div>
      <div className="col-span-4 row-span-4 rounded-xl border border-fg/10 bg-fg/[0.03] p-3">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg/60">
          Risk
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {["VaR", "CVaR", "β", "σ"].map((k) => (
            <div key={k} className="rounded border border-fg/10 p-2">
              <div className="font-mono text-[9px] text-fg/50">{k}</div>
              <div className="font-display text-lg text-fg">
                {Math.floor(Math.random() * 90 + 10)}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileMock() {
  return (
    <div className="flex h-full items-center justify-center gap-6">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="relative h-[85%] w-[18%] rounded-[28px] border border-fg/15 bg-canvas p-2"
          style={{ transform: `rotate(${(i - 1) * 4}deg)` }}
        >
          <div className="h-full rounded-[20px] bg-gradient-to-b from-fg/[0.05] to-transparent p-3">
            <div className="mx-auto h-1 w-8 rounded-full bg-fg/30" />
            <div className="mt-5 h-2 w-3/4 rounded bg-fg/30" />
            <div className="mt-1 h-2 w-1/2 rounded bg-fg/20" />
            <div className="mt-4 aspect-square w-full rounded-lg bg-gradient-to-br from-gold-500/40 to-violet-500/40" />
            <div className="mt-3 h-2 w-2/3 rounded bg-fg/30" />
            <div className="mt-1 h-2 w-1/2 rounded bg-fg/20" />
            <div className="mt-4 h-8 rounded-full bg-fg" />
          </div>
        </div>
      ))}
    </div>
  );
}

function WalletMock() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative h-[70%] w-[55%] rounded-2xl border border-fg/15 bg-fg/[0.05] p-5">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg/60">
          Balance
        </div>
        <div className="mt-2 font-display text-4xl text-gold-500">$14,238.02</div>
        <div className="mt-1 font-mono text-[10px] text-fg/50">
          0xA1b…7F · arbitrum
        </div>
        <div className="mt-6 space-y-2">
          {[
            ["ETH", "4.21", "+1.2%"],
            ["USDC", "6,200", "0.0%"],
            ["LATTICE", "180,000", "+4.8%"],
          ].map(([sym, amt, ch]) => (
            <div
              key={sym}
              className="flex items-center justify-between rounded-lg border border-fg/10 bg-fg/[0.03] px-3 py-2"
            >
              <div className="font-mono text-xs text-fg/80">{sym}</div>
              <div className="font-mono text-xs text-fg/70">{amt}</div>
              <div className="font-mono text-xs text-gold-500">{ch}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex gap-2">
          <div className="flex-1 rounded-full bg-fg py-2 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-canvas">
            Send
          </div>
          <div className="flex-1 rounded-full border border-fg/30 py-2 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-fg">
            Swap
          </div>
        </div>
      </div>
    </div>
  );
}

function AgentMock() {
  return (
    <div className="grid h-full grid-cols-12 gap-3">
      <div className="col-span-4 rounded-xl border border-fg/10 bg-fg/[0.03] p-3">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg/60">
          Patients
        </div>
        {["A. Soto", "M. Khan", "R. Lima", "Y. Park"].map((n) => (
          <div
            key={n}
            className="mt-2 flex items-center gap-2 rounded border border-fg/10 p-2 font-mono text-[11px]"
          >
            <span className="h-2 w-2 rounded-full bg-gold-500" />
            <span className="text-fg/80">{n}</span>
          </div>
        ))}
      </div>
      <div className="col-span-8 flex flex-col rounded-xl border border-fg/10 bg-fg/[0.03] p-3">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg/60">
          Triage · Draft
        </div>
        <div className="mt-3 space-y-2 text-[11px] leading-relaxed">
          <div className="rounded-lg bg-fg/[0.05] p-2 text-fg/80">
            "Hi doctor, my chest hurt last night when…"
          </div>
          <div className="ml-4 rounded-lg border border-gold-500/40 bg-gold-500/10 p-2 text-fg/85">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold-500">
              Draft reply · agent
            </span>
            <p className="mt-1">
              Thanks for writing. Based on your history (last echo 03/24), I'd
              like you to come in this week…
            </p>
          </div>
        </div>
        <div className="mt-auto flex items-center justify-between pt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-fg/55">
          <span>·· Confidence 0.91</span>
          <span className="text-gold-500">Approve →</span>
        </div>
      </div>
    </div>
  );
}

function DocsMock() {
  return (
    <div className="grid h-full grid-cols-12 gap-3">
      <div className="col-span-6 rounded-xl border border-fg/10 bg-fg/[0.03] p-4">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg/60">
          Contract · MSA
        </div>
        <div className="mt-3 space-y-1">
          {[90, 70, 80, 65, 75, 55, 70, 60, 80].map((w, i) => (
            <div
              key={i}
              className={`h-1.5 rounded ${i === 3 || i === 6 ? "bg-gold-500/70" : "bg-fg/15"}`}
              style={{ width: `${w}%` }}
            />
          ))}
        </div>
      </div>
      <div className="col-span-6 rounded-xl border border-fg/10 bg-fg/[0.03] p-4">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg/60">
          Extracted fields
        </div>
        {[
          ["Counterparty", "Glyph Systems Ltd."],
          ["Effective", "2026-04-01"],
          ["Term", "36 months"],
          ["Auto-renew", "Yes · 90d"],
          ["Cap", "$2.4M"],
        ].map(([k, v]) => (
          <div
            key={k}
            className="mt-2 flex items-center justify-between border-t border-fg/10 pt-2 font-mono text-[11px]"
          >
            <span className="text-fg/55">{k}</span>
            <span className="text-fg">{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function GraphMock() {
  return (
    <div className="grid h-full grid-cols-12 gap-3">
      <div className="col-span-8 rounded-xl border border-fg/10 bg-fg/[0.03] p-3">
        <div className="flex items-center justify-between">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg/60">
            Load forecast · 24h
          </div>
          <div className="font-display text-xl text-gold-500">412 MW</div>
        </div>
        <svg viewBox="0 0 240 80" className="mt-2 h-full max-h-32 w-full">
          <defs>
            <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#d4a857" stopOpacity="0.6" />
              <stop offset="1" stopColor="#d4a857" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,60 L20,52 L40,55 L60,40 L80,45 L100,30 L120,38 L140,22 L160,30 L180,18 L200,24 L220,12 L240,18 L240,80 L0,80 Z"
            fill="url(#g1)"
          />
          <polyline
            fill="none"
            stroke="#7c5db8"
            strokeWidth="1"
            opacity="0.7"
            points="0,65 20,58 40,60 60,46 80,50 100,36 120,44 140,28 160,36 180,24 200,30 220,18 240,24"
          />
        </svg>
      </div>
      <div className="col-span-4 rounded-xl border border-fg/10 bg-fg/[0.03] p-3">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg/60">
          Anomalies
        </div>
        {[
          ["Substation 7", "low"],
          ["Feeder 14", "medium"],
          ["Battery 2", "low"],
        ].map(([n, sev]) => (
          <div
            key={n}
            className="mt-2 flex items-center justify-between rounded border border-fg/10 p-2 font-mono text-[11px]"
          >
            <span className="text-fg/80">{n}</span>
            <span
              className={
                sev === "medium" ? "text-gold-500" : "text-fg/55"
              }
            >
              {sev}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
