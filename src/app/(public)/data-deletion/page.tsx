import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DataDeletionForm from './DataDeletionForm'

export const metadata: Metadata = {
  title: 'Data Deletion Request | Marketably.ai',
  description: 'Request deletion of your personal data from Marketably.ai. We comply with GDPR, CCPA, and Facebook Platform requirements for data deletion.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function DataDeletionPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Data Deletion Request</h1>
        <p className="text-neutral-400 mb-12">Request removal of your personal data from our systems</p>

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">Your Right to Data Deletion</h2>
          <p className="text-neutral-300 mb-4">
            At Marketably.ai, we respect your privacy and your right to control your personal data. In compliance with the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and Meta Platform requirements, you have the right to request deletion of your personal data from our systems.
          </p>
          <p className="text-neutral-300">
            This includes any data we may have collected through our website, services, or via the Facebook Marketing API integration.
          </p>
        </section>

        {/* What Data We May Have */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">Data Subject to Deletion</h2>
          <p className="text-neutral-300 mb-4">Upon your request, we can delete the following types of data:</p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li><strong>Account Information:</strong> Name, email address, company name, and contact details</li>
            <li><strong>Facebook Advertising Data:</strong> Any data accessed through the Facebook Marketing API on your behalf, including campaign data, audience insights, and performance metrics</li>
            <li><strong>Communication Records:</strong> Emails, form submissions, and correspondence with our team</li>
            <li><strong>Usage Data:</strong> Analytics data associated with your account</li>
            <li><strong>Customer Research Data:</strong> Any voice-of-customer data you provided for ad creation</li>
          </ul>
        </section>

        {/* Deletion Process */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">Deletion Process</h2>
          <div className="space-y-4 text-neutral-300">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#B9F040] flex items-center justify-center text-black font-bold flex-shrink-0">1</div>
              <div>
                <p className="font-semibold text-white">Submit Request</p>
                <p>Complete the form below with your information so we can locate your data in our systems.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#B9F040] flex items-center justify-center text-black font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-white">Identity Verification</p>
                <p>We will verify your identity to ensure we are deleting the correct data and to prevent unauthorized deletion requests.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#B9F040] flex items-center justify-center text-black font-bold flex-shrink-0">3</div>
              <div>
                <p className="font-semibold text-white">Data Deletion</p>
                <p>Once verified, we will delete your data within 30 days and send confirmation to your email address.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">Important Information</h2>
          <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 space-y-4">
            <div>
              <p className="font-semibold text-white mb-2">Data We May Need to Retain</p>
              <p className="text-neutral-300 text-sm">
                Some data may be retained as required by law, including financial records for tax purposes (typically 7 years), data necessary to establish, exercise, or defend legal claims, and anonymized/aggregated data that cannot identify you.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">Third-Party Data</p>
              <p className="text-neutral-300 text-sm">
                If you connected your Facebook Ads account, please note that we can only delete data stored in our systems. To delete data from Facebook/Meta, please visit your Facebook Settings &gt; Apps and Websites and remove our app, or submit a request through Facebook&apos;s data deletion tools.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">Processing Time</p>
              <p className="text-neutral-300 text-sm">
                We process deletion requests within 30 days of verification. You will receive email confirmation once your data has been deleted.
              </p>
            </div>
          </div>
        </section>

        {/* Deletion Request Form */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">Submit Deletion Request</h2>
          <p className="text-neutral-300 mb-6">
            Please complete the form below to request deletion of your data. All fields marked with an asterisk (*) are required.
          </p>
          <DataDeletionForm />
        </section>

        {/* Alternative Contact */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">Alternative Contact Methods</h2>
          <p className="text-neutral-300 mb-4">
            If you prefer, you can also submit a data deletion request by emailing us directly:
          </p>
          <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800">
            <p className="text-neutral-300 mb-2"><strong>Email:</strong> <a href="mailto:privacy@marketably.ai" className="text-[#B9F040] hover:underline">privacy@marketably.ai</a></p>
            <p className="text-neutral-300 text-sm mt-4">
              Please include &quot;Data Deletion Request&quot; in the subject line and provide your full name, email address associated with your account, and any additional information that will help us locate your data.
            </p>
          </div>
        </section>

        {/* Facebook Users */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">For Facebook Users</h2>
          <p className="text-neutral-300 mb-4">
            If you authorized our app through Facebook Login or connected your Facebook Ads account:
          </p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>You can revoke our access at any time through <strong>Facebook Settings &gt; Apps and Websites</strong></li>
            <li>Revoking access will stop any new data collection immediately</li>
            <li>To delete data already collected, please submit the form above</li>
            <li>We will process your deletion request within 30 days of verification</li>
          </ul>
        </section>

      </div>

      <Footer />
    </main>
  )
}
