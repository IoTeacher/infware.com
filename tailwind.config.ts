import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { 950: '#05070d', 900: '#080b14', 800: '#0d1220', 700: '#141a2c' },
        neon: { cyan: '#22d3ee', blue: '#3b82f6', violet: '#8b5cf6' },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-grotesk)', 'var(--font-inter)', 'sans-serif'],
      },
      keyframes: {
        shimmer: { '0%': { backgroundPosition: '0% 50%' }, '100%': { backgroundPosition: '200% 50%' } },
        blob: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(40px,-30px) scale(1.1)' },
          '66%': { transform: 'translate(-30px,20px) scale(0.95)' },
        },
        spin: { to: { transform: 'rotate(360deg)' } },
      },
      animation: {
        shimmer: 'shimmer 6s linear infinite',
        blob: 'blob 18s ease-in-out infinite',
        'spin-slow': 'spin 6s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
