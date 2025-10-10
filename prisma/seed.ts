import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Seed Case Studies
  const caseStudy1 = await prisma.caseStudy.upsert({
    where: { slug: 'sample-case-study' },
    update: {},
    create: {
      slug: 'sample-case-study',
      title: 'Sample Case Study',
      client: 'Example Company',
      description: 'A sample case study to demonstrate the database structure.',
      heroImage: '/images/case-studies/sample-hero.jpg',
      logoImage: '/images/case-studies/sample-logo.svg',
      metrics: {
        revenue: '3x growth',
        users: '500k users',
        conversion: '+200% conversion rate'
      },
      tags: ['Paid Ads', 'Email Marketing', 'CRO'],
      published: true,
      order: 1,
    },
  })

  // Seed Testimonials
  const testimonial1 = await prisma.testimonial.upsert({
    where: { id: 'sample-testimonial-1' },
    update: {},
    create: {
      id: 'sample-testimonial-1',
      name: 'John Doe',
      role: 'CEO',
      company: 'Tech Startup Inc',
      content: 'Working with this team transformed our marketing results. Highly recommended!',
      rating: 5,
      featured: true,
      published: true,
      order: 1,
    },
  })

  // Seed Logos
  const logosData = [
    { name: 'Ancient and Brave', imageUrl: '/images/ancient_and_brave_logo_square.png', shape: 'square', alt: 'Ancient and Brave', order: 1 },
    { name: 'Absolute Reg', imageUrl: '/images/absolute_reg_logo_rectangle.png', shape: 'rect', alt: 'Absolute Reg', order: 2 },
    { name: 'AWA Digital', imageUrl: '/images/awa_digital_square.png', shape: 'square', alt: 'AWA Digital', order: 3 },
    { name: 'Best Western', imageUrl: '/images/best_western_square.png', shape: 'square', alt: 'Best Western', order: 4 },
    { name: 'Barbour', imageUrl: '/images/barbour_logo_rectangle.png', shape: 'rect', alt: 'Barbour', order: 5 },
    { name: 'Bupa', imageUrl: '/images/Bupa_logo_square.png', shape: 'square', alt: 'Bupa', order: 6 },
    { name: 'Choice Hotels', imageUrl: '/images/choice_hotels_logo_square.png', shape: 'square', alt: 'Choice Hotels', order: 7 },
    { name: 'Condé Nast', imageUrl: '/images/conde_nast_logo_square.png', shape: 'square', alt: 'Condé Nast', order: 8 },
    { name: 'Conversion Rate Experts', imageUrl: '/images/conversion_rate_experts_logo_rectangle.png', shape: 'rect', alt: 'Conversion Rate Experts', order: 9 },
    { name: 'Crazy Egg', imageUrl: '/images/crazy_egg_logo_square.png', shape: 'square', alt: 'Crazy Egg', order: 10 },
    { name: 'Durex', imageUrl: '/images/durex_logo_square.png', shape: 'square', alt: 'Durex', order: 11 },
    { name: 'DC Cargo Mall', imageUrl: '/images/dc_cargo_mall_logo_rectangle.png', shape: 'rect', alt: 'DC Cargo Mall', order: 12 },
    { name: 'Elvie', imageUrl: '/images/elvie_logo_square.png', shape: 'square', alt: 'Elvie', order: 13 },
    { name: 'Fitness First', imageUrl: '/images/fitness_first_logo_square.png', shape: 'square', alt: 'Fitness First', order: 14 },
    { name: 'Duffells', imageUrl: '/images/duffells_logo_rectangle.png', shape: 'rect', alt: 'Duffells', order: 15 },
    { name: 'Fresh Tracks Canada', imageUrl: '/images/fresh_tracks_canada.png', shape: 'square', alt: 'Fresh Tracks Canada', order: 16 },
    { name: 'Hotelissima', imageUrl: '/images/hotelissima_logo_square.jpg', shape: 'square', alt: 'Hotelissima', order: 17 },
    { name: 'Exploring Ireland', imageUrl: '/images/exploring_ireland_logo_rectangle.png', shape: 'rect', alt: 'Exploring Ireland', order: 18 },
    { name: 'Hotjar', imageUrl: '/images/hotjar_logo_square.png', shape: 'square', alt: 'Hotjar', order: 19 },
    { name: 'Hux Health', imageUrl: '/images/hux_health_logo_square.png', shape: 'square', alt: 'Hux Health', order: 20 },
    { name: 'Grasshopper', imageUrl: '/images/grasshopper_logo_rectangle.png', shape: 'rect', alt: 'Grasshopper', order: 21 },
    { name: 'ISSA Online', imageUrl: '/images/issa_online_logo_square.png', shape: 'square', alt: 'ISSA Online', order: 22 },
    { name: 'KatKin', imageUrl: '/images/katkin_logo_square.png', shape: 'square', alt: 'KatKin', order: 23 },
    { name: 'Plastic Place', imageUrl: '/images/plastic_place_logo_rectangle.png', shape: 'rect', alt: 'Plastic Place', order: 24 },
    { name: 'Liforme', imageUrl: '/images/liforme_logo_square.png', shape: 'square', alt: 'Liforme', order: 25 },
    { name: 'Lily and Lionel', imageUrl: '/images/lily_and_lionel_logo.png', shape: 'square', alt: 'Lily and Lionel', order: 26 },
    { name: 'Lloyds Bank', imageUrl: '/images/lloyds_bank_logo_square.png', shape: 'square', alt: 'Lloyds Bank', order: 27 },
    { name: 'Prepkitchen', imageUrl: '/images/prepkitchen_logo_rectangle.png', shape: 'rect', alt: 'Prepkitchen', order: 28 },
    { name: 'Look Fabulous Forever', imageUrl: '/images/look_fabulous_forever_logo_square.png', shape: 'square', alt: 'Look Fabulous Forever', order: 29 },
    { name: 'Martin Randall Travel', imageUrl: '/images/martin_randall_travel_square.png', shape: 'square', alt: 'Martin Randall Travel', order: 30 },
    { name: 'Quicksprout', imageUrl: '/images/quicksprout_logo_rectangle.png', shape: 'rect', alt: 'Quicksprout', order: 31 },
    { name: 'Mindful Chef', imageUrl: '/images/mindful_chef_logo_square.png', shape: 'square', alt: 'Mindful Chef', order: 32 },
    { name: 'Modular Closets', imageUrl: '/images/modular_closets_logo_square.png', shape: 'square', alt: 'Modular Closets', order: 33 },
    { name: 'Monica Vinader', imageUrl: '/images/monica_vinader_logo_square.png', shape: 'square', alt: 'Monica Vinader', order: 34 },
    { name: 'The Gluten Free Palace', imageUrl: '/images/the_gluten_free_palace_logo_rectangle.png', shape: 'rect', alt: 'The Gluten Free Palace', order: 35 },
    { name: 'Mous', imageUrl: '/images/mous_logo_square.png', shape: 'square', alt: 'Mous', order: 36 },
    { name: 'MSRE', imageUrl: '/images/msre_logo_square.jpg', shape: 'square', alt: 'MSRE', order: 37 },
    { name: 'The Sewing Studio', imageUrl: '/images/the_sewing_studio_logo_rectangle.png', shape: 'rect', alt: 'The Sewing Studio', order: 38 },
    { name: 'Neom Organics', imageUrl: '/images/neom_organics_logo_square.jpg', shape: 'square', alt: 'Neom Organics', order: 39 },
    { name: 'O2', imageUrl: '/images/o2_logo_square.png', shape: 'square', alt: 'O2', order: 40 },
    { name: 'Omlet', imageUrl: '/images/omlet_logo_square.png', shape: 'square', alt: 'Omlet', order: 41 },
    { name: 'Wattbike', imageUrl: '/images/wattbike_logo_rectangle.png', shape: 'rect', alt: 'Wattbike', order: 42 },
    { name: 'Orlebar Brown', imageUrl: '/images/orlebar_brown_logo_square.png', shape: 'square', alt: 'Orlebar Brown', order: 43 },
    { name: 'Rabbies', imageUrl: '/images/rabbies_logo_square.png', shape: 'square', alt: 'Rabbies', order: 44 },
    { name: 'Sally Beauty', imageUrl: '/images/sally_beauty_logo_square.png', shape: 'square', alt: 'Sally Beauty', order: 45 },
    { name: 'Sass & Belle', imageUrl: '/images/sass_and_belle_logo_square.png', shape: 'square', alt: 'Sass & Belle', order: 46 },
    { name: 'Sila', imageUrl: '/images/sila_logo_square.png', shape: 'square', alt: 'Sila', order: 47 },
    { name: 'The Whisky Exchange', imageUrl: '/images/the_whisky_exchange_logo_square.png', shape: 'square', alt: 'The Whisky Exchange', order: 48 },
    { name: 'United States Flag Store', imageUrl: '/images/united_states_flag_store_logo_square.png', shape: 'square', alt: 'United States Flag Store', order: 49 },
  ]

  console.log('🎨 Seeding logos...')
  for (const logoData of logosData) {
    await prisma.logo.upsert({
      where: { name: logoData.name },
      update: logoData,
      create: logoData,
    })
  }

  console.log('✅ Seeding complete!')
  console.log({ caseStudy1, testimonial1, totalLogos: logosData.length })
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:')
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

