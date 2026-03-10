import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
      setVisible(true)
    }

    const handleLeave = () => setVisible(false)

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseleave', handleLeave)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <motion.div
      className="cursor-orb"
      animate={{
        opacity: visible ? 1 : 0,
        x: position.x - 12,
        y: position.y - 12,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 28, mass: 0.2 }}
    />
  )
}

export default Cursor
