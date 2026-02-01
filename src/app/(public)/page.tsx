'use client'

import { Suspense } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from './components/Header'
import Footer from './components/Footer'
import LogoSlider from './components/LogoSlider'
import RedirectGreeting from '@/components/RedirectGreeting'
import ContactForm from './components/ContactForm'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

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
  return (
    <main className="min-h-screen">
      <Suspense fallback={null}>
        <RedirectGreeting />
      </Suspense>
      <Header />

      {/* HERO SECTION */}
      <section id="hero" className="pt-12 pb-16 md:pt-20 md:pb-24 bg-black">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1, once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.p 
              className="text-sm uppercase tracking-widest text-[#B9F040] mb-6 font-semibold"
              variants={fadeInUp}
            >
              For DTC brands spending $10K+/month on Facebook ads
            </motion.p>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white"
              variants={fadeInUp}
            >
              Your Facebook Ads Are Bleeding <span className="text-[#B9F040]">30% More Budget</span> Than They Should
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-xl md:text-2xl text-neutral-300 leading-relaxed"
              variants={fadeInUp}
            >
              Here&apos;s the gap that&apos;s costing you $15K every month - and how you can close it in 72 hours
            </motion.p>
            
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
              variants={fadeInUp}
            >
              <a 
                href="#apply"
                className="h-14 px-8 rounded-lg font-semibold bg-[#B9F040] text-black hover:bg-[#a0d636] transition-colors flex items-center justify-center text-lg"
              >
                Fix Your Expensive Ads in 72 Hours
              </a>
              <a 
                href="#case-studies"
                className="h-14 px-6 text-neutral-300 hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                See The Proof <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* OPENING SECTION */}
      <section className="py-16 md:py-24 bg-neutral-900">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1, once: true }}
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8"
              variants={fadeInUp}
            >
              Here&apos;s what&apos;s killing your ads.
            </motion.h2>
            
            <motion.div className="space-y-6 text-lg text-neutral-300" variants={fadeInUp}>
              <p>
                Every month, you&apos;re paying $15,000 more for customers than you need to. Not because your product is wrong. Not because your creative is ugly.
              </p>
              <p>
                But because your ads sound like they came from a boardroom instead of your customers&apos; actual conversations.
              </p>
              <p>
                Look - your customers are in your inbox right now, telling you exactly what made them buy. They&apos;re in your reviews. Your support tickets. Your post-purchase surveys. They&apos;re literally handing you the words that convert.
              </p>
              <p>
                But somehow, by the time those insights reach your Facebook ads... they&apos;ve been translated into brand-speak that makes your customers scroll right past you to your competitor who&apos;s speaking their language.
              </p>
              <p className="text-xl font-semibold text-white">
                That gap is expensive.
              </p>
            </motion.div>
            
            {/* THE MATH */}
            <motion.div 
              className="mt-12 p-8 rounded-2xl bg-black border border-neutral-800"
              variants={fadeInUp}
            >
              <h3 className="text-sm uppercase tracking-widest text-[#B9F040] mb-6 font-semibold">
                The Math
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                  <span className="text-neutral-400">Monthly ad spend</span>
                  <span className="text-xl font-semibold text-white">$50,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                  <span className="text-neutral-400">CPA penalty from misaligned messaging</span>
                  <span className="text-xl font-semibold text-white">30%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                  <span className="text-neutral-400">Monthly waste</span>
                  <span className="text-xl font-semibold text-red-400">$15,000</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-neutral-400">Burned per year</span>
                  <span className="text-2xl font-bold text-red-400">$180,000</span>
                </div>
              </div>
              <p className="mt-6 text-neutral-400 text-center italic">
                Because your ads sound like your brand guidelines instead of your customers.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* THE GAP SECTION - Case Studies */}
      <section id="case-studies" className="py-16 md:py-24 bg-black scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1, once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
              variants={fadeInUp}
            >
              Here&apos;s What That Gap Looks Like
            </motion.h2>
            
            <motion.p 
              className="text-xl text-neutral-400 mb-16 max-w-3xl"
              variants={fadeInUp}
            >
              You know that disconnect where your customers are living in one reality, and your ads are describing a completely different universe? Let me show you what I mean.
            </motion.p>

            {/* WATTBIKE Case Study */}
            <motion.div 
              className="mb-16 p-8 md:p-12 rounded-2xl bg-neutral-900 border border-neutral-800"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-neutral-800 flex items-center justify-center">
                  <Image
                    src="https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/wattbike_logo_rectangle.png"
                    alt="Wattbike"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">WATTBIKE</h3>
                  <p className="text-[#B9F040] font-semibold">The Longest-Running Ad They&apos;ve Ever Had</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-neutral-400 mb-3">The Crisis</h4>
                  <p className="text-neutral-300 mb-6">
                    Wattbike was dying on Facebook. Every ad they ran screamed &ldquo;premium indoor cycling experience.&rdquo; Elegant. On-brand. Completely ineffective.
                  </p>
                  
                  <h4 className="text-lg font-semibold text-neutral-400 mb-3">The Discovery</h4>
                  <p className="text-neutral-300">
                    We dug through their customer surveys and found something wild: 22% of their buyers weren&apos;t looking for &ldquo;premium indoor cycling.&rdquo;
                  </p>
                  <p className="text-neutral-300 mt-3">
                    They were escaping <span className="text-white font-semibold">&ldquo;turbo trainer faff&rdquo;</span> - broken tech that doesn&apos;t work, road bikes getting wrecked, and wasted Saturday mornings fighting with equipment.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-neutral-400 mb-3">The Moment</h4>
                  <p className="text-neutral-300 mb-6">
                    We wrote one ad using those exact three words: <span className="text-[#B9F040] font-semibold">&ldquo;Done with turbo trainer faff?&rdquo;</span>
                  </p>
                  
                  <h4 className="text-lg font-semibold text-neutral-400 mb-3">The Result</h4>
                  <div className="p-6 rounded-xl bg-black border border-[#B9F040]/30">
                    <p className="text-xl font-bold text-white mb-2">
                      That ad became the longest-running, highest-performing ad in company history.
                    </p>
                    <p className="text-neutral-400">
                      Not because we got creative. Because we got specific.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* LIFORME Case Study */}
            <motion.div 
              className="mb-16 p-8 md:p-12 rounded-2xl bg-neutral-900 border border-neutral-800"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-neutral-800 flex items-center justify-center text-2xl font-bold text-white">
                  L
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">LIFORME</h3>
                  <p className="text-[#B9F040] font-semibold">90% New Customer Acquisition Spike</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-neutral-400 mb-3">The Crisis</h4>
                  <p className="text-neutral-300 mb-6">
                    Liforme was calling themselves &ldquo;premium yoga mats for serious practitioners.&rdquo; Sounds great in a brand deck, right? But their CPAs were climbing and their agency kept delivering variations of the same positioning.
                  </p>
                  
                  <h4 className="text-lg font-semibold text-neutral-400 mb-3">The Discovery</h4>
                  <p className="text-neutral-300">
                    When we dug through their customer feedback, we found the real reason people were buying. It wasn&apos;t about &ldquo;premium quality.&rdquo;
                  </p>
                  <p className="text-neutral-300 mt-3">
                    It was about <span className="text-white font-semibold">fear</span>: &ldquo;I was terrified of slipping on my sweaty mat and hurting myself. I was always holding back, never progressing.&rdquo;
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-neutral-400 mb-3">The Moment</h4>
                  <p className="text-neutral-300 mb-6">
                    We shifted from talking about premium materials to talking about the fear of injury. From &ldquo;quality you can feel&rdquo; to <span className="text-[#B9F040] font-semibold">&ldquo;finally safe to push yourself.&rdquo;</span>
                  </p>
                  
                  <h4 className="text-lg font-semibold text-neutral-400 mb-3">The Result</h4>
                  <div className="p-6 rounded-xl bg-black border border-[#B9F040]/30 space-y-2">
                    <p className="text-xl font-bold text-[#B9F040]">+30% website sales year-over-year</p>
                    <p className="text-xl font-bold text-[#B9F040]">+90% new customer acquisition</p>
                    <p className="text-sm text-neutral-400">(85% in a single month)</p>
                    <p className="text-xl font-bold text-[#B9F040]">+100% organic traffic growth</p>
                    <p className="text-neutral-400 mt-4">
                      All from speaking to what customers were actually afraid of instead of what the brand wanted to say.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* KATKIN Case Study */}
            <motion.div 
              className="p-8 md:p-12 rounded-2xl bg-neutral-900 border border-neutral-800"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-neutral-800 flex items-center justify-center">
                  <Image
                    src="https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/katkin_logo_square.png"
                    alt="KatKin"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">KATKIN</h3>
                  <p className="text-[#B9F040] font-semibold">113% Conversion Lift → New Funding Round</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-neutral-400 mb-3">The Crisis</h4>
                  <p className="text-neutral-300 mb-6">
                    KatKin was stuck positioning themselves as &ldquo;premium, human-grade cat food.&rdquo; Meanwhile, their Facebook ads were getting crushed by competitors with worse products but better messaging.
                  </p>
                  
                  <h4 className="text-lg font-semibold text-neutral-400 mb-3">The Discovery</h4>
                  <p className="text-neutral-300">
                    We found something in their customer reviews that changed everything.
                  </p>
                  <p className="text-neutral-300 mt-3">
                    Most of their loyal customers didn&apos;t buy KatKin because they wanted &ldquo;premium meals&rdquo; for their cats. They bought because their cats were <span className="text-white font-semibold">sick</span> - &ldquo;constant vomiting, stinking litter box, miserable for years.&rdquo;
                  </p>
                  <p className="text-neutral-300 mt-3">
                    KatKin wasn&apos;t selling premium cat food. They were delivering <span className="text-white font-semibold">miracle turnarounds</span>. Two weeks on KatKin and cats were different animals.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-neutral-400 mb-3">The Moment</h4>
                  <p className="text-neutral-300 mb-6">
                    We wrote ads using those exact words: <span className="text-[#B9F040] font-semibold">&ldquo;My cat was sick for years. Two weeks on KatKin and she&apos;s a different cat.&rdquo;</span>
                  </p>
                  
                  <h4 className="text-lg font-semibold text-neutral-400 mb-3">The Result</h4>
                  <div className="p-6 rounded-xl bg-black border border-[#B9F040]/30 space-y-2">
                    <p className="text-xl font-bold text-[#B9F040]">113% conversion lift</p>
                    <p className="text-xl font-bold text-[#B9F040]">Complete brand repositioning</p>
                    <p className="text-xl font-bold text-[#B9F040]">Led directly to their new funding round</p>
                    <p className="text-neutral-400 mt-4">
                      Check this out - the insight was sitting in their reviews the whole time. They just weren&apos;t using it in their ads.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CREDENTIALS SECTION */}
      <section className="py-16 md:py-24 bg-neutral-900">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1, once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              variants={fadeInUp}
            >
              13 Years. 49 Brands. <span className="text-[#B9F040]">$100M+ Generated.</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8"
              variants={fadeInUp}
            >
              Over 13 years, I&apos;ve worked with 49 brands - from Wattbike (longest-running ad in company history) to KatKin (113% lift that secured their Series A) - and generated over $100M in trackable revenue.
            </motion.p>
            
            <motion.p 
              className="text-lg text-neutral-400 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              That&apos;s not theory. That&apos;s <span className="text-white font-semibold">3,847 individual ad tests</span> proving one pattern:
            </motion.p>
            
            <motion.div 
              className="mt-8 p-8 rounded-2xl bg-black border border-[#B9F040]/30 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              <p className="text-2xl md:text-3xl font-bold text-white">
                Brands using customer language beat brands using brand language by <span className="text-[#B9F040]">38.7%</span> on average.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SOCIAL PROOF - Logo Band */}
      <section className="border-y border-neutral-800 bg-black">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-6">
          <p className="text-center text-neutral-400 mb-2">
            Brands that closed the gap:
          </p>
        </div>
        <LogoSlider logos={clientLogos} speedMs={30000} title="" />
      </section>

      {/* FRAMEWORK SECTION */}
      <section id="how-it-works" className="py-16 md:py-24 bg-black scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1, once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
              variants={fadeInUp}
            >
              Your Customers Already Cracked the Code
            </motion.h2>
            
            <motion.div className="text-lg text-neutral-300 max-w-3xl mb-16" variants={fadeInUp}>
              <p className="mb-4">Here&apos;s what most brands get wrong.</p>
              <p className="mb-4">
                They run surveys. They collect reviews. They read support tickets. Then they hand that data to their agency... who turns it into brand-speak that sounds nothing like what customers actually said.
              </p>
              <p className="text-xl font-semibold text-white">
                The gap between knowing and doing is killing your performance.
              </p>
              <p className="mt-4 text-[#B9F040] font-semibold">Here&apos;s how we close it:</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 01 */}
              <motion.div 
                className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800"
                variants={fadeInUp}
              >
                <div className="text-5xl font-bold text-[#B9F040]/30 mb-4">01</div>
                <h3 className="text-xl font-bold text-white mb-4">
                  We Dig for the Real Buying Triggers
                </h3>
                <p className="text-neutral-300 mb-4">
                  We go through your customer data with one question: &ldquo;What made you finally buy?&rdquo;
                </p>
                <p className="text-neutral-400 mb-4">
                  Not the polite version. Not the sanitized version. The raw, emotional, sometimes-messy version that&apos;s sitting in your:
                </p>
                <ul className="space-y-2 text-neutral-300">
                  <li>• Post-purchase surveys</li>
                  <li>• Review data with actual customer language</li>
                  <li>• Support tickets where people explain their problems</li>
                  <li>• NPS responses where they tell you what almost made them leave</li>
                </ul>
                <p className="mt-4 text-neutral-400 italic">
                  The answers are already there. You just need to know what you&apos;re looking for.
                </p>
              </motion.div>

              {/* Step 02 */}
              <motion.div 
                className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800"
                variants={fadeInUp}
              >
                <div className="text-5xl font-bold text-[#B9F040]/30 mb-4">02</div>
                <h3 className="text-xl font-bold text-white mb-4">
                  We Run It Through Our Framework
                </h3>
                <p className="text-neutral-300 mb-4">
                  Our system is built from analyzing 100+ million Facebook posts - we know exactly which words stop the scroll and which ones get ignored.
                </p>
                <p className="text-neutral-400 mb-4">
                  This isn&apos;t guesswork. According to Harvard behavioral researchers, customer-language ads outperform brand-language ads by 43% on average because they bypass the &ldquo;is this for me?&rdquo; question entirely.
                </p>
                <p className="text-white font-semibold">
                  When someone sees their exact words in an ad, their brain doesn&apos;t question it. It recognizes it.
                </p>
              </motion.div>

              {/* Step 03 */}
              <motion.div 
                className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800"
                variants={fadeInUp}
              >
                <div className="text-5xl font-bold text-[#B9F040]/30 mb-4">03</div>
                <h3 className="text-xl font-bold text-white mb-4">
                  You Get Battle-Tested Concepts in 2-3 Days
                </h3>
                <div className="text-neutral-300 space-y-2 mb-6">
                  <p><span className="text-white font-semibold">Wednesday afternoon:</span> You send us your customer data</p>
                  <p><span className="text-white font-semibold">Thursday morning:</span> We deliver 5-10 complete concepts</p>
                  <p><span className="text-white font-semibold">Friday:</span> Your media buyer is testing them</p>
                  <p><span className="text-white font-semibold">Next Tuesday:</span> You&apos;re asking your CFO for MORE ad budget because you finally have creative that works</p>
                </div>
                <p className="text-neutral-400 mb-4">Each concept includes:</p>
                <ul className="space-y-2 text-neutral-300">
                  <li>• Hook written in exact customer language</li>
                  <li>• Body copy that speaks to their real pain</li>
                  <li>• CTA that matches their decision-making moment</li>
                </ul>
                <p className="mt-4 text-[#B9F040] font-semibold">
                  Ready to hand to your media buyer. Ready to test against your current control. Ready to prove this works.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OFFER SECTION */}
      <section id="pricing" className="py-16 md:py-24 bg-neutral-900 scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1, once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 text-center"
              variants={fadeInUp}
            >
              Three Ways to Get Started
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Option 1: Got Customer Data */}
              <motion.div 
                className="p-8 rounded-2xl bg-black border border-neutral-800"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-bold text-[#B9F040] mb-4">
                  Got Customer Data?
                </h3>
                <p className="text-neutral-300 mb-6">
                  If you have NPS responses or review data with real customer language (not just &ldquo;great service!&rdquo;), we might be able to start for free.
                </p>
                <a 
                  href="#apply"
                  className="inline-flex items-center text-white hover:text-[#B9F040] transition-colors font-semibold"
                >
                  Tell us what you have <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>

              {/* Option 2: Need to Collect Data */}
              <motion.div 
                className="p-8 rounded-2xl bg-black border border-neutral-800"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-bold text-[#B9F040] mb-4">
                  Need to Collect Data First?
                </h3>
                <p className="text-neutral-300 mb-4">
                  We&apos;ll install our survey plugin on your thank-you page (free) or run our 12-question deep-dive survey (what we call the &ldquo;MRI scan&rdquo;).
                </p>
                <p className="text-neutral-400 mb-6">
                  Either way, you&apos;re testing concepts within a week.
                </p>
                <a 
                  href="#apply"
                  className="inline-flex items-center text-white hover:text-[#B9F040] transition-colors font-semibold"
                >
                  Get started <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>

              {/* Option 3: $0 Risk Pilot */}
              <motion.div 
                className="p-8 rounded-2xl bg-[#B9F040]/10 border-2 border-[#B9F040]"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-bold text-[#B9F040] mb-4">
                  Want the $0 Risk Pilot?
                </h3>
                <p className="text-neutral-300 mb-4">Here&apos;s exactly how it works:</p>
                <ul className="space-y-2 text-neutral-300 mb-6">
                  <li><span className="text-white font-semibold">Day 1:</span> You send us your customer feedback data</li>
                  <li><span className="text-white font-semibold">Day 3:</span> We deliver 5-10 ad concepts written in your customers&apos; language</li>
                  <li><span className="text-white font-semibold">Day 17:</span> Your media buyer tests them for 14 days</li>
                </ul>
                <div className="p-4 rounded-xl bg-black/50 mb-6">
                  <p className="text-white font-semibold">
                    You pay $0 unless we beat your control by 20%+
                  </p>
                  <p className="text-neutral-400 text-sm mt-2">
                    That&apos;s it. Zero upfront investment. Zero risk. Just results measured by your metrics - CPA, ROAS, or profit per customer.
                  </p>
                </div>
                <a 
                  href="#apply"
                  className="inline-flex items-center justify-center w-full h-12 rounded-lg font-semibold bg-[#B9F040] text-black hover:bg-[#a0d636] transition-colors"
                >
                  Start your $0 pilot <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOUNDER STORY SECTION */}
      <section id="about" className="py-16 md:py-24 bg-black scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1, once: true }}
            variants={staggerContainer}
          >
            <motion.p 
              className="text-sm uppercase tracking-widest text-[#B9F040] mb-4 font-semibold"
              variants={fadeInUp}
            >
              The Story Behind MapTheGap
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
                <div className="space-y-6 text-lg text-neutral-300">
                  <p>
                    I&apos;m David Rawlings, and I built this because I was sick of watching killer insights die in spreadsheets.
                  </p>
                  <p>
                    I&apos;ve spent over a decade running growth for brands that actually had to make their numbers. And I kept seeing the same pattern month after month:
                  </p>
                  <p>
                    Teams would run surveys. Collect reviews. Talk to customers. Extract brilliant insights.
                  </p>
                  <p>
                    Then they&apos;d turn around and ship ads that sounded nothing like what they&apos;d just learned.
                  </p>
                  <p className="text-xl font-semibold text-white">
                    The gap between knowing and doing was killing performance.
                  </p>
                  <p>
                    Look - I&apos;ve seen brands spend $40K on customer research, nod along in the debrief, then launch ads written in the same brand-speak they were using before. Meanwhile, their competitor with uglier branding but better listening skills is scaling at half their CPA.
                  </p>
                  <p>
                    So I built MapTheGap to close that gap.
                  </p>
                  <p>
                    Not as another analytics dashboard that shows you problems.
                  </p>
                  <p>
                    Not as a copywriting tool that guesses at solutions.
                  </p>
                  <p className="text-white font-semibold">
                    But as an execution system that turns Voice of Customer into concepts you can test tomorrow.
                  </p>
                </div>
                
                <div className="mt-10 grid grid-cols-3 gap-8">
                  <div>
                    <p className="text-4xl font-bold text-[#B9F040]">49</p>
                    <p className="text-neutral-400">brands helped</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-[#B9F040]">$100M+</p>
                    <p className="text-neutral-400">revenue generated</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-[#B9F040]">3,847</p>
                    <p className="text-neutral-400">ad tests proving the same pattern</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#1A2B3C] to-[#0F1B28]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1, once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              variants={fadeInUp}
            >
              Ready to Stop Burning Money?
            </motion.h2>
            
            <motion.p 
              className="text-xl text-neutral-300 mb-4 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Your customers are writing your best ads right now. They&apos;re in your reviews, your support tickets, your surveys.
            </motion.p>
            
            <motion.p 
              className="text-2xl font-semibold text-white mb-10"
              variants={fadeInUp}
            >
              Let&apos;s find them.
            </motion.p>
            
            <motion.div className="flex flex-col items-center gap-6" variants={fadeInUp}>
              <a 
                href="#apply"
                className="inline-flex h-14 px-10 rounded-lg font-semibold bg-[#B9F040] text-black hover:bg-[#a0d636] transition-colors items-center justify-center text-lg"
              >
                Fix Your Expensive Ads in 72 Hours
              </a>
              
              <div className="p-6 rounded-xl bg-black/30 border border-white/10 max-w-md">
                <p className="text-sm uppercase tracking-widest text-neutral-400 mb-3">Or start the $0 risk test:</p>
                <ul className="space-y-2 text-neutral-300 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#B9F040] flex-shrink-0" />
                    Concepts delivered in 72 hours
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#B9F040] flex-shrink-0" />
                    Tested for 14 days
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#B9F040] flex-shrink-0" />
                    You only pay if we beat your control by 20%+
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FORM SECTION */}
      <div id="apply" className="scroll-mt-20">
        <ContactForm 
          headline="Fix Your Expensive Ads in 72 Hours" 
          step0Title="1. Your Brand"
          step0Description="Tell us about your business"
          showStep0Title={true}
          websiteUrlLabel="Website URL"
        />
      </div>

      <Footer />
    </main>
  )
}
