import { motion } from 'framer-motion'
import { FiMapPin, FiClock, FiStar } from 'react-icons/fi'
import SectionHeader from './ui/SectionHeader'
import { fadeUpContainer, fadeUpItem } from '../lib/animations'

const cards = [
  { label: 'Location', value: 'Kerala, India', icon: FiMapPin },
  { label: 'Experience', value: '3+ Years', icon: FiClock },
  { label: 'Specialization', value: 'Laravel Development', icon: FiStar },
]

const strengths = ['REST APIs', 'Scalable Systems', 'Database Tuning']

const About = () => {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="show"
      variants={fadeUpContainer}
      viewport={{ once: true, amount: 0.15 }}
      className="section section-alt"
    >
      <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <SectionHeader
            label="About"
            title="Focused on outcomes."
            description="I am a result-driven IT professional with more than 3 years of experience in Web Development, IT Support, and Database Management. I specialize in Laravel development, REST API creation, and building scalable web applications."
          />

          <motion.div variants={fadeUpItem} className="mt-10">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted">Core Strengths</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {strengths.map((skill) => (
                <span key={skill} className="chip-accent">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid gap-4">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.label}
                variants={fadeUpItem}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="card flex items-center gap-4 !p-5"
              >
                <span className="icon-box">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">{card.label}</p>
                  <p className="mt-1 text-lg font-semibold text-frost">{card.value}</p>
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
