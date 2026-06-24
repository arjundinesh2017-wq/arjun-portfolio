import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import SectionHeader from './ui/SectionHeader'
import { fadeUpContainer, fadeUpItem } from '../lib/animations'

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

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="show"
      variants={fadeUpContainer}
      viewport={{ once: true, amount: 0.15 }}
      className="section"
    >
      <SectionHeader
        label="Projects"
        title="Selected work."
        description="Recent builds across ERP, education, and integration platforms."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            variants={fadeUpItem}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="card group flex h-full flex-col"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="font-display text-3xl font-bold text-accent/30">
                {String(index + 1).padStart(2, '0')}
              </span>
              <FiArrowUpRight className="mt-1 shrink-0 text-frost/40 transition group-hover:text-accent" />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-frost">{project.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-frost/8 pt-5">
              {project.stack.map((tech) => (
                <span key={tech} className="chip-accent">
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}

export default Projects
