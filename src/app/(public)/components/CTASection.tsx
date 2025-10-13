'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const createFadeVariants = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, delay, ease: [0.25, 0.46, 0.45, 0.94] as const } 
  },
});

export default function CTASection() {
  const reduce = useReducedMotion();

  return (
    <section aria-labelledby="cta-title" className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8 py-16 md:py-24">
        <motion.div
          variants={reduce ? undefined : createFadeVariants()}
          initial="initial"
          whileInView="animate"
          viewport={{ amount: 0.3, once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1A2B3C] to-[#0F1B28] border border-neutral-800"
        >
          <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 items-center p-8 md:p-12 lg:p-16">
            {/* Text Content - Desktop */}
            <div className="space-y-4 md:space-y-6 md:order-1">
              <h2 id="cta-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Want to put our system to work on your business?
              </h2>
              <p className="text-lg md:text-xl text-neutral-300">
                Get the whole thing paid for with one free test - take the Landing Page Challenge.
              </p>
              {/* Button on desktop */}
              <Link 
                href="/challenge"
                className="hidden md:inline-flex items-center justify-center bg-[#B9F040] text-black px-8 py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-[#a0d636] transition-colors shadow-lg hover:shadow-xl"
              >
                Take the Landing Page Challenge
                <svg 
                  className="ml-2 w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2.5} 
                    d="M13 7l5 5m0 0l-5 5m5-5H6" 
                  />
                </svg>
              </Link>
            </div>

            {/* Image */}
            <div className="relative w-full aspect-square md:aspect-auto md:h-[400px] md:order-2">
              <Image
                src="https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/graphics/ab-test-image.png"
                alt="MRR +$17K/m Program Paid For - A/B Test Results"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Button on mobile - appears after image */}
            <Link 
              href="/challenge"
              className="md:hidden w-full inline-flex items-center justify-center bg-[#B9F040] text-black px-8 py-4 rounded-lg font-semibold text-base hover:bg-[#a0d636] transition-colors shadow-lg hover:shadow-xl"
            >
              Take the Landing Page Challenge
              <svg 
                className="ml-2 w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2.5} 
                  d="M13 7l5 5m0 0l-5 5m5-5H6" 
                />
              </svg>
            </Link>
          </div>

          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#B9F040]/5 to-transparent pointer-events-none" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}

