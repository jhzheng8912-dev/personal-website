import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,ts}',
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Noto Sans TC', 'sans-serif'],
      },
      colors: {
        cyber: {
          blue:   '#00d4ff',
          'blue-dim': '#0099bb',
          bg:     '#0a0a0a',
          surface:'#111111',
          border: '#1a1a1a',
          muted:  '#333333',
          text:   '#e8e8e8',
          subtle: '#888888',
        },
      },
      boxShadow: {
        glow:    '0 0 20px rgba(0, 212, 255, 0.4)',
        'glow-lg':'0 0 40px rgba(0, 212, 255, 0.3)',
        'glow-sm':'0 0 10px rgba(0, 212, 255, 0.25)',
      },
      animation: {
        typewriter: 'typewriter 2.5s steps(20) forwards',
        blink:      'blink 1s step-end infinite',
        'fade-up':  'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        typewriter: {
          from: { width: '0' },
          to:   { width: '100%' },
        },
        blink: {
          '0%, 100%': { 'border-color': 'transparent' },
          '50%':       { 'border-color': '#00d4ff' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
