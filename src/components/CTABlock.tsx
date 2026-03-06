import { Link } from "react-router-dom";

const TRUST_SIGNALS = [
    {
        label: "Free strategy call",
        detail: "30 minutes. No pitch. Just an honest conversation about your project and what it needs.",
    },
    {
        label: "Clear proposal",
        detail: "If we're a fit, you'll receive a scoped proposal with timeline and investment within 48 hours.",
    },
    {
        label: "No surprises",
        detail: "Scope, timeline, and price are agreed upfront. We don't move goalposts once a project starts.",
    },
];

export default function CTABlock() {
    return (
        <section className="w-full bg-surface-3 dark:bg-dark-3">
            <div className="max-w-7xl mx-auto px-6 py-24">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left — Copy */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="block w-8 h-0.5 bg-accent-text dark:bg-accent rounded-full" />
                            <span className="font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-muted">
                                Work With Us
                            </span>
                        </div>

                        <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-tight text-text-primary dark:text-dark-text-primary mb-6">
                            Ready to build
                            <br />
                            <span className="text-accent-text dark:text-accent">
                                something serious?
                            </span>
                        </h2>

                        <p className="font-body text-base leading-relaxed text-text-secondary dark:text-dark-text-muted mb-10 max-w-md">
                            We take on a select number of projects each quarter — enough
                            to give every client our full attention. If you're building
                            something that matters, the conversation starts with a
                            free 30-minute strategy call.
                        </p>

                        <div className="flex flex-wrap gap-4">
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

                    {/* Right — Trust Signals */}
                    <div className="flex flex-col gap-px bg-border dark:bg-dark-border rounded-2xl overflow-hidden">
                        {TRUST_SIGNALS.map(({ label, detail }) => (
                            <div
                                key={label}
                                className="flex gap-4 p-7 bg-surface dark:bg-dark-2 hover:bg-surface-2 dark:hover:bg-dark-base transition-colors duration-200"
                            >
                                <span className="text-accent-text dark:text-accent mt-0.5 shrink-0 font-body text-base">
                                    ✦
                                </span>
                                <div>
                                    <p className="font-display font-bold text-base text-text-primary dark:text-dark-text-primary mb-1">
                                        {label}
                                    </p>
                                    <p className="font-body text-sm leading-relaxed text-text-secondary dark:text-dark-text-muted">
                                        {detail}
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