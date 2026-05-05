import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import PageHeader from "../components/PageHeader";

// ── Calendly inline embed ──────────────────────────────────
// Replace YOUR_CALENDLY_URL with your actual Calendly link
// e.g. "https://calendly.com/bigyarddigital/strategy-call"
const CALENDLY_URL = "https://calendly.com/thebigyarddigital";

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
// ── Configuration ──────────────────────────────────────────
// Replace these with your EmailJS credentials
const EMAILJS_SERVICE_ID = "service_3nvwlwh";
const EMAILJS_TEMPLATE_ID = "template_tp38eh1";
const EMAILJS_PUBLIC_KEY = "-K6gs4o7Un1Cm1Sz0";

// Minimum time before form can be submitted (spam protection)
const MIN_SUBMIT_TIME = 3000; // 3 seconds

// ── Types ──────────────────────────────────────────────────
type FormState = {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
  honeypot: string; // Hidden spam trap field
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

// ── Budget Options ─────────────────────────────────────────
const BUDGET_OPTIONS = [
  { value: "", label: "Select a range" },
  { value: "350k-500k", label: "₦350,000 – ₦500,000" },
  { value: "500k-1m", label: "₦500,000 – ₦1,000,000" },
  { value: "1m-plus", label: "₦1,000,000+" },
  { value: "international", label: "International project (USD/GBP)" },
  { value: "unsure", label: "Not sure yet" },
];

// ── Styling Classes ────────────────────────────────────────
const INPUT_BASE =
  "w-full px-4 py-3 rounded-xl border font-body text-sm text-text-primary dark:text-dark-text-primary bg-surface dark:bg-dark-2 border-border dark:border-dark-border placeholder:text-text-faint dark:placeholder:text-dark-text-faint outline-none focus:border-accent-text dark:focus:border-accent transition-colors duration-200";

const INPUT_ERROR =
  "w-full px-4 py-3 rounded-xl border font-body text-sm text-text-primary dark:text-dark-text-primary bg-surface dark:bg-dark-2 border-red-500 dark:border-red-500 placeholder:text-text-faint dark:placeholder:text-dark-text-faint outline-none focus:border-red-600 dark:focus:border-red-600 transition-colors duration-200";

// ── Validation Helpers ─────────────────────────────────────
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateForm = (form: FormState): FormErrors => {
  const errors: FormErrors = {};

  if (!form.name.trim()) {
    errors.name = "Please enter your name";
  }

  if (!form.email.trim()) {
    errors.email = "Please enter your email address";
  } else if (!isValidEmail(form.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!form.message.trim()) {
    errors.message = "Please tell us about your project";
  }

  return errors;
};

function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
    honeypot: "", // Hidden spam trap
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Track when form was first loaded/interacted with
  const formLoadTime = useRef<number>(Date.now());
  const hasInteracted = useRef<boolean>(false);

  // Reset form load time on first interaction
  useEffect(() => {
    const handleInteraction = () => {
      if (!hasInteracted.current) {
        formLoadTime.current = Date.now();
        hasInteracted.current = true;
      }
    };

    window.addEventListener("focus", handleInteraction, { once: true });
    window.addEventListener("click", handleInteraction, { once: true });

    return () => {
      window.removeEventListener("focus", handleInteraction);
      window.removeEventListener("click", handleInteraction);
    };
  }, []);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Check if form is valid (for button state)
  const isFormValid = (): boolean => {
    return (
      form.name.trim() !== "" &&
      form.email.trim() !== "" &&
      isValidEmail(form.email) &&
      form.message.trim() !== ""
    );
  };

  // Spam protection checks
  const passesSpamChecks = (): boolean => {
    // Check honeypot field
    if (form.honeypot !== "") {
      console.warn("Spam detected: honeypot field filled");
      return false;
    }

    // Check time-based protection
    const timeTaken = Date.now() - formLoadTime.current;
    if (timeTaken < MIN_SUBMIT_TIME) {
      console.warn("Spam detected: form submitted too quickly");
      return false;
    }

    return true;
  };

  // Handle form submission
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Check spam protection
    if (!passesSpamChecks()) {
      // Fail silently to not alert spammers
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Prepare template params (exclude honeypot)
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        company: form.company || "Not specified",
        budget: form.budget || "Not specified",
        message: form.message,
      };

      // Send email via EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );

      setSubmitted(true);
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitError(
        "Something went wrong. Please try again or email us directly at info@bigyarddigital.com",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success state
  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <span className="text-4xl mb-4">✦</span>
        <h3 className="font-display font-bold text-2xl tracking-tight text-text-primary dark:text-dark-text-primary mb-3">
          Message received.
        </h3>
        <p className="font-body text-base text-text-secondary dark:text-dark-text-muted max-w-sm">
          We'll review your brief and get back to you within 24 hours. If your
          project is a fit, we'll suggest a call time.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Honeypot field - hidden from users and screen readers */}
      <input
        type="text"
        name="honeypot"
        value={form.honeypot}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          opacity: 0,
        }}
      />

      {/* Name + Email */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-muted"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            className={errors.name ? INPUT_ERROR : INPUT_BASE}
            required
          />
          {errors.name && (
            <p className="text-red-500 dark:text-red-400 text-xs mt-1">
              {errors.name}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-muted"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={handleChange}
            className={errors.email ? INPUT_ERROR : INPUT_BASE}
            required
          />
          {errors.email && (
            <p className="text-red-500 dark:text-red-400 text-xs mt-1">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Company + Budget */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="company"
            className="font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-muted"
          >
            Company / Project
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Company or project name"
            value={form.company}
            onChange={handleChange}
            className={INPUT_BASE}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="budget"
            className="font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-muted"
          >
            Budget Range
          </label>
          <select
            id="budget"
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
        <label
          htmlFor="message"
          className="font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-muted"
        >
          Tell Us About Your Project <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Describe what you're building, what problem you're solving, and what you need from us."
          value={form.message}
          onChange={handleChange}
          rows={5}
          className={`${errors.message ? INPUT_ERROR : INPUT_BASE} resize-none`}
          required
        />
        {errors.message && (
          <p className="text-red-500 dark:text-red-400 text-xs mt-1">
            {errors.message}
          </p>
        )}
      </div>

      {/* Error message */}
      {submitError && (
        <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
          <p className="text-red-600 dark:text-red-400 text-sm">
            {submitError}
          </p>
        </div>
      )}

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={!isFormValid() || isSubmitting}
        className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold tracking-wide transition-all duration-200 w-full sm:w-fit mt-2 ${
          !isFormValid() || isSubmitting
            ? "bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
            : "bg-accent text-dark-base hover:bg-accent-hover hover:scale-105"
        }`}
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Sending...
          </>
        ) : (
          <>Send Your Brief →</>
        )}
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
                    Pick a time that works for you. The call is free, 30
                    minutes, and there's no obligation. We'll talk about your
                    project and tell you honestly whether we're the right fit.
                  </p>
                  <CalendlyEmbed />
                </div>
              ) : (
                <div>
                  <p className="font-body text-base leading-relaxed text-text-secondary dark:text-dark-text-muted mb-8 max-w-lg">
                    Prefer to write first? Tell us about your project and we'll
                    come back to you with thoughts and if we're a fit. a
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
                    "No hard sell, just an honest conversation",
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
                  No pressure. See our work first and come back when you're
                  ready.
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
