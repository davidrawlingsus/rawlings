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
      className="px-6 md:px-8 py-16 md:py-24 bg-[#1A2B3C]" 
      id="calculator"
    >
      <div className="mx-auto max-w-screen-xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
          Could your first win pay for everything?
        </h2>
        <p className="mt-4 text-lg md:text-xl text-neutral-300">
          We guarantee a 20% lift with our first winning test. If your landing page qualifies, this will make you ROI positive 
          on our entire program, without risking a penny.
        </p>
        
        <div className="mt-8 grid lg:grid-cols-2 gap-8">
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
                      <p className="text-green-700 font-bold text-xl md:text-2xl">
                        ✅ Your landing page win would pay our fees in perpetuity (profit from lift &gt; fee).
                      </p>
                    ) : (
                      <p className="text-amber-700 font-bold text-xl md:text-2xl">
                        Almost there — a {result.breakevenLift.toFixed(1)}% lift would cover your monthly fee.
                      </p>
                    )}
                  </div>

                  {/* Your Math */}
                  <p className="text-sm text-neutral-600 text-center">
                    <strong>Your math:</strong> {formatNumber(visitors)} visitors × {cv.toFixed(2)}% CVR × {formatCurrency(aov)} AOV = {formatCurrency(result.baselineRev)}/mo baseline revenue. 
                    A {lift}% lift adds {formatCurrency(result.liftRev)} revenue; at {margin}% margin that&apos;s {formatCurrency(result.liftProfit)} <strong>monthly</strong> profit 
                    {result.paysForItself ? `- comfortably above our fee` : `- you&apos;d need a ${result.breakevenLift.toFixed(1)}% lift to cover our fee`}.
                  </p>
                  
                  <Button className="w-full h-12 text-base md:text-lg bg-[#B9F040] text-black hover:bg-[#a0d636]" asChild>
                    <a href="#contact">Get Your Free Win</a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial Card */}
          <Card className="shadow-lg bg-white border-2 border-neutral-200">
            <CardContent className="p-8 flex flex-col justify-center h-full">
              <div className="space-y-4">
                <div className="text-5xl text-neutral-300">&ldquo;</div>
                <blockquote className="text-lg text-neutral-800 leading-relaxed -mt-6">
                  I thought it was a wild over-promise, but then we ran the first test and saw a 23% lift 
                  in qualified leads. The program literally paid for itself in the first month.
                </blockquote>
                <div className="pt-4 border-t border-neutral-200">
                  <p className="font-semibold text-neutral-900">
                    [Client Name]
                  </p>
                  <p className="text-sm text-neutral-600">
                    [Title], [Company]
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
