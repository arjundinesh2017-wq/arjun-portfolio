import { motion } from 'framer-motion'
import { FiGithub, FiArrowUpRight } from 'react-icons/fi'

const projects = [
  {
    title: 'ERP Management System',
    description: 'Modular ERP suite focused on finance, inventory, and operations with role-based access.',
    stack: ['Laravel', 'MySQL', 'REST API'],
  },
  {
    title: 'Student Management System',
    description: 'Unified platform for admissions, attendance, and performance analytics with admin dashboards.',
    stack: ['Laravel', 'PostgreSQL', 'Tailwind'],
  },
  {
    title: 'API Integration Platform',
    description: 'Scalable middleware for integrating third-party services with monitoring and logging.',
    stack: ['Laravel', 'Docker', 'Nginx'],
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

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="show"
      variants={container}
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20"
    >
      <motion.p variants={item} className="text-sm uppercase tracking-[0.3em] text-muted">
        Projects
      </motion.p>
      <motion.h2 variants={item} className="mt-4 font-display text-3xl font-semibold text-white">
        Selected work.
      </motion.h2>
      <motion.p variants={item} className="mt-4 max-w-2xl text-sm text-muted">
        Recent builds across ERP, education, and integration platforms.
      </motion.p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={item}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25 }}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow"
          >
            <div className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 -translate-x-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 transition duration-700 group-hover:translate-x-[200%]" />
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <FiArrowUpRight className="text-white/60 transition group-hover:text-white" />
            </div>
            <p className="mt-3 text-sm text-muted">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-white"
            >
              <FiGithub />
              View on GitHub
            </a> */}
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Projects
