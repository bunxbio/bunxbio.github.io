import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F4F4F4',
          dark: '#1A1A1A',
          'dark-muted': '#2E2E2E',
        },
        content: {
          DEFAULT: '#2E2E2E',
          muted: '#6B7280',
          inverse: '#FFFFFF',
          'dark-muted': '#9CA3AF',
        },
        accent: {
          DEFAULT: '#4A90E2',
          hover: '#3A7BD5',
          light: '#E8F0FE',
          dark: '#1E3A5F',
        },
        border: {
          DEFAULT: '#E5E7EB',
          dark: '#374151',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
} satisfies Config
