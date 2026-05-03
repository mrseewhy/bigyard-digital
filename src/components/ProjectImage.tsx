// ─────────────────────────────────────────────────────────────
// ProjectImage — Reusable uniform image component
// Use anywhere a project screenshot needs to appear:
// Credibility cards, Portfolio cards, Case Study header
//
// Light mode: airy, slightly desaturated, soft vignette
// Dark mode:  cinematic, darker, stronger contrast + tint
// ─────────────────────────────────────────────────────────────

import { useId } from "react";

interface ProjectImageProps {
  src: string;
  alt: string;
  aspectRatio?: "16/9" | "4/3" | "3/2";
  className?: string;
}

export default function ProjectImage({
  src,
  alt,
  aspectRatio = "16/9",
  className = "",
}: ProjectImageProps) {
  // useId ensures each SVG filter has a unique ID
  // even when multiple ProjectImages render on the same page
  const uid = useId().replace(/:/g, "");
  const filterId = `noise-${uid}`;

  const aspectClass = {
    "16/9": "aspect-[16/9]",
    "4/3": "aspect-[4/3]",
    "3/2": "aspect-[3/2]",
  }[aspectRatio];

  return (
    <div
      className={`relative w-full ${aspectClass} overflow-hidden rounded-xl bg-surface-3 dark:bg-dark-3 ${className}`}
    >
      {/* ── Base image ── */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover scale-[1.04] transition-transform duration-500 ease-out group-hover:scale-[1.08] brightness-[0.97] contrast-[1.02] saturate-[0.96] dark:brightness-[0.75] dark:contrast-[1.15] dark:saturate-[0.85]"
      />

      {/* ── Gradient vignette ──
                Light: very soft white at bottom to blend into card
                Dark:  strong black vignette for cinematic depth       */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent dark:from-black/80 dark:via-black/30 dark:to-transparent" />

      {/* ── Brand tint ──
                Subtle lime radial tint — same hex as accent but very low opacity
                Slightly stronger in dark mode where it reads better              */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(232,255,71,0.05),transparent_65%)] dark:bg-[radial-gradient(ellipse_at_50%_60%,rgba(232,255,71,0.09),transparent_65%)]" />

      {/* ── Film grain ──
                Unique filter ID per instance via useId()
                Light: multiply blend, very low opacity — adds texture without darkening
                Dark:  overlay blend, slightly stronger — cinematic grain feel          */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.07] mix-blend-overlay">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id={filterId}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.75"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter={`url(#${filterId})`} />
        </svg>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// ProjectImagePlaceholder — shown while no image is available
// Matches the same dimensions as ProjectImage
// ─────────────────────────────────────────────────────────────

interface PlaceholderProps {
  aspectRatio?: "16/9" | "4/3" | "3/2";
  label?: string;
  className?: string;
}

export function ProjectImagePlaceholder({
  aspectRatio = "16/9",
  label = "Screenshot coming soon",
  className = "",
}: PlaceholderProps) {
  const aspectClass = {
    "16/9": "aspect-[16/9]",
    "4/3": "aspect-[4/3]",
    "3/2": "aspect-[3/2]",
  }[aspectRatio];

  return (
    <div
      className={`relative w-full ${aspectClass} overflow-hidden rounded-xl bg-surface-3 dark:bg-dark-3 flex items-center justify-center ${className}`}
    >
      {/* Subtle grid pattern matching hero */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, color-mix(in srgb, currentColor 5%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, currentColor 5%, transparent) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      <span className="relative font-body text-xs tracking-widest uppercase text-text-faint dark:text-dark-text-faint">
        {label}
      </span>
    </div>
  );
}
