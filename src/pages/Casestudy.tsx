// ─────────────────────────────────────────────────────────────
// Case Study Page — Dynamic
// Reads slug from URL params, finds matching case study,
// renders full story. Adding new case studies = adding to
// caseStudiesData.ts only. No new pages needed.
// ─────────────────────────────────────────────────────────────

import { useParams, Link, Navigate } from "react-router-dom";
import { CASE_STUDIES } from "../data/caseStudiesData";

const SECTION_LABEL = "font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-muted mb-3 block";
const BODY_TEXT = "font-body text-base leading-relaxed text-text-secondary dark:text-dark-text-secondary";

export default function CaseStudy() {
    const { slug } = useParams<{ slug: string }>();
    const study = CASE_STUDIES.find((s) => s.slug === slug);

    // 404 — redirect to portfolio if slug not found
    if (!study) return <Navigate to="/work" replace />;

    // Adjacent case studies for prev/next navigation
    const currentIndex = CASE_STUDIES.findIndex((s) => s.slug === slug);
    const prev = CASE_STUDIES[currentIndex - 1] ?? null;
    const next = CASE_STUDIES[currentIndex + 1] ?? null;

    return (
        <main className="w-full">

            {/* ── Case Study Header ── */}
            <section
                className="w-full bg-surface-2 dark:bg-dark-base border-b border-border dark:border-dark-border"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, color-mix(in srgb, currentColor 5%, transparent) 1px, transparent 1px),
                        linear-gradient(to bottom, color-mix(in srgb, currentColor 5%, transparent) 1px, transparent 1px)
                    `,
                    backgroundSize: "72px 72px",
                }}
            >
                <div className="max-w-7xl mx-auto px-6 pt-16 pb-14">

                    {/* Back link */}
                    <Link
                        to="/work"
                        className="inline-flex items-center gap-2 font-body text-sm font-semibold text-text-muted dark:text-dark-text-muted hover:text-text-primary dark:hover:text-dark-text-primary transition-colors duration-200 mb-10 hover:-translate-x-1 transform"
                    >
                        ← Back to Work
                    </Link>

                    {/* Category + client */}
                    <div className="flex items-center gap-3 mb-5">
                        <span className="block w-8 h-0.5 bg-accent-text dark:bg-accent rounded-full" />
                        <span className="font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-muted">
                            {study.category} · {study.client}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="font-display font-bold tracking-tight leading-tight text-text-primary dark:text-dark-text-primary max-w-3xl mb-6 text-[clamp(28px,4.5vw,52px)]">
                        {study.title}
                    </h1>

                    {/* Summary */}
                    <p className="font-body text-lg leading-relaxed text-text-secondary dark:text-dark-text-secondary max-w-2xl mb-8">
                        {study.summary}
                    </p>

                    {/* Meta row */}
                    <div className="flex flex-wrap items-center gap-6">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {study.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="font-body text-xs font-medium px-2.5 py-1 rounded-md bg-surface dark:bg-dark-2 border border-border dark:border-dark-border text-text-muted dark:text-dark-text-muted"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Live link */}
                        {study.liveUrl && (
                            <a
                                href={study.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 font-body text-sm font-semibold text-accent-text dark:text-accent hover:gap-3 transition-all duration-200"
                            >
                                View live site ↗
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* ── Hero Image ── */}
            {study.thumbnail && (
                <div className="w-full bg-surface-3 dark:bg-dark-3 border-b border-border dark:border-dark-border">
                    <div className="max-w-7xl mx-auto px-6 py-12">
                        <div className="w-full aspect-video rounded-2xl overflow-hidden bg-surface-3 dark:bg-dark-3">
                            <img
                                src={study.thumbnail}
                                alt={`${study.client} — ${study.title}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* ── Case Study Body ── */}
            <section className="w-full bg-surface dark:bg-dark-2">
                <div className="max-w-7xl mx-auto px-6 py-24">
                    <div className="grid lg:grid-cols-[1fr_320px] gap-16 items-start">

                        {/* ── Main content ── */}
                        <div className="flex flex-col gap-16">

                            {/* Situation */}
                            <div>
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="font-display font-bold text-sm text-text-faint dark:text-dark-text-faint">
                                        01
                                    </span>
                                    <span className="block w-8 h-0.5 bg-accent-text dark:bg-accent rounded-full" />
                                    <span className={SECTION_LABEL}>The Situation</span>
                                </div>
                                <p className={BODY_TEXT}>{study.situation}</p>
                            </div>

                            {/* Challenge */}
                            <div>
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="font-display font-bold text-sm text-text-faint dark:text-dark-text-faint">
                                        02
                                    </span>
                                    <span className="block w-8 h-0.5 bg-accent-text dark:bg-accent rounded-full" />
                                    <span className={SECTION_LABEL}>The Challenge</span>
                                </div>
                                <p className={BODY_TEXT}>{study.challenge}</p>
                            </div>

                            {/* Approach */}
                            <div>
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="font-display font-bold text-sm text-text-faint dark:text-dark-text-faint">
                                        03
                                    </span>
                                    <span className="block w-8 h-0.5 bg-accent-text dark:bg-accent rounded-full" />
                                    <span className={SECTION_LABEL}>Our Approach</span>
                                </div>
                                <p className={BODY_TEXT}>{study.approach}</p>
                            </div>

                            {/* Mid screenshots */}
                            {study.images.length > 0 && (
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {study.images.map((src, i) => (
                                        <div
                                            key={i}
                                            className="aspect-4/3 rounded-xl overflow-hidden bg-surface-3 dark:bg-dark-3 border border-border dark:border-dark-border"
                                        >
                                            <img
                                                src={src}
                                                alt={`${study.client} screenshot ${i + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Execution */}
                            <div>
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="font-display font-bold text-sm text-text-faint dark:text-dark-text-faint">
                                        04
                                    </span>
                                    <span className="block w-8 h-0.5 bg-accent-text dark:bg-accent rounded-full" />
                                    <span className={SECTION_LABEL}>The Execution</span>
                                </div>
                                <p className={BODY_TEXT}>{study.execution}</p>
                            </div>

                            {/* Outcome */}
                            <div className="p-8 rounded-2xl border border-accent-text/20 dark:border-accent/20 bg-surface-2 dark:bg-dark-base">
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="font-display font-bold text-sm text-text-faint dark:text-dark-text-faint">
                                        05
                                    </span>
                                    <span className="block w-8 h-0.5 bg-accent-text dark:bg-accent rounded-full" />
                                    <span className={SECTION_LABEL}>The Outcome</span>
                                </div>
                                <p className={BODY_TEXT}>{study.outcome}</p>
                            </div>

                            {/* Testimonial */}
                            {study.testimonial && (
                                <div className="p-8 rounded-2xl border border-border dark:border-dark-border bg-surface-2 dark:bg-dark-base">
                                    <span className="block font-display font-extrabold text-4xl leading-none text-accent-text dark:text-accent mb-5">
                                        "
                                    </span>
                                    <p className="font-body text-lg leading-relaxed text-text-secondary dark:text-dark-text-secondary mb-6 italic">
                                        {study.testimonial.quote}
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center shrink-0">
                                            <span className="font-display font-bold text-sm text-dark-base">
                                                {study.testimonial.name[0]}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="font-body text-sm font-semibold text-text-primary dark:text-dark-text-primary">
                                                {study.testimonial.name}
                                            </p>
                                            <p className="font-body text-xs text-text-muted dark:text-dark-text-muted">
                                                {study.testimonial.title}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* ── Sticky Sidebar ── */}
                        <div className="flex flex-col gap-5 lg:sticky lg:top-24">

                            {/* Project details */}
                            <div className="p-6 rounded-2xl border border-border dark:border-dark-border bg-surface-2 dark:bg-dark-base">
                                <p className="font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-muted mb-5">
                                    Project Details
                                </p>
                                <div className="flex flex-col gap-4">
                                    {[
                                        { label: "Client", value: study.client },
                                        { label: "Category", value: study.category },
                                        {
                                            label: "Services",
                                            value: study.tags.join(", "),
                                        },
                                    ].map(({ label, value }) => (
                                        <div key={label} className="flex flex-col gap-0.5">
                                            <p className="font-body text-xs text-text-faint dark:text-dark-text-faint">
                                                {label}
                                            </p>
                                            <p className="font-body text-sm font-medium text-text-primary dark:text-dark-text-primary">
                                                {value}
                                            </p>
                                        </div>
                                    ))}
                                    {study.liveUrl && (
                                        <div className="pt-2">
                                            <a
                                                href={study.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 font-body text-sm font-semibold text-accent-text dark:text-accent hover:gap-3 transition-all duration-200"
                                            >
                                                View live site ↗
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="p-6 rounded-2xl border border-border dark:border-dark-border bg-surface-2 dark:bg-dark-base">
                                <p className="font-display font-bold text-base text-text-primary dark:text-dark-text-primary mb-2">
                                    Have a similar project?
                                </p>
                                <p className="font-body text-sm leading-relaxed text-text-secondary dark:text-dark-text-muted mb-5">
                                    Let's talk about what you're building and how we can help.
                                </p>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full bg-accent text-dark-base text-xs font-bold tracking-widest uppercase transition-all duration-200 hover:bg-accent-hover hover:scale-105"
                                >
                                    Book a Free Call →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Prev / Next Navigation ── */}
            {(prev || next) && (
                <section className="w-full bg-surface-2 dark:bg-dark-base border-t border-border dark:border-dark-border">
                    <div className="max-w-7xl mx-auto px-6 py-12">
                        <div className="grid sm:grid-cols-2 gap-4">

                            {/* Prev */}
                            {prev ? (
                                <Link
                                    to={`/work/${prev.slug}`}
                                    className="group flex flex-col gap-1 p-6 rounded-2xl border border-border dark:border-dark-border hover:border-border-2 dark:hover:border-dark-border-2 bg-surface dark:bg-dark-2 transition-all duration-200"
                                >
                                    <span className="font-body text-xs text-text-faint dark:text-dark-text-faint group-hover:-translate-x-1 transform transition-transform duration-200">
                                        ← Previous
                                    </span>
                                    <span className="font-display font-bold text-base text-text-primary dark:text-dark-text-primary">
                                        {prev.client}
                                    </span>
                                    <span className="font-body text-sm text-text-muted dark:text-dark-text-muted line-clamp-1">
                                        {prev.title}
                                    </span>
                                </Link>
                            ) : (
                                <div />
                            )}

                            {/* Next */}
                            {next ? (
                                <Link
                                    to={`/work/${next.slug}`}
                                    className="group flex flex-col gap-1 p-6 rounded-2xl border border-border dark:border-dark-border hover:border-border-2 dark:hover:border-dark-border-2 bg-surface dark:bg-dark-2 transition-all duration-200 text-right"
                                >
                                    <span className="font-body text-xs text-text-faint dark:text-dark-text-faint group-hover:translate-x-1 transform transition-transform duration-200">
                                        Next →
                                    </span>
                                    <span className="font-display font-bold text-base text-text-primary dark:text-dark-text-primary">
                                        {next.client}
                                    </span>
                                    <span className="font-body text-sm text-text-muted dark:text-dark-text-muted line-clamp-1">
                                        {next.title}
                                    </span>
                                </Link>
                            ) : (
                                <div />
                            )}
                        </div>
                    </div>
                </section>
            )}

        </main>
    );
}