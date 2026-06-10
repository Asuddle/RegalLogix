import { motion } from "framer-motion";
import { useState } from "react";
import PageShell from "../components/ui/PageShell";
import AmbientScene from "../components/three/AmbientScene";

const services = [
  "Web",
  "AI Agents",
  "Mobile",
  "Web3 / Blockchain",
  "DevOps",
  "Data & Platform",
  "Design",
  "Not sure yet",
];
const budgets = ["< $25k", "$25 – 75k", "$75 – 150k", "$150 – 400k", "> $400k"];
const timelines = ["ASAP", "< 1 month", "1 – 3 months", "3 – 6 months", "Just exploring"];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    service: "Web",
    budget: "$75 – 150k",
    timeline: "1 – 3 months",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update =
    <K extends keyof typeof form>(k: K) =>
    (e: { target: { value: string } }) =>
      setForm((s) => ({ ...s, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 mask-radial opacity-50">
          <AmbientScene colorA="#d4a857" colorB="#22d3ee" />
        </div>
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
        <div className="container-x relative pt-40">
          <p className="eyebrow">Contact</p>
          <h1 className="display mt-6 text-[12vw] leading-[0.9] md:text-[8vw]">
            <em className="text-gradient not-italic">Start</em> the conversation.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-fg/70">
            Tell us what you're building. The form below routes to a practice
            lead. You'll get a written response (not a calendar wall) within
            one business day.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="relative py-20 md:py-32">
        <div className="container-x grid gap-14 md:grid-cols-12">
          {/* Form */}
          <div className="md:col-span-8">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-3xl border border-fg/10 bg-fg/[0.03] p-12 md:p-16"
              >
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-gold-500">
                  Received
                </div>
                <h2 className="display mt-6 text-5xl md:text-6xl">
                  Thank you,{" "}
                  <em className="text-gradient not-italic">
                    {form.name || "friend"}
                  </em>
                  .
                </h2>
                <p className="mt-6 max-w-xl text-fg/65">
                  We've logged your brief and routed it to the {form.service}{" "}
                  practice lead. You'll hear back within one business day —
                  often the same day if you wrote in the morning.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm((s) => ({ ...s, message: "" }));
                  }}
                  className="btn-ghost mt-10"
                  data-cursor="hover"
                >
                  Send another →
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={submit}
                className="rounded-3xl border border-fg/10 bg-fg/[0.02] p-8 md:p-12"
              >
                <div className="grid gap-8 md:grid-cols-2">
                  <Field label="Your name" htmlFor="name">
                    <input
                      id="name"
                      required
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Ada Lovelace"
                      className="w-full border-b border-fg/15 bg-transparent py-3 font-display text-2xl text-fg outline-none transition-colors focus:border-violet-400"
                    />
                  </Field>
                  <Field label="Company" htmlFor="company">
                    <input
                      id="company"
                      value={form.company}
                      onChange={update("company")}
                      placeholder="Analytical Engines Ltd."
                      className="w-full border-b border-fg/15 bg-transparent py-3 font-display text-2xl text-fg outline-none transition-colors focus:border-violet-400"
                    />
                  </Field>
                </div>

                <div className="mt-12">
                  <Field label="Work email" htmlFor="email">
                    <input
                      id="email"
                      required
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="ada@engines.co"
                      className="w-full border-b border-fg/15 bg-transparent py-3 font-display text-2xl text-fg outline-none transition-colors focus:border-violet-400"
                    />
                  </Field>
                </div>

                <div className="mt-12">
                  <FieldLabel>Service</FieldLabel>
                  <ChipGroup
                    options={services}
                    value={form.service}
                    onChange={(v) => setForm((s) => ({ ...s, service: v }))}
                  />
                </div>

                <div className="mt-10 grid gap-10 md:grid-cols-2">
                  <div>
                    <FieldLabel>Budget</FieldLabel>
                    <ChipGroup
                      options={budgets}
                      value={form.budget}
                      onChange={(v) => setForm((s) => ({ ...s, budget: v }))}
                    />
                  </div>
                  <div>
                    <FieldLabel>Timeline</FieldLabel>
                    <ChipGroup
                      options={timelines}
                      value={form.timeline}
                      onChange={(v) => setForm((s) => ({ ...s, timeline: v }))}
                    />
                  </div>
                </div>

                <div className="mt-12">
                  <Field label="What are you building?" htmlFor="message">
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={update("message")}
                      placeholder="A few paragraphs about the product, the problem and the people it's for. Links welcome."
                      className="w-full resize-none border-b border-fg/15 bg-transparent py-3 text-lg leading-relaxed text-fg outline-none transition-colors focus:border-violet-400"
                    />
                  </Field>
                </div>

                <div className="mt-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                  <p className="max-w-md font-mono text-[11px] uppercase tracking-[0.25em] text-fg/40">
                    We read every brief personally · response within 1 business day
                  </p>
                  <button
                    type="submit"
                    className="btn-primary"
                    data-cursor="hover"
                  >
                    Send brief <span aria-hidden>→</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Aside */}
          <aside className="md:col-span-4 space-y-10">
            <InfoBlock label="Studio">
              <a
                href="mailto:hello@regallogix.studio"
                className="font-display text-3xl text-fg hover:text-violet-400"
                data-cursor="hover"
              >
                hello@regallogix.studio
              </a>
            </InfoBlock>
            <InfoBlock label="Careers">
              <a
                href="mailto:careers@regallogix.studio"
                className="font-display text-3xl text-fg hover:text-violet-400"
                data-cursor="hover"
              >
                careers@regallogix.studio
              </a>
            </InfoBlock>
            <InfoBlock label="Press">
              <a
                href="mailto:press@regallogix.studio"
                className="font-display text-3xl text-fg hover:text-violet-400"
                data-cursor="hover"
              >
                press@regallogix.studio
              </a>
            </InfoBlock>
            <InfoBlock label="Locations">
              <div className="space-y-2 text-fg/70">
                <p>San Francisco · CA</p>
                <p>Lahore · PK</p>
                <p>Remote · Global</p>
              </div>
            </InfoBlock>
            <InfoBlock label="Office hours">
              <p className="text-fg/70">
                Mon – Thu, 09:00 – 18:00 (PT)
                <br />
                Fridays · maker time
              </p>
            </InfoBlock>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-fg/50">
      {children}
    </div>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <FieldLabel>{label}</FieldLabel>
      {children}
    </label>
  );
}

function ChipGroup({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const active = opt === value;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            data-cursor="hover"
            className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-all ${
              active
                ? "border-fg bg-fg text-canvas"
                : "border-fg/15 bg-transparent text-fg/70 hover:border-fg/40 hover:text-fg"
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

function InfoBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-fg/10 pt-6">
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg/40">
        {label}
      </p>
      <div className="mt-4">{children}</div>
    </div>
  );
}
