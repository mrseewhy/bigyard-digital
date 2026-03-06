import { Link } from "react-router-dom";

const STATS = [
    { value: "20+", label: "Global clients served" },
    { value: "100+", label: "Developers trained" },
    { value: "7+", label: "Years of excellence" },
];

const CLIENTS = [
    "Gates Foundation",
    "Data Science Nigeria",
    "Tradecrib Ltd",
    "Stories Click",
    "Mind The Gap",
    "On The Job",
];

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
            <div className="max-w-7xl mx-auto px-6 pt-20 pb-24">

                {/* ── Location Tag ── */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border dark:border-dark-border bg-surface dark:bg-dark-2 mb-10">
                    <span className="text-accent-text dark:text-accent text-xs">●</span>
                    <span className="font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-muted">
                        Lagos, Nigeria — Global Reach
                    </span>
                </div>

                {/* ── Headline ── */}
                <h1 className="font-display font-extrabold leading-none tracking-tight text-text-primary dark:text-dark-text-primary mb-6 max-w-4xl text-[clamp(40px,7vw,80px)]">
                    We Build Web Platforms That Make African Businesses Look{" "}
                    <span className="relative inline-block">
                        {/* The text itself stays dark in light mode for readability */}
                        <span className="relative z-10 text-text-primary dark:text-accent">
                            World-Class
                        </span>
                        {/* Lime highlight bar behind the text — light mode only */}
                        <span
                            className="absolute left-0 bottom-[0.12em] w-full dark:hidden rounded-sm z-0"
                            style={{ height: "0.35em", background: "var(--color-accent)", opacity: 0.35 }}
                        />
                    </span>
                </h1>

                {/* ── Subheadline ── */}
                <p className="font-body text-lg leading-relaxed text-text-secondary dark:text-dark-text-secondary max-w-2xl mb-10">
                    For founders and organizations who can't afford to look small online.
                    Premium web design and development, built to convert international
                    audiences and signal credibility to partners and investors.
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
                        View Our Work
                    </Link>
                </div>

                {/* ── Stats ── */}
                <div className="flex flex-wrap gap-x-12 gap-y-6 pt-10 border-t border-border dark:border-dark-border">
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
                </div>
            </div>

            {/* ── Client Logo Strip ── */}
            <div className="w-full border-t border-b border-border dark:border-dark-border bg-surface dark:bg-dark-2">
                <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap items-center gap-x-10 gap-y-3">
                    <span className="font-body text-xs font-semibold tracking-widest uppercase text-text-faint dark:text-dark-text-faint">
                        Trusted by
                    </span>
                    {CLIENTS.map((client) => (
                        <span
                            key={client}
                            className="font-body text-sm font-semibold text-text-faint dark:text-dark-text-faint"
                        >
                            {client}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}