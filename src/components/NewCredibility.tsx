import { Link } from "react-router-dom";
// import ProjectImage, {
//   ProjectImagePlaceholder,
// } from "../components/ProjectImage";

const FEATURED = [
  {
    slug: "equalyz-ai",
    category: "AI PLATFORM",
    title: "Voice-first AI for African languages",
    outcome:
      "Designed and built the web platform for an AI product focused on speech models and voice agents for African languages.",
    metric: "EqualyzAI",
    metricLabel: "www.equalyz.ai",
    image: "/img/portfolio/eqai.jpg",
  },
  {
    slug: "data-science-nigeria",
    category: "Tech Community",
    title: "Scaled to 100,000+ users",
    outcome:
      "Redesigned the web platform for Nigeria’s leading data science community, improving usability, performance, and platform stability.",
    metric: "DSN",
    metricLabel: "www.datasciencenigeria.org",
    image: "/img/portfolio/dsn.jpg",
  },
  {
    slug: "skills-sprint",
    category: "PUBLIC SECTOR",
    title: "Platform for national rollout",
    outcome:
      "Designed and developed the web platform for a Google-backed initiative delivering digital skills and economic opportunities nationwide.",
    metric: "Skills Sprint",
    metricLabel: "www.skillsprint.ng",
    image: "/img/portfolio/skill.jpg",
  },
];

const STATS = [
  { value: "60+", label: "Clients served" },
  { value: "100+", label: "Projects delivered" },
  { value: "7+", label: "Years building" },
  { value: "15+", label: "Countries reached" },
];

export default function Credibility() {
  return (
    <section className="w-full bg-surface dark:bg-dark-2">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-8 h-0.5 bg-accent-text dark:bg-accent rounded-full" />
              <span className="font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-muted">
                Trusted Work
              </span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-none text-text-primary dark:text-dark-text-primary max-w-lg">
              Serious clients.{" "}
              <span className="text-text-secondary dark:text-dark-text-secondary">
                Serious outcomes.
              </span>
            </h2>
          </div>
          <p className="font-body text-base leading-relaxed text-text-muted dark:text-dark-text-muted max-w-sm">
            We don't measure success in pages shipped. We measure it in what
            happens after launch.
          </p>
        </div>

        {/* ── Featured Client Cards ── */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {FEATURED.map(
            ({
              slug,
              category,
              title,
              outcome,
              metric,
              metricLabel,
              image,
            }) => (
              <div
                key={slug}
                className="group flex flex-col justify-between rounded-2xl border border-border dark:border-dark-border bg-surface-2 dark:bg-dark-base hover:border-border-2 dark:hover:border-dark-border-2 transition-colors duration-200 overflow-hidden"
              >
                {/* ── Image ── */}
                <div className="w-full aspect-[16/9] bg-surface-3 dark:bg-dark-3 overflow-hidden">
                  {image ? (
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    // Placeholder until screenshots are ready
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-body text-xs tracking-widest uppercase text-text-faint dark:text-dark-text-faint">
                        Screenshot coming soon
                      </span>
                    </div>
                  )}
                </div>
                {/* ── Image ── */}
                {/* {image ? (
                  <ProjectImage src={image} alt={title} aspectRatio="16/9" />
                ) : (
                  <ProjectImagePlaceholder aspectRatio="16/9" />
                )} */}

                {/* ── Content ── */}
                <div className="flex flex-col flex-1 justify-between p-8">
                  <div>
                    {/* Category tag */}
                    <span className="inline-block font-body text-xs font-semibold tracking-widest uppercase text-text-muted dark:text-dark-text-muted bg-surface-3 dark:bg-dark-3 px-2.5 py-1 rounded-md mb-5">
                      {category}
                    </span>

                    {/* Card title */}
                    <h3 className="font-display font-bold text-xl tracking-tight text-text-primary dark:text-dark-text-primary mb-3">
                      {title}
                    </h3>

                    {/* Outcome */}
                    <p className="font-body text-sm leading-relaxed text-text-secondary dark:text-dark-text-muted">
                      {outcome}
                    </p>
                  </div>

                  {/* ── Bottom — metric + link ── */}
                  <div className="mt-8 pt-6 border-t border-border dark:border-dark-border flex items-end justify-between gap-4">
                    <div>
                      <p className="font-display font-extrabold text-2xl tracking-tight text-text-primary dark:text-dark-text-primary">
                        {metric}
                      </p>
                      <p className="font-body text-xs text-text-muted dark:text-dark-text-muted mt-0.5">
                        {metricLabel}
                      </p>
                    </div>
                    <Link
                      to={`/work/${slug}`}
                      className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-accent-text dark:text-accent group-hover:gap-2.5 transition-all duration-200 shrink-0"
                    >
                      View case study →
                    </Link>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>

        {/* ── Stats Bar ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border dark:bg-dark-border rounded-2xl overflow-hidden">
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center py-10 px-6 bg-surface-2 dark:bg-dark-base"
            >
              <p className="font-display font-extrabold text-4xl tracking-tight leading-none text-text-primary dark:text-dark-text-primary mb-1">
                {value}
              </p>
              <p className="font-body text-sm text-text-muted dark:text-dark-text-muted text-center">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
