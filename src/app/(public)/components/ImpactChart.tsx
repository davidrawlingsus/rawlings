'use client'

import { motion, Variants } from 'framer-motion'
import Image from 'next/image'

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

// Function to create bar animation variants with proper delay based on x position
const createBarVariants = (xPosition: number): Variants => ({
  hidden: { scaleY: 0, opacity: 0 },
  visible: { 
    scaleY: 1, 
    opacity: 1, 
    transition: { 
      duration: 0.4, 
      ease: [0.25, 0.46, 0.45, 0.94] as const, // easeOut cubic-bezier
      delay: xPosition * 0.05 // 0.05s delay per 24px increment (approximate)
    } 
  },
})

export default function ImpactChart() {
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
              <p className="text-xl font-semibold mt-2 text-white">Improvement in conversion rate after analytics-led redesign</p>
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
              <svg viewBox="0 0 614 287" className="w-full h-auto" role="img" aria-labelledby="chart-title" aria-describedby="chart-desc">
                <title id="chart-title">Net New Subscribers Growth Chart</title>
                <desc id="chart-desc">A bar chart showing growth in net new subscribers over time, with highlighted bars representing improved performance</desc>
                
                {/* Baseline bars */}
                <motion.rect 
                  y="209.794" 
                  width="17.25" 
                  height="77" 
                  rx="3" 
                  fill="#F9FAF2" 
                  fillOpacity="0.7"
                  variants={createBarVariants(0)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3, once: true }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.rect 
                  x="24" 
                  y="206.794" 
                  width="17.25" 
                  height="80" 
                  rx="3" 
                  fill="#F9FAF2" 
                  fillOpacity="0.7"
                  variants={createBarVariants(1)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3, once: true }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.rect 
                  x="48" 
                  y="159.794" 
                  width="17.25" 
                  height="127" 
                  rx="3" 
                  fill="#F9FAF2" 
                  fillOpacity="0.7"
                  variants={createBarVariants(2)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3, once: true }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.rect 
                  x="72" 
                  y="211.794" 
                  width="17.25" 
                  height="75" 
                  rx="3" 
                  fill="#F9FAF2" 
                  fillOpacity="0.7"
                  variants={createBarVariants(3)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3, once: true }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.rect 
                  x="96"
                  y="221.794"
                  width="17.25"
                  height="65"
                  rx="3"
                  fill="#F9FAF2"
                  fillOpacity="0.7"
                  variants={createBarVariants(4)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3, once: true }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.rect 
                  x="120"
                  y="230.794"
                  width="17.25"
                  height="56"
                  rx="3"
                  fill="#F9FAF2"
                  fillOpacity="0.7"
                  variants={createBarVariants(5)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3, once: true }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.rect 
                  x="144" 
                  y="221.794" 
                  width="17.25" 
                  height="65" 
                  rx="3" 
                  fill="#F9FAF2" 
                  fillOpacity="0.7"
                  variants={createBarVariants(6)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3, once: true }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.rect 
                  x="168" 
                  y="211.794" 
                  width="17.25" 
                  height="75" 
                  rx="3" 
                  fill="#F9FAF2" 
                  fillOpacity="0.7"
                  variants={createBarVariants(7)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3, once: true }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.rect 
                  x="192" 
                  y="230.794" 
                  width="17.25" 
                  height="56" 
                  rx="3" 
                  fill="#F9FAF2" 
                  fillOpacity="0.7"
                  variants={createBarVariants(8)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3, once: true }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.rect 
                  x="216" 
                  y="159.794" 
                  width="17.25" 
                  height="127" 
                  rx="3" 
                  fill="#F9FAF2" 
                  fillOpacity="0.7"
                  variants={createBarVariants(9)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3, once: true }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.rect 
                  x="240" 
                  y="145.794" 
                  width="17.25" 
                  height="141" 
                  rx="3" 
                  fill="#F9FAF2" 
                  fillOpacity="0.7"
                  variants={createBarVariants(10)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3, once: true }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.rect 
                  x="264" 
                  y="130.794" 
                  width="17.25" 
                  height="156" 
                  rx="3" 
                  fill="#F9FAF2" 
                  fillOpacity="0.7"
                  variants={createBarVariants(11)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3, once: true }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.rect 
                  x="288" 
                  y="181.794" 
                  width="17.25" 
                  height="105" 
                  rx="3" 
                  fill="#F9FAF2" 
                  fillOpacity="0.7"
                  variants={createBarVariants(12)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3, once: true }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.rect 
                  x="312" 
                  y="195.794" 
                  width="17.25" 
                  height="91" 
                  rx="3" 
                  fill="#F9FAF2" 
                  fillOpacity="0.7"
                  variants={createBarVariants(13)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3, once: true }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.rect 
                  x="336" 
                  y="181.794" 
                  width="17.25" 
                  height="105" 
                  rx="3" 
                  fill="#F9FAF2" 
                  fillOpacity="0.7"
                  variants={createBarVariants(14)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3, once: true }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.rect 
                  x="360" 
                  y="170.794" 
                  width="17.25" 
                  height="116" 
                  rx="3" 
                  fill="#F9FAF2" 
                  fillOpacity="0.7"
                  variants={createBarVariants(15)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3, once: true }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.rect 
                  x="384" 
                  y="175.794" 
                  width="17.25" 
                  height="111" 
                  rx="3" 
                  fill="#F9FAF2" 
                  fillOpacity="0.7"
                  variants={createBarVariants(16)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3, once: true }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.rect 
                  x="408" 
                  y="170.794" 
                  width="17.25" 
                  height="116" 
                  rx="3" 
                  fill="#F9FAF2" 
                  fillOpacity="0.7"
                  variants={createBarVariants(17)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3, once: true }}
                  style={{ transformOrigin: "bottom" }}
                />
                
                {/* Highlight bars */}
                <motion.rect 
                  x="432" 
                  y="102.794" 
                  width="17.25" 
                  height="184" 
                  rx="3" 
                  fill="#B9F040" 
                  fillOpacity="0.8"
                  variants={createBarVariants(18)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3, once: true }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.rect 
                  x="456" 
                  y="63.7941" 
                  width="17.25" 
                  height="223" 
                  rx="3" 
                  fill="#B9F040" 
                  fillOpacity="0.8"
                  variants={createBarVariants(19)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3, once: true }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.rect 
                  x="480" 
                  y="28.7941" 
                  width="17.25" 
                  height="258" 
                  rx="3" 
                  fill="#B9F040" 
                  fillOpacity="0.8"
                  variants={createBarVariants(20)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3, once: true }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.rect 
                  x="504" 
                  y="23" 
                  width="17.25" 
                  height="264" 
                  rx="3" 
                  fill="#B9F040" 
                  fillOpacity="0.8"
                  variants={createBarVariants(21)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3, once: true }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.rect 
                  x="528" 
                  y="17" 
                  width="17.25" 
                  height="270" 
                  rx="3" 
                  fill="#B9F040" 
                  fillOpacity="0.8"
                  variants={createBarVariants(22)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3, once: true }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.rect 
                  x="552" 
                  y="13" 
                  width="17.25" 
                  height="274" 
                  rx="3" 
                  fill="#B9F040" 
                  fillOpacity="0.8"
                  variants={createBarVariants(22)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3, once: true }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.rect 
                  x="576" 
                  y="0" 
                  width="17.25" 
                  height="287" 
                  rx="3" 
                  fill="#B9F040" 
                  fillOpacity="0.8"
                  variants={createBarVariants(23)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3, once: true }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.rect 
                  x="600" 
                  y="-5" 
                  width="17.25" 
                  height="292" 
                  rx="3" 
                  fill="#B9F040" 
                  fillOpacity="0.8"
                  variants={createBarVariants(24)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3, once: true }}
                  style={{ transformOrigin: "bottom" }}
                />
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
              Net New Subscribers
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

