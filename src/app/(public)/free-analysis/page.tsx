'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import TypewriterWord from '../components/TypewriterWord'
import './free-analysis.css'

const API_BASE = 'https://content-exploration-featurebranch.up.railway.app'
const STATUS_PAGE = 'https://vizualizd.mapthegap.ai/free-analysis'

export default function FreeAnalysisPage() {
  const [currentUrl, setCurrentUrl] = useState<string | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [domainDisplay, setDomainDisplay] = useState('')
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const modalRef = useRef<HTMLDivElement>(null)

  // Scroll-triggered fade-up animations
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.mtg-fade-up').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [modalOpen])

  const handleUrlSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const input = e.currentTarget.querySelector('input') as HTMLInputElement
    let url = input.value.trim()
    if (!url) return
    if (url.indexOf('http') !== 0) url = 'https://' + url
    setCurrentUrl(url)

    try {
      const domain = new URL(url).hostname.replace(/^www\./, '')
      setDomainDisplay(domain)
    } catch {
      setDomainDisplay(url)
    }

    setError('')
    setModalOpen(true)
  }, [])

  const handleEmailSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email.trim()) return

    setSubmitting(true)
    setError('')

    try {
      const res = await fetch(API_BASE + '/api/public/leadgen/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ work_email: email, company_url: currentUrl }),
      })

      if (!res.ok) {
        let detail = 'Request failed: ' + res.status
        try {
          const d = await res.json()
          if (d.detail) detail = d.detail
        } catch {}
        throw new Error(detail)
      }

      const data = await res.json()
      const redirect =
        STATUS_PAGE +
        '?run_id=' + encodeURIComponent(data.run_id) +
        '&email=' + encodeURIComponent(email)
      window.location.href = redirect
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setSubmitting(false)
    }
  }, [email, currentUrl])

  const handleOverlayClick = useCallback((e: React.MouseEvent) => {
    if (e.target === modalRef.current) setModalOpen(false)
  }, [])

  return (
    <div className="mtg-landing">
      {/* ── NAV ── */}
      <nav className="mtg-nav">
        <Link href="/" className="mtg-nav__logo">Map<span className="mtg-accent">The</span>Gap</Link>
        <span className="mtg-nav__tagline">Your customers write better copy than your agency.</span>
      </nav>

      {/* ── HERO ── */}
      <section className="mtg-hero mtg-wrap">
        <div className="mtg-fade-up">
          <span className="mtg-hero__pill">Free forever. No credit card. No catch.</span>
        </div>
        <div className="mtg-fade-up" style={{ transitionDelay: '0.1s' }}>
          <h1>
            Your customers already wrote your <TypewriterWord words={['entire creative strategy.', 'best ever landing pages.', 'highest ROAS Facebook Ads.', 'best performing SEO pages.', 'highest open emails.']} />
            <br />
            <span className="mtg-accent" style={{ fontStyle: 'italic' }}>But nobody&apos;s listening.</span>
          </h1>
        </div>
        <div className="mtg-fade-up" style={{ transitionDelay: '0.2s' }}>
          <p className="mtg-subtitle">
            Enter your URL. We&apos;ll read every review. And show you the gap
            between what your ads say and what your customers <em>need</em> to hear to convert.
          </p>
        </div>
        <div className="mtg-fade-up" style={{ transitionDelay: '0.3s' }}>
          <form className="mtg-hero__input-row" onSubmit={handleUrlSubmit}>
            <input type="text" placeholder="yourstore.com" required />
            <button type="submit" className="mtg-btn-primary">SHOW ME THE GAP</button>
          </form>
        </div>
        <div className="mtg-fade-up" style={{ transitionDelay: '0.4s' }}>
          <p className="mtg-hero__note">Works with Trustpilot, Google Reviews, Reviews.io, and Yotpo.</p>
        </div>
      </section>

      {/* ── THE GAP — VISUAL PROOF ── */}
      <section className="mtg-section mtg-wrap">
        <div className="mtg-text-center mtg-fade-up" style={{ marginBottom: '3.5rem' }}>
          <span className="mtg-eyebrow">The gap</span>
          <h2 style={{ maxWidth: 700, margin: '0 auto 1rem' }}>
            This is what it looks like when your ads and your customers
            are speaking different languages
          </h2>
          <p className="mtg-subtitle" style={{ maxWidth: 520, margin: '0 auto', fontSize: '1rem' }}>
            Real examples. Real brands. Real reviews. The left column is what the brand says. The right is what their customers say.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="mtg-gap-card mtg-fade-up">
            <div className="mtg-gap-card__left">
              <div className="mtg-gap-card__label">What Dermatica&apos;s ads say</div>
              <div className="mtg-gap-card__quote">&ldquo;Personalised skincare. Results from 6 weeks. Get a personalised formula designed for your skin.&rdquo;</div>
            </div>
            <div className="mtg-gap-card__right">
              <div className="mtg-gap-card__label">What their customers say</div>
              <div className="mtg-gap-card__quote">&ldquo;I tried everything for years. GP prescriptions, expensive products, lotions and potions. Nothing worked. I was running out of hope. Dermatica was the thing that finally ended the search.&rdquo;</div>
            </div>
          </div>

          <div className="mtg-gap-card mtg-fade-up">
            <div className="mtg-gap-card__left">
              <div className="mtg-gap-card__label">What Rheal&apos;s ads say</div>
              <div className="mtg-gap-card__quote">&ldquo;Organic superfood blends made from the finest natural ingredients to support your daily wellness.&rdquo;</div>
            </div>
            <div className="mtg-gap-card__right">
              <div className="mtg-gap-card__label">What their customers say</div>
              <div className="mtg-gap-card__quote">&ldquo;I went to the doctor. Nothing they gave me helped. I tried this. It solved the problem.&rdquo;</div>
            </div>
          </div>

          <div className="mtg-gap-card mtg-fade-up">
            <div className="mtg-gap-card__left">
              <div className="mtg-gap-card__label">What Dermatica&apos;s ads say</div>
              <div className="mtg-gap-card__quote">&ldquo;24/7 dermatology support. Access your personalised treatment plan anytime.&rdquo;</div>
            </div>
            <div className="mtg-gap-card__right">
              <div className="mtg-gap-card__label">What their customers say</div>
              <div className="mtg-gap-card__quote">&ldquo;You listen to my problems and concerns. You ask questions to understand where I&apos;m coming from. You put my mind at rest and put me at ease.&rdquo;</div>
            </div>
          </div>
        </div>

        <div className="mtg-fade-up mtg-text-center" style={{ marginTop: '3rem' }}>
          <p style={{ fontSize: '1.625rem', fontWeight: 700, lineHeight: 1.4, fontStyle: 'italic' }}>
            See the gap? <span className="mtg-accent" style={{ fontStyle: 'normal' }}>That&apos;s worth millions in wasted ad spend.</span>
          </p>
        </div>
      </section>

      {/* ── THE TRANSLATION TAX ── */}
      <section className="mtg-section mtg-wrap">
        <div className="mtg-two-col">
          <div className="mtg-fade-up">
            <span className="mtg-eyebrow">The Translation Tax</span>
            <h2 style={{ fontSize: '2.375rem', marginBottom: '1.5rem' }}>
              Every day your ads go out in your brand&apos;s language.<br />
              <span className="mtg-text-dim">And every day, your customers scroll past them.</span>
            </h2>
            <div style={{ fontSize: '1rem', color: 'var(--fg-dim)', lineHeight: 1.75, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p>Not because your product is bad. Because the words are wrong.</p>
              <p>Your agency writes &ldquo;supports digestive health.&rdquo; Your customer writes <span style={{ color: 'var(--fg)', fontWeight: 600 }}>&ldquo;I could&apos;ve passed for 3 months pregnant at any given time. It&apos;s just... gone.&rdquo;</span></p>
              <p>Your agency writes &ldquo;clinically proven results.&rdquo; Your customer writes <span style={{ color: 'var(--fg)', fontWeight: 600 }}>&ldquo;I was 24 and had horrific acne. Now all I wear is blush and bronzer.&rdquo;</span></p>
              <p>One of those stops the scroll at 11pm on a Tuesday. The other gets ignored.</p>
              <p>The difference between those two sentences is the Translation Tax. The measurable cost of the gap between how your customers talk about your product and how your marketing talks about it.</p>
            </div>
          </div>

          <div className="mtg-fade-up" style={{ transitionDelay: '0.15s' }}>
            <div className="mtg-card">
              <div style={{ fontSize: '0.8125rem', color: 'var(--fg-dim)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' as const, marginBottom: '1.5rem' }}>
                What lives in your reviews right now
              </div>
              <ul className="mtg-bullet-list">
                <li>The exact words that stop the scroll</li>
                <li>The objections your ads don&apos;t answer</li>
                <li>The buying triggers your creative team doesn&apos;t know exist</li>
                <li>The audience segments buying despite your messaging</li>
                <li>The emotional purchase architecture driving every conversion</li>
                <li>The competitor framing you haven&apos;t seen</li>
              </ul>
              <div className="mtg-callout">
                Your customers wrote your creative strategy for free. In their own words. Without being asked.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="mtg-section--tight mtg-wrap mtg-stats-strip">
        <div className="mtg-stats-grid">
          <div className="mtg-fade-up">
            <div className="mtg-stat__number">49+</div>
            <div className="mtg-stat__label">Brands analysed</div>
          </div>
          <div className="mtg-fade-up" style={{ transitionDelay: '0.08s' }}>
            <div className="mtg-stat__number">13</div>
            <div className="mtg-stat__label">Direct response dimensions scored</div>
          </div>
          <div className="mtg-fade-up" style={{ transitionDelay: '0.16s' }}>
            <div className="mtg-stat__number">5</div>
            <div className="mtg-stat__label">Buying psychology lenses</div>
          </div>
          <div className="mtg-fade-up" style={{ transitionDelay: '0.24s' }}>
            <div className="mtg-stat__number">&pound;0</div>
            <div className="mtg-stat__label">Cost to you</div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="mtg-section mtg-wrap">
        <div className="mtg-text-center mtg-fade-up" style={{ marginBottom: '4rem' }}>
          <span className="mtg-eyebrow">How it works</span>
          <h2>10 minutes from URL to strategy</h2>
        </div>

        <div className="mtg-three-col">
          <div className="mtg-step mtg-fade-up">
            <div className="mtg-step__number">1</div>
            <h3>Enter your URL</h3>
            <p>Paste your website. We find your reviews across Trustpilot, Google, Reviews.io, and Yotpo. Every review. Every word.</p>
          </div>
          <div className="mtg-step mtg-fade-up" style={{ transitionDelay: '0.1s' }}>
            <div className="mtg-step__number">2</div>
            <h3>We read like a strategist</h3>
            <p>Not sentiment analysis. Not star ratings. We extract buying triggers, objection patterns, identity shifts, emotional purchase architecture, and the language your ads should be using but aren&apos;t.</p>
          </div>
          <div className="mtg-step mtg-fade-up" style={{ transitionDelay: '0.2s' }}>
            <div className="mtg-step__number">3</div>
            <h3>You see the gap</h3>
            <p>A full creative strategy document. Daily briefs in your inbox. And a visual map of your reviews organised by the signals that actually drive purchase decisions.</p>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section className="mtg-section mtg-wrap">
        <div className="mtg-text-center mtg-fade-up" style={{ marginBottom: '3.5rem' }}>
          <span className="mtg-eyebrow">What you get</span>
          <h2 style={{ maxWidth: 600, margin: '0 auto 0.75rem' }}>Everything. For free. No strings.</h2>
          <p className="mtg-subtitle" style={{ maxWidth: 480, margin: '0 auto', fontSize: '1rem' }}>This isn&apos;t a teaser. It&apos;s the deliverable.</p>
        </div>

        <div className="mtg-three-col">
          <div className="mtg-deliverable mtg-fade-up">
            <div className="mtg-deliverable__icon">&#128202;</div>
            <h3>Creative Strategy Document</h3>
            <p>The gap between what your ads say and what your customers need to hear, mapped across your entire funnel. Not a summary. A strategic intelligence report with verbatim customer quotes, insight rankings, objection maps, and creative direction for every finding.</p>
            <p className="mtg-deliverable__detail">The kind of document a &pound;75K creative strategist would take 3 months to produce.</p>
          </div>
          <div className="mtg-deliverable mtg-fade-up" style={{ transitionDelay: '0.1s' }}>
            <div className="mtg-deliverable__icon">&#128236;</div>
            <h3>Daily Strategic Brief</h3>
            <p>Every morning. One email. The single biggest gap or opportunity we see in your data, explained in plain English. A customer quote you haven&apos;t noticed. An objection your ads don&apos;t answer. An audience buying despite your messaging.</p>
            <p className="mtg-deliverable__detail">Opens your day with the insight your agency missed.</p>
          </div>
          <div className="mtg-deliverable mtg-fade-up" style={{ transitionDelay: '0.2s' }}>
            <div className="mtg-deliverable__icon">&#128269;</div>
            <h3>Visual Review Map</h3>
            <p>Your reviews, reorganised. Not by star rating. By buying signal. See your reviews the way a creative strategist reads them: grouped by purchase triggers, transformation arcs, objection patterns, and competitor framing.</p>
            <p className="mtg-deliverable__detail">Read your reviews like you&apos;ve never read them before.</p>
          </div>
        </div>
      </section>

      {/* ── REAL INSIGHTS ── */}
      <section className="mtg-section mtg-wrap">
        <div className="mtg-text-center mtg-fade-up" style={{ marginBottom: '3.5rem' }}>
          <span className="mtg-eyebrow">What this looks like in practice</span>
          <h2 style={{ maxWidth: 700, margin: '0 auto 0.75rem' }}>Real insights we found in real reviews</h2>
          <p className="mtg-subtitle" style={{ maxWidth: 520, margin: '0 auto', fontSize: '1rem' }}>
            These came from publicly available Trustpilot data. Your report will be built from your reviews, for your brand, in your market.
          </p>
        </div>

        <div className="mtg-insight-grid">
          <div className="mtg-insight mtg-fade-up">
            <div className="mtg-insight__badge">Insight #1</div>
            <h3>Your customers are quitting prescriptions. Your ads talk about ingredients.</h3>
            <div className="mtg-insight__quote-block">
              <p className="mtg-insight__quote">&ldquo;I have been taking omeprazole for years... that was till I started taking gut health and clean green. I never thought this would be possible.&rdquo;</p>
              <p className="mtg-insight__date">Rheal customer &mdash; Jan 2026</p>
            </div>
            <p className="mtg-insight__direction">&rarr; TOFU hook: Lead with the failure of conventional medicine, not ingredient lists.</p>
          </div>

          <div className="mtg-insight mtg-fade-up" style={{ transitionDelay: '0.05s' }}>
            <div className="mtg-insight__badge">Insight #2</div>
            <h3>Your customers didn&apos;t buy skincare. They ended a search.</h3>
            <div className="mtg-insight__quote-block">
              <p className="mtg-insight__quote">&ldquo;After using it for 6 months I&apos;ve noticed more difference in my acne than I have in the last 17 years.&rdquo;</p>
              <p className="mtg-insight__date">Dermatica customer &mdash; Jan 2026</p>
            </div>
            <p className="mtg-insight__direction">&rarr; The &lsquo;end of search&rsquo; narrative is the most powerful hook in this dataset.</p>
          </div>

          <div className="mtg-insight mtg-fade-up" style={{ transitionDelay: '0.1s' }}>
            <div className="mtg-insight__badge">Insight #3</div>
            <h3>The phrase &lsquo;3 months pregnant&rsquo; is a better ad than anything in your creative library.</h3>
            <div className="mtg-insight__quote-block">
              <p className="mtg-insight__quote">&ldquo;After years of being permanently bloated (honestly, I could&apos;ve passed for 3 months pregnant at any given time), it&apos;s just... gone.&rdquo;</p>
              <p className="mtg-insight__date">Rheal customer &mdash; Mar 2026</p>
            </div>
            <p className="mtg-insight__direction">&rarr; Visceral customer language beats clinical descriptors every time.</p>
          </div>

          <div className="mtg-insight mtg-fade-up" style={{ transitionDelay: '0.15s' }}>
            <div className="mtg-insight__badge">Insight #4</div>
            <h3>Your product isn&apos;t changing skin. It&apos;s changing who people are willing to be.</h3>
            <div className="mtg-insight__quote-block">
              <p className="mtg-insight__quote">&ldquo;I feel confident again after a long time of not wanting anyone to see me as I was.&rdquo;</p>
              <p className="mtg-insight__date">Dermatica customer &mdash; Dec 2025</p>
            </div>
            <p className="mtg-insight__direction">&rarr; The identity transformation beneath the clinical result is where the real ad lives.</p>
          </div>

          <div className="mtg-insight mtg-fade-up" style={{ transitionDelay: '0.2s' }}>
            <div className="mtg-insight__badge">Insight #5</div>
            <h3>A 78-year-old and a 61-year-old scaffolder are your best testimonials.</h3>
            <div className="mtg-insight__quote-block">
              <p className="mtg-insight__quote">&ldquo;Essential part of my smoothie, 2 years on at a ripe old age of 61... my main occupations are plastering, scaffolding, roofing.&rdquo;</p>
              <p className="mtg-insight__date">Rheal customer &mdash; Mar 2026</p>
            </div>
            <p className="mtg-insight__direction">&rarr; These violate expectations. Surprise &rarr; credibility &rarr; aspiration.</p>
          </div>

          <div className="mtg-insight mtg-fade-up" style={{ transitionDelay: '0.25s' }}>
            <div className="mtg-insight__badge">Insight #6</div>
            <h3>Your sceptics write your best ads.</h3>
            <div className="mtg-insight__quote-block">
              <p className="mtg-insight__quote">&ldquo;I honestly didn&apos;t expect this to work for my skin as I&apos;ve tried so many different products. However this has almost completely cleared up my hormonal acne.&rdquo;</p>
              <p className="mtg-insight__date">Dermatica customer &mdash; Feb 2026</p>
            </div>
            <p className="mtg-insight__direction">&rarr; The sceptic-to-believer arc is the most powerful ad structure available.</p>
          </div>
        </div>

        <div className="mtg-fade-up" style={{ marginTop: '3rem' }}>
          <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(185,240,64,0.04)', border: '1px solid rgba(185,240,64,0.1)', borderRadius: '0.875rem', maxWidth: 680, margin: '0 auto' }}>
            <p style={{ fontSize: '1.375rem', fontWeight: 700, lineHeight: 1.4, maxWidth: 600, margin: '0 auto' }}>
              These aren&apos;t reviews. They&apos;re ad concepts waiting to be produced. Your customers did the creative strategist&apos;s job for free.
              <span className="mtg-accent"> The only thing missing is someone to extract it.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── CREATIVE STRATEGIST ── */}
      <section className="mtg-section mtg-wrap">
        <div className="mtg-two-col">
          <div className="mtg-card mtg-fade-up">
            <div style={{ fontSize: '0.8125rem', color: 'var(--fg-dim)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' as const, marginBottom: '1.25rem' }}>
              The role every brand is hiring for
            </div>
            <div style={{ fontSize: '2.625rem', fontWeight: 900, color: 'var(--lime)', marginBottom: '0.25rem' }}>2,600+</div>
            <p style={{ fontSize: '0.9375rem', color: 'var(--fg-dim)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              active &ldquo;creative strategist&rdquo; job listings in the US and UK right now
            </p>
            <div className="mtg-salary-grid">
              <div className="mtg-salary-box">
                <div className="mtg-salary-box__number">&pound;55&ndash;75K</div>
                <div className="mtg-salary-box__label">UK salary range</div>
              </div>
              <div className="mtg-salary-box">
                <div className="mtg-salary-box__number">$90&ndash;150K</div>
                <div className="mtg-salary-box__label">US salary range</div>
              </div>
            </div>
          </div>

          <div className="mtg-fade-up" style={{ transitionDelay: '0.1s' }}>
            <h2 style={{ fontSize: '2.25rem', marginBottom: '1.5rem' }}>
              The job companies are paying six figures to fill?
              <span className="mtg-accent"> Your customers are already doing half of it.</span>
            </h2>
            <div style={{ fontSize: '1rem', color: 'var(--fg-dim)', lineHeight: 1.75, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p>Creative fatigue at scale. Bridging creative and performance data. Content-market fit across platforms. These are the problems every DTC brand is scrambling to solve.</p>
              <p>The companies getting it right don&apos;t just hire someone who makes ads. They hire a systems thinker who designs the creative process itself.</p>
              <p style={{ color: 'var(--fg)', fontWeight: 600 }}>That&apos;s what VoC-driven creative strategy is. A system, not a person. And it starts with listening to what your customers are already telling you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LANGUAGE GOLD ── */}
      <section className="mtg-section mtg-wrap" style={{ borderTop: '1px solid var(--border-dark)' }}>
        <div className="mtg-text-center mtg-fade-up" style={{ marginBottom: '3.5rem' }}>
          <span className="mtg-eyebrow">Language Gold</span>
          <h2 style={{ maxWidth: 650, margin: '0 auto 0.75rem' }}>Phrases worth more than your agency retainer</h2>
          <p className="mtg-subtitle" style={{ maxWidth: 520, margin: '0 auto', fontSize: '1rem' }}>
            Every one of these was written by a customer. Every one of them is a better ad than what&apos;s running today.
          </p>
        </div>

        <div className="mtg-three-col" style={{ gap: '1rem' }}>
          <div className="mtg-lang-card mtg-fade-up">
            <div className="mtg-lang-card__phrase">&ldquo;could&apos;ve passed for 3 months pregnant&rdquo;</div>
            <div className="mtg-lang-card__potential">&rarr; TOFU hook &mdash; visual, visceral, scroll-stopping</div>
          </div>
          <div className="mtg-lang-card mtg-fade-up" style={{ transitionDelay: '0.05s' }}>
            <div className="mtg-lang-card__phrase">&ldquo;my farts have reduced by at least 75%&rdquo;</div>
            <div className="mtg-lang-card__potential">&rarr; Disruptive TOFU &mdash; humour + specificity</div>
          </div>
          <div className="mtg-lang-card mtg-fade-up" style={{ transitionDelay: '0.1s' }}>
            <div className="mtg-lang-card__phrase">&ldquo;I&apos;ve stopped searching for other miracle cures&rdquo;</div>
            <div className="mtg-lang-card__potential">&rarr; TOFU &mdash; positions as the end of the search</div>
          </div>
          <div className="mtg-lang-card mtg-fade-up" style={{ transitionDelay: '0.15s' }}>
            <div className="mtg-lang-card__phrase">&ldquo;all I wear is blush and bronzer&rdquo;</div>
            <div className="mtg-lang-card__potential">&rarr; Transformation &mdash; concrete, specific, visual</div>
          </div>
          <div className="mtg-lang-card mtg-fade-up" style={{ transitionDelay: '0.2s' }}>
            <div className="mtg-lang-card__phrase">&ldquo;if I don&apos;t take it my partner notices&rdquo;</div>
            <div className="mtg-lang-card__potential">&rarr; MOFU &mdash; involuntary third-party proof</div>
          </div>
          <div className="mtg-lang-card mtg-fade-up" style={{ transitionDelay: '0.25s' }}>
            <div className="mtg-lang-card__phrase">&ldquo;what&apos;s 5 bucks?&rdquo;</div>
            <div className="mtg-lang-card__potential">&rarr; BOFU &mdash; the customer rewrote your CTA</div>
          </div>
        </div>
      </section>

      {/* ── ALGORITHM / BRAND TENSION ── */}
      <section className="mtg-section mtg-wrap">
        <div className="mtg-featured-box mtg-fade-up">
          <h2>
            Feed the algorithm<br />
            <span className="mtg-text-dim">without poisoning your brand</span>
          </h2>
          <p>Every DTC brand on Meta feels the same tension. You need volume and variety of creative. But you&apos;re terrified that generic AI content will dilute the brand.</p>
          <p className="mtg-strong">MapTheGap resolves this. Because the creative doesn&apos;t come from AI guessing at your brand voice. It comes from your customers&apos; actual words. The most authentic language your brand will ever produce.</p>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="mtg-cta-section mtg-wrap">
        <div className="mtg-fade-up">
          <h2>
            Your customers are your creative strategists.
            <span className="mtg-accent" style={{ fontStyle: 'italic' }}> Start listening.</span>
          </h2>
        </div>
        <div className="mtg-fade-up" style={{ transitionDelay: '0.1s' }}>
          <p className="mtg-subtitle">Enter your URL. Get the full creative strategy document, daily briefs, and visual review map. Free. Takes 10 minutes.</p>
        </div>
        <div className="mtg-fade-up" style={{ transitionDelay: '0.2s' }}>
          <form className="mtg-hero__input-row" onSubmit={handleUrlSubmit}>
            <input type="text" placeholder="yourstore.com" required />
            <button type="submit" className="mtg-btn-primary">SHOW ME THE GAP</button>
          </form>
        </div>
        <div className="mtg-fade-up" style={{ transitionDelay: '0.3s' }}>
          <p className="mtg-hero__note">No credit card. No demo call. No catch.</p>
        </div>
      </section>

      {/* ── EMAIL MODAL ── */}
      <div
        ref={modalRef}
        className={`mtg-modal-overlay${modalOpen ? ' active' : ''}`}
        onClick={handleOverlayClick}
      >
        <div className="mtg-modal">
          <h2>Where should we send your analysis?</h2>
          <div className="mtg-confirm-domain">
            <span className="mtg-domain-badge">{domainDisplay}</span>
          </div>
          <form className="mtg-form-group" onSubmit={handleEmailSubmit}>
            <label htmlFor="mtgEmail">Your work email</label>
            <input
              id="mtgEmail"
              type="email"
              placeholder="you@yourcompany.com"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="mtg-btn-row">
              <button type="button" className="mtg-btn-secondary" onClick={() => setModalOpen(false)}>Back</button>
              <button type="submit" className="mtg-btn-primary" disabled={submitting}>
                {submitting ? 'STARTING...' : 'START ANALYSIS'}
              </button>
            </div>
          </form>
          <p className="mtg-disclaimer">We&apos;ll find your public reviews and analyse them. No spam, ever.</p>
          {error && <p className="mtg-error-text">{error}</p>}
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="mtg-footer">
        <div className="mtg-footer__logo">Map<span className="mtg-accent">The</span>Gap</div>
        <div className="mtg-footer__credit">Built by David at MapTheGap. 13 years. 49+ brands. One gap.</div>
      </footer>
    </div>
  )
}
