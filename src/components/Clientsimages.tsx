// ─────────────────────────────────────────────────────────────
// ClientsImages — Image-based client logos
// Use when you have proper SVG/PNG assets from all clients.
//
// HOW IT WORKS:
// - All logos render in grayscale by default, matching text color
// - On hover, original color is revealed
// - All images are forced to the same fixed size (160×48px)
//   so mismatched source sizes don't break the layout
// - Works correctly in both light and dark mode
// ─────────────────────────────────────────────────────────────

type Client = {
  name: string;
  logo: string; // path e.g. "/images/clients/gates-foundation.svg"
};

const CLIENTS: Client[] = [
  { name: "EqualyzAI", logo: "img/clients/eai-png.avif" },
  { name: "Data Science Nigeria", logo: "img/clients/dsn-logo.png" },
  {
    name: "Capricorn Global Properties",
    logo: "img/clients/cgp-logo.png",
  },
  { name: "Skills Sprint", logo: "img/clients/ssk.png" },
  { name: "Stories Click", logo: "/images/clients/stories-click.svg" },
  { name: "Mind The Gap", logo: "/images/clients/mind-the-gap.svg" },
  { name: "On The Job", logo: "/images/clients/on-the-job.svg" },
  { name: "On The Job", logo: "/images/clients/on-the-job.svg" },
];

export default function ClientsImages() {
  return (
    <div className="w-full border-t border-b border-border dark:border-dark-border bg-surface dark:bg-dark-2">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* ── Headline ── */}
        <p className="font-display font-bold text-xl md:text-2xl tracking-tight text-text-primary dark:text-dark-text-primary mb-8">
          Built for teams doing real work,{" "}
          <span className="text-text-secondary dark:text-dark-text-secondary">
            not side projects.
          </span>
        </p>

        {/* ── Logo grid ── */}
        <div className="flex flex-wrap items-bottom justify-between gap-x-10 gap-y-6">
          {CLIENTS.map(({ name, logo }) => (
            <div
              key={name}
              className="group relative"
              style={{ width: 120, height: 40 }}
            >
              {/* Greyscale layer — always visible, fades on hover */}
              <img
                src={logo}
                alt={name}
                className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                style={{
                  filter:
                    "grayscale(100%) brightness(50%) invert(var(--logo-invert, 50%))",
                }}
              />
              {/* Colour layer — hidden by default, visible on hover */}
              <img
                src={logo}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>

      {/*
                CSS variables for logo invert:
                In light mode: logos are dark (invert 0 — black logos on white)
                In dark mode:  logos are light (invert 1 — white logos on dark)

                Add this to your index.css @layer base:

                :root { --logo-invert: 0; }
                .dark { --logo-invert: 1; }
            */}
    </div>
  );
}
