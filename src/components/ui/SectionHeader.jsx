import { motion } from 'framer-motion'
import { fadeUpItem } from '../../lib/animations'

const SectionHeader = ({ label, title, description, align = 'left' }) => {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      <motion.p variants={fadeUpItem} className="section-label">
        {label}
      </motion.p>
      <motion.h2 variants={fadeUpItem} className="section-title">
        {title}
      </motion.h2>
      {description && (
        <motion.p variants={fadeUpItem} className="section-desc">
          {description}
        </motion.p>
      )}
      <motion.div variants={fadeUpItem} className="section-accent-bar" aria-hidden="true" />
    </div>
  )
}

export default SectionHeader
