import { Link } from "react-router-dom";

// const STATS = [
//   { value: "60+", label: "Clients served" },
//   { value: "100+", label: "Projects delivered" },
//   { value: "7+", label: "Years building" },
// ];

export default function Hero() {
  return (
    <section
      className="w-full bg-surface-2 dark:bg-dark-base"
      style={{
        backgroundImage: `
                    linear-gradient(to right, color-mix(in srgb, currentColor 6%, transparent) 1px, transparent 1px),
                    linear-gradient(to bottom, color-mix(in srgb, currentColor 6%, transparent) 1px, transparent 1px)
                `,
        backgroundSize: "72px 72px",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-20">
        {/* ── Location Tag ── */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border dark:border-dark-border bg-surface dark:bg-dark-2 mb-10">
          <span className="text-accent-text dark:text-accent text-xs">●</span>
          <span className="font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-muted">
            Lagos, Nigeria — Global Reach
          </span>
        </div>

        {/* ── Headline ── */}
        <h1 className="font-display font-extrabold leading-none tracking-tight text-text-primary dark:text-dark-text-primary mb-6 max-w-5xl text-[clamp(40px,7vw,80px)]">
          We Build Web Platforms That Make African Businesses Look{" "}
          <span className="text-accent-text dark:text-accent">World-Class</span>
        </h1>

        {/* ── Subheadline ── */}
        <p className="font-body text-lg leading-relaxed text-text-secondary dark:text-dark-text-secondary max-w-2xl mb-4">
          If your website doesn't communicate credibility in seconds, you're
          already losing deals. We design and build platforms that make
          partners, investors, and global clients take you seriously.
        </p>

        {/* ── Trust line ── */}
        <p className="font-body text-sm font-medium text-text-muted dark:text-dark-text-muted mb-10">
          Trusted by ambitious teams across Africa and beyond.
        </p>

        {/* ── CTAs ── */}
        <div className="flex flex-wrap gap-4 mb-20">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-dark-base text-sm font-bold tracking-wide transition-all duration-200 hover:bg-accent-hover hover:scale-105"
          >
            Book a Strategy Call →
          </Link>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border-2 dark:border-dark-border-2 text-text-secondary dark:text-dark-text-secondary text-sm font-medium transition-all duration-200 hover:border-text-muted dark:hover:border-dark-text-muted"
          >
            Explore Our Work
          </Link>
        </div>

        {/* ── Stats ── */}
        {/* <div className="flex flex-wrap gap-x-12 gap-y-6 pt-2 border-t border-border dark:border-dark-border">
          {STATS.map(({ value, label }) => (
            <div key={value}>
              <p className="font-display font-extrabold text-4xl tracking-tight leading-none text-text-primary dark:text-dark-text-primary">
                {value}
              </p>
              <p className="font-body text-sm text-text-muted dark:text-dark-text-muted mt-1">
                {label}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
