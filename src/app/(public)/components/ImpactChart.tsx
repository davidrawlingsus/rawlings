'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.24, ease: [0.22, 1, 0.36, 1] } },
  },
}

export default function ImpactChart() {
  return (
    <section id="impact" className="bg-[#1A2B3C] py-16 md:py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        {/* Full-width headline section */}
        <motion.div
          className="mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3, once: true }}
          variants={variants.fadeUp}
        >
          <p className="text-sm uppercase tracking-widest text-neutral-300 mb-4">Why work with David Rawlings?</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Our <span className="text-[#E8FF86] relative after:absolute after:inset-0 after:blur-xl after:bg-lime-200/50 after:-z-10" aria-label="impact with glow effect">impact</span> speaks for itself
          </h2>
        </motion.div>

        {/* Two-column content */}
        <div className="md:grid md:grid-cols-2 md:gap-12 lg:gap-16 items-end">
          {/* Left Column - Stat Card */}
          <div className="pb-8 md:pb-0">
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
                "Clear data storytelling unlocked real growth."
              </p>

              <div className="flex items-center gap-4 mt-6">
                <div className="w-12 h-12 bg-neutral-600 rounded-full flex items-center justify-center">
                  <span className="text-neutral-300 font-semibold text-sm">CN</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Client Name</p>
                  <p className="text-sm text-neutral-300">
                    Role at <span className="text-[#E8FF86] font-medium">Company Name</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - SVG Bar Chart */}
          <div className="relative mt-12 md:mt-0 flex flex-col items-center justify-end">
            <motion.div 
              variants={variants.fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3, once: true }}
            >
              <svg viewBox="0 0 614 287" className="w-full h-auto" role="img" aria-labelledby="chart-title" aria-describedby="chart-desc" style={{ minHeight: '300px' }}>
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
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.05, duration: 0.4 }}
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
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
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
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
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
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
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
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.25, duration: 0.4 }}
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
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
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
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.35, duration: 0.4 }}
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
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
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
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.45, duration: 0.4 }}
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
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
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
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.55, duration: 0.4 }}
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
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
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
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.65, duration: 0.4 }}
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
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
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
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.75, duration: 0.4 }}
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
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
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
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.85, duration: 0.4 }}
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
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.9, duration: 0.4 }}
                  style={{ transformOrigin: "bottom" }}
                />
                
                {/* Highlight bars */}
                <motion.rect 
                  x="432" 
                  y="102.794" 
                  width="17.25" 
                  height="184" 
                  rx="3" 
                  fill="#E8FF86" 
                  fillOpacity="0.8"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.95, duration: 0.4 }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.rect 
                  x="456" 
                  y="63.7941" 
                  width="17.25" 
                  height="223" 
                  rx="3" 
                  fill="#E8FF86" 
                  fillOpacity="0.8"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 1.0, duration: 0.4 }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.rect 
                  x="480" 
                  y="28.7941" 
                  width="17.25" 
                  height="258" 
                  rx="3" 
                  fill="#E8FF86" 
                  fillOpacity="0.8"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 1.05, duration: 0.4 }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.rect 
                  x="504" 
                  y="23" 
                  width="17.25" 
                  height="264" 
                  rx="3" 
                  fill="#E8FF86" 
                  fillOpacity="0.8"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 1.1, duration: 0.4 }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.rect 
                  x="528" 
                  y="17" 
                  width="17.25" 
                  height="270" 
                  rx="3" 
                  fill="#E8FF86" 
                  fillOpacity="0.8"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 1.15, duration: 0.4 }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.rect 
                  x="552" 
                  y="13" 
                  width="17.25" 
                  height="274" 
                  rx="3" 
                  fill="#E8FF86" 
                  fillOpacity="0.8"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 1.2, duration: 0.4 }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.rect 
                  x="576" 
                  y="0" 
                  width="17.25" 
                  height="287" 
                  rx="3" 
                  fill="#E8FF86" 
                  fillOpacity="0.8"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 1.25, duration: 0.4 }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.rect 
                  x="600" 
                  y="-5" 
                  width="17.25" 
                  height="292" 
                  rx="3" 
                  fill="#E8FF86" 
                  fillOpacity="0.8"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 1.3, duration: 0.4 }}
                  style={{ transformOrigin: "bottom" }}
                />
              </svg>
            </motion.div>

            <div className="mt-6 text-sm flex items-center gap-2 text-white">
              <span className="inline-block w-2 h-2 rounded-full bg-[#E8FF86]"></span>
              Net New Subscribers
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
