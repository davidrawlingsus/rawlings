'use client'

import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SelfFundingCalculator from '../components/SelfFundingCalculator'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ChallengePage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="px-6 md:px-8 py-16 md:py-24 border-b border-neutral-200">
        <div className="mx-auto max-w-screen-xl">
          <motion.div
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
            className="max-w-4xl"
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
              Growth that pays for itself — forever.
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-xl md:text-2xl text-neutral-600 leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" }
                }
              }}
            >
              The first test is free — and in most cases, it makes you more monthly revenue than our fee costs. 
              From day one, we pay for ourselves.
            </motion.p>
            
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row gap-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" }
                }
              }}
            >
              <a 
                href="#calculator"
                className="inline-flex items-center justify-center h-12 px-8 rounded-full font-semibold bg-[#B9F040] text-black hover:bg-[#a0d636] transition-colors"
              >
                See if it would pay for itself
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center justify-center h-12 px-8 rounded-full font-semibold border-2 border-neutral-300 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 transition-colors"
              >
                Take the Landing Page Challenge
              </a>
            </motion.div>
            
            <motion.p 
              className="mt-6 text-sm text-neutral-600"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" }
                }
              }}
            >
              <strong>Largest single-test lift to date:</strong> +116% conversion.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <SelfFundingCalculator />

      {/* Program Section */}
      <section className="px-6 md:px-8 py-16 md:py-24 border-b border-neutral-200">
        <div className="mx-auto max-w-screen-xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            The first win funds the program. Then we compound.
          </h2>
          <p className="text-lg text-neutral-700 mb-8 max-w-3xl">
            Our proven three-phase approach starts with a free winning test that pays for everything, 
            then builds a compounding growth engine that makes your business unstoppable.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">1. Free Winning Test</CardTitle>
                <p className="text-sm text-neutral-600 mt-2">Month 1 – Proof Sprint</p>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700 space-y-3">
                <p className="font-medium text-base text-neutral-900">
                  A free A/B test that pays for everything — forever.
                </p>
                <p>
                  We run voice-of-customer research and launch one high-impact test on your 
                  highest-leverage page (landing page, PDP, or checkout).
                </p>
                <p>
                  <strong>The result:</strong> In most cases, this single lift generates enough 
                  recurring monthly revenue to cover our $7.5–10k fee indefinitely. Everything 
                  from here is pure upside.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">2. Full-Funnel Testing</CardTitle>
                <p className="text-sm text-neutral-600 mt-2">Months 2–4 – Compounding Wins</p>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700 space-y-3">
                <p className="font-medium text-base text-neutral-900">
                  Implementation of feedback systems and full-funnel optimization.
                </p>
                <p>
                  Deploy 2–4 tests per month across your entire funnel: landing pages, product pages, 
                  checkout flows, email sequences, and retention touchpoints.
                </p>
                <p>
                  <strong>The result:</strong> Every test is informed by real customer feedback and 
                  conversion science. Insights compound — each win makes the next test smarter and faster.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">3. Growth Engine</CardTitle>
                <p className="text-sm text-neutral-600 mt-2">Months 5–6 – Independence</p>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700 space-y-3">
                <p className="font-medium text-base text-neutral-900">
                  Bigger, faster, more profitable testing — forever.
                </p>
                <p>
                  We equip and empower your team to run intelligent, high-impact tests independently. 
                  You get a complete testing playbook, documented processes, and ongoing support.
                </p>
                <p>
                  <strong>The result:</strong> Your business and stakeholders can now run a continuous 
                  test cadence that drives compounding growth long after our engagement ends.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="p-6 bg-gradient-to-br from-[#B9F040]/10 to-[#B9F040]/5 border-2 border-[#B9F040]/30 rounded-lg">
            <p className="text-xl font-semibold text-neutral-900 mb-3">
              💡 Zero risk: You don&apos;t pay until we&apos;ve paid for ourselves.
            </p>
            
            <div className="space-y-2 mb-4 text-neutral-700">
              <p>
                <strong>How it works:</strong> You pay a refundable deposit, then we work until the first 
                winning test generates enough recurring revenue to cover our monthly fee forever — usually 
                within the first 30 days.
              </p>
              <p>
                Only then do you roll into the monthly cycle. <strong>Not a penny more becomes due until 
                we&apos;ve paid for ourselves.</strong>
              </p>
            </div>
            
            <div className="pt-3 border-t border-neutral-300">
              <p className="text-neutral-700 mb-2">
                <strong>Investment:</strong> $7.5k–$10k/month for the 6-month Growth Partnership.
              </p>
              <p className="text-sm text-neutral-600">
                After six months, you have three options: continue with ongoing support, run tests independently 
                with your new playbook, or do both (most clients keep us for high-leverage tests while their 
                team handles lower-priority experiments).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="px-6 md:px-8 py-16 md:py-24" id="program">
        <div className="mx-auto max-w-screen-xl">
          <h2 className="text-3xl md:text-4xl font-semibold">The Self-Funding Growth Program</h2>
          <p className="mt-3 text-lg text-neutral-700 max-w-3xl">
            One program. One free test. One predictable source of profit.
          </p>

          <div className="mt-8">
            <div className="rounded-2xl border-2 border-neutral-900 bg-white shadow-sm">
              <div className="p-6 border-b border-neutral-200 flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-2xl font-semibold">6-Month Self-Funding Growth Program</h3>
                <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1.5 rounded-md">
                  Includes free Challenge (Month 1)
                </span>
              </div>
              <div className="p-6 space-y-4 text-sm text-neutral-700">
                <p className="text-base">
                  <strong>Month 1 — Free Challenge test</strong> to prove the model and pay for the program.
                </p>
                <p className="text-base">
                  <strong>Months 2–6 —</strong> Ongoing VOC analysis, prioritized test pipeline, builds, and strategy sessions.
                </p>
                <div className="pt-2 border-t border-neutral-200">
                  <p className="text-2xl font-bold text-neutral-900">$7,500 – $10,000 / month</p>
                  <p className="text-xs text-neutral-500 mt-2">
                    💡 Most month-one wins more than cover this fee — the program effectively pays for itself.
                  </p>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 space-y-2">
                  <p className="text-xs text-neutral-700">
                    <strong>Payment structure:</strong> Refundable deposit, then monthly fees only begin 
                    after your first winning test covers our cost. Not a penny more due until we&apos;ve paid for ourselves.
                  </p>
                  <p className="text-xs text-neutral-600">
                    <strong>Optional success bonus:</strong> +10% of incremental profit if a single test 
                    exceeds +35% lift (capped at $15k).
                  </p>
                </div>
                <div className="pt-2">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-6 py-3 text-base font-semibold text-white hover:bg-neutral-800 transition-colors"
                  >
                    Join the Program →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Stats Strip */}
      <section className="px-6 md:px-8 py-10 bg-neutral-50 border-y border-neutral-200">
        <div className="mx-auto max-w-screen-xl grid md:grid-cols-3 gap-6 text-center">
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
            <div className="text-4xl font-semibold text-neutral-900">+116%</div>
            <div className="text-sm text-neutral-700 mt-2">Largest single-test lift achieved</div>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
            <div className="text-4xl font-semibold text-neutral-900">≥20%</div>
            <div className="text-sm text-neutral-700 mt-2">Minimum win threshold for the guarantee</div>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
            <div className="text-4xl font-semibold text-neutral-900">10 days</div>
            <div className="text-sm text-neutral-700 mt-2">Typical build time after survey window</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 md:px-8 py-16 md:py-24 border-b border-neutral-200">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">
            Frequently asked questions
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">
                How do I know it will pay for itself?
              </h3>
              <p className="text-neutral-700">
                Use the calculator above. If a 10% lift in conversion would generate more profit than our 
                monthly fee, you&apos;re a strong fit. In practice, our median lift is 15–25%, and our largest 
                single test produced a +116% improvement.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">
                What&apos;s the guarantee?
              </h3>
              <p className="text-neutral-700">
                One primary metric; ≥20% relative lift or you owe $0. The first test is included free with 
                the 6-month program to demonstrate impact before you commit to ongoing work.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">
                What are the traffic requirements?
              </h3>
              <p className="text-neutral-700">
                ~10k relevant sessions in 14 days (or equivalent lead volume). If you&apos;re lower traffic, 
                we can switch the primary metric to qualified-lead rate, booking rate, or another high-value 
                action, and extend test duration to reach statistical significance.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Who handles deployment?
              </h3>
              <p className="text-neutral-700">
                We can ship production-ready code and deploy directly, or if you prefer your devs handle it, 
                we hand off clean specs and implementation guidance. Either way works.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">
                How is data handled?
              </h3>
              <p className="text-neutral-700">
                NDA + DPA standard; we collect minimal fields (survey responses, session replays for analysis); 
                data is purged within 30 days unless otherwise agreed. Your customer data never leaves your control.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">
                What happens after the 6-month program?
              </h3>
              <p className="text-neutral-700">
                You can continue month-to-month with our ongoing support, run tests independently with your 
                new playbook, or do both. Many clients keep us for high-leverage tests while their team handles 
                lower-priority experiments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="px-6 md:px-8 py-16 md:py-24" id="contact">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Ready to see if it would pay for itself?
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Book a 30-minute strategy call to discuss your traffic, conversion rates, and growth goals. 
            We&apos;ll show you exactly how the self-funding model would work for your business.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-14 px-10 rounded-full font-semibold bg-[#B9F040] text-black text-lg hover:bg-[#a0d636] transition-colors"
          >
            Book a strategy call
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}

