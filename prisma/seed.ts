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

  console.log('✅ Seeding complete!')
  console.log({ caseStudy1, testimonial1 })
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

