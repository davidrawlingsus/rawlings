export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center space-y-4">
          {/* Company Name */}
          <div className="text-white">
            <span className="font-bold text-xl">
              david<span className="text-[#B9F040]">rawlings</span>
            </span>
          </div>

          {/* Legal Info */}
          <div className="text-neutral-400 text-sm space-y-2">
            <p>
              David Rawlings DBA The Rawlings Marketing Intel Co Limited
            </p>
            <p>
              A company registered in the Republic of Ireland
            </p>
            <p>
              © {currentYear} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

