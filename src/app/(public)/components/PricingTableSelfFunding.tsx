"use client";

import { Button } from "@/components/ui/button";

export default function PricingTableSelfFunding() {
  return (
    <section className="px-6 md:px-8 py-16 md:py-24" id="pricing">
      <div className="mx-auto max-w-screen-xl">
        <h2 className="text-3xl font-semibold">Make growth self-funding</h2>
        <p className="mt-2 text-neutral-700">
          Start with a free, guaranteed win — then choose the tier that matches your testing capacity.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* CARD 0: Free Win */}
          <div className="rounded-2xl border border-neutral-200 bg-[#B9F040] text-black shadow-sm flex flex-col">
            <div className="p-5 border-b border-black/10">
              <div className="text-xs font-semibold uppercase tracking-wide">Onboarding</div>
              <h3 className="mt-1 text-2xl font-semibold">Free Win</h3>
              <p className="mt-1 text-sm">
                Month 1 — <strong>Free Challenge</strong> to prove the model <em>and</em> pay for the program.
              </p>
            </div>
            <ul className="p-5 text-sm space-y-2">
              <li>• Guaranteed ≥ <strong>20% lift</strong> on the primary metric — or you owe $0</li>
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
          <TierCard
            name="Core"
            traffic="up to 50K sessions/mo"
            price="$7.5K/mo"
            testsPerMonth="1 test/mo"
            bullets={[
              "High-impact page focus",
              "VOC analysis (NPS + objections)",
              "A/B with pre-agreed decision rule",
            ]}
          />

          {/* CARD 2: Growth */}
          <TierCard
            name="Growth"
            traffic="50K–150K"
            price="$10K/mo"
            testsPerMonth="2 tests/mo"
            bullets={[
              "Expanded VOC research",
              "Two parallel test tracks",
              "Copy/design/dev included",
            ]}
            highlight
          />

          {/* CARD 3: Scale */}
          <TierCard
            name="Scale"
            traffic="150K–500K"
            price="$12.5–15K/mo"
            testsPerMonth="3–4 tests/mo"
            bullets={[
              "Multi-page coverage",
              "Faster iteration cycles",
              "Deeper segmentation",
            ]}
          />

          {/* CARD 4: Enterprise */}
          <TierCard
            name="Enterprise"
            traffic="500K+"
            price="Custom"
            testsPerMonth="4+ tests/mo / continuous"
            bullets={[
              "Programmatic testing cadence",
              "Advanced analytics & enablement",
              "Security & legal support",
            ]}
          />
        </div>

        <p className="mt-4 text-xs text-neutral-500">
          Fees scale with testing capacity because more traffic enables faster experiments, deeper research, and quicker compounding.
          Optional success bonus: +10% of incremental profit if a single test exceeds +35% lift (cap $15k).
        </p>
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
        "rounded-2xl border bg-white shadow-sm flex flex-col",
        highlight ? "border-neutral-900" : "border-neutral-200",
      ].join(" ")}
    >
      <div className="p-5 border-b border-neutral-200">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">{name}</h3>
          {highlight && (
            <span className="inline-block bg-neutral-900 text-white text-xs font-semibold px-2 py-1 rounded-md">
              Most popular
            </span>
          )}
        </div>
        <p className="text-xs text-neutral-500 mt-1">{traffic}</p>
        <div className="mt-2 text-2xl font-bold text-neutral-900">{price}</div>
        <div className="mt-1 text-xs text-neutral-600">
          Tests per month: <strong>{testsPerMonth}</strong>
        </div>
      </div>
      <ul className="p-5 text-sm space-y-2">
        {bullets.map((b) => (
          <li key={b}>• {b}</li>
        ))}
      </ul>
    </div>
  );
}

