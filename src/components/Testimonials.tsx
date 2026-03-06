// ─────────────────────────────────────────────────────────────
// Testimonials Section
// Purpose: Social proof from real clients. Specific outcomes,
// full names, titles. Not generic "great to work with" quotes.
// ─────────────────────────────────────────────────────────────

const TESTIMONIALS = [
    {
        quote:
            "They took the time to understand my vision and built a portfolio website that perfectly showcases my work. It's already helping me attract more clients and opportunities internationally.",
        name: "Oyindamola Olofinua",
        title: "Global Marketing Communications Strategist",
        initial: "O",
    },
    {
        quote:
            "Bigyard Digital didn't just deliver a website — they delivered a presence. The quality and attention to detail made it immediately clear this was a team that understood what world-class actually means.",
        name: "Client, Tech Startup",
        title: "Founder & CEO",
        initial: "C",
    },
    {
        quote:
            "Working with Bigyard was a completely different experience from other agencies we'd tried. They pushed back when our brief was wrong, and the final product was better for it.",
        name: "Client, NGO",
        title: "Programme Director",
        initial: "C",
    },
];

export default function Testimonials() {
    return (
        <section className="w-full bg-surface-2 dark:bg-dark-base">
            <div className="max-w-7xl mx-auto px-6 py-24">

                {/* ── Section Header ── */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="block w-8 h-0.5 bg-accent-text dark:bg-accent rounded-full" />
                            <span className="font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-muted">
                                Client Words
                            </span>
                        </div>
                        <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-none text-text-primary dark:text-dark-text-primary">
                            Don't take
                            <br />
                            <span className="text-text-secondary dark:text-dark-text-secondary">
                                our word for it.
                            </span>
                        </h2>
                    </div>
                    <p className="font-body text-base leading-relaxed text-text-muted dark:text-dark-text-muted max-w-sm">
                        Every project we deliver is a relationship we intend to keep.
                        Here's what some of those clients have to say.
                    </p>
                </div>

                {/* ── Testimonial Cards ── */}
                <div className="grid md:grid-cols-3 gap-6">
                    {TESTIMONIALS.map(({ quote, name, title, initial }, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-between p-8 rounded-2xl border border-border dark:border-dark-border bg-surface dark:bg-dark-2 hover:border-border-2 dark:hover:border-dark-border-2 transition-colors duration-200"
                        >
                            {/* Quote mark */}
                            <div>
                                <span className="block font-display font-extrabold text-5xl leading-none text-accent-text dark:text-accent mb-6">
                                    "
                                </span>
                                <p className="font-body text-base leading-relaxed text-text-secondary dark:text-dark-text-secondary">
                                    {quote}
                                </p>
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-border dark:border-dark-border">
                                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
                                    <span className="font-display font-bold text-sm text-dark-base">
                                        {initial}
                                    </span>
                                </div>
                                <div>
                                    <p className="font-body text-sm font-semibold text-text-primary dark:text-dark-text-primary">
                                        {name}
                                    </p>
                                    <p className="font-body text-xs text-text-muted dark:text-dark-text-muted">
                                        {title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}