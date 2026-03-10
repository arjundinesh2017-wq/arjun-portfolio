import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiTool, FiServer, FiHeadphones, FiUsers } from 'react-icons/fi'

const skillGroups = [
  {
    title: 'Programming & Development',
    icon: FiCode,
    skills: ['PHP', 'Laravel', 'Python', 'JavaScript', 'HTML', 'CSS', 'AJAX'],
  },
  {
    title: 'Database & Systems',
    icon: FiDatabase,
    skills: ['MySQL', 'PostgreSQL', 'Database Design', 'Nginx Basics'],
  },
  {
    title: 'Tools & Platforms',
    icon: FiTool,
    skills: ['Git', 'VS Code', 'TeamViewer', 'AnyDesk', 'MS Office'],
  },
  {
    title: 'Server Management',
    icon: FiServer,
    skills: ['Bluehost', 'DigitalOcean Deployment'],
  },
  {
    title: 'IT Support',
    icon: FiHeadphones,
    skills: ['Windows 10/11 Installation', 'Troubleshooting'],
  },
  {
    title: 'Soft Skills',
    icon: FiUsers,
    skills: [
      'Problem-Solving & Analytical Thinking',
      'Team Collaboration & Agile Practices',
      'Adaptability & Quick Learning',
      'Effective Communication',
      'Time & Task Management',
    ],
  },
]

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.12,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const chip = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="show"
      variants={container}
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20"
    >
      <motion.p variants={item} className="text-sm uppercase tracking-[0.3em] text-muted">
        Skills
      </motion.p>
      <motion.h2
        variants={item}
        className="mt-4 font-display text-3xl font-semibold text-white"
      >
        Expertise stack.
      </motion.h2>
      <motion.p variants={item} className="mt-4 max-w-2xl text-sm text-muted">
        A refined toolkit for shipping stable, scalable products with a Laravel-first mindset.
      </motion.p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = group.icon
          return (
            <motion.div
              key={group.title}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow"
            >
              <div className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 -translate-x-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 transition duration-700 group-hover:translate-x-[200%]" />
              <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-white/5 blur-2xl transition group-hover:bg-white/10" />
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10">
                  <Icon size={18} />
                </span>
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              </div>
              <motion.div
                variants={item}
                className={`mt-6 flex flex-wrap gap-2 ${
                  group.title === 'Soft Skills'
                    ? 'soft-scroll max-h-24 overflow-y-auto pr-1'
                    : ''
                }`}
              >
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={chip}
                    whileHover={{ scale: 1.05 }}
                    className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-muted transition"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </motion.section>
  )
}

export default Skills
