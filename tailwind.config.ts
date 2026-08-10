import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
        brand: ['var(--font-display)', 'Georgia', 'serif'],
      },
      colors: {
        stone: {
          950: '#0c0a09',
        },
        ink: '#2E301F',
        header: '#2E301F',
        sand: {
          50: '#F6F3F0',
          100: '#EDE8E1',
          200: '#DFD6C8',
        },
        brand: {
          // Giara olive / gold aliases keep existing class names working
          teal: '#2E301F',
          'teal-light': '#3F4230',
          'teal-dark': '#232518',
          burgundy: '#2E301F',
          'burgundy-light': '#3F4230',
          'burgundy-dark': '#232518',
          red: '#C59458',
          'red-light': '#D4AE78',
          'red-dark': '#A67B42',
          white: '#FFFFFF',
          accent: '#C59458',
        },
        gold: {
          DEFAULT: '#C59458',
          light: '#D4AE78',
          dark: '#A67B42',
        },
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(197, 148, 88, 0.28)',
        lift: '0 18px 50px -18px rgba(26, 36, 33, 0.28)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        skeleton: 'skeleton 1.5s ease-in-out infinite',
        scroll: 'scroll 2s ease-in-out infinite',
        'soft-glow': 'softGlow 8s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        skeleton: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        scroll: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(200%)' },
        },
        softGlow: {
          from: { opacity: '0.45', transform: 'scale(1)' },
          to: { opacity: '0.75', transform: 'scale(1.06)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
