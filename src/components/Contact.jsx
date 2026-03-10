import { motion } from 'framer-motion'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FiMail, FiPhone, FiLinkedin } from 'react-icons/fi'

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const contacts = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'arjundinesh2017@email.com',
    href: 'mailto:arjundinesh2017@email.com',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+91 9061767309',
    href: 'tel:+919061767309',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/arjundinesh',
    href: 'https://linkedin.com/in/arjundinesh',
  },
]

const SERVICE_ID = 'service_r1w11et'
const TEMPLATE_ID = 'template_d8d36lf'
const PUBLIC_KEY = 'UDXr0dfkB6mjvxpDc'

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [errorText, setErrorText] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (status === 'loading') return

    setStatus('loading')
    setErrorText('')

    const templateParams = {
      ...formData,
      reply_to: formData.from_email,
    }

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      setStatus('success')
      setFormData({ from_name: '', from_email: '', message: '' })
      setTimeout(() => setStatus('idle'), 3500)
    } catch (error) {
      const message = error?.text || error?.message || 'Unknown error'
      setErrorText(message)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3500)
    }
  }

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="show"
      variants={container}
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20"
    >
      <motion.p variants={item} className="text-sm uppercase tracking-[0.3em] text-muted">
        Contact
      </motion.p>
      <motion.h2 variants={item} className="mt-4 font-display text-3xl font-semibold text-white">
        Let us build together.
      </motion.h2>
      <motion.p variants={item} className="mt-4 max-w-2xl text-sm text-muted">
        Have a project in mind or want to collaborate? Reach out and I will respond quickly.
      </motion.p>
      <div className="mt-10 grid items-stretch gap-8 md:gap-10 md:grid-cols-2">
        <motion.div
          variants={item}
          className="relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-white/5 blur-2xl" />
          {contacts.map((contact) => {
            const Icon = contact.icon
            return (
              <motion.a
                key={contact.label}
                variants={item}
                whileHover={{ y: -4 }}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/40 p-4 transition hover:border-white/30"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10">
                  <Icon />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">{contact.label}</p>
                  <p className="mt-1 text-sm text-white/80">{contact.value}</p>
                </div>
              </motion.a>
            )
          })}
        </motion.div>
        <motion.form
          variants={item}
          onSubmit={handleSubmit}
          className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-white/5 blur-2xl" />
          <div className="grid gap-4">
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none"
            />
            <input
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none"
            />
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              className="rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:border-white hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          <div className="mt-auto" />
        </motion.form>
      </div>
      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed right-6 top-24 z-50 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200 shadow-glow"
        >
          Message sent successfully. I will get back to you soon.
        </motion.div>
      )}
      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed right-6 top-24 z-50 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200 shadow-glow"
        >
          Something went wrong. {errorText ? `(${errorText})` : 'Please try again.'}
        </motion.div>
      )}
    </motion.section>
  )
}

export default Contact
