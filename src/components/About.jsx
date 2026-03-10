import { motion } from 'framer-motion'
import { FiMapPin, FiClock, FiStar } from 'react-icons/fi'

const cards = [
  { label: 'Location', value: 'Kerala, India', icon: FiMapPin },
  { label: 'Experience', value: '3+ Years', icon: FiClock },
  { label: 'Specialization', value: 'Laravel Development', icon: FiStar },
]

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

const About = () => {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="show"
      variants={container}
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20"
    >
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <motion.div variants={item} className="relative">
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
          <p className="text-sm uppercase tracking-[0.3em] text-muted">About</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-white">
            Focused on outcomes.
          </h2>
          <p className="mt-6 text-base text-muted">
            I am a result-driven IT professional with more than 3 years of experience in Web Development, IT Support, and Database Management. I specialize in Laravel development, REST API creation, and building scalable web applications.
          </p>
          <div className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Core Strengths</p>
            <div className="flex flex-wrap gap-3 text-sm text-white/80">
              <span className="rounded-full border border-white/10 px-3 py-1">REST APIs</span>
              <span className="rounded-full border border-white/10 px-3 py-1">Scalable Systems</span>
              <span className="rounded-full border border-white/10 px-3 py-1">Database Tuning</span>
            </div>
          </div>
        </motion.div>
        <div className="grid gap-4">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.label}
                variants={item}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-glow"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-white/5 blur-2xl transition group-hover:bg-white/10" />
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted">{card.label}</p>
                    <p className="mt-2 text-lg font-semibold text-white">{card.value}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}

export default About
