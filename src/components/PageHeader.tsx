// ─────────────────────────────────────────────────────────────
// PageHeader — Reusable inner page header
// Usage:
//   <PageHeader
//     label="Our Story"
//     title="Built from inside the African tech ecosystem."
//     subtitle="Optional supporting line"
//   />
// ─────────────────────────────────────────────────────────────

interface PageHeaderProps {
    label: string;
    title: string;
    subtitle?: string;
}

export default function PageHeader({ label, title, subtitle }: PageHeaderProps) {
    return (
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

                {/* Label */}
                <div className="flex items-center gap-3 mb-5">
                    <span className="block w-8 h-0.5 bg-accent-text dark:bg-accent rounded-full" />
                    <span className="font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-muted">
                        {label}
                    </span>
                </div>

                {/* Title */}
                <h1 className="font-display font-bold tracking-tight leading-tight text-text-primary dark:text-dark-text-primary max-w-3xl text-[clamp(32px,5vw,60px)]">
                    {title}
                </h1>

                {/* Optional subtitle */}
                {subtitle && (
                    <p className="font-body text-lg leading-relaxed text-text-secondary dark:text-dark-text-secondary max-w-2xl mt-5">
                        {subtitle}
                    </p>
                )}

            </div>
        </section>
    );
}