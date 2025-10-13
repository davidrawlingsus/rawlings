"use client";

import { Button } from "@/components/ui/button";

export default function PricingTableSelfFunding() {
  return (
    <section className="px-6 md:px-8 py-16 md:py-24" id="pricing">
      <div className="mx-auto max-w-screen-xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center">Who else wants self-funded feedback fuel?</h2>
        <p className="mt-2 text-neutral-700 text-center">
          Start with a free, guaranteed win - then choose the tier that matches your testing capacity.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4 md:items-stretch">
          {/* CARD 0: Free Win */}
          <div className="rounded-2xl border border-neutral-200 bg-[#B9F040] text-black shadow-sm flex flex-col">
            <div className="p-5 border-b border-black/10">
              <div className="text-xs font-semibold uppercase tracking-wide">Onboarding</div>
              <h3 className="mt-1 text-2xl font-semibold">Free Win Pays for the Program</h3>
            </div>
            <ul className="p-5 text-sm space-y-2">
              <li>• Guaranteed ≥ <strong>20% lift</strong> on the primary metric - or you owe $0</li>
              <li>• NPS + Objection Survey → VOC model → one high-impact challenger</li>
              <li>• Largest single-test lift so far: <strong>+116%</strong></li>
              <li>• <strong>Fully refundable deposit</strong> to secure your slot</li>
            </ul>
            <div className="p-5 mt-auto">
              <Button asChild size="lg" className="w-full bg-black text-white hover:bg-black/90">
                <a href="#contact">Start Here</a>
              </Button>
              <p className="mt-2 text-xs">
                In most cases, the month-one win generates more monthly revenue than our fee.
              </p>
            </div>
          </div>

          {/* CARD 1: Core */}
          <div className="flex self-center">
            <TierCard
              name="Core"
              traffic="up to 50K sessions/mo"
              price="$7.5K/mo"
              testsPerMonth="2 tests/mo"
              bullets={[
                "Single high-leverage page",
                "Full VoC analysis",
                "Full build & deployment",
              ]}
            />
          </div>

          {/* CARD 2: Growth */}
          <div className="flex self-center">
            <TierCard
              name="Growth"
              traffic="50K–150K"
              price="$10K/mo"
              testsPerMonth="3 tests/mo"
              bullets={[
                "Full-funnel testing",
                "Parallel test tracks",
                "Dedicated analyst",
              ]}
              highlight
            />
          </div>

          {/* CARD 3: Scale */}
          <div className="flex self-center">
            <TierCard
              name="Scale"
              traffic="150K–500K"
              price="$12.5–15K/mo"
              testsPerMonth="5–6 tests/mo"
              bullets={[
                "Multi-page optimization",
                "Advanced segmentation",
                "Priority dev support",
              ]}
            />
          </div>

          {/* CARD 4: Enterprise */}
          <div className="flex self-center">
            <TierCard
              name="Enterprise"
              traffic="500K+"
              price="Custom"
              testsPerMonth="7+ tests/mo"
              bullets={[
                "Continuous testing",
                "Custom integrations",
                "Security & compliance",
              ]}
            />
          </div>

          {/* Footnote - spans across the tier cards on desktop */}
          <div className="md:col-span-4 md:col-start-2 flex items-end">
            <p className="text-xs font-semibold bg-[#b9f040] text-black px-3 py-2 rounded">
              Fees scale with testing capacity because more traffic enables faster experiments, deeper research, and quicker compounding.
              Optional success bonus: +10% of incremental profit if a single test exceeds +35% lift (cap $15k).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TierCard({
  name,
  traffic,
  price,
  testsPerMonth,
  bullets,
  highlight = false,
}: {
  name: string;
  traffic: string;
  price: string;
  testsPerMonth: string;
  bullets: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-2xl border bg-white shadow-sm flex flex-col w-full h-full",
        highlight ? "border-neutral-900" : "border-neutral-200",
      ].join(" ")}
    >
      <div className="px-6 py-5 border-b border-neutral-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{name}</h3>
          {highlight && (
            <span className="inline-block bg-neutral-900 text-white text-xs font-semibold px-2 py-1 rounded-md">
              Most popular
            </span>
          )}
        </div>
        <p className="text-xs font-semibold bg-[#b9f040] text-black px-2 py-1 rounded mt-1 inline-block">{traffic}</p>
        <div className="mt-2 text-xl font-bold text-neutral-900">{price}</div>
        <div className="mt-1 text-xs text-neutral-600">
          Tests per month: <strong>{testsPerMonth}</strong>
        </div>
      </div>
      <ul className="px-6 py-5 text-sm space-y-2">
        {bullets.map((b) => (
          <li key={b}>• {b}</li>
        ))}
      </ul>
    </div>
  );
}

