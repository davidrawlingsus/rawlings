'use client';

import LogoCloud, { LogoItem } from '@/components/LogoCloud';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// All 49 client logos from /public/images/ - SHUFFLED for lattice effect
const clientLogos: LogoItem[] = [
  { src: '/images/ancient_and_brave_logo_square.png', alt: 'Ancient and Brave', shape: 'square' },
  { src: '/images/absolute_reg_logo_rectangle.png', alt: 'Absolute Reg', shape: 'rect' },
  { src: '/images/awa_digital_square.png', alt: 'AWA Digital', shape: 'square' },
  { src: '/images/best_western_square.png', alt: 'Best Western', shape: 'square' },
  { src: '/images/barbour_logo_rectangle.png', alt: 'Barbour', shape: 'rect' },
  { src: '/images/Bupa_logo_square.png', alt: 'Bupa', shape: 'square' },
  { src: '/images/choice_hotels_logo_square.png', alt: 'Choice Hotels', shape: 'square' },
  { src: '/images/conde_nast_logo_square.png', alt: 'Condé Nast', shape: 'square' },
  { src: '/images/conversion_rate_experts_logo_rectangle.png', alt: 'Conversion Rate Experts', shape: 'rect' },
  { src: '/images/crazy_egg_logo_square.png', alt: 'Crazy Egg', shape: 'square' },
  { src: '/images/durex_logo_square.png', alt: 'Durex', shape: 'square' },
  { src: '/images/dc_cargo_mall_logo_rectangle.png', alt: 'DC Cargo Mall', shape: 'rect' },
  { src: '/images/elvie_logo_square.png', alt: 'Elvie', shape: 'square' },
  { src: '/images/fitness_first_logo_square.png', alt: 'Fitness First', shape: 'square' },
  { src: '/images/duffells_logo_rectangle.png', alt: 'Duffells', shape: 'rect' },
  { src: '/images/fresh_tracks_canada.png', alt: 'Fresh Tracks Canada', shape: 'square' },
  { src: '/images/hotelissima_logo_square.jpg', alt: 'Hotelissima', shape: 'square' },
  { src: '/images/exploring_ireland_logo_rectangle.png', alt: 'Exploring Ireland', shape: 'rect' },
  { src: '/images/hotjar_logo_square.png', alt: 'Hotjar', shape: 'square' },
  { src: '/images/hux_health_logo_square.png', alt: 'Hux Health', shape: 'square' },
  { src: '/images/grasshopper_logo_rectangle.png', alt: 'Grasshopper', shape: 'rect' },
  { src: '/images/issa_online_logo_square.png', alt: 'ISSA Online', shape: 'square' },
  { src: '/images/katkin_logo_square.png', alt: 'KatKin', shape: 'square' },
  { src: '/images/plastic_place_logo_rectangle.png', alt: 'Plastic Place', shape: 'rect' },
  { src: '/images/liforme_logo_square.png', alt: 'Liforme', shape: 'square' },
  { src: '/images/lily_and_lionel_logo.png', alt: 'Lily and Lionel', shape: 'square' },
  { src: '/images/lloyds_bank_logo_square.png', alt: 'Lloyds Bank', shape: 'square' },
  { src: '/images/prepkitchen_logo_rectangle.png', alt: 'Prepkitchen', shape: 'rect' },
  { src: '/images/look_fabulous_forever_logo_square.png', alt: 'Look Fabulous Forever', shape: 'square' },
  { src: '/images/martin_randall_travel_square.png', alt: 'Martin Randall Travel', shape: 'square' },
  { src: '/images/quicksprout_logo_rectangle.png', alt: 'Quicksprout', shape: 'rect' },
  { src: '/images/mindful_chef_logo_square.png', alt: 'Mindful Chef', shape: 'square' },
  { src: '/images/modular_closets_logo_square.png', alt: 'Modular Closets', shape: 'square' },
  { src: '/images/monica_vinader_logo_square.png', alt: 'Monica Vinader', shape: 'square' },
  { src: '/images/the_gluten_free_palace_logo_rectangle.png', alt: 'The Gluten Free Palace', shape: 'rect' },
  { src: '/images/mous_logo_square.png', alt: 'Mous', shape: 'square' },
  { src: '/images/msre_logo_square.jpg', alt: 'MSRE', shape: 'square' },
  { src: '/images/the_sewing_studio_logo_rectangle.png', alt: 'The Sewing Studio', shape: 'rect' },
  { src: '/images/neom_organics_logo_square.jpg', alt: 'Neom Organics', shape: 'square' },
  { src: '/images/o2_logo_square.png', alt: 'O2', shape: 'square' },
  { src: '/images/omlet_logo_square.png', alt: 'Omlet', shape: 'square' },
  { src: '/images/wattbike_logo_rectangle.png', alt: 'Wattbike', shape: 'rect' },
  { src: '/images/orlebar_brown_logo_square.png', alt: 'Orlebar Brown', shape: 'square' },
  { src: '/images/rabbies_logo_square.png', alt: 'Rabbies', shape: 'square' },
  { src: '/images/sally_beauty_logo_square.png', alt: 'Sally Beauty', shape: 'square' },
  { src: '/images/sass_and_belle_logo_square.png', alt: 'Sass & Belle', shape: 'square' },
  { src: '/images/sila_logo_square.png', alt: 'Sila', shape: 'square' },
  { src: '/images/the_whisky_exchange_logo_square.png', alt: 'The Whisky Exchange', shape: 'square' },
  { src: '/images/united_states_flag_store_logo_square.png', alt: 'United States Flag Store', shape: 'square' },
];

export default function LogoCloudDemo() {
  return (
    <section aria-labelledby="logo-cloud-heading" className="relative pt-4 pb-16 md:pt-[125px] md:pb-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          {/* Logo Cloud - Left Side */}
          <div className="w-full lg:w-[600px]">
            <LogoCloud logos={clientLogos} speedMs={45000} />
          </div>

          {/* Content - Right Side */}
          <div className="flex-1 p-6 md:p-10">
            <h2
              id="logo-cloud-heading"
              className="text-[28px] md:text-3xl font-bold mb-5 text-black"
            >
              Trusted by Leading Brands Worldwide
            </h2>
            <p className="text-lg mb-8 text-gray-700 leading-relaxed">
              We&apos;ve partnered with dozens of brands across ecommerce, travel, finance, and lifestyle sectors to optimize their conversion rates and drive measurable revenue growth.
            </p>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              View case studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

