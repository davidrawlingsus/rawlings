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
  // Duplicate twice for extra-smooth seamless loop:
  const looped = useMemo(() => [...logos, ...logos, ...logos], [logos]);

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
    <div className={["relative", className].filter(Boolean).join(" ")}>
      {/* Global keyframes + animation class */}
      <style jsx global>{`
        @keyframes logo-scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-33.333%); }
        }
        .animate-logo-scroll-up {
          animation: logo-scroll-up 45s linear infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-logo-scroll-up {
            animation: none !important;
          }
        }
      `}</style>

      <div
        className="overflow-hidden h-[600px] rounded-2xl bg-neutral-50"
        style={maskStyle}
        aria-label="Client logo showcase"
      >
        {/* group class lets us pause the animation on hover */}
        <div className="group h-full">
          <div
            className={[
              // Grid with dense packing for lattice effect
              "grid gap-2 auto-rows-min",
              // 6 sub-columns on mobile (3 visual), 10 sub-columns on desktop (5 visual)
              "grid-cols-6 lg:grid-cols-10",
              // Dense packing lets items fill gaps
              "grid-flow-dense",
              // Animate upward by -33.333% (we tripled the list for seamless loop)
              "animate-logo-scroll-up",
              // Pause on hover
              "group-hover:[animation-play-state:paused]",
            ].join(" ")}
            style={trackStyle}
          >
            {looped.map((logo, idx) => {
              const isSquare = logo.shape === "square";
              // Squares: 2 sub-cols (1 visual column)
              // Rectangles: 4 sub-cols on mobile (2 visual), 4 sub-cols on desktop (2 visual columns)
              const colSpanClass = isSquare 
                ? "col-span-2" 
                : "col-span-4";
              const ratioClass = isSquare ? "aspect-square" : "aspect-[5/2]";
              return (
                <figure
                  key={`${logo.src}-${idx}`}
                  className={[
                    colSpanClass,
                    "rounded-lg bg-white p-2 shadow-sm",
                    "flex items-center justify-center",
                  ].join(" ")}
                >
                  <div className={["w-full", ratioClass, "flex items-center justify-center"].join(" ")}>
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      loading="lazy"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </figure>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;

