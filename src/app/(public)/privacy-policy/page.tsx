import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Marketably.ai',
  description: 'Privacy Policy for Marketably.ai - Learn how we collect, use, and protect your data, including information accessed through the Facebook Marketing API.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  const lastUpdated = 'January 29, 2026'
  const contactEmail = 'privacy@marketably.ai'

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-neutral-400 mb-12">Last Updated: {lastUpdated}</p>

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">1. Introduction</h2>
          <p className="text-neutral-300 mb-4">
            Marketably.ai (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, services, and applications, including our integration with the Facebook Marketing API (Meta Platform).
          </p>
          <p className="text-neutral-300 mb-4">
            This policy applies to all users of our services, including business clients who authorize us to access their Facebook Ads Manager accounts, website visitors, and any individuals whose data may be processed through our advertising optimization services.
          </p>
          <p className="text-neutral-300">
            By using our services or authorizing access to your Facebook advertising accounts, you consent to the data practices described in this policy.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">2. Information We Collect</h2>
          
          <h3 className="text-xl font-semibold mb-3 mt-6">2.1 Information You Provide Directly</h3>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>Contact information (name, email address, phone number, company name)</li>
            <li>Account credentials when you create an account with us</li>
            <li>Business information provided during onboarding</li>
            <li>Communications and correspondence with our team</li>
            <li>Payment and billing information</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-6">2.2 Information from Facebook Marketing API</h3>
          <p className="text-neutral-300 mb-4">
            When you authorize our application to access your Facebook Ads Manager account, we may collect and process the following data through the Facebook Marketing API:
          </p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li><strong>Ad Account Data:</strong> Account ID, account name, account status, currency, timezone, and spending limits</li>
            <li><strong>Campaign Performance Data:</strong> Campaign names, objectives, status, budgets, impressions, reach, clicks, click-through rates, conversions, cost per result, and return on ad spend (ROAS)</li>
            <li><strong>Ad Set Information:</strong> Targeting parameters, placements, optimization goals, bid strategies, and scheduling</li>
            <li><strong>Ad Creative Data:</strong> Ad copy, headlines, descriptions, images, videos, call-to-action buttons, and creative performance metrics</li>
            <li><strong>Audience Data:</strong> Custom audience names and sizes (not individual user data), lookalike audience configurations, saved audiences, and demographic targeting parameters</li>
            <li><strong>Conversion Data:</strong> Pixel events, conversion values, attribution data, and offline conversion information</li>
            <li><strong>Historical Performance:</strong> Historical campaign data for analysis and optimization recommendations</li>
            <li><strong>Page and Business Information:</strong> Connected Facebook Pages, Instagram accounts, and business verification status</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-6">2.3 Automatically Collected Information</h3>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>IP address and approximate geographic location</li>
            <li>Browser type and version</li>
            <li>Device information and operating system</li>
            <li>Pages visited and time spent on our website</li>
            <li>Referring website or source</li>
            <li>Cookies and similar tracking technologies (see Section 8)</li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">3. How We Use Your Information</h2>
          
          <h3 className="text-xl font-semibold mb-3 mt-6">3.1 Facebook Marketing API Data</h3>
          <p className="text-neutral-300 mb-4">We use data obtained through the Facebook Marketing API exclusively for:</p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li><strong>Campaign Analysis:</strong> Analyzing your advertising performance to identify optimization opportunities</li>
            <li><strong>Reporting:</strong> Generating performance reports and dashboards for your review</li>
            <li><strong>Optimization Recommendations:</strong> Providing data-driven recommendations to improve ad performance</li>
            <li><strong>Campaign Management:</strong> Creating, modifying, and managing ad campaigns on your behalf (when authorized)</li>
            <li><strong>A/B Testing:</strong> Setting up and analyzing split tests to improve conversion rates</li>
            <li><strong>Audience Insights:</strong> Understanding audience performance to refine targeting strategies</li>
            <li><strong>Budget Optimization:</strong> Recommending budget allocations across campaigns and ad sets</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-6">3.2 General Business Purposes</h3>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>Providing and improving our services</li>
            <li>Communicating with you about your account and our services</li>
            <li>Processing payments and managing billing</li>
            <li>Responding to inquiries and providing customer support</li>
            <li>Sending service-related notifications and updates</li>
            <li>Analyzing usage patterns to improve our platform</li>
            <li>Complying with legal obligations</li>
          </ul>
        </section>

        {/* Data Sharing and Disclosure */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">4. Data Sharing and Disclosure</h2>
          
          <h3 className="text-xl font-semibold mb-3 mt-6">4.1 We Do NOT Sell Your Data</h3>
          <p className="text-neutral-300 mb-4">
            We do not sell, rent, or trade your personal information or Facebook advertising data to third parties for their marketing purposes. This includes data obtained through the Facebook Marketing API.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">4.2 Limited Sharing</h3>
          <p className="text-neutral-300 mb-4">We may share your information only in the following circumstances:</p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our business (e.g., cloud hosting, payment processing), subject to confidentiality agreements</li>
            <li><strong>Meta/Facebook:</strong> As necessary to use the Facebook Marketing API and comply with Meta Platform Terms</li>
            <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority</li>
            <li><strong>Business Protection:</strong> To protect our rights, privacy, safety, or property, and that of our users</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with appropriate confidentiality protections</li>
            <li><strong>With Your Consent:</strong> When you have explicitly authorized the sharing</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-6">4.3 Aggregated and Anonymized Data</h3>
          <p className="text-neutral-300">
            We may use aggregated, anonymized data that cannot identify any individual for research, analytics, and service improvement purposes. This data does not include any personally identifiable information or data that could be traced back to your Facebook advertising accounts.
          </p>
        </section>

        {/* Data Retention */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">5. Data Retention</h2>
          <p className="text-neutral-300 mb-4">We retain your information for the following periods:</p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li><strong>Active Client Data:</strong> For the duration of our business relationship plus 3 years for reporting and compliance purposes</li>
            <li><strong>Facebook API Data:</strong> Campaign performance data is retained for 2 years from the date of collection, unless you request earlier deletion</li>
            <li><strong>Contact Information:</strong> Until you request removal or 5 years after last interaction</li>
            <li><strong>Financial Records:</strong> As required by applicable tax and accounting laws (typically 7 years)</li>
            <li><strong>Website Analytics:</strong> 26 months from collection</li>
          </ul>
          <p className="text-neutral-300 mt-4">
            Upon termination of services or at your request, we will delete or anonymize your Facebook advertising data within 90 days, except where retention is required by law.
          </p>
        </section>

        {/* Data Security */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">6. Data Security</h2>
          <p className="text-neutral-300 mb-4">
            We implement industry-standard security measures to protect your information:
          </p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li><strong>Encryption:</strong> All data transmissions are encrypted using TLS 1.2 or higher. Data at rest is encrypted using AES-256 encryption</li>
            <li><strong>Access Controls:</strong> Strict role-based access controls limit data access to authorized personnel only</li>
            <li><strong>Authentication:</strong> Multi-factor authentication is required for accessing sensitive systems</li>
            <li><strong>Secure Infrastructure:</strong> Our services are hosted on secure, SOC 2 compliant cloud infrastructure</li>
            <li><strong>Regular Audits:</strong> We conduct regular security assessments and vulnerability testing</li>
            <li><strong>Employee Training:</strong> All team members receive privacy and security training</li>
            <li><strong>Incident Response:</strong> We maintain incident response procedures to address potential security breaches</li>
          </ul>
          <p className="text-neutral-300 mt-4">
            While we strive to protect your information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to implementing reasonable safeguards.
          </p>
        </section>

        {/* Your Rights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">7. Your Rights and Choices</h2>
          
          <h3 className="text-xl font-semibold mb-3 mt-6">7.1 General Rights</h3>
          <p className="text-neutral-300 mb-4">You have the right to:</p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
            <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete information</li>
            <li><strong>Erasure:</strong> Request deletion of your personal information (subject to legal retention requirements)</li>
            <li><strong>Portability:</strong> Request your data in a structured, machine-readable format</li>
            <li><strong>Objection:</strong> Object to certain processing activities</li>
            <li><strong>Restriction:</strong> Request limitation of processing in certain circumstances</li>
            <li><strong>Withdraw Consent:</strong> Withdraw consent for processing where consent is the legal basis</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-6">7.2 Facebook API Access</h3>
          <p className="text-neutral-300 mb-4">
            You may revoke our access to your Facebook advertising accounts at any time by:
          </p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>Removing our app from your Facebook Business Settings</li>
            <li>Contacting us directly to request disconnection</li>
            <li>Revoking permissions through your Facebook account settings</li>
          </ul>
          <p className="text-neutral-300 mt-4">
            Upon revocation, we will stop collecting new data and delete existing Facebook API data within 90 days, unless retention is required for legal compliance.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">7.3 European Economic Area (EEA) Residents - GDPR</h3>
          <p className="text-neutral-300 mb-4">
            If you are located in the EEA, you have additional rights under the General Data Protection Regulation (GDPR), including the right to lodge a complaint with your local data protection authority. Our legal bases for processing include:
          </p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>Performance of a contract with you</li>
            <li>Your consent (which may be withdrawn at any time)</li>
            <li>Our legitimate business interests</li>
            <li>Compliance with legal obligations</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-6">7.4 California Residents - CCPA/CPRA</h3>
          <p className="text-neutral-300 mb-4">
            If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA):
          </p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li><strong>Right to Know:</strong> Request disclosure of the categories and specific pieces of personal information collected</li>
            <li><strong>Right to Delete:</strong> Request deletion of personal information (with certain exceptions)</li>
            <li><strong>Right to Opt-Out:</strong> Opt-out of the sale or sharing of personal information (note: we do not sell personal information)</li>
            <li><strong>Right to Non-Discrimination:</strong> Not receive discriminatory treatment for exercising your privacy rights</li>
            <li><strong>Right to Correct:</strong> Request correction of inaccurate personal information</li>
            <li><strong>Right to Limit:</strong> Limit the use and disclosure of sensitive personal information</li>
          </ul>
          <p className="text-neutral-300 mt-4">
            To exercise these rights, contact us at {contactEmail}. We will respond to verifiable requests within 45 days.
          </p>
        </section>

        {/* Cookies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">8. Cookies and Tracking Technologies</h2>
          
          <h3 className="text-xl font-semibold mb-3 mt-6">8.1 Types of Cookies We Use</h3>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li><strong>Essential Cookies:</strong> Necessary for website functionality and security</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website (Google Analytics)</li>
            <li><strong>Marketing Cookies:</strong> Used to track visitors across websites for advertising purposes</li>
            <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-6">8.2 Third-Party Analytics</h3>
          <p className="text-neutral-300 mb-4">
            We use Google Analytics to analyze website traffic. Google Analytics uses cookies to collect information about your use of our website. You can opt-out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">8.3 Managing Cookies</h3>
          <p className="text-neutral-300">
            You can control cookies through your browser settings. Note that disabling certain cookies may affect website functionality. Most browsers allow you to refuse cookies, delete existing cookies, or be notified when a cookie is set.
          </p>
        </section>

        {/* Meta Platform Compliance */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">9. Meta Platform Compliance</h2>
          <p className="text-neutral-300 mb-4">
            Our use of the Facebook Marketing API is governed by Meta&apos;s Platform Terms and Developer Policies. We commit to:
          </p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>Using Facebook data only for the purposes disclosed in this policy and authorized by you</li>
            <li>Not transferring Facebook data to data brokers or selling data obtained through the API</li>
            <li>Implementing appropriate security measures as required by Meta</li>
            <li>Honoring data deletion requests and access revocations promptly</li>
            <li>Not using Facebook data to discriminate against individuals</li>
            <li>Complying with all applicable Meta Platform Terms and policies</li>
            <li>Deleting Facebook Platform data when requested by Meta or upon revocation of access</li>
          </ul>
        </section>

        {/* International Transfers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">10. International Data Transfers</h2>
          <p className="text-neutral-300 mb-4">
            Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. When we transfer data internationally, we implement appropriate safeguards including:
          </p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>Standard Contractual Clauses approved by the European Commission</li>
            <li>Data processing agreements with appropriate security provisions</li>
            <li>Certification mechanisms where applicable</li>
          </ul>
        </section>

        {/* Children's Privacy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">11. Children&apos;s Privacy</h2>
          <p className="text-neutral-300">
            Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately, and we will take steps to delete the information.
          </p>
        </section>

        {/* Changes to Policy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">12. Changes to This Privacy Policy</h2>
          <p className="text-neutral-300 mb-4">
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will:
          </p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>Update the &quot;Last Updated&quot; date at the top of this policy</li>
            <li>Notify you via email (for registered users) or prominent notice on our website</li>
            <li>Obtain your consent where required by applicable law</li>
          </ul>
          <p className="text-neutral-300 mt-4">
            We encourage you to review this policy periodically to stay informed about how we protect your information.
          </p>
        </section>

        {/* Data Deletion */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">13. Data Deletion Requests</h2>
          <p className="text-neutral-300 mb-4">
            To request deletion of your personal data or Facebook advertising data, you can:
          </p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li><strong>Use our online form:</strong> Visit our <a href="/data-deletion" className="text-[#B9F040] hover:underline">Data Deletion Request page</a> to submit a request</li>
            <li><strong>Email us:</strong> Send a request to {contactEmail} with the subject line &quot;Data Deletion Request&quot;</li>
            <li>Include your name, email address, and company name associated with the account</li>
            <li>Specify whether you want complete deletion or deletion of specific data types</li>
          </ul>
          <p className="text-neutral-300 mt-4">
            We will verify your identity and process your request within 30 days. Some data may be retained as required by law or for legitimate business purposes (e.g., fraud prevention, legal claims).
          </p>
          <div className="mt-6">
            <a 
              href="/data-deletion" 
              className="inline-flex h-12 px-6 rounded-lg font-semibold bg-[#B9F040] text-black hover:bg-[#a0d636] transition-colors items-center justify-center"
            >
              Request Data Deletion →
            </a>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">14. Contact Us</h2>
          <p className="text-neutral-300 mb-4">
            If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800">
            <p className="text-neutral-300 mb-2"><strong>Marketably.ai</strong></p>
            <p className="text-neutral-300 mb-2">Data Protection Inquiries</p>
            <p className="text-neutral-300 mb-2">Email: <a href={`mailto:${contactEmail}`} className="text-[#B9F040] hover:underline">{contactEmail}</a></p>
            <p className="text-neutral-300">Website: <a href="https://marketably.ai" className="text-[#B9F040] hover:underline">https://marketably.ai</a></p>
          </div>
          <p className="text-neutral-300 mt-4">
            We aim to respond to all inquiries within 5 business days. For urgent matters related to data security, please indicate &quot;URGENT&quot; in your subject line.
          </p>
        </section>

        {/* Legal Basis Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">15. Summary of Legal Bases for Processing</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-neutral-300 border border-neutral-800">
              <thead className="bg-neutral-900">
                <tr>
                  <th className="px-4 py-3 text-left border-b border-neutral-800">Processing Activity</th>
                  <th className="px-4 py-3 text-left border-b border-neutral-800">Legal Basis</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-800">
                  <td className="px-4 py-3">Providing advertising services</td>
                  <td className="px-4 py-3">Contract performance</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="px-4 py-3">Facebook API data access</td>
                  <td className="px-4 py-3">Consent + Contract</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="px-4 py-3">Analytics and website improvement</td>
                  <td className="px-4 py-3">Legitimate interest</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="px-4 py-3">Marketing communications</td>
                  <td className="px-4 py-3">Consent</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="px-4 py-3">Legal compliance</td>
                  <td className="px-4 py-3">Legal obligation</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Fraud prevention</td>
                  <td className="px-4 py-3">Legitimate interest</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Related Policies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">Related Policies</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a 
              href="/terms" 
              className="p-6 bg-neutral-900 rounded-lg border border-neutral-800 hover:border-[#B9F040] transition-colors"
            >
              <p className="font-semibold text-white mb-2">Terms of Service</p>
              <p className="text-neutral-400 text-sm">Read our terms and conditions for using our services</p>
            </a>
            <a 
              href="/data-deletion" 
              className="p-6 bg-neutral-900 rounded-lg border border-neutral-800 hover:border-[#B9F040] transition-colors"
            >
              <p className="font-semibold text-white mb-2">Data Deletion</p>
              <p className="text-neutral-400 text-sm">Request deletion of your personal data</p>
            </a>
          </div>
        </section>

      </div>

      <Footer />
    </main>
  )
}
