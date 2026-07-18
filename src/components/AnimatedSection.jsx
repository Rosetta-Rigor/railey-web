import { motion } from 'framer-motion'

export default function AnimatedSection({ children, className = '', style = {} }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={className}
      style={style}
    >
      {children}
    </motion.section>
  )
}
