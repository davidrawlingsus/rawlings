'use client';

import React from 'react';
import Image from 'next/image';

interface Logo {
  src: string;
  alt: string;
}

interface LogoSliderProps {
  title?: string;
  logos: Logo[];
  speedMs?: number;
  className?: string;
}

export default function LogoSlider({ 
  title = "Trusted by leading global companies",
  logos, 
  speedMs = 30000,
  className = "" 
}: LogoSliderProps) {
  // Triple the logos for seamless infinite scroll
  const tripled = [...logos, ...logos, ...logos];

  return (
    <section className={`py-16 md:py-20 bg-neutral-50 border-t border-neutral-200 overflow-hidden ${className}`}>
      <div className="max-w-screen-xl mx-auto px-6 md:px-8">
        {/* Title */}
        {title && (
          <h2 className="text-center text-lg md:text-xl font-medium text-neutral-700 mb-12">
            {title}
          </h2>
        )}

        {/* Scrolling Container */}
        <div className="relative">
          {/* Gradient masks on left and right */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-neutral-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-neutral-50 to-transparent z-10" />
          
          {/* Scrolling logos */}
          <div className="overflow-hidden">
            <div 
              className="flex gap-8 md:gap-12 items-center whitespace-nowrap"
              style={{
                animation: `scroll-horizontal ${speedMs}ms linear infinite`,
                width: 'fit-content'
              }}
            >
              {tripled.map((logo, idx) => (
                <div 
                  key={`${logo.alt}-${idx}`}
                  className="relative flex-shrink-0 h-12 md:h-16 w-32 md:w-40 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 128px, 160px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes scroll-horizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        
        @media (prefers-reduced-motion: reduce) {
          div[style*="scroll-horizontal"] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}

