'use client'

import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

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

// Bar data for the chart
const barData = [
  // Baseline bars (gray)
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
  // Highlight bars (green)
  { x: 432, y: 102.794, height: 184, fill: '#B9F040', opacity: 0.8 },
  { x: 456, y: 63.7941, height: 223, fill: '#B9F040', opacity: 0.8 },
  { x: 480, y: 28.7941, height: 258, fill: '#B9F040', opacity: 0.8 },
  { x: 504, y: 23, height: 264, fill: '#B9F040', opacity: 0.8 },
  { x: 528, y: 17, height: 270, fill: '#B9F040', opacity: 0.8 },
  { x: 552, y: 13, height: 274, fill: '#B9F040', opacity: 0.8 },
  { x: 576, y: 0, height: 287, fill: '#B9F040', opacity: 0.8 },
  { x: 600, y: 0, height: 287, fill: '#B9F040', opacity: 0.8 },
]

export default function ImpactChart() {
  const svgRef = useRef<SVGSVGElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { 
        threshold: 0.3,
        rootMargin: '0px'
      }
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
                
                {/* Bars with inline styles controlled by React state */}
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
                      opacity: isVisible ? 1 : 0,
                      transition: `opacity 0.4s ease-out ${index * 0.05}s`
                    }}
                  />
                ))}
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
