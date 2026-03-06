import { NavLink } from "react-router-dom";

const NAV_COLUMNS = [
    {
        heading: "Work",
        links: [
            { label: "Portfolio", to: "/work" },
            { label: "Case Studies", to: "/case-studies" },
            { label: "Services", to: "/services" },
        ],
    },
    {
        heading: "Company",
        links: [
            { label: "About Us", to: "/about" },
            { label: "Book a Call", to: "/contact" },
        ],
    },
];

const SOCIALS = [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Twitter / X", href: "https://x.com" },
    { label: "GitHub", href: "https://github.com" },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full bg-surface dark:bg-dark-base border-t border-border dark:border-dark-border">

            {/* ── Main Content ── */}
            <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-12">

                    {/* Brand Column */}
                    <div className="max-w-xs">
                        <NavLink to="/" className="inline-flex items-center gap-1 mb-5">
                            <span className="font-display font-extrabold text-lg tracking-widest uppercase text-text-primary dark:text-dark-text-primary">
                                Bigyard
                            </span>
                            <span className="font-display font-extrabold text-lg tracking-widest uppercase text-accent-text dark:text-accent">
                                {" "}Digital
                            </span>
                        </NavLink>

                        <p className="font-body text-sm leading-relaxed text-text-secondary dark:text-dark-text-secondary mb-6">
                            Premium web platforms for African businesses going global.
                            We build the digital infrastructure that makes you look
                            world-class — wherever your clients are.
                        </p>

                        <div className="flex items-center gap-4">
                            {SOCIALS.map(({ label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-body text-xs font-semibold text-text-muted dark:text-dark-text-faint hover:text-accent-text dark:hover:text-accent transition-colors duration-200"
                                >
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Nav Columns */}
                    <div className="flex gap-16">
                        {NAV_COLUMNS.map(({ heading, links }) => (
                            <div key={heading}>
                                <p className="font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-faint mb-4">
                                    {heading}
                                </p>
                                <ul className="flex flex-col gap-3">
                                    {links.map(({ label, to }) => (
                                        <li key={to}>
                                            <NavLink
                                                to={to}
                                                className="font-body text-sm text-text-secondary dark:text-dark-text-muted hover:text-text-primary dark:hover:text-dark-text-primary transition-colors duration-200"
                                            >
                                                {label}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* CTA Column */}
                    <div className="max-w-xs">
                        <p className="font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-faint mb-4">
                            Start a project
                        </p>
                        <p className="font-body text-sm leading-relaxed text-text-secondary dark:text-dark-text-muted mb-6">
                            We take on a select number of projects each quarter. If you're
                            building something that matters, let's talk.
                        </p>
                        <NavLink
                            to="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-dark-base text-xs font-bold tracking-widest uppercase transition-all duration-200 hover:bg-accent-hover hover:scale-105"
                        >
                            Book a Call →
                        </NavLink>
                    </div>
                </div>
            </div>

            {/* ── Bottom Bar ── */}
            <div className="w-full border-t border-border dark:border-dark-border">
                <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="font-body text-xs text-text-muted dark:text-dark-text-faint">
                        © {year} Bigyard Digital. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a
                            href="mailto:info@bigyarddigital.com"
                            className="font-body text-xs text-text-muted dark:text-dark-text-faint hover:text-accent-text dark:hover:text-accent transition-colors duration-200"
                        >
                            info@bigyarddigital.com
                        </a>
                        <a
                            href="tel:+2347035347776"
                            className="font-body text-xs text-text-muted dark:text-dark-text-faint hover:text-accent-text dark:hover:text-accent transition-colors duration-200"
                        >
                            +234 703 534 7776
                        </a>
                    </div>
                </div>
            </div>

        </footer>
    );
}