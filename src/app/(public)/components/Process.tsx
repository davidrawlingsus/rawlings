'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import * as React from 'react';

const STEPS = [
  {
    id: '01', title: 'Onboarding',
    items: [
      'Meet and Greet Questionnaire',
      'Welcome Packet with Scope of Work',
      '90 Minute Creative Clarity Call',
      'Design Contract',
    ],
  },
  {
    id: '02', title: 'Brand Strategy',
    items: [
      'Mission, Vision & Values',
      'Messaging, Brand Tone, & Voice',
      'Competitive Analysis & Positioning',
      'Audience Avatars & Archetypes',
    ],
  },
  {
    id: '03', title: 'Visual Identity',
    items: [
      'Visual Identity System',
      'Style Guide/Brand Guidelines',
      'Packaged Deliverables',
      'Client Feedback & Revisions',
    ],
  },
  {
    id: '04', title: 'Web Design',
    items: [
      'Content Wireframing',
      'UI/UX Design',
      'Prototyping',
      'Client Feedback & Revisions',
    ],
  },
  {
    id: '05', title: 'Web Development',
    items: [
      'WordPress Development',
      'Mobile and Tablet Responsive',
      'Testing and QA',
      'SEO Prep',
    ],
  },
  {
    id: '06', title: 'Launch',
    items: [
      'Site Migration',
      'Site Management Tutorial',
      'Promo Graphics Announcing Launch',
      'Project Offboarding',
    ],
  },
] as const;

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.25, delay } },
});

function ArrowRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 24" className="w-8 h-4 text-neutral-300">
      <path d="M0 12h40M32 4l8 8-8 8" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}

function ArrowLeft() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 24" className="w-8 h-4 text-neutral-300">
      <path d="M48 12H8M16 4L8 12l8 8" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 48" className="w-4 h-8 text-neutral-300">
      <path d="M12 0v40M4 32l8 8 8-8" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}

export default function Process() {
  const reduce = useReducedMotion();

  return (
    <section id="process" aria-labelledby="process-title" className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8 py-16 md:py-24">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <Image
            src="/logo.svg" alt="Brand mark" width={48} height={48}
            className="shrink-0"
          />
          <h2 id="process-title" className="text-3xl font-medium tracking-tight text-neutral-900">
            Our Signature Process
          </h2>
        </div>

        {/* Mobile (stacked timeline) */}
        <div className="md:hidden">
          {STEPS.map((step, i) => (
            <React.Fragment key={step.id}>
              <motion.article
                {...(reduce ? {} : fade(i * 0.05))}
                aria-labelledby={`step-${step.id}-title`}
                className="rounded-2xl border border-neutral-200 p-6"
              >
                <div className="text-neutral-500 text-sm font-medium">{step.id}.</div>
                <h3 id={`step-${step.id}-title`} className="mt-1 text-xl text-neutral-900">
                  {step.title}
                </h3>
                <ul className="mt-4 space-y-2 text-neutral-700">
                  {step.items.map((t) => (
                    <li key={t} className="flex gap-2">
                      <span aria-hidden className="text-neutral-400">+</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
              {i < STEPS.length - 1 && (
                <div className="flex justify-center my-6" aria-hidden>
                  <ArrowDown />
                </div>
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
              {...(reduce ? {} : fade(i * 0.05))}
              aria-labelledby={`step-${step.id}-title-desktop`}
              className="relative rounded-2xl border border-neutral-200 p-6 bg-white"
            >
              <div className="text-neutral-500 text-sm font-medium">{step.id}.</div>
              <h3 id={`step-${step.id}-title-desktop`} className="mt-1 text-xl text-neutral-900">
                {step.title}
              </h3>
              <ul className="mt-4 space-y-2 text-neutral-700">
                {step.items.map((t) => (
                  <li key={t} className="flex gap-2">
                    <span aria-hidden className="text-neutral-400">+</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              {/* Right arrows between 01→02 and 02→03 */}
              {i < 2 && (
                <div
                  aria-hidden
                  className="absolute -right-5 top-1/2 -translate-y-1/2"
                >
                  <ArrowRight />
                </div>
              )}

              {/* Down arrow from 03 to 04 */}
              {step.id === '03' && (
                <div
                  aria-hidden
                  className="absolute left-1/2 -bottom-8 -translate-x-1/2"
                >
                  <ArrowDown />
                </div>
              )}
            </motion.article>
          ))}

          {/* Row 2: 06 ← 05 ← 04 (reverse order) */}
          {[...STEPS].slice(3).reverse().map((step, i) => (
            <motion.article
              key={step.id}
              {...(reduce ? {} : fade(0.15 + i * 0.05))}
              aria-labelledby={`step-${step.id}-title-desktop-2`}
              className="relative rounded-2xl border border-neutral-200 p-6 bg-white"
            >
              <div className="text-neutral-500 text-sm font-medium">{step.id}.</div>
              <h3 id={`step-${step.id}-title-desktop-2`} className="mt-1 text-xl text-neutral-900">
                {step.title}
              </h3>
              <ul className="mt-4 space-y-2 text-neutral-700">
                {step.items.map((t) => (
                  <li key={t} className="flex gap-2">
                    <span aria-hidden className="text-neutral-400">+</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              {/* Left arrows between 06←05 and 05←04 */}
              {i < 2 && (
                <div
                  aria-hidden
                  className="absolute -left-5 top-1/2 -translate-y-1/2"
                >
                  <ArrowLeft />
                </div>
              )}
            </motion.article>
          ))}
        </div>

        {/* CTA band */}
        <motion.div
          {...(reduce ? {} : fade(0.3))}
          className="mt-14 flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl border border-neutral-200 p-6"
        >
          <p className="text-lg text-neutral-900">Ready To Build Your Personal Brand?</p>
          <Button asChild>
            <a href="#contact" aria-label="Book a discovery call">Book A Discovery Call</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
