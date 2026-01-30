import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Left side - Brand */}
          <div className="text-white">
            <span className="font-bold text-2xl">
              Market<span className="text-[#B9F040]">ably</span>
            </span>
            <p className="text-neutral-400 mt-2 max-w-xs">
              Turning Voice of Customer into high-converting ads.
            </p>
          </div>

          {/* Right side - Navigation */}
          <div className="flex flex-wrap gap-6 md:gap-8">
            <Link href="#about" className="text-neutral-400 hover:text-[#B9F040] transition-colors">
              About
            </Link>
            <Link href="#pricing" className="text-neutral-400 hover:text-[#B9F040] transition-colors">
              Pricing
            </Link>
            <Link href="#apply" className="text-neutral-400 hover:text-[#B9F040] transition-colors">
              Contact
            </Link>
            <Link href="/terms" className="text-neutral-400 hover:text-[#B9F040] transition-colors">
              Terms
            </Link>
            <Link href="/privacy-policy" className="text-neutral-400 hover:text-[#B9F040] transition-colors">
              Privacy
            </Link>
            <Link href="/data-deletion" className="text-neutral-400 hover:text-[#B9F040] transition-colors">
              Data Deletion
            </Link>
          </div>
        </div>

        {/* Bottom legal */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <p className="text-neutral-500 text-sm text-center">
            © {currentYear} Marketably.ai. Built for brands who listen.
          </p>
        </div>
      </div>
    </footer>
  )
}
