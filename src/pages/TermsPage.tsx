import { LegalPageLayout } from '../components/legal/LegalPageLayout';
import { MarkdownContent } from '../components/legal/MarkdownContent';
import termsContent from '../../content/legal/terms-of-service.md?raw';

export default function TermsPage() {
  return (
    <LegalPageLayout>
      <MarkdownContent content={termsContent} />
    </LegalPageLayout>
  );
}
