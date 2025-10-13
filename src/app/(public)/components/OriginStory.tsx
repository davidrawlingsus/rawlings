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
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black">
              The Story Behind the System
            </h2>
            <div className="w-24 h-1 bg-[#B9F040] mx-auto mb-8"></div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-[#B9F040]/20">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-black/90 leading-relaxed mb-6">
                If you&apos;d told me I&apos;d end up here, I wouldn&apos;t have believed you.
              </p>
              
              <p className="text-lg text-black/80 leading-relaxed mb-6">
                I was an ex-soldier with a new wife, a newborn, and a car I couldn&apos;t afford to fill with gas. 
                One unlikely success in digital marketing became my lifeline - and my ticket into the world&apos;s top CRO agency.
              </p>
              
              <p className="text-lg text-black/80 leading-relaxed mb-6">
                At Conversion Rate Experts, I rose fast - eventually their #1 consultant - but behind the wins was chaos. 
                Endless analytics. Open-text data. No clear formula for what to say, where, or why. Until I found it: 
                a value equation used by Disney, Ralph Lauren, and Bank of America to decode perceived value itself.
              </p>
              
              <p className="text-lg text-black/80 leading-relaxed mb-6">
                Suddenly persuasion became mechanical, testable, transferable, scalable.
                A London VC had me teach it to their portfolio CEOs; their wins proved it wasn&apos;t just me.
              </p>
              
              <p className="text-lg text-black/80 leading-relaxed mb-6">
                Now I fuse that human persuasion framework with AI - a system so reliable it doesn&apos;t just fix websites, 
                it unlocks entire channels: Facebook, PPC, display, even native - with every engagement funded by our <a href="/challenge" className="underline hover:text-black/60 transition-colors">first free test</a>.
              </p>
              
              <p className="text-lg text-black/90 font-semibold mb-8">
                David Rawlings, Founder of Marketably.ai
              </p>
              
              <hr className="border-[#B9F040]/30 my-8" />
              
              <div className="text-center">
                <a 
                  href="/challenge" 
                  className="inline-block bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition-colors"
                >
                  Click here to get your first free test
                </a>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-[#B9F040]/30">
              <div className="grid md:grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-[#B9F040] mb-2">49+</div>
                  <div className="text-sm text-black/70 font-medium">Clients Transformed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#B9F040] mb-2">$100M+</div>
                  <div className="text-sm text-black/70 font-medium">Revenue Unlocked</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

