import { motion } from 'framer-motion'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FiMail, FiPhone, FiLinkedin, FiSend } from 'react-icons/fi'
import SectionHeader from './ui/SectionHeader'
import { fadeUpContainer, fadeUpItem } from '../lib/animations'

const contacts = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'arjundinesh2017@gmail.com',
    href: 'mailto:arjundinesh2017@gmail.com',
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
    href: 'https://www.linkedin.com/in/arjun-dinesh-3b1671218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
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
      variants={fadeUpContainer}
      viewport={{ once: true, amount: 0.15 }}
      className="section section-alt"
    >
      <SectionHeader
        label="Contact"
        title="Let's build together."
        description="Have a project in mind or want to collaborate? Reach out and I will respond quickly."
      />

      <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
        <motion.div variants={fadeUpItem} className="card flex h-full flex-col">
          <p className="mb-5 text-sm font-medium text-frost">Get in touch</p>

          <div className="flex flex-1 flex-col justify-between gap-3">
            {contacts.map((contact) => {
              const Icon = contact.icon
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex flex-1 items-center gap-4 rounded-xl border border-frost/8 bg-navy/50 p-4 transition hover:border-accent/30 hover:bg-navy/70"
                >
                  <span className="icon-box !h-10 !w-10">
                    <Icon size={16} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted">{contact.label}</p>
                    <p className="mt-0.5 break-all text-sm text-accent sm:break-normal">{contact.value}</p>
                  </div>
                </a>
              )
            })}
          </div>
        </motion.div>

        <motion.form
          variants={fadeUpItem}
          onSubmit={handleSubmit}
          className="card flex h-full flex-col"
        >
          <p className="mb-5 text-sm font-medium text-frost">Send a message</p>

          <div className="flex flex-1 flex-col gap-4">
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="input-field"
            />
            <input
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              placeholder="Your email"
              required
              className="input-field"
            />
            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
              className="input-field min-h-[120px] flex-1 resize-none"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary !inline-flex w-full"
            >
              <FiSend className="mr-2" size={15} />
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </motion.form>
      </div>

      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed right-6 top-24 z-50 rounded-xl border border-accent/30 bg-surface px-4 py-3 text-sm text-frost shadow-accent"
        >
          Message sent successfully. I will get back to you soon.
        </motion.div>
      )}
      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed right-6 top-24 z-50 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200"
        >
          Something went wrong. {errorText ? `(${errorText})` : 'Please try again.'}
        </motion.div>
      )}
    </motion.section>
  )
}

export default Contact
