const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-frost/8 bg-navy pb-10 pt-12">
      <div className="shimmer-line mx-auto mb-10 h-px max-w-6xl opacity-60" />

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <a href="#home" className="flex items-center gap-2 font-display text-lg font-semibold text-frost">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Arjun Dinesh
        </a>

        <p className="text-center text-xs text-muted">
          © {year} Arjun Dinesh. All rights reserved.
        </p>

        <a href="#contact" className="text-xs text-accent transition hover:text-frost">
          Get in touch →
        </a>
      </div>
    </footer>
  )
}

export default Footer
