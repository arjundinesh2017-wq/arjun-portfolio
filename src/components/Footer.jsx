import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="shimmer-line mx-auto mb-6 h-px max-w-6xl" />

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 px-6 text-xs text-muted">
        <p className="text-center">© 2026 Arjun Dinesh. All rights reserved.</p>
      </div>

    </footer>
  )
}

export default Footer