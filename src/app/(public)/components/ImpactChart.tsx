'use client'

import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

const variants: { fadeUp: Variants } = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const } 
    },
  },
}

export default function ImpactChart() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            svg.classList.add('chart-visible')
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
    <section id="impact" className="bg-[#1A2B3C] py-16 md:py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        {/* Full-width headline section */}
        <motion.div
          className="mb-4 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3, once: true }}
          variants={variants.fadeUp}
        >
          <p className="text-sm uppercase tracking-widest text-neutral-300 mb-4">Why work with David Rawlings?</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            <span className="text-[#B9F040] relative after:absolute after:inset-0 after:blur-xl after:bg-lime-200/50 after:-z-10" aria-label="results with glow effect">Results</span> that speak for themselves
          </h2>
        </motion.div>

        {/* Two-column content */}
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-12 lg:gap-16 md:items-end md:px-8">
          {/* Left Column - Stat Card */}
          <div className="order-2 md:order-1 pb-8 md:pb-0 md:pr-8">
            <motion.div
              variants={variants.fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3, once: true }}
              className="bg-[#2A3B4C] border border-neutral-600 shadow-sm rounded-xl p-8 md:p-10 max-w-lg"
            >
              <p className="text-6xl font-bold text-white">+214%</p>
              <p className="text-xl font-semibold mt-2 text-white">Improvement in ab test profitability with customer-led strategy</p>
              <p className="text-neutral-300 mt-4">
                &ldquo;Clear data storytelling unlocked real growth.&rdquo;
              </p>

              <div className="flex items-center gap-4 mt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/mark_morley_avatar.jpeg"
                    alt="Mark Morley"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white">Mark Morley</p>
                  <p className="text-sm text-neutral-300">
                    Co-Founder at <span className="text-[#B9F040] font-medium">Prep Kitchen</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - SVG Bar Chart */}
          <div className="order-1 md:order-2 relative mb-8 md:mb-0 flex flex-col items-center justify-end md:pl-8">
            <motion.div 
              variants={variants.fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3, once: true }}
              className="md:scale-[1.8] md:origin-bottom md:mb-8"
            >
              <svg ref={svgRef} viewBox="0 0 614 287" className="w-full h-auto" role="img" aria-labelledby="chart-title" aria-describedby="chart-desc">
                <title id="chart-title">Growth Rate Chart</title>
                <desc id="chart-desc">A bar chart showing growth rate over time, with highlighted bars representing improved performance</desc>
                
                {/* Baseline bars - Using CSS animation for Safari iOS compatibility */}
                <rect className="chart-bar" y="209.794" width="17.25" height="77" rx="3" fill="#F9FAF2" fillOpacity="0.7" />
                <rect className="chart-bar" x="24" y="206.794" width="17.25" height="80" rx="3" fill="#F9FAF2" fillOpacity="0.7" />
                <rect className="chart-bar" x="48" y="159.794" width="17.25" height="127" rx="3" fill="#F9FAF2" fillOpacity="0.7" />
                <rect className="chart-bar" x="72" y="211.794" width="17.25" height="75" rx="3" fill="#F9FAF2" fillOpacity="0.7" />
                <rect className="chart-bar" x="96" y="221.794" width="17.25" height="65" rx="3" fill="#F9FAF2" fillOpacity="0.7" />
                <rect className="chart-bar" x="120" y="230.794" width="17.25" height="56" rx="3" fill="#F9FAF2" fillOpacity="0.7" />
                <rect className="chart-bar" x="144" y="221.794" width="17.25" height="65" rx="3" fill="#F9FAF2" fillOpacity="0.7" />
                <rect className="chart-bar" x="168" y="211.794" width="17.25" height="75" rx="3" fill="#F9FAF2" fillOpacity="0.7" />
                <rect className="chart-bar" x="192" y="230.794" width="17.25" height="56" rx="3" fill="#F9FAF2" fillOpacity="0.7" />
                <rect className="chart-bar" x="216" y="159.794" width="17.25" height="127" rx="3" fill="#F9FAF2" fillOpacity="0.7" />
                <rect className="chart-bar" x="240" y="145.794" width="17.25" height="141" rx="3" fill="#F9FAF2" fillOpacity="0.7" />
                <rect className="chart-bar" x="264" y="130.794" width="17.25" height="156" rx="3" fill="#F9FAF2" fillOpacity="0.7" />
                <rect className="chart-bar" x="288" y="181.794" width="17.25" height="105" rx="3" fill="#F9FAF2" fillOpacity="0.7" />
                <rect className="chart-bar" x="312" y="195.794" width="17.25" height="91" rx="3" fill="#F9FAF2" fillOpacity="0.7" />
                <rect className="chart-bar" x="336" y="181.794" width="17.25" height="105" rx="3" fill="#F9FAF2" fillOpacity="0.7" />
                <rect className="chart-bar" x="360" y="170.794" width="17.25" height="116" rx="3" fill="#F9FAF2" fillOpacity="0.7" />
                <rect className="chart-bar" x="384" y="175.794" width="17.25" height="111" rx="3" fill="#F9FAF2" fillOpacity="0.7" />
                <rect className="chart-bar" x="408" y="170.794" width="17.25" height="116" rx="3" fill="#F9FAF2" fillOpacity="0.7" />
                
                {/* Highlight bars */}
                <rect className="chart-bar" x="432" y="102.794" width="17.25" height="184" rx="3" fill="#B9F040" fillOpacity="0.8" />
                <rect className="chart-bar" x="456" y="63.7941" width="17.25" height="223" rx="3" fill="#B9F040" fillOpacity="0.8" />
                <rect className="chart-bar" x="480" y="28.7941" width="17.25" height="258" rx="3" fill="#B9F040" fillOpacity="0.8" />
                <rect className="chart-bar" x="504" y="23" width="17.25" height="264" rx="3" fill="#B9F040" fillOpacity="0.8" />
                <rect className="chart-bar" x="528" y="17" width="17.25" height="270" rx="3" fill="#B9F040" fillOpacity="0.8" />
                <rect className="chart-bar" x="552" y="13" width="17.25" height="274" rx="3" fill="#B9F040" fillOpacity="0.8" />
                <rect className="chart-bar" x="576" y="0" width="17.25" height="287" rx="3" fill="#B9F040" fillOpacity="0.8" />
                <rect className="chart-bar" x="600" y="0" width="17.25" height="287" rx="3" fill="#B9F040" fillOpacity="0.8" />
              </svg>
            </motion.div>

            <motion.div 
              className="mt-4 text-sm flex items-center gap-2 text-white md:scale-[1.8] md:origin-bottom md:mt-5"
              variants={variants.fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3, once: true }}
            >
              <span className="inline-block w-2 h-2 rounded-full bg-[#B9F040]"></span>
              Growth Rate
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
