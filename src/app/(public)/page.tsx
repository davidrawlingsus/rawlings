'use client'

import { Suspense, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from './components/Header'
import Footer from './components/Footer'
import LogoSlider from './components/LogoSlider'
import RedirectGreeting from '@/components/RedirectGreeting'
import ContactForm from './components/ContactForm'
import { CheckCircle2, XCircle } from 'lucide-react'

// Logo data for trust band
const clientLogos = [
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/lloyds_bank_logo_square.png', alt: 'Lloyds Bank' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/Bupa_logo_square.png', alt: 'Bupa' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/conde_nast_logo_square.png', alt: 'Condé Nast' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/hotjar_logo_square.png', alt: 'Hotjar' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/katkin_logo_square.png', alt: 'KatKin' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/mous_logo_square.png', alt: 'Mous' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/wattbike_logo_rectangle.png', alt: 'Wattbike' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/mindful_chef_logo_square.png', alt: 'Mindful Chef' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/omlet_logo_square.png', alt: 'Omlet' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/elvie_logo_square.png', alt: 'Elvie' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/sally_beauty_logo_square.png', alt: 'Sally Beauty' },
  { src: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/monica_vinader_logo_square.png', alt: 'Monica Vinader' },
]

// Bar chart data for results section
const barData = [
  { x: 0, y: 209.794, height: 77, fill: '#F9FAF2', opacity: 0.7 },
  { x: 24, y: 206.794, height: 80, fill: '#F9FAF2', opacity: 0.7 },
  { x: 48, y: 159.794, height: 127, fill: '#F9FAF2', opacity: 0.7 },
  { x: 72, y: 211.794, height: 75, fill: '#F9FAF2', opacity: 0.7 },
  { x: 96, y: 221.794, height: 65, fill: '#F9FAF2', opacity: 0.7 },
  { x: 120, y: 230.794, height: 56, fill: '#F9FAF2', opacity: 0.7 },
  { x: 144, y: 221.794, height: 65, fill: '#F9FAF2', opacity: 0.7 },
  { x: 168, y: 211.794, height: 75, fill: '#F9FAF2', opacity: 0.7 },
  { x: 192, y: 230.794, height: 56, fill: '#F9FAF2', opacity: 0.7 },
  { x: 216, y: 159.794, height: 127, fill: '#F9FAF2', opacity: 0.7 },
  { x: 240, y: 145.794, height: 141, fill: '#F9FAF2', opacity: 0.7 },
  { x: 264, y: 130.794, height: 156, fill: '#F9FAF2', opacity: 0.7 },
  { x: 288, y: 181.794, height: 105, fill: '#F9FAF2', opacity: 0.7 },
  { x: 312, y: 195.794, height: 91, fill: '#F9FAF2', opacity: 0.7 },
  { x: 336, y: 181.794, height: 105, fill: '#F9FAF2', opacity: 0.7 },
  { x: 360, y: 170.794, height: 116, fill: '#F9FAF2', opacity: 0.7 },
  { x: 384, y: 175.794, height: 111, fill: '#F9FAF2', opacity: 0.7 },
  { x: 408, y: 170.794, height: 116, fill: '#F9FAF2', opacity: 0.7 },
  { x: 432, y: 102.794, height: 184, fill: '#B9F040', opacity: 0.8 },
  { x: 456, y: 63.7941, height: 223, fill: '#B9F040', opacity: 0.8 },
  { x: 480, y: 28.7941, height: 258, fill: '#B9F040', opacity: 0.8 },
  { x: 504, y: 23, height: 264, fill: '#B9F040', opacity: 0.8 },
  { x: 528, y: 17, height: 270, fill: '#B9F040', opacity: 0.8 },
  { x: 552, y: 13, height: 274, fill: '#B9F040', opacity: 0.8 },
  { x: 576, y: 0, height: 287, fill: '#B9F040', opacity: 0.8 },
  { x: 600, y: 0, height: 287, fill: '#B9F040', opacity: 0.8 },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
}

export default function HomePage() {
  const svgRef = useRef<SVGSVGElement>(null)
  const [isChartVisible, setIsChartVisible] = useState(false)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsChartVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )
    observer.observe(svg)
    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen">
      <Suspense fallback={null}>
        <RedirectGreeting />
      </Suspense>
      <Header />

      {/* SECTION 1: HERO */}
      <section id="hero" className="pt-12 pb-16 md:pt-20 md:pb-24 bg-black">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-[60%_40%] gap-12 items-center">
            {/* Left Copy */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3, once: true }}
              variants={staggerContainer}
            >
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white"
                variants={fadeInUp}
              >
                Finally, you can <span className="text-[#B9F040]">fire your Facebook agency.</span>
              </motion.h1>
              
              <motion.p 
                className="mt-6 text-lg md:text-xl text-neutral-300 leading-relaxed"
                variants={fadeInUp}
              >
                Your customers already wrote your best ads. They&apos;re sitting in surveys, spreadsheets and support tickets while your agency bills $10K/month to recycle the same three hooks they used on everyone else.
              </motion.p>
              
              <motion.p 
                className="mt-4 text-lg font-semibold text-white"
                variants={fadeInUp}
              >
                Here&apos;s the thing...
              </motion.p>
              
              <motion.p 
                className="mt-2 text-lg text-neutral-300 leading-relaxed"
                variants={fadeInUp}
              >
                Marketably turns that buried feedback into ad concepts that beat your current ads by 40%+ on ROAS, CPA, or profit.
              </motion.p>
              
              <motion.p 
                className="mt-4 text-lg font-semibold text-white"
                variants={fadeInUp}
              >
                How?
              </motion.p>
              
              <motion.p 
                className="mt-2 text-lg text-neutral-300 leading-relaxed"
                variants={fadeInUp}
              >
                We extract buying motives from your customer data, then filter them through an ad framework built on 100+ million Facebook posts.
              </motion.p>
              
              <motion.p 
                className="mt-4 text-lg text-neutral-300 leading-relaxed"
                variants={fadeInUp}
              >
                So while your agency is still guessing and running ads that bomb, we turn your buried customer insights into concepts that SMASH IT in 14 days or less.
              </motion.p>
              
              <motion.div 
                className="mt-8 flex flex-col sm:flex-row items-start gap-4"
                variants={fadeInUp}
              >
                <a 
                  href="#apply"
                  className="h-14 px-8 rounded-lg font-semibold bg-[#B9F040] text-black hover:bg-[#a0d636] transition-colors flex items-center justify-center text-lg"
                >
                  Run Your Best Ads Ever
                </a>
                <a 
                  href="#pricing"
                  className="h-14 px-4 text-neutral-400 hover:text-white transition-colors flex items-center justify-center text-sm"
                >
                  See our guarantee →
                </a>
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div 
              className="hidden md:flex justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ amount: 0.3, once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/replacement%20hero%20girl%20v3.png"
                alt="Marketably transforms customer feedback into ads"
                width={462}
                height={550}
                className="object-contain"
                style={{ width: 'auto', height: 'auto' }}
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: LOGO BAND / TRUST SIGNALS */}
      <section className="border-y border-neutral-800 bg-black">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-6">
          <p className="text-center text-neutral-400 mb-2">
            Trusted by brands who stopped guessing and started winning.
          </p>
        </div>
        <LogoSlider logos={clientLogos} speedMs={30000} title="" />
      </section>

      {/* SECTION 3: THE PROBLEM (Black background) */}
      <section id="problem" className="bg-black py-16 md:py-24 scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
            variants={staggerContainer}
          >
            <motion.p 
              className="text-sm uppercase tracking-widest text-[#B9F040] mb-4 font-semibold"
              variants={fadeInUp}
            >
              Here&apos;s what you&apos;re actually paying your agency for...
            </motion.p>
            
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12"
              variants={fadeInUp}
            >
              $10K/month for ads that sound exactly like everyone else&apos;s.
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <motion.div variants={fadeInUp}>
                <h3 className="text-xl font-semibold text-[#B9F040] mb-3">They&apos;re juggling 10+ clients</h3>
                <p className="text-neutral-300">
                  Your &ldquo;dedicated strategist&rdquo; spent 45 minutes on your account this month. The rest went to their other clients. That&apos;s why every brand gets the same hooks with different logos.
                </p>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <h3 className="text-xl font-semibold text-[#B9F040] mb-3">They never read your customer data</h3>
                <p className="text-neutral-300">
                  You sent them surveys. Reviews. Interview transcripts. They skimmed the first page, stole some phrases, and called it &ldquo;Voice of Customer research.&rdquo; Then they went back to their swipe file.
                </p>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <h3 className="text-xl font-semibold text-[#B9F040] mb-3">They bill you for testing... that never happens</h3>
                <p className="text-neutral-300">
                  &ldquo;We&apos;ll test 15 concepts this month!&rdquo; Then they ship 3 variations of the same ad with different images. And charge you $12K for the privilege.
                </p>
              </motion.div>
            </div>
            
            <motion.p 
              className="mt-12 text-xl text-neutral-400 text-center"
              variants={fadeInUp}
            >
              You&apos;ve been paying for strategy, but getting recycled guesswork.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: THE SOLUTION */}
      <section id="how-it-works" className="py-16 md:py-24 scroll-mt-20 bg-neutral-900">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
            variants={staggerContainer}
          >
            <motion.p 
              className="text-sm uppercase tracking-widest text-[#B9F040] mb-4 font-semibold"
              variants={fadeInUp}
            >
              There&apos;s a better way.
            </motion.p>
            
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white"
              variants={fadeInUp}
            >
              Turn Voice of Customer into ads that actually convert.
            </motion.h2>
            
            <motion.p 
              className="text-xl text-neutral-400 mb-16 max-w-3xl"
              variants={fadeInUp}
            >
              Marketably bridges the gap between what your customers say and what you ship in your ad account.
            </motion.p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Step 1 */}
              <motion.div 
                className="relative p-8 rounded-2xl border border-neutral-800 bg-neutral-800"
                variants={fadeInUp}
              >
                <div className="w-12 h-12 rounded-full bg-[#B9F040] flex items-center justify-center text-black font-bold text-xl mb-6">1</div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Ingest</h3>
                <p className="text-neutral-300 mb-4">Upload your customer research:</p>
                <ul className="space-y-2 text-neutral-300">
                  <li>• Survey responses</li>
                  <li>• Review data</li>
                  <li>• Support tickets</li>
                  <li>• Interview transcripts</li>
                  <li>• Any voice-of-customer source</li>
                  <li className="text-[#B9F040] italic">• No VoC yet? We&apos;ll help you get it</li>
                </ul>
              </motion.div>
              
              {/* Step 2 */}
              <motion.div 
                className="relative p-8 rounded-2xl border border-neutral-800 bg-neutral-800"
                variants={fadeInUp}
              >
                <div className="w-12 h-12 rounded-full bg-[#B9F040] flex items-center justify-center text-black font-bold text-xl mb-6">2</div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Analyze</h3>
                <p className="text-neutral-300 mb-4">Our engine identifies:</p>
                <ul className="space-y-2 text-neutral-300">
                  <li>• High-signal language patterns</li>
                  <li>• Emotional trigger points</li>
                  <li>• Job-to-be-done frameworks</li>
                  <li>• Objections and anxieties</li>
                  <li>• Motivation clusters</li>
                </ul>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div 
                className="relative p-8 rounded-2xl border border-neutral-800 bg-neutral-800"
                variants={fadeInUp}
              >
                <div className="w-12 h-12 rounded-full bg-[#B9F040] flex items-center justify-center text-black font-bold text-xl mb-6">3</div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Formulate</h3>
                <p className="text-neutral-300 mb-4">This is where we beat agencies:</p>
                <p className="text-neutral-300 mb-4">We run your customer insights through an ad construction framework built on research analyzing 100+ million Facebook posts.</p>
                <p className="text-neutral-300 mb-2">It knows:</p>
                <ul className="space-y-2 text-neutral-300">
                  <li>• Which emotional hooks stop scrolls (not which sound clever)</li>
                  <li>• Which proof patterns trigger purchases (not which win awards)</li>
                  <li>• Which benefit structures convert (not which feel on-brand)</li>
                </ul>
                <p className="text-[#B9F040] font-semibold mt-4">Your agency has their last 10 clients as reference. We have 100+ million posts.</p>
              </motion.div>
              
              {/* Step 4 */}
              <motion.div 
                className="relative p-8 rounded-2xl border border-neutral-800 bg-neutral-800"
                variants={fadeInUp}
              >
                <div className="w-12 h-12 rounded-full bg-[#B9F040] flex items-center justify-center text-black font-bold text-xl mb-6">4</div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Generate</h3>
                <p className="text-neutral-300 mb-4">You get ready-to-test ad concepts:</p>
                <ul className="space-y-2 text-neutral-300">
                  <li>• 10 Facebook ad variations</li>
                  <li>• Hooks in customer language</li>
                  <li>• Primary text and headlines optimized for thumb-stopping readability</li>
                  <li>• Image/video creative prompts</li>
                  <li>• Testing prioritization based on proven patterns</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4B: WHY THIS WORKS */}
      <section className="py-16 md:py-24 bg-black">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-white"
              variants={fadeInUp}
            >
              Why agencies can&apos;t do this (and we can)
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <motion.div variants={fadeInUp}>
                <h3 className="text-xl font-semibold text-[#B9F040] mb-3">They&apos;re learning on your dime.</h3>
                <p className="text-neutral-300">
                  Your agency treats every client like a blank slate. They spend 3-6 months &ldquo;getting to know your brand,&rdquo; testing random concepts, burning your budget to figure out what works.
                </p>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <h3 className="text-xl font-semibold text-[#B9F040] mb-3">We&apos;ve already done the work.</h3>
                <p className="text-neutral-300">
                  We spent 10 years mastering VoC across 49 brands and hundreds of millions in revenue. Then we built our system on research analyzing 100+ million Facebook posts - so we know which ad patterns convert before we touch your data.
                </p>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <h3 className="text-xl font-semibold text-[#B9F040] mb-3">You get the shortcuts without the tuition.</h3>
                <p className="text-neutral-300">
                  What took us a decade to learn - and what took researchers 100+ million posts to discover - gets applied to your brand in 14 days. That&apos;s the entire value proposition.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: PROOF / RESULTS (Black background with green accent) */}
      <section id="results" className="bg-black py-16 md:py-24 scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
            variants={staggerContainer}
          >
            <motion.p 
              className="text-sm uppercase tracking-widest text-neutral-400 mb-4"
              variants={fadeInUp}
            >
              The results speak for themselves.
            </motion.p>
            
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-16"
              variants={fadeInUp}
            >
              Ads that sound like your customers <span className="text-[#B9F040]">perform like nothing else</span>.
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Stats */}
              <motion.div className="space-y-8" variants={fadeInUp}>
                <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800">
                  <p className="text-4xl md:text-5xl font-bold text-[#B9F040] mb-2">+243%</p>
                  <p className="text-xl text-white font-medium">improvement in ad set profitability</p>
                  <p className="text-neutral-400 mt-2">Across campaigns using VoC-driven concepts vs. the &ldquo;custom strategy&rdquo; your agency shipped</p>
                </div>
                
                <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800">
                  <p className="text-4xl md:text-5xl font-bold text-[#B9F040] mb-2">$180K</p>
                  <p className="text-xl text-white font-medium">saved in agency fees</p>
                  <p className="text-neutral-400 mt-2">One test replaced 6 months of them telling you to &ldquo;test more creative&rdquo;</p>
                </div>
                
                <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800">
                  <p className="text-4xl md:text-5xl font-bold text-[#B9F040] mb-2">67%</p>
                  <p className="text-xl text-white font-medium">faster concept validation</p>
                  <p className="text-neutral-400 mt-2">Because we&apos;re not waiting for your account manager to respond to Slack messages</p>
                </div>
              </motion.div>
              
              {/* Chart */}
              <motion.div 
                className="flex flex-col items-center"
                variants={fadeInUp}
              >
                <svg ref={svgRef} viewBox="0 0 614 287" className="w-full max-w-md h-auto" role="img">
                  <title>Growth Rate Chart</title>
                  {barData.map((bar, index) => (
                    <rect
                      key={index}
                      x={bar.x}
                      y={bar.y}
                      width="17.25"
                      height={bar.height}
                      rx="3"
                      fill={bar.fill}
                      fillOpacity={bar.opacity}
                      style={{
                        opacity: isChartVisible ? 1 : 0,
                        transition: `opacity 0.4s ease-out ${index * 0.05}s`
                      }}
                    />
                  ))}
                </svg>
                <div className="mt-4 text-sm flex items-center gap-2 text-white">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#B9F040]"></span>
                  Growth Rate with VoC-driven ads
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS */}
      <section className="py-16 md:py-24 bg-neutral-900">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
            variants={staggerContainer}
          >
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div 
                className="p-8 rounded-2xl bg-neutral-800 border border-neutral-700"
                variants={fadeInUp}
              >
                <p className="text-2xl md:text-3xl font-semibold text-white mb-8">
                  &ldquo;A huge impact on the business.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-neutral-700 flex items-center justify-center">
                    <Image
                      src="https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/katkin_logo_square.png"
                      alt="KatKin"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Jim Warren</p>
                    <p className="text-sm text-neutral-400">KatKin &amp; Mous</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="p-8 rounded-2xl bg-neutral-800 border border-neutral-700"
                variants={fadeInUp}
              >
                <p className="text-2xl md:text-3xl font-semibold text-white mb-8">
                  &ldquo;Logical, pragmatic, and guided by data.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-neutral-700 flex items-center justify-center">
                    <Image
                      src="https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/mous_logo_square.png"
                      alt="Mous"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Richard Kessell</p>
                    <p className="text-sm text-neutral-400">Mous</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="p-8 rounded-2xl bg-neutral-800 border border-neutral-700"
                variants={fadeInUp}
              >
                <p className="text-2xl md:text-3xl font-semibold text-white mb-8">
                  &ldquo;Our most successful Facebook campaign ever.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-neutral-700 flex items-center justify-center">
                    <Image
                      src="https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/wattbike_logo_rectangle.png"
                      alt="Wattbike"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Duncan Bradley</p>
                    <p className="text-sm text-neutral-400">Wattbike</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7: THE OFFER */}
      <section id="offer" className="py-16 md:py-24 scroll-mt-20 bg-black">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.p 
              className="text-sm uppercase tracking-widest text-[#B9F040] mb-4 font-semibold"
              variants={fadeInUp}
            >
              How it works
            </motion.p>
            
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
              variants={fadeInUp}
            >
              Put Us to the Test.
            </motion.h2>
            
            <motion.div 
              className="text-lg text-neutral-400 mb-12"
              variants={fadeInUp}
            >
              <p>This is not software access. This is not generic AI copy.</p>
              <p className="mt-4 text-xl font-medium text-white">This is a 14-day test: our ad concepts vs. whatever you&apos;re running now.</p>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h3 
              className="text-2xl font-semibold mb-4 text-white"
              variants={fadeInUp}
            >
              The setup:
            </motion.h3>
            
            <motion.p 
              className="text-lg text-neutral-300 mb-6"
              variants={fadeInUp}
            >
              We mine your Voice of Customer data for 10 ad concepts. You run them head-to-head against your current ads (or your agency&apos;s latest work).
            </motion.p>
            
            <motion.div 
              className="mb-8 p-6 bg-neutral-900 rounded-xl border border-neutral-800"
              variants={fadeInUp}
            >
              <p className="text-lg font-semibold text-white mb-4">We win if we beat your control by 40%+ on:</p>
              <ul className="space-y-2 text-lg text-neutral-300 mb-4">
                <li><strong>ROAS</strong> (more revenue per dollar spent)</li>
                <li><strong>CPA</strong> (cheaper customers)</li>
                <li><strong>Profit per customer</strong> (more money in your account)</li>
              </ul>
              <p className="text-lg font-medium text-[#B9F040]">You only need to win on ONE of these metrics to make this test worth 10x what you paid.</p>
            </motion.div>
            
            <motion.h3 
              className="text-2xl font-semibold mb-6 text-white"
              variants={fadeInUp}
            >
              What you get:
            </motion.h3>
            
            <motion.ul className="space-y-4 mb-8" variants={fadeInUp}>
              {[
                '10 ad concepts built from your actual customer language',
                'Hooks that stop scrolls (not agency boilerplate)',
                'Complete ad copy, headlines, and angle variations',
                'Image and video creative prompts',
                'A/B test structure: what to test, what to kill, what to scale',
                'Our prediction for which concepts will demolish your current ads (and why)',
                'Psychological breakdown of why each concept works',
                'Loom walkthrough of how to deploy and read the data',
              ].map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#B9F040] flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-neutral-300">{item}</span>
                </li>
              ))}
            </motion.ul>
            
            <motion.div 
              className="mb-8 p-6 bg-neutral-900 rounded-xl border border-[#B9F040]/30"
              variants={fadeInUp}
            >
              <h4 className="text-xl font-semibold text-white mb-4">Here&apos;s what makes this different:</h4>
              <p className="text-lg text-neutral-300 mb-3">
                Your agency spends 3 months &ldquo;learning your brand.&rdquo; We spent 10 years learning customer language patterns across 300+ brands.
              </p>
              <p className="text-lg text-neutral-300 mb-3">
                They&apos;re starting from zero every time. You&apos;re getting a decade of pattern recognition applied to your data in 14 days.
              </p>
              <p className="text-lg font-semibold text-[#B9F040]">That&apos;s our edge.</p>
            </motion.div>
            
            <motion.div 
              className="mb-8 p-6 bg-neutral-900 rounded-xl border border-neutral-800"
              variants={fadeInUp}
            >
              <p className="text-neutral-300 mb-2"><strong className="text-white">Already running ads?</strong> We&apos;ll test against your best performers.</p>
              <p className="text-neutral-300"><strong className="text-white">Starting from scratch?</strong> We&apos;ll build your first campaigns with proper test structure baked in.</p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-[#B9F040]/10 rounded-xl border-2 border-[#B9F040]"
              variants={fadeInUp}
            >
              <p className="text-xl font-semibold text-white mb-3">The deal: Our concepts beat your current ads in 14 days, or you get your money back. No questions asked.</p>
              <p className="text-lg text-neutral-300">We&apos;re so confident in this process, we&apos;ll refund every penny if you&apos;re unhappy for any reason. Your agency won&apos;t do that. Because they can&apos;t.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 8: PRICING */}
      <section id="pricing" className="py-16 md:py-24 bg-neutral-900 scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
            variants={staggerContainer}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-8 text-white"
              variants={fadeInUp}
            >
              Full refund if we don&apos;t beat your current ads. Here&apos;s why we&apos;re so confident:
            </motion.h2>
            
            <motion.div variants={fadeInUp}>
              <p className="text-5xl md:text-6xl font-bold text-[#B9F040]">14-Day Test: Starting at $2,500</p>
            </motion.div>
            
            <motion.div 
              className="mt-8 text-lg text-neutral-300 text-left max-w-xl mx-auto space-y-4"
              variants={fadeInUp}
            >
              <p>
                We spent a decade mastering Voice of Customer research for 49 brands - generating hundreds of millions in revenue through conversion optimization.
              </p>
              <p>
                The entire time, we watched those same brands hand their customer insights to agencies... who&apos;d ignore them and ship recycled hooks instead.
              </p>
              <p>
                So we built a system that does what agencies won&apos;t: filters your customer language through an ad construction framework built on research analyzing 100+ million Facebook posts.
              </p>
              <p className="text-xl font-semibold text-white">
                Your agency is guessing based on their last 10 clients. We&apos;re building on patterns from 100+ million posts.
              </p>
            </motion.div>
            
            {/* You get vs They get comparison */}
            <motion.div 
              className="mt-10 grid md:grid-cols-2 gap-6 text-left"
              variants={fadeInUp}
            >
              <div className="p-6 bg-[#B9F040]/10 rounded-xl border border-[#B9F040]/30">
                <p className="text-lg font-bold text-[#B9F040] mb-4">With us:</p>
                <ul className="space-y-2 text-neutral-300">
                  <li>• Your customer language filtered through research on 100+ million Facebook posts</li>
                  <li>• 10 concepts ready to test in 14 days</li>
                  <li>• Full refund if we don&apos;t beat your current ads</li>
                </ul>
              </div>
              
              <div className="p-6 bg-neutral-800 rounded-xl border border-neutral-700">
                <p className="text-lg font-bold text-neutral-400 mb-4">With them:</p>
                <ul className="space-y-2 text-neutral-400">
                  <li>• Generic hooks based on their last 10 clients</li>
                  <li>• 3 months of &ldquo;learning your brand&rdquo; before they get any real traction</li>
                  <li>• Locked into % of ad spend (so they win even when you lose)</li>
                </ul>
              </div>
            </motion.div>
            
            <motion.p 
              className="mt-8 text-xl font-bold text-[#B9F040]"
              variants={fadeInUp}
            >
              And if it doesn&apos;t work? You pay nothing.
            </motion.p>
            
            <motion.div 
              className="mt-8 text-neutral-400"
              variants={fadeInUp}
            >
              <p className="font-semibold text-white mb-2">Final cost depends on:</p>
              <ul className="space-y-1">
                <li>• Volume of existing customer data</li>
                <li>• Hands-on support required</li>
                <li>• Whether active campaigns exist</li>
              </ul>
            </motion.div>
            
            <motion.div className="mt-10" variants={fadeInUp}>
              <a 
                href="#apply"
                className="inline-flex h-14 px-8 rounded-lg font-semibold bg-[#B9F040] text-black hover:bg-[#a0d636] transition-colors items-center justify-center text-lg"
              >
                Start Your Test →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 9: FUTURE VALUE ANCHOR */}
      <section className="py-16 md:py-24 bg-black">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              variants={fadeInUp}
            >
              What happens after the test?
            </motion.h2>
            
            <motion.p 
              className="text-xl text-neutral-300 mb-8"
              variants={fadeInUp}
            >
              Most teams continue with Marketably as an ongoing creative intelligence layer - because once you&apos;ve seen what a decade of pattern recognition looks like, going back to agency guesswork feels insane.
            </motion.p>
            
            <motion.div variants={fadeInUp}>
              <p className="text-lg text-neutral-400 mb-4">Typical next step includes:</p>
              <ul className="space-y-2 text-lg text-neutral-300">
                <li>• Monthly ad concept generation</li>
                <li>• Continuous VoC ingestion and analysis</li>
                <li>• Iteration based on live campaign performance</li>
                <li>• Expansion into landing pages, email, and SEO copy. (Our method will deliver wins across your marketing mix)</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="mt-10 p-6 bg-neutral-900 rounded-xl border border-neutral-800"
              variants={fadeInUp}
            >
              <p className="text-xl font-semibold text-white mb-2">
                Ongoing engagements typically range from $3,000-$7,000/month
              </p>
              <p className="text-neutral-400">depending on scope and ad spend.</p>
            </motion.div>
            
            <motion.p 
              className="mt-6 text-lg text-neutral-400"
              variants={fadeInUp}
            >
              The test lets you experience the value before committing.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 10: QUALIFICATION (Black background) */}
      <section className="bg-black py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
              variants={fadeInUp}
            >
              Is Marketably right for you?
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div 
                className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-semibold text-[#B9F040] mb-6">This IS for you if:</h3>
                <ul className="space-y-4">
                  {[
                    'You\'re spending $8K-15K/month on a Facebook agency',
                    'Your "custom strategy" looks identical to their other clients',
                    'You\'ve sent them customer research they never actually read',
                    'You\'re tired of paying for "testing" that never materializes',
                    'You want ads that sound like customers, not a 26-year-old\'s LinkedIn caption',
                    'You want to try this without risk (we offer a full money-back guarantee)',
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#B9F040] flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-semibold text-neutral-400 mb-6">This is NOT for you if:</h3>
                <ul className="space-y-4">
                  {[
                    'You\'re happy with your agency (keep them!)',
                    'You trust your instincts more than your customer data',
                    'You\'re not ready to test concepts in live campaigns',
                    'You care more about "sounding on-brand" than making money',
                    'You need weekly sync calls to feel like you\'re getting value',
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3 items-start">
                      <XCircle className="w-5 h-5 text-neutral-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 11: FOUNDER STORY */}
      <section id="about" className="py-16 md:py-24 bg-neutral-900 scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
            variants={staggerContainer}
          >
            <motion.p 
              className="text-sm uppercase tracking-widest text-[#B9F040] mb-4 font-semibold"
              variants={fadeInUp}
            >
              The Story Behind Marketably
            </motion.p>
            
            <div className="grid md:grid-cols-[200px_1fr] gap-12 items-start">
              <motion.div 
                className="flex justify-center md:justify-start"
                variants={fadeInUp}
              >
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#B9F040]/50">
                  <Image
                    src="https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/team/david-rawlings.jpg"
                    alt="David Rawlings, Founder"
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  I built this because I was tired of watching killer insights die in forgotten slide-decks.
                </h2>
                
                <div className="space-y-6 text-lg text-neutral-300">
                  <p>
                    I&apos;m David Rawlings, and I&apos;ve spent over a decade running growth for brands that actually had to make their numbers.
                  </p>
                  <p>
                    The pattern was always the same: teams would run surveys, collect reviews, talk to customers, then turn around and ship ads that sounded nothing like what they&apos;d just learned.
                  </p>
                  <p>
                    The gap between <strong className="text-white">knowing</strong> and <strong className="text-white">doing</strong> was killing performance.
                  </p>
                  <p>
                    So I built Marketably to close it. Not as another analytics dashboard. Not as a copywriting tool. As an <strong className="text-white">execution layer</strong> that turns Voice of Customer into concepts you can actually test tomorrow.
                  </p>
                </div>
                
                <div className="mt-8">
                  <a 
                    href="#apply"
                    className="inline-flex h-12 px-6 rounded-lg font-semibold bg-[#B9F040] text-black hover:bg-[#a0d636] transition-colors items-center justify-center"
                  >
                    See what it can do for your brand →
                  </a>
                </div>
                
                <div className="mt-10 grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-4xl font-bold text-[#B9F040]">49+</p>
                    <p className="text-neutral-400">brands helped</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-[#B9F040]">$12M+</p>
                    <p className="text-neutral-400">in ad spend analyzed</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 12: FINAL CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#1A2B3C] to-[#0F1B28]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              variants={fadeInUp}
            >
              Ready to stop paying for recycled hooks and AI slop?
            </motion.h2>
            
            <motion.p 
              className="text-xl text-neutral-300 mb-4"
              variants={fadeInUp}
            >
              Let&apos;s turn what your customers said into ads that actually convert.
            </motion.p>
            
            <motion.p 
              className="text-lg font-semibold text-[#B9F040] mb-10"
              variants={fadeInUp}
            >
              Risk-free test. Full refund if we don&apos;t beat your current ads.
            </motion.p>
            
            <motion.div className="flex flex-col items-center gap-4" variants={fadeInUp}>
              <a 
                href="#apply"
                className="inline-flex h-14 px-10 rounded-lg font-semibold bg-[#B9F040] text-black hover:bg-[#a0d636] transition-colors items-center justify-center text-lg"
              >
                Fire Your Agency (Or Make Them Look Good) →
              </a>
              <a 
                href="#results"
                className="text-neutral-400 hover:text-white transition-colors underline underline-offset-4"
              >
                Not ready yet? See what concepts look like first →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 14: CONTACT FORM */}
      <div id="apply" className="scroll-mt-20">
        <ContactForm 
          headline="<span class='text-[#B9F040]'>Run your best ads ever:</span> Launched in 2 days, proven in 2 weeks. Guaranteed." 
          step0Title="Your brand"
          step0Description="Tell us about your business"
          showStep0Title={true}
          websiteUrlLabel="Website URL"
        />
      </div>

      <Footer />
    </main>
  )
}
