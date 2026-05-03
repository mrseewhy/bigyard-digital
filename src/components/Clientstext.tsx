// ─────────────────────────────────────────────────────────────
// ClientsText — Text-based client logos
// Use this now. Swap for ClientsImages when you have
// proper SVG assets from all clients.
// ─────────────────────────────────────────────────────────────

const CLIENTS = [
  "Gates Foundation",
  "Data Science Nigeria",
  "Tradecrib Ltd",
  "Stories Click",
  "Mind The Gap",
  "On The Job",
];

export default function ClientsText() {
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

        {/* ── Client names ── */}
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
          {CLIENTS.map((client) => (
            <span
              key={client}
              className="font-body text-sm font-semibold text-text-faint dark:text-dark-text-faint"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
