import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service | Marketably.ai',
  description: 'Terms of Service for Marketably.ai - Read our terms and conditions for using our Facebook advertising services and platform integrations.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsOfServicePage() {
  const lastUpdated = 'January 29, 2026'
  const contactEmail = 'support@marketably.ai'

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
        <p className="text-neutral-400 mb-12">Last Updated: {lastUpdated}</p>

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">1. Agreement to Terms</h2>
          <p className="text-neutral-300 mb-4">
            Welcome to Marketably.ai. These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website, services, and applications, including any integrations with third-party platforms such as Facebook/Meta (&quot;Services&quot;).
          </p>
          <p className="text-neutral-300 mb-4">
            By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our Services.
          </p>
          <p className="text-neutral-300">
            &quot;Marketably,&quot; &quot;we,&quot; &quot;us,&quot; and &quot;our&quot; refer to Marketably.ai. &quot;You&quot; and &quot;your&quot; refer to you, the user of our Services.
          </p>
        </section>

        {/* Description of Services */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">2. Description of Services</h2>
          <p className="text-neutral-300 mb-4">
            Marketably.ai provides Facebook advertising optimization services, including:
          </p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>Analysis of voice-of-customer data to create ad concepts</li>
            <li>Facebook ad creative development and copywriting</li>
            <li>Campaign performance analysis and optimization recommendations</li>
            <li>Integration with Facebook Marketing API to access and analyze advertising data</li>
            <li>A/B testing strategy and implementation guidance</li>
          </ul>
          <p className="text-neutral-300 mt-4">
            Our Services may require you to authorize access to your Facebook Ads Manager account through Facebook&apos;s authentication systems.
          </p>
        </section>

        {/* Eligibility */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">3. Eligibility</h2>
          <p className="text-neutral-300 mb-4">
            To use our Services, you must:
          </p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>Be at least 18 years of age</li>
            <li>Have the legal authority to enter into these Terms</li>
            <li>Have the authority to grant us access to any Facebook advertising accounts you connect</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Not be prohibited from using Facebook&apos;s services under Facebook&apos;s Terms of Service</li>
          </ul>
        </section>

        {/* Account and Authorization */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">4. Account and Authorization</h2>
          
          <h3 className="text-xl font-semibold mb-3 mt-6">4.1 Account Responsibility</h3>
          <p className="text-neutral-300 mb-4">
            You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">4.2 Facebook Authorization</h3>
          <p className="text-neutral-300 mb-4">
            When you connect your Facebook Ads account to our Services, you authorize us to:
          </p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>Access your advertising account data through the Facebook Marketing API</li>
            <li>Read campaign, ad set, and ad performance data</li>
            <li>Access audience insights and targeting information</li>
            <li>Retrieve historical advertising data for analysis</li>
          </ul>
          <p className="text-neutral-300 mt-4">
            You represent that you have the authority to grant this access and that doing so does not violate any agreements you have with third parties.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">4.3 Revoking Access</h3>
          <p className="text-neutral-300">
            You may revoke our access to your Facebook accounts at any time through your Facebook Business Settings or by contacting us. See our <a href="/data-deletion" className="text-[#B9F040] hover:underline">Data Deletion</a> page for more information.
          </p>
        </section>

        {/* User Obligations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">5. User Obligations</h2>
          <p className="text-neutral-300 mb-4">
            By using our Services, you agree to:
          </p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>Provide accurate and complete information</li>
            <li>Comply with Facebook&apos;s Terms of Service, Advertising Policies, and Community Standards</li>
            <li>Not use our Services for any unlawful purpose</li>
            <li>Not attempt to gain unauthorized access to our systems or other users&apos; accounts</li>
            <li>Not interfere with or disrupt our Services</li>
            <li>Not use our Services to create ads that are misleading, deceptive, or violate any laws</li>
            <li>Not share access credentials with unauthorized parties</li>
          </ul>
        </section>

        {/* Prohibited Uses */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">6. Prohibited Uses</h2>
          <p className="text-neutral-300 mb-4">
            You may not use our Services to:
          </p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>Create advertisements that discriminate against individuals based on personal attributes</li>
            <li>Advertise prohibited products or services (as defined by Facebook&apos;s policies)</li>
            <li>Engage in any form of spam or unsolicited advertising</li>
            <li>Violate any intellectual property rights</li>
            <li>Transmit malware, viruses, or other harmful code</li>
            <li>Scrape, harvest, or collect data in violation of applicable laws</li>
            <li>Circumvent any security measures or access restrictions</li>
          </ul>
        </section>

        {/* Payment Terms */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">7. Payment Terms</h2>
          
          <h3 className="text-xl font-semibold mb-3 mt-6">7.1 Fees</h3>
          <p className="text-neutral-300 mb-4">
            Our pricing and payment terms will be provided during the onboarding process or as specified in a separate agreement. We offer a $0 risk test where you only pay after we demonstrate results.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">7.2 Payment Processing</h3>
          <p className="text-neutral-300 mb-4">
            Payments are processed through secure third-party payment processors. By providing payment information, you authorize us to charge the applicable fees.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">7.3 Refunds</h3>
          <p className="text-neutral-300">
            Our refund policy is based on performance guarantees as outlined in your service agreement. If we fail to meet the agreed-upon performance metrics, refunds will be processed according to the terms of that agreement.
          </p>
        </section>

        {/* Intellectual Property */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">8. Intellectual Property</h2>
          
          <h3 className="text-xl font-semibold mb-3 mt-6">8.1 Our Intellectual Property</h3>
          <p className="text-neutral-300 mb-4">
            Our Services, including our website, methodologies, frameworks, and proprietary analysis tools, are protected by intellectual property laws. You may not copy, modify, distribute, or reverse engineer any part of our Services without our express written permission.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">8.2 Your Content</h3>
          <p className="text-neutral-300 mb-4">
            You retain ownership of any content, data, or materials you provide to us (&quot;Your Content&quot;). By providing Your Content, you grant us a limited license to use it solely for the purpose of providing our Services to you.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">8.3 Deliverables</h3>
          <p className="text-neutral-300">
            Ad concepts, copy, and other deliverables created specifically for you become your property upon full payment. Our underlying methodologies and frameworks remain our intellectual property.
          </p>
        </section>

        {/* Third-Party Services */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">9. Third-Party Services and Platforms</h2>
          
          <h3 className="text-xl font-semibold mb-3 mt-6">9.1 Facebook/Meta Platform</h3>
          <p className="text-neutral-300 mb-4">
            Our Services integrate with Facebook/Meta platforms through their official APIs. Your use of Facebook&apos;s services is governed by Facebook&apos;s Terms of Service and policies. We are not responsible for:
          </p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>Changes to Facebook&apos;s APIs, policies, or services</li>
            <li>Facebook&apos;s approval or rejection of your advertisements</li>
            <li>Account suspensions or restrictions imposed by Facebook</li>
            <li>Data that Facebook collects or processes independently</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-6">9.2 Compliance with Platform Terms</h3>
          <p className="text-neutral-300">
            You agree to comply with all applicable third-party platform terms when using our Services. We reserve the right to refuse service if your intended use would violate platform policies.
          </p>
        </section>

        {/* Data and Privacy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">10. Data and Privacy</h2>
          <p className="text-neutral-300 mb-4">
            Your privacy is important to us. Our collection, use, and protection of your data is governed by our <a href="/privacy-policy" className="text-[#B9F040] hover:underline">Privacy Policy</a>, which is incorporated into these Terms by reference.
          </p>
          <p className="text-neutral-300">
            By using our Services, you consent to the data practices described in our Privacy Policy.
          </p>
        </section>

        {/* Data Deletion */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">11. Data Deletion Rights</h2>
          <p className="text-neutral-300 mb-4">
            You have the right to request deletion of your personal data at any time. We comply with GDPR, CCPA, and Facebook Platform requirements for data deletion.
          </p>
          <p className="text-neutral-300 mb-4">
            To request deletion of your data:
          </p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>Visit our <a href="/data-deletion" className="text-[#B9F040] hover:underline">Data Deletion Request</a> page</li>
            <li>Email us at privacy@marketably.ai</li>
            <li>Revoke app access through your Facebook Business Settings</li>
          </ul>
          <p className="text-neutral-300 mt-4">
            We will process deletion requests within 30 days of verification. Some data may be retained as required by law.
          </p>
          <div className="mt-6">
            <a 
              href="/data-deletion" 
              className="inline-flex h-12 px-6 rounded-lg font-semibold bg-neutral-800 text-white border border-neutral-700 hover:border-[#B9F040] transition-colors items-center justify-center"
            >
              Request Data Deletion →
            </a>
          </div>
        </section>

        {/* Disclaimers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">12. Disclaimers</h2>
          <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800">
            <p className="text-neutral-300 mb-4">
              <strong className="text-white">OUR SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.</strong>
            </p>
            <p className="text-neutral-300 mb-4">
              We do not guarantee:
            </p>
            <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
              <li>Specific advertising results or performance metrics</li>
              <li>Approval of ads by Facebook or other platforms</li>
              <li>Uninterrupted or error-free service</li>
              <li>That our Services will meet all your requirements</li>
            </ul>
            <p className="text-neutral-300 mt-4">
              While we strive to achieve the performance targets outlined in our agreements, advertising results depend on many factors outside our control, including market conditions, competition, and platform algorithms.
            </p>
          </div>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">13. Limitation of Liability</h2>
          <p className="text-neutral-300 mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, MARKETABLY.AI SHALL NOT BE LIABLE FOR:
          </p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>Any indirect, incidental, special, consequential, or punitive damages</li>
            <li>Loss of profits, revenue, data, or business opportunities</li>
            <li>Damages arising from your use of third-party platforms</li>
            <li>Actions taken by Facebook or other platforms regarding your accounts or advertisements</li>
          </ul>
          <p className="text-neutral-300 mt-4">
            Our total liability for any claims arising from these Terms or your use of our Services shall not exceed the amount you paid us in the twelve (12) months preceding the claim.
          </p>
        </section>

        {/* Indemnification */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">14. Indemnification</h2>
          <p className="text-neutral-300">
            You agree to indemnify and hold harmless Marketably.ai, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorney&apos;s fees) arising from: (a) your use of our Services; (b) your violation of these Terms; (c) your violation of any third-party rights; or (d) your content or advertising materials.
          </p>
        </section>

        {/* Termination */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">15. Termination</h2>
          
          <h3 className="text-xl font-semibold mb-3 mt-6">15.1 Termination by You</h3>
          <p className="text-neutral-300 mb-4">
            You may stop using our Services and terminate your account at any time. To terminate, please contact us or revoke access through your connected platforms.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">15.2 Termination by Us</h3>
          <p className="text-neutral-300 mb-4">
            We may suspend or terminate your access to our Services at any time, with or without cause, including if we reasonably believe you have violated these Terms.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">15.3 Effect of Termination</h3>
          <p className="text-neutral-300">
            Upon termination, your right to use our Services will immediately cease. Provisions that by their nature should survive termination will survive, including intellectual property rights, disclaimers, limitations of liability, and indemnification.
          </p>
        </section>

        {/* Changes to Terms */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">16. Changes to Terms</h2>
          <p className="text-neutral-300 mb-4">
            We may modify these Terms at any time. When we make material changes, we will:
          </p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>Update the &quot;Last Updated&quot; date at the top of this page</li>
            <li>Notify you via email or prominent notice on our website</li>
            <li>Give you the opportunity to review changes before they take effect</li>
          </ul>
          <p className="text-neutral-300 mt-4">
            Your continued use of our Services after changes take effect constitutes acceptance of the modified Terms.
          </p>
        </section>

        {/* Governing Law */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">17. Governing Law and Disputes</h2>
          <p className="text-neutral-300 mb-4">
            These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.
          </p>
          <p className="text-neutral-300">
            Any disputes arising from these Terms or your use of our Services shall first be attempted to be resolved through good-faith negotiation. If negotiation fails, disputes shall be resolved through binding arbitration or in the courts of competent jurisdiction.
          </p>
        </section>

        {/* Miscellaneous */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">18. Miscellaneous</h2>
          
          <h3 className="text-xl font-semibold mb-3 mt-6">18.1 Entire Agreement</h3>
          <p className="text-neutral-300 mb-4">
            These Terms, together with our Privacy Policy and any service agreements, constitute the entire agreement between you and Marketably.ai regarding our Services.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">18.2 Severability</h3>
          <p className="text-neutral-300 mb-4">
            If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">18.3 Waiver</h3>
          <p className="text-neutral-300 mb-4">
            Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">18.4 Assignment</h3>
          <p className="text-neutral-300">
            You may not assign or transfer these Terms without our prior written consent. We may assign our rights and obligations under these Terms without restriction.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">19. Contact Us</h2>
          <p className="text-neutral-300 mb-4">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800">
            <p className="text-neutral-300 mb-2"><strong>Marketably.ai</strong></p>
            <p className="text-neutral-300 mb-2">Email: <a href={`mailto:${contactEmail}`} className="text-[#B9F040] hover:underline">{contactEmail}</a></p>
            <p className="text-neutral-300">Website: <a href="https://marketably.ai" className="text-[#B9F040] hover:underline">https://marketably.ai</a></p>
          </div>
        </section>

        {/* Related Policies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#B9F040] mb-4">Related Policies</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a 
              href="/privacy-policy" 
              className="p-6 bg-neutral-900 rounded-lg border border-neutral-800 hover:border-[#B9F040] transition-colors"
            >
              <p className="font-semibold text-white mb-2">Privacy Policy</p>
              <p className="text-neutral-400 text-sm">Learn how we collect, use, and protect your data</p>
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
