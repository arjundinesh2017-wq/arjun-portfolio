import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { motion } from 'framer-motion'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur transition ${
        scrolled ? 'bg-black/85 shadow-[0_8px_30px_rgba(0,0,0,0.35)]' : 'bg-black/60'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-display text-xl font-semibold tracking-wide">
          Arjun
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-white/80 transition hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-white transition group-hover:scale-x-100" />
            </a>
          ))}
        </div>
        <button
          type="button"
          className="md:hidden text-white"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="md:hidden px-6 pb-4"
        >
          <div className="flex flex-col gap-3 text-sm text-muted">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="transition text-white/80 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  )
}

export default Navbar
