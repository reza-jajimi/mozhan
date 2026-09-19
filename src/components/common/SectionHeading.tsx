import { motion } from 'framer-motion'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  text?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`section-heading ${align === 'center' ? 'section-heading--center' : ''}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55 }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </motion.div>
  )
}