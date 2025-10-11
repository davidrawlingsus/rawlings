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
              We use your customers&apos; words to create conversion wins so large they fund our ongoing work. 
              The first test is free — and in most cases, the new recurring revenue it generates permanently 
              covers our fee.
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
            Our proven cadence delivers repeatable growth, starting with a free proof-of-concept that 
            typically generates enough lift to cover our monthly fee indefinitely.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Proof Sprint</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700 space-y-2">
                <p>
                  <strong>Free with 6-month program.</strong> Voice-of-customer research + rapid test 
                  to prove the model works for your business.
                </p>
                <p>
                  In most cases, this first lift alone generates recurring revenue that exceeds our 
                  monthly fee.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>2. Scale Wins</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700 space-y-2">
                <p>
                  Deploy 2–4 tests per month across high-leverage pages: landing pages, PDPs, 
                  checkout flows, email sequences.
                </p>
                <p>
                  Each test is informed by real customer feedback and conversion science, not guesswork.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>3. Systemize</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700 space-y-2">
                <p>
                  Build a testing playbook and train your team to run experiments independently, 
                  or continue with our hands-on support.
                </p>
                <p>
                  The insights compound: every win informs the next test.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-lg max-w-3xl">
            <p className="text-lg font-medium text-neutral-900">
              💡 In most cases, month-one lift alone covers our fee indefinitely.
            </p>
            <p className="mt-2 text-neutral-700">
              Investment: <strong>$7.5k–$10k/month</strong> for the 6-month Growth Partnership, 
              which includes your free Challenge test.
            </p>
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
                
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center w-full h-11 px-6 rounded-md font-semibold bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
                >
                  Book a strategy call
                </a>
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

