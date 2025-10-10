'use client'

import { useState } from 'react'
import { Menu, ArrowRight } from 'lucide-react'

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
          <span className="font-bold text-3xl font-[family-name:var(--font-lato)]">
            <span className="text-white">david</span>
            <span className="text-[#B9F040]">rawlings</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <span className="text-white hover:text-[#B9F040] cursor-pointer transition-colors">
              Clients
            </span>
            <span className="text-white hover:text-[#B9F040] cursor-pointer transition-colors">
              Results
            </span>
            <span className="text-white hover:text-[#B9F040] cursor-pointer transition-colors">
              Process
            </span>
            <span className="text-white hover:text-[#B9F040] cursor-pointer transition-colors">
              People
            </span>
            <span className="text-white hover:text-[#B9F040] cursor-pointer transition-colors">
              Pricing
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4 ml-8">
            <button className="bg-[#B9F040] text-black px-6 py-2 rounded-lg font-semibold text-sm uppercase flex items-center space-x-2 hover:bg-[#a0d636] transition-colors">
              <span>GET STARTED FREE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold text-sm uppercase hover:bg-gray-100 transition-colors">
              BOOK A STRATEGY CALL
            </button>
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
            <span className="text-white hover:text-[#B9F040] cursor-pointer transition-colors">
              Clients
            </span>
            <span className="text-white hover:text-[#B9F040] cursor-pointer transition-colors">
              Results
            </span>
            <span className="text-white hover:text-[#B9F040] cursor-pointer transition-colors">
              Process
            </span>
            <span className="text-white hover:text-[#B9F040] cursor-pointer transition-colors">
              People
            </span>
            <span className="text-white hover:text-[#B9F040] cursor-pointer transition-colors">
              Pricing
            </span>
            
            {/* Mobile CTA Buttons */}
            <div className="flex flex-col space-y-3 pt-4">
              <button className="bg-[#B9F040] text-black px-6 py-3 rounded-lg font-semibold text-sm uppercase flex items-center justify-center space-x-2 hover:bg-[#a0d636] transition-colors">
                <span>GET STARTED FREE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold text-sm uppercase hover:bg-gray-100 transition-colors">
                BOOK A STRATEGY CALL
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
