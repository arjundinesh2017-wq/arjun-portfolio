export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        navy: '#020617',
        ink: '#020617',
        frost: '#E2E8F0',
        accent: '#108981',
        muted: '#94A3B8',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(226,232,240,0.08), 0 12px 40px rgba(2,6,23,0.6)',
        accent: '0 0 0 1px rgba(16,137,129,0.25), 0 8px 32px rgba(16,137,129,0.15)',
      },
    },
  },
  plugins: [],
}