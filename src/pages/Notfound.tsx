import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <main
            className="w-full min-h-[calc(100vh-64px)] bg-surface-2 dark:bg-dark-base flex items-center"
            style={{
                backgroundImage: `
                    linear-gradient(to right, color-mix(in srgb, currentColor 5%, transparent) 1px, transparent 1px),
                    linear-gradient(to bottom, color-mix(in srgb, currentColor 5%, transparent) 1px, transparent 1px)
                `,
                backgroundSize: "72px 72px",
            }}
        >
            <div className="max-w-7xl mx-auto px-6 py-24 w-full">
                <div className="max-w-xl">

                    {/* 404 number */}
                    <p className="font-display font-extrabold text-[clamp(80px,15vw,160px)] leading-none tracking-tight text-accent-text dark:text-accent mb-2">
                        404
                    </p>

                    {/* Label */}
                    <div className="flex items-center gap-3 mb-6">
                        <span className="block w-8 h-0.5 bg-accent-text dark:bg-accent rounded-full" />
                        <span className="font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-muted">
                            Page Not Found
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="font-display font-bold text-3xl md:text-4xl tracking-tight leading-tight text-text-primary dark:text-dark-text-primary mb-5">
                        This page doesn't exist.
                        <br />
                        <span className="text-text-secondary dark:text-dark-text-secondary">
                            But your next project could.
                        </span>
                    </h1>

                    {/* Body */}
                    <p className="font-body text-base leading-relaxed text-text-secondary dark:text-dark-text-muted mb-10 max-w-md">
                        Whatever you were looking for isn't here. Head back home,
                        browse our work, or book a call if you're ready to build
                        something serious.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-dark-base text-sm font-bold tracking-wide transition-all duration-200 hover:bg-accent-hover hover:scale-105"
                        >
                            Back to Home →
                        </Link>
                        <Link
                            to="/work"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border-2 dark:border-dark-border-2 text-text-secondary dark:text-dark-text-secondary text-sm font-medium transition-all duration-200 hover:border-text-muted dark:hover:border-dark-text-muted hover:text-text-primary dark:hover:text-dark-text-primary"
                        >
                            View Our Work
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border-2 dark:border-dark-border-2 text-text-secondary dark:text-dark-text-secondary text-sm font-medium transition-all duration-200 hover:border-text-muted dark:hover:border-dark-text-muted hover:text-text-primary dark:hover:text-dark-text-primary"
                        >
                            Book a Call
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}