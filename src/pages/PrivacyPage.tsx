import { LegalPageLayout } from '../components/LegalPageLayout';

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy">
      <p className="text-white/40 text-sm mb-8">Last Updated: December 2025</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
        <p className="text-white/60 leading-relaxed">
          We are committed to protecting the privacy and security of the data entrusted to us.
          This Privacy Policy describes how EdTech Labs, Inc. ("Company") collects, uses, and secures data.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">2. Data Collection</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          We collect and process the following types of data:
        </p>
        <ul className="list-disc list-inside space-y-3 text-white/60">
          <li>
            <strong className="text-white/80">Account Information:</strong> Names, email addresses, and authentication credentials required to provision access for Users (including Administrative Users and End Users).
          </li>
          <li>
            <strong className="text-white/80">Customer Data:</strong> Text, media, and other materials uploaded by Customer for processing.
          </li>
          <li>
            <strong className="text-white/80">Usage Data:</strong> Telemetry regarding how users interact with the platform (e.g., features used, session duration).
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">3. Data Usage & AI Improvement</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          Company uses Customer Data to provide, maintain, and secure the Services. Consistent with our commitment to innovation, Customer grants Company the right to use de-identified or aggregated Customer Data and Output for R&D purposes, including to:
        </p>
        <ul className="list-disc list-inside space-y-3 text-white/60">
          <li>
            <strong className="text-white/80">Analyze Usage Patterns:</strong> To understand how the Services are used and optimize performance.
          </li>
          <li>
            <strong className="text-white/80">Develop Future Capabilities:</strong> To test algorithms and develop new features, which may include the training or fine-tuning of future AI models. We do not sell Customer Data to third parties.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
        <p className="text-white/60 leading-relaxed">
          We implement industry-standard technical and organizational measures to protect data against unauthorized access, alteration, disclosure, or destruction. These measures include data encryption in transit and at rest, access controls, and regular security audits.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">5. Data Retention</h2>
        <p className="text-white/60 leading-relaxed">
          Upon termination of the Agreement, Company will make Customer Data available for export for a period of thirty (30) days. Thereafter, Company may delete or anonymize such data in accordance with our standard data retention practices, unless a longer retention period is required by law.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">6. Updates to Policy</h2>
        <p className="text-white/60 leading-relaxed">
          Company reserves the right to update this Privacy Policy from time to time to reflect changes in our Services, technology, or legal requirements. Updated policies will be published on our website. Continued use of the Services after such changes constitutes acceptance of the revised policy.
        </p>
      </section>
    </LegalPageLayout>
  );
}
