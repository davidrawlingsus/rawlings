'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

export default function RedirectGreeting() {
  const searchParams = useSearchParams()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if the src parameter is rawlings-us
    const srcParam = searchParams.get('src')
    
    if (srcParam === 'rawlings-us') {
      // Check if user has already seen this greeting
      const hasSeenGreeting = localStorage.getItem('rawlings-redirect-greeting-seen')
      
      if (!hasSeenGreeting) {
        setIsOpen(true)
        localStorage.setItem('rawlings-redirect-greeting-seen', 'true')
      }
    }
  }, [searchParams])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white mb-4">
            Welcome from David! 👋
          </DialogTitle>
          <DialogDescription className="text-neutral-300 text-base leading-relaxed">
            <p className="mb-4">
              Rawlings.us is now <span className="text-lime-400 font-semibold">Marketably.ai</span> — the new home for my conversion work as we scale into the AI age.
            </p>
            <p className="mb-4">
              If you came here looking for insights that turn data into growth, you&apos;re in the right place.
            </p>
            <p>
              Pull up a chair - let&apos;s make your site work smarter.
            </p>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button 
            onClick={() => setIsOpen(false)}
            className="w-full bg-lime-400 text-black hover:bg-lime-500 font-semibold focus:outline-none focus:ring-0"
          >
            Explore Marketably →
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

