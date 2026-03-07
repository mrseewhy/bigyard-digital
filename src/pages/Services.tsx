// ─────────────────────────────────────────────────────────────
// Services Page
// Sections:
//   1. PageHeader
//   2. Services Detail (one full section per service)
//   3. How We Engage (pricing/process clarity)
//   4. CTA Strip
// ─────────────────────────────────────────────────────────────

import { Link } from "react-router-dom";
import PageHeader from "../components/Pageheader";

const SERVICES = [
    {
        id: "web",
        number: "01",
        tag: "Web Design & Development",
        title: "Global-Ready Web Platforms",
        summary:
            "Your website is your most powerful sales tool — or your biggest liability. We design and build custom web platforms that position you credibly to international audiences, convert serious visitors, and scale with your business.",
        details: [
            {
                heading: "Who this is for",
                body: "Founders and organisations who need a web presence that reflects the true quality of their work — not just a brochure site, but a platform that actively works to win clients and build credibility.",
            },
            {
                heading: "What we deliver",
                body: "Custom-designed, fully responsive websites built with modern frameworks. Fast, accessible, SEO-ready, and handed over with full documentation and training.",
            },
        ],
        deliverables: [
            "Custom web design & development",
            "E-commerce & marketplace builds",
            "CMS integration & content setup",
            "API & third-party integrations",
            "Performance optimisation",
            "SEO foundation & analytics setup",
        ],
    },
    {
        id: "apps",
        number: "02",
        tag: "Mobile & Web Applications",
        title: "Applications Built to Scale",
        summary:
            "When your business has outgrown basic tools, you need a system built specifically for how you work. We build web and mobile applications that handle complexity, perform reliably, and give your team and customers a seamless experience.",
        details: [
            {
                heading: "Who this is for",
                body: "Businesses that need custom software — internal tools, customer-facing apps, or platforms that don't fit neatly into off-the-shelf solutions.",
            },
            {
                heading: "What we deliver",
                body: "Scalable, well-architected applications built for the long term. We don't cut corners on code quality — what we build should still be working, and easy to extend, years from now.",
            },
        ],
        deliverables: [
            "Cross-platform mobile apps (iOS & Android)",
            "Progressive Web Apps (PWAs)",
            "Custom dashboards & admin panels",
            "Internal tools & workflow systems",
            "App maintenance & ongoing support",
            "Technical audits & rewrites",
        ],
    },
    {
        id: "automation",
        number: "03",
        tag: "AI & Automation",
        title: "Systems That Work While You Sleep",
        summary:
            "Manual processes are a growth ceiling. We build AI-powered chatbots, workflow automations, and CRM integrations that remove bottlenecks, reduce costs, and free your team to focus on what actually drives revenue.",
        details: [
            {
                heading: "Who this is for",
                body: "Teams spending hours on repetitive tasks, businesses losing leads because no one is available at 2am, and organisations that know they should be using AI but don't know where to start.",
            },
            {
                heading: "What we deliver",
                body: "Practical automation — not demos, not prototypes. Working systems integrated into your existing tools, trained on your data, and monitored for performance.",
            },
        ],
        deliverables: [
            "AI-powered chatbots & assistants",
            "Lead generation & qualification systems",
            "CRM setup & workflow automation",
            "Customer support automation",
            "Business process optimisation",
            "Data analysis & reporting pipelines",
        ],
    },
];

const ENGAGE_STEPS = [
    {
        number: "01",
        title: "Book a free strategy call",
        description:
            "30 minutes. We learn about your project, your goals, and what you need. You learn whether we're the right fit. No obligation, no pitch.",
    },
    {
        number: "02",
        title: "Receive a scoped proposal",
        description:
            "If we're a fit, we'll send a detailed proposal within 48 hours — scope, timeline, deliverables, and investment. No vague estimates.",
    },
    {
        number: "03",
        title: "We get to work",
        description:
            "Once agreed, we kick off with a discovery session and begin building. You have visibility throughout — not just at the end.",
    },
    {
        number: "04",
        title: "Launch & beyond",
        description:
            "We handle the launch and provide 30 days post-launch support. After that, ongoing retainer or maintenance arrangements are available.",
    },
];

export default function ServicesPage() {
    return (
        <main className="w-full">

            {/* ── Page Header ── */}
            <PageHeader
                label="What We Do"
                title="Three services. All premium. No compromises."
                subtitle="We don't offer a menu of generic services. Every engagement starts with understanding what you're trying to achieve — then we build exactly what gets you there."
            />

            {/* ── Service Detail Sections ── */}
            {SERVICES.map(({ id, number, tag, title, summary, details, deliverables }, index) => (
                <section
                    key={id}
                    id={id}
                    className={`w-full ${index % 2 === 0
                        ? "bg-surface dark:bg-dark-2"
                        : "bg-surface-2 dark:bg-dark-base"
                        }`}
                >
                    <div className="max-w-7xl mx-auto px-6 py-24">

                        {/* Service Header */}
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-16">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="font-display font-bold text-sm text-text-faint dark:text-dark-text-faint">
                                        {number}
                                    </span>
                                    <span className="block w-8 h-0.5 bg-accent-text dark:bg-accent rounded-full" />
                                    <span className="font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-muted">
                                        {tag}
                                    </span>
                                </div>
                                <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-none text-text-primary dark:text-dark-text-primary">
                                    {title}
                                </h2>
                            </div>
                            <p className="font-body text-base leading-relaxed text-text-secondary dark:text-dark-text-muted max-w-md">
                                {summary}
                            </p>
                        </div>

                        {/* Service Body */}
                        <div className="grid lg:grid-cols-2 gap-6">

                            {/* Left — Details */}
                            <div className="flex flex-col gap-px bg-border dark:bg-dark-border rounded-2xl overflow-hidden">
                                {details.map(({ heading, body }) => (
                                    <div
                                        key={heading}
                                        className={`p-8 ${index % 2 === 0
                                            ? "bg-surface-2 dark:bg-dark-base hover:bg-surface-3 dark:hover:bg-dark-3"
                                            : "bg-surface dark:bg-dark-2 hover:bg-surface-2 dark:hover:bg-dark-3"
                                            } transition-colors duration-200`}
                                    >
                                        <h3 className="font-display font-bold text-base tracking-tight text-text-primary dark:text-dark-text-primary mb-3">
                                            {heading}
                                        </h3>
                                        <p className="font-body text-sm leading-relaxed text-text-secondary dark:text-dark-text-muted">
                                            {body}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Right — Deliverables */}
                            <div
                                className={`p-8 rounded-2xl border border-border dark:border-dark-border ${index % 2 === 0
                                    ? "bg-surface-2 dark:bg-dark-base"
                                    : "bg-surface dark:bg-dark-2"
                                    }`}
                            >
                                <p className="font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-muted mb-6">
                                    What's included
                                </p>
                                <ul className="flex flex-col gap-4">
                                    {deliverables.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-start gap-3 font-body text-sm leading-relaxed text-text-secondary dark:text-dark-text-secondary"
                                        >
                                            <span className="text-accent-text dark:text-accent shrink-0 mt-0.5">
                                                ✦
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-10 pt-6 border-t border-border dark:border-dark-border">
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2 font-body text-sm font-semibold text-accent-text dark:text-accent hover:gap-3 transition-all duration-200"
                                    >
                                        Discuss this project →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* ── How We Engage ── */}
            <section className="w-full bg-surface dark:bg-dark-2">
                <div className="max-w-7xl mx-auto px-6 py-24">

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="block w-8 h-0.5 bg-accent-text dark:bg-accent rounded-full" />
                                <span className="font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-muted">
                                    Getting Started
                                </span>
                            </div>
                            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-none text-text-primary dark:text-dark-text-primary">
                                How we engage.
                            </h2>
                        </div>
                        <p className="font-body text-base leading-relaxed text-text-muted dark:text-dark-text-muted max-w-sm">
                            No long forms. No vague back-and-forth. A clear, simple process
                            from first conversation to finished product.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-px bg-border dark:bg-dark-border rounded-2xl overflow-hidden">
                        {ENGAGE_STEPS.map(({ number, title, description }) => (
                            <div
                                key={number}
                                className="flex gap-6 p-8 bg-surface-2 dark:bg-dark-base hover:bg-surface-3 dark:hover:bg-dark-3 transition-colors duration-200"
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

            {/* ── CTA Strip ── */}
            <section className="w-full bg-surface-3 dark:bg-dark-3">
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                        <div>
                            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight leading-tight text-text-primary dark:text-dark-text-primary mb-3">
                                Not sure where to start?
                                <br />
                                <span className="text-accent-text dark:text-accent">
                                    That's what the call is for.
                                </span>
                            </h2>
                            <p className="font-body text-base text-text-secondary dark:text-dark-text-muted max-w-md">
                                Book a free 30-minute strategy call. We'll listen, ask the right
                                questions, and tell you exactly what your project needs — even
                                if it turns out we're not the right fit.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4 shrink-0">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-dark-base text-sm font-bold tracking-wide transition-all duration-200 hover:bg-accent-hover hover:scale-105"
                            >
                                Book a Free Call →
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