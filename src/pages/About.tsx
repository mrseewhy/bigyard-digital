// ─────────────────────────────────────────────────────────────
// About Us Page
// Sections:
//   1. PageHeader
//   2. Founder Story
//   3. What We Stand For (values)
//   4. The Numbers
//   5. Process
//   6. CTA Strip
// ─────────────────────────────────────────────────────────────

import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const VALUES = [
  {
    number: "01",
    title: "Premium is a standard, not a price tag",
    description:
      "We don’t charge more to appear exclusive. We charge what serious work costs. Every decision from design to code is made with intention.",
  },
  {
    number: "02",
    title: "Honesty over comfort",
    description:
      "If something won’t work, we’ll say it. Early. Directly. We would rather have a difficult conversation than deliver something that fails.",
  },
  {
    number: "03",
    title: "African excellence, global standards",
    description:
      "We build with context and ambition. What we produce holds up anywhere not just locally.",
  },
  {
    number: "04",
    title: "Fewer projects, deeper focus",
    description:
      "We deliberately limit how much we take on.Not because we can’t do more because the work is better when we’re fully invested.",
  },
];

const PROCESS = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We take time to understand your business properly, your goals, your audience, and what success actually looks like. No assumptions. No shortcuts.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Before anything is designed, we define structure, positioning, and direction. This is where most projects either succeed or fail so we take it seriously.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Design is not decoration. It’s communication. Every layout, interaction, and detail is built to guide perception and action.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "Clean, scalable, and built to last. No fragile systems. No shortcuts. Just solid engineering.",
  },
  {
    number: "05",
    title: "Launch & Handover",
    description:
      "We handle deployment, guide your team, and ensure you’re fully equipped to move forward. And if you need us after launch, we’re still there.",
  },
];

const STATS = [
  { value: "60+", label: "Clients served" },
  { value: "100+", label: "Projects delivered" },
  { value: "7+", label: "Years building" },
  { value: "15+", label: "Countries reached" },
];

export default function About() {
  return (
    <main className="w-full">
      {/* ── Page Header ── */}
      <PageHeader
        label="Our Story"
        title="We exist because too many great businesses look smaller than they are."
        subtitle="Too many strong businesses lose opportunities because they don’t look the part. We exist to fix that. Because perception decides who gets taken seriously."
      />

      {/* ── Founder Story ── */}
      <section className="w-full bg-surface dark:bg-dark-2">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left — Story */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-8 h-0.5 bg-accent-text dark:bg-accent rounded-full" />
                <span className="font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-muted">
                  The Founder
                </span>
              </div>

              <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight leading-tight text-text-primary dark:text-dark-text-primary mb-8">
                Built by someone who got tired of seeing good businesses
                ignored.
              </h2>

              <div className="flex flex-col gap-5">
                <p className="font-body text-base leading-relaxed text-text-secondary dark:text-dark-text-secondary">
                  Across the Nigerian tech ecosystem, the pattern was obvious.
                  Strong products. Serious founders. Weak digital presence. And
                  that mismatch was costing them.
                </p>
                <p className="font-body text-base leading-relaxed text-text-secondary dark:text-dark-text-secondary">
                  Websites, the first thing investors, partners, and clients
                  see, were often the weakest link. Bigyard Digital was built to
                  change that. Not by offering quick fixes.
                </p>
                <p className="font-body text-base leading-relaxed text-text-secondary dark:text-dark-text-secondary">
                  But by building platforms that actually earn trust. Today, we
                  work with teams who understand that how you’re perceived
                  shapes what opportunities you attract.
                </p>
              </div>
            </div>

            {/* Right — Founder card */}
            <div className="flex flex-col gap-6">
              {/* Photo placeholder */}
              <div className="w-full aspect-4/3 rounded-2xl bg-surface-3 dark:bg-dark-3 border border-border dark:border-dark-border flex items-center justify-center">
                {/* <span className="font-body text-sm text-text-faint dark:text-dark-text-faint">
                  Founder photo
                </span> */}
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  src="img/olusegun.jpg"
                  alt="Olusegun Adeyemi, Founder of Bigyard Digital"
                />
              </div>

              {/* Founder info card */}
              <div className="p-6 rounded-2xl border border-border dark:border-dark-border bg-surface-2 dark:bg-dark-base">
                <p className="font-display font-bold text-lg text-text-primary dark:text-dark-text-primary mb-0.5">
                  Olusegun Adeyemi
                </p>
                <p className="font-body text-sm text-text-muted dark:text-dark-text-muted mb-4">
                  Founder & Creative Director
                </p>
                <p className="font-body text-sm leading-relaxed text-text-secondary dark:text-dark-text-secondary">
                  Web developer and systems builder based in Lagos. Focused on
                  helping African businesses meet global standards in how they
                  function and perceived.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Stand For ── */}
      <section className="w-full bg-surface-2 dark:bg-dark-base">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-8 h-0.5 bg-accent-text dark:bg-accent rounded-full" />
                <span className="font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-muted">
                  Our Values
                </span>
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-none text-text-primary dark:text-dark-text-primary">
                What we stand for.
              </h2>
            </div>
            <p className="font-body text-base leading-relaxed text-text-muted dark:text-dark-text-muted max-w-sm">
              These aren't words on a wall. They're the decisions we make every
              day in how we work, what we take on, and what we say no to.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border dark:bg-dark-border rounded-2xl overflow-hidden">
            {VALUES.map(({ number, title, description }) => (
              <div
                key={number}
                className="flex gap-6 p-8 bg-surface dark:bg-dark-2 hover:bg-surface-3 dark:hover:bg-dark-3 transition-colors duration-200"
              >
                <span className="font-display font-bold text-sm text-text-faint dark:text-dark-text-faint shrink-0 mt-0.5">
                  {number}
                </span>
                <div>
                  <h3 className="font-display font-bold text-lg tracking-tight text-text-primary dark:text-dark-text-primary mb-2">
                    {title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-text-secondary dark:text-dark-text-muted">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Numbers ── */}
      <section className="w-full bg-surface dark:bg-dark-2">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — Copy */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-8 h-0.5 bg-accent-text dark:bg-accent rounded-full" />
                <span className="font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-muted">
                  By The Numbers
                </span>
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-tight text-text-primary dark:text-dark-text-primary mb-6">
                Small team.
                <br />
                <span className="text-text-secondary dark:text-dark-text-secondary">
                  Serious track record.
                </span>
              </h2>
              <p className="font-body text-base leading-relaxed text-text-secondary dark:text-dark-text-secondary max-w-md">
                We’ve never chased volume. Everything we’ve built has been
                focused on quality, trust, and outcomes.
              </p>
            </div>

            {/* Right — Stats grid */}
            <div className="grid grid-cols-2 gap-px bg-border dark:bg-dark-border rounded-2xl overflow-hidden">
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col justify-center p-10 bg-surface-2 dark:bg-dark-base"
                >
                  <p className="font-display font-extrabold text-5xl tracking-tight leading-none text-text-primary dark:text-dark-text-primary mb-2">
                    {value}
                  </p>
                  <p className="font-body text-sm text-text-muted dark:text-dark-text-muted">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="w-full bg-surface-2 dark:bg-dark-base">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-8 h-0.5 bg-accent-text dark:bg-accent rounded-full" />
                <span className="font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-muted">
                  How We Work
                </span>
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-none text-text-primary dark:text-dark-text-primary">
                Our process.
              </h2>
            </div>
            <p className="font-body text-base leading-relaxed text-text-muted dark:text-dark-text-muted max-w-sm">
              Every project follows the same disciplined process. It's how we
              consistently deliver on time, on brief, and above expectation.
            </p>
          </div>

          <div className="flex flex-col gap-px bg-border dark:bg-dark-border rounded-2xl overflow-hidden">
            {PROCESS.map(({ number, title, description }) => (
              <div
                key={number}
                className="grid md:grid-cols-[80px_200px_1fr] gap-6 md:gap-10 p-8 bg-surface dark:bg-dark-2 hover:bg-surface-3 dark:hover:bg-dark-3 transition-colors duration-200 items-start"
              >
                <span className="font-display font-bold text-sm text-text-faint dark:text-dark-text-faint">
                  {number}
                </span>
                <h3 className="font-display font-bold text-lg tracking-tight text-text-primary dark:text-dark-text-primary">
                  {title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-text-secondary dark:text-dark-text-muted">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Strip ── */}
      <section className="w-full bg-surface-3 dark:bg-dark-3">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight leading-tight text-text-primary dark:text-dark-text-primary mb-3">
                Seen enough?
                <br />
                <span className="text-accent-text dark:text-accent">
                  Let's build something.
                </span>
              </h2>
              <p className="font-body text-base text-text-secondary dark:text-dark-text-muted max-w-md">
                We take on a limited number of projects each quarter to maintain
                focus and quality. If you’re building something meaningful and
                want it to be taken seriously, this is where the conversation
                starts.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-dark-base text-sm font-bold tracking-wide transition-all duration-200 hover:bg-accent-hover hover:scale-105"
              >
                Book a Strategy Call →
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border-2 dark:border-dark-border-2 text-text-secondary dark:text-dark-text-muted text-sm font-medium transition-all duration-200 hover:border-text-muted dark:hover:border-dark-text-muted hover:text-text-primary dark:hover:text-dark-text-primary"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
