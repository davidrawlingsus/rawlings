"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

export default function SelfFundingCalculator() {
  const [visitors, setVisitors] = useState(200000);
  const [cv, setCv] = useState(2.0);
  const [aov, setAov] = useState(100);
  const [margin, setMargin] = useState(60);
  const [fee] = useState(7500);
  const [lift, setLift] = useState(10);

  const result = useMemo(() => {
    const baselineRev = visitors * (cv / 100) * aov;
    const liftRev = baselineRev * (lift / 100);
    const liftProfit = liftRev * (margin / 100);
    const paysForItself = liftProfit > fee;
    const breakevenLift = (fee / (baselineRev * (margin / 100))) * 100;
    return { baselineRev, liftRev, liftProfit, paysForItself, breakevenLift };
  }, [visitors, cv, aov, margin, fee, lift]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}k`;
    return num.toLocaleString();
  };

  const formatCurrency = (num: number) => {
    if (num >= 1000000) return `$${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `$${(num / 1000).toFixed(0)}k`;
    return `$${num.toLocaleString()}`;
  };

  const LiftPill = ({ v }: { v: number }) => (
    <button
      type="button"
      onClick={() => setLift(v)}
      className={`px-3 py-1 rounded-full border text-sm transition-colors ${
        lift === v 
          ? "border-neutral-900 bg-neutral-900 text-white" 
          : "border-neutral-300 hover:border-neutral-400"
      }`}
      aria-pressed={lift === v}
      aria-label={`Set lift to ${v} percent`}
    >
      {v}%
    </button>
  );

  return (
    <section 
      className="px-6 md:px-8 py-16 md:py-24 bg-black" 
      id="calculator"
    >
      <div className="mx-auto max-w-screen-xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white text-center">
          Could your first win pay for everything, like it did for Prep Kitchen?
        </h2>
        
        <div className="mt-8 space-y-8 max-w-4xl mx-auto">
          {/* Testimonial Video */}
          <div>
            <div className="rounded-lg overflow-hidden shadow-lg bg-white border-2 border-neutral-200">
              <iframe
                src="https://player.mux.com/IJtQaVuEd2CuYuBPpxLwQINIF68RFxtCRRE02drZplv8?metadata-video-title=Wild+Overpromise&video-title=Wild+Overpromise&accent-color=%23b9f040&autoplay=true&muted=true"
                style={{ width: '100%', border: 'none', aspectRatio: '16/9' }}
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowFullScreen
                title="Client Testimonial - Wild Overpromise"
              />
            </div>
            <p className="mt-4 text-base md:text-lg text-neutral-300 text-center">
              We guarantee a 20% lift with our first winning test. If you have a landing page that qualifies, this will make you ROI positive 
              on our entire program, without risking a penny.
            </p>
          </div>

          {/* Calculator Card */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">See if your landing page qualifies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Inputs */}
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label htmlFor="visitors" className="text-sm font-medium text-neutral-700">
                      Monthly visitors
                    </label>
                    <span className="text-sm font-semibold text-neutral-900">
                      {formatNumber(visitors)}
                    </span>
                  </div>
                  <Slider 
                    id="visitors"
                    min={10000}
                    max={1000000}
                    step={10000}
                    value={visitors}
                    onValueChange={setVisitors}
                    aria-label="Monthly visitors" 
                  />
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label htmlFor="cv" className="text-sm font-medium text-neutral-700">
                      Conversion rate
                    </label>
                    <span className="text-sm font-semibold text-neutral-900">
                      {cv.toFixed(2)}%
                    </span>
                  </div>
                  <Slider 
                    id="cv"
                    min={0.25}
                    max={10}
                    step={0.25}
                    value={cv}
                    onValueChange={setCv}
                    aria-label="Conversion rate percent" 
                  />
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label htmlFor="aov" className="text-sm font-medium text-neutral-700">
                      Average order value / LTV
                    </label>
                    <span className="text-sm font-semibold text-neutral-900">
                      {formatCurrency(aov)}
                    </span>
                  </div>
                  <Slider 
                    id="aov"
                    min={30}
                    max={1000}
                    step={10}
                    value={aov}
                    onValueChange={setAov}
                    aria-label="Average order value" 
                  />
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label htmlFor="margin" className="text-sm font-medium text-neutral-700">
                      Gross margin
                    </label>
                    <span className="text-sm font-semibold text-neutral-900">
                      {margin}%
                    </span>
                  </div>
                  <Slider 
                    id="margin"
                    min={10}
                    max={100}
                    step={5}
                    value={margin}
                    onValueChange={setMargin}
                    aria-label="Gross margin percent" 
                  />
                </div>
                
                <div className="space-y-3">
                  <label className="text-sm font-medium text-neutral-700">
                    Assumed lift
                  </label>
                  <div className="flex gap-2">
                    <LiftPill v={10}/>
                    <LiftPill v={15}/>
                    <LiftPill v={20}/>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="pt-6 border-t border-neutral-200">
                <div className="space-y-6">
                  {/* Qualification Message - The Star */}
                  <div className="text-center py-4">
                    {result.paysForItself ? (
                      <p className="text-green-700 text-lg md:text-xl">
                        ✅ Your landing page win would pay our fees in perpetuity (monthly profit from lift &gt; monthly investment).
                      </p>
                    ) : (
                      <p className="text-amber-700 text-lg md:text-xl">
                        Almost there - a {result.breakevenLift.toFixed(1)}% lift would cover your monthly investment.
                      </p>
                    )}
                  </div>

                  {/* Your Math */}
                  <p className="text-sm text-neutral-600 text-center">
                    A {lift}% lift adds {formatCurrency(result.liftRev)} revenue; at {margin}% margin that&apos;s {formatCurrency(result.liftProfit)} <strong>monthly</strong> profit 
                    {result.paysForItself ? `- comfortably above your monthly investment in our services` : `- you&apos;d need a ${result.breakevenLift.toFixed(1)}% lift to cover our investment`}.
                  </p>
                  
                  <Button className="w-full h-12 text-base md:text-lg bg-[#B9F040] text-black hover:bg-[#a0d636]" asChild>
                    <a href="#contact">Get Your Free Win</a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
