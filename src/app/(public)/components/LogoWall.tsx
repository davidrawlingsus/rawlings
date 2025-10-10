'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type LogoItem = {
  src: string;
  name: string;
  alt?: string;
};

interface LogoWallProps {
  heading?: string;
  body?: string;
  cta?: {
    label: string;
    href: string;
  };
  items?: LogoItem[];
}

// Production client logos
const defaultLogos: LogoItem[] = [
  { src: '/images/barbour_logo_rectangle.png', name: 'Barbour', alt: 'Barbour logo' },
  { src: '/images/Bupa_logo_square.png', name: 'Bupa', alt: 'Bupa logo' },
  { src: '/images/conde_nast_logo_square.png', name: 'Condé Nast', alt: 'Condé Nast logo' },
  { src: '/images/durex_logo_square.png', name: 'Durex', alt: 'Durex logo' },
  { src: '/images/fitness_first_logo_square.png', name: 'Fitness First', alt: 'Fitness First logo' },
  { src: '/images/hotjar_logo_square.png', name: 'Hotjar', alt: 'Hotjar logo' },
  { src: '/images/katkin_logo_square.png', name: 'KatKin', alt: 'KatKin logo' },
  { src: '/images/lloyds_bank_logo_square.png', name: 'Lloyds Bank', alt: 'Lloyds Bank logo' },
  { src: '/images/mindful_chef_logo_square.png', name: 'Mindful Chef', alt: 'Mindful Chef logo' },
  { src: '/images/monica_vinader_logo_square.png', name: 'Monica Vinader', alt: 'Monica Vinader logo' },
  { src: '/images/mous_logo_square.png', name: 'Mous', alt: 'Mous logo' },
  { src: '/images/o2_logo_square.png', name: 'O2', alt: 'O2 logo' },
  { src: '/images/orlebar_brown_logo_square.png', name: 'Orlebar Brown', alt: 'Orlebar Brown logo' },
  { src: '/images/sally_beauty_logo_square.png', name: 'Sally Beauty', alt: 'Sally Beauty logo' },
  { src: '/images/best_western_square.png', name: 'Best Western', alt: 'Best Western logo' },
  { src: '/images/choice_hotels_logo_square.png', name: 'Choice Hotels', alt: 'Choice Hotels logo' },
  { src: '/images/crazy_egg_logo_square.png', name: 'Crazy Egg', alt: 'Crazy Egg logo' },
  { src: '/images/elvie_logo_square.png', name: 'Elvie', alt: 'Elvie logo' },
  { src: '/images/liforme_logo_square.png', name: 'Liforme', alt: 'Liforme logo' },
  { src: '/images/the_whisky_exchange_logo_square.png', name: 'The Whisky Exchange', alt: 'The Whisky Exchange logo' },
  { src: '/images/wattbike_logo_rectangle.png', name: 'Wattbike', alt: 'Wattbike logo' },
];

export default function LogoWall({
  heading = 'Trusted publishers & platforms — all in one place',
  body = 'A curated network of streaming, podcast, and radio partners. Mix reach with relevance, then measure impact end-to-end.',
  cta = { label: 'Browse all partners', href: '/partners' },
  items = defaultLogos,
}: LogoWallProps) {
  const renderLogo = (item: LogoItem, index: number, isTablet = false) => (
    <div
      key={`${item.name}-${index}`}
      className="relative overflow-hidden rounded bg-[#F8F8F8] p-3 flex items-center justify-center min-h-[120px]"
    >
      <Image
        src={item.src}
        alt={item.alt ?? `${item.name} logo`}
        width={200}
        height={200}
        className={`max-h-full max-w-full object-contain ${isTablet ? 'h-[100px]' : 'h-[120px]'}`}
        sizes="(max-width: 640px) 50vw, (max-width: 1280px) 100px, 120px"
      />
    </div>
  );

  return (
    <section aria-labelledby="logo-cloud-heading" className="pt-4 pb-16 md:pt-12 md:pb-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
            {/* Gallery viewport */}
            <div className="w-full lg:w-[600px] h-[600px] overflow-hidden relative">
              {/* Desktop: 3 columns (≥993px) */}
              <div className="hidden xl:flex gap-4 justify-center h-full">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="flex w-[180px] flex-col gap-4 animate-[move-up-down_7s_linear_infinite] hover:[animation-play-state:paused]"
                    style={{ animationDelay: `${i * 10}s` }}
                  >
                    {items
                      .filter((_, idx) => idx % 3 === i)
                      .map((item, idx) => renderLogo(item, idx, false))}
                  </div>
                ))}
              </div>

              {/* Tablet: 3 columns with reduced width (993px-1180px) */}
              <div className="hidden lg:flex xl:hidden gap-3 justify-center h-full">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="flex w-[160px] flex-col gap-3 animate-[move-up-down_7s_linear_infinite] hover:[animation-play-state:paused]"
                    style={{ animationDelay: `${i * 10}s` }}
                  >
                    {items
                      .filter((_, idx) => idx % 3 === i)
                      .map((item, idx) => renderLogo(item, idx, true))}
                  </div>
                ))}
              </div>

              {/* Mobile: Two columns (≤992px) */}
              <div className="lg:hidden flex gap-3 justify-center h-full">
                {[0, 1].map((i) => (
                  <div
                    key={i}
                    className="flex w-[140px] flex-col gap-3 animate-[move-up-down_21s_linear_infinite] hover:[animation-play-state:paused]"
                    style={{ animationDelay: `${i * 7}s` }}
                  >
                    {items
                      .filter((_, idx) => idx % 2 === i)
                      .map((item, idx) => renderLogo(item, idx, false))}
                  </div>
                ))}
              </div>

              {/* Mobile gradient mask */}
              <div className="lg:hidden pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-white z-10" />
            </div>

            {/* Content pane */}
            <div className="flex-1 p-6 md:p-10">
              <h2
                id="logo-cloud-heading"
                className="text-[28px] md:text-3xl font-bold mb-5 text-black"
              >
                {heading}
              </h2>
              <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                {body}
              </p>
              {cta && (
                <Link
                  href={cta.href}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  {cta.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
        </div>
      </div>
    </section>
  );
}
