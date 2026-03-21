/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'teal-deep': '#006D77',
        'teal-medium': '#028090',
        'teal-light': '#05B2C2',
        'mint': '#83C5BE',
        'mint-light': '#EDF6F9',
        'pearl-white': '#F8F9FA',
        'cloud-gray': '#EDF2F4',
        'dental-gold': '#C9A84C',
        'dental-gold-light': '#E8C96F',
        'dental-gold-dark': '#A07830',
        'dark-navy': '#1A2332',
        'text-dark': '#1E293B',
        'text-muted': '#64748B',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'pearl-gradient': 'linear-gradient(135deg, #006D77 0%, #028090 40%, #83C5BE 100%)',
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #E8C96F 50%, #C9A84C 100%)',
        'hero-gradient': 'linear-gradient(135deg, #001F27 0%, #003644 30%, #006D77 70%, #028090 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(237,246,249,0.8) 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 109, 119, 0.15)',
        'glass-lg': '0 20px 60px rgba(0, 109, 119, 0.2)',
        'gold': '0 4px 20px rgba(201, 168, 76, 0.3)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 16px 48px rgba(0, 109, 119, 0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'shimmer-light': 'shimmer-light 3s ease-in-out infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'shimmer-light': {
          '0%': { transform: 'translateX(-100%) translateY(-100%) rotate(45deg)' },
          '100%': { transform: 'translateX(100%) translateY(100%) rotate(45deg)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
