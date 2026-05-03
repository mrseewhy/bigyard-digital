import { useRef } from "react";
import { CLIENTS } from "../data/Clients";

// Duplicate for seamless infinite loop
const LOOPED = [...CLIENTS, ...CLIENTS];

export default function ClientsImages() {
  const trackRef = useRef<HTMLDivElement>(null);

  // Pause on hover
  const pause = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = "paused";
  };
  const resume = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = "running";
  };

  return (
    <div className="w-full border-t border-b border-border dark:border-dark-border bg-surface dark:bg-dark-2">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* ── Headline ── */}
        <p className="font-display font-bold text-xl md:text-2xl tracking-tight text-text-primary dark:text-dark-text-primary mb-8">
          Built for teams doing real work,{" "}
          <span className="text-text-secondary dark:text-dark-text-secondary">
            not side projects.
          </span>
        </p>

        {/* ── Scroll container — clipped inside max-w-7xl ── */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
          {/* Left fade */}
          <div className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-r from-surface dark:from-dark-2 to-transparent" />

          {/* Right fade */}
          <div className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-l from-surface dark:from-dark-2 to-transparent" />

          {/* Scrolling track */}
          <div
            ref={trackRef}
            className="flex items-center gap-10 w-max"
            style={{ animation: "scroll-logos 35s linear infinite" }}
          >
            {LOOPED.map(({ name, logo }, index) => (
              <div
                key={`${name}-${index}`}
                className="group relative shrink-0 flex items-center justify-center"
                style={{ width: 120, height: 48 }}
              >
                {/* Greyscale default */}
                <img
                  src={logo}
                  alt={name}
                  className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0"
                  style={{
                    filter:
                      "grayscale(100%) brightness(0) invert(var(--logo-invert, 0))",
                    opacity: 0.45,
                  }}
                />
                {/* Full color on hover */}
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
      </div>
    </div>
  );
}
