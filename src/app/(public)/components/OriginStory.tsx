export default function OriginStory() {
  return (
    <section className="relative py-32 overflow-hidden bg-white">
      {/* Lime Wave Chart Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/lime_chart_optimized.jpg)' }}
        role="img" 
        aria-label="Abstract lime chart with layered waves and highlight line"
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#1A2B3C]">
              Our Origin Story
            </h2>
            <div className="w-24 h-1 bg-[#B9F040] mx-auto mb-8"></div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-[#B9F040]/20">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-[#1A2B3C]/90 leading-relaxed mb-6">
                Every great business starts with a moment of clarity. For us, it was watching 
                companies pour millions into marketing while leaving conversion optimization on the table.
              </p>
              
              <p className="text-lg text-[#1A2B3C]/80 leading-relaxed mb-6">
                We saw businesses with incredible products and services struggling to convert their 
                traffic. They had the visitors, they had the offering, but something wasn&apos;t clicking. 
                That&apos;s when we realized: the answer wasn&apos;t in driving more traffic—it was in 
                making better use of what they already had.
              </p>
              
              <p className="text-lg text-[#1A2B3C]/80 leading-relaxed mb-6">
                So we built a testing program that doesn&apos;t just run experiments—it transforms 
                businesses. By combining rigorous methodology with creative thinking, we help companies 
                unlock revenue that was always there, just waiting to be discovered.
              </p>
              
              <p className="text-lg text-[#1A2B3C]/80 leading-relaxed">
                Today, we&apos;ve helped dozens of businesses achieve remarkable growth—not through 
                flashy tactics or empty promises, but through systematic, data-driven optimization 
                that compounds month after month.
              </p>
            </div>
            
            <div className="mt-10 pt-8 border-t border-[#B9F040]/30">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-[#B9F040] mb-2">50+</div>
                  <div className="text-sm text-[#1A2B3C]/70 font-medium">Clients Transformed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#B9F040] mb-2">500+</div>
                  <div className="text-sm text-[#1A2B3C]/70 font-medium">Tests Run</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#B9F040] mb-2">$10M+</div>
                  <div className="text-sm text-[#1A2B3C]/70 font-medium">Revenue Unlocked</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

