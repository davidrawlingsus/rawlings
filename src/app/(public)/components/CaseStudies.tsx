'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

type CaseStudy = {
  id: string;
  brand: string;
  logoSrc: string;
  logoAlt: string;
  imageSrc: string;
  metric: string;
  title: string;
  quote: string;
  ctaHref: string;
};

interface CaseStudiesProps {
  readAllHref?: string;
  rotateMs?: number;
}

// Static case study data
const caseStudies: CaseStudy[] = [
  {
    id: 'garden-cup',
    brand: 'Garden Cup',
    logoSrc: '/images/case-studies/garden-cup-logo.svg',
    logoAlt: 'Garden Cup logo',
    imageSrc: '/images/case-studies/garden-cup-hero.svg',
    metric: '+76%',
    title: 'Garden Cup Switched from JustUno and Grew Flow Revenue',
    quote: 'We switched from JustUno to David Rawlings and immediately saw the difference. It\'s hands-down one of the smartest moves we\'ve made.',
    ctaHref: '/case-studies/garden-cup'
  },
  {
    id: 'hostage-tape',
    brand: 'Hostage Tape',
    logoSrc: '/images/case-studies/hostage-tape-logo.svg',
    logoAlt: 'Hostage Tape logo',
    imageSrc: '/images/case-studies/hostage-tape-hero.svg',
    metric: '+45%',
    title: 'Hostage Tape Increased Email Signups with Smart Popups',
    quote: 'David Rawlings helped us capture more leads without being intrusive. Our conversion rate improved dramatically.',
    ctaHref: '/case-studies/hostage-tape'
  },
  {
    id: 'mihigh',
    brand: 'MiHIGH',
    logoSrc: '/images/case-studies/mihigh-logo.svg',
    logoAlt: 'MiHIGH logo',
    imageSrc: '/images/case-studies/mihigh-hero.svg',
    metric: '+62%',
    title: 'MiHIGH Boosted Revenue with Personalized Offers',
    quote: 'The personalization features in David Rawlings made all the difference. Our customers love the tailored experience.',
    ctaHref: '/case-studies/mihigh'
  },
  {
    id: 'essence-vault',
    brand: 'The Essence Vault',
    logoSrc: '/images/case-studies/essence-vault-logo.svg',
    logoAlt: 'The Essence Vault logo',
    imageSrc: '/images/case-studies/essence-vault-hero.svg',
    metric: '+38%',
    title: 'The Essence Vault Enhanced Customer Data Collection',
    quote: 'We now have much better insights into our customers thanks to David Rawlings\'s data collection tools.',
    ctaHref: '/case-studies/essence-vault'
  }
];

export default function CaseStudies({
  readAllHref = '/case-studies',
  rotateMs = 6000,
}: CaseStudiesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Auto-rotation logic
  useEffect(() => {
    if (isPaused || prefersReducedMotion) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % caseStudies.length);
    }, rotateMs);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, prefersReducedMotion, rotateMs]);

  const handleLogoClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const handleCarouselFocus = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handleCarouselBlur = useCallback(() => {
    setIsPaused(false);
  }, []);

  const handleCarouselMouseEnter = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handleCarouselMouseLeave = useCallback(() => {
    setIsPaused(false);
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        setActiveIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
        break;
      case 'ArrowRight':
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % caseStudies.length);
        break;
      case 'Home':
        e.preventDefault();
        setActiveIndex(0);
        break;
      case 'End':
        e.preventDefault();
        setActiveIndex(caseStudies.length - 1);
        break;
    }
  }, []);

  // Touch handling
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartX.current - touchEndX;
    const threshold = 50;

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        // Swipe left - next slide
        setActiveIndex((prev) => (prev + 1) % caseStudies.length);
      } else {
        // Swipe right - previous slide
        setActiveIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
      }
    }
    
    touchStartX.current = null;
  }, []);

  const handleDotClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const currentCaseStudy = caseStudies[activeIndex];

  return (
    <section 
      aria-label="Customer case studies"
      className="py-16 md:py-24 bg-slate-900"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wide text-slate-400 mb-4">CASE STUDIES</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Success stories with <span className="text-[#B9F040]">David Rawlings</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            The <span className="text-[#B9F040]">fastest-growing</span> brands on Shopify use David Rawlings
          </p>
          <p className="text-base text-slate-400 mt-4 max-w-2xl mx-auto">
            See how 1,000+ brands used David Rawlings to boost opt-in rates, increase sales, collect data, and more
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-[420px_minmax(0,1fr)] lg:gap-12">
          {/* Left Column - Logo Grid */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {caseStudies.map((study, index) => (
                <button
                  key={study.id}
                  onClick={() => handleLogoClick(index)}
                  aria-controls={`case-slide-${study.id}`}
                  aria-pressed={index === activeIndex}
                  aria-label={`View ${study.brand} case study`}
                  className={`
                    relative p-4 rounded-xl border shadow-sm transition-all duration-200
                    bg-slate-800 border-slate-700 hover:bg-slate-750
                    ${index === activeIndex 
                      ? 'ring-2 ring-[#B9F040] ring-offset-2 ring-offset-slate-900' 
                      : ''
                    }
                    focus:outline-none focus:ring-2 focus:ring-[#B9F040] focus:ring-offset-2 focus:ring-offset-slate-900
                  `}
                >
                  <div className="flex items-center justify-center h-16">
                    <Image
                      src={study.logoSrc}
                      alt={study.logoAlt}
                      width={120}
                      height={64}
                      className="max-h-full max-w-full object-contain"
                      sizes="120px"
                    />
                  </div>
                </button>
              ))}
            </div>
            
            {/* Read All Case Studies CTA */}
            <Button
              asChild
              variant="outline"
              className="w-full border-slate-600 text-white hover:bg-slate-800"
            >
              <Link href={readAllHref}>
                READ ALL CASE STUDIES
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Right Column - Carousel */}
          <div 
            ref={carouselRef}
            className="relative"
            onFocus={handleCarouselFocus}
            onBlur={handleCarouselBlur}
            onMouseEnter={handleCarouselMouseEnter}
            onMouseLeave={handleCarouselMouseLeave}
            onKeyDown={handleKeyDown}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            tabIndex={0}
            role="group"
            aria-label="Case study carousel"
            aria-live="polite"
          >
            <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${currentCaseStudy.brand} case study`}
                  id={`case-slide-${currentCaseStudy.id}`}
                >
                  {/* Hero Image */}
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <Image
                      src={currentCaseStudy.imageSrc}
                      alt={`${currentCaseStudy.brand} case study hero image`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={false}
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-white text-2xl font-bold">
                        {currentCaseStudy.brand.toLowerCase()}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <div className="text-5xl md:text-6xl font-semibold text-[#B9F040] mb-4">
                      {currentCaseStudy.metric}
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">
                      {currentCaseStudy.title}
                    </h3>
                    <blockquote className="text-base md:text-lg text-slate-600 mb-6 italic">
                      &ldquo;{currentCaseStudy.quote}&rdquo;
                    </blockquote>
                    <Button asChild variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                      <Link href={currentCaseStudy.ctaHref}>
                        READ FULL POST
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot Pagination */}
            <div className="flex justify-center mt-6 space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Slide ${index + 1} of ${caseStudies.length}: ${caseStudies[index].brand}`}
                  className={`
                    w-2 h-2 rounded-full transition-all duration-200
                    ${index === activeIndex 
                      ? 'bg-[#B9F040] w-6' 
                      : 'bg-slate-300 hover:bg-slate-400'
                    }
                    focus:outline-none focus:ring-2 focus:ring-[#B9F040] focus:ring-offset-2 focus:ring-offset-slate-900
                  `}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {/* Logo Grid */}
          <div className="grid grid-cols-2 gap-4">
            {caseStudies.map((study, index) => (
              <button
                key={study.id}
                onClick={() => handleLogoClick(index)}
                aria-controls={`case-slide-${study.id}`}
                aria-pressed={index === activeIndex}
                aria-label={`View ${study.brand} case study`}
                className={`
                  relative p-4 rounded-xl border shadow-sm transition-all duration-200
                  bg-slate-800 border-slate-700 hover:bg-slate-750
                  ${index === activeIndex 
                    ? 'ring-2 ring-[#B9F040] ring-offset-2 ring-offset-slate-900' 
                    : ''
                  }
                  focus:outline-none focus:ring-2 focus:ring-[#B9F040] focus:ring-offset-2 focus:ring-offset-slate-900
                `}
              >
                <div className="flex items-center justify-center h-16">
                  <Image
                    src={study.logoSrc}
                    alt={study.logoAlt}
                    width={120}
                    height={64}
                    className="max-h-full max-w-full object-contain"
                    sizes="120px"
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Read All Case Studies CTA */}
          <div className="text-center">
            <Button
              asChild
              variant="outline"
              className="w-full max-w-sm border-slate-600 text-white hover:bg-slate-800"
            >
              <Link href={readAllHref}>
                READ ALL CASE STUDIES
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile Carousel */}
          <div 
            ref={carouselRef}
            className="relative"
            onFocus={handleCarouselFocus}
            onBlur={handleCarouselBlur}
            onMouseEnter={handleCarouselMouseEnter}
            onMouseLeave={handleCarouselMouseLeave}
            onKeyDown={handleKeyDown}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            tabIndex={0}
            role="group"
            aria-label="Case study carousel"
            aria-live="polite"
          >
            <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${currentCaseStudy.brand} case study`}
                  id={`case-slide-${currentCaseStudy.id}`}
                >
                  {/* Hero Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={currentCaseStudy.imageSrc}
                      alt={`${currentCaseStudy.brand} case study hero image`}
                      fill
                      className="object-cover"
                      sizes="100vw"
                      priority={false}
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-white text-xl font-bold">
                        {currentCaseStudy.brand.toLowerCase()}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="text-4xl font-semibold text-[#B9F040] mb-4">
                      {currentCaseStudy.metric}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">
                      {currentCaseStudy.title}
                    </h3>
                    <blockquote className="text-base text-slate-600 mb-6 italic">
                      &ldquo;{currentCaseStudy.quote}&rdquo;
                    </blockquote>
                    <Button asChild variant="outline" className="w-full border-slate-300 text-slate-700 hover:bg-slate-50">
                      <Link href={currentCaseStudy.ctaHref}>
                        READ FULL POST
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot Pagination */}
            <div className="flex justify-center mt-6 space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Slide ${index + 1} of ${caseStudies.length}: ${caseStudies[index].brand}`}
                  className={`
                    w-2 h-2 rounded-full transition-all duration-200
                    ${index === activeIndex 
                      ? 'bg-[#B9F040] w-6' 
                      : 'bg-slate-300 hover:bg-slate-400'
                    }
                    focus:outline-none focus:ring-2 focus:ring-[#B9F040] focus:ring-offset-2 focus:ring-offset-slate-900
                  `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}