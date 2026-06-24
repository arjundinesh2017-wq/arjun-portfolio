import { motion } from 'framer-motion'
import portrait from '../assets/arjun-portrait.jpg.png'
import cvFile from '../assets/Arjun_Dinesh_CV.pdf'

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Built' },
  { value: 'Laravel', label: 'Core Stack' },
]

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-navy">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-accent/[0.04] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      </div>

      <div className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 pt-28 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-8 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <p className="section-label">Portfolio</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-frost sm:text-5xl lg:text-[3.5rem]">
            Arjun{' '}
            <span className="text-accent">Dinesh</span>
          </h1>
          <p className="mt-5 text-lg text-frost/85">
            Software Engineer <span className="text-accent/60">|</span> Laravel Developer
          </p>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            Building scalable web applications using Laravel and modern technologies.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <motion.a href="#projects" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="btn-primary">
              View Projects
            </motion.a>
            <motion.a
              href={cvFile}
              download="Arjun_Dinesh_CV.pdf"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="btn-outline"
            >
              Download CV
            </motion.a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-4 border-t border-frost/8 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-xl font-semibold text-accent sm:text-2xl">{stat.value}</p>
                <p className="mt-1 text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <div className="pointer-events-none absolute -inset-4 rounded-full bg-accent/5 blur-2xl" />
            <img
              src={portrait}
              alt="Arjun Dinesh portrait"
              className="relative block h-[300px] w-auto max-w-[260px] object-contain object-bottom sm:h-[360px] sm:max-w-[300px] md:h-[420px] md:max-w-[340px] lg:h-[520px] lg:max-w-[400px]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
