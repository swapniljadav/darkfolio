'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  yOffset?: number
}

export default function FadeInWhenVisible({
  children,
  className = '',
  delay = 0,
  yOffset = 30,
}: FadeInProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false, // 🔁 trigger every time in view
    threshold: 0.2,
  })

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 })
    } else {
      controls.start({ opacity: 0, y: yOffset })
    }
  }, [inView, controls, yOffset])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={controls}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
