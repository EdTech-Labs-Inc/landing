import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="prose prose-invert max-w-none
      prose-headings:text-white prose-headings:font-semibold
      prose-h1:text-4xl prose-h1:mb-8 prose-h1:pb-4 prose-h1:border-b prose-h1:border-white/10
      prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
      prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
      prose-p:text-white/70 prose-p:leading-relaxed prose-p:mb-4
      prose-li:text-white/70 prose-li:my-1
      prose-ul:my-4 prose-ol:my-4
      prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline
      prose-strong:text-white prose-strong:font-semibold
      prose-em:text-white/80
      prose-code:text-purple-300 prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
      prose-blockquote:border-l-purple-500 prose-blockquote:text-white/60
      prose-hr:border-white/10
      prose-table:text-white/70
      prose-th:text-white prose-th:font-semibold
      prose-td:border-white/10
    ">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
