import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageShell from "../components/ui/PageShell";
import AmbientScene from "../components/three/AmbientScene";

const values = [
  {
    n: "I.",
    t: "Senior by default",
    b: "Every engineer who touches your codebase has shipped production systems before. No staffing pyramids, no apprenticeship on your dime.",
  },
  {
    n: "II.",
    t: "Write things down",
    b: "Decisions, trade-offs, evals, post-mortems — written, dated, signed. Your team should be able to read the thinking, not just the diffs.",
  },
  {
    n: "III.",
    t: "Boring by default",
    b: "We pick boring technology unless the problem demands exotic. Where novelty lives, evals and observability follow it.",
  },
  {
    n: "IV.",
    t: "Honest cadence",
    b: "Two-week visible cadences. Friday demos. If something is slipping you'll hear it from us before you ask.",
  },
];

const timeline = [
  { y: "2018", t: "Studio founded as a two-person collective." },
  { y: "2020", t: "First fintech engagement; shipped a real-time trading console at sub-50ms render budgets." },
  { y: "2022", t: "Opened the AI practice; first RAG system in production." },
  { y: "2024", t: "Crossed 60 shipped products. Native mobile practice formalised." },
  { y: "2026", t: "Studio of 18 across three timezones; agent platform partnerships." },
];

const team = [
  { n: "Ayaan Khurram", r: "Founding partner · Engineering" },
  { n: "Iris Tanaka", r: "Founding partner · Design" },
  { n: "Mateo Álvarez", r: "Principal · AI Systems" },
  { n: "Halima Diop", r: "Principal · Mobile" },
  { n: "Søren Lind", r: "Lead · Platform" },
  { n: "Yara Rahman", r: "Lead · Product" },
];

export default function About() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative isolate min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0 -z-10 mask-radial opacity-60">
          <AmbientScene colorA="#a78bfa" colorB="#d4a857" />
        </div>
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
        <div className="container-x relative flex min-h-[80vh] flex-col justify-end pb-20 pt-40">
          <p className="eyebrow">About</p>
          <h1 className="display mt-6 text-[14vw] leading-[0.9] md:text-[10vw]">
            A studio built like <em className="text-gradient not-italic">a small</em>
            <br />
            <span className="text-stroke">engineering team.</span>
          </h1>
          <div className="mt-12 grid gap-10 md:grid-cols-12">
            <p className="md:col-span-6 max-w-xl text-lg text-fg/70">
              RegalLogix is a senior engineering studio. We design, build and
              operate web, mobile and AI products end-to-end — and we keep the
              team small enough to fit in a single room.
            </p>
            <dl className="md:col-span-4 md:col-start-9 grid grid-cols-3 gap-6 self-end">
              {[
                ["18", "humans"],
                ["3", "timezones"],
                ["60+", "products"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="display text-4xl text-gradient">{k}</dt>
                  <dd className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-fg/50">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="relative py-32">
        <div className="container-x grid items-start gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Manifesto</p>
            <h2 className="display mt-6 text-5xl md:text-6xl">
              We don't ship demos.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-fg/75 text-lg leading-relaxed">
            <p>
              Most engineering shops sell either velocity or polish; very few
              sell both. We don't believe the trade-off is real at the team
              sizes we work at — we believe it's a symptom of how teams are
              structured, not how engineering works.
            </p>
            <p>
              So we structured ourselves differently. Lean teams of senior
              practitioners. No middlemen between you and the people writing
              the code. Specs that fit on a page. Telemetry from day one. AI
              that earns its keep through evals, not vibes.
            </p>
            <p>
              The result is a studio that ships{" "}
              <em className="text-gradient not-italic">production software</em>{" "}
              at the speed of a prototype shop — and means it.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-32">
        <div className="container-x">
          <div className="grid items-end gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="eyebrow">Operating principles</p>
              <h2 className="display mt-6 text-6xl md:text-8xl">
                How the studio
                <br />
                <em className="text-gradient not-italic">actually behaves.</em>
              </h2>
            </div>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-fg/5 bg-fg/[0.02] md:grid-cols-2">
            {values.map((v, i) => (
              <motion.div
                key={v.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-canvas p-10 md:p-14"
              >
                <div className="font-display text-3xl text-gold-500/80">
                  {v.n}
                </div>
                <h3 className="mt-6 font-display text-4xl">{v.t}</h3>
                <p className="mt-4 text-fg/65">{v.b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-32">
        <div className="container-x">
          <p className="eyebrow">Trajectory</p>
          <h2 className="display mt-6 text-5xl md:text-7xl">
            From two people in a room
            <br />
            <span className="text-stroke">to eighteen across three timezones.</span>
          </h2>

          <ol className="mt-20 relative border-l border-fg/10 pl-8">
            {timeline.map((t, i) => (
              <motion.li
                key={t.y}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative mb-14 last:mb-0"
              >
                <span className="absolute -left-[37px] top-2 grid h-4 w-4 place-items-center rounded-full border border-fg/30 bg-canvas">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                </span>
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-fg/40">
                  {t.y}
                </div>
                <p className="mt-2 max-w-2xl font-display text-2xl text-fg">
                  {t.t}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-32">
        <div className="container-x">
          <div className="grid items-end gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="eyebrow">Practice leads</p>
              <h2 className="display mt-6 text-6xl md:text-7xl">
                Small team.
                <br />
                <em className="text-gradient not-italic">Calm room.</em>
              </h2>
            </div>
            <p className="md:col-span-4 md:col-start-9 text-fg/65">
              The people listed below are the people you'll talk to. The studio
              is intentionally flat — there is no account manager layer between
              you and engineering.
            </p>
          </div>

          <ul className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-fg/5 bg-fg/[0.02] md:grid-cols-3">
            {team.map((p, i) => (
              <motion.li
                key={p.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative bg-canvas p-10"
                data-cursor="hover"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-violet-500/20 via-aqua-500/10 to-gold-500/15">
                  <div className="flex h-full items-end p-6">
                    <span className="font-display text-7xl text-fg/60">
                      {p.n
                        .split(" ")
                        .map((s) => s[0])
                        .join("")}
                    </span>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="font-display text-2xl">{p.n}</div>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-fg/50">
                    {p.r}
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-fg/10 bg-fg/[0.02] p-12 md:flex-row md:items-center md:p-16">
            <h3 className="display max-w-2xl text-4xl md:text-6xl">
              Curious about how the studio could fit your next product?
            </h3>
            <Link
              to="/contact"
              className="btn-primary shrink-0"
              data-cursor="hover"
            >
              Talk to the studio <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
