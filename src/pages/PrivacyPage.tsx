import { LegalPageLayout } from '../components/legal/LegalPageLayout';
import { MarkdownContent } from '../components/legal/MarkdownContent';
import privacyContent from '../../content/legal/privacy-policy.md?raw';

export default function PrivacyPage() {
  return (
    <LegalPageLayout>
      <MarkdownContent content={privacyContent} />
    </LegalPageLayout>
  );
}
