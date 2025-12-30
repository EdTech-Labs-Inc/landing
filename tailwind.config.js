import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Space Grotesk', 'Cabinet Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        // Savona "Sunrise Learning" Palette
        primary: {
          DEFAULT: 'hsl(14, 100%, 64%)', // #FF8C5A - Sunset Orange
          hover: 'hsl(14, 100%, 58%)',    // #FF7A42
          foreground: 'hsl(0, 0%, 100%)', // White text
        },
        secondary: {
          DEFAULT: 'hsl(32, 100%, 64%)',     // #FFB347 - Honey Amber
          hover: 'hsl(32, 100%, 58%)',
          foreground: 'hsl(0, 0%, 10%)',     // Dark text
        },
        accent: {
          teal: 'hsl(165, 94%, 44%)',        // #06D6A0
          'teal-light': 'hsl(165, 94%, 94%)',
          coral: 'hsl(8, 100%, 78%)',        // #FF9A8D
          'coral-light': 'hsl(8, 100%, 95%)',
          peach: 'hsl(24, 100%, 85%)',       // #FFD4B8
        },
        // Warm neutrals - Dark theme as default
        background: 'hsl(25, 8%, 6%)',       // Warm near-black
        foreground: 'hsl(30, 5%, 98%)',      // Warm white
        card: 'hsl(25, 8%, 12%)',            // Warm dark card
        'card-foreground': 'hsl(30, 5%, 98%)',
        muted: 'hsl(25, 8%, 18%)',
        'muted-foreground': 'hsl(30, 5%, 65%)',
        border: 'hsl(25, 8%, 20%)',
        input: 'hsl(25, 8%, 24%)',
        // Status colors
        success: 'hsl(165, 94%, 44%)',       // Teal
        'success-bg': 'hsl(165, 94%, 94%)',
        warning: 'hsl(38, 92%, 58%)',        // Warm yellow
        'warning-bg': 'hsl(38, 92%, 95%)',
        error: 'hsl(8, 88%, 62%)',           // Warm red
        'error-bg': 'hsl(8, 88%, 95%)',
        info: 'hsl(200, 88%, 58%)',          // Soft blue
        'info-bg': 'hsl(200, 88%, 95%)',

        // Legacy colors for dashboard compatibility
        navy: {
          primary: '#000000',
          secondary: '#0A0A0A',
          dark: '#000000',
        },
        text: {
          primary: 'rgba(255, 255, 255, 0.98)',
          secondary: 'rgba(255, 255, 255, 0.7)',
          muted: 'rgba(255, 255, 255, 0.45)',
          dim: 'rgba(255, 255, 255, 0.3)',
        },
        gold: {
          DEFAULT: '#FFFFFF',
          light: 'rgba(255, 255, 255, 0.12)',
          glow: 'rgba(255, 255, 255, 0.25)',
        },
        blue: {
          accent: '#8B5CF6',
          light: 'rgba(139, 92, 246, 0.12)',
          glow: 'rgba(139, 92, 246, 0.25)',
          vibrant: '#A78BFA',
        },
        purple: {
          accent: '#8B5CF6',
          light: 'rgba(139, 92, 246, 0.12)',
          glow: 'rgba(139, 92, 246, 0.25)',
          vibrant: '#A78BFA',
        },
        teal: {
          accent: '#14B8A6',
          light: 'rgba(20, 184, 166, 0.12)',
          glow: 'rgba(20, 184, 166, 0.25)',
        },
        pink: {
          accent: '#EC4899',
          light: 'rgba(236, 72, 153, 0.12)',
          glow: 'rgba(236, 72, 153, 0.25)',
        },
        difficulty: {
          beginner: '#10B981',
          intermediate: '#FFFFFF',
          advanced: '#8B5CF6',
        },
        white: {
          DEFAULT: '#FFFFFF',
          5: 'rgba(255, 255, 255, 0.05)',
          10: 'rgba(255, 255, 255, 0.1)',
          15: 'rgba(255, 255, 255, 0.15)',
          20: 'rgba(255, 255, 255, 0.2)',
          30: 'rgba(255, 255, 255, 0.3)',
          40: 'rgba(255, 255, 255, 0.4)',
          60: 'rgba(255, 255, 255, 0.6)',
          87: 'rgba(255, 255, 255, 0.87)',
        },
      },
      backgroundImage: {
        'gradient-sunset': 'linear-gradient(135deg, #FF6B4A 0%, #FF8C5A 50%, #FFB347 100%)',
        'gradient-warm-glow': 'radial-gradient(circle at 50% 50%, #FFD4B8 0%, transparent 70%)',
        'gradient-hero': 'linear-gradient(to bottom right, hsl(24, 100%, 85%, 0.2), hsl(30, 15%, 99%), hsl(8, 100%, 78%, 0.1))',
        'gradient-primary': 'linear-gradient(135deg, #FFFFFF 0%, #000000 100%)',
        'gradient-gold': 'linear-gradient(135deg, #FFFFFF 0%, #E5E5E5 100%)',
        'gradient-blue': 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
        'gradient-purple': 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
        'gradient-teal': 'linear-gradient(135deg, #14B8A6 0%, #2DD4BF 100%)',
        'gradient-pink': 'linear-gradient(135deg, #EC4899 0%, #F472B6 100%)',
        'gradient-mesh': 'radial-gradient(at 0% 0%, rgba(255, 255, 255, 0.03) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(255, 255, 255, 0.03) 0px, transparent 50%)',
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '32px',
        pill: '9999px',
      },
      boxShadow: {
        xs: '0 1px 2px rgba(255, 107, 74, 0.06)',
        sm: '0 2px 4px rgba(255, 107, 74, 0.08)',
        md: '0 4px 8px rgba(255, 107, 74, 0.1)',
        lg: '0 8px 16px rgba(255, 107, 74, 0.12)',
        xl: '0 12px 24px rgba(255, 107, 74, 0.15)',
        primary: '0 8px 20px rgba(255, 140, 90, 0.3)',
        teal: '0 8px 20px rgba(6, 214, 160, 0.25)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.1)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(139, 92, 246, 0.1)',
        'glow-gold': '0 0 20px rgba(255, 184, 77, 0.3), 0 0 40px rgba(255, 184, 77, 0.1)',
        'glow-teal': '0 0 20px rgba(20, 184, 166, 0.3), 0 0 40px rgba(20, 184, 166, 0.1)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.25), 0 0 1px rgba(255, 255, 255, 0.1)',
        'card-hover': '0 8px 32px rgba(0, 0, 0, 0.35), 0 0 1px rgba(255, 255, 255, 0.15)',
      },
      backdropBlur: {
        '4xl': '128px',
        '5xl': '200px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { filter: 'brightness(1) saturate(1)' },
          '100%': { filter: 'brightness(1.1) saturate(1.2)' },
        },
      },
    },
  },
  plugins: [typography],
}
