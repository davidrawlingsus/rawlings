'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface FormData {
  websiteUrl: string
  monthlyTraffic: number
  name: string
  email: string
  phone: string
}

interface ContactFormProps {
  headline?: string
  step0Title?: string
  step0Description?: string
  showStep0Title?: boolean
  websiteUrlLabel?: string
}

export default function ContactForm({ 
  headline = "Want your business to be next?",
  step0Title = "Tell us about your site",
  step0Description = "This helps us understand your testing capacity",
  showStep0Title = true,
  websiteUrlLabel = "Website URL"
}: ContactFormProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    websiteUrl: '',
    monthlyTraffic: 50000,
    name: '',
    email: '',
    phone: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const steps = [
    { id: 'site-traffic', title: step0Title },
    { id: 'name', title: "What's your name?" },
    { id: 'contact', title: 'How can we reach you?' },
  ]

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      handleSubmit()
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitError('Something went wrong. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return formData.websiteUrl.trim() !== ''
      case 1:
        return formData.name.trim() !== ''
      case 2:
        return formData.email.trim() !== '' && formData.phone.trim() !== ''
      default:
        return false
    }
  }

  const formatTraffic = (value: number) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}K`
    }
    return value.toString()
  }

  if (isSubmitted) {
    return (
      <div className="py-24 bg-[#1A2B3C]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#B9F040]/20">
              <svg
                className="w-10 h-10 text-[#B9F040]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-white">Thank you!</h2>
            <p className="text-lg text-neutral-300">
              We&apos;ve received your information and will be in touch shortly to schedule your strategy call.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div id="contact" className="py-24 bg-[#1A2B3C]">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            {headline}
          </h2>
          
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-2">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex items-center ${
                    index < steps.length - 1 ? 'flex-1' : ''
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                      index <= currentStep
                        ? 'bg-[#B9F040] text-black scale-110'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`h-1 flex-1 mx-2 transition-all duration-300 ${
                        index < currentStep ? 'bg-[#B9F040]' : 'bg-muted'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Container */}
          <div className="relative overflow-hidden bg-card rounded-2xl shadow-xl border border-border">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentStep * 100}%)` }}
            >
              {/* Step 1: Website URL & Traffic */}
              <div className={`w-full flex-shrink-0 ${showStep0Title || step0Description ? 'p-12' : 'p-8'}`}>
                {showStep0Title && (
                  <h2 className="text-3xl font-bold mb-3 text-foreground">
                    {steps[0].title}
                  </h2>
                )}
                {step0Description && (
                  <p className="text-foreground/70 mb-8">
                    {step0Description}
                  </p>
                )}
                
                <div className={`${showStep0Title || step0Description ? 'space-y-6' : 'space-y-4'}`}>
                  <div>
                    <label
                      htmlFor="websiteUrl"
                      className="block text-sm font-medium mb-3 text-foreground"
                    >
                      {websiteUrlLabel}
                    </label>
                    <input
                      id="websiteUrl"
                      type="url"
                      value={formData.websiteUrl}
                      onChange={(e) =>
                        setFormData({ ...formData, websiteUrl: e.target.value })
                      }
                      placeholder="https://example.com"
                      className="w-full px-4 py-4 text-lg bg-background border-2 border-input rounded-lg focus:border-[#B9F040] focus:outline-none transition-colors"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && canProceed()) {
                          handleNext()
                        }
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="monthlyTraffic"
                      className="block text-sm font-medium mb-3 text-foreground"
                    >
                      Monthly Traffic:{' '}
                      <span className="text-[#1A2B3C] font-bold text-xl">
                        {formatTraffic(formData.monthlyTraffic)}
                      </span>
                    </label>
                    <input
                      id="monthlyTraffic"
                      type="range"
                      min="1000"
                      max="1000000"
                      step="1000"
                      value={formData.monthlyTraffic}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          monthlyTraffic: parseInt(e.target.value),
                        })
                      }
                      className="w-full h-3 bg-muted rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-foreground/50 mt-2">
                      <span>1K</span>
                      <span>1M+</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Name */}
              <div className="w-full flex-shrink-0 p-12">
                <h2 className="text-3xl font-bold mb-3 text-foreground">
                  {steps[1].title}
                </h2>
                <p className="text-foreground/70 mb-8">
                  We&apos;d love to know who we&apos;re talking to
                </p>
                
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-3 text-foreground"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="John Smith"
                    className="w-full px-4 py-4 text-lg bg-background border-2 border-input rounded-lg focus:border-[#B9F040] focus:outline-none transition-colors"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && canProceed()) {
                        handleNext()
                      }
                    }}
                  />
                </div>
              </div>

              {/* Step 3: Email & Phone */}
              <div className="w-full flex-shrink-0 p-12">
                <h2 className="text-3xl font-bold mb-3 text-foreground">
                  {steps[2].title}
                </h2>
                <p className="text-foreground/70 mb-8">
                  Almost done! We&apos;ll use this to schedule your strategy call
                </p>
                
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-3 text-foreground"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="john@example.com"
                      className="w-full px-4 py-4 text-lg bg-background border-2 border-input rounded-lg focus:border-[#B9F040] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-3 text-foreground"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-4 py-4 text-lg bg-background border-2 border-input rounded-lg focus:border-[#B9F040] focus:outline-none transition-colors"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && canProceed()) {
                          handleNext()
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="px-12 pb-12">
              {submitError && (
                <div className="mb-4 p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
                  {submitError}
                </div>
              )}
              
              <div className="flex items-center justify-between">
                {currentStep > 0 ? (
                  <Button
                    onClick={handleBack}
                    variant="outline"
                    className="px-6 py-6 text-base"
                    disabled={isSubmitting}
                  >
                    ← Back
                  </Button>
                ) : (
                  <div />
                )}

                <Button
                  onClick={handleNext}
                  disabled={!canProceed() || isSubmitting}
                  className="px-8 py-6 text-base font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </>
                  ) : currentStep === steps.length - 1 ? (
                    'Submit'
                  ) : (
                    'Continue →'
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Helper Text */}
          <p className="text-center text-sm text-neutral-400 mt-6">
            Press <kbd className="px-2 py-1 bg-white/10 rounded text-xs text-white">Enter ↵</kbd> to continue
          </p>
        </div>
      </div>
    </div>
  )
}

