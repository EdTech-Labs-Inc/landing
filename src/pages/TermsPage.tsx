import { LegalPageLayout } from '../components/LegalPageLayout';

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms of Service">
      <p className="text-white/40 text-sm mb-8">Last Updated: December 2025</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">1. Introduction & Relationship to Agreements</h2>
        <p className="text-white/60 leading-relaxed">
          These Terms of Service ("Terms") govern the use of the services provided by EdTech Labs, Inc. ("Company"). These Terms are incorporated by reference into the SaaS Services Agreement (the "Agreement") between Company and its Customers. In the event of a direct conflict between these Terms and a mutually signed Service Agreement, the terms of the signed Service Agreement shall control.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">2. Acceptable Use Policy (AUP)</h2>
        <p className="text-white/60 leading-relaxed mb-6">
          This section outlines the prohibited uses of the Company's AI content-transformation platform and related services. Customer is responsible for ensuring that all Users comply with this policy.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">2.1. Content Restrictions</h3>
        <p className="text-white/60 leading-relaxed mb-4">
          Customer agrees not to use the Services to generate, upload, transmit, or display any content (including text inputs ("User Input") or video/audio outputs ("User Output")) that:
        </p>
        <ul className="list-disc list-inside space-y-3 text-white/60 mb-6">
          <li>
            <strong className="text-white/80">Violates Intellectual Property:</strong> Infringes upon the copyrights, trademarks, trade secrets, or other proprietary rights of any third party. Customer warrants that it owns or has the necessary licenses for all User Input provided to the platform.
          </li>
          <li>
            <strong className="text-white/80">Is Unlawful or Harmful:</strong> Violates any applicable law or regulation, or promotes illegal acts, violence, self-harm, or discrimination based on race, gender, religion, nationality, disability, sexual orientation, or age.
          </li>
          <li>
            <strong className="text-white/80">Is Impersonation:</strong> Attempts to impersonate another person or entity without their consent, including the unauthorized creation of AI avatars or voice clones resembling real individuals.
          </li>
          <li>
            <strong className="text-white/80">Is Malicious:</strong> Contains viruses, malware, Trojan horses, or any other malicious code designed to interrupt or damage the functionality of the Services.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">2.2. AI Transparency & Ethics</h3>
        <ul className="list-disc list-inside space-y-3 text-white/60 mb-6">
          <li>
            <strong className="text-white/80">No Misleading Content:</strong> Customer must not use the Services to create content that is misleading or deceptive, including deepfakes intended to defraud or manipulate viewers.
          </li>
          <li>
            <strong className="text-white/80">Human in the Loop:</strong> Customer acknowledges that generative AI technologies may produce "hallucinations" or factual errors. Customer agrees that it is solely responsible for reviewing and verifying the accuracy of all Output prior to publication or distribution.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">2.3. System Integrity</h3>
        <p className="text-white/60 leading-relaxed mb-2">Customer may not:</p>
        <ul className="list-disc list-inside space-y-3 text-white/60">
          <li>Interfere with or disrupt the integrity or performance of the Services or third-party data contained therein.</li>
          <li>Reverse engineer, decompile, or access the Services to build a competitive product or service, or to benchmark with the intent of revealing performance information to third parties.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">3. Copyright Infringement & DMCA</h2>
        <p className="text-white/60 leading-relaxed">
          Company respects the intellectual property rights of others. If you believe that material located on or linked to by the Services violates your copyright, you are encouraged to notify our support team at <strong className="text-white/80">support@edtechinc.com</strong> with the subject line "Copyright Complaint." Company will respond to all such notices, including as required or appropriate by removing the infringing material or disabling links to the infringing material.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">4. Standard Support Policy</h2>
        <p className="text-white/60 leading-relaxed mb-6">
          Unless a specific Service Level Agreement (SLA) or enhanced support package is defined in the Customer's Order Form, the following standard support terms apply.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">4.1. Support Availability</h3>
        <ul className="list-disc list-inside space-y-3 text-white/60 mb-6">
          <li>
            <strong className="text-white/80">Standard Support Hours:</strong> Monday through Friday, 9:00 AM to 5:00 PM Eastern Time (excluding U.S. public holidays).
          </li>
          <li>
            <strong className="text-white/80">Support Channels:</strong> Support is provided via email at <strong className="text-white/80">support@edtechinc.com</strong>.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">4.2. Severity Levels & Response Targets</h3>
        <p className="text-white/60 leading-relaxed mb-4">
          While Company strives to respond to all inquiries promptly, standard response targets are as follows:
        </p>
        <ul className="list-disc list-inside space-y-3 text-white/60">
          <li><strong className="text-white/80">Critical (Service Down):</strong> Initial response within 4 business hours.</li>
          <li><strong className="text-white/80">High (Feature Unavailable):</strong> Initial response within 8 business hours.</li>
          <li><strong className="text-white/80">Normal (General Inquiries/Minor Bugs):</strong> Initial response within 2 business days.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">5. Disclaimers & General Terms</h2>

        <h3 className="text-xl font-semibold text-white mb-3">5.1. No Professional Advice</h3>
        <p className="text-white/60 leading-relaxed mb-6">
          The Services and the Output generated are for informational and educational purposes only. They do not constitute professional financial, legal, medical, or other regulated advice. Customer is solely responsible for evaluating the accuracy and appropriateness of any Output before using it in a professional or commercial context.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">5.2. Governing Law</h3>
        <p className="text-white/60 leading-relaxed mb-6">
          Unless otherwise specified in a separate written agreement signed by the parties, these Terms and any disputes arising out of or related to the Services shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of laws rules.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">5.3. Updates to Terms</h3>
        <p className="text-white/60 leading-relaxed">
          Company reserves the right to update these Terms from time to time to reflect changes in our Services, technology, or legal requirements. Updated Terms will be published on our website or within the Service portal. Continued use of the Services after such changes constitutes acceptance of the revised Terms.
        </p>
      </section>
    </LegalPageLayout>
  );
}
