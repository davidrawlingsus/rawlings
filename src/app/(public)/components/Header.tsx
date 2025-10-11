'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="bg-[#1A2B3C] px-4 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="font-bold text-3xl font-[family-name:var(--font-lato)] hover:opacity-80 transition-opacity">
            <span className="text-white">market</span>
            <span className="text-[#B9F040]">ably</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <a href="#clients" className="text-white hover:text-[#B9F040] cursor-pointer transition-colors">
              Clients
            </a>
            <a href="#impact" className="text-white hover:text-[#B9F040] cursor-pointer transition-colors">
              Results
            </a>
            <a href="#process" className="text-white hover:text-[#B9F040] cursor-pointer transition-colors">
              Process
            </a>
            <span className="text-white hover:text-[#B9F040] cursor-pointer transition-colors">
              People
            </span>
            <span className="text-white hover:text-[#B9F040] cursor-pointer transition-colors">
              Pricing
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 ml-8">
            <a href="/challenge" className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold text-sm uppercase hover:bg-white hover:text-[#1A2B3C] transition-colors">
              LANDING PAGE CHALLENGE
            </a>
            <a href="#contact" className="bg-[#B9F040] text-black px-6 py-2 rounded-lg font-semibold text-sm uppercase hover:bg-[#a0d636] transition-colors">
              BOOK A STRATEGY CALL
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-[#B9F040] hover:text-white transition-colors"
            aria-label="Toggle mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 pb-4">
          <div className="flex flex-col space-y-4">
            <a href="#clients" className="text-white hover:text-[#B9F040] cursor-pointer transition-colors">
              Clients
            </a>
            <a href="#impact" className="text-white hover:text-[#B9F040] cursor-pointer transition-colors">
              Results
            </a>
            <a href="#process" className="text-white hover:text-[#B9F040] cursor-pointer transition-colors">
              Process
            </a>
            <span className="text-white hover:text-[#B9F040] cursor-pointer transition-colors">
              People
            </span>
            <span className="text-white hover:text-[#B9F040] cursor-pointer transition-colors">
              Pricing
            </span>
            
            {/* Mobile CTA Buttons */}
            <div className="pt-4 flex flex-col gap-3">
              <a href="/challenge" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-sm uppercase hover:bg-white hover:text-[#1A2B3C] transition-colors block text-center">
                LANDING PAGE CHALLENGE
              </a>
              <a href="#contact" className="bg-[#B9F040] text-black px-6 py-3 rounded-lg font-semibold text-sm uppercase hover:bg-[#a0d636] transition-colors block text-center">
                BOOK A STRATEGY CALL
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
