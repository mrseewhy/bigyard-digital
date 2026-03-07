// ─────────────────────────────────────────────────────────────
// Contact Page
// Sections:
//   1. PageHeader
//   2. Primary — Calendly embed (book a call)
//   3. Secondary — Short qualifying form (prefer to write first)
//   4. Direct contact details
// ─────────────────────────────────────────────────────────────

import { useState } from "react";
import PageHeader from "../components/PageHeader";

// ── Calendly inline embed ──────────────────────────────────
// Replace YOUR_CALENDLY_URL with your actual Calendly link
// e.g. "https://calendly.com/bigyarddigital/strategy-call"
const CALENDLY_URL = "https://calendly.com/bigyarddigital/strategy-call";

function CalendlyEmbed() {
    return (
        <div className="w-full rounded-2xl overflow-hidden border border-border dark:border-dark-border bg-surface dark:bg-dark-2">
            <iframe
                src={`${CALENDLY_URL}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=transparent`}
                width="100%"
                height="700"
                frameBorder="0"
                title="Book a strategy call with Bigyard Digital"
                className="w-full"
            />
        </div>
    );
}

// ── Contact Form ───────────────────────────────────────────
type FormState = {
    name: string;
    email: string;
    company: string;
    budget: string;
    message: string;
};

const BUDGET_OPTIONS = [
    { value: "", label: "Select a range" },
    { value: "350k-500k", label: "₦350,000 – ₦500,000" },
    { value: "500k-1m", label: "₦500,000 – ₦1,000,000" },
    { value: "1m-plus", label: "₦1,000,000+" },
    { value: "international", label: "International project (USD/GBP)" },
    { value: "unsure", label: "Not sure yet" },
];

const INPUT_BASE =
    "w-full px-4 py-3 rounded-xl border font-body text-sm text-text-primary dark:text-dark-text-primary bg-surface dark:bg-dark-2 border-border dark:border-dark-border placeholder:text-text-faint dark:placeholder:text-dark-text-faint outline-none focus:border-accent-text dark:focus:border-accent transition-colors duration-200";

function ContactForm() {
    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        company: "",
        budget: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // Replace with your form submission logic
        // e.g. fetch to your API, Formspree, EmailJS, etc.
        console.log("Form submitted:", form);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <span className="text-4xl mb-4">✦</span>
                <h3 className="font-display font-bold text-2xl tracking-tight text-text-primary dark:text-dark-text-primary mb-3">
                    Message received.
                </h3>
                <p className="font-body text-base text-text-secondary dark:text-dark-text-muted max-w-sm">
                    We'll review your brief and get back to you within 24 hours.
                    If your project is a fit, we'll suggest a call time.
                </p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-5">
            {/* Name + Email */}
            <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                    <label className="font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-muted">
                        Full Name
                    </label>
                    <input
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        className={INPUT_BASE}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-muted">
                        Email Address
                    </label>
                    <input
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={handleChange}
                        className={INPUT_BASE}
                    />
                </div>
            </div>

            {/* Company + Budget */}
            <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                    <label className="font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-muted">
                        Company / Project
                    </label>
                    <input
                        name="company"
                        type="text"
                        placeholder="Company or project name"
                        value={form.company}
                        onChange={handleChange}
                        className={INPUT_BASE}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-muted">
                        Budget Range
                    </label>
                    <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className={INPUT_BASE}
                    >
                        {BUDGET_OPTIONS.map(({ value, label }) => (
                            <option key={value} value={value}>
                                {label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
                <label className="font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-muted">
                    Tell Us About Your Project
                </label>
                <textarea
                    name="message"
                    placeholder="Describe what you're building, what problem you're solving, and what you need from us."
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className={`${INPUT_BASE} resize-none`}
                />
            </div>

            {/* Submit */}
            <button
                onClick={handleSubmit}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-dark-base text-sm font-bold tracking-wide transition-all duration-200 hover:bg-accent-hover hover:scale-105 w-full sm:w-fit mt-2"
            >
                Send Your Brief →
            </button>

            <p className="font-body text-xs text-text-faint dark:text-dark-text-faint">
                We respond to every message within 24 hours on business days.
            </p>
        </div>
    );
}

// ── Main Page ──────────────────────────────────────────────
export default function Contact() {
    const [activeTab, setActiveTab] = useState<"call" | "form">("call");

    const TAB_ACTIVE =
        "px-6 py-2.5 rounded-full text-sm font-semibold font-body bg-accent text-dark-base transition-all duration-200";
    const TAB_INACTIVE =
        "px-6 py-2.5 rounded-full text-sm font-semibold font-body border border-border dark:border-dark-border text-text-muted dark:text-dark-text-muted hover:border-border-2 dark:hover:border-dark-border-2 transition-all duration-200";

    return (
        <main className="w-full">

            {/* ── Page Header ── */}
            <PageHeader
                label="Get In Touch"
                title="Let's talk about what you're building."
                subtitle="Book a free 30-minute strategy call or send us a brief. Either way, you'll hear back within 24 hours."
            />

            {/* ── Main Contact Section ── */}
            <section className="w-full bg-surface dark:bg-dark-2">
                <div className="max-w-7xl mx-auto px-6 py-24">

                    <div className="grid lg:grid-cols-[1fr_360px] gap-16 items-start">

                        {/* ── Left — Tab switcher + content ── */}
                        <div>
                            {/* Tab switcher */}
                            <div className="inline-flex gap-2 p-1.5 rounded-full border border-border dark:border-dark-border bg-surface-2 dark:bg-dark-base mb-10">
                                <button
                                    onClick={() => setActiveTab("call")}
                                    className={activeTab === "call" ? TAB_ACTIVE : TAB_INACTIVE}
                                >
                                    Book a Call
                                </button>
                                <button
                                    onClick={() => setActiveTab("form")}
                                    className={activeTab === "form" ? TAB_ACTIVE : TAB_INACTIVE}
                                >
                                    Send a Brief
                                </button>
                            </div>

                            {/* Tab content */}
                            {activeTab === "call" ? (
                                <div>
                                    <p className="font-body text-base leading-relaxed text-text-secondary dark:text-dark-text-muted mb-8 max-w-lg">
                                        Pick a time that works for you. The call is free, 30 minutes,
                                        and there's no obligation. We'll talk about your project and
                                        tell you honestly whether we're the right fit.
                                    </p>
                                    <CalendlyEmbed />
                                </div>
                            ) : (
                                <div>
                                    <p className="font-body text-base leading-relaxed text-text-secondary dark:text-dark-text-muted mb-8 max-w-lg">
                                        Prefer to write first? Tell us about your project and we'll
                                        come back to you with thoughts and — if we're a fit — a
                                        suggested call time.
                                    </p>
                                    <ContactForm />
                                </div>
                            )}
                        </div>

                        {/* ── Right — Contact details + trust signals ── */}
                        <div className="flex flex-col gap-6 lg:sticky lg:top-24">

                            {/* Direct contact */}
                            <div className="p-7 rounded-2xl border border-border dark:border-dark-border bg-surface-2 dark:bg-dark-base">
                                <p className="font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-muted mb-5">
                                    Direct Contact
                                </p>
                                <div className="flex flex-col gap-4">
                                    {[
                                        {
                                            label: "Email",
                                            value: "info@bigyarddigital.com",
                                            href: "mailto:info@bigyarddigital.com",
                                        },
                                        {
                                            label: "Phone",
                                            value: "+234 703 534 7776",
                                            href: "tel:+2347035347776",
                                        },
                                        {
                                            label: "Location",
                                            value: "Lagos, Nigeria",
                                            href: null,
                                        },
                                    ].map(({ label, value, href }) => (
                                        <div key={label}>
                                            <p className="font-body text-xs text-text-faint dark:text-dark-text-faint mb-0.5">
                                                {label}
                                            </p>
                                            {href ? (
                                                <a
                                                    href={href}
                                                    className="font-body text-sm font-medium text-text-primary dark:text-dark-text-primary hover:text-accent-text dark:hover:text-accent transition-colors duration-200"
                                                >
                                                    {value}
                                                </a>
                                            ) : (
                                                <p className="font-body text-sm font-medium text-text-primary dark:text-dark-text-primary">
                                                    {value}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* What to expect */}
                            <div className="p-7 rounded-2xl border border-border dark:border-dark-border bg-surface-2 dark:bg-dark-base">
                                <p className="font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-muted mb-5">
                                    What to Expect
                                </p>
                                <div className="flex flex-col gap-4">
                                    {[
                                        "We respond within 24 hours on business days",
                                        "No hard sell — just an honest conversation",
                                        "We'll tell you if we're not the right fit",
                                        "Proposals delivered within 48 hours of a call",
                                    ].map((item) => (
                                        <div key={item} className="flex items-start gap-3">
                                            <span className="text-accent-text dark:text-accent text-xs shrink-0 mt-0.5">
                                                ✦
                                            </span>
                                            <p className="font-body text-sm leading-relaxed text-text-secondary dark:text-dark-text-muted">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Not ready yet nudge */}
                            <div className="p-7 rounded-2xl border border-border dark:border-dark-border bg-surface-2 dark:bg-dark-base">
                                <p className="font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-muted mb-3">
                                    Just Browsing?
                                </p>
                                <p className="font-body text-sm leading-relaxed text-text-secondary dark:text-dark-text-muted mb-4">
                                    No pressure. See our work first and come back when you're ready.
                                </p>
                                <a
                                    href="/work"
                                    className="inline-flex items-center gap-2 font-body text-sm font-semibold text-accent-text dark:text-accent hover:gap-3 transition-all duration-200"
                                >
                                    View our portfolio →
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}