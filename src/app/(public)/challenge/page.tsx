'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SelfFundingCalculator from '../components/SelfFundingCalculator'
import PricingTableSelfFunding from '../components/PricingTableSelfFunding'
import ContactForm from '../components/ContactForm'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import LogoSlider from '../components/LogoSlider'

// Featured client logos for the slider
const featuredLogos = [
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/lloyds_bank_logo_square.png', alt: 'Lloyds Bank' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/Bupa_logo_square.png', alt: 'Bupa' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/conde_nast_logo_square.png', alt: 'Condé Nast' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/durex_logo_square.png', alt: 'Durex' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/o2_logo_square.png', alt: 'O2' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/barbour_logo_rectangle.png', alt: 'Barbour' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/best_western_square.png', alt: 'Best Western' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/choice_hotels_logo_square.png', alt: 'Choice Hotels' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/hotjar_logo_square.png', alt: 'Hotjar' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/crazy_egg_logo_square.png', alt: 'Crazy Egg' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/mindful_chef_logo_square.png', alt: 'Mindful Chef' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/elvie_logo_square.png', alt: 'Elvie' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/monica_vinader_logo_square.png', alt: 'Monica Vinader' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/mous_logo_square.png', alt: 'Mous' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/sally_beauty_logo_square.png', alt: 'Sally Beauty' },
];

export default function ChallengePage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="px-6 md:px-8 py-16 md:py-24 border-b border-neutral-200">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3, once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
            <motion.h1 
              className="text-4xl md:text-6xl font-semibold tracking-tight"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" }
                }
              }}
            >
              The first thing we&apos;ll do, is pay for ourselves, forever.
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-xl md:text-2xl text-neutral-600 leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" }
                }
              }}
            >
              You don&apos;t pay us from your pocket - you pay us from the revenue we generate. Your first winning test is free and covers our monthly fee going forward.
            </motion.p>
            
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row gap-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" }
                }
              }}
            >
              <a 
                href="#contact"
                className="inline-flex items-center justify-center h-12 px-8 rounded-full font-semibold bg-[#B9F040] text-black hover:bg-[#a0d636] transition-colors"
              >
                Take the Landing Page Challenge
              </a>
              <a 
                href="#calculator"
                className="inline-flex items-center justify-center h-12 px-8 rounded-full font-semibold border-2 border-neutral-300 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 transition-colors"
              >
                See the maths
              </a>
            </motion.div>
            
            <motion.p 
              className="mt-6 text-sm text-neutral-600"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" }
                }
              }}
            >
              <strong>Largest single-test lift to date:</strong> +116% conversion.
            </motion.p>
          </motion.div>

          {/* Graphic - Desktop Only */}
          <motion.div
            className="hidden lg:flex lg:justify-center lg:items-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3, once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src="https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/graphics/program-paid-for.png"
              alt="MRR + $17K/m Program Paid For!"
              width={400}
              height={400}
              className="w-auto h-auto max-w-md"
              priority
            />
          </motion.div>
        </div>
        </div>
      </section>

      {/* Calculator Section */}
      <SelfFundingCalculator />

      {/* Program Section */}
      <section className="px-6 md:px-8 py-16 md:py-24 border-b border-neutral-200">
        <div className="mx-auto max-w-screen-xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-4">
            The first win funds the program. Then it&apos;s pure upside.
          </h2>
          <p className="text-lg text-neutral-700 mb-8 max-w-3xl mx-auto text-center">
            Our proven four-step approach starts with a fully-refundable deposit, delivers a free winning test 
            that pays for everything, then builds a compounding growth engine that makes your business unstoppable.
          </p>
          
          {/* Mobile - Stacked */}
          <div className="md:hidden mb-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">1. Pay a one-off, fully-refundable deposit</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700 space-y-3">
                <p className="font-medium text-base text-neutral-900">
                  This secures your onboarding slot - nothing else is payable until we&apos;ve proven a 20%+ lift.
                </p>
                <p>
                  <strong>Guarantee:</strong> If the first test doesn&apos;t increase your conversion rate by at least 20%, your deposit is refunded in full. 
                  If it does (and it usually does), that single lift funds the entire program.
                </p>
              </CardContent>
            </Card>

            {/* Arrow down */}
            <div className="flex justify-center py-1">
              <svg aria-hidden="true" viewBox="0 0 32 60" className="w-8 h-12 text-[#B9F040]">
                <path 
                  d="M16 2 Q14 30 16 56 M8 48 Q12 52 16 56 Q20 52 24 48" 
                  stroke="currentColor" 
                  strokeWidth="3.5" 
                  fill="none" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">2. Free Winning Test</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700 space-y-3">
                <p className="font-medium text-base text-neutral-900">
                  A free A/B test that pays for everything - forever.
                </p>
                <p>
                  We run voice-of-customer research and launch one high-impact test on your 
                  highest-leverage page (landing page, PDP, or checkout).
                </p>
                <p>
                  <strong>The result:</strong> In most cases, this single lift generates enough 
                  recurring monthly revenue to cover our $7.5-10k fee indefinitely. Everything 
                  from here is pure upside.
                </p>
              </CardContent>
            </Card>

            {/* Arrow down */}
            <div className="flex justify-center py-1">
              <svg aria-hidden="true" viewBox="0 0 32 60" className="w-8 h-12 text-[#B9F040]">
                <path 
                  d="M16 2 Q14 30 16 56 M8 48 Q12 52 16 56 Q20 52 24 48" 
                  stroke="currentColor" 
                  strokeWidth="3.5" 
                  fill="none" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">3. Full-Funnel Testing</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700 space-y-3">
                <p className="font-medium text-base text-neutral-900">
                  Implementation of feedback systems and full-funnel optimization.
                </p>
                <p>
                  Deploy 2-4 tests per month across your entire funnel: landing pages, product pages, 
                  checkout flows, email sequences, and retention touchpoints.
                </p>
                <p>
                  <strong>The result:</strong> Every test is informed by real customer feedback and 
                  conversion science. Insights compound - each win makes the next test smarter and faster.
                </p>
              </CardContent>
            </Card>

            {/* Arrow down */}
            <div className="flex justify-center py-1">
              <svg aria-hidden="true" viewBox="0 0 32 60" className="w-8 h-12 text-[#B9F040]">
                <path 
                  d="M16 2 Q14 30 16 56 M8 48 Q12 52 16 56 Q20 52 24 48" 
                  stroke="currentColor" 
                  strokeWidth="3.5" 
                  fill="none" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">4. Growth Engine</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700 space-y-3">
                <p className="font-medium text-base text-neutral-900">
                  Bigger, faster, more profitable testing - forever.
                </p>
                <p>
                  We equip and empower your team to run intelligent, high-impact tests independently. 
                  You get a complete testing playbook, documented processes, and ongoing support.
                </p>
                <p>
                  <strong>The result:</strong> Your business and stakeholders can now run a continuous 
                  test cadence that drives compounding growth long after our engagement ends.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Desktop - 2x2 Grid with Arrows */}
          <div className="hidden md:grid grid-cols-2 gap-8 mb-8">
            {/* Row 1: Card 1 → Card 2 */}
            <Card className="border-2 relative">
              <CardHeader>
                <CardTitle className="text-xl">1. Pay a one-off, fully-refundable deposit</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700 space-y-3">
                <p className="font-medium text-base text-neutral-900">
                  This secures your onboarding slot - nothing else is payable until we&apos;ve proven a 20%+ lift.
                </p>
                <p>
                  <strong>Guarantee:</strong> If the first test doesn&apos;t increase your conversion rate by at least 20%, your deposit is refunded in full. 
                  If it does (and it usually does), that single lift funds the entire program.
                </p>
              </CardContent>
              {/* Arrow right to Card 2 */}
              <div className="absolute -right-10 top-1/2 -translate-y-1/2 z-10">
                <svg aria-hidden="true" viewBox="0 0 48 32" className="w-12 h-8 text-[#B9F040]">
                  <path 
                    d="M2 16 Q24 14 44 16 M36 8 Q40 12 44 16 Q40 20 36 24" 
                    stroke="currentColor" 
                    strokeWidth="3.5" 
                    fill="none" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Card>

            <Card className="border-2 relative">
              <CardHeader>
                <CardTitle className="text-xl">2. Free Winning Test</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700 space-y-3">
                <p className="font-medium text-base text-neutral-900">
                  A free A/B test that pays for everything - forever.
                </p>
                <p>
                  We run voice-of-customer research and launch one high-impact test on your 
                  highest-leverage page (landing page, PDP, or checkout).
                </p>
                <p>
                  <strong>The result:</strong> In most cases, this single lift generates enough 
                  recurring monthly revenue to cover our $7.5-10k fee indefinitely. Everything 
                  from here is pure upside.
                </p>
              </CardContent>
              {/* Arrow down to Card 3 */}
              <div className="absolute left-1/2 -bottom-12 -translate-x-1/2 z-10">
                <svg aria-hidden="true" viewBox="0 0 32 60" className="w-8 h-16 text-[#B9F040]">
                  <path 
                    d="M16 2 Q14 30 16 56 M8 48 Q12 52 16 56 Q20 52 24 48" 
                    stroke="currentColor" 
                    strokeWidth="3.5" 
                    fill="none" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Card>

            {/* Row 2: Card 4 ← Card 3 (reverse order) */}
            <Card className="border-2 relative">
              <CardHeader>
                <CardTitle className="text-xl">4. Growth Engine</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700 space-y-3">
                <p className="font-medium text-base text-neutral-900">
                  Bigger, faster, more profitable testing - forever.
                </p>
                <p>
                  We equip and empower your team to run intelligent, high-impact tests independently. 
                  You get a complete testing playbook, documented processes, and ongoing support.
                </p>
                <p>
                  <strong>The result:</strong> Your business and stakeholders can now run a continuous 
                  test cadence that drives compounding growth long after our engagement ends.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 relative">
              <CardHeader>
                <CardTitle className="text-xl">3. Full-Funnel Testing</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700 space-y-3">
                <p className="font-medium text-base text-neutral-900">
                  Implementation of feedback systems and full-funnel optimization.
                </p>
                <p>
                  Deploy 2-4 tests per month across your entire funnel: landing pages, product pages, 
                  checkout flows, email sequences, and retention touchpoints.
                </p>
                <p>
                  <strong>The result:</strong> Every test is informed by real customer feedback and 
                  conversion science. Insights compound - each win makes the next test smarter and faster.
                </p>
              </CardContent>
              {/* Arrow left to Card 4 */}
              <div className="absolute -left-10 top-1/2 -translate-y-1/2 z-10">
                <svg aria-hidden="true" viewBox="0 0 48 32" className="w-12 h-8 text-[#B9F040]">
                  <path 
                    d="M46 16 Q24 14 4 16 M12 8 Q8 12 4 16 Q8 20 12 24" 
                    stroke="currentColor" 
                    strokeWidth="3.5" 
                    fill="none" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Card>
          </div>
          
        </div>
      </section>

      {/* Pricing Section */}
      <PricingTableSelfFunding />

      {/* Logo Slider */}
      <LogoSlider 
        logos={featuredLogos}
        title=""
        speedMs={25000}
      />

      {/* FAQ Section */}
      <section className="px-6 md:px-8 py-16 md:py-24 bg-black">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white text-center mb-12">
            Frequently asked questions
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                How do I know it will pay for itself?
              </h3>
              <p className="text-neutral-300">
                Use the calculator above. If a 10% lift in conversion would generate more profit than our 
                monthly fee, you&apos;re a strong fit. In practice, our median lift is 15-25%, and our largest 
                single test produced a +116% improvement.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                What&apos;s the guarantee?
              </h3>
              <p className="text-neutral-300">
                One primary metric; ≥20% relative lift or you owe $0. The first winning test is included free with 
                the 6-month program to demonstrate impact before you commit to ongoing work.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                What are the traffic requirements?
              </h3>
              <p className="text-neutral-300">
                ~10k relevant sessions in 14 days (or equivalent lead volume). If you&apos;re lower traffic, 
                we can switch the primary metric to qualified-lead rate, booking rate, or another high-value 
                action, and extend test duration to reach statistical significance.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Who handles deployment?
              </h3>
              <p className="text-neutral-300">
                We can ship production-ready code and deploy directly, or if you prefer your devs handle it, 
                we hand off clean specs and implementation guidance. Either way works.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                How is data handled?
              </h3>
              <p className="text-neutral-300">
                NDA + DPA standard; we collect minimal fields (survey responses, session replays for analysis); 
                data is purged within 30 days unless otherwise agreed. Your customer data never leaves your control.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                What happens after the 6-month program?
              </h3>
              <p className="text-neutral-300">
                You can continue month-to-month with our ongoing support, run tests independently with your 
                new playbook, or do both. Many clients keep us for high-leverage tests while their team handles 
                lower-priority experiments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm 
        headline="Tell us which control to beat" 
        step0Title="Your landing page URL"
        step0Description=""
        showStep0Title={false}
        websiteUrlLabel="Landing Page URL"
      />

      <Footer />
    </main>
  )
}

