import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const NAV_LINKS = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Portfolio", to: "/work" },
];

export default function Navbar() {
    const { dark, toggleTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border dark:border-dark-border bg-surface/80 dark:bg-dark-base/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

                {/* Logo */}
                <NavLink
                    to="/"
                    className="flex items-center gap-1 shrink-0"
                    onClick={() => setMenuOpen(false)}
                >
                    <span className="font-display font-extrabold text-base tracking-widest uppercase text-text-primary dark:text-dark-text-primary">
                        Bigyard
                    </span>
                    <span className="font-display font-extrabold text-base tracking-widest uppercase text-accent-text dark:text-accent">
                        Digital
                    </span>
                </NavLink>

                {/* Desktop Nav — lg and above */}
                <nav className="hidden lg:flex items-center gap-7">
                    {NAV_LINKS.map(({ label, to }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end={to === "/"}
                            className={({ isActive }) =>
                                `text-sm font-medium transition-colors duration-200 ${isActive
                                    ? "text-text-primary dark:text-dark-text-primary"
                                    : "text-text-muted dark:text-dark-text-muted hover:text-text-primary dark:hover:text-dark-text-primary"
                                }`
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>

                {/* Right Side */}
                <div className="flex items-center gap-3">

                    {/* Dark mode toggle */}
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle dark mode"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold tracking-widest uppercase transition-all duration-200 border-border-2 dark:border-dark-border-2 text-text-muted dark:text-dark-text-muted hover:border-accent-text dark:hover:border-accent hover:text-accent-text dark:hover:text-accent"
                    >
                        <span>{dark ? "☀" : "◐"}</span>
                        <span className="hidden sm:inline">{dark ? "Light" : "Dark"}</span>
                    </button>

                    {/* CTA — desktop only */}
                    <NavLink
                        to="/contact"
                        className="hidden lg:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent text-dark-base text-xs font-bold tracking-widest uppercase transition-all duration-200 hover:bg-accent-hover hover:scale-105"
                    >
                        Book a Call
                    </NavLink>

                    {/* Hamburger — below lg only */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                        className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
                    >
                        <span className={`block w-5 h-0.5 bg-text-primary dark:bg-dark-text-primary transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`block w-5 h-0.5 bg-text-primary dark:bg-dark-text-primary transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
                        <span className={`block w-5 h-0.5 bg-text-primary dark:bg-dark-text-primary transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-128 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="max-w-7xl mx-auto px-6 pb-6 pt-2 flex flex-col gap-1 border-t border-border dark:border-dark-border bg-surface dark:bg-dark-base">
                    {NAV_LINKS.map(({ label, to }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end={to === "/"}
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) =>
                                `py-3.5 text-sm font-medium border-b border-border dark:border-dark-border transition-colors duration-200 ${isActive
                                    ? "text-text-primary dark:text-dark-text-primary"
                                    : "text-text-muted dark:text-dark-text-muted"
                                }`
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                    <NavLink
                        to="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="mt-4 inline-flex items-center justify-center px-5 py-3.5 rounded-full bg-accent text-dark-base text-xs font-bold tracking-widest uppercase"
                    >
                        Book a Call →
                    </NavLink>
                </div>
            </div>
        </header>
    );
}