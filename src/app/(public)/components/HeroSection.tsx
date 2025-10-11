'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import TypingHeadline from './TypingHeadline'

export default function HeroSection() {
  return (
    <section id="hero" className="relative pt-6 pb-8 md:pt-16 md:pb-0 overflow-visible">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Column - Text */}
          <motion.div 
            className="w-full max-w-[600px] flex flex-col gap-6 md:gap-8 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-semibold tracking-tight"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" }
                }
              }}
            >
              <TypingHeadline />
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-neutral-600"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut", delay: 0.06 }
                }
              }}
            >
              Combine voice-of-customer research, conversion science, and AI to help your brand listen at scale - turn feedback into decisions, tests, and messaging that drive measurable growth, fast.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut", delay: 0.12 }
                }
              }}
            >
              <a 
                href="#contact"
                className="h-12 px-6 rounded-full font-semibold bg-[#B9F040] text-black hover:bg-[#a0d636] transition-colors whitespace-nowrap flex items-center justify-center"
                aria-label="Book a strategy call"
              >
                Book a strategy call
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            className="relative md:w-[50%] flex justify-center md:justify-end"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ 
              opacity: 1, 
              filter: "blur(0px)",
              transition: { duration: 0.8, ease: "easeOut" }
            }}
            viewport={{ amount: 0.3, once: true }}
          >
            {/* Image Container with Mobile Peek Behavior and Desktop Overlap */}
            <div className="relative -mt-10 sm:mt-0 overflow-visible">
              <div className="relative z-10 object-contain md:max-w-[462px] w-[70vw] translate-y-6 sm:translate-y-0 md:translate-y-8">
                <Image
                  src="/images/hero-v2.webp"
                  alt="Smiling person representing friendly, modern analytics brand"
                  width={462}
                  height={550}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
