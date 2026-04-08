'use client'

import { useState, useEffect } from 'react'

interface TypewriterWordProps {
  words: string[]
  typingMs?: number
  deletingMs?: number
  pauseMs?: number
}

export default function TypewriterWord({
  words,
  typingMs = 80,
  deletingMs = 50,
  pauseMs = 1800,
}: TypewriterWordProps) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]

    if (!isDeleting && text === current) {
      // Finished typing — pause then start deleting
      const timeout = setTimeout(() => setIsDeleting(true), pauseMs)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && text === '') {
      // Finished deleting — move to next word
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
      return
    }

    const delay = isDeleting ? deletingMs : typingMs
    const timeout = setTimeout(() => {
      setText(
        isDeleting
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1)
      )
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, typingMs, deletingMs, pauseMs])

  return <span className="mtg-typewriter-cursor">{text}</span>
}
