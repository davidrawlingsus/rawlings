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

      {/* Pricing & Partnership Section */}
      <section className="px-6 md:px-8 py-16 md:py-24 border-b border-neutral-200" id="pricing">
        <div className="mx-auto max-w-screen-xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Two clear paths
          </h2>
          <p className="text-lg text-neutral-700 mb-12 max-w-3xl">
            Start with a single high-leverage test, or commit to a full growth partnership with 
            ongoing optimization.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Landing Page Challenge</CardTitle>
                <p className="text-neutral-600 mt-2">One high-impact test, risk-free</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-3xl font-bold">$7.5k–$25k</p>
                  <p className="text-sm text-neutral-600">Pay only on ≥20% win</p>
                </div>
                
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Voice-of-customer research (surveys, interviews, session replays)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>1 high-leverage test (landing page, PDP, or checkout flow)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Statistical analysis & recommendation report</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span><strong>Zero risk:</strong> pay nothing if lift is &lt;20%</span>
                  </li>
                </ul>
                
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center w-full h-11 px-6 rounded-md font-semibold border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors"
                >
                  Start the Challenge
                </a>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-[#B9F040] bg-[#B9F040]/5">
              <CardHeader>
                <div className="inline-block px-3 py-1 bg-[#B9F040] text-black text-xs font-semibold rounded-full mb-2">
                  RECOMMENDED
                </div>
                <CardTitle className="text-2xl">6-Month Growth Partnership</CardTitle>
                <p className="text-neutral-600 mt-2">Ongoing optimization that pays for itself</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-3xl font-bold">$7.5k–$10k/mo</p>
                  <p className="text-sm text-neutral-600">6-month commitment</p>
                </div>
                
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <div className="flex-1">
                      <span>
                        <strong>Free Challenge test</strong> to prove the model and pay for the program (month 1)
                      </span>
                      <p className="text-xs text-neutral-500 mt-1">
                        💡 Most month-one wins more than cover our $7.5 – $10 K/mo fee — the program effectively pays for itself.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>2–4 conversion tests per month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Continuous voice-of-customer research & insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Test design, implementation, analysis & rollout support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Compounding insights: each win informs the next test</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Team training & testing playbook</span>
                  </li>
                </ul>
                
                <div className="space-y-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center w-full h-11 px-6 rounded-md font-semibold bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
                  >
                    Book a strategy call
                  </a>
                  <div className="p-3 bg-neutral-50 rounded-md border border-neutral-200">
                    <p className="text-xs text-neutral-700">
                      <strong>Payment structure:</strong> Refundable deposit, then monthly fees only begin 
                      after your first winning test covers our cost. Not a penny more due until we&apos;ve 
                      paid for ourselves.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-lg">
              <p className="text-sm text-neutral-700">
                <strong>Optional success kicker:</strong> +10% of incremental profit if a single test 
                exceeds +35% lift (capped at $15k).
              </p>
            </div>
            
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Largest single-test lift</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-green-700">+116%</p>
                <p className="text-sm text-neutral-600 mt-2">
                  Conversion rate improvement for a premium DTC brand&apos;s product page
                </p>
              </CardContent>
            </Card>
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
                single test produced a +116% improvement. The first test is included free with the 6-month 
                program, so you can see the impact before committing to ongoing work.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">
                What inputs power the calculator?
              </h3>
              <p className="text-neutral-700">
                Monthly visitors (sessions), current conversion rate, average order value (or lifetime value 
                per conversion), gross margin (default 60%), and your monthly program fee (default $7,500). 
                The calculator shows how much profit a given lift percentage would generate and compares it 
                to the program cost.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">
                What if we&apos;re lower traffic?
              </h3>
              <p className="text-neutral-700">
                We can switch the primary metric to qualified-lead rate, booking rate, or another high-value 
                action, and extend test duration to reach statistical significance. The self-funding model 
                still works — you just need a higher conversion value or longer measurement window.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">
                How is this different from other CRO agencies?
              </h3>
              <p className="text-neutral-700">
                Most agencies charge monthly retainers regardless of results. We lead with a free or 
                pay-on-performance Challenge test to prove the model works for your business first. 
                Our approach is grounded in voice-of-customer research — we use your customers&apos; actual 
                words, not guesswork — and our track record speaks for itself (+116% single-test max, 
                median lifts of 15–25%).
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">
                What happens after the 6-month program?
              </h3>
              <p className="text-neutral-700">
                You can continue month-to-month with our ongoing support, or take the testing playbook and 
                insights we&apos;ve built and run experiments independently. Many clients do both: we handle 
                high-leverage tests while their team runs lower-priority experiments.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Do you guarantee results?
              </h3>
              <p className="text-neutral-700">
                For the standalone Challenge, we only charge if the test achieves ≥20% lift. For the 6-month 
                Growth Partnership, the first test is free to demonstrate impact. While we can&apos;t guarantee 
                specific lift percentages (testing always carries uncertainty), our process is designed to 
                maximize the probability of meaningful wins — and in most cases, the recurring revenue from 
                month-one lift alone exceeds the program fee.
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

