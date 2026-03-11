import { motion } from 'framer-motion'
import portrait from '../assets/arjun-portrait.jpg.png'
import cvFile from '../assets/Arjun_Dinesh_CV.pdf'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      </div>
      <div className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-6 pt-24 pb-16 md:pt-28 md:pb-20 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-muted">Portfolio</p>
          <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            Arjun Dinesh
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Software Engineer | Laravel Developer
          </p>
          <p className="mt-6 text-base text-muted">
            Building scalable web applications using Laravel and modern technologies.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black"
            >
              <span className="relative z-10">View Projects</span>
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/40 to-white/0 transition group-hover:translate-x-full" />
            </motion.a>
            <motion.a
              href={cvFile}
              download="Arjun_Dinesh_CV.pdf"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:border-white hover:bg-white/10"
            >
              <span className="relative z-10">Download CV</span>
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 transition group-hover:translate-x-full" />
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative overflow-hidden rounded-[32px] /10 bg-white/5 shadow-glow"
          >
            <img
              src={portrait}
              alt="Arjun Dinesh portrait"
              className="h-[300px] w-[240px] object-cover sm:h-[360px] sm:w-[280px] md:h-[420px] md:w-[320px] lg:h-[520px] lg:w-[400px]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
