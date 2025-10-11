"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck, GaugeCircle, Receipt, CheckCircle2 } from "lucide-react";
import Header from './Header';
import Footer from './Footer';

export default function LandingPageChallenge() {
  const prefersReducedMotion = useReducedMotion();
  const fadeUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <>
      <Header />
      <main className="bg-white text-foreground min-h-screen">
      {/* HERO */}
      <section className="px-6 md:px-8 pt-8 pb-16 md:pt-16 md:pb-24 border-b border-neutral-200">
        <div className="mx-auto max-w-[1280px] grid md:grid-cols-12 gap-8 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="md:col-span-7"
          >
            <p className="inline-flex items-center gap-2 text-sm font-bold text-[#B9F040] mb-3">
              <ShieldCheck className="h-4 w-4" /> Risk‑reversed engagement
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-[#1A2B3C]">
              The Landing Page Challenge
            </h1>
            <p className="mt-4 text-base md:text-lg text-neutral-600 max-w-2xl">
              Give us your <strong>NPS open‑text</strong> and run a <strong>2‑week post‑conversion objection survey</strong>.
              We&apos;ll build a new landing page aligned to what customers actually care about. If it doesn&apos;t
              beat your control by <strong>20%+ primary lift</strong>, you pay <strong>$0</strong>.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a 
                href="#contact"
                className="bg-[#B9F040] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#a0d636] transition-colors inline-flex items-center justify-center gap-2"
              >
                Take the challenge <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#how-it-works"
                className="border-2 border-neutral-300 text-neutral-700 px-8 py-3 rounded-lg font-semibold hover:border-neutral-400 hover:text-neutral-900 transition-colors inline-flex items-center justify-center"
              >
                How it works
              </a>
            </div>
            <p className="mt-3 text-xs text-neutral-500">
              Eligibility: ~10k sessions/14 days or equivalent lead volume, see FAQ for details.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="md:col-span-5"
          >
            <div className="rounded-2xl border border-neutral-200 p-6 bg-white hover:border-[#B9F040]/30 transition-colors">
              <h2 className="text-xl font-semibold text-[#1A2B3C] mb-4">Why most landing pages underperform</h2>
              <div className="text-sm text-neutral-700 space-y-3">
                <div className="flex items-start gap-3">
                  <GaugeCircle className="h-4 w-4 mt-0.5 text-[#B9F040]" />
                  <p><strong>Out of sync</strong> with what visitors perceive as relevant, important, and exclusive.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Receipt className="h-4 w-4 mt-0.5 text-[#B9F040]" />
                  <p>
                    <strong>Objections ignored</strong> — pages rarely address the real reasons people hesitate right after buying.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-[#B9F040]" />
                  <p>
                    The data to fix both usually <strong>already exists</strong> — inside NPS comments and a simple post‑purchase survey.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="px-6 md:px-8 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B3C]">Why this works</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Customer‑Truth Engine",
                body:
                  "We model NPS open‑text + fresh objections to extract themes, claims, anxieties, and proof demands — then map them to copy blocks and UX hierarchy.",
              },
              {
                title: "Fast, focused build",
                body:
                  "We deliver wireframe, narrative, and page build within ~10 business days after the survey window closes.",
              },
              {
                title: "Risk‑reversal",
                body:
                  "If the challenger doesn't achieve ≥20% lift on your primary metric (with adequate power), you pay nothing.",
              },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl border border-neutral-200 p-6 bg-white hover:border-[#B9F040]/30 transition-colors">
                <h3 className="text-xl font-semibold text-[#1A2B3C]">{v.title}</h3>
                <p className="mt-3 text-neutral-700">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="how-it-works" className="px-6 md:px-8 py-16 md:py-24 bg-white border-y border-neutral-200">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B3C]">How it works</h2>
          <ol className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Kickoff & data handover",
                body:
                  "NDA + DPA, access to anonymized NPS comments and analytics, install a 3‑question post‑conversion survey (we provide snippet).",
              },
              {
                step: "02",
                title: "VOC ingestion & modeling",
                body:
                  "Classify themes (relevance, importance, exclusivity), surface specific objections, and extract proof requirements.",
              },
              {
                step: "03",
                title: "Gap map vs current page",
                body:
                  "Score your control on coverage, prominence, and credibility — identify missing claims and weak evidence.",
              },
              {
                step: "04",
                title: "Wireframe & narrative",
                body:
                  "Draft page outline, messaging hierarchy, and microcopy that resolves top anxieties and emphasizes true differentiators.",
              },
              {
                step: "05",
                title: "Build & QA",
                body:
                  "We implement in your stack or provide a clean Next.js build ready to drop in. Performance‑first, accessible by default.",
              },
              {
                step: "06",
                title: "A/B test & report",
                body:
                  "Run a holdout A/B with a single primary metric, power calculation, and clear decision threshold; deliver insights pack.",
              },
            ].map((p) => (
              <li key={p.step} className="relative">
                <div className="h-full rounded-2xl border border-neutral-200 p-6 bg-white hover:border-[#B9F040]/30 transition-colors">
                  <div className="text-sm font-bold text-[#B9F040]">{p.step}</div>
                  <h3 className="mt-1 text-xl font-semibold text-[#1A2B3C]">{p.title}</h3>
                  <p className="mt-3 text-neutral-700 text-sm">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PROOF (placeholder) */}
      <section className="px-6 md:px-8 py-16 md:py-24 bg-neutral-50">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B3C]">What clients get</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                kpi: "+20%",
                label: "Minimum lift target on primary metric",
              },
              {
                kpi: "10 days",
                label: "Typical build time after survey window",
              },
              {
                kpi: "1 page",
                label: "Focused challenger: one job, done right",
              },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-neutral-200 p-6 bg-white">
                <div className="py-6 flex flex-col items-center text-center">
                  <div className="text-5xl font-bold text-[#1A2B3C]">{item.kpi}</div>
                  <p className="mt-3 text-neutral-700 text-sm">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-neutral-500 text-center">
            * We measure with frequentist (95% two‑tailed) or Bayesian (BF≥3) thresholds; sample‑size/power agreed at kickoff.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-8 py-16 md:py-24 bg-white border-y border-neutral-200">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B3C]">FAQ</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {faqItems.map((f) => (
              <div key={f.q} className="rounded-2xl border border-neutral-200 p-6 bg-white hover:border-[#B9F040]/30 transition-colors">
                <h3 className="text-lg font-semibold text-[#1A2B3C] mb-2">{f.q}</h3>
                <p className="text-sm text-neutral-700">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="px-6 md:px-8 py-16 md:py-24 bg-neutral-50">
        <div className="mx-auto max-w-[1280px] flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-2xl border border-[#1A2B3C] bg-[#1A2B3C]">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to take the challenge?</h3>
            <p className="text-neutral-300 mt-2">
              Share your NPS comments, run a 2‑week post‑conversion survey, and let the data write a higher‑converting page.
            </p>
          </div>
          <a 
            href="#contact"
            className="bg-[#B9F040] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#a0d636] transition-colors inline-flex items-center gap-2 whitespace-nowrap"
          >
            Start now <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* CONTACT (stub) */}
      <section id="contact" className="px-6 md:px-8 py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B3C] text-center">Tell us about your control</h2>
          <p className="mt-3 text-neutral-600 text-center">
            We&apos;ll send the NDA/DPA, the survey snippet, and a short intake. No obligation.
          </p>
          <form className="mt-8 space-y-4">
            <div>
              <input 
                type="text"
                placeholder="Name" 
                aria-label="Name" 
                required 
                className="w-full px-4 py-4 text-base bg-background border-2 border-input rounded-lg focus:border-[#B9F040] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <input 
                type="email"
                placeholder="Work email" 
                aria-label="Work email" 
                required 
                className="w-full px-4 py-4 text-base bg-background border-2 border-input rounded-lg focus:border-[#B9F040] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <input 
                type="text"
                placeholder="Company" 
                aria-label="Company" 
                className="w-full px-4 py-4 text-base bg-background border-2 border-input rounded-lg focus:border-[#B9F040] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <input 
                type="text"
                placeholder="Monthly sessions (approx)" 
                aria-label="Monthly sessions" 
                className="w-full px-4 py-4 text-base bg-background border-2 border-input rounded-lg focus:border-[#B9F040] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <textarea 
                placeholder="Link to current control + primary metric (e.g., CVR, qualified lead rate)" 
                aria-label="Details"
                rows={4}
                className="w-full px-4 py-4 text-base bg-background border-2 border-input rounded-lg focus:border-[#B9F040] focus:outline-none transition-colors resize-none"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#B9F040] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#a0d636] transition-colors inline-flex items-center justify-center gap-2"
              >
                Request kickoff pack <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-xs text-neutral-500">We&apos;ll reply within 1 business day.</p>
            </div>
          </form>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}

const faqItems = [
  {
    q: "What exactly is the 20%+ guarantee?",
    a:
      "We agree on a single primary metric (e.g., purchase CVR or qualified-lead rate). We run an A/B test with a pre-agreed sample-size/power plan. If the challenger fails to beat the control by ≥20% relative on that metric at the agreed confidence threshold, you owe $0.",
  },
  {
    q: "What data do you need to start?",
    a:
      "Anonymized NPS open-text (CSV export is fine), basic analytics access, and we'll provide a 3-question post-conversion survey snippet to install site-wide or on the order confirmation page for ~14 days.",
  },
  {
    q: "Will you handle design and build?",
    a:
      "Yes. We deliver copy, wireframe, and a production-ready build. If you prefer your own devs, we hand off clean specs and assets.",
  },
  {
    q: "How fast is 'fast'?",
    a:
      "Typically ~10 business days from survey-window close to live A/B. Complex stacks or legal review can add time; we'll flag at kickoff.",
  },
  {
    q: "Is my data safe?",
    a:
      "We sign NDA + DPA. We only ingest the fields required to classify themes and objections and we purge working copies within 30 days after the engagement unless otherwise agreed.",
  },
  {
    q: "Who is a good fit?",
    a:
      "Brands with ≥10k relevant sessions in 14 days (or equivalent leads), an existing control to beat, and willingness to run a clean A/B with a single primary metric.",
  },
  {
    q: "What if you win — how do fees work?",
    a:
      "We set a fixed project fee at kickoff. It's payable only if the challenger clears the agreed win threshold. Optional success kicker for lifts beyond 35% can be discussed.",
  },
  {
    q: "What about smaller sites?",
    a:
      "If traffic is low, we can switch to sequential testing or a longer run, or we can target qualified lead rate as the primary metric to reach significance faster.",
  },
];

