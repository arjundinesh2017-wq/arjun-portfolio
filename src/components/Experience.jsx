import { motion } from 'framer-motion'

const experiences = [

  {
    role: 'Software Engineer',
    company: 'Ezyxam',
    year: '2026-Present',
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
    year: '2022-2024',
    highlights: ['Built Laravel applications', 'Integrated APIs', 'Collaborated with frontend teams'],
  },

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

const Experience = () => {
  return (
    <motion.section
      id="experience"
      initial="hidden"
      whileInView="show"
      variants={container}
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20"
    >
      <motion.p variants={item} className="text-sm uppercase tracking-[0.3em] text-muted">
        Experience
      </motion.p>
      <motion.h2 variants={item} className="mt-4 font-display text-3xl font-semibold text-white">
        Professional timeline.
      </motion.h2>
      <motion.div variants={item} className="relative mt-10">
        <div className="absolute left-0 right-0 top-3 h-px bg-white/10" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow"
            >
              <div className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 -translate-x-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 transition duration-700 group-hover:translate-x-[200%]" />
              <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-white/5 blur-2xl transition group-hover:bg-white/10" />
              <div className="absolute left-6 top-0 -translate-y-1/2 h-3 w-3 rounded-full bg-white" />
              <p className="text-xs uppercase tracking-[0.3em] text-muted">{exp.year}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{exp.role}</h3>
              <p className="mt-1 text-sm text-white/70">{exp.company}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {exp.highlights.map((itemText) => (
                  <li key={itemText}>� {itemText}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Experience
