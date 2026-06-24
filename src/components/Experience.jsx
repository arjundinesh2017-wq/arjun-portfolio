import { motion } from 'framer-motion'
import SectionHeader from './ui/SectionHeader'
import { fadeUpContainer, fadeUpItem } from '../lib/animations'

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Ezyxam',
    year: '2026 – Present',
    highlights: [
      'Developing a Learning Management System',
      'Building scalable learning workflows',
      'Improving platform stability',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Rayblaze Global Solutions',
    year: '2025',
    highlights: ['Developed ERP modules', 'Built REST APIs', 'Improved database performance'],
  },
  {
    role: 'Software Developer',
    company: 'Netventure Digital Solutions',
    year: '2022 – 2024',
    highlights: ['Built Laravel applications', 'Integrated APIs', 'Collaborated with frontend teams'],
  },
]

const Experience = () => {
  return (
    <motion.section
      id="experience"
      initial="hidden"
      whileInView="show"
      variants={fadeUpContainer}
      viewport={{ once: true, amount: 0.15 }}
      className="section section-alt"
    >
      <SectionHeader
        label="Experience"
        title="Professional timeline."
        description="A track record of building reliable systems across education, ERP, and digital products."
      />

      <div className="relative mt-14 pl-8">
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent/30 to-transparent" />

        <div className="space-y-8">
          {experiences.map((exp) => (
            <motion.div key={`${exp.company}-${exp.role}`} variants={fadeUpItem} className="relative">
              <span className="absolute -left-8 top-6 h-3 w-3 rounded-full border-2 border-navy bg-accent shadow-[0_0_12px_rgba(16,137,129,0.5)]" />

              <div className="card">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-frost">{exp.role}</h3>
                  <span className="chip-accent">{exp.year}</span>
                </div>
                <p className="mt-1 text-sm text-accent">{exp.company}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {exp.highlights.map((text) => (
                    <li key={text} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Experience
