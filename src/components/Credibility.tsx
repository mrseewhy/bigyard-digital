// ─────────────────────────────────────────────────────────────
// Credibility Section
// Purpose: Immediately after hero — validate trust before
// the visitor reads anything else. Shows WHO trusted you
// and WHAT changed for them. Not just logos.
// ─────────────────────────────────────────────────────────────

const FEATURED = [
    {
        client: "Gates Foundation",
        category: "International NGO",
        outcome:
            "Built a web platform for a Gates Foundation-backed initiative — designed to communicate impact to international donors and partners across multiple regions.",
        metric: "International",
        metricLabel: "Donor-facing reach",
    },
    {
        client: "Data Science Nigeria",
        category: "Tech Community",
        outcome:
            "Redesigned the public platform for Nigeria's largest data science community, elevating their credibility with global academic and corporate partners.",
        metric: "50,000+",
        metricLabel: "Community members reached",
    },
    {
        client: "Tradecrib Limited",
        category: "Real Estate",
        outcome:
            "Delivered a professional property platform that positioned Tradecrib as a credible player in Nigeria's competitive real estate market.",
        metric: "Full-stack",
        metricLabel: "Web platform delivered",
    },
];

const STATS = [
    { value: "20+", label: "Clients served" },
    { value: "100+", label: "Developers trained" },
    { value: "7+", label: "Years of experience" },
    { value: "3", label: "Countries reached" },
];

export default function Credibility() {
    return (
        <section className="w-full bg-surface dark:bg-dark-2">
            <div className="max-w-7xl mx-auto px-6 py-24">

                {/* ── Section Header ── */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div>
                        {/* Label */}
                        <div className="flex items-center gap-3 mb-4">
                            <span className="block w-8 h-0.5 bg-accent-text dark:bg-accent rounded-full" />
                            <span className="font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-muted">
                                Trusted Work
                            </span>
                        </div>
                        <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-none text-text-primary dark:text-dark-text-primary max-w-lg">
                            Serious clients.{" "}
                            <span className="text-text-secondary dark:text-dark-text-secondary">
                                Serious outcomes.
                            </span>
                        </h2>
                    </div>
                    <p className="font-body text-base leading-relaxed text-text-muted dark:text-dark-text-muted max-w-sm">
                        From international foundations to fast-growing Nigerian startups —
                        we've built for organizations that couldn't afford to look anything
                        less than world-class.
                    </p>
                </div>

                {/* ── Featured Client Cards ── */}
                <div className="grid md:grid-cols-3 gap-6 mb-20">
                    {FEATURED.map(({ client, category, outcome, metric, metricLabel }) => (
                        <div
                            key={client}
                            className="flex flex-col justify-between p-8 rounded-2xl border border-border dark:border-dark-border bg-surface-2 dark:bg-dark-base hover:border-border-2 dark:hover:border-dark-border-2 transition-colors duration-200"
                        >
                            {/* Top */}
                            <div>
                                {/* Category tag */}
                                <span className="inline-block font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-muted bg-surface-3 dark:bg-dark-3 px-2.5 py-1 rounded-md mb-6">
                                    {category}
                                </span>

                                {/* Client name */}
                                <h3 className="font-display font-bold text-xl tracking-tight text-text-primary dark:text-dark-text-primary mb-3">
                                    {client}
                                </h3>

                                {/* Outcome */}
                                <p className="font-body text-sm leading-relaxed text-text-secondary dark:text-dark-text-muted">
                                    {outcome}
                                </p>
                            </div>

                            {/* Bottom — metric */}
                            <div className="mt-8 pt-6 border-t border-border dark:border-dark-border">
                                <p className="font-display font-extrabold text-2xl tracking-tight text-text-primary dark:text-dark-text-primary">
                                    {metric}
                                </p>
                                <p className="font-body text-xs text-text-muted dark:text-dark-text-muted mt-0.5">
                                    {metricLabel}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Stats Bar ── */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border dark:bg-dark-border rounded-2xl overflow-hidden">
                    {STATS.map(({ value, label }) => (
                        <div
                            key={label}
                            className="flex flex-col items-center justify-center py-10 px-6 bg-surface-2 dark:bg-dark-base"
                        >
                            <p className="font-display font-extrabold text-4xl tracking-tight leading-none text-text-primary dark:text-dark-text-primary mb-1">
                                {value}
                            </p>
                            <p className="font-body text-sm text-text-muted dark:text-dark-text-muted text-center">
                                {label}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}