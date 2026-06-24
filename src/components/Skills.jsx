import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiTool, FiServer, FiHeadphones, FiUsers } from 'react-icons/fi'
import SectionHeader from './ui/SectionHeader'
import { fadeUpContainer, fadeUpItem, chipItem } from '../lib/animations'

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

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="show"
      variants={fadeUpContainer}
      viewport={{ once: true, amount: 0.15 }}
      className="section"
    >
      <SectionHeader
        label="Skills"
        title="Expertise stack."
        description="A refined toolkit for shipping stable, scalable products with a Laravel-first mindset."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = group.icon
          return (
            <motion.div
              key={group.title}
              variants={fadeUpItem}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="card"
            >
              <div className="flex items-center gap-3">
                <span className="icon-box">
                  <Icon size={18} />
                </span>
                <h3 className="text-base font-semibold text-frost">{group.title}</h3>
              </div>

              <div
                className={`mt-5 flex flex-wrap gap-2 ${
                  group.title === 'Soft Skills' ? 'soft-scroll max-h-24 overflow-y-auto pr-1' : ''
                }`}
              >
                {group.skills.map((skill) => (
                  <motion.span key={skill} variants={chipItem} whileHover={{ scale: 1.04 }} className="chip">
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.section>
  )
}

export default Skills
