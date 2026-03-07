// ─────────────────────────────────────────────────────────────
// Portfolio Page
// Purpose: Scannable, filtered grid of work.
// Each card is a teaser — leads to full case study.
// ─────────────────────────────────────────────────────────────

import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { CASE_STUDIES, CATEGORIES } from "../data/caseStudiesData";
import type { CaseStudy } from "../data/caseStudiesData";

// import type { CaseStudy } from "../data/caseStudiesData";

function PortfolioCard({ study }: { study: CaseStudy }) {
    return (
        <Link
            to={`/work/${study.slug}`}
            className="group flex flex-col rounded-2xl overflow-hidden border border-border dark:border-dark-border bg-surface dark:bg-dark-2 hover:border-border-2 dark:hover:border-dark-border-2 transition-all duration-200"
        >
            {/* Thumbnail */}
            <div className="w-full aspect-16/10 bg-surface-3 dark:bg-dark-3 overflow-hidden relative">
                {study.thumbnail ? (
                    <img
                        src={study.thumbnail}
                        alt={study.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    // Placeholder while images are being added
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="font-body text-xs text-text-faint dark:text-dark-text-faint tracking-widest uppercase">
                            {study.client}
                        </span>
                    </div>
                )}
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                    <span className="inline-block font-body text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded-md bg-surface/90 dark:bg-dark-base/90 text-text-muted dark:text-dark-text-muted backdrop-blur-sm">
                        {study.category}
                    </span>
                </div>
            </div>

            {/* Card body */}
            <div className="flex flex-col flex-1 p-6">
                <p className="font-body text-xs text-text-faint dark:text-dark-text-faint mb-2">
                    {study.client}
                </p>
                <h3 className="font-display font-bold text-lg tracking-tight leading-snug text-text-primary dark:text-dark-text-primary mb-3 flex-1">
                    {study.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-text-secondary dark:text-dark-text-muted mb-5 line-clamp-2">
                    {study.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {study.tags.map((tag) => (
                        <span
                            key={tag}
                            className="font-body text-xs font-medium px-2.5 py-1 rounded-md bg-surface-3 dark:bg-dark-3 text-text-muted dark:text-dark-text-muted"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 font-body text-sm font-semibold text-accent-text dark:text-accent group-hover:gap-3 transition-all duration-200 pt-4 border-t border-border dark:border-dark-border">
                    View case study →
                </div>
            </div>
        </Link>
    );
}

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState<string>("All");

    const filtered =
        activeCategory === "All"
            ? CASE_STUDIES
            : CASE_STUDIES.filter((s) => s.category === activeCategory);

    const PILL_ACTIVE =
        "px-4 py-2 rounded-full text-xs font-semibold font-body bg-accent text-dark-base transition-all duration-200";
    const PILL_INACTIVE =
        "px-4 py-2 rounded-full text-xs font-semibold font-body border border-border dark:border-dark-border text-text-muted dark:text-dark-text-muted hover:border-border-2 dark:hover:border-dark-border-2 transition-all duration-200";

    return (
        <main className="w-full">

            {/* ── Page Header ── */}
            <PageHeader
                label="Our Work"
                title="Projects we're proud to put our name on."
                subtitle="Every project here represents a real problem, a considered solution, and a client who trusted us to get it right."
            />

            {/* ── Portfolio Grid ── */}
            <section className="w-full bg-surface-2 dark:bg-dark-base">
                <div className="max-w-7xl mx-auto px-6 py-24">

                    {/* Category filter */}
                    <div className="flex flex-wrap gap-2 mb-12">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={activeCategory === cat ? PILL_ACTIVE : PILL_INACTIVE}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    {filtered.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filtered.map((study) => (
                                <PortfolioCard key={study.slug} study={study} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-24 text-center">
                            <p className="font-display font-bold text-xl text-text-primary dark:text-dark-text-primary mb-2">
                                More work coming soon.
                            </p>
                            <p className="font-body text-sm text-text-muted dark:text-dark-text-muted">
                                We're documenting more projects. Check back shortly.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* ── CTA Strip ── */}
            <section className="w-full bg-surface-3 dark:bg-dark-3">
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                        <div>
                            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight leading-tight text-text-primary dark:text-dark-text-primary mb-3">
                                Seen something you like?
                                <br />
                                <span className="text-accent-text dark:text-accent">
                                    Let's build yours.
                                </span>
                            </h2>
                            <p className="font-body text-base text-text-secondary dark:text-dark-text-muted max-w-md">
                                Every project starts with a free 30-minute strategy call.
                                No obligation — just an honest conversation.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4 shrink-0">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-dark-base text-sm font-bold tracking-wide transition-all duration-200 hover:bg-accent-hover hover:scale-105"
                            >
                                Book a Free Call →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}