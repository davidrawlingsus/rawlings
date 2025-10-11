'use client';

import LogoCloud, { LogoItem } from '@/components/LogoCloud';

// Client logos hosted on Vercel Blob Storage
const clientLogos: LogoItem[] = [
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/ancient_and_brave_logo_square.png', alt: 'Ancient and Brave', shape: 'square' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/absolute_reg_logo_rectangle.png', alt: 'Absolute Reg', shape: 'rect' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/awa_digital_square.png', alt: 'AWA Digital', shape: 'square' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/best_western_square.png', alt: 'Best Western', shape: 'square' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/barbour_logo_rectangle.png', alt: 'Barbour', shape: 'rect' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/Bupa_logo_square.png', alt: 'Bupa', shape: 'square' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/choice_hotels_logo_square.png', alt: 'Choice Hotels', shape: 'square' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/conde_nast_logo_square.png', alt: 'Condé Nast', shape: 'square' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/conversion_rate_experts_logo_rectangle.png', alt: 'Conversion Rate Experts', shape: 'rect' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/crazy_egg_logo_square.png', alt: 'Crazy Egg', shape: 'square' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/durex_logo_square.png', alt: 'Durex', shape: 'square' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/dc_cargo_mall_logo_rectangle.png', alt: 'DC Cargo Mall', shape: 'rect' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/elvie_logo_square.png', alt: 'Elvie', shape: 'square' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/fitness_first_logo_square.png', alt: 'Fitness First', shape: 'square' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/duffells_logo_rectangle.png', alt: 'Duffells', shape: 'rect' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/fresh_tracks_canada.png', alt: 'Fresh Tracks Canada', shape: 'square' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/hotelissima_logo_square.jpg', alt: 'Hotelissima', shape: 'square' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/exploring_ireland_logo_rectangle.png', alt: 'Exploring Ireland', shape: 'rect' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/hotjar_logo_square.png', alt: 'Hotjar', shape: 'square' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/hux_health_logo_square.png', alt: 'Hux Health', shape: 'square' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/grasshopper_logo_rectangle.png', alt: 'Grasshopper', shape: 'rect' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/issa_online_logo_square.png', alt: 'ISSA Online', shape: 'square' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/katkin_logo_square.png', alt: 'KatKin', shape: 'square' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/plastic_place_logo_rectangle.png', alt: 'Plastic Place', shape: 'rect' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/liforme_logo_square.png', alt: 'Liforme', shape: 'square' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/lily_and_lionel_logo.png', alt: 'Lily and Lionel', shape: 'square' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/lloyds_bank_logo_square.png', alt: 'Lloyds Bank', shape: 'square' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/prepkitchen_logo_rectangle.png', alt: 'Prepkitchen', shape: 'rect' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/look_fabulous_forever_logo_square.png', alt: 'Look Fabulous Forever', shape: 'square' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/martin_randall_travel_square.png', alt: 'Martin Randall Travel', shape: 'square' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/quicksprout_logo_rectangle.png', alt: 'Quicksprout', shape: 'rect' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/mindful_chef_logo_square.png', alt: 'Mindful Chef', shape: 'square' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/modular_closets_logo_square.png', alt: 'Modular Closets', shape: 'square' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/monica_vinader_logo_square.png', alt: 'Monica Vinader', shape: 'square' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/the_gluten_free_palace_logo_rectangle.png', alt: 'The Gluten Free Palace', shape: 'rect' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/mous_logo_square.png', alt: 'Mous', shape: 'square' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/msre_logo_square.jpg', alt: 'MSRE', shape: 'square' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/the_sewing_studio_logo_rectangle.png', alt: 'The Sewing Studio', shape: 'rect' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/neom_organics_logo_square.jpg', alt: 'Neom Organics', shape: 'square' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/o2_logo_square.png', alt: 'O2', shape: 'square' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/omlet_logo_square.png', alt: 'Omlet', shape: 'square' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/wattbike_logo_rectangle.png', alt: 'Wattbike', shape: 'rect' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/orlebar_brown_logo_square.png', alt: 'Orlebar Brown', shape: 'square' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/rabbies_logo_square.png', alt: 'Rabbies', shape: 'square' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/sally_beauty_logo_square.png', alt: 'Sally Beauty', shape: 'square' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/sass_and_belle_logo_square.png', alt: 'Sass & Belle', shape: 'square' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/sila_logo_square.png', alt: 'Sila', shape: 'square' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/the_whisky_exchange_logo_square.png', alt: 'The Whisky Exchange', shape: 'square' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/united_states_flag_store_logo_square.png', alt: 'United States Flag Store', shape: 'square' },
];

export default function LogoCloudDemo() {
  return (
    <section id="clients" aria-labelledby="logo-cloud-heading" className="relative pt-4 pb-16 md:pt-[125px] md:pb-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          {/* Logo Cloud - Left Side */}
          <div className="w-full lg:w-[600px]">
            <LogoCloud logos={clientLogos} speedMs={67500} />
          </div>

          {/* Content - Right Side */}
          <div className="flex-1 p-6 md:p-10">
            <p id="logo-cloud-heading" className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed">
              49 clients.
              <br />
              Hundreds of conversion wins.
              <br />
              Millions in new revenue.
              <br />
              All from one simple idea...
              <br />
              <span className="font-bold text-[#1A2B3C]">
                Conversion follows laws, not luck.
                <br />
                The principles never change...
                <br />
                But the variables <span className="underline">do</span>.
                <br />
                <br />
                <span 
                  className="relative inline px-1"
                  style={{
                    background: 'linear-gradient(104deg, rgba(190, 242, 100, 0) 0.9%, rgba(190, 242, 100, 0.8) 2.4%, rgba(190, 242, 100, 0.5) 5.8%, rgba(190, 242, 100, 0.4) 93%, rgba(190, 242, 100, 0.7) 96%, rgba(190, 242, 100, 0) 98%), linear-gradient(183deg, rgba(190, 242, 100, 0) 0%, rgba(190, 242, 100, 0.3) 7.9%, rgba(190, 242, 100, 0) 15%)',
                    boxDecorationBreak: 'clone',
                    WebkitBoxDecorationBreak: 'clone'
                  }}
                >
                  And your customer data reveals them.
                </span>
              </span>
            </p>
            <a 
              href="#process"
              className="inline-flex items-center justify-center h-12 px-6 rounded-full font-semibold bg-white border-2 border-[#1A2B3C] text-[#1A2B3C] hover:bg-[#1A2B3C] hover:text-white transition-colors"
              aria-label="Learn more"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

