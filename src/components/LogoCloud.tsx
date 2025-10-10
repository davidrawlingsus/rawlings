import React, { useMemo } from "react";

/**
 * Props:
 *  - logos: list of logo objects
 *  - speedMs: optional scroll duration (default 40000ms)
 *  - className: optional wrapper classes
 *
 * Shapes:
 *  - 'square' -> spans 1 visual column (2 sub-columns)
 *  - 'rect'   -> spans 2 visual columns (4 sub-columns)
 */
export type LogoShape = "square" | "rect";

export interface LogoItem {
  src: string;
  alt: string;
  shape: LogoShape;
}

interface LogoCloudProps {
  logos: LogoItem[];
  speedMs?: number;
  className?: string;
}

const LogoCloud: React.FC<LogoCloudProps> = ({ logos, speedMs = 40000, className }) => {
  // Duplicate once to enable a seamless scroll loop:
  const looped = useMemo(() => [...logos, ...logos], [logos]);

  // Inline style for the fade mask (Tailwind doesn't set mask-image natively).
  const maskStyle: React.CSSProperties = {
    // Gradient fade top/bottom
    WebkitMaskImage:
      "linear-gradient(to bottom, transparent 0, black 36px, black calc(100% - 36px), transparent 100%)",
    maskImage:
      "linear-gradient(to bottom, transparent 0, black 36px, black calc(100% - 36px), transparent 100%)",
  };

  // Animation duration dynamic via CSS variable
  const trackStyle: React.CSSProperties = {
    animationDuration: `${speedMs}ms`,
  };

  return (
    <section className={["relative bg-neutral-50 py-6", className].filter(Boolean).join(" ")}>
      {/* Global keyframes + reduced motion guard */}
      <style jsx global>{`
        @keyframes logo-scroll-up {
          from { transform: translateY(0); }
          to   { transform: translateY(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .motion-safe\\:animate-logo-scroll-up {
            animation: none !important;
          }
        }
      `}</style>

      <div
        className="mx-auto max-w-[1100px] overflow-hidden h-[520px] sm:h-[440px] rounded-2xl"
        style={maskStyle}
        aria-label="Client logo showcase"
      >
        {/* group class lets us pause the animation on hover */}
        <div className="group h-full">
          <div
            className={[
              // Grid with dense packing
              "grid grid-flow-row-dense gap-3 sm:gap-3.5",
              // 6 sub-columns on md+ (3 visual columns), 4 sub-columns on mobile (2 visual columns)
              "grid-cols-[repeat(4,minmax(0,1fr))] md:grid-cols-[repeat(6,minmax(0,1fr))]",
              // Animate upward by -50% because we duplicated the list once
              "motion-safe:animate-logo-scroll-up",
              // Pause on hover
              "group-hover:[animation-play-state:paused]",
            ].join(" ")}
            style={trackStyle}
          >
            {looped.map((logo, idx) => {
              const isSquare = logo.shape === "square";
              // span 2 sub-columns for square; 4 for rect
              const colSpanClass = isSquare ? "col-span-2" : "col-span-4";
              const ratioClass = isSquare ? "aspect-[1/1]" : "aspect-[2/1]";
              return (
                <figure
                  key={`${logo.src}-${idx}`}
                  className={[
                    colSpanClass,
                    "rounded-2xl bg-white p-4 sm:p-4.5 shadow-sm",
                    "grid place-items-center",
                  ].join(" ")}
                >
                  <div className={["w-full", ratioClass, "grid place-items-center"].join(" ")}>
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      loading="lazy"
                      className={[
                        "max-w-full max-h-full object-contain",
                        "opacity-90 grayscale contrast-105 transition",
                        "group-hover:opacity-100 group-hover:grayscale-0 group-hover:contrast-110 group-hover:scale-[1.02]",
                      ].join(" ")}
                    />
                  </div>
                </figure>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;

