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
        ink: '#000000',
        frost: '#ffffff',
        muted: '#9ca3af',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.08), 0 12px 40px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
}