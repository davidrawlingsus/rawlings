'use client';

import { motion, useReducedMotion } from 'framer-motion';
import * as React from 'react';

const STEPS = [
  {
    id: '01', 
    title: 'Funnel Audit',
    description: 'Ensure every insight starts with truth.',
    items: [
      'Check tracking and analytics setup',
      'Find gaps or errors in your funnel data',
      'Confirm key conversions are being recorded',
      'Give you a clear picture of what\'s working (and what\'s not)',
    ],
  },
  {
    id: '02', 
    title: 'Build Listening Systems',
    description: 'Build the infrastructure that hears your customers at scale.',
    items: [
      'Add surveys and feedback prompts where they matter most',
      'Connect reviews, forms, and chat data',
      'Bring all feedback into one place',
      'Start collecting insight you can actually use',
    ],
  },
  {
    id: '03', 
    title: 'AI Analysis',
    description: 'Turn words into structured insight.',
    items: [
      'Group comments by theme and topic',
      'Spot the words that drive or block sales',
      'Highlight trends and customer language',
      'Summarise everything fast with AI',
    ],
  },
  {
    id: '04', 
    title: 'Triage',
    description: 'Decide what to fix, test, or scale first.',
    items: [
      'Sort findings by impact and effort',
      'Turn insight into clear next steps',
      'Choose what to test or fix right away',
      'Build a focused plan for improvement',
    ],
  },
  {
    id: '05', 
    title: 'Test',
    description: 'Prove what persuades.',
    items: [
      'Design quick, meaningful A/B tests',
      'Test new messages, layouts, or offers',
      'Track results and learn from every outcome',
      'Keep what wins, ditch what doesn\'t',
    ],
  },
  {
    id: '06', 
    title: 'Grow',
    description: 'Systematize and scale what works.',
    items: [
      'Roll proven ideas across your site and channels',
      'Automate what you can',
      'Keep measuring and refining',
      'Turn testing into a steady growth engine',
    ],
  },
] as const;

const createFadeVariants = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, delay, ease: [0.25, 0.46, 0.45, 0.94] as const } 
  },
});

const createArrowVariants = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.3, delay, ease: [0.25, 0.46, 0.45, 0.94] as const } 
  },
});

function ArrowRight() {
  return (
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
  );
}

function ArrowLeft() {
  return (
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
  );
}

function ArrowDown() {
  return (
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
  );
}

export default function Process() {
  const reduce = useReducedMotion();

  return (
    <section id="process" aria-labelledby="process-title" className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8 pt-8 pb-16 md:pt-16 md:pb-24">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 id="process-title" className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A2B3C]">
            The process that gets results
          </h2>
        </div>

        {/* Mobile (stacked timeline) */}
        <div className="md:hidden">
          {STEPS.map((step, i) => (
            <React.Fragment key={step.id}>
              <motion.article
                variants={reduce ? undefined : createFadeVariants(i * 0.1)}
                initial="initial"
                whileInView="animate"
                viewport={{ amount: 0.3, once: true }}
                aria-labelledby={`step-${step.id}-title`}
                className="rounded-2xl border border-neutral-200 p-6 hover:border-[#B9F040]/30 transition-colors"
              >
                <div className="text-[#B9F040] text-sm font-bold">{step.id}.</div>
                <h3 id={`step-${step.id}-title`} className="mt-1 text-xl font-semibold text-[#1A2B3C]">
                  {step.title}
                </h3>
                <p className="mt-2 text-neutral-600">{step.description}</p>
                <ul className="mt-4 space-y-2 text-neutral-700">
                  {step.items.map((t) => (
                    <li key={t} className="flex gap-2">
                      <span aria-hidden className="text-[#B9F040]">+</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
              {i < STEPS.length - 1 && (
                <motion.div 
                  className="flex justify-center my-2" 
                  aria-hidden
                  variants={reduce ? undefined : createArrowVariants(i * 0.1 + 0.05)}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ amount: 0.3, once: true }}
                >
                  <ArrowDown />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Desktop (3x2 grid with directional arrows) */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {/* Row 1: 01 → 02 → 03 */}
          {STEPS.slice(0, 3).map((step, i) => (
            <motion.article
              key={step.id}
              variants={reduce ? undefined : createFadeVariants(i * 0.1)}
              initial="initial"
              whileInView="animate"
              viewport={{ amount: 0.3, once: true }}
              aria-labelledby={`step-${step.id}-title-desktop`}
              className="relative rounded-2xl border border-neutral-200 p-6 bg-white hover:border-[#B9F040]/30 transition-colors"
            >
              <div className="text-[#B9F040] text-sm font-bold">{step.id}.</div>
              <h3 id={`step-${step.id}-title-desktop`} className="mt-1 text-xl font-semibold text-[#1A2B3C]">
                {step.title}
              </h3>
              <p className="mt-2 text-neutral-600">{step.description}</p>
              <ul className="mt-4 space-y-2 text-neutral-700">
                {step.items.map((t) => (
                  <li key={t} className="flex gap-2">
                    <span aria-hidden className="text-[#B9F040]">+</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              {/* Right arrows between 01→02 and 02→03 */}
              {i < 2 && (
                <motion.div
                  aria-hidden
                  className="absolute -right-10 top-1/2 -translate-y-1/2 z-10"
                  variants={reduce ? undefined : createArrowVariants(i * 0.1 + 0.05)}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ amount: 0.3, once: true }}
                >
                  <ArrowRight />
                </motion.div>
              )}

              {/* Down arrow from 03 to 04 */}
              {step.id === '03' && (
                <motion.div
                  aria-hidden
                  className="absolute left-1/2 -bottom-12 -translate-x-1/2 z-10"
                  variants={reduce ? undefined : createArrowVariants(0.25)}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ amount: 0.3, once: true }}
                >
                  <ArrowDown />
                </motion.div>
              )}
            </motion.article>
          ))}

          {/* Row 2: 06 ← 05 ← 04 (reverse order) */}
          {[...STEPS].slice(3).reverse().map((step, i) => (
            <motion.article
              key={step.id}
              variants={reduce ? undefined : createFadeVariants(0.3 + i * 0.1)}
              initial="initial"
              whileInView="animate"
              viewport={{ amount: 0.3, once: true }}
              aria-labelledby={`step-${step.id}-title-desktop-2`}
              className="relative rounded-2xl border border-neutral-200 p-6 bg-white hover:border-[#B9F040]/30 transition-colors"
            >
              <div className="text-[#B9F040] text-sm font-bold">{step.id}.</div>
              <h3 id={`step-${step.id}-title-desktop-2`} className="mt-1 text-xl font-semibold text-[#1A2B3C]">
                {step.title}
              </h3>
              <p className="mt-2 text-neutral-600">{step.description}</p>
              <ul className="mt-4 space-y-2 text-neutral-700">
                {step.items.map((t) => (
                  <li key={t} className="flex gap-2">
                    <span aria-hidden className="text-[#B9F040]">+</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              {/* Left arrows between 06←05 and 05←04 */}
              {i > 0 && (
                <motion.div
                  aria-hidden
                  className="absolute -left-10 top-1/2 -translate-y-1/2 z-10"
                  variants={reduce ? undefined : createArrowVariants(0.35 + i * 0.1)}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ amount: 0.3, once: true }}
                >
                  <ArrowLeft />
                </motion.div>
              )}
            </motion.article>
          ))}
        </div>

        {/* CTA band */}
        <motion.div
          variants={reduce ? undefined : createFadeVariants(0.6)}
          initial="initial"
          whileInView="animate"
          viewport={{ amount: 0.3, once: true }}
          className="mt-14 hidden md:flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl bg-[#1A2B3C] border border-[#1A2B3C] p-6"
        >
          <p className="text-lg text-white">Ready to turn feedback into growth?</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="bg-[#B9F040] text-black px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#a0d636] transition-colors inline-flex items-center justify-center">
              Book a strategy call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
