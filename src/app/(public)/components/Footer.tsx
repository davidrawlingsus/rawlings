import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black py-12 md:py-16 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left side - Brand */}
          <div className="text-white">
            <span className="font-bold text-2xl">
              MapThe<span className="text-[#B9F040]">Gap</span>
            </span>
            <p className="text-neutral-400 mt-2 text-sm max-w-xs">
              The gap between what your marketing says and what your customers say is measured in dollars.
            </p>
          </div>

          {/* Middle - Navigation */}
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold text-white mb-2">Navigation</p>
            <Link href="#how-it-works" className="text-neutral-400 hover:text-[#B9F040] transition-colors text-sm">
              How It Works
            </Link>
            <Link href="#results" className="text-neutral-400 hover:text-[#B9F040] transition-colors text-sm">
              Case Studies
            </Link>
            <Link href="#pricing" className="text-neutral-400 hover:text-[#B9F040] transition-colors text-sm">
              Pricing
            </Link>
            <Link href="#faq" className="text-neutral-400 hover:text-[#B9F040] transition-colors text-sm">
              FAQ
            </Link>
            <Link href="#form" className="text-neutral-400 hover:text-[#B9F040] transition-colors text-sm">
              Book Demo
            </Link>
          </div>

          {/* Right side - Contact & Legal */}
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold text-white mb-2">Contact</p>
            <a href="mailto:hello@mapthegap.ai" className="text-neutral-400 hover:text-[#B9F040] transition-colors text-sm">
              hello@mapthegap.ai
            </a>
            <div className="flex gap-4 mt-2">
              <Link href="/terms" className="text-neutral-500 hover:text-[#B9F040] transition-colors text-xs">
                Terms
              </Link>
              <Link href="/privacy-policy" className="text-neutral-500 hover:text-[#B9F040] transition-colors text-xs">
                Privacy
              </Link>
              <Link href="/data-deletion" className="text-neutral-500 hover:text-[#B9F040] transition-colors text-xs">
                Data Deletion
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom legal */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="text-neutral-500 text-xs text-center space-y-2">
            <p>
              The Rawlings Marketing Intel Co Limited t/a MapTheGap.ai
            </p>
            <p>
              Landscape House, Dublin 22, Dublin D22 P3K7, Ireland
            </p>
            <p className="text-sm mt-4">
              © {currentYear} MapTheGap.ai. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
