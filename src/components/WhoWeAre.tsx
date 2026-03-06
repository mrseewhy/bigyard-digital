// ─────────────────────────────────────────────────────────────
// Who We Are Section
// Purpose: Brief, founder-led human moment before Services.
// Not the full About page — just enough to answer
// "who actually is this?" and build personal trust.
// ─────────────────────────────────────────────────────────────

import { Link } from "react-router-dom";

const VALUES = [
    {
        title: "No cheap work",
        description:
            "We don't race to the bottom on price. Every project we take on gets our full attention — or we don't take it on.",
    },
    {
        title: "Outcomes over output",
        description:
            "We're not here to deliver files. We're here to build things that change how your business is perceived and how it performs.",
    },
    {
        title: "Built for the global stage",
        description:
            "We understand African markets from the inside. We build to international standards from the outside. That combination is rare.",
    },
];

export default function WhoWeAre() {
    return (
        <section className="w-full bg-surface-2 dark:bg-dark-base">
            <div className="max-w-7xl mx-auto px-6 py-24">

                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* ── Left — The Story ── */}
                    <div>
                        {/* Label */}
                        <div className="flex items-center gap-3 mb-4">
                            <span className="block w-8 h-0.5 bg-accent-text dark:bg-accent rounded-full" />
                            <span className="font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-muted">
                                Who We Are
                            </span>
                        </div>

                        <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-tight text-text-primary dark:text-dark-text-primary mb-8">
                            A premium agency built from the inside of the African tech ecosystem.
                        </h2>

                        <div className="flex flex-col gap-5">
                            <p className="font-body text-base leading-relaxed text-text-secondary dark:text-dark-text-secondary">
                                Bigyard Digital was built on a simple observation: too many African
                                businesses have great products, serious ambitions, and websites that
                                make them look like they're just getting started. That gap costs them
                                deals, partnerships, and credibility — silently, every day.
                            </p>
                            <p className="font-body text-base leading-relaxed text-text-secondary dark:text-dark-text-secondary">
                                We exist to close that gap. We've trained over 100 developers,
                                worked with international organizations, and built platforms for
                                founders across industries. We know what world-class looks like
                                — and we know how to build it.
                            </p>
                            <p className="font-body text-base leading-relaxed text-text-secondary dark:text-dark-text-secondary">
                                We don't do volume. We take on a select number of projects and
                                give each one everything we have.
                            </p>
                        </div>

                        <Link
                            to="/about"
                            className="inline-flex items-center gap-2 mt-10 font-body text-sm font-semibold text-accent-text dark:text-accent hover:gap-3 transition-all duration-200"
                        >
                            More about us →
                        </Link>
                    </div>

                    {/* ── Right — Values ── */}
                    <div className="flex flex-col gap-px bg-border dark:bg-dark-border rounded-2xl overflow-hidden">
                        {VALUES.map(({ title, description }, index) => (
                            <div
                                key={title}
                                className="flex gap-6 p-8 bg-surface dark:bg-dark-2 hover:bg-surface-3 dark:hover:bg-dark-3 transition-colors duration-200"
                            >
                                {/* Number */}
                                <span className="font-display font-bold text-sm text-text-faint dark:text-dark-text-faint shrink-0 mt-0.5">
                                    0{index + 1}
                                </span>

                                {/* Content */}
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
            </div>
        </section>
    );
}