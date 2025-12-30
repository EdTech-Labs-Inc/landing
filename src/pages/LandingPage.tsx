import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Headphones,
  Video,
  Mic2,
  Brain,
  Sparkles,
  ArrowRight,
  Zap,
  Globe,
  CheckCircle2,
} from 'lucide-react';

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);
  const [rotatingWordIndex, setRotatingWordIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const rotatingWords = ['video', 'engagement', 'content', 'experiences', 'impact'];

  useEffect(() => {
    setMounted(true);
  }, []);

  // Track mouse position for interactive dot glow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Rotate words every 3 seconds with smooth transition
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setRotatingWordIndex((prev) => (prev + 1) % rotatingWords.length);

        // Small delay before starting enter animation
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, [rotatingWords.length]);


  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      {/* SVG Noise Filter - very subtle dithering */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="2" stitchTiles="stitch"/>
            <feColorMatrix type="saturate" values="0"/>
            <feComponentTransfer>
              <feFuncA type="discrete" tableValues="0 0 0 0 0 0 0 1"/>
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>

      {/* Base dot pattern with gradient fade - more intense at top, subtle at bottom */}
      <div
        className="fixed inset-0 pointer-events-none pattern-dots"
        style={{
          zIndex: 1,
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 100%)',
        }}
      ></div>

      {/* Interactive illuminated dots layer */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          backgroundImage: 'radial-gradient(circle, rgba(255, 140, 90, 0) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          maskImage: `radial-gradient(circle 40px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0) 100%)`,
          WebkitMaskImage: `radial-gradient(circle 40px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0) 100%)`,
        }}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255, 140, 90, 0.8) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        ></div>
      </div>

      {/* Navigation - Savona absolute transparent header */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between relative">
            {/* Logo - Left aligned */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-primary">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-xl font-bold text-foreground">
                EdTech Labs
              </span>
            </div>

            {/* Nav - Absolutely centered */}
            <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                How It Works
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Solutions
              </a>
            </nav>

            {/* CTA - Right aligned */}
            <a
              href="https://cms-staging.edtechinc.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg border border-border bg-transparent text-foreground text-sm font-semibold hover:bg-muted transition-all duration-200"
            >
              Sign In
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section - Savona style */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Vertical gradient background - lighter peach top, darker bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent-peach/10 via-accent-peach/4 to-background"></div>

        {/* Content */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-8">
              AI-Powered Content Creation
            </div>

            {/* Main Headline - Display font, large, gradient text */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 tracking-tight leading-tight">
              Transform text into
              <br />
              <span className="inline-block overflow-hidden" style={{ minHeight: '1.3em', paddingBottom: '0.25em', lineHeight: '1.3' }}>
                <span
                  key={rotatingWordIndex}
                  className={`text-gradient inline-block transition-all duration-500 ease-out ${
                    isTransitioning
                      ? 'opacity-0 blur-sm scale-95 translate-y-[-100%]'
                      : 'opacity-100 blur-0 scale-100 translate-y-0'
                  }`}
                  style={{
                    lineHeight: '1.3',
                    animation: isTransitioning ? 'none' : 'slideUpIn 0.5s ease-out'
                  }}
                >
                  {mounted ? rotatingWords[rotatingWordIndex] : 'video'}.
                </span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform text into videos, podcasts, audio, and quizzes—in any language, delivered anywhere.
            </p>

            {/* CTA - Outline button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a
                href="https://cms-staging.edtechinc.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-10 py-4 rounded-lg border border-border bg-transparent text-foreground font-semibold text-lg hover:bg-muted transition-all duration-200 flex items-center gap-2"
              >
                Start Creating
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>5 Content Formats</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>10x Faster</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>50+ Languages</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Dark with dots */}
      <section id="features" className="relative bg-background min-h-screen flex items-center">
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Five ways to learn.
              <br />
              <span className="text-muted-foreground">One upload.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Different learners need different formats. We generate them all.
            </p>
          </div>

          {/* Feature cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Video,
                title: 'AI Video',
                description: 'Professional videos with AI avatars, auto-captions, and dynamic editing. No camera needed.',
                emoji: '🎥',
              },
              {
                icon: Mic2,
                title: 'AI Podcast',
                description: 'Natural conversations between two AI voices with professional audio quality and engagement.',
                emoji: '🎙️',
              },
              {
                icon: Headphones,
                title: 'Audio Narration',
                description: 'Text-to-speech with natural-sounding AI voices for accessible and engaging learning.',
                emoji: '🎧',
              },
              {
                icon: Brain,
                title: 'Interactive Quiz',
                description: 'Auto-generated assessments with multiple choice, true/false, and fill-in-the-blank questions.',
                emoji: '🧠',
              },
              {
                icon: Sparkles,
                title: 'Interactive Podcast',
                description: 'Podcasts with embedded quiz questions throughout for active learning and engagement.',
                emoji: '✨',
              },
              {
                icon: Globe,
                title: 'Multilingual Support',
                description: 'Create content in 32+ languages including English, Spanish, French, German, and more.',
                emoji: '🌍',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl p-5 border border-border/50 hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                {/* Gradient icon box */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-3 text-xl shadow-primary transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  {feature.emoji}
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-card-foreground mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Use Cases Section */}
      <section className="relative bg-background py-32">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
              Real results.
              <br />
              <span className="text-gradient">Across every use case.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From marketing teams to L&D departments, see the impact.
            </p>
          </div>

          {/* Use case cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Marketing Teams */}
            <div className="bg-card rounded-2xl p-8 border border-border/50">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 text-2xl shadow-primary">
                📱
              </div>
              <h3 className="font-display text-2xl font-bold text-card-foreground mb-4">
                Marketing Teams
              </h3>
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-4xl font-bold text-gradient mb-2">95%</div>
                  <p className="text-muted-foreground">Cost reduction vs. traditional video production</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gradient mb-2">15 min</div>
                  <p className="text-muted-foreground">Average time from script to finished video</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Replace expensive camera crews, actors, scriptwriters, and post-production teams. Traditional production costs $2,500-$50,000 per video—our platform delivers professional results in minutes.
              </p>
            </div>

            {/* Custom Learning Solutions */}
            <div className="bg-card rounded-2xl p-8 border border-border/50">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-teal to-accent-coral flex items-center justify-center mb-6 text-2xl shadow-teal">
                🎓
              </div>
              <h3 className="font-display text-2xl font-bold text-card-foreground mb-4">
                Custom Learning Solutions
              </h3>
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-4xl font-bold text-gradient mb-2">10x</div>
                  <p className="text-muted-foreground">Faster content updates and iterations</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gradient mb-2">32+</div>
                  <p className="text-muted-foreground">Languages for global reach</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Embed our platform into your app to deliver dynamic learning experiences to your users. Update content instantly, scale to any language, and provide multiple learning formats—all from one system.
              </p>
            </div>

            {/* Employee Training */}
            <div className="bg-card rounded-2xl p-8 border border-border/50">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 text-2xl shadow-primary">
                👥
              </div>
              <h3 className="font-display text-2xl font-bold text-card-foreground mb-4">
                Employee Training
              </h3>
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-4xl font-bold text-gradient mb-2">72 hrs</div>
                  <p className="text-muted-foreground">Saved per month for L&D teams</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gradient mb-2">40%</div>
                  <p className="text-muted-foreground">Faster course creation with AI</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                L&D teams create and deliver training in one platform. Replace the 8+ hours traditionally needed per course with AI-powered creation, then deliver to employees instantly—no external vendors required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works - Dark with dots */}
      <section id="how-it-works" className="relative bg-background py-32">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">
              How it works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                number: '01',
                title: 'Upload',
                description: 'Paste or upload your article content.',
                emoji: '📝',
              },
              {
                number: '02',
                title: 'Select',
                description: 'Choose which formats to generate.',
                emoji: '⚙️',
              },
              {
                number: '03',
                title: 'Publish',
                description: 'Download, review, edit, and publish your content.',
                emoji: '🚀',
              },
            ].map((step, index) => (
              <div key={index} className="text-center group">
                {/* Numbered icon box */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-teal to-accent-coral flex items-center justify-center mb-4 text-3xl mx-auto shadow-teal transform group-hover:scale-110 transition-all duration-300">
                  {step.emoji}
                </div>

                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Dark with dots */}
      <section id="pricing" className="relative bg-background py-32">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 tracking-tight leading-tight">
            Ready to transform
            <br />
            <span className="text-gradient">your content?</span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Join teams creating multimedia at scale.
          </p>

          <a
            href="https://cms-staging.edtechinc.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-5 rounded-lg border border-border bg-transparent text-foreground font-semibold text-lg hover:bg-muted transition-all duration-200"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer - Savona style */}
      <footer className="relative py-12 border-t border-border/30 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-primary">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-display text-lg font-bold text-foreground">EdTech Labs</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link to="/terms" className="text-white/30 hover:text-white/60 transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-white/30 hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/30">
              &copy; {new Date().getFullYear()} EdTech Labs
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
