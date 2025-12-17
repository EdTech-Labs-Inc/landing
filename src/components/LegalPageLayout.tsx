import { Link } from 'react-router-dom';
import { Sparkles, 
  // ArrowLeft 
  } from 'lucide-react';

interface LegalPageLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function LegalPageLayout({ children, title }: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-black">
      {/* Subtle background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-8 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 via-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-white tracking-tight">
              EdTech Labs
            </span>
          </Link>
          {/* <Link
            to="/"
            className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link> */}
        </div>
      </nav>

      {/* Content */}
      <main className="relative max-w-4xl mx-auto px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight">
          {title}
        </h1>
        <div className="prose prose-invert prose-lg max-w-none">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-semibold text-white">EdTech Labs</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link to="/terms" className="text-white/30 hover:text-white/60 transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-white/30 hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/30">
              &copy; {new Date().getFullYear()} EdTech Labs, Inc.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
