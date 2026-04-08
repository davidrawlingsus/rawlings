'use client'

import { Suspense, useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from './components/Header'
import Footer from './components/Footer'
import LogoSlider from './components/LogoSlider'
import RedirectGreeting from '@/components/RedirectGreeting'
import ContactForm from './components/ContactForm'
import { ArrowRight, ArrowDown, Check, X, Upload, BarChart3, Sparkles, TrendingUp, ChevronDown } from 'lucide-react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import TypewriterWord from './components/TypewriterWord'
import './free-analysis/free-analysis.css'

const LEADGEN_API_BASE = 'https://content-exploration-featurebranch.up.railway.app'
const LEADGEN_STATUS_PAGE = 'https://vizualizd.mapthegap.ai/free-analysis'

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

// Bar data for the gap chart
const barData = [
  { height: 77, isGap: false },
  { height: 80, isGap: false },
  { height: 127, isGap: false },
  { height: 75, isGap: false },
  { height: 65, isGap: false },
  { height: 56, isGap: false },
  { height: 65, isGap: false },
  { height: 75, isGap: false },
  { height: 56, isGap: false },
  { height: 127, isGap: false },
  { height: 141, isGap: false },
  { height: 156, isGap: false },
  { height: 105, isGap: false },
  { height: 91, isGap: false },
  { height: 105, isGap: false },
  { height: 116, isGap: false },
  { height: 111, isGap: false },
  { height: 116, isGap: false },
  { height: 184, isGap: true },
  { height: 223, isGap: true },
  { height: 258, isGap: true },
  { height: 264, isGap: true },
  { height: 270, isGap: true },
  { height: 274, isGap: true },
  { height: 287, isGap: true },
  { height: 287, isGap: true },
]

// Testimonials for the slider
const testimonials = [
  {
    id: '1',
    quote: 'A huge impact on the business.',
    name: 'Jim Warren',
    company: 'Katkin & Mous',
    imageSrc: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/katkin_logo_square.png',
  },
  {
    id: '2',
    quote: 'Immediate improvement in conversion.',
    name: 'Anna Cusden',
    company: 'Look Fabulous Forever',
    imageSrc: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/look_fabulous_forever_logo_square.png',
  },
  {
    id: '3',
    quote: 'Paid for itself a thousand times over.',
    name: 'Elliott Fox',
    company: 'Wattbike',
    imageSrc: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/wattbike_logo_rectangle.png',
  },
  {
    id: '4',
    quote: 'Huge bankable wins.',
    name: 'David Darmanin',
    company: 'Hotjar',
    imageSrc: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/hotjar_logo_square.png',
  },
  {
    id: '5',
    quote: 'Logical, pragmatic, and guided by data.',
    name: 'Richard Kessell',
    company: 'Mous',
    imageSrc: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/mous_logo_square.png',
  },
]

// Gap examples for rotating hero comparison
const gapExamples = [
  {
    category: 'Joint Pain Supplement',
    marketing: 'Clinically-proven formula supports joint health and mobility',
    customer: 'I can finally pick up my granddaughter without my knees screaming',
    cost: '$29,419',
  },
  {
    category: 'Premium Pet Food',
    marketing: 'Grain-free, responsibly sourced nutrition your cat deserves',
    customer: 'My 12 year old ragdoll, Nellie, went from lazy and chubs to playful and healthy!',
    cost: '$18,340',
  },
  {
    category: 'Sleep Supplement',
    marketing: 'Natural sleep support with clinically-studied ingredients',
    customer: "I don't wake up at 3am anymore with my brain spinning about work",
    cost: '$22,180',
  },
  {
    category: 'Hair Loss Treatment',
    marketing: 'Advanced formula stimulates follicle growth and reduces shedding',
    customer: 'I stopped avoiding mirrors and started booking dates again',
    cost: '$34,920',
  },
  {
    category: 'Gut Health Supplement',
    marketing: 'Restore your microbiome with our proprietary probiotic blend',
    customer: 'I can eat dinner with my family without planning my escape route to the bathroom',
    cost: '$26,740',
  },
  {
    category: 'Productivity Software',
    marketing: 'Intelligent task management gives you as much, or as little, guidance as you need',
    customer: 'I finally stopped having 47 tabs open and forgetting what I was supposed to do',
    cost: '$31,260',
  },
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

// Testimonial Slider Component
function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.scrollWidth / testimonials.length
      scrollRef.current.scrollTo({ left: cardWidth * currentIndex, behavior: 'smooth' })
    }
  }, [currentIndex])

  return (
    <div className="relative">
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="flex-none w-[300px] md:w-[400px] snap-start p-6 rounded-2xl bg-neutral-800/50 border border-neutral-700"
          >
            <p className="text-xl md:text-2xl text-white mb-6">&ldquo;{t.quote}&rdquo;</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white p-2 flex items-center justify-center">
                <Image src={t.imageSrc} alt={t.company} width={40} height={40} className="object-contain" />
              </div>
              <div>
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-sm text-neutral-400">{t.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-1 rounded-full transition-all ${i === currentIndex ? 'w-8 bg-[#B9F040]' : 'w-3 bg-neutral-600'}`}
          />
        ))}
      </div>
    </div>
  )
}

// Rotating Gap Comparison for Hero
function RotatingGapComparison() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isSliding, setIsSliding] = useState(false)
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('left')

  const goToIndex = useCallback((newIndex: number) => {
    setCurrentIndex(prev => {
      if (newIndex === prev) return prev
      setSlideDirection(newIndex > prev ? 'left' : 'right')
      setIsSliding(true)
      setTimeout(() => setIsSliding(false), 350)
      return newIndex
    })
  }, [])

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const nextIndex = (prev + 1) % gapExamples.length
        setSlideDirection('left')
        setIsSliding(true)
        setTimeout(() => setIsSliding(false), 350)
        return nextIndex
      })
    }, 9000)
    return () => clearInterval(interval)
  }, [isPaused])

  const example = gapExamples[currentIndex]

  return (
    <div 
      className="bg-neutral-900 rounded-2xl p-6 md:p-8 border border-neutral-800 relative z-10 max-w-md ml-auto mt-5 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        className={`transition-all duration-300 ease-in-out ${
          isSliding 
            ? `opacity-0 ${slideDirection === 'left' ? '-translate-x-4' : 'translate-x-4'}` 
            : 'opacity-100 translate-x-0'
        }`}
      >
        {/* Category label */}
        <p className="text-sm uppercase tracking-wider text-white font-bold mb-4 text-center">{example.category}</p>
        
        {/* Split comparison */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-lg bg-gradient-to-br from-red-950/30 to-neutral-900 border border-red-900/30">
            <p className="text-xs uppercase tracking-wider text-red-400 mb-2">Marketing language</p>
            <p className="text-sm text-neutral-400 italic">&ldquo;{example.marketing}&rdquo;</p>
          </div>
          <div className="p-4 rounded-lg bg-[#B9F040]/10 border border-[#B9F040]/30">
            <p className="text-xs uppercase tracking-wider text-[#B9F040] mb-2">Customer language</p>
            <p className="text-sm text-white italic">&ldquo;{example.customer}&rdquo;</p>
          </div>
        </div>
        
        {/* Gap indicator */}
        <div className="text-center py-6 border-t border-neutral-800">
          <p className="text-xs uppercase tracking-wider text-white mb-2">Translation tax:</p>
          <p className="text-5xl md:text-6xl font-bold text-red-500">-{example.cost}<span className="text-2xl text-neutral-400">/mo</span></p>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2">
        {gapExamples.map((_, i) => (
          <button
            key={i}
            onClick={() => goToIndex(i)}
            className={`h-1.5 rounded-full transition-all ${i === currentIndex ? 'w-6 bg-red-500' : 'w-1.5 bg-neutral-600'}`}
          />
        ))}
      </div>
    </div>
  )
}

// Animated Gap Chart
function GapChart({ className = '' }: { className?: string }) {
  const [isVisible, setIsVisible] = useState(false)
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.3 }
    )
    if (chartRef.current) observer.observe(chartRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={chartRef} className={`flex items-end gap-1 h-[200px] ${className}`}>
      {barData.map((bar, i) => (
        <div
          key={i}
          className={`w-3 rounded-t transition-all duration-500 ${bar.isGap ? 'bg-[#B9F040]' : 'bg-neutral-600'}`}
          style={{
            height: isVisible ? `${(bar.height / 287) * 100}%` : '0%',
            transitionDelay: `${i * 30}ms`
          }}
        />
      ))}
    </div>
  )
}

// FAQ Accordion
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="border-b border-neutral-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="text-lg font-semibold text-white pr-8">{question}</span>
        <ChevronDown className={`w-5 h-5 text-[#B9F040] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-neutral-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

export default function HomePage() {
  const [videoOpen, setVideoOpen] = useState(false)

  // Leadgen form state
  const [leadgenUrl, setLeadgenUrl] = useState<string | null>(null)
  const [leadgenModalOpen, setLeadgenModalOpen] = useState(false)
  const [leadgenDomain, setLeadgenDomain] = useState('')
  const [leadgenEmail, setLeadgenEmail] = useState('')
  const [leadgenSubmitting, setLeadgenSubmitting] = useState(false)
  const [leadgenError, setLeadgenError] = useState('')
  const leadgenModalRef = useRef<HTMLDivElement>(null)

  const handleLeadgenUrlSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const input = e.currentTarget.querySelector('input') as HTMLInputElement
    let url = input.value.trim()
    if (!url) return
    if (url.indexOf('http') !== 0) url = 'https://' + url
    setLeadgenUrl(url)
    try {
      const domain = new URL(url).hostname.replace(/^www\./, '')
      setLeadgenDomain(domain)
    } catch {
      setLeadgenDomain(url)
    }
    setLeadgenError('')
    setLeadgenModalOpen(true)
  }, [])

  const handleLeadgenEmailSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!leadgenEmail.trim()) return
    setLeadgenSubmitting(true)
    setLeadgenError('')
    try {
      const res = await fetch(LEADGEN_API_BASE + '/api/public/leadgen/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ work_email: leadgenEmail, company_url: leadgenUrl }),
      })
      if (!res.ok) {
        let detail = 'Request failed: ' + res.status
        try { const d = await res.json(); if (d.detail) detail = d.detail } catch {}
        throw new Error(detail)
      }
      const data = await res.json()
      window.location.href = LEADGEN_STATUS_PAGE + '?run_id=' + encodeURIComponent(data.run_id) + '&email=' + encodeURIComponent(leadgenEmail)
    } catch (err: unknown) {
      setLeadgenError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLeadgenSubmitting(false)
    }
  }, [leadgenEmail, leadgenUrl])

  useEffect(() => {
    document.body.style.overflow = leadgenModalOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [leadgenModalOpen])

  // Scroll-triggered fade-up animations for mtg section
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.mtg-fade-up').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-black">
      <Suspense fallback={null}>
        <RedirectGreeting />
      </Suspense>
      <Header />

      {/* ============ FREE ANALYSIS HERO ============ */}
      <div className="mtg-landing">
        <section className="mtg-hero mtg-wrap">
          <div className="mtg-fade-up" style={{ transitionDelay: '0.1s' }}>
            <h1>
              Your customers already wrote your<br />
              <TypewriterWord words={['entire creative strategy.', 'best ever landing pages.', 'highest ROAS Facebook Ads.', 'best performing SEO pages.', 'highest open emails.']} />
              <br />
              <span className="mtg-accent" style={{ fontStyle: 'italic' }}>But your marketing&apos;s not listening,<br />and I&apos;ll prove it...</span>
            </h1>
          </div>
          <div className="mtg-fade-up" style={{ transitionDelay: '0.2s' }}>
            <p className="mtg-subtitle">
              Enter your URL. We&apos;ll instantly read your reviews and show you the gap
              between what your marketing says and what your prospects <em>need</em> to hear to convert.
            </p>
          </div>
          <div className="mtg-fade-up" style={{ transitionDelay: '0.3s' }}>
            <form className="mtg-hero__input-row" onSubmit={handleLeadgenUrlSubmit}>
              <input type="text" placeholder="yourstore.com" required />
              <button type="submit" className="mtg-btn-primary">SHOW ME THE GAP</button>
            </form>
          </div>
          <div className="mtg-fade-up" style={{ transitionDelay: '0.4s' }}>
            <p className="mtg-hero__note">Works with Trustpilot, Google Reviews, Reviews.io, and Yotpo.</p>
          </div>
        </section>

        {/* Email Modal */}
        <div
          ref={leadgenModalRef}
          className={`mtg-modal-overlay${leadgenModalOpen ? ' active' : ''}`}
          onClick={(e) => { if (e.target === leadgenModalRef.current) setLeadgenModalOpen(false) }}
        >
          <div className="mtg-modal">
            <h2>Where should we send your analysis?</h2>
            <div className="mtg-confirm-domain">
              <span className="mtg-domain-badge">{leadgenDomain}</span>
            </div>
            <form className="mtg-form-group" onSubmit={handleLeadgenEmailSubmit}>
              <label htmlFor="mtgEmailHome">Your work email</label>
              <input
                id="mtgEmailHome"
                type="email"
                placeholder="you@yourcompany.com"
                required
                autoComplete="email"
                value={leadgenEmail}
                onChange={(e) => setLeadgenEmail(e.target.value)}
              />
              <div className="mtg-btn-row">
                <button type="button" className="mtg-btn-secondary" onClick={() => setLeadgenModalOpen(false)}>Back</button>
                <button type="submit" className="mtg-btn-primary" disabled={leadgenSubmitting}>
                  {leadgenSubmitting ? 'STARTING...' : 'START ANALYSIS'}
                </button>
              </div>
            </form>
            <p className="mtg-disclaimer">We&apos;ll find your public reviews and analyse them. No spam, ever.</p>
            {leadgenError && <p className="mtg-error-text">{leadgenError}</p>}
          </div>
        </div>
      </div>

      {/* ============ LOGO BAND ============ */}
      <section className="border-y border-neutral-800 bg-neutral-900/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4">
          <p className="text-center text-sm text-neutral-500 mb-2">Based on the conversion strategies deployed at...</p>
        </div>
        <LogoSlider logos={clientLogos} speedMs={30000} title="" />
      </section>

      {/* ============ THE PROBLEM SECTION ============ */}
      <section className="pt-8 pb-20 md:pt-20 md:pb-32 bg-black">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.p 
              className="text-sm uppercase tracking-widest text-[#B9F040] mb-4"
              variants={fadeInUp}
            >
              The Problem
            </motion.p>
            <motion.h2 
              className="text-3xl md:text-5xl font-bold text-white mb-8"
              variants={fadeInUp}
            >
              Your customers speak one language.<br />
              Your marketing speaks...<br />something else.
            </motion.h2>
            
            <motion.div className="space-y-6 text-lg text-neutral-300" variants={fadeInUp}>
              <p>
                Every month, you spend (tens of) thousands on ads and marketing content.
              </p>
              <p>
                Clean. Professional. On-message.
              </p>
              <p className="text-white font-semibold relative inline-block">
                <span className="relative z-10">And completely disconnected from how your customers actually think, speak, and buy.</span>
                <span className="absolute inset-0 bg-[#B9F040]/35 -skew-x-2 rounded" aria-hidden="true"></span>
              </p>
            </motion.div>

            {/* The brutal truth comparison */}
            <motion.div 
              className="mt-12 grid md:grid-cols-2 gap-6"
              variants={fadeInUp}
            >
              <div className="p-6 rounded-xl bg-gradient-to-br from-red-950/30 to-neutral-900 border border-red-900/30">
                <p className="text-xs uppercase tracking-wider text-red-400 mb-3">Your marketing says:</p>
                <p className="text-xl text-neutral-400 italic">
                  &ldquo;Clinically-proven joint support formula&rdquo;
                </p>
              </div>
              <div className="p-6 rounded-xl bg-[#B9F040]/10 border border-[#B9F040]/30">
                <p className="text-xs uppercase tracking-wider text-[#B9F040] mb-3">Your customers say:</p>
                <p className="text-xl text-white italic">
                  &ldquo;I can walk my daughter down the aisle without limping&rdquo;
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="mt-12 p-8 rounded-2xl bg-neutral-900 border border-neutral-800"
              variants={fadeInUp}
            >
              <p className="text-2xl md:text-3xl font-bold text-white mb-4">See the gap?</p>
              <p className="text-lg text-neutral-300">
                That gap—between customer language and marketing language—costs you <span className="text-[#B9F040] font-semibold">30-40% of your ad spend</span>.
              </p>
              <p className="mt-4 text-neutral-400">
                For a brand spending $50K/month on marketing, that&apos;s <span className="text-white font-semibold">$15K-$20K walking out the door</span>. Every month.
              </p>
              <p className="mt-4 text-lg text-white">
                Not because your marketing is bad. Because it sounds like <em>you</em> instead of <em>them</em>.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ THE STAKES SECTION ============ */}
      <section className="pt-20 pb-8 md:pt-32 md:pb-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.p 
              className="text-sm uppercase tracking-widest text-[#B9F040] mb-4"
              variants={fadeInUp}
            >
              The Stakes
            </motion.p>
            <motion.h2 
              className="text-3xl md:text-5xl font-bold text-white mb-16"
              variants={fadeInUp}
            >
              What the gap actually costs you
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Column 1 */}
              <motion.div 
                className="p-8 rounded-2xl bg-black border border-neutral-800"
                variants={fadeInUp}
              >
                <div className="w-12 h-12 rounded-xl bg-red-950/50 flex items-center justify-center mb-6">
                  <span className="text-2xl">💸</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Wasted Budget</h3>
                <p className="text-neutral-300">
                  &ldquo;Brand voice&rdquo; marketing forces customers to translate what you&apos;re saying into what they actually care about.<br /><br /><span className="text-[#B9F040] font-semibold">That translation adds 30-40% to your CPA.</span>
                </p>
              </motion.div>

              {/* Column 2 */}
              <motion.div 
                className="p-8 rounded-2xl bg-black border border-neutral-800"
                variants={fadeInUp}
              >
                <div className="w-12 h-12 rounded-xl bg-red-950/50 flex items-center justify-center mb-6">
                  <span className="text-2xl">👋</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Lost Customers</h3>
                <p className="text-neutral-300 mb-4">
                  When your marketing doesn&apos;t sound like your customers, their brain registers it as &ldquo;not for me&rdquo; in 1.3 seconds.
                </p>
                <p className="text-[#B9F040] font-semibold">You lose 2-5% of your market before they finish the headline.</p>
              </motion.div>

              {/* Column 3 */}
              <motion.div 
                className="p-8 rounded-2xl bg-black border border-neutral-800"
                variants={fadeInUp}
              >
                <div className="w-12 h-12 rounded-xl bg-red-950/50 flex items-center justify-center mb-6">
                  <span className="text-2xl">📉</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Compounding Drift</h3>
                <p className="text-neutral-300 mb-4">
                  Every day you optimize &ldquo;brand voice&rdquo; marketing, you drift further from customer voice.
                </p>
                <p className="text-[#B9F040] font-semibold">
                  The gap doesn&apos;t shrink. It widens. And costs more.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ PROOF / RESULTS SECTION ============ */}
      <section id="results" className="pt-8 pb-20 md:pt-20 md:pb-32 bg-black scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={staggerContainer}
          >
            <motion.p 
              className="text-sm uppercase tracking-widest text-[#B9F040] mb-4"
              variants={fadeInUp}
            >
              The Proof
            </motion.p>
            <motion.h2 
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              variants={fadeInUp}
            >
              &ldquo;Conversions doubled - and that&apos;s being conservative&rdquo;
            </motion.h2>

            {/* Chart and Video Row */}
            <motion.div 
              className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16"
              variants={fadeInUp}
            >
              {/* Chart */}
              <div className="p-4 md:p-8 rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden">
                <p className="text-sm text-neutral-400 mb-6">Average performance improvement after closing the gap</p>
                <GapChart />
                <div className="mt-4 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-neutral-600" />
                    <span className="text-sm text-neutral-400">Before</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-[#B9F040]" />
                    <span className="text-sm text-neutral-400">After MapTheGap</span>
                  </div>
                </div>
                <p className="mt-6 text-3xl font-bold text-[#B9F040]">+214% <span className="text-lg text-neutral-400 font-normal">avg. improvement</span></p>
              </div>

              {/* Video Testimonial */}
              <div className="p-4 md:p-8 rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden">
                <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
                  <DialogTrigger asChild>
                    <div className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group mb-6">
                      <Image
                        src="https://image.mux.com/IJtQaVuEd2CuYuBPpxLwQINIF68RFxtCRRE02drZplv8/animated.gif?width=640&start=0&end=3&fps=12"
                        alt="Video testimonial"
                        fill
                        className="object-cover"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-[#B9F040] flex items-center justify-center">
                          <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 bg-black border-0">
                    <div className="aspect-video w-full">
                      <iframe
                        src={`https://player.mux.com/IJtQaVuEd2CuYuBPpxLwQINIF68RFxtCRRE02drZplv8?autoplay=true`}
                        className="w-full h-full"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                      />
                    </div>
                  </DialogContent>
                </Dialog>
                <p className="text-xl text-white mb-4">&ldquo;It&apos;s hard to think of an investment with a better or faster ROI&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#B9F040]/20 flex items-center justify-center">
                    <span className="text-[#B9F040] font-bold">M</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Mark Morley</p>
                    <p className="text-sm text-neutral-400">Co-Founder, Prep Kitchen</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Case Study Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* KatKin */}
              <motion.div 
                className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800"
                variants={fadeInUp}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Image
                    src="https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/katkin_logo_square.png"
                    alt="KatKin"
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="font-semibold text-white">KatKin</p>
                    <p className="text-xs text-neutral-400">Premium Cat Food</p>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Ad Spend</span>
                    <span className="text-white font-semibold">$73K/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Language Gap</span>
                    <span className="text-red-400 font-semibold">38%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Gap Cost</span>
                    <span className="text-red-400 font-semibold">$27,780/mo</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-neutral-800">
                    <span className="text-neutral-400">ROAS Improvement</span>
                    <span className="text-[#B9F040] font-semibold">+42%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Monthly Recovery</span>
                    <span className="text-[#B9F040] font-semibold">$30,660</span>
                  </div>
                </div>
                <p className="text-sm text-neutral-400 italic">
                  &ldquo;The way you approached this with us was incredible&rdquo;
                </p>
              </motion.div>

              {/* Wattbike */}
              <motion.div 
                className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800"
                variants={fadeInUp}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Image
                    src="https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/wattbike_logo_rectangle.png"
                    alt="Wattbike"
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="font-semibold text-white">Wattbike</p>
                    <p className="text-xs text-neutral-400">Smart Indoor Trainers</p>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Ad Spend</span>
                    <span className="text-white font-semibold">$124K/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Language Gap</span>
                    <span className="text-red-400 font-semibold">34%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Gap Cost</span>
                    <span className="text-red-400 font-semibold">$42,160/mo</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-neutral-800">
                    <span className="text-neutral-400">ROAS Improvement</span>
                    <span className="text-[#B9F040] font-semibold">+61%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Monthly Recovery</span>
                    <span className="text-[#B9F040] font-semibold">$75,640</span>
                  </div>
                </div>
                <p className="text-sm text-neutral-400 italic">
                  &ldquo;Map The Gap led to our best performing and longest running ad&rdquo;
                </p>
              </motion.div>

              {/* Liforme */}
              <motion.div 
                className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800"
                variants={fadeInUp}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Image
                    src="https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/liforme_logo_square.png"
                    alt="Liforme"
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="font-semibold text-white">Liforme</p>
                    <p className="text-xs text-neutral-400">Premium Yoga Mats</p>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Ad Spend</span>
                    <span className="text-white font-semibold">$38K/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Language Gap</span>
                    <span className="text-red-400 font-semibold">41%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Gap Cost</span>
                    <span className="text-red-400 font-semibold">$15,580/mo</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-neutral-800">
                    <span className="text-neutral-400">ROAS Improvement</span>
                    <span className="text-[#B9F040] font-semibold">+47%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Monthly Recovery</span>
                    <span className="text-[#B9F040] font-semibold">$17,860</span>
                  </div>
                </div>
                <p className="text-sm text-neutral-400 italic">
                  &ldquo;Your ad copy boosted social sales by 100% YoY&rdquo;
                </p>
              </motion.div>
            </div>

            {/* Testimonial Slider */}
            <motion.div className="mt-16" variants={fadeInUp}>
              <TestimonialSlider />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ HOW IT WORKS SECTION ============ */}
      <section id="how-it-works" className="pt-8 pb-20 md:pt-20 md:pb-32 bg-neutral-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.p 
              className="text-sm uppercase tracking-widest text-[#B9F040] mb-4"
              variants={fadeInUp}
            >
              How It Works
            </motion.p>
            <motion.h2 
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              variants={fadeInUp}
            >
              Measure the gap. Create better marketing. Profit goes up.
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {/* Step 1 */}
              <motion.div 
                className="p-6 rounded-2xl bg-black border border-neutral-800 relative"
                variants={fadeInUp}
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#B9F040] flex items-center justify-center text-black font-bold">1</div>
                <div className="w-12 h-12 rounded-xl bg-[#B9F040]/10 flex items-center justify-center mb-4">
                  <Upload className="w-6 h-6 text-[#B9F040]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Enter Your URL</h3>
                <p className="text-neutral-400 text-sm mb-3">
                  We&apos;ll instantly analyze your reviews to extract actual customer language.
                </p>
                <form className="mtg-hero__input-row mtg-hero__input-row--sm" onSubmit={handleLeadgenUrlSubmit}>
                  <input type="text" placeholder="yourstore.com" required />
                  <button type="submit" className="mtg-btn-primary">GO</button>
                </form>
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                className="p-6 rounded-2xl bg-black border border-neutral-800 relative"
                variants={fadeInUp}
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#B9F040] flex items-center justify-center text-black font-bold">2</div>
                <div className="w-12 h-12 rounded-xl bg-[#B9F040]/10 flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-[#B9F040]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">See The Gap</h3>
                <p className="text-neutral-400 text-sm">
                  Compare your current marketing language against customer language. The distance is always bigger than you think.
                </p>
              </motion.div>

              {/* Step 3 */}
              <motion.div 
                className="p-6 rounded-2xl bg-black border border-neutral-800 relative"
                variants={fadeInUp}
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#B9F040] flex items-center justify-center text-black font-bold">3</div>
                <div className="w-12 h-12 rounded-xl bg-[#B9F040]/10 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-[#B9F040]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Close the gap</h3>
                <p className="text-neutral-400 text-sm">
                  We&apos;ll work with you on transformational marketing, enlarge your funnel and increase your conversion rate.
                </p>
              </motion.div>

              {/* Step 4 */}
              <motion.div 
                className="p-6 rounded-2xl bg-black border border-neutral-800 relative"
                variants={fadeInUp}
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#B9F040] flex items-center justify-center text-black font-bold">4</div>
                <div className="w-12 h-12 rounded-xl bg-[#B9F040]/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-[#B9F040]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Test & Measure</h3>
                <p className="text-neutral-400 text-sm">
                  Test everything and see the delta across your marketing channels. That delta = the cost of your gap.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ VS ALTERNATIVES SECTION ============ */}
      <section className="pt-8 pb-20 md:pt-20 md:pb-32 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
              variants={fadeInUp}
            >
              Why brands switch from agencies, VoC tools, and AI copywriters
            </motion.h2>

            <motion.div 
              className="overflow-x-auto"
              variants={fadeInUp}
            >
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="border-b border-neutral-700">
                    <th className="text-left py-4 px-4 text-neutral-400 font-normal"></th>
                    <th className="text-center py-4 px-4 text-neutral-400 font-normal">FB Agency</th>
                    <th className="text-center py-4 px-4 text-neutral-400 font-normal">VoC Tool</th>
                    <th className="text-center py-4 px-4 text-neutral-400 font-normal">AI Copywriter</th>
                    <th className="text-center py-4 px-4 text-[#B9F040] font-bold">MapTheGap</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-neutral-800">
                    <td className="py-4 px-4 text-white">Uses actual customer language</td>
                    <td className="text-center py-4 px-4 text-neutral-500">Maybe</td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-neutral-400 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-400 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-[#B9F040] mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-neutral-800">
                    <td className="py-4 px-4 text-white">Generates ad concepts</td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-neutral-400 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-400 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-neutral-400 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-[#B9F040] mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-neutral-800">
                    <td className="py-4 px-4 text-white">Tests concepts across channels</td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-neutral-400 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-400 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-400 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-[#B9F040] mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-neutral-800 bg-neutral-800/30">
                    <td className="py-4 px-4 text-white font-semibold">Measures language gap in $</td>
                    <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-400 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-400 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-400 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-[#B9F040] mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-neutral-800">
                    <td className="py-4 px-4 text-white">Time to first results</td>
                    <td className="text-center py-4 px-4 text-neutral-400">30-60 days</td>
                    <td className="text-center py-4 px-4 text-neutral-500">N/A</td>
                    <td className="text-center py-4 px-4 text-neutral-400">Immediate</td>
                    <td className="text-center py-4 px-4 text-[#B9F040] font-semibold">7-14 days</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-white">Monthly cost</td>
                    <td className="text-center py-4 px-4 text-neutral-400">$10K-15K</td>
                    <td className="text-center py-4 px-4 text-neutral-400">$500-2K</td>
                    <td className="text-center py-4 px-4 text-neutral-400">$49-299</td>
                    <td className="text-center py-4 px-4 text-[#B9F040] font-semibold">$2.5K-7.5K</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ WHO THIS IS FOR ============ */}
      <section className="pt-8 pb-20 md:pt-20 md:pb-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
              variants={fadeInUp}
            >
              This works if you have customer feedback and spend money on marketing
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div 
                className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 text-center"
                variants={fadeInUp}
              >
                <div className="w-16 h-16 rounded-full bg-[#B9F040]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">$25K+/Month Ad Budget</h3>
                <p className="text-neutral-400 text-sm">
                  And you suspect you&apos;re leaving money on the table but can&apos;t pinpoint why
                </p>
              </motion.div>

              <motion.div 
                className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 text-center"
                variants={fadeInUp}
              >
                <div className="w-16 h-16 rounded-full bg-[#B9F040]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Customer Reviews/Surveys Exist</h3>
                <p className="text-neutral-400 text-sm">
                  Raw feedback exists, but marketing ignores it (or doesn&apos;t know how to use it)
                </p>
              </motion.div>

              <motion.div 
                className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 text-center"
                variants={fadeInUp}
              >
                <div className="w-16 h-16 rounded-full bg-[#B9F040]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Marketers write your marketing</h3>
                <p className="text-neutral-400 text-sm">
                  Your team insists marketing stays &ldquo;on voice&rdquo; - but that voice was written in a conference room, not pulled from customers
                </p>
              </motion.div>
            </div>

            <motion.p 
              className="mt-12 text-center text-lg text-neutral-300"
              variants={fadeInUp}
            >
              If you checked all three, you likely have a problem worth <span className="text-[#B9F040] font-semibold">$10K-$50K/month</span>.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ============ PRICING SECTION ============ */}
      <section id="pricing" className="pt-8 pb-20 md:pt-20 md:pb-32 bg-neutral-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-4 text-center"
              variants={fadeInUp}
            >
              Pay nothing until the dollars start flowing
            </motion.h2>
            <motion.p 
              className="text-neutral-400 text-center mb-12"
              variants={fadeInUp}
            >
              We hold the invoice until our marketing starts winning (and the dollars start flowing)
            </motion.p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Starter */}
              <motion.div 
                className="p-6 rounded-2xl bg-black border border-neutral-800"
                variants={fadeInUp}
              >
                <p className="text-sm text-neutral-400 mb-2">For brands spending $25K-$50K/mo</p>
                <h3 className="text-2xl font-bold text-white mb-1">Starter</h3>
                <p className="text-4xl font-bold text-white mb-6">$2,500<span className="text-lg text-neutral-400 font-normal">/mo</span></p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm text-neutral-300">
                    <Check className="w-4 h-4 text-[#B9F040] mt-0.5 flex-shrink-0" />
                    VoC analysis (reviews, surveys, tickets)
                  </li>
                  <li className="flex items-start gap-2 text-sm text-neutral-300">
                    <Check className="w-4 h-4 text-[#B9F040] mt-0.5 flex-shrink-0" />
                    12 creative concepts/month (ads, landing pages, or emails)
                  </li>
                  <li className="flex items-start gap-2 text-sm text-neutral-300">
                    <Check className="w-4 h-4 text-[#B9F040] mt-0.5 flex-shrink-0" />
                    CRO recommendations
                  </li>
                  <li className="flex items-start gap-2 text-sm text-neutral-300">
                    <Check className="w-4 h-4 text-[#B9F040] mt-0.5 flex-shrink-0" />
                    Monthly gap reports
                  </li>
                </ul>

                <p className="text-sm text-neutral-400 mb-4">Typical gap recovery: <span className="text-[#B9F040] font-semibold">$8K-$20K/mo</span></p>
                
                <a href="#form" className="block w-full py-3 rounded-lg border border-neutral-700 text-center text-white font-semibold hover:bg-neutral-800 transition-colors">
                  Start Free Analysis
                </a>
              </motion.div>

              {/* Growth - Featured */}
              <motion.div 
                className="p-6 rounded-2xl bg-[#B9F040]/5 border-2 border-[#B9F040] relative"
                variants={fadeInUp}
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#B9F040] text-black text-xs font-bold rounded-full">
                  MOST POPULAR
                </div>
                <p className="text-sm text-neutral-400 mb-2">For brands spending $50K-$150K/mo</p>
                <h3 className="text-2xl font-bold text-white mb-1">Growth</h3>
                <p className="text-4xl font-bold text-white mb-6">$5,000<span className="text-lg text-neutral-400 font-normal">/mo</span></p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm text-neutral-300">
                    <Check className="w-4 h-4 text-[#B9F040] mt-0.5 flex-shrink-0" />
                    Everything in Starter
                  </li>
                  <li className="flex items-start gap-2 text-sm text-neutral-300">
                    <Check className="w-4 h-4 text-[#B9F040] mt-0.5 flex-shrink-0" />
                    24 creative concepts/month (ads, SEO content, landing pages)
                  </li>
                  <li className="flex items-start gap-2 text-sm text-neutral-300">
                    <Check className="w-4 h-4 text-[#B9F040] mt-0.5 flex-shrink-0" />
                    CRO audit &amp; implementation
                  </li>
                  <li className="flex items-start gap-2 text-sm text-neutral-300">
                    <Check className="w-4 h-4 text-[#B9F040] mt-0.5 flex-shrink-0" />
                    Bi-weekly strategy calls
                  </li>
                  <li className="flex items-start gap-2 text-sm text-neutral-300">
                    <Check className="w-4 h-4 text-[#B9F040] mt-0.5 flex-shrink-0" />
                    Slack support
                  </li>
                </ul>

                <p className="text-sm text-neutral-400 mb-4">Typical gap recovery: <span className="text-[#B9F040] font-semibold">$20K-$60K/mo</span></p>
                
                <a href="#form" className="block w-full py-3 rounded-lg bg-[#B9F040] text-center text-black font-semibold hover:bg-[#a0d636] transition-colors">
                  Start Free Analysis
                </a>
              </motion.div>

              {/* Scale */}
              <motion.div 
                className="p-6 rounded-2xl bg-black border border-neutral-800"
                variants={fadeInUp}
              >
                <p className="text-sm text-neutral-400 mb-2">For brands spending $150K+/mo</p>
                <h3 className="text-2xl font-bold text-white mb-1">Scale</h3>
                <p className="text-4xl font-bold text-white mb-6">$7,500<span className="text-lg text-neutral-400 font-normal">/mo</span></p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm text-neutral-300">
                    <Check className="w-4 h-4 text-[#B9F040] mt-0.5 flex-shrink-0" />
                    Everything in Growth
                  </li>
                  <li className="flex items-start gap-2 text-sm text-neutral-300">
                    <Check className="w-4 h-4 text-[#B9F040] mt-0.5 flex-shrink-0" />
                    36+ concepts/month across ads, SEO, CRO &amp; email
                  </li>
                  <li className="flex items-start gap-2 text-sm text-neutral-300">
                    <Check className="w-4 h-4 text-[#B9F040] mt-0.5 flex-shrink-0" />
                    Dedicated strategist
                  </li>
                  <li className="flex items-start gap-2 text-sm text-neutral-300">
                    <Check className="w-4 h-4 text-[#B9F040] mt-0.5 flex-shrink-0" />
                    Weekly optimization calls
                  </li>
                  <li className="flex items-start gap-2 text-sm text-neutral-300">
                    <Check className="w-4 h-4 text-[#B9F040] mt-0.5 flex-shrink-0" />
                    Full-funnel implementation
                  </li>
                </ul>

                <p className="text-sm text-neutral-400 mb-4">Typical gap recovery: <span className="text-[#B9F040] font-semibold">$60K-$200K/mo</span></p>
                
                <a href="#form" className="block w-full py-3 rounded-lg border border-neutral-700 text-center text-white font-semibold hover:bg-neutral-800 transition-colors">
                  Start Free Analysis
                </a>
              </motion.div>
            </div>

            {/* Guarantee */}
            <motion.div 
              className="mt-12 p-6 rounded-2xl bg-black border border-[#B9F040]/30 max-w-2xl mx-auto text-center"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-bold text-white mb-3">Our Guarantee</h3>
              <p className="text-neutral-300">
                We&apos;ll analyze your VoC and get your first concepts testing before the week is out. You don&apos;t pay a penny until our marketing is delivering a <span className="text-[#B9F040] font-semibold">20% improvement</span>.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ FOUNDER STORY SECTION ============ */}
      <section id="about" className="py-20 md:py-32 bg-black scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid md:grid-cols-[200px_1fr] gap-12 items-start"
          >
            {/* Photo */}
            <motion.div 
              className="flex justify-center md:justify-start"
              variants={fadeInUp}
            >
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-[#B9F040]/30">
                <Image
                  src="https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/team/david-rawlings.jpg"
                  alt="David Rawlings, Founder"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            
            {/* Story */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                I built this because I was tired of watching killer insights die in forgotten slide-decks.
              </h2>
              
              <div className="space-y-6 text-lg text-neutral-300">
                <p>
                  I&apos;m David Rawlings, and I&apos;ve spent over a decade running growth for brands that actually had to make their numbers.
                </p>
                <p>
                  The pattern was always the same: teams would run surveys, collect reviews, talk to customers, then turn around and ship marketing that sounded nothing like what they&apos;d just learned.
                </p>
                <p>
                  The gap between <strong className="text-white">knowing</strong> and <strong className="text-white">doing</strong> was killing performance.
                </p>
                <p>
                  So I built MapTheGap to close it. Not as another analytics dashboard. Not as a copywriting tool. As an <strong className="text-white">execution layer</strong> that turns Voice of Customer into concepts you can actually test tomorrow.
                </p>
              </div>
              
              <div className="mt-8">
                <a 
                  href="#form"
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
                  <p className="text-4xl font-bold text-[#B9F040]">$100M+</p>
                  <p className="text-neutral-400">revenue generated</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ FAQ SECTION ============ */}
      <section id="faq" className="bg-black scroll-mt-20">
        <div className="max-w-3xl mx-auto px-6 md:px-8 mb-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
              variants={fadeInUp}
            >
              Frequently Asked Questions
            </motion.h2>

            <motion.div variants={fadeInUp}>
              <FAQItem 
                question="How is this different from hiring an agency?"
                answer="Agencies create marketing based on creative instinct and 'what's working in the market.' We create marketing based on what your specific customers already said. The difference shows up in CPA. Most agencies charge $10K-15K/month. We're $2.5K-7.5K. And we measure the exact gap we're closing, in dollars."
              />
              <FAQItem 
                question="How is this different from VoC analytics tools?"
                answer="VoC tools (Qualtrics, Medallia, etc.) show you what customers said. We turn what they said into marketing, test it, and measure the revenue impact. They give you insights. We give you ROI."
              />
              <FAQItem 
                question="How fast do I see results?"
                answer="48 hours: We measure your language gap. 7 days: First concepts deployed across your channels. 14 days: Results from initial tests (this is your gap, measured in dollars). 30 days: Optimized concepts based on winning patterns."
              />
              <FAQItem 
                question="What if the marketing doesn't beat my controls?"
                answer="You don't pay a penny until our marketing beats your controls. Period."
              />
              <FAQItem 
                question="Do I need to change my brand guidelines?"
                answer="No. MapTheGap doesn't replace your brand—it shows you where your brand language has drifted from customer reality. Think of it this way: brand guidelines are a hypothesis about what resonates. Customer language is proof."
              />
              <FAQItem 
                question="What if I don't have enough reviews/feedback?"
                answer="If you have fewer than 100 customer reviews or survey responses, we can still work with support tickets, social comments, or even sales call transcripts. We've built ad concepts from as few as 50 data points."
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ FINAL CTA SECTION ============ */}
      <section id="apply" className="pt-8 pb-20 md:pt-20 md:pb-32 bg-gradient-to-br from-[#1A2B3C] to-black scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl md:text-5xl font-bold text-white mb-8"
              variants={fadeInUp}
            >
              Most brands are sitting on a $15K-$50K/month language gap right now.
            </motion.h2>

            <motion.div 
              className="max-w-2xl mx-auto text-left mb-10 p-6 rounded-xl bg-black/30 border border-white/10"
              variants={fadeInUp}
            >
              <p className="text-neutral-300 mb-4">Your customers have already told you:</p>
              <ul className="space-y-2 text-white">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B9F040]" />
                  What they were afraid of before buying
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B9F040]" />
                  What made them finally pull the trigger
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B9F040]" />
                  How they describe the outcome in their own words
                </li>
              </ul>
              <p className="mt-4 text-neutral-400">
                That language is sitting in your reviews, surveys, and support tickets. Your marketing ignores it.
              </p>
              <p className="mt-2 text-xl font-semibold text-[#B9F040]">That&apos;s the gap.</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <a 
                href="https://calendly.com/mapthegap/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 px-10 rounded-lg font-semibold bg-[#B9F040] text-black hover:bg-[#a0d636] transition-colors flex items-center justify-center text-lg"
              >
                Show Me My Gap (Free Analysis) <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="https://calendly.com/mapthegap/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 px-8 rounded-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-black transition-colors flex items-center justify-center"
              >
                Book a 15-Min Demo
              </a>
            </motion.div>

            <motion.p 
              className="mt-6 text-sm text-neutral-500"
              variants={fadeInUp}
            >
              Pay nothing until our marketing starts winning
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ============ LEAD GEN FORM ============ */}
      <div id="form" className="scroll-mt-20">
        <ContactForm 
          headline="Show Me My Gap" 
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
