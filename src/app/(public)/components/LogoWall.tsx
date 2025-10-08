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

// Real logo data from public/images/
const defaultLogos: LogoItem[] = [
  { src: '/images/imgi_13_spotify-logo-dark.png', name: 'Spotify', alt: 'Spotify logo' },
  { src: '/images/imgi_10_soundcloud-logo.svg', name: 'SoundCloud', alt: 'SoundCloud logo' },
  { src: '/images/imgi_8_1280px-TuneIn_Logo_2018.svg.png', name: 'TuneIn', alt: 'TuneIn logo' },
  { src: '/images/imgi_5_206-2063674_pandora-radio-logo-transparent-pandora-music-company-transparent.png', name: 'Pandora', alt: 'Pandora logo' },
  { src: '/images/imgi_11_Logo_Univision.png', name: 'Univision', alt: 'Univision logo' },
  { src: '/images/imgi_12_barstool_logo.png', name: 'Barstool Sports', alt: 'Barstool Sports logo' },
  { src: '/images/imgi_40_stingray-vector-logo.png', name: 'Stingray', alt: 'Stingray logo' },
  { src: '/images/imgi_42_Consumable - thumbnail_logo_rgb_rev_v.png', name: 'Consumable', alt: 'Consumable logo' },
  { src: '/images/imgi_44_vsin-logo.webp', name: 'VSIN', alt: 'VSIN logo' },
  { src: '/images/imgi_46_Barstool-Sports-Logo.png', name: 'Barstool Sports', alt: 'Barstool Sports logo' },
  { src: '/images/imgi_49_own-logo.png', name: 'OWN', alt: 'OWN logo' },
  { src: '/images/imgi_51_audacy_logo_stacked_color_rgb.png', name: 'Audacy', alt: 'Audacy logo' },
  { src: '/images/imgi_52_2560px-The_Logo_of_The_Washington_Post_Newspaper.svg.png', name: 'Washington Post', alt: 'Washington Post logo' },
  { src: '/images/imgi_56_CoxMediaGroup Logo.png', name: 'Cox Media Group', alt: 'Cox Media Group logo' },
  { src: '/images/imgi_57_Entravision Logo Color.png', name: 'Entravision', alt: 'Entravision logo' },
  { src: '/images/imgi_59_bonneville-logo.png', name: 'Bonneville', alt: 'Bonneville logo' },
  { src: '/images/imgi_63_Simplecast_trans_logo.png', name: 'Simplecast', alt: 'Simplecast logo' },
  { src: '/images/imgi_65_inline_audiomack_logo_orange.png', name: 'Audiomack', alt: 'Audiomack logo' },
  { src: '/images/imgi_67_logo_idobi_radio_dark.png', name: 'Idobi Radio', alt: 'Idobi Radio logo' },
  { src: '/images/imgi_69_Podcastone_logo.png', name: 'PodcastOne', alt: 'PodcastOne logo' },
  { src: '/images/imgi_7_NBC_logo.svg.png', name: 'NBC', alt: 'NBC logo' },
];

export default function LogoWall({
  heading = 'Trusted publishers & platforms — all in one place',
  body = 'A curated network of streaming, podcast, and radio partners. Mix reach with relevance, then measure impact end-to-end.',
  cta = { label: 'Browse all partners', href: '/partners' },
  items = defaultLogos,
}: LogoWallProps): JSX.Element {
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
    <section aria-labelledby="logo-cloud-heading" className="pt-8 pb-16 md:pt-12 md:pb-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="flex flex-col xl:flex-row gap-8 md:gap-12 items-center">
            {/* Gallery viewport */}
            <div className="w-full xl:w-[600px] h-[600px] overflow-hidden relative">
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
