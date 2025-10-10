'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'

interface Testimonial {
  id: string
  quote: string
  name: string
  title: string
  company: string
  imageSrc: string
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'A huge impact on the business.',
    name: 'Jim Warren',
    title: '',
    company: 'Katkin & Mous',
    imageSrc: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/katkin_logo_square.png',
  },
  {
    id: '2',
    quote: 'Immediate improvement in conversion.',
    name: 'Anna Cusden',
    title: '',
    company: 'Look Fabulous Forever',
    imageSrc: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/look_fabulous_forever_logo_square.png',
  },
  {
    id: '3',
    quote: 'Paid for himself a thousand times over.',
    name: 'Elliott Fox',
    title: '',
    company: 'Wattbike',
    imageSrc: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/wattbike_logo_rectangle.png',
  },
  {
    id: '4',
    quote: 'Our most successful Facebook campaign ever.',
    name: 'Duncan Bradley',
    title: '',
    company: 'Wattbike',
    imageSrc: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/wattbike_logo_rectangle.png',
  },
  {
    id: '5',
    quote: 'Logical, pragmatic, and guided by data.',
    name: 'Richard Kessell',
    title: '',
    company: 'Mous',
    imageSrc: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/mous_logo_square.png',
  },
  {
    id: '6',
    quote: 'Sales in the US have gone up a lot.',
    name: 'Johannes Paul',
    title: '',
    company: 'Omlet',
    imageSrc: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/omlet_logo_square.png',
  },
  {
    id: '7',
    quote: 'A significant impact on our business.',
    name: 'Kimberly MacAulay',
    title: '',
    company: 'Fresh Tracks Canada',
    imageSrc: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/fresh_tracks_canada.png',
  },
  {
    id: '8',
    quote: "The best conversion consultant I've met.",
    name: 'John Parker',
    title: '',
    company: 'Fresh Tracks Canada',
    imageSrc: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/fresh_tracks_canada.png',
  },
  {
    id: '9',
    quote: 'Huge bankable wins.',
    name: 'David Darmanin',
    title: '',
    company: 'Hotjar',
    imageSrc: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/hotjar_logo_square.png',
  },
  {
    id: '10',
    quote: "You've nailed it.",
    name: "Brett O'Farrell",
    title: '',
    company: 'KatKin',
    imageSrc: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/logos/katkin_logo_square.png',
  },
  {
    id: '11',
    quote: 'Legend',
    name: 'Leon Hughes',
    title: '',
    company: 'Piper Private Equity',
    imageSrc: 'https://neeuv3c4wu4qzcdw.public.blob.vercel-storage.com/piper_logo_rectangle.png',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : testimonials.length - 1
    setCurrentIndex(newIndex)
    scrollToIndex(newIndex)
  }

  const handleNext = () => {
    const newIndex = currentIndex < testimonials.length - 1 ? currentIndex + 1 : 0
    setCurrentIndex(newIndex)
    scrollToIndex(newIndex)
  }

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.scrollWidth / testimonials.length
      scrollContainerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth',
      })
    }
  }

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
    scrollToIndex(index)
  }

  return (
    <section ref={sectionRef} className="relative overflow-hidden pt-8 pb-12 md:pb-24 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5">
        {/* Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
          }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative h-[280px] w-[309px] md:h-[320px] md:w-[525px] flex-none shrink-0 snap-start overflow-hidden rounded-md bg-gradient-to-br from-primary/5 to-accent/5 border border-border px-6 py-8 md:p-10 transition-all duration-300 hover:scale-[0.98] hover:shadow-xl cursor-pointer"
            >
              {/* Background Pattern (optional - simplified) */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10 flex h-full w-full flex-col justify-between">
                <div className="space-y-8">
                  {/* Quote */}
                  <p className="w-full whitespace-pre-line text-xl md:text-2xl lg:text-3xl leading-[140%] tracking-tight text-foreground">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author Info */}
                  <div className="flex w-full items-center gap-6">
                  {/* Circular Image */}
                  <div className="relative flex aspect-square h-16 w-16 md:h-20 md:w-20 shrink-0 items-center justify-center rounded-full overflow-hidden bg-white border-2 border-border p-2">
                    <Image
                      alt={`${testimonial.name} - ${testimonial.company}`}
                      loading="lazy"
                      width={80}
                      height={80}
                      className="object-contain"
                      src={testimonial.imageSrc}
                    />
                  </div>

                  {/* Name and Company */}
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold leading-[130%] text-foreground text-base md:text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-pretty text-sm md:text-base font-medium leading-[130%] text-muted-foreground">
                      {testimonial.company}
                    </p>
                  </div>
                  </div>
                </div>

                {/* Spacer to push content to top */}
                <div></div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls - Centered */}
        <div className="flex w-full items-center justify-center gap-6">
          <button
            onClick={handlePrevious}
            className="rounded-full p-5 bg-[#B9F040]/10 hover:bg-[#B9F040]/20 text-[#B9F040] transition-colors focus:outline-none focus:ring-2 focus:ring-[#B9F040] focus:ring-offset-2"
            aria-label="Previous testimonial"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M10.25 6.75 4.75 12l5.5 5.25M19.25 12H5"
              />
            </svg>
          </button>

          {/* Pagination Dots */}
          <div className="flex items-center gap-1">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`inline-block h-[2px] w-3 transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-[#B9F040] opacity-100 w-8'
                    : 'bg-[#B9F040]/30 opacity-30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="rounded-full p-5 bg-[#B9F040]/10 hover:bg-[#B9F040]/20 text-[#B9F040] transition-colors focus:outline-none focus:ring-2 focus:ring-[#B9F040] focus:ring-offset-2"
            aria-label="Next testimonial"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m13.75 6.75 5.5 5.25-5.5 5.25M19 12H4.75"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

