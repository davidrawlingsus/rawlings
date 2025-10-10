'use client'

import { useEffect, useState, useRef, useMemo } from 'react'

interface TypingHeadlineConfig {
  phrases: string[]
  typingSpeed: { short: number; long: number }
  deletingSpeed: number
  holdDuration: { default: number; last: number }
  settleDelay: number
  characterThreshold: number
}

interface TypingHeadlineProps {
  prefix?: string
  config?: Partial<TypingHeadlineConfig>
}

const defaultConfig: TypingHeadlineConfig = {
  phrases: [
    'ads?',
    'landing pages?',
    'emails?',
    'product descriptions?',
    'FAQs?',
    'onboarding flows?',
    'retention campaigns?',
    'pricing pages?',
    'value propositions?',
    'new product ideas?',
    'next breakthrough?'
  ],
  typingSpeed: { short: 60, long: 75 },
  deletingSpeed: 45,
  holdDuration: { default: 1100, last: 2200 },
  settleDelay: 350,
  characterThreshold: 15
}

export default function TypingHeadline({ 
  prefix = 'What if your customers created your ',
  config: userConfig 
}: TypingHeadlineProps) {
  const config = useMemo(() => ({ ...defaultConfig, ...userConfig }), [userConfig])
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [showCaret, setShowCaret] = useState(true)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  
  // Check for prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    if (mediaQuery.matches) {
      setDisplayText('marketing?')
    }
    
    setIsMounted(true)
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
      if (e.matches) {
        setDisplayText('marketing?')
      }
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Typing animation logic
  useEffect(() => {
    if (!isMounted || prefersReducedMotion) {
      return
    }

    const currentPhrase = config.phrases[phraseIndex]
    const isLastPhrase = phraseIndex === config.phrases.length - 1
    let timeout: NodeJS.Timeout

    if (!isDeleting && displayText.length < currentPhrase.length) {
      // Typing
      const speed = currentPhrase.length > config.characterThreshold 
        ? config.typingSpeed.long 
        : config.typingSpeed.short
      
      timeout = setTimeout(() => {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1))
        setIsComplete(false)
      }, speed)
    } else if (!isDeleting && displayText.length === currentPhrase.length) {
      // Finished typing - hold
      setIsComplete(true)
      const holdTime = isLastPhrase 
        ? config.holdDuration.last 
        : config.holdDuration.default
      
      timeout = setTimeout(() => {
        setIsDeleting(true)
        setIsComplete(false)
      }, holdTime)
    } else if (isDeleting && displayText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(displayText.substring(0, displayText.length - 1))
      }, config.deletingSpeed)
    } else if (isDeleting && displayText.length === 0) {
      // Finished deleting - move to next phrase
      setIsDeleting(false)
      setPhraseIndex((prev) => (prev + 1) % config.phrases.length)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, phraseIndex, isMounted, prefersReducedMotion, config])

  // Caret blinking
  useEffect(() => {
    if (prefersReducedMotion || !isMounted) return

    const interval = setInterval(() => {
      setShowCaret(prev => !prev)
    }, 530)

    return () => clearInterval(interval)
  }, [prefersReducedMotion, isMounted])

  // Calculate the width based on the longest phrase to prevent layout shift
  const longestPhrase = useMemo(() => 
    config.phrases.reduce((a, b) => a.length > b.length ? a : b, ''),
    [config.phrases]
  )

  return (
    <>
      <style jsx>{`
        .mobile-break {
          display: block;
        }
        
        @media (min-width: 768px) {
          .mobile-break {
            display: none;
          }
        }
        
        .typing-word {
          position: relative;
          display: inline-block;
          min-width: auto;
        }
        
        @media (min-width: 768px) {
          .typing-word {
            min-width: ${longestPhrase.length * 0.6}em;
          }
        }
        
        .typing-caret {
          display: inline-block;
          width: 2px;
          height: 1em;
          background-color: currentColor;
          margin-left: 2px;
          vertical-align: text-bottom;
          opacity: ${showCaret ? 1 : 0};
          transition: opacity 0.1s ease;
        }
        
        .settle-in {
          animation: settle ${config.settleDelay}ms ease-out;
        }
        
        @keyframes settle {
          0% { opacity: 0.7; }
          100% { opacity: 1; }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .typing-word {
            min-width: auto;
          }
          .typing-caret {
            display: none;
          }
          .settle-in {
            animation: none;
          }
        }
      `}</style>
      
      <span className="typing-headline-wrapper">
        <span className="typing-prefix">What if your customers</span>
        <br className="mobile-break" />
        <span className="typing-prefix">created your</span>
        <br className="mobile-break" />
        <span 
          className={`typing-word ${isComplete ? 'settle-in' : ''}`}
          aria-live="polite"
          aria-atomic="true"
        >
          {displayText || '\u00A0'}
          {!prefersReducedMotion && <span className="typing-caret" aria-hidden="true" />}
        </span>
      </span>
    </>
  )
}
