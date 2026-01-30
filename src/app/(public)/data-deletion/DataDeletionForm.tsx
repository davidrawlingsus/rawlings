'use client'

import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

type DeletionType = 'all' | 'facebook' | 'account' | 'communications' | 'other'

export default function DataDeletionForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    facebookAccountId: '',
    deletionType: 'all' as DeletionType,
    additionalInfo: '',
    confirmUnderstand: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!formData.confirmUnderstand) {
      setError('Please confirm that you understand the deletion is permanent.')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/data-deletion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit request')
      }

      setIsSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again or email us directly at privacy@marketably.ai')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-neutral-900 rounded-lg p-8 border border-[#B9F040]/30 text-center">
        <CheckCircle2 className="w-16 h-16 text-[#B9F040] mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-4">Request Submitted Successfully</h3>
        <p className="text-neutral-300 mb-4">
          We have received your data deletion request. You will receive a confirmation email shortly.
        </p>
        <div className="text-neutral-400 text-sm space-y-2">
          <p><strong>What happens next:</strong></p>
          <ul className="list-disc list-inside text-left max-w-md mx-auto">
            <li>We will verify your identity within 5 business days</li>
            <li>You may receive a verification email</li>
            <li>Once verified, your data will be deleted within 30 days</li>
            <li>You will receive confirmation when deletion is complete</li>
          </ul>
        </div>
        <p className="text-neutral-400 text-sm mt-6">
          Reference ID: {Date.now().toString(36).toUpperCase()}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-neutral-900 rounded-lg p-6 md:p-8 border border-neutral-800">
      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400">
          {error}
        </div>
      )}

      {/* Full Name */}
      <div className="mb-6">
        <label htmlFor="fullName" className="block text-white font-medium mb-2">
          Full Name <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          required
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-[#B9F040] transition-colors"
          placeholder="Enter your full name"
        />
      </div>

      {/* Email */}
      <div className="mb-6">
        <label htmlFor="email" className="block text-white font-medium mb-2">
          Email Address <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-[#B9F040] transition-colors"
          placeholder="Email associated with your account"
        />
        <p className="text-neutral-500 text-sm mt-1">Use the email address associated with your Marketably account or Facebook login</p>
      </div>

      {/* Company Name */}
      <div className="mb-6">
        <label htmlFor="companyName" className="block text-white font-medium mb-2">
          Company Name <span className="text-neutral-500">(if applicable)</span>
        </label>
        <input
          type="text"
          id="companyName"
          value={formData.companyName}
          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-[#B9F040] transition-colors"
          placeholder="Your company or business name"
        />
      </div>

      {/* Facebook Account ID */}
      <div className="mb-6">
        <label htmlFor="facebookAccountId" className="block text-white font-medium mb-2">
          Facebook Ad Account ID <span className="text-neutral-500">(if applicable)</span>
        </label>
        <input
          type="text"
          id="facebookAccountId"
          value={formData.facebookAccountId}
          onChange={(e) => setFormData({ ...formData, facebookAccountId: e.target.value })}
          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-[#B9F040] transition-colors"
          placeholder="e.g., act_123456789"
        />
        <p className="text-neutral-500 text-sm mt-1">Found in Facebook Ads Manager under Account Settings</p>
      </div>

      {/* Deletion Type */}
      <div className="mb-6">
        <label className="block text-white font-medium mb-3">
          What data would you like deleted? <span className="text-red-400">*</span>
        </label>
        <div className="space-y-3">
          {[
            { value: 'all', label: 'All my data', description: 'Delete everything associated with my account' },
            { value: 'facebook', label: 'Facebook/Meta data only', description: 'Only data collected via Facebook Marketing API' },
            { value: 'account', label: 'Account information only', description: 'Name, email, company details' },
            { value: 'communications', label: 'Communications only', description: 'Emails, form submissions, correspondence' },
            { value: 'other', label: 'Specific data (describe below)', description: 'I will specify in the additional information field' },
          ].map((option) => (
            <label
              key={option.value}
              className={`flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-colors ${
                formData.deletionType === option.value
                  ? 'border-[#B9F040] bg-[#B9F040]/10'
                  : 'border-neutral-700 hover:border-neutral-600'
              }`}
            >
              <input
                type="radio"
                name="deletionType"
                value={option.value}
                checked={formData.deletionType === option.value}
                onChange={(e) => setFormData({ ...formData, deletionType: e.target.value as DeletionType })}
                className="mt-1 accent-[#B9F040]"
              />
              <div>
                <p className="text-white font-medium">{option.label}</p>
                <p className="text-neutral-400 text-sm">{option.description}</p>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Additional Information */}
      <div className="mb-6">
        <label htmlFor="additionalInfo" className="block text-white font-medium mb-2">
          Additional Information <span className="text-neutral-500">(optional)</span>
        </label>
        <textarea
          id="additionalInfo"
          rows={4}
          value={formData.additionalInfo}
          onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-[#B9F040] transition-colors resize-none"
          placeholder="Any additional details that will help us locate and delete your data..."
        />
      </div>

      {/* Confirmation Checkbox */}
      <div className="mb-8">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.confirmUnderstand}
            onChange={(e) => setFormData({ ...formData, confirmUnderstand: e.target.checked })}
            className="mt-1 accent-[#B9F040] w-5 h-5"
          />
          <span className="text-neutral-300 text-sm">
            I understand that data deletion is <strong className="text-white">permanent and irreversible</strong>. Once deleted, my data cannot be recovered. I confirm that I am the owner of this data or am authorized to request its deletion.
            <span className="text-red-400"> *</span>
          </span>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-14 px-8 rounded-lg font-semibold bg-[#B9F040] text-black hover:bg-[#a0d636] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting Request...' : 'Submit Deletion Request'}
      </button>

      <p className="text-neutral-500 text-sm text-center mt-4">
        By submitting this form, you agree to our verification process. We may contact you to verify your identity before processing your request.
      </p>
    </form>
  )
}
