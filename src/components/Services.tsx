// ─────────────────────────────────────────────────────────────
// Services Section
// Purpose: Show what you do, framed as outcomes not deliverables.
// Three core services only — anything more dilutes focus.
// Each card leads to a dedicated service page.
// ─────────────────────────────────────────────────────────────

import { Link } from "react-router-dom";

const SERVICES = [
    {
        number: "01",
        tag: "Web Design & Development",
        title: "Global-Ready Web Platforms",
        description:
            "Your website is your most powerful sales tool — or your biggest liability. We design and build custom web platforms that position you credibly to international audiences, convert serious visitors, and scale with your business.",
        deliverables: [
            "Custom web design & development",
            "E-commerce & marketplace builds",
            "API integrations & third-party systems",
            "Performance optimization & SEO foundation",
        ],
        to: "/services#web",
    },
    {
        number: "02",
        tag: "Mobile & Web Applications",
        title: "Applications Built to Scale",
        description:
            "When your business has outgrown basic tools, you need a system built specifically for how you work. We build web and mobile applications that handle complexity, perform reliably, and give your team and customers a seamless experience.",
        deliverables: [
            "Cross-platform mobile apps (iOS & Android)",
            "Progressive Web Apps (PWAs)",
            "Custom dashboards & internal tools",
            "App maintenance & ongoing support",
        ],
        to: "/services#apps",
    },
    {
        number: "03",
        tag: "AI & Automation",
        title: "Systems That Work While You Sleep",
        description:
            "Manual processes are a growth ceiling. We build AI-powered chatbots, workflow automations, and CRM integrations that remove bottlenecks, reduce costs, and free your team to focus on what actually drives revenue.",
        deliverables: [
            "AI-powered chatbots & assistants",
            "Business process automation",
            "CRM setup & workflow integration",
            "Lead generation & customer support systems",
        ],
        to: "/services#automation",
    },
];

export default function Services() {
    return (
        <section className="w-full bg-surface dark:bg-dark-2">
            <div className="max-w-7xl mx-auto px-6 py-24">

                {/* ── Section Header ── */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="block w-8 h-0.5 bg-accent-text dark:bg-accent rounded-full" />
                            <span className="font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-muted">
                                What We Do
                            </span>
                        </div>
                        <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-none text-text-primary dark:text-dark-text-primary">
                            Built for businesses
                            <br />
                            <span className="text-text-secondary dark:text-dark-text-secondary">
                                that mean business.
                            </span>
                        </h2>
                    </div>
                    <p className="font-body text-base leading-relaxed text-text-muted dark:text-dark-text-muted max-w-sm">
                        We don't offer a menu of generic services. Every engagement
                        starts with understanding what you're trying to achieve —
                        then we build exactly what gets you there.
                    </p>
                </div>

                {/* ── Service Cards ── */}
                <div className="flex flex-col gap-px bg-border dark:bg-dark-border rounded-2xl overflow-hidden mb-12">
                    {SERVICES.map(({ number, tag, title, description, deliverables, to }) => (
                        <div
                            key={number}
                            className="group grid md:grid-cols-[80px_1fr_1fr] gap-8 p-8 md:p-10 bg-surface-2 dark:bg-dark-base hover:bg-surface-3 dark:hover:bg-dark-3 transition-colors duration-200"
                        >
                            {/* Number */}
                            <span className="font-display font-bold text-sm text-text-faint dark:text-dark-text-faint mt-1 hidden md:block">
                                {number}
                            </span>

                            {/* Left — Title & Description */}
                            <div>
                                <span className="inline-block font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-muted bg-surface-3 dark:bg-dark-3 px-2.5 py-1 rounded-md mb-4">
                                    {tag}
                                </span>
                                <h3 className="font-display font-bold text-2xl tracking-tight text-text-primary dark:text-dark-text-primary mb-3">
                                    {title}
                                </h3>
                                <p className="font-body text-sm leading-relaxed text-text-secondary dark:text-dark-text-muted">
                                    {description}
                                </p>
                            </div>

                            {/* Right — Deliverables & CTA */}
                            <div className="flex flex-col justify-between gap-8">
                                <ul className="flex flex-col gap-2.5">
                                    {deliverables.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-start gap-2.5 font-body text-sm text-text-secondary dark:text-dark-text-muted"
                                        >
                                            <span className="text-accent-text dark:text-accent mt-0.5 shrink-0">
                                                ✦
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    to={to}
                                    className="inline-flex items-center gap-2 font-body text-sm font-semibold text-accent-text dark:text-accent group-hover:gap-3 transition-all duration-200 w-fit"
                                >
                                    Learn more →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Bottom CTA ── */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 rounded-2xl border border-border dark:border-dark-border bg-surface-2 dark:bg-dark-base">
                    <div>
                        <p className="font-display font-bold text-lg tracking-tight text-text-primary dark:text-dark-text-primary mb-1">
                            Not sure which service fits your project?
                        </p>
                        <p className="font-body text-sm text-text-muted dark:text-dark-text-muted">
                            Book a free 30-minute strategy call. We'll tell you exactly what you need — even if it's not us.
                        </p>
                    </div>
                    <Link
                        to="/contact"
                        className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-dark-base text-xs font-bold tracking-widest uppercase transition-all duration-200 hover:bg-accent-hover hover:scale-105"
                    >
                        Book a Free Call →
                    </Link>
                </div>

            </div>
        </section>
    );
}